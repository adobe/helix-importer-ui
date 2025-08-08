/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* global WebImporter */

import { loadComponents } from './component.loader.js';

const DEFAULT_SUPPORTED_STYLES = [{ name: 'background-image', exclude: /none/g }];

function deepCloneWithStyles(document, styles = DEFAULT_SUPPORTED_STYLES) {
  const clone = document.cloneNode(true);

  const applyStyles = (nodeSrc, nodeDest) => {
    const style = window.getComputedStyle(nodeSrc, null);

    styles.forEach((s) => {
      if (style[s.name]) {
        if (!s.exclude || !(style[s.name].match(s.exclude))) {
          nodeDest.style[s.name] = style[s.name];
        }
      }
    });

    if (nodeSrc.children && nodeSrc.children.length > 0) {
      const destChildren = [...nodeDest.children];
      [...nodeSrc.children].forEach((child, i) => {
        applyStyles(child, destChildren[i]);
      });
    }
  };
  applyStyles(document.body, clone.body);
  return clone;
}

export default class PollImporter {
  constructor(cfg) {
    this.config = {
      importFileURL: `${cfg.origin}/tools/importer/import.js`,
      poll: true,
      ...cfg,
    };
    this.poll = this.config.poll;
    this.listeners = [];
    this.errorListeners = [];
    this.moduleLoadListener = [];
    this.transformation = {};
    this.projectTransform = null;
    this.projectTransformFileURL = '';
    this.running = false;
    this.usingDefaultTransformer = true;
    this.hasModuleErrors = false;

    this.#init();
  }

  async #loadProjectTransform() {
    /** Helper function to reset the importer to its default state */
    const reset = () => {
      this.usingDefaultTransformer = true;
      this.lastProjectTransformFileBody = '';
      this.projectTransformFileURL = '';
      this.projectTransform = null;
    };

    const $this = this;
    const loadModule = async (projectTransformFileURL) => {
      // if we can load the module, we get the default export and assign it to the projectTransform
      try {
        const mod = await import(projectTransformFileURL);
        if (mod.default) {
          $this.projectTransform = mod.default;
        }
        this.hasModuleErrors = false;
        this.notifyModuleSuccessLoad();
        return true;
      } catch (err) {
        this.hasModuleErrors = true;
        this.notifyModuleLoadError(err);
        return false;
      }
    };

    // do we need to load the default importer file?
    if (this.config.importFileURL === '') {
      const prevUrl = this.projectTransformFileURL;
      const currentUrl = this.config.importFileURL;
      reset();

      this.notifyModuleSuccessLoad();
      // if the urls have changed then we need to reimport.
      return prevUrl !== currentUrl;
    }

    const urlToLoad = `${this.config.importFileURL}?cf=${new Date().getTime()}`;
    let body = '';
    try {
      const response = await fetch(urlToLoad);

      // if we couldn't load the resource then we reset the importer
      if (!response.ok) {
        reset();
        this.hasModuleErrors = true;
        this.notifyModuleLoadError(`${response.statusText} : ${this.config.importFileURL}`);
        return false;
      }

      this.usingDefaultTransformer = false;
      body = await response.text();

      // check to see if the last time we loaded the resource is at all different
      if (body !== this.lastProjectTransformFileBody) {
        this.lastProjectTransformFileBody = body;

        // now load the module and obtain the default export
        const success = await loadModule(urlToLoad);
        if (!success) {
          return false;
        }

        this.projectTransformFileURL = urlToLoad;
        // eslint-disable-next-line no-console
        console.log(`Loaded importer file: ${urlToLoad}`);
        return true;
      }
    } catch (err) {
      // ignore here, we know the file does not exist
      // eslint-disable-next-line no-console
      console.log(`unable to load the url: ${urlToLoad} caused by error ${err}`);
    }

    if (body !== this.lastProjectTransformFileBody) {
      // eslint-disable-next-line no-console
      console.warn(`Importer file does not exist: ${urlToLoad}`);
      this.lastProjectTransformFileBody = body;
      this.projectTransformFileURL = '';
      return true;
    }

    // nothing has changed so we can return false;
    return false;
  }

  async #init() {
    const $this = this;
    const poll = async () => {
      // if the current state is running or if there are module load errors, do not poll
      if ($this.running || $this.hasModuleErrors) {
        return;
      }
      const hasChanged = await $this.#loadProjectTransform();
      if (hasChanged && $this.transformation.url && $this.transformation.document) {
        $this.transform();
      }
    };

    await poll();
    if (!this.projectTransformInterval && this.poll) {
      this.projectTransformInterval = setInterval(poll, 5000);
    }
  }

  async onLoad({ url, document, params }) {
    if (this.projectTransform && this.projectTransform.onLoad) {
      try {
        await this.projectTransform.onLoad({
          url,
          document,
          params,
        });
      } catch (err) {
        this.errorListeners.forEach((listener) => {
          listener({
            url,
            error: err,
            params,
          });
        });
        return false;
      }
    }
    return true;
  }

  async transform() {
    this.running = true;
    const {
      includeDocx, url, document, params, projectType,
    } = this.transformation;

    // eslint-disable-next-line no-console
    console.log(`Starting transformation of ${url} with import file: ${this.projectTransformFileURL || 'none (default)'}`);
    try {
      let results;

      const documentClone = deepCloneWithStyles(document, this.projectTransform?.REQUIRED_STYLES);

      if (includeDocx) {
        const out = await WebImporter.html2docx(
          url,
          documentClone,
          this.projectTransform,
          params,
        );

        results = Array.isArray(out) ? out : [out];
        results.forEach((result) => {
          const { path } = result;
          result.filename = `${path}.docx`;
        });
      } else if (projectType === 'xwalk') {
        try {
          const components = await loadComponents(this.config);
          const out = await WebImporter.md2jcr(
            url,
            documentClone,
            this.projectTransform,
            {
              components,
              ...params,
            },
          );
          out.url = params.originalURL;
          results = Array.isArray(out) ? out : [out];
        } catch (jcrError) {
          // We try to get the markdown output first as it is helpful for
          // debugging the md2jcr conversion
          const mdOut = await WebImporter.html2md(
            url,
            documentClone,
            this.projectTransform,
            params,
          );

          // keep the mdResults for the error listeners
          results = Array.isArray(mdOut) ? mdOut : [mdOut];

          // notify error listeners about the JCR conversion failure, but still
          // return the markdown output
          this.errorListeners.forEach((listener) => {
            listener({
              results,
              url,
              error: jcrError,
              params,
            });
          });

          this.running = false;
          return;
        }
      } else if (projectType === 'json') {
        const out = await WebImporter.html2json(
          url,
          documentClone,
          this.projectTransform,
          params,
        );
        results = Array.isArray(out) ? out : [out];
      } else {
        const out = await WebImporter.html2md(
          url,
          documentClone,
          this.projectTransform,
          params,
        );
        results = Array.isArray(out) ? out : [out];
      }

      this.listeners.forEach((listener) => {
        listener({
          results,
          url,
          params,
        });
      });
    } catch (err) {
      this.errorListeners.forEach((listener) => {
        listener({
          url,
          error: err,
          params,
        });
      });
    }
    this.running = false;
  }

  setTransformationInput({
    url,
    document,
    includeDocx = false,
    params,
    createJCR = false,
    projectType,
  }) {
    this.transformation = {
      url,
      document,
      includeDocx,
      params,
      createJCR,
      projectType,
    };
  }

  async setImportFileURL(importFileURL) {
    this.config.importFileURL = importFileURL;
    await this.#loadProjectTransform();
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  addErrorListener(listener) {
    this.errorListeners.push(listener);
  }

  addModuleLoadListener(listener) {
    this.moduleLoadListener.push(listener);
  }

  notifyModuleLoadError(cause) {
    let error = cause;
    if (typeof cause === 'string') {
      error = new Error(cause);
    }
    // we need to use setTimeout here to make sure the UI has time to setup on initial load
    setTimeout(() => {
      this.moduleLoadListener.forEach((listener) => {
        listener({
          success: false,
          error,
        });
      });
    }, 0);
  }

  notifyModuleSuccessLoad() {
    this.moduleLoadListener.forEach((listener) => {
      listener({ success: true });
    });
  }
}

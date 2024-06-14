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
import TransformFactory from './transformfactory.js';

/* global WebImporter */

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
    this.transformation = {};
    this.projectTransform = null;
    this.projectTransformFileURL = '';
    this.running = false;

    this.#init();
  }

  async #loadProjectTransform() {
    const $this = this;

    if (!this.config.importFileURL) {
      return false;
    }

    const loadModule = async (projectTransformFileURL) => {
      const mod = await import(projectTransformFileURL);
      if (mod.default) {
        const isImportScript = Object.keys(mod.default).some((key) => key === 'transformDOM' || key === 'transform');
        if (isImportScript) {
          $this.projectTransform = mod.default;
        } else {
          // declarative transformation
          $this.projectTransform = TransformFactory.create(mod.default);
        }
      }
    };

    /**
     * Create a project transform from a JSON object
     *
     * @param json Import configuration JSON
     */
    const loadJson = (json) => {
      try {
        const importCfg = JSON.parse(json);
        $this.projectTransform = TransformFactory.create(importCfg);
      } catch (err) {
        console.error('Invalid transformation JSON');
      }
    };

    const isJsonResponse = (response) => {
      const contentType = response.headers.get('content-type');
      return contentType && contentType.includes('application/json');
    };

    const projectTransformFileURL = `${this.config.importFileURL}?cf=${new Date().getTime()}`;
    let body = '';
    try {
      const res = await fetch(projectTransformFileURL);
      body = await res.text();

      if (res.ok && body !== this.lastProjectTransformFileBody) {
        this.lastProjectTransformFileBody = body;
        if (isJsonResponse(res)) {
          loadJson(body);
        } else {
          await loadModule(projectTransformFileURL);
        }
        this.projectTransformFileURL = projectTransformFileURL;
        // eslint-disable-next-line no-console
        console.log(`Loaded importer file: ${projectTransformFileURL}`);
        return true;
      }
    } catch (err) {
      // ignore here, we know the file does not exist
    }
    if (body !== this.lastProjectTransformFileBody) {
      // eslint-disable-next-line no-console
      console.warn(`Importer file does not exist: ${projectTransformFileURL}`);
      this.lastProjectTransformFileBody = body;
      this.projectTransformFileURL = '';
      return true;
    }
    return false;
  }

  async #init() {
    const $this = this;
    const poll = async () => {
      if ($this.running) return;
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
      includeDocx, url, document, params, transform,
    } = this.transformation;

    if (transform) {
      // eslint-disable-next-line no-console
      console.log(`Starting express transformation of ${url}`);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Starting transformation of ${url} with import file: ${this.projectTransformFileURL || 'none (default)'}`);
    }
    try {
      let results;

      const documentClone = deepCloneWithStyles(document, this.projectTransform?.REQUIRED_STYLES);

      if (includeDocx) {
        const out = await WebImporter.html2docx(
          url,
          documentClone,
          transform || this.projectTransform,
          params,
        );

        results = Array.isArray(out) ? out : [out];
        results.forEach((result) => {
          const { path } = result;

          result.filename = `${path}.docx`;
        });
      } else {
        const out = await WebImporter.html2md(
          url,
          documentClone,
          transform || this.projectTransform,
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
    transform,
  }) {
    this.transformation = {
      url,
      document,
      includeDocx,
      params,
      transform,
    };
  }

  async setImportFileURL(importFileURL) {
    this.config.importFileURL = importFileURL || '';
    await this.#loadProjectTransform();
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  addErrorListener(listener) {
    this.errorListeners.push(listener);
  }
}

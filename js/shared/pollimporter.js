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

    this.#init();
  }

  async #init() {
    const $this = this;
    const loadModule = async (projectTransformFileURL) => {
      try {
        const mod = await import(projectTransformFileURL);
        if (mod.default) {
          this.projectTransform = mod.default;
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('failed to load project transform module', err);
      }
    };
    const poll = async () => {
      const projectTransformFileURL = `${this.config.importFileURL}?cf=${new Date().getTime()}`;
      try {
        const res = await fetch(projectTransformFileURL);
        const body = await res.text();

        if (body !== $this.lastProjectTransformFileBody) {
          $this.lastProjectTransformFileBody = body;
          await loadModule(projectTransformFileURL);
          if ($this.transformation.url && $this.transformation.document) {
            $this.transform();
          }
        }
      } catch (err) {
        if ($this.lastProjectTransformFileBody !== 'nofilefound') {
          // eslint-disable-next-line no-console
          console.warn('failed to poll project transform module', err);
          $this.lastProjectTransformFileBody = 'nofilefound';
          if ($this.transformation.url && $this.transformation.document) {
            $this.transform();
          }
        }
      }
    };

    if (!this.projectTransformInterval) {
      await poll();
      if (this.poll) {
        this.projectTransformInterval = setInterval(poll, 5000);
      }
    }
  }

  async transform() {
    const {
      includeDocx, url, document, params,
    } = this.transformation;

    try {
      let results;
      if (includeDocx) {
        const out = await WebImporter.html2docx(
          url,
          document,
          this.projectTransform,
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
          document,
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
  }

  setTransformationInput({
    url,
    document,
    includeDocx = false,
    params,
  }) {
    this.transformation = {
      url,
      document,
      includeDocx,
      params,
    };
  }

  setImportFileURL(importFileURL) {
    this.config.importFileURL = importFileURL;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  addErrorListener(listener) {
    this.errorListeners.push(listener);
  }
}

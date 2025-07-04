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

import { toHtml } from 'hast-util-to-html';
import { IDSlugger } from '@adobe/helix-html-pipeline/src/utils/id-slugger.js';
import html from '@adobe/helix-html-pipeline/src/steps/make-html.js';
import parseMarkdown from '@adobe/helix-html-pipeline/src/steps/parse-markdown.js';
import split from '@adobe/helix-html-pipeline/src/steps/split-sections.js';
import fixSections from '@adobe/helix-html-pipeline/src/steps/fix-sections.js';
import createPageBlocks from '@adobe/helix-html-pipeline/src/steps/create-page-blocks.js';

/**
 * Convert markdown to HTML
 * @param {string} md - The markdown to convert
 * @param {boolean} da - Whether to convert to DA compliant HTML
 * @returns {string} The converted HTML
 */
function md2htmlInternal(md, da = false) {
  const state = { content: { data: md, slugger: new IDSlugger() } };

  parseMarkdown(state);

  if (da) { // split sections (get rid of <hr> and create div nesting)
    split(state);
  }

  html(state);

  if (da) { // convert <table> structure into <div> structure
    fixSections(state);
    createPageBlocks(state);
  }

  return toHtml(state.content.hast, {
    upperDoctype: true,
  });
}

/**
 * Convert markdown to DA compliant HTML.
 * @param {string} md - The markdown to convert
 * @returns {string} The DA compliant HTML
 */
function md2da(md) {
  return md2htmlInternal(md, true);
}

/**
 * Convert markdown to HTML
 * @param {string} md - The markdown to convert
 * @returns {string} The HTML
 */
function md2html(md) {
  return md2htmlInternal(md, false);
}

export { md2da, md2html };

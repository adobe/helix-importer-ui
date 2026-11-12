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
import { fromHtml } from 'hast-util-from-html';
import { IDSlugger } from '@adobe/helix-html-pipeline/src/utils/id-slugger.js';
import html from '@adobe/helix-html-pipeline/src/steps/make-html.js';
import parseMarkdown from '@adobe/helix-html-pipeline/src/steps/parse-markdown.js';
import split from '@adobe/helix-html-pipeline/src/steps/split-sections.js';
import fixSections from '@adobe/helix-html-pipeline/src/steps/fix-sections.js';
import createPageBlocks from '@adobe/helix-html-pipeline/src/steps/create-page-blocks.js';

const textOf = (node) => (node.type === 'text' ? node.value : (node.children || []).map(textOf).join(''));

const walk = (node, fn) => {
  fn(node);
  (node.children || []).forEach((child) => walk(child, fn));
};

const normalizeAlt = (alt) => (alt || '').replace(/\s+/g, ' ').trim();

const decode = (uri) => {
  try {
    return decodeURI(uri);
  } catch (e) {
    return uri;
  }
};

const linkKey = (node) => JSON.stringify([
  decode(node.properties?.href || ''),
  node.properties?.title || '',
  textOf(node).trim(),
]);

const isEl = (node, tag) => node.type === 'element' && node.tagName === tag;

function collectSource(source) {
  const info = { links: new Map(), images: [] };
  if (!source) {
    return info;
  }
  walk(fromHtml(source), (node) => {
    if (isEl(node, 'a') && node.properties?.href) {
      const key = linkKey(node);
      info.links.set(key, [...(info.links.get(key) || []), node.properties.dataEditAs === 'image']);
    } else if (isEl(node, 'img')) {
      info.images.push(node.properties || {});
    }
  });
  return info;
}

/**
 * Convert markdown to HTML
 * @param {string} md - The markdown to convert
 * @param {string} [sourceHtml] - The intermediate HTML, used to restore DA attributes
 * @param {boolean} da - Whether to convert to DA compliant HTML
 * @returns {string} The converted HTML
 */
function md2htmlInternal(md, da = false, sourceHtml = '') {
  const state = { content: { data: md, slugger: new IDSlugger() } };

  parseMarkdown(state);

  const source = da ? collectSource(sourceHtml) : null;
  if (da) { // split sections (get rid of <hr> and create div nesting)
    split(state);
  }

  html(state);

  if (da) {
    const images = [];
    const seen = new Map();
    walk(state.content.hast, (node) => {
      if (isEl(node, 'a') && node.properties?.href) {
        const key = linkKey(node);
        const n = seen.get(key) || 0;
        seen.set(key, n + 1);
        if (source.links.get(key)?.[n]) {
          node.properties.dataEditAs = 'image';
        }
      } else if (isEl(node, 'img')) {
        images.push(node);
      }
    });
    if (images.length === source.images.length) {
      images.forEach((img, i) => {
        const { dataFocalX, dataFocalY, alt } = source.images[i];
        if (dataFocalX != null && dataFocalY != null && normalizeAlt(alt) === normalizeAlt(img.properties.alt)) {
          img.properties.dataFocalX = dataFocalX;
          img.properties.dataFocalY = dataFocalY;
        }
      });
    }
  }

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
 * @param {object} [options]
 * @param {string} [options.html] - The intermediate HTML; image links marked
 * data-edit-as="image" and images with
 * data-focal-x/y keep those attributes in the output
 * @returns {string} The DA compliant HTML
 */
function md2da(md, { html: sourceHtml } = {}) {
  return md2htmlInternal(md, true, sourceHtml);
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

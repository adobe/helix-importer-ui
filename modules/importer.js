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
/* eslint-disable class-methods-use-this, no-console */

import {
  DOMUtils,
  FileUtils,
  Loader,
  Blocks,
  html2docx,
  html2md,
  rules,
} from '@adobe/helix-importer';

import docxStylesXML from '../resources/styles.xml';

const options = {
  docxStylesXML,
  image2png: async ({ src, data, type }) => {
    const img = new Image();
    const blob = new Blob([data], { type });
    img.src = URL.createObjectURL(blob);
    img.crossOrigin = 'anonymous';
    await img.decode();

    let width = img.naturalWidth;
    let height = img.naturalHeight;

    // for some svgs, the natural width / height are not correctly computed
    if (type === 'image/svg+xml') {
      const parser = new DOMParser();
      const svg = data.toString('utf-8');
      const svgDoc = parser.parseFromString(svg, 'text/html');
      const svgTag = svgDoc.querySelector('svg');
      const viewBox = svgTag?.getAttribute('viewBox');
      if (viewBox) {
        const [, , w, h] = viewBox.split(' ').map(Number);
        if (w > img.naturalWidth || h > img.naturalHeight) {
          width = w;
          height = h;
        }
      }
    }

    width = Math.round(width);
    height = Math.round(height);

    // note: OffscreenCanvas is not supported on safari
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext('2d');
    try {
      ctx.drawImage(img, 0, 0);
      const newBlob = await canvas.convertToBlob();
      return {
        data: newBlob.arrayBuffer(),
        width,
        height,
        type: 'image/png',
      };
    } catch (e) {
      console.warn(`Cannot convert image ${src} to png. It might corrupt the Word document and you should probably remove it from the DOM.`);
      return null;
    }
  },
};

async function html2mdWrapper(url, document, transformCfg, params) {
  return html2md(url, document, transformCfg, options, params);
}

async function html2docxWrapper(url, document, transformCfg, params) {
  return html2docx(url, document, transformCfg, options, params);
}

export { default as md2html } from './md2html.js';

export {
  Blocks,
  DOMUtils,
  Loader,
  FileUtils,
  html2mdWrapper as html2md,
  html2docxWrapper as html2docx,
  rules,
};

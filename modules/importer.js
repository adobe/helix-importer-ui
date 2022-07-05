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
  Blocks,
  html2docx,
  html2md,
} from '@adobe/helix-importer';

import docxStylesXML from '../resources/styles.xml';

const options = {
  docxStylesXML,
  svg2png: async (svg) => new Promise((resolve) => {
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.src = svgUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');

      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svg, 'text/html');

      const svgTag = svgDoc.querySelector('svg');
      const viewBox = svgTag?.getAttribute('viewBox');

      let width = img.naturalWidth;
      let height = img.naturalHeight;
      if (viewBox) {
        const [, , w, h] = viewBox.split(' ').map(Number);
        if (w > img.naturalWidth || h > img.naturalHeight) {
          // for some svgs, the natural width / height are not correctly computed
          width = w;
          height = h;
        }
      }

      canvas.width = width;
      canvas.height = height;
      img.width = width;
      img.height = height;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
      }
      const canvasData = canvas.toDataURL('image/png');
      const canvas64 = canvasData.replace(/^data:image\/(png|jpg);base64,/, '');
      resolve(canvas64);
    };
  }),
};

async function html2mdWrapper(url, document, transformCfg, params) {
  return html2md(url, document, transformCfg, options, params);
}

async function html2docxWrapper(url, document, transformCfg, params) {
  return html2docx(url, document, transformCfg, options, params);
}

export {
  Blocks,
  DOMUtils,
  html2mdWrapper as html2md,
  html2docxWrapper as html2docx,
};

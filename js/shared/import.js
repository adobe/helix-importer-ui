/*
 * Copyright 2024 Adobe. All rights reserved.
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
/**
 * Return a path that describes the document being transformed (file name, nesting...).
 * The path is then used to create the corresponding Word document.
 * @param {String} url The url of the document being transformed.
 * @param {HTMLDocument} document The document
 */
// TODO: add to import config
// eslint-disable-next-line arrow-body-style
const generateDocumentPath = ({ url }) => {
  let p = new URL(url).pathname;
  if (p.endsWith('/')) {
    p = p.slice(0, -1);
  }
  return decodeURIComponent(p)
    .toLowerCase()
    .replace(/\.html$/, '')
    .replace(/[^a-z0-9/]/gm, '-');
};

const createImporter = (rules) => ({
  transform: (source) => {
    const element = WebImporter.Transformer.transform(rules, source);
    return [{
      element,
      path: generateDocumentPath(source),
    }];
  },
});

export default createImporter;

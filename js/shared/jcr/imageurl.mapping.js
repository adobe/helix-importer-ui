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

// Regex for inline images & reference-style images
// 1. inline images: ![Alt text](url "title")
// 2. reference-style images: ![Alt text][ReferenceLabel]
const imageRegex = /!\[([^\]]*)]\(([^) "]+)(?: *"([^"]*)")?\)|!\[([^\]]*)]\[([^\]]+)]/g;

// Regex for reference definitions
const referenceRegex = /\[([^\]]+)]:\s*(\S+)/g;

/**
 * Function to find reference definitions in a markdown file.
 *
 * @param markdownContent - The content of the markdown file
 * @returns {{}} A map of reference definitions
 */
const findReferenceDefinitionsInMarkdown = (markdownContent) => {
  const references = {};
  let match;
  // eslint-disable-next-line no-cond-assign
  while ((match = referenceRegex.exec(markdownContent)) !== null) {
    // eslint-disable-next-line prefer-destructuring
    references[match[1]] = match[2]; // Map: referenceLabel -> URL
  }
  return references;
};

/**
 * Function to scan for images in a markdown file.
 *
 * @param markdownContent - The content of the markdown file
 * @returns {Array} an array of image urls
 */
const findImagesInMarkdown = (markdownContent) => {
  const references = findReferenceDefinitionsInMarkdown(markdownContent);

  // Create a new Map
  const imageUrls = new Map();

  // Identify each image url in the markdown content
  let match;
  // eslint-disable-next-line no-cond-assign
  while ((match = imageRegex.exec(markdownContent)) !== null) {
    let url;
    if (match[2]) { // Inline image
      // eslint-disable-next-line prefer-destructuring
      url = match[2];
    } else if (match[5]) { // Reference-style image
      url = references[match[5]] || null; // Resolve URL from reference map
    }
    if (url) {
      imageUrls.set(url, '');
    }
  }
  return imageUrls;
};

/**
 * Get the list image urls present in the given markdown.
 * @param {string} markdownContent
 * @returns {Array} An array of image urls as key (but empty values - will be populated later).
 */
const getImageUrlMap = (markdownContent) => {
  try {
    return findImagesInMarkdown(markdownContent);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Error in image urls from markdown:', error);
    return [];
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getImageUrlMap,
};

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

const FREE_MAPPING_TYPE = 'free';

const MAX_CLASSES_PER_ELEMENT = 4;

const LOCAL_STORAGE_KEY = 'helix-importer-sections-mapping';

/**
 * Default mappings configuration. This is used to display the mappings in the UI, and to keep
 * the saved values sorted first.
 */
const defaultFreeMappingsConfiguration = [
  [
    { label: 'Root', attributes: { value: 'root' } },
    { label: 'Exclude', attributes: { value: 'exclude' } },
  ],
  [
    { label: 'Columns', attributes: { value: 'columns' } },
    { label: 'Hero', attributes: { value: 'hero' } },
    { label: 'Cards', attributes: { value: 'cards' } },
    { label: 'Carousel', attributes: { value: 'carousel' } },
    { label: 'Text', attributes: { value: 'text' } },
    { label: 'Tabs', attributes: { value: 'tabs' } },
  ],
];

// Keep a cache to reduce localstorage access.
let mappingDataCache = {};

const isFreeMappingType = (mapping) => mapping.detectionType === FREE_MAPPING_TYPE;

const isDefaultMapping = (mapping) => defaultFreeMappingsConfiguration
  .flat()
  .map((dm) => dm?.attributes.value).includes(mapping.mapping) || !!mapping.xpath;

/**
 * Arrange the mappings to have the 'default' mappings first (without changing their order) and
 * the rest of the mappings (like metadata) after.
 * @param mappings
 * @returns {*[]}
 */
const arrangeFreeMappings = (mappings) => {
  const defaultMappings = mappings.filter((m) => isDefaultMapping(m));
  const otherMappings = mappings.filter((m) => !isDefaultMapping(m));
  return [...defaultMappings, ...otherMappings];
};

// Build a selector for the element.
function buildSelector(element) {
  if (!element) {
    return '';
  }

  if (element.nodeName === 'BODY') {
    return ':scope';
  }

  const id = element.getAttribute('id');
  let classes = element?.className.trim().replaceAll(' ', '.');
  while (classes.includes('..')) {
    classes = classes.replaceAll('..', '.');
  }
  let selector = '';
  if (id && id.length > 0) {
    selector = `#${id}`;
  }
  if (classes && classes.length > 0) {
    const split = classes.split('.');
    if (split.length > MAX_CLASSES_PER_ELEMENT) {
      classes = split.slice(0, MAX_CLASSES_PER_ELEMENT).join('.');
    }
    selector += `.${classes}`;
  }
  if (selector.length > 0) {
    return selector;
  }

  // Last resort - use the node name, and immediate child specification.
  return element ? element.nodeName : '';
}

function buildSelectorWithDepth(element, depth, offset) {
  const correctedDepth = Math.max(depth, 0);
  let selector = buildSelector(element);
  let parent = element.parentNode;
  let actualDepth = 1;
  for (let i = 1; i < correctedDepth; i += 1) {
    selector = `${buildSelector(parent)} ${selector}`;
    actualDepth += 1;
    if (parent.nodeName === 'BODY') {
      break;
    }
    parent = parent.parentNode;
  }
  let newSelector = selector.trim();

  const selectorParts = newSelector.split(' ');
  if (offset > 0 && offset < selectorParts.length) {
    selectorParts.splice(selectorParts.length - offset, offset);
    newSelector = selectorParts.join(' ');
  }

  if (actualDepth < correctedDepth && newSelector.includes(':scope')) {
    newSelector = newSelector.replaceAll(' ', ' > ');
  }

  return newSelector;
}

/**
 * Retrieve the Mapping for the provided URL from the local-storage.  A mapping is an array with
 * objects that contain:
 * - identifiers
 *   - xpath:  xpath of the box in the DOM
 *   - id: id, if available, of the box
 *   - classes: all the classes, if available, of the box
 * - boxId
 * - numCols
 * - numRows
 * - color
 * - mapping (block name)
 * @param url The current URL
 * @returns {*[]} Return the mapping as an array (not string). An empty array is
 *                     returned if the URL has no data.
 */
const getFreeSelectionsMapping = (url) => {
  if (mappingDataCache?.url === url) {
    return mappingDataCache.mappings;
  }

  try {
    const allMappings = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!url) {
      // Do not cache mappings without a URL.
      return allMappings ?? [];
    }
    mappingDataCache = { url, mappings: [] };
    if (allMappings) {
      if (Array.isArray(allMappings)) {
        const urlMapping = allMappings.find((sm) => sm.url === url && isFreeMappingType(sm));
        if (urlMapping) {
          mappingDataCache.mappings = urlMapping.mapping ?? [];
        }
      } else if (allMappings.url && allMappings.url === url && isFreeMappingType(allMappings)) {
        // Handle the old way (single url saved)
        mappingDataCache.mappings = allMappings.mapping ?? [];
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Error loading sections mapping data for url ${url}`, e);
  }

  return mappingDataCache.mappings;
};

/**
 * Write (or overwrite) the Mapping for the provided (base?) URL to the local-storage while
 * maintaining the mappings for other URLs.
 * @param url The current URL
 * @param mappings the mappings to store (component id to block name)
 * @returns void
 */
const saveFreeSelectionsMapping = (url, mappings) => {
  // Reset cache
  mappingDataCache = {};

  // Arrange mappings so 'move-up' will work correctly.
  const arrangedMappings = arrangeFreeMappings(mappings);

  try {
    let allMappings = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (allMappings && Array.isArray(allMappings)) {
      const index = allMappings.findIndex((sm) => sm.url === url && isFreeMappingType(sm));
      if (index >= 0) {
        if (mappings.length === 0) {
          allMappings.splice(index, 1);
        } else {
          allMappings[index].mapping = arrangedMappings;
        }
      } else {
        allMappings.push({
          url,
          detectionType: FREE_MAPPING_TYPE,
          mapping: arrangedMappings,
        });
      }
    } else {
      // Local-Storage was empty or contained the old one-url way, just write the whole mapping.
      allMappings = [{
        url,
        detectionType: FREE_MAPPING_TYPE,
        mapping: arrangedMappings,
      }];
    }

    // save mapping data
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allMappings));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Error saving sections mapping data for url ${url}`, e);
  }
};

export {
  defaultFreeMappingsConfiguration,
  buildSelector,
  buildSelectorWithDepth,
  isDefaultMapping,
  getFreeSelectionsMapping,
  saveFreeSelectionsMapping,
};

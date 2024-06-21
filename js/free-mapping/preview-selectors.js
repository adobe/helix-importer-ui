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

import {
  getXPath,
  getCurrentURL,
} from '../shared/utils.js';
import { DEFAULT_COLORS } from '../shared/color.js';
import {
  CLICK_CONTAINERS,
  createMappingRow,
  handleRowData,
  FREE_MAPPING_EDITOR_SECTIONS,
  setSelectorHelperText, FREE_MAPPING_EDITOR_HEADER,
} from './free.mapping.row.js';
import {
  buildSelector,
  getFreeSelectionsMapping,
  isDefaultMapping,
  saveFreeSelectionsMapping,
} from './free.mapping.utils.js';
import { SPTABS } from '../shared/ui.js';

const TRUST_NODE_ID = true;

function getMappingRowFromTarget(target) {
  const rows = [...FREE_MAPPING_EDITOR_SECTIONS.querySelectorAll('.row')];
  const targetXPath = getXPath(target, document, false);
  return rows.find((r) => {
    const { xpath } = handleRowData(r);
    return xpath === targetXPath;
  });
}

function createNewMapping(target, targetSelector, count) {
  let nextSlot = count;
  if (nextSlot === undefined) {
    nextSlot = FREE_MAPPING_EDITOR_SECTIONS.querySelectorAll('.row').length + 1;
  } else {
    nextSlot += 1;
  }
  return {
    id: `box-${Date.now()}-${Math.floor(Math.random() * (1000)) + 1}`,
    selector: targetSelector,
    mapping: undefined,
    xpath: getXPath(target, document),
    layout: { numCols: 1, numRows: 1 },
    color: DEFAULT_COLORS[nextSlot % DEFAULT_COLORS.length].toRGBA(),
    precision: 1,
    offset: 0,
  };
}

function handleBodyMouseClick(event) {
  SPTABS.selected = 'mapping-editor';

  // Prevent clicking to navigate away from this page.
  event.stopPropagation();
  event.preventDefault();

  const currentURL = getCurrentURL();
  let containerTarget = event.target;
  // If already at a container, see if there are legit child containers.
  if (CLICK_CONTAINERS.includes(containerTarget.tagName)) {
    const tagName = containerTarget.children[0]?.tagName;
    while (containerTarget.children.length === 1 && CLICK_CONTAINERS.includes(tagName)) {
      // eslint-disable-next-line prefer-destructuring
      containerTarget = containerTarget.children[0];
      if (TRUST_NODE_ID && containerTarget.getAttribute('id')) {
        break;
      }
    }
  } else {
    while (containerTarget && !CLICK_CONTAINERS.includes(containerTarget.tagName)) {
      containerTarget = containerTarget.parentElement;
    }
  }

  let mappingData = {};
  const mappingRow = getMappingRowFromTarget(containerTarget);
  if (mappingRow) {
    mappingData = handleRowData(mappingRow);
    mappingRow.classList.add('highlight');
    setTimeout(() => mappingRow.classList.remove('highlight'), 750);
  }

  let target = containerTarget;
  if (event.altKey) {
    let parentDepth = 1;
    if (mappingRow) {
      mappingData.count += 1;
      parentDepth = mappingData.count;
    }
    for (let i = 0; i < parentDepth; i += 1) {
      target = target.parentElement;
    }
  }

  if (!target) {
    target = containerTarget;
  }

  const targetSelector = buildSelector(target);
  const mappings = getFreeSelectionsMapping(currentURL) || [];
  let currentMapping = mappings.find((m) => m.id === mappingData?.sectionId);
  const newMapping = !currentMapping;
  if (newMapping) {
    currentMapping = createNewMapping(target, targetSelector);
    mappings.push(currentMapping);
  }
  if (event.shiftKey) {
    // Shift key, so reset the selector.
    currentMapping.selector = buildSelector(target);
    currentMapping.precision = 1;
    currentMapping.offset = 0;
  } else if (event.ctrlKey) {
    // Ctrl key, delete mapping
    mappings.splice(mappings.indexOf(currentMapping), 1);
    mappingRow.remove();
    target.dataset.boxData = '';
    saveFreeSelectionsMapping(getCurrentURL(), mappings);
    target.style.border = 'initial';
    return;
  }

  // console.log('Latest selector is:', JSON.stringify(currentMapping, undefined, 2));

  // Reset the UI.
  if (newMapping) {
    const row = createMappingRow(currentMapping, FREE_MAPPING_EDITOR_SECTIONS.children.length);
    FREE_MAPPING_EDITOR_SECTIONS.appendChild(row);
  } else {
    const selector = mappingRow.querySelector('#sec-dom-selector');
    if (selector) {
      selector.value = currentMapping.selector;
    }
    const precision = mappingRow.querySelector('#sec-dom-precision');
    if (precision) {
      precision.value = currentMapping.precision;
    }
    setSelectorHelperText(mappingRow, currentMapping.selector);
  }

  // Save the new mapping to local storage and the element's data attribute.
  target.dataset.boxData = JSON.stringify(currentMapping);
  saveFreeSelectionsMapping(getCurrentURL(), mappings);

  target.style.border = `4px solid ${currentMapping.color}`;
}

const preparePagePreview = async (src, frame) => {
  const { originalURL } = frame.dataset;

  // The user has chosen to pick sections manually so load the preview pane, ready the click
  // handlers, etc.
  // eslint-disable-next-line no-console
  console.log('import-sm-free-selections', true);

  frame.contentWindow.document.body.addEventListener('click', handleBodyMouseClick);

  FREE_MAPPING_EDITOR_HEADER.children[0].classList.add('hidden');
  FREE_MAPPING_EDITOR_HEADER.children[1].classList.remove('hidden');

  // Reset the non-customized block mappings.
  const mappingUIData = getFreeSelectionsMapping(originalURL);
  FREE_MAPPING_EDITOR_SECTIONS.querySelectorAll('.row').forEach((r) => r.remove());
  mappingUIData.filter((md) => isDefaultMapping(md))
    .forEach((m) => {
      const row = createMappingRow(m, FREE_MAPPING_EDITOR_SECTIONS.children.length);
      FREE_MAPPING_EDITOR_SECTIONS.appendChild(row);
    });
};

export {
  // eslint-disable-next-line import/prefer-default-export
  preparePagePreview,
};

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
import alert from '../../shared/alert.js';
import { createElement } from '../../shared/utils.js';
import { getContentFrame } from '../../shared/ui.js';
import {
  getFreeSelectionsMapping,
  saveFreeSelectionsMapping,
} from '../free-mapping/free.mapping.utils.js';
import { getRowDeleteButton, handleRowData } from '../free-mapping/free.mapping.row.js';

const customizedFields = {
  metadata: ['name', 'value', 'condition'],
};

/**
 * Get the current URL.  User can change from time to time.
 * @returns {string}
 */
const getCurrentURL = () => {
  const frame = getContentFrame();
  const { originalURL } = frame.dataset;
  return originalURL;
};

const addBlankRowIfRequired = (viewDiv, addButton) => {
  const textFields = [...viewDiv.querySelectorAll('.row:not(.header) sp-textfield')];
  if (textFields.length === 0) {
    // If no rows, add one to lead the user after UI resets.
    addButton.click();
  }
};

/**
 * Either find the matching mapping and update it, create a brand new one or indicate that there
 * is a duplicate.
 * @param event
 * @param view
 */
const updateCustomizedMapping = (event, view) => {
  if (event.target.value === undefined) {
    return;
  }
  const originalURL = getCurrentURL();

  const mappingData = getFreeSelectionsMapping(originalURL);

  const row = event.target.parentElement;
  const { customId } = handleRowData(row);
  const mItem = mappingData.find((m) => m.id === customId) ?? {};
  const fields = customizedFields[view];
  fields.forEach((attr) => {
    mItem[attr] = row.querySelector(`.${view}-row-${attr}`).value;
  });

  // Check for duplicate
  const dup = mappingData.some((md) => {
    if (md.mapping === view && md.id !== customId) {
      let duplicate = true;
      fields.forEach((attr) => {
        duplicate = duplicate && md[attr] === mItem[attr];
      });
      return duplicate;
    }
    return false;
  });
  if (dup) {
    alert.error('This value already exists. The change was not saved.');
    return;
  }

  // Fill in the properties on a new item, and push to mapping data.
  if (!mItem.id) {
    mItem.id = customId;
    mItem.mapping = view;
    mappingData.push(mItem);
  }

  saveFreeSelectionsMapping(originalURL, mappingData);
};

/**
 * Get the elements required to create a customized row in the UI.  Set values if given.  The caller
 * is to append it to whatever element they deem suitable.
 * @param url
 * @param mapping
 * @param view
 * @returns {any}
 */
const getCustomizationRow = (url, mapping, view) => {
  const divProps = { class: 'row' };
  const customizationRow = createElement('div', divProps);

  const fields = customizedFields[view];
  if (fields.includes('name')) {
    const nameField = createElement(
      'sp-textfield',
      {
        class: `${view}-row-name`,
        placeHolder: `Enter ${view} name`,
        value: mapping.name ?? '',
      },
    );
    customizationRow.append(nameField);
    nameField.addEventListener('change', (e) => {
      updateCustomizedMapping(e, view);
    });
  }
  const valueField = createElement(
    'sp-textfield',
    {
      class: `${view}-row-value`,
      placeHolder: `Enter ${view} value`,
      value: mapping.value ?? '',
    },
  );
  const urlField = createElement(
    'sp-textfield',
    {
      class: `${view}-row-condition`,
      placeHolder: 'Enter condition',
      value: mapping.condition ?? '*',
    },
  );

  const delButton = getRowDeleteButton(url);
  customizationRow.append(valueField, urlField, delButton);
  valueField.addEventListener('change', (e) => {
    updateCustomizedMapping(e, view);
  });
  urlField.addEventListener('change', (e) => {
    updateCustomizedMapping(e, view);
  });

  handleRowData(customizationRow, { customId: mapping.id });

  return customizationRow;
};

/**
 * After the mappings are read in, and the detection has been run, set up the custom
 * mappings in the provided tab.
 * @param importURL
 * @param blockType (currently, just 'metadata' for now)
 * @param viewDiv
 * @param viewSection
 * @param addButton
 */
const initializeCustomizationView = (
  importURL,
  blockType,
  viewDiv,
  viewSection,
  addButton,
) => {
  const mappingData = getFreeSelectionsMapping(importURL);
  if (document.getElementById('sm-customization-details')) {
    document.getElementById('sm-customization-details').remove();
  }
  const allHidden = document.getElementById('customization-editor-tabs').parentElement.querySelectorAll('[class~="hidden"]');
  allHidden.forEach((he) => {
    he.classList.remove('hidden');
  });
  viewDiv.querySelectorAll('div.row:not(.header)').forEach((mr) => mr.remove());
  addButton?.addEventListener('click', () => {
    if (!viewDiv) {
      return;
    }

    // If there are non-finished rows, do not add another one - focus the first empty field found.
    const textFields = [...viewDiv.querySelectorAll('.row:not(.header) sp-textfield')];
    if (textFields.length > 0) {
      const emptyTextField = !!textFields && textFields.find((tf) => tf.value.trim() === '');
      if (emptyTextField) {
        emptyTextField.focus();
        alert.warning(`Please complete all ${blockType} mappings already present.`);
        return;
      }
    }

    // Add a new customized row.
    const newId = `custom-${Date.now()}-${Math.floor(Math.random() * (1000)) + 1}`;
    viewSection.appendChild(
      getCustomizationRow(
        getCurrentURL(),
        { id: newId },
        blockType,
      ),
    );
  });

  // Display existing customized values
  const customizedMappings = mappingData.filter((md) => md.mapping === blockType);
  if (customizedMappings.length > 0) {
    customizedMappings.forEach((mapping) => {
      const row = getCustomizationRow(
        importURL,
        mapping,
        blockType,
      );
      viewSection.appendChild(row);
    });
  }

  // Add a blank row when activated - ensure a blank one doesn't already exist.
  // document.getElementById('customization-trigger')
  //   .addEventListener('click', () => addBlankRowIfRequired(viewDiv, addButton));

  // Select the first tab if one isn't already selected - second rank tabs do not
  // seem to be pre-selected.
  const tabTrigger = document.getElementById('customization-trigger');
  const tabs = [...document.getElementById('customization-editor-tabs').querySelectorAll('sp-tab')];
  if (!tabTrigger.selected || !tabs.find((tab) => tab.selected)) {
    document.getElementById('first-customization-tab').click();
    addBlankRowIfRequired(viewDiv, addButton);
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  initializeCustomizationView,
};

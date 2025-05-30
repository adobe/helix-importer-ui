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

import alert from '../shared/alert.js';
import ImportStatus from './import.result.js';

const BULK_URLS_HEADING = document.querySelector('#import-result h2');
const BULK_URLS_LIST = document.querySelector('#import-result ul');

const clearBulkResults = () => {
  if (BULK_URLS_LIST) {
    BULK_URLS_LIST.textContent = '';
  }
  if (BULK_URLS_HEADING) {
    BULK_URLS_HEADING.textContent = 'Importing...';
  }
};

const setupBulkUI = () => {
  const urlsFields = document.querySelector('#import-urls');

  const updateUrlLabel = (initial = false) => {
    const urlsArray = urlsFields.value.split('\n').reverse().filter((u) => u.trim() !== '');
    if (urlsArray) {
      const accordionItem = document.querySelector('sp-accordion-item');
      if (urlsArray.length <= 20 && initial) {
        accordionItem.open = true;
      } else {
        const accordionItem2 = document.querySelector('sp-accordion-item:nth-child(2)');
        accordionItem2.open = true;
      }
      accordionItem.label = `URLs (${urlsArray.length})`;
    }
  };

  urlsFields.addEventListener('change', updateUrlLabel);
  updateUrlLabel(true);
};

const updateBulkResults = (results, originalURL) => {
  const importStatus = ImportStatus.getStatus();

  try {
    const status = results.length > 0 && results[0].status ? results[0].status.toLowerCase() : 'success';
    const li = document.createElement('li');
    const link = document.createElement('sp-link');
    link.setAttribute('size', 'm');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', originalURL);
    link.textContent = originalURL;
    li.append(link);

    let name = 'sp-icon-checkmark-circle';
    let label = 'Success';
    if (status === 'redirect') {
      name = 'sp-icon-alias';
      label = 'Redirect';
    } else if (status === 'error') {
      name = 'sp-icon-alert';
      label = 'Error';
    }

    const icon = document.createElement(name);
    icon.setAttribute('label', label);
    li.append(icon);

    BULK_URLS_LIST.append(li);

    BULK_URLS_HEADING.innerText = `Imported URLs (${importStatus.imported} / ${importStatus.total}) - Elapsed time: ${ImportStatus.duration()}`;

    if (ImportStatus.isFinished()) {
      alert.success('Bulk import completed');
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error while updating the UI: ${err.message}`, err);
  }
};

export {
  updateBulkResults,
  clearBulkResults,
  setupBulkUI,
};

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

const updateBulkResults = (results, originalURL, importStatus) => {
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

    const totalTime = Math.round((new Date() - importStatus.startTime) / 1000);
    let timeStr = `${totalTime}s`;
    if (totalTime > 60) {
      timeStr = `${Math.round(totalTime / 60)}m ${totalTime % 60}s`;
      if (totalTime > 3600) {
        timeStr = `${Math.round(totalTime / 3600)}h ${Math.round((totalTime % 3600) / 60)}m`;
      }
    }

    BULK_URLS_HEADING.innerText = `Imported URLs (${importStatus.imported} / ${importStatus.total}) - Elapsed time: ${timeStr}`;

    if (importStatus.urls.length === 0) {
      alert.info('Bulk import completed');
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error while updating the UI: ${err.message}`, err);
  }
};

export {
  updateBulkResults,
  clearBulkResults,
};

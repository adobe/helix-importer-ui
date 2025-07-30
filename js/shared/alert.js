/*
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const ALERT = document.getElementById('alert-container');

const doAlert = (message, variant, details) => {
  const toast = document.createElement('sp-toast');
  toast.setAttribute('timeout', 1);
  toast.setAttribute('variant', variant);
  toast.setAttribute('open', true);
  if (details) {
    toast.innerHTML = `
        ${message}
        <sp-button
            id="alertDetailsTrigger" 
            slot="action"
            static="white"
            variant="secondary"
            treatment="outline">
            Details
        </sp-button>
    `;
  } else {
    toast.textContent = message;
  }

  toast.addEventListener('close', () => {
    toast.remove();
  });

  if (ALERT.hasChildNodes()) {
    ALERT.childNodes.forEach((node) => {
      node.remove();
    });
  }

  ALERT.append(toast);

  if (details) {
    const overlay = document.createElement('sp-overlay');
    overlay.setAttribute('trigger', 'alertDetailsTrigger@click');
    overlay.setAttribute('type', 'modal');
    overlay.innerHTML = `
        <sp-dialog-wrapper headline="Details" dismissable underlay>
            <p>${details}</p>
        </sp-dialog-wrapper>
    `;
    ALERT.append(overlay);
  }
};

const success = (message, details) => {
  doAlert(message, 'positive', details);
};

const error = (message, details) => {
  doAlert(message, 'negative', details);
};

const info = (message, details) => {
  doAlert(message, 'info', details);
};

const warning = (message, details) => {
  doAlert(message, 'warning', details);
};

export default {
  success,
  error,
  info,
  warning,
};

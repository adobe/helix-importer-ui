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
/**
 * Listen for changes to the jcr fields. If the field becomes invalid, then
 * call the invalid callback. If the field becomes valid, then call the valid callback.
 * @param parent The parent element to use to query the field changes on.
 * @param invalid The callback to call when the field becomes invalid.
 * @param valid The callback to call when the field becomes valid.
 * @param project The crosswalk project.
 */
export default function attachJcrFieldListeners(parent, invalid, valid, project) {
  const assetFolder = document.querySelector(`${parent} #jcr-asset-folder`);
  const siteFolder = document.querySelector(`${parent} #jcr-site-folder`);
  const importJcrPackage = document.querySelector(`${parent} #import-jcr-package`);

  const checkForValidTextFields = () => {
    if ((!assetFolder.invalid && !siteFolder.invalid)) {
      valid();
    } else {
      invalid();
    }

    assetFolder.invalid = assetFolder.value === '';
    siteFolder.invalid = siteFolder.value === '';
  };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'invalid' || mutation.attributeName === 'checked') {
        checkForValidTextFields();
      }
    });
  });

  if (assetFolder && siteFolder && importJcrPackage) {
    observer.observe(assetFolder, {
      attributes: true,
      attributeFilter: ['value', 'invalid', 'checked'],
      subtree: true,
    });
    observer.observe(siteFolder, {
      attributes: true,
      attributeFilter: ['value', 'invalid', 'checked'],
      subtree: true,
    });
    observer.observe(importJcrPackage, { attributes: true });

    assetFolder.addEventListener('change', () => {
      project.setAssetPath(assetFolder.value.trim());
    });

    siteFolder.addEventListener('change', () => {
      project.setSitePath(siteFolder.value.trim());
    });
  }
}

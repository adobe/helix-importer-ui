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
  if (project.getType() !== 'xwalk') {
    return;
  }

  let assetFolderFocused = false;

  const assetFolder = document.querySelector(`${parent} #jcr-asset-folder`);
  const siteFolder = document.querySelector(`${parent} #jcr-site-folder`);

  const isValidCheck = () => {
    // eslint-disable-next-line no-unused-expressions
    (siteFolder.invalid || assetFolder.invalid) ? invalid() : valid();
  };

  const assetCheck = () => {
    // if the asset folder is empty and the site folder is valid, then set the asset folder
    // to the site folder, but only if the asset folder has not been interacted with
    if (!assetFolderFocused && assetFolder.value === '' && !siteFolder.invalid) {
      // remove everything after the last /content/ in the site path and use it as the asset path
      const sitePath = siteFolder.value.trim();
      const lastContent = sitePath.lastIndexOf('/content/');
      const path = sitePath.substring(lastContent + 8, sitePath.length);
      assetFolder.value = `/content/dam${path}`;
    }

    assetFolder.invalid = !/^\/content\/dam\/.+/.test(assetFolder.value);
    project.setAssetPath(assetFolder.value.trim());
    isValidCheck();
  };

  const siteCheck = () => {
    siteFolder.invalid = !/^\/content\/.+/.test(siteFolder.value);
    project.setSitePath(siteFolder.value.trim());
    isValidCheck();
  };

  const checkFields = () => {
    siteCheck();
    assetCheck();
  };

  assetFolder.addEventListener('focus', () => {
    assetFolderFocused = true;
  });

  assetFolder.addEventListener('change', () => {
    checkFields();
  });

  siteFolder.addEventListener('change', () => {
    checkFields();
  });

  checkFields();
}

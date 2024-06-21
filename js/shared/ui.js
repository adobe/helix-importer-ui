/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const IS_EXPRESS = document.querySelector('.import-express') !== null;
const IS_FRAGMENTS = document.querySelector('.import-fragments') !== null;
const DETECT_BUTTON = document.getElementById('detect-sections-button');
const IMPORT_BUTTON = document.getElementById('import-doimport-button');
const SPTABS = document.querySelector('.import sp-tabs');
const getContentFrame = () => document.querySelector('.import iframe');

const toggleLoadingButton = (button) => {
  let circle = button.querySelector('sp-progress-circle');
  if (circle) {
    circle.remove();
  } else {
    circle = document.createElement('sp-progress-circle');
    circle.indeterminate = true;
    circle.size = 's';

    button.prepend(circle);
  }
};

const disableProcessButtons = () => {
  if (IMPORT_BUTTON) {
    IMPORT_BUTTON.disabled = true;
  }
  if (DETECT_BUTTON) {
    DETECT_BUTTON.disabled = true;
  }
};

const enableProcessButtons = () => {
  if (IMPORT_BUTTON) {
    IMPORT_BUTTON.disabled = false;
  }
  if (DETECT_BUTTON) {
    DETECT_BUTTON.disabled = false;
  }
};

export {
  disableProcessButtons,
  enableProcessButtons,
  getContentFrame,
  toggleLoadingButton,
  DETECT_BUTTON,
  IMPORT_BUTTON,
  IS_EXPRESS,
  IS_FRAGMENTS,
  SPTABS,
};

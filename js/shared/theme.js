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

import { sendMessage } from '../shell.js';

const SP_THEME = document.querySelector('sp-theme');

function applyDefaultTheme() {
  if (SP_THEME) {
    SP_THEME.setAttribute('color', localStorage.getItem('sp-theme') || 'dark');
  }
}

function toggleTheme() {
  if (!SP_THEME) {
    return;
  }
  SP_THEME.setAttribute('color', `${SP_THEME.color === 'light' ? 'dark' : 'light'}`);
  sendMessage({ theme: SP_THEME.color });
  localStorage.setItem('sp-theme', SP_THEME.color);
}

export {
  toggleTheme,
  applyDefaultTheme,
};

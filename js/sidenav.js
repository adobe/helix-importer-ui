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

const SIDENAV_ITEMS = document.querySelectorAll('sp-sidenav-item');
const GITHUB_LINK = document.querySelector('a.footer');

function updateSectionView(e) {
  const value = e.target?.getAttribute('value');
  if (value && value.endsWith('.html')) {
    const frame = document.querySelector('main > iframe');
    frame.src = value;
  }
}

SIDENAV_ITEMS?.forEach((item) => {
  item.addEventListener('click', updateSectionView);
});

async function updateVersion() {
  const res = await fetch('./package.json');
  const json = await res.json();
  GITHUB_LINK.textContent += `${json.name}@${json.version}`;
}

updateVersion();

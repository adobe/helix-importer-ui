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
import { compareVersions } from './shared/utils.js';
import Version from './shared/version.js';

const VERSION_LINK_EL = document.querySelector('.version');
const AEM_CLI_VERSION_EL = document.querySelector('.aem-cli-version');

async function getVersionDetails() {
  const {
    getAemCliVersion,
    getAemCliName,
    getHelixImporterVersion,
    getHelixImporterName,
    getLatestAemCliVersion,
  } = await Version();

  VERSION_LINK_EL.textContent += `${getHelixImporterName()}@${getHelixImporterVersion()}`;

  // current version of aem-cli
  AEM_CLI_VERSION_EL.textContent += `${getAemCliName()}${getAemCliVersion() ? '@' : ''}${getAemCliVersion()}`;

  // latest version of aem-cli
  if (!getAemCliVersion() || compareVersions(getAemCliVersion(), getLatestAemCliVersion()) < 0) {
    AEM_CLI_VERSION_EL.textContent += ` (latest: ${getLatestAemCliVersion()})`;
    AEM_CLI_VERSION_EL.variant = 'primary';

    const overlay = document.createElement('sp-overlay');
    overlay.trigger = 'aem-cli-version@hover';
    overlay.placement = 'bottom';

    const tooltip = document.createElement('sp-tooltip');
    overlay.appendChild(tooltip);

    AEM_CLI_VERSION_EL.appendChild(overlay);
    tooltip.textContent = 'Please upgrade to the latest version of AEM CLI to benefit from the latest features.';
  }
}

getVersionDetails();

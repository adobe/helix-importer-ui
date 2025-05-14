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
/* eslint-disable no-console */

/**
 * Get the version of the AEM CLI and the Helix Importer UI.
 * @returns {Promise<{
 *  getAemCliVersion: string,
 *  getAemCliName: string,
 *  getLatestAemCliVersion: string,
 *  getHelixImporterVersion: string,
 *  getHelixImporterName: string
 * }>}
 */
export default async function Version() {
  let aemCliVersion;
  let aemCliName;
  let latestAemCliVersion;
  let helixImporterVersion;
  let helixImporterName;

  async function init() {
    try {
      const res = await fetch('/.hlx/version');
      const json = await res.json();
      ({ name: aemCliName, version: aemCliVersion } = json);
    } catch (e) {
      console.warn('Please upgrade to the latest version of AEM CLI to benefit from the latest features.');
    }

    let res = await fetch('https://registry.npmjs.com/@adobe/aem-cli');
    let json = await res.json();
    latestAemCliVersion = json['dist-tags'].latest;
    res = await fetch('./package.json');
    json = await res.json();
    helixImporterVersion = json.version;
    helixImporterName = json.name;
  }

  await init();

  const getAemCliVersion = () => aemCliVersion || '';
  // const getAemCliVersion = () => '16.10.16';
  const getAemCliName = () => aemCliName || '@adobe/aem-cli';
  const getHelixImporterVersion = () => helixImporterVersion;
  const getHelixImporterName = () => helixImporterName || '@adobe/helix-importer-ui';
  const getLatestAemCliVersion = () => latestAemCliVersion;

  return {
    getAemCliVersion,
    getAemCliName,
    getLatestAemCliVersion,
    getHelixImporterVersion,
    getHelixImporterName,
  };
}

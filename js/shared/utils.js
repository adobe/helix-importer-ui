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
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
}

/**
 * Return true if the version is less than running aem cli version. If the from verison
 * is newer than the against version, it will return 1. If the from version is equal to the
 * against version, it will return 0. If the from version is less than the against version,
 * it will return -1.
 *
 * @param {string} from - The version to compare 'against'.
 * @param {string} against - The version to check against.
 * @returns {number} return -1 if v1 < v2, 0 if v1 == v2, 1 if v1 > v2
 */
function compareVersions(from, against) {
  if (!from || !against) throw new Error('Version is required');

  const v1Parts = from.split('.').map(Number);
  const v2Parts = against.split('.').map(Number);

  if (v1Parts.some(Number.isNaN) || v2Parts.some(Number.isNaN)) throw new Error('Invalid version format');

  for (let i = 0; i < 3; i += 1) {
    if (v1Parts[i] < v2Parts[i]) return -1;
    if (v1Parts[i] > v2Parts[i]) return 1;
  }

  return 0;
}

export {
  asyncForEach,
  compareVersions,
};

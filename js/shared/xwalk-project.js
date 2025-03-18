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

/**
 * @typedef {Object} XWalkProjectConfig
 * @property {string} origin - The base URL to fetch data from.
 */

/**
 * Represents an XWalk project.
 * @param {XWalkProjectConfig} config - The configuration of the project.
 */
const XWalkProject = async (config) => {
  const { origin } = config;
  let transformationRules;

  /**
   * Retrieves the type of the project.
   * @returns "xwalk" The type of the project ('xwalk').
   */
  const getType = () => 'xwalk';

  /**
   * Returns the transformation rules if any are available.
   */
  const getTransformationRules = () => transformationRules;

  const response = await fetch(`${origin}/tools/importer/transformation.rules.json`);
  if (response.ok) {
    transformationRules = await response.json();
  }

  return {
    getType,
    getTransformationRules,
  };
};

export default XWalkProject;

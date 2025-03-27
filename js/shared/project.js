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
import DocProject from './doc-project.js';
import XWalkProject from './xwalk-project.js';

/**
 * @typedef {"doc" | "xwalk"} ProjectType
 * @description Represents the possible types of a project.
 */

/**
 * @typedef {Object} ProjectConfig
 * @property {string} origin - The base URL to fetch data from.
 */

/**
 * Creates a project instance based on the presence of component-models.json.
 * @param {ProjectConfig} config - The configuration of the project.
 * @returns {Promise<Object>} The appropriate project instance.
 */
const Project = async (config) => {
  const { origin } = config;

  try {
    const response = await fetch(`${origin}/component-models.json`);
    if (response.ok) {
      return XWalkProject(config);
    }
  } catch (error) {
    // do nothing
  }
  return DocProject(config);
};

export default Project;

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
 * @typedef {"doc" | "xwalk"} ProjectType
 * @description Represents the possible types of a project.
 */

/**
 * @typedef {Object} ProjectConfig
 * @property {string} origin - The base URL to fetch data from.
 */

/**
 * Represents a project.
 */
export default class Project {
  /**
   * @type {ProjectType}
   * The type of the project ('doc' or 'xwalk').
   */
  #type;

  /**
   * Creates an instance of Project.
   * @param {ProjectConfig} config - The configuration object for the project.
   */
  constructor(config) {
    /**
     * @type {ProjectConfig}
     * @description Configuration object for the project.
     */
    this.config = config;
  }

  /**
   * Retrieves the type of the project. If the type is already cached, it returns it;
   * otherwise, it fetches the type from the server.
   *
   * @async
   * @returns {Promise<ProjectType>} The type of the project ('doc' or 'xwalk').
   */
  async getType() {
    if (this.#type) {
      return this.#type;
    }

    await fetch(`${this.config.origin}/component-models.json`).then((res) => {
      if (!res.ok) {
        this.#type = 'doc';
      } else {
        this.#type = 'xwalk';
      }
    });

    return this.#type;
  }
}

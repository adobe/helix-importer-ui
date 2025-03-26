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
 * @typedef {Object} XWalkProjectConfig
 * @property {string} origin - The base URL to fetch data from.
 */

/**
 * Represents an XWalk project.
 * @param {XWalkProjectConfig} config - The configuration of the project.
 */
const XWalkProject = (config) => {
  const { origin } = config;

  let assetFolder;
  let siteFolder;

  /**
   * Retrieves the type of the project.
   * @returns "xwalk" The type of the project ('xwalk').
   */
  const getType = () => 'xwalk';

  /**
   * Set the jcr destination path for the asset folder.
   * Any path that is passed in will have the /content/dam/ prefix removed.
   * @param path - The jcr path to the folder.
   */
  const setAssetPath = (path) => {
    assetFolder = path ? path.replace(/^\/content\/dam\//, '').replace(/^\/+/, '') : null;
  };

  /**
   * Set the jcr destination path for the site folder.
   * Any path that is passed in will have the /content/ prefix removed.
   * @param path
   */
  const setSitePath = (path) => {
    siteFolder = path ? path.replace(/^\/content\//, '').replace(/^\/+/, '') : null;
  };

  /**
   * Return the path of the asset folder without the /content/dam prefix.
   */
  const getAssetPath = () => assetFolder;

  /**
   * Return the path of the site folder without the /content prefix.
   */
  const getSitePath = () => siteFolder;

  /**
   * Return the origin of the project.
   * @return {string}
   */
  const getOrigin = () => origin;

  return {
    setAssetPath,
    setSitePath,
    getAssetPath,
    getSitePath,
    getOrigin,
    getType,
  };
};

export default XWalkProject;

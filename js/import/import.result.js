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
 * @typedef {Object} Status
 * @property {number} startTime - The start time of the process, represented as a timestamp.
 * @property {number} imported - The number of items successfully imported.
 * @property {number} total - The total number of items to process.
 * @property {Array<string>} urls - A list of URLs related to the import process.
 * @property {Array} rows - An array of rows representing imported data.
 * @property {Array} extraCols - An array of additional columns or metadata.
 */
const status = {};

/**
 * @typedef {Object} ImportStatus
 * @property {Function} getStatus - Returns the current import result object.
 * @property {Function} reset - Resets the import result to its initial state.
 * @property {Function} merge - Merges the provided status into the import result.
 * @property {Function} addExtraCols - Adds a column to the `extraCols` array if it doesn't
 * already exist.
 * @property {Function} addRow - Adds a row to the `rows` array.
 * @property {Function} incrementImported - Increments the `imported` count by 1.
 */
const ImportStatus = {
  /**
   * Returns the current import result object.
   * @returns {Status} The import result object.
   */
  getStatus: () => status,

  /**
   * Resets the import result to its initial state.
   */
  reset: () => {
    status.startTime = 0;
    status.imported = 0;
    status.total = 0;
    status.urls = [];
    status.rows = [];
    status.extraCols = [];
  },

  /**
   * Merges the provided status into the import result.
   * @param {Status} newStatus - The status object to merge.
   */
  merge: (newStatus = {}) => {
    Object.entries(newStatus).forEach(([key, value]) => {
      status[key] = value;
    });
  },

  /**
   * Adds a column to the `extraCols` array if it doesn't already exist.
   * @param {string} key - The column key to add.
   */
  addExtraCols: (key) => {
    if (!status.extraCols.includes(key)) {
      status.extraCols.push(key);
    }
  },

  /**
   * Adds a row to the `rows` array.
   * @param {Object} row - The row to add.
   */
  addRow: (row) => {
    status.rows.push(row);
  },

  /**
   * Increments the `imported` count by 1.
   */
  incrementImported: () => {
    status.imported += 1;
  },

  /**
   * Return true if the import process is finished.
   * @return {boolean}
   */
  isFinished: () => status.imported === status.total,

  /**
   * Get the formatted duration of the import process.
   * @return {string} The formatted duration in the number of minutes and seconds.
   */
  duration: () => {
    const totalTime = Math.round((new Date() - status.startTime) / 1000);
    let timeStr = `${totalTime}s`;
    if (totalTime > 60) {
      timeStr = `${Math.round(totalTime / 60)}m ${totalTime % 60}s`;
      if (totalTime > 3600) {
        timeStr = `${Math.round(totalTime / 3600)}h ${Math.round((totalTime % 3600) / 60)}m`;
      }
    }
    return timeStr;
  },
};

export default ImportStatus;

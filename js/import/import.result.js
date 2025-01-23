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

const importResult = {};

const resetImportResult = () => {
  importResult.startTime = 0;
  importResult.imported = 0;
  importResult.total = 0;
  importResult.urls = [];
  importResult.rows = [];
  importResult.extraCols = [];
};

const ImportResult = {
  getStatus: () => importResult,
  reset: resetImportResult,
  merge: (status = {}) => {
    Object.entries(status).forEach(([key, value]) => {
      importResult[key] = value;
    });
  },
  addExtraCols: (key) => {
    if (!importResult.extraCols.includes(key)) {
      importResult.extraCols.push(key);
    }
  },
  addRow: (row) => {
    importResult.rows.push(row);
  },
  incrementImported: () => {
    importResult.imported += 1;
  },
};

export default ImportResult;

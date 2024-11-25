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

const importStatus = {};

const resetImportStatus = () => {
  importStatus.startTime = 0;
  importStatus.imported = 0;
  importStatus.total = 0;
  importStatus.urls = [];
  importStatus.rows = [];
  importStatus.extraCols = [];
};

const ImportStatus = {
  getStatus: () => importStatus,
  reset: resetImportStatus,
  merge: (status = {}) => {
    Object.entries(status).forEach(([key, value]) => {
      importStatus[key] = value;
    });
  },
  addExtraCols: (key) => {
    if (!importStatus.extraCols.includes(key)) {
      importStatus.extraCols.push(key);
    }
  },
  addRow: (row) => {
    importStatus.rows.push(row);
  },
  incrementImported: () => {
    importStatus.imported += 1;
  },
};

export default ImportStatus;

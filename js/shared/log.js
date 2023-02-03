/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* eslint-disable no-underscore-dangle, no-console */
{
  const patchArgs = (args) => {
    if (typeof args[0] === 'string') {
      args[0] = `[importer-ui] ${args[0]}`;
    }
  };

  const _log = console.log;
  console.log = (...args) => {
    patchArgs(args);
    _log(...args);
  };

  const _warn = console.warn;
  console.warn = (...args) => {
    patchArgs(args);
    _warn(...args);
  };

  const _error = console.error;
  console.error = (...args) => {
    patchArgs(args);
    _error(...args);
  };
}

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
import { defineConfig, globalIgnores } from '@eslint/config-helpers';
import { recommended, source, test } from '@adobe/eslint-config-helix';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default defineConfig([
  globalIgnores([
    '.vscode/*',
    'coverage/*',
    'js/libs/**/*',
    'js/dist/**/*',
    'node_modules/**',
    'js/inspect/inspect.js',
    'modules/sw.js',
  ]),
  {
    extends: [recommended],
    plugins: {
      import: importPlugin,
    },
  },
  {
    ...source,
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-param-reassign': 'off',
      'linebreak-style': ['error', 'unix'],
      'import/extensions': ['error', { js: 'always' }],
      'import/no-unresolved': [2, { ignore: ['^preact', '^htm'] }],
    },
  },
  test,
]);
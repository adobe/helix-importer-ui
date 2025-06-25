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

/* eslint-env mocha */
import assert from 'assert';
import { readFile } from 'fs/promises';
import { md2html, md2da } from '../modules/md2html.js';

const testHtml = async (spec) => {
  const md = await readFile(new URL(`./fixtures/${spec}.md`, import.meta.url), 'utf-8');
  const expected = await readFile(new URL(`./fixtures/${spec}.html`, import.meta.url), 'utf-8');
  const actual = md2html(md);
  assert.equal(actual.trim(), expected.trim());
};

const testDa = async (spec) => {
  const md = await readFile(new URL(`./fixtures/${spec}.md`, import.meta.url), 'utf-8');
  const expected = await readFile(new URL(`./fixtures/${spec}-da.html`, import.meta.url), 'utf-8');
  const actual = md2da(md);
  assert.equal(actual.trim(), expected.trim());
};

describe('md2html', () => {
  it('simple', async () => {
    await testHtml('simple');
  });

  it('table', async () => {
    await testHtml('table');
  });

  it('complex', async () => {
    await testHtml('complex');
  });
});

describe('md2da', () => {
  it('simple-da', async () => {
    await testDa('simple');
  });

  it('table-da', async () => {
    await testDa('table');
  });

  it('complex-da', async () => {
    await testDa('complex');
  });
});

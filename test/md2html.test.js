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

  it('keeps data-edit-as="image" on marked links only', () => {
    const url = 'https://example.com/adobe/assets/urn:aaid:aem:1234/as/pic.jpg';
    const html = `<table><tr><th>Hero</th></tr><tr><td><a href="${url}" data-edit-as="image" title="Alt text">${url}</a></td></tr></table>`;
    const md = [
      '+---------------------------------------------------+',
      '| Hero                                              |',
      '+===================================================+',
      `| [${url}](${url} "Alt text") |`,
      '| [Other](https://example.com/other "Other title") |',
      '+---------------------------------------------------+',
    ].join('\n');
    const actual = md2da(md, { html });
    assert.ok(actual.includes(`<a href="${url}" title="Alt text" data-edit-as="image">${url}</a>`), actual);
    assert.ok(actual.includes('<a href="https://example.com/other" title="Other title">Other</a>'), actual);
    assert.ok(!md2da(md).includes('data-edit-as'));
  });

  it('keeps data-focal-x/y on images', () => {
    const html = '<p><img src="https://example.com/a.jpg" alt="A" data-focal-x="30" data-focal-y="70"></p><p><img src="https://example.com/b.jpg" alt="B"></p>';
    const md = '![A](./media_a.jpg)\n\n![B](./media_b.jpg)';
    const actual = md2da(md, { html });
    assert.ok(actual.includes('<img src="./media_a.jpg" alt="A" data-focal-x="30" data-focal-y="70">'), actual);
    assert.ok(actual.includes('<img src="./media_b.jpg" alt="B">'), actual);
  });

  it('matches focal images whose alt whitespace was normalized', () => {
    const html = '<p><img src="https://example.com/a.jpg" alt=" A  B " data-focal-x="1" data-focal-y="2"></p>';
    const actual = md2da('![A B](./media_a.jpg)', { html });
    assert.ok(actual.includes('data-focal-x="1" data-focal-y="2"'), actual);
  });

  it('marks only the matching occurrence of identical links', () => {
    const html = '<p><a href="/pic.jpg" data-edit-as="image">Picture</a></p><p><a href="/pic.jpg">Picture</a></p>';
    const md = '[Picture](/pic.jpg)\n\n[Picture](/pic.jpg)';
    const actual = md2da(md, { html });
    assert.equal(actual.match(/data-edit-as/g).length, 1, actual);
    assert.ok(actual.indexOf('data-edit-as') < actual.lastIndexOf('<a '), actual);
  });

  it('matches image links with non-ASCII urls', () => {
    const html = '<p><a href="/café.jpg" data-edit-as="image" title="Alt">/café.jpg</a></p>';
    const md = '[/café.jpg](/café.jpg "Alt")';
    assert.ok(md2da(md, { html }).includes('data-edit-as="image"'));
  });

  it('marks the second of two identical links when only it is marked', () => {
    const html = '<p><a href="/pic.jpg">Picture</a></p><p><a href="/pic.jpg" data-edit-as="image">Picture</a></p>';
    const md = '[Picture](/pic.jpg)\n\n[Picture](/pic.jpg)';
    const actual = md2da(md, { html });
    assert.equal(actual.match(/data-edit-as/g).length, 1, actual);
    assert.ok(actual.indexOf('data-edit-as') > actual.indexOf('<a '), actual);
  });

  it('does not mark a link with the same url but a different title', () => {
    const html = '<p><a href="/pic.jpg" data-edit-as="image" title="Alt">/pic.jpg</a></p>';
    const md = '[/pic.jpg](/pic.jpg "Other")';
    assert.ok(!md2da(md, { html }).includes('data-edit-as'));
  });
});

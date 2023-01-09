/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* global CodeMirror, html_beautify, ExcelJS, WebImporter */
import { initOptionFields, attachOptionFieldsListeners } from '../shared/fields.js';
import { getDirectoryHandle, saveFile } from '../shared/filesystem.js';
import { asyncForEach } from '../shared/utils.js';
import PollImporter from '../shared/pollimporter.js';
import alert from '../shared/alert.js';

const PARENT_SELECTOR = '.import';
const CONFIG_PARENT_SELECTOR = `${PARENT_SELECTOR} form`;

const PREVIEW_CONTAINER = document.querySelector(`${PARENT_SELECTOR} .page-preview`);

const IMPORTFILEURL_FIELD = document.getElementById('import-file-url');
const IMPORT_BUTTON = document.getElementById('import-doimport-button');

// const SAVEASWORD_BUTTON = document.getElementById('saveAsWord');
const FOLDERNAME_SPAN = document.getElementById('folder-name');

const TRANSFORMED_HTML_TEXTAREA = document.getElementById('import-transformed-html');
const MD_SOURCE_TEXTAREA = document.getElementById('import-markdown-source');
const MD_PREVIEW_PANEL = document.getElementById('import-markdown-preview');

const SPTABS = document.querySelector(`${PARENT_SELECTOR} sp-tabs`);

const DOWNLOAD_IMPORT_REPORT_BUTTON = document.getElementById('import-downloadImportReport');

const IS_BULK = document.querySelector('.import-bulk') !== null;
const BULK_URLS_HEADING = document.querySelector('#import-result h2');
const BULK_URLS_LIST = document.querySelector('#import-result ul');

const IMPORT_FILE_PICKER_CONTAINER = document.getElementById('import-file-picker-container');

const DOWNLOAD_BINARY_TYPES = ['pdf'];

const ui = {};
const config = {};
const importStatus = {};

let dirHandle = null;

const setupUI = () => {
  ui.transformedEditor = CodeMirror.fromTextArea(TRANSFORMED_HTML_TEXTAREA, {
    lineNumbers: true,
    mode: 'htmlmixed',
    theme: 'base16-dark',
  });
  ui.transformedEditor.setSize('100%', '100%');

  ui.markdownEditor = CodeMirror.fromTextArea(MD_SOURCE_TEXTAREA, {
    lineNumbers: true,
    mode: 'markdown',
    theme: 'base16-dark',
  });
  ui.markdownEditor.setSize('100%', '100%');

  ui.markdownPreview = MD_PREVIEW_PANEL;
  ui.markdownPreview.innerHTML = WebImporter.md2html('Run an import to see some markdown.');
};

const loadResult = ({ md, html: outputHTML }) => {
  ui.transformedEditor.setValue(html_beautify(outputHTML));
  ui.markdownEditor.setValue(md || '');

  const mdPreview = WebImporter.md2html(md);
  ui.markdownPreview.innerHTML = mdPreview;

  // remove existing classes and styles
  Array.from(ui.markdownPreview.querySelectorAll('[class], [style]')).forEach((t) => {
    t.removeAttribute('class');
    t.removeAttribute('style');
  });
};

const updateImporterUI = (results, originalURL) => {
  if (!IS_BULK) {
    IMPORT_FILE_PICKER_CONTAINER.innerHTML = '';
    const picker = document.createElement('sp-picker');
    picker.setAttribute('size', 'm');

    if (results.length < 2) {
      picker.setAttribute('quiet', true);
      picker.setAttribute('disabled', true);
    }

    results.forEach((result, index) => {
      const { path } = result;

      // add result to picker list
      const item = document.createElement('sp-menu-item');
      item.innerHTML = path;
      if (index === 0) {
        item.setAttribute('selected', true);
        picker.setAttribute('label', path);
        picker.setAttribute('value', path);
      }
      picker.appendChild(item);
    });

    IMPORT_FILE_PICKER_CONTAINER.append(picker);

    picker.addEventListener('change', (e) => {
      const r = results.filter((i) => i.path === e.target.value)[0];
      loadResult(r);
    });

    loadResult(results[0]);
  } else {
    const li = document.createElement('li');
    const link = document.createElement('sp-link');
    link.setAttribute('size', 'm');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', originalURL);
    link.innerHTML = originalURL;
    li.append(link);

    BULK_URLS_LIST.append(li);
    BULK_URLS_HEADING.innerText = `Imported URLs (${importStatus.imported} / ${importStatus.total}):`;
  }
};

const clearResultPanel = () => {
  BULK_URLS_LIST.innerHTML = '';
  BULK_URLS_HEADING.innerText = 'Importing...';
};

const initImportStatus = () => {
  importStatus.imported = 0;
  importStatus.total = 0;
  importStatus.rows = [];
  importStatus.extraCols = [];
};

const disableProcessButtons = () => {
  IMPORT_BUTTON.disabled = true;
};

const enableProcessButtons = () => {
  IMPORT_BUTTON.disabled = false;
};

const getProxyURLSetup = (url, origin) => {
  const u = new URL(url);
  if (!u.searchParams.get('host')) {
    u.searchParams.append('host', u.origin);
  }
  const src = `${origin}${u.pathname}${u.search}`;
  return {
    remote: {
      url,
      origin: u.origin,
    },
    proxy: {
      url: src,
      origin,
    },
  };
};

const postImportProcess = async (results, originalURL) => {
  await asyncForEach(results, async ({
    docx, filename, path, report,
  }) => {
    const data = {
      status: 'Success',
      url: originalURL,
      path,
    };

    const includeDocx = !!docx;
    if (includeDocx) {
      await saveFile(dirHandle, filename, docx);
      data.docx = filename;
    }

    if (report) {
      Object.keys(report).forEach((key) => {
        if (!importStatus.extraCols.includes(key)) {
          importStatus.extraCols.push(key);
        }
      });
      data.report = report;
    }

    importStatus.rows.push(data);
  });
};

const createImporter = () => {
  config.importer = new PollImporter({
    origin: config.origin,
    poll: !IS_BULK,
    importFileURL: config.fields['import-file-url'],
  });
};

const getContentFrame = () => document.querySelector(`${PARENT_SELECTOR} iframe`);

const attachListeners = () => {
  attachOptionFieldsListeners(config.fields, PARENT_SELECTOR);

  config.importer.addListener(async ({ results }) => {
    const frame = getContentFrame();
    const { originalURL } = frame.dataset;

    updateImporterUI(results, originalURL);
    postImportProcess(results, originalURL);

    alert.success(`Import of page ${originalURL} completed.`);
  });

  config.importer.addErrorListener(({ url, error: err, params }) => {
    // eslint-disable-next-line no-console
    console.error(`Error importing ${url}: ${err.message}`, err);
    alert.error(`Error importing ${url}: ${err.message}`);

    importStatus.rows.push({
      url: params.originalURL,
      status: `Error: ${err.message}`,
    });
  });

  IMPORT_BUTTON.addEventListener('click', (async () => {
    initImportStatus();

    if (IS_BULK) {
      clearResultPanel();
      if (config.fields['import-show-preview']) {
        PREVIEW_CONTAINER.classList.remove('hidden');
      } else {
        PREVIEW_CONTAINER.classList.add('hidden');
      }
      DOWNLOAD_IMPORT_REPORT_BUTTON.classList.remove('hidden');
    } else {
      DOWNLOAD_IMPORT_REPORT_BUTTON.classList.add('hidden');
      PREVIEW_CONTAINER.classList.remove('hidden');
    }

    disableProcessButtons();
    if (config.fields['import-local-save'] && !dirHandle) {
      try {
        dirHandle = await getDirectoryHandle();
        await dirHandle.requestPermission({
          mode: 'readwrite',
        });
        FOLDERNAME_SPAN.innerText = `Saving file(s) to: ${dirHandle.name}`;
        FOLDERNAME_SPAN.classList.remove('hidden');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('No directory selected');
      }
    }

    const field = IS_BULK ? 'import-urls' : 'import-url';
    const urlsArray = config.fields[field].split('\n').reverse().filter((u) => u.trim() !== '');
    importStatus.total = urlsArray.length;
    const processNext = async () => {
      if (urlsArray.length > 0) {
        const url = urlsArray.pop();
        const { remote, proxy } = getProxyURLSetup(url, config.origin);
        const src = proxy.url;

        importStatus.imported += 1;
        // eslint-disable-next-line no-console
        console.log(`Importing: ${importStatus.imported} => ${src}`);

        const res = await fetch(src);
        if (res.ok) {
          if (res.redirected) {
            // eslint-disable-next-line no-console
            console.warn(`Cannot transform ${src} - redirected to ${res.url}`);
            const u = new URL(res.url);
            let redirect = res.url;
            if (u.origin === window.location.origin) {
              redirect = `${remote.origin}${u.pathname}`;
            }
            importStatus.rows.push({
              url,
              status: 'Redirect',
              redirect,
            });
            processNext();
          } else {
            const contentType = res.headers.get('content-type');
            if (contentType.includes('html')) {
              const frame = document.createElement('iframe');
              frame.id = 'import-content-frame';

              if (config.fields['import-enable-js']) {
                frame.removeAttribute('sandbox');
              } else {
                frame.setAttribute('sandbox', 'allow-same-origin');
              }

              const onLoad = async () => {
                const includeDocx = !!dirHandle;

                if (config.fields['import-scroll-to-bottom']) {
                  frame.contentWindow.window.scrollTo({ left: 0, top: frame.contentDocument.body.scrollHeight, behavior: 'smooth' });
                }

                window.setTimeout(async () => {
                  const { originalURL, replacedURL } = frame.dataset;
                  if (frame.contentDocument) {
                    config.importer.setTransformationInput({
                      url: replacedURL,
                      document: frame.contentDocument,
                      includeDocx,
                      params: { originalURL },
                    });
                    await config.importer.transform();
                  }

                  const event = new Event('transformation-complete');
                  frame.dispatchEvent(event);
                }, config.fields['import-pageload-timeout'] || 100);
              };

              frame.addEventListener('load', onLoad);
              frame.addEventListener('transformation-complete', processNext);

              frame.dataset.originalURL = url;
              frame.dataset.replacedURL = src;
              frame.src = src;

              const current = getContentFrame();
              current.removeEventListener('load', onLoad);
              current.removeEventListener('transformation-complete', processNext);

              current.replaceWith(frame);
            } else if (IS_BULK
              && DOWNLOAD_BINARY_TYPES.filter((t) => contentType.includes(t)).length > 0) {
              const blob = await res.blob();
              const u = new URL(src);
              const path = WebImporter.FileUtils.sanitizePath(u.pathname);

              await saveFile(dirHandle, path, blob);
              importStatus.rows.push({
                url,
                status: 'Success',
                path,
              });
              updateImporterUI(null, url);
              processNext();
            }
          }
        } else {
          // eslint-disable-next-line no-console
          console.warn(`Cannot transform ${src} - page may not exist (status ${res.status})`);
          importStatus.rows.push({
            url,
            status: `Invalid: ${res.status}`,
          });
          processNext();
        }
        // ui.markdownPreview.innerHTML = md2html('Import in progress...');
        // ui.transformedEditor.setValue('');
        // ui.markdownEditor.setValue('');
      } else {
        const frame = getContentFrame();
        frame.removeEventListener('transformation-complete', processNext);
        DOWNLOAD_IMPORT_REPORT_BUTTON.classList.remove('hidden');
        enableProcessButtons();
      }
    };
    processNext();
  }));

  IMPORTFILEURL_FIELD.addEventListener('change', (event) => {
    if (config.importer) {
      config.importer.setImportFileURL(event.target.value);
    }
  });

  DOWNLOAD_IMPORT_REPORT_BUTTON.addEventListener('click', (async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    const headers = ['URL', 'path', 'docx', 'status', 'redirect'].concat(importStatus.extraCols);

    // create Excel auto Filters for the first row / header
    worksheet.autoFilter = {
      from: 'A1',
      to: `${String.fromCharCode(65 + headers.length - 1)}1`, // 65 = 'A'...
    };

    worksheet.addRows([
      headers,
    ].concat(importStatus.rows.map((row) => {
      const {
        url, path, docx, status, redirect, report,
      } = row;
      const extra = [];
      if (report) {
        importStatus.extraCols.forEach((col) => {
          const e = report[col];
          if (e) {
            if (typeof e === 'string') {
              if (e.startsWith('=')) {
                extra.push({
                  formula: report[col].replace(/=/, '_xlfn.'),
                  value: '', // cannot compute a default value
                });
              } else {
                extra.push(report[col]);
              }
            } else {
              extra.push(JSON.stringify(report[col]));
            }
          }
        });
      }
      return [url, path, docx || '', status, redirect || ''].concat(extra);
    })));
    const buffer = await workbook.xlsx.writeBuffer();
    const a = document.createElement('a');
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    a.setAttribute('href', URL.createObjectURL(blob));
    a.setAttribute('download', 'import_report.xlsx');
    a.click();
  }));

  if (SPTABS) {
    SPTABS.addEventListener('change', () => {
      // required for code to load in editors
      setTimeout(() => {
        ui.transformedEditor.refresh();
        ui.markdownEditor.refresh();
      }, 1);
    });
  }
};

const init = () => {
  config.origin = window.location.origin;
  config.fields = initOptionFields(CONFIG_PARENT_SELECTOR);

  createImporter();

  if (!IS_BULK) setupUI();
  attachListeners();
};

init();

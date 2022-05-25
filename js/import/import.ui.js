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
/* global CodeMirror, showdown, html_beautify, ExcelJS */
import { initOptionFields, attachOptionFieldsListeners } from '../shared/fields.js';
import { getDirectoryHandle, saveFile } from '../shared/filesystem.js';
import PollImporter from '../shared/pollimporter.js';

const PARENT_SELECTOR = '.import';

const PREVIEW_CONTAINER = document.querySelector(`${PARENT_SELECTOR} .preview`);

const URLS_INPUT = document.getElementById('import-url');
const IMPORTFILEURL_FIELD = document.getElementById('import-file-url');
const IMPORT_BUTTON = document.getElementById('import-doimport-button');

// const SAVEASWORD_BUTTON = document.getElementById('saveAsWord');
const FOLDERNAME_SPAN = document.getElementById('folderName');

const TRANSFORMED_HTML_TEXTAREA = document.getElementById('import-transformed-html');
const MD_SOURCE_TEXTAREA = document.getElementById('import-markdown-source');
const MD_PREVIEW_PANEL = document.getElementById('import-markdown-preview');

const DOWNLOAD_IMPORT_REPORT_BUTTON = document.getElementById('import-downloadImportReport');

const ui = {};
const config = {};
const importStatus = {
  imported: 0,
  rows: [],
};

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

  ui.showdownConverter = new showdown.Converter();
  ui.markdownPreview = MD_PREVIEW_PANEL;
  ui.markdownPreview.innerHTML = ui.showdownConverter.makeHtml('Run an import to see some markdown.');
};

const updateImporterUI = (out) => {
  const { md, html: outputHTML } = out;

  ui.transformedEditor.setValue(html_beautify(outputHTML));
  ui.markdownEditor.setValue(md || '');

  const mdPreview = ui.showdownConverter.makeHtml(md);
  ui.markdownPreview.innerHTML = mdPreview;

  // remove existing classes and styles
  Array.from(ui.markdownPreview.querySelectorAll('[class], [style]')).forEach((t) => {
    t.removeAttribute('class');
    t.removeAttribute('style');
  });
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

const createImporter = () => {
  config.importer = new PollImporter({
    origin: config.origin,
    poll: false,
    importFileURL: config.fields['import-file-url'],
  });
};

const getContentFrame = () => document.querySelector(`${PARENT_SELECTOR} iframe`);

const attachListeners = () => {
  attachOptionFieldsListeners(config.fields, PARENT_SELECTOR);

  config.importer.addListener(async (out) => {
    const includeDocx = !!out.docx;
    updateImporterUI(out, includeDocx);
    const frame = getContentFrame();
    const data = {
      status: 'Success',
      url: frame.dataset.originalURL,
      path: out.path,
    };
    if (includeDocx) {
      const { docx, filename } = out;
      await saveFile(dirHandle, filename, docx);
      data.docx = filename;
    }
    importStatus.rows.push(data);
  });

  IMPORT_BUTTON.addEventListener('click', (async () => {
    PREVIEW_CONTAINER.classList.remove('hidden');
    disableProcessButtons();
    if (config.fields['import-local-save'] && !dirHandle) {
      try {
        dirHandle = await getDirectoryHandle();
        await dirHandle.requestPermission({
          mode: 'readwrite',
        });
        FOLDERNAME_SPAN.innerText = `Saving file(s) to: ${dirHandle.name}`;
        FOLDERNAME_SPAN.classList.remove('hidden');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('No directory selected');
      }
    }

    DOWNLOAD_IMPORT_REPORT_BUTTON.classList.add('hidden');
    importStatus.imported = 0;
    importStatus.rows = [];

    const urlsArray = URLS_INPUT.value.split('\n').reverse().filter((u) => u.trim() !== '');
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
            const frame = document.createElement('iframe');
            frame.id = 'contentFrame';

            if (config.fields['import-enable-js']) {
              frame.removeAttribute('sandbox');
            } else {
              frame.setAttribute('sandbox', 'allow-same-origin');
            }

            const onLoad = async () => {
              const includeDocx = !!dirHandle;

              window.setTimeout(async () => {
                const { originalURL } = frame.dataset;
                const { replacedURL } = frame.dataset;
                if (frame.contentDocument) {
                  try {
                    config.importer.setTransformationInput({
                      url: replacedURL,
                      document: frame.contentDocument,
                      includeDocx,
                    });
                    await config.importer.transform();
                  } catch (error) {
                    // eslint-disable-next-line no-console
                    console.error(`Cannot transform ${originalURL} - transformation error ?`, error);
                    // fallback, probably transformation error
                    importStatus.rows.push({
                      url: originalURL,
                      status: `Error: ${error.message}`,
                    });
                  }
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
        // ui.markdownPreview.innerHTML = ui.showdownConverter.makeHtml('Import in progress...');
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
    worksheet.addRows([
      ['URL', 'path', 'docx', 'status', 'redirect'],
    ].concat(importStatus.rows.map(({
      url,
      path,
      docx,
      status,
      redirect,
    }) => [url, path, docx || '', status, redirect || ''])));
    const buffer = await workbook.xlsx.writeBuffer();
    const a = document.createElement('a');
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    a.setAttribute('href', URL.createObjectURL(blob));
    a.setAttribute('download', 'import_report.xlsx');
    a.click();
  }));
};

const init = () => {
  config.origin = window.location.origin;
  config.fields = initOptionFields(PARENT_SELECTOR);

  createImporter();

  setupUI();
  attachListeners();
};

init();

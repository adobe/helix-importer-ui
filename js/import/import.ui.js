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
import { toggleLoadingButton } from '../shared/ui.js';

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

const REPORT_FILENAME = 'import-report.xlsx';

const ui = {};
const config = {};
const importStatus = {};

let isSaveLocal = false;
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
  // XSS review: we need interpreted HTML here - <script> tags are removed by importer anyway
  ui.markdownPreview.innerHTML = WebImporter.md2html('Run an import to see some markdown.');

  SPTABS.selected = 'import-preview';
};

const loadResult = ({ md, html: outputHTML }) => {
  if (outputHTML) {
    ui.transformedEditor.setValue(html_beautify(outputHTML.replaceAll(/\s+/g, ' '), {
      indent_size: '2',
    }));
  }

  if (md) {
    ui.markdownEditor.setValue(md || '');

    const mdPreview = WebImporter.md2html(md);
    // XSS review: we need interpreted HTML here - <script> tags are removed by importer anyway
    ui.markdownPreview.innerHTML = mdPreview;

    // remove existing classes and styles
    Array.from(ui.markdownPreview.querySelectorAll('[class], [style]')).forEach((t) => {
      t.removeAttribute('class');
      t.removeAttribute('style');
    });
  } else {
    ui.markdownEditor.setValue('No preview available.');
    ui.markdownPreview.innerHTML = 'No preview available.';
  }
};

const updateImporterUI = (results, originalURL) => {
  try {
    const status = results.length > 0 && results[0].status ? results[0].status.toLowerCase() : 'success';
    if (!IS_BULK) {
      IMPORT_FILE_PICKER_CONTAINER.textContent = '';

      if (status === 'success') {
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
          item.textContent = path;
          if (index === 0) {
            item.setAttribute('selected', true);
            picker.setAttribute('label', path);
            picker.setAttribute('value', path);
          }
          picker.appendChild(item);
        });

        IMPORT_FILE_PICKER_CONTAINER.append(picker);

        if (results.length > 0) {
          picker.addEventListener('change', (e) => {
            const r = results.filter((i) => i.path === e.target.value)[0];
            loadResult(r);
          });
        }

        loadResult(results[0]);
      } else if (status === 'redirect') {
        alert.warning(`No page imported: ${results[0].from} redirects to ${results[0].to}`);
      }
    } else {
      const li = document.createElement('li');
      const link = document.createElement('sp-link');
      link.setAttribute('size', 'm');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', originalURL);
      link.textContent = originalURL;
      li.append(link);

      let name = 'sp-icon-checkmark-circle';
      let label = 'Success';
      if (status === 'redirect') {
        name = 'sp-icon-alias';
        label = 'Redirect';
      } else if (status === 'error') {
        name = 'sp-icon-alert';
        label = 'Error';
      }

      const icon = document.createElement(name);
      icon.setAttribute('label', label);
      li.append(icon);

      BULK_URLS_LIST.append(li);

      const totalTime = Math.round((new Date() - importStatus.startTime) / 1000);
      let timeStr = `${totalTime}s`;
      if (totalTime > 60) {
        timeStr = `${Math.round(totalTime / 60)}m ${totalTime % 60}s`;
        if (totalTime > 3600) {
          timeStr = `${Math.round(totalTime / 3600)}h ${Math.round((totalTime % 3600) / 60)}m`;
        }
      }

      BULK_URLS_HEADING.innerText = `Imported URLs (${importStatus.imported} / ${importStatus.total}) - Elapsed time: ${timeStr}`;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error while updating the UI: ${err.message}`, err);
  }
};

const clearResultPanel = () => {
  BULK_URLS_LIST.textContent = '';
  BULK_URLS_HEADING.textContent = 'Importing...';
};

const initImportStatus = () => {
  importStatus.startTime = 0;
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

const postSuccessfulStep = async (results, originalURL) => {
  let error = false;
  await asyncForEach(results, async ({
    docx, html, md, filename, path, report, from,
  }) => {
    const data = {
      url: originalURL,
      path,
    };

    if (isSaveLocal && dirHandle && (docx || html || md)) {
      const files = [];
      if (config.fields['import-local-docx'] && docx) {
        files.push({ type: 'docx', filename, data: docx });
      } else if (config.fields['import-local-html'] && html) {
        files.push({ type: 'html', filename: `${path}.html`, data: `<html><head></head>${html}</html>` });
      } else if (config.fields['import-local-md'] && md) {
        files.push({ type: 'md', filename: `${path}.md`, data: md });
      }

      files.forEach((file) => {
        try {
          const filePath = files.length > 1 ? `/${file.type}${file.filename}` : file.filename;
          saveFile(dirHandle, filePath, file.data);
          data.file = filePath;
          data.status = 'Success';
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(`Failed to save ${file.type} file ${path} for ${originalURL}`, e);
          data.status = `Error: Failed to save ${file.type} file ${path} - ${e.message}`;
          error = true;
        }
      });
    } else if (from) {
      try {
        const res = await fetch(from);
        if (res && res.ok) {
          if (res.redirected) {
            data.status = 'Redirect';
            data.redirect = res.url;
          } else if (dirHandle) {
            const blob = await res.blob();
            await saveFile(dirHandle, path, blob);
            data.file = path;
            data.status = 'Success';
          } else {
            data.status = 'Success - No file created';
          }
        } else {
          data.status = `Error: Failed to download ${from} - ${res.status} ${res.statusText}`;
          error = true;
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(`Failed to download ${from} to ${path}`, e);
        data.status = `Error: Failed to download ${from} - ${e.message}`;
        error = true;
      }
    } else {
      data.status = 'Success - No file created';
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

  return error;
};

const autoSaveReport = () => dirHandle && IS_BULK;

const getReport = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');

  const headers = ['URL', 'path', 'file', 'status', 'redirect'].concat(importStatus.extraCols);

  // create Excel auto Filters for the first row / header
  worksheet.autoFilter = {
    from: 'A1',
    to: `${String.fromCharCode(65 + headers.length - 1)}1`, // 65 = 'A'...
  };

  // specify a width for known path / url columns
  const w = 60;
  worksheet.getColumn(1).width = w;
  worksheet.getColumn(2).width = w;
  worksheet.getColumn(3).width = w;
  worksheet.getColumn(5).width = w;

  worksheet.addRows([
    headers,
  ].concat(importStatus.rows.map((row) => {
    const {
      url, path, file, status, redirect, report,
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
        } else {
          extra.push('');
        }
      });
    }
    return [url, path, file || '', status, redirect || ''].concat(extra);
  })));

  return workbook.xlsx.writeBuffer();
};

const postImportStep = async () => {
  if (autoSaveReport()) {
    // save report file in the folder
    try {
      await saveFile(dirHandle, REPORT_FILENAME, await getReport());
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Failed to save report file', e);
      return false;
    }
  }
  return true;
};

const createImporter = () => {
  config.importer = new PollImporter({
    origin: config.origin,
    poll: !IS_BULK,
    importFileURL: config.fields['import-file-url'],
  });
};

const getContentFrame = () => document.querySelector(`${PARENT_SELECTOR} iframe`);

const sleep = (ms) => new Promise(
  (resolve) => {
    setTimeout(resolve, ms);
  },
);

const smartScroll = async (window) => {
  let scrolledOffset = 0;
  let maxLoops = 4;
  while (maxLoops > 0 && window.document.body.scrollHeight > scrolledOffset) {
    const scrollTo = window.document.body.scrollHeight;
    window.scrollTo({ left: 0, top: scrollTo, behavior: 'smooth' });
    scrolledOffset = scrollTo;
    maxLoops -= 1;
    // eslint-disable-next-line no-await-in-loop
    await sleep(250);
  }
};

const attachListeners = () => {
  attachOptionFieldsListeners(config.fields, PARENT_SELECTOR);

  config.importer.addListener(async ({ results }) => {
    const frame = getContentFrame();
    const { originalURL } = frame.dataset;

    updateImporterUI(results, originalURL);
    let error = await postSuccessfulStep(results, originalURL);
    error = await postImportStep() && error;

    if (error) {
      alert.error(`Something went wrong during the import of page ${originalURL}. Please check the Dev Console logs.`);
    } else {
      alert.success(`Import of page ${originalURL} completed.`);
    }
  });

  config.importer.addErrorListener(async ({ url, error: err, params }) => {
    const frame = getContentFrame();
    const { originalURL } = frame.dataset;

    // eslint-disable-next-line no-console
    console.error(`Error importing ${url}: ${err.message}`, err);
    alert.error(`Error importing ${url}: ${err.message}`);

    importStatus.rows.push({
      url: params.originalURL,
      status: `Error: ${err.message}`,
    });

    updateImporterUI([{ status: 'error' }], originalURL);
    await postImportStep();
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
    toggleLoadingButton(IMPORT_BUTTON);
    isSaveLocal = config.fields['import-local-docx'] || config.fields['import-local-html'] || config.fields['import-local-md'];
    if (isSaveLocal && !dirHandle) {
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
    importStatus.startTime = Date.now();
    const processNext = async () => {
      if (urlsArray.length > 0) {
        const url = urlsArray.pop();
        const { remote, proxy } = getProxyURLSetup(url, config.origin);
        const src = proxy.url;

        importStatus.imported += 1;
        // eslint-disable-next-line no-console
        console.log(`Importing: ${importStatus.imported} => ${src}`);

        let res;
        try {
          const headers = JSON.parse(config.fields['import-custom-headers'] || '{}');
          res = await fetch(src, {
            headers,
          });
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(`Unexpected error when trying to fetch ${src} - CORS issue or invalid headers ?`, e);
        }
        if (res && res.ok) {
          if (res.redirected) {
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
            // eslint-disable-next-line no-console
            console.warn(`Cannot transform ${url} - redirected to ${redirect}`);
            updateImporterUI([{ status: 'redirect', from: url, to: redirect }], url);
            processNext();
          } else {
            const contentType = res.headers.get('content-type');
            if (contentType.includes('html') || contentType.includes('json')) {
              const frame = document.createElement('iframe');
              frame.id = 'import-content-frame';

              if (config.fields['import-enable-js']) {
                frame.removeAttribute('sandbox');
              } else {
                frame.setAttribute('sandbox', 'allow-same-origin');
              }

              const onLoad = async () => {
                const includeDocx = !!dirHandle && config.fields['import-local-docx'];

                if (config.fields['import-scroll-to-bottom']) {
                  await smartScroll(frame.contentWindow.window);
                }

                await sleep(config.fields['import-pageload-timeout'] || 100);

                if (config.fields['import-scroll-to-bottom']) {
                  await smartScroll(frame.contentWindow.window);
                }

                if (frame.contentDocument) {
                  const { originalURL, replacedURL } = frame.dataset;

                  const onLoadSucceeded = await config.importer.onLoad({
                    url: replacedURL,
                    document: frame.contentDocument,
                    params: { originalURL },
                  });

                  if (onLoadSucceeded) {
                    config.importer.setTransformationInput({
                      url: replacedURL,
                      document: frame.contentDocument,
                      includeDocx,
                      params: { originalURL },
                    });
                    await config.importer.transform();
                  }
                }

                const event = new Event('transformation-complete');
                frame.dispatchEvent(event);
              };

              frame.addEventListener('load', onLoad);
              frame.addEventListener('transformation-complete', processNext);

              frame.dataset.originalURL = url;
              frame.dataset.replacedURL = src;

              if (contentType.includes('json')) {
                const blob = await res.blob();
                frame.src = URL.createObjectURL(blob);
              } else {
                frame.src = src;
              }

              const current = getContentFrame();
              current.removeEventListener('load', onLoad);
              current.removeEventListener('transformation-complete', processNext);

              current.replaceWith(frame);
            } else if (dirHandle) {
              const blob = await res.blob();
              const u = new URL(src);
              const path = WebImporter.FileUtils.sanitizePath(u.pathname);

              await saveFile(dirHandle, path, blob);
              importStatus.rows.push({
                url,
                status: 'Success',
                path,
              });
              updateImporterUI([{ status: 'success' }], url);
              processNext();
            }
          }
        } else {
          // eslint-disable-next-line no-console
          console.warn(`Cannot transform ${src} - page may not exist (status ${res?.status || 'unknown status'})`);
          alert.error(`Cannot transform ${src} - page may not exist (status ${res?.status || 'unknown status'})`);
          importStatus.rows.push({
            url,
            status: `Invalid: ${res?.status || 'unknown status'}`,
          });
          updateImporterUI([{ status: 'error' }], url);
          processNext();
        }
      } else {
        const frame = getContentFrame();
        frame.removeEventListener('transformation-complete', processNext);
        DOWNLOAD_IMPORT_REPORT_BUTTON.classList.remove('hidden');
        enableProcessButtons();
        toggleLoadingButton(IMPORT_BUTTON);
      }
    };
    processNext();
  }));

  IMPORTFILEURL_FIELD.addEventListener('change', async (event) => {
    if (config.importer) {
      await config.importer.setImportFileURL(event.target.value);
    }
  });

  DOWNLOAD_IMPORT_REPORT_BUTTON.addEventListener('click', (async () => {
    const buffer = await getReport();
    const a = document.createElement('a');
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    a.setAttribute('href', URL.createObjectURL(blob));
    a.setAttribute('download', REPORT_FILENAME);
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

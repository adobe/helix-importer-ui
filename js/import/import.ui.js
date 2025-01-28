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
/* global WebImporter */
import {
  initFields,
  attachOptionFieldsListeners,
  attachTextFieldListeners,
} from '../shared/fields.js';
import { getDirectoryHandle, saveFile } from '../shared/filesystem.js';
import { asyncForEach } from '../shared/utils.js';
import PollImporter from '../shared/pollimporter.js';
import alert from '../shared/alert.js';
import { toggleLoadingButton } from '../shared/ui.js';
import { registerRuntime } from '../shared/runtime.js';
import { applyDefaultTheme } from '../shared/theme.js';
import {
  setupPreview,
  attachPreviewListeners,
  updatePreview,
  REPORT_FILENAME,
  toggleReportButton,
  setPreviewTheme, getReport,
} from './import.preview.js';
import {
  updateBulkResults,
  clearBulkResults, setupBulkUI,
} from './import.bulk.js';
import ImportStatus from './import.result.js';
import {
  getContentFrame,
  getProxyURLSetup,
  loadDocument,
} from '../shared/document.js';
import { createJcrPackage } from '../shared/jcr/packaging.js';
import { getImageUrlMap } from '../shared/jcr/imageurl.mapping.js';
import Project from '../shared/project.js';
import attachJcrFieldListeners from '../shared/jcr/field-listener.js';

const PARENT_SELECTOR = '.import';

const CONFIG_PARENT_SELECTOR = `${PARENT_SELECTOR} form`;
const PREVIEW_CONTAINER = document.querySelector(`${PARENT_SELECTOR} .page-preview`);

const IMPORT_FILE_URL_FIELD = document.getElementById('import-file-url');
const IMPORT_BUTTON = document.getElementById('import-doimport-button');
const DEFAULT_TRANSFORMER_USED = document.getElementById('transformation-file-default');
const SAVE_AS_DOCX = document.getElementById('import-local-docx');
const SAVE_AS_JCR_PACKAGE = document.getElementById('import-jcr-package');
const JCR_PACKAGE_FIELDS = document.getElementById('jcr-package-fields');
const JCR_ASSET_FOLDER = document.getElementById('jcr-asset-folder');
const JCR_SITE_FOLDER = document.getElementById('jcr-site-folder');

const FOLDER_NAME_SPAN = document.getElementById('folder-name');

const IS_BULK = document.querySelector('.import-bulk') !== null;

const config = {};

let project;
let isSaveLocal = false;
let dirHandle = null;
let jcrPages = [];
let imageMappings = new Map();

const updateImporterUI = (results, originalURL) => {
  if (!IS_BULK) {
    updatePreview(results, originalURL);
  } else {
    updateBulkResults(results, originalURL);
  }
};

const disableProcessButtons = () => {
  IMPORT_BUTTON.disabled = true;
};

const enableProcessButtons = () => {
  IMPORT_BUTTON.disabled = false;
};

const postSuccessfulStep = async (results, originalURL) => {
  let error = false;
  await asyncForEach(results, async ({
    docx, html, md, jcr, filename, path, report, from,
  }) => {
    const data = {
      url: originalURL,
      path,
    };

    if (isSaveLocal && dirHandle && (docx || html || md || jcr)) {
      const files = [];
      // if we were told to ave the doc file, add it to the list
      if (config.fields['import-local-docx'] && docx) {
        files.push({ type: 'docx', filename, data: docx });
      }

      // if we were told to save the html file, add it to the list
      if (config.fields['import-local-html'] && html) {
        files.push({ type: 'html', filename: `${path}.html`, data: `<html><head></head>${html}</html>` });
      }

      // if we were told to save the md file, add it to the list
      if (config.fields['import-local-md'] && md) {
        files.push({ type: 'md', filename: `${path}.md`, data: md });
      }

      // if we were told to save the JCR package, add it to the list
      if (config.fields['import-jcr-package'] && jcr) {
        jcrPages.push({
          type: 'jcr',
          path,
          data: jcr,
          url: originalURL,
        });
      }

      if (jcrPages && jcrPages.length > 0) {
        const siteFolder = JCR_SITE_FOLDER.value || (() => { throw new Error('Site folder name is required'); })();
        const assetFolder = JCR_ASSET_FOLDER.value || (() => { throw new Error('Asset folder name is required'); })();

        const mapping = getImageUrlMap(md);
        // merge the results of the mapping into the imageMappings object
        mapping.forEach((value, key) => {
          imageMappings.set(key, value);
        });

        // if we are finished importing all the pages, then we can create the JCR package
        if (ImportStatus.isFinished() && config.fields['import-jcr-package']) {
          await createJcrPackage(dirHandle, jcrPages, imageMappings, siteFolder, assetFolder);

          // Convert Map to plain object
          const obj = Object.fromEntries(imageMappings);

          // Save the object to a JSON file
          await saveFile(dirHandle, 'image-mapping.json', JSON.stringify(obj, null, 2));
        }
      }

      // save all other files (doc, html, md)
      files.forEach((file) => {
        try {
          const filePath = `/${file.type}${file.filename}`;
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
        ImportStatus.addExtraCols(key);
      });
      data.report = report;
    }

    ImportStatus.addRow(data);
  });

  return error;
};

const autoSaveReport = () => dirHandle && IS_BULK;

const postImportStep = async () => {
  if (autoSaveReport()) {
    // save report file in the folder
    try {
      await saveFile(dirHandle, REPORT_FILENAME, await getReport(ImportStatus.getStatus()));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Failed to save report file', e);
      return false;
    }
  }
  return true;
};

const setDefaultTransformerNotice = (importer) => {
  if (importer.usingDefaultTransformer) {
    DEFAULT_TRANSFORMER_USED.classList.remove('hidden');
  } else {
    DEFAULT_TRANSFORMER_USED.classList.add('hidden');
  }
};

const createImporter = () => {
  project = Project(config);

  config.importer = new PollImporter({
    origin: config.origin,
    poll: !IS_BULK,
    importFileURL: config.fields['import-file-url'],
  });
};

const startImport = async () => {
  const field = IS_BULK ? 'import-urls' : 'import-url';
  const urlsArray = config.fields[field].split('\n').reverse().filter((u) => u.trim() !== '');

  ImportStatus.reset();
  ImportStatus.merge({
    urls: urlsArray,
    total: urlsArray.length,
    startTime: Date.now(),
  });

  const processNext = async () => {
    if (urlsArray.length > 0) {
      const url = urlsArray.pop();
      const { remote, proxy } = getProxyURLSetup(url, config.origin);
      const src = proxy.url;

      ImportStatus.incrementImported();
      // eslint-disable-next-line no-console
      console.log(`Importing: ${ImportStatus.getStatus().imported} => ${src}`);

      const res = await loadDocument(url, {
        origin: config.origin,
        headers: config.fields['import-custom-headers'],
        enableJs: config.fields['import-enable-js'],
        scrollToBottom: config.fields['import-scroll-to-bottom'],
        pageLoadTimeout: config.fields['import-pageload-timeout'],
        includeScreenshot: false,
      });

      if (res.error) {
        // eslint-disable-next-line no-console
        console.warn(`Cannot transform ${src} - page may not exist (status ${res.status || 'unknown'})`);
        alert.error(`Cannot transform. Page may not exist (status ${res.status || 'unknown'})`);
        ImportStatus.addRow({
          url,
          status: `Invalid: ${res.status || 'unknown status'}`,
        });
        updateImporterUI([{ status: 'error' }], url);
        processNext();
      }

      if (res.redirected) {
        const u = new URL(res.url);
        let redirect = res.url;
        if (u.origin === window.location.origin) {
          redirect = `${remote.origin}${u.pathname}`;
        }
        ImportStatus.addRow({
          url,
          status: 'Redirect',
          redirect,
        });
        // eslint-disable-next-line no-console
        console.warn(`Cannot transform ${url} - redirected to ${redirect}`);
        updateImporterUI([{ status: 'redirect', from: url, to: redirect }], url);
        processNext();
      }

      if (res.document) {
        const includeDocx = !!dirHandle && config.fields['import-local-docx'];

        const { document, replacedURL, originalURL } = res;
        const onLoadSucceeded = await config.importer.onLoad({
          url: replacedURL,
          document,
          params: { originalURL },
        });

        const type = await project.getType();
        if (onLoadSucceeded) {
          config.importer.setTransformationInput({
            url: replacedURL,
            document,
            includeDocx,
            params: { originalURL },
            projectType: type,
          });
          await config.importer.transform();
          processNext();
        }
      }

      if (dirHandle && res.blob) {
        const u = new URL(src);
        const path = WebImporter.FileUtils.sanitizePath(u.pathname);

        await saveFile(dirHandle, path, res.blob);
        ImportStatus.addRow({
          url,
          status: 'Success',
          path,
        });
        updateImporterUI([{ status: 'success' }], url);
        processNext();
      }
    } else {
      toggleReportButton(true);
      enableProcessButtons();
      toggleLoadingButton(IMPORT_BUTTON);
    }
  };

  setDefaultTransformerNotice(config.importer);

  if (IS_BULK) {
    clearBulkResults();
    if (config.fields['import-show-preview']) {
      PREVIEW_CONTAINER.classList.remove('hidden');
    } else {
      PREVIEW_CONTAINER.classList.add('hidden');
    }
    toggleReportButton(false);
  } else {
    toggleReportButton(false);
    PREVIEW_CONTAINER.classList.remove('hidden');
  }

  disableProcessButtons();
  toggleLoadingButton(IMPORT_BUTTON);
  isSaveLocal = config.fields['import-local-docx'] || config.fields['import-local-html'] || config.fields['import-local-md'] || config.fields['import-jcr-package'];
  if (isSaveLocal && !dirHandle) {
    try {
      dirHandle = await getDirectoryHandle();
      await dirHandle.requestPermission({
        mode: 'readwrite',
      });
      FOLDER_NAME_SPAN.innerText = `Saving file(s) to: ${dirHandle.name}`;
      FOLDER_NAME_SPAN.classList.remove('hidden');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('No directory selected');
    }
  }

  processNext();
};

const attachListeners = () => {
  // attach a listener for valid fields, if they are not valid then disable the import button
  attachJcrFieldListeners(PARENT_SELECTOR, disableProcessButtons, enableProcessButtons);

  attachOptionFieldsListeners(config.fields, PARENT_SELECTOR);
  attachTextFieldListeners(config.fields, PARENT_SELECTOR);

  attachPreviewListeners(config, PARENT_SELECTOR);

  config.importer.addListener(async ({ results }) => {
    const frame = getContentFrame();
    const { originalURL } = frame.dataset;

    updateImporterUI(results, originalURL);
    let error = await postSuccessfulStep(results, originalURL);
    error = await postImportStep() && error;

    if (error) {
      alert.error('Something went wrong while importing the page', `${originalURL}.<br/>Please check the dev console logs.`);
    } else if (!IS_BULK) {
      alert.success('Import completed');
    }
  });

  config.importer.addErrorListener(async ({ url, error: err, params }) => {
    const frame = getContentFrame();
    const { originalURL } = frame.dataset;

    // eslint-disable-next-line no-console
    console.error(`Error importing ${url}: ${err.message}`, err);
    alert.error('Error importing', `${url}<br/>${err.message}`);

    ImportStatus.addRow({
      url: params.originalURL,
      status: `Error: ${err.message}`,
    });

    updateImporterUI([{ status: 'error' }], originalURL);
    await postImportStep();
  });

  IMPORT_BUTTON.addEventListener('click', async () => {
    jcrPages = [];
    imageMappings = new Map();
    await startImport();
  });

  IMPORT_FILE_URL_FIELD.addEventListener('change', async (event) => {
    if (config.importer) {
      await config.importer.setImportFileURL(event.target.value);
      setDefaultTransformerNotice(config.importer);
    }
  });
};

const init = async () => {
  config.origin = window.location.origin;
  config.fields = initFields(CONFIG_PARENT_SELECTOR);

  applyDefaultTheme();
  registerRuntime(({ theme }) => {
    setPreviewTheme(theme);
  });

  createImporter();

  // figure out based on the project type what to options to display to the user.
  project = Project(config);
  const type = await project.getType();
  if (type === 'doc') {
    SAVE_AS_JCR_PACKAGE.classList.add('hidden');
    config.fields['import-jcr-package'] = false;

    // query the sp-tabs component and remove the JCR tab
    document.querySelector('sp-tab[label="JCR"]').remove();
  } else {
    SAVE_AS_DOCX.classList.add('hidden');
    config.fields['import-local-docx'] = false;

    JCR_PACKAGE_FIELDS.classList.add('open');

    // initial state setup, if the fields are empty, mark them as invalid
    JCR_SITE_FOLDER.invalid = localStorage.getItem(`textfield-${JCR_SITE_FOLDER.id}`) === '';
    JCR_ASSET_FOLDER.invalid = localStorage.getItem(`textfield-${JCR_ASSET_FOLDER.id}`) === '';
  }

  if (!IS_BULK) {
    setupPreview(PARENT_SELECTOR, project);
  } else {
    setupBulkUI(project);
  }

  attachListeners();
};

init();

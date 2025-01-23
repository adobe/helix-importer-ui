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
/* global CodeMirror, html_beautify, WebImporter, ExcelJS */

import importResult from './import.result.js';
import alert from '../shared/alert.js';
import { getTheme } from '../shared/theme.js';

const PreviewElements = Object.freeze({
  TRANSFORMED_HTML_TEXTAREA: document.getElementById('import-transformed-html'),
  MD_SOURCE_TEXTAREA: document.getElementById('import-markdown-source'),
  MD_PREVIEW_PANEL: document.getElementById('import-markdown-preview'),
  IMPORT_FILE_PICKER_CONTAINER: document.getElementById('import-file-picker-container'),
  JCR_PANEL: document.getElementById('import-jcr'),
});

const PreviewButtons = Object.freeze({
  DOWNLOAD_IMPORT_REPORT_BUTTON: document.getElementById('import-downloadImportReport'),
});

const REPORT_FILENAME = 'import-report.xlsx';

const preview = {};

const SPTABS = (parentSelector) => document.querySelector(`${parentSelector} sp-tabs`);

const getReport = async (reportStatus) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');

  const headers = ['URL', 'path', 'file', 'status', 'redirect'].concat(reportStatus.extraCols);

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
  ].concat(reportStatus.rows.map((row) => {
    const {
      url, path, file, status, redirect, report,
    } = row;
    const extra = [];
    if (report) {
      reportStatus.extraCols.forEach((col) => {
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

const attachListeners = (config, parentSelector) => {
  document.querySelector('#import-doimport-button').addEventListener('click', (async () => {
    preview.transformedEditor.setValue('Import in progress...');
    preview.jcrEditor.setValue('Import in progress...');
    preview.markdownEditor.setValue('Import in progress...');
  }));

  PreviewButtons.DOWNLOAD_IMPORT_REPORT_BUTTON?.addEventListener('click', (async () => {
    const buffer = await getReport(importResult.getStatus());
    const a = document.createElement('a');
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    a.setAttribute('href', URL.createObjectURL(blob));
    a.setAttribute('download', REPORT_FILENAME);
    a.click();
  }));

  const tabs = SPTABS(parentSelector);
  if (tabs) {
    tabs.addEventListener('change', () => {
      // required for code to load in editors
      setTimeout(() => {
        preview.transformedEditor.refresh();
        preview.markdownEditor.refresh();
        preview.jcrEditor.refresh();
      }, 1);
    });
  }
};

const setupPreview = (parentSelector) => {
  const codeMirrorTheme = getTheme() === 'dark' ? 'base16-dark' : 'base16-light';
  preview.transformedEditor = CodeMirror.fromTextArea(PreviewElements.TRANSFORMED_HTML_TEXTAREA, {
    lineNumbers: true,
    mode: 'htmlmixed',
    theme: codeMirrorTheme,
  });
  preview.transformedEditor.setSize('100%', '100%');

  preview.markdownEditor = CodeMirror.fromTextArea(PreviewElements.MD_SOURCE_TEXTAREA, {
    lineNumbers: true,
    mode: 'markdown',
    theme: codeMirrorTheme,
  });
  preview.markdownEditor.setSize('100%', '100%');

  preview.markdownPreview = PreviewElements.MD_PREVIEW_PANEL;
  // XSS review: we need interpreted HTML here - <script> tags are removed by importer anyway
  preview.markdownPreview.innerHTML = WebImporter.md2html('Run an import to preview the document.');

  preview.jcrEditor = CodeMirror.fromTextArea(PreviewElements.JCR_PANEL, {
    lineNumbers: true,
    mode: 'htmlmixed',
    theme: 'base16-dark',
  });
  preview.jcrEditor.setSize('100%', '100%');

  const tabs = SPTABS(parentSelector);
  if (tabs) {
    tabs.selected = 'import-preview';
  }

  return preview;
};

const loadPreview = ({ md, html: outputHTML, jcr }) => {
  if (outputHTML) {
    preview.transformedEditor.setValue(html_beautify(outputHTML.replaceAll(/\s+/g, ' '), {
      indent_size: '2',
    }));
  }

  if (jcr) {
    preview.jcrEditor.setValue(html_beautify(jcr.replaceAll(/\s+/g, ' '), {
      indent_size: '2',
    }));
  } else {
    preview.jcrEditor.setValue('No preview available.');
  }

  if (md) {
    preview.markdownEditor.setValue(md || '');

    // XSS review: we need interpreted HTML here - <script> tags are removed by importer anyway
    preview.markdownPreview.innerHTML = WebImporter.md2html(md);

    // remove existing classes and styles
    Array.from(preview.markdownPreview.querySelectorAll('[class], [style]')).forEach((t) => {
      t.removeAttribute('class');
      t.removeAttribute('style');
    });
  } else {
    preview.markdownEditor.setValue('No preview available.');
    preview.markdownPreview.innerHTML = 'No preview available.';
  }
};

const updatePreview = (results) => {
  try {
    const status = results.length > 0 && results[0].status ? results[0].status.toLowerCase() : 'success';
    PreviewElements.IMPORT_FILE_PICKER_CONTAINER.textContent = '';
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

      PreviewElements.IMPORT_FILE_PICKER_CONTAINER.append(picker);

      if (results.length > 0) {
        picker.addEventListener('change', (e) => {
          const r = results.filter((i) => i.path === e.target.value)[0];
          loadPreview(r);
        });
      }

      loadPreview(results[0]);
    } else if (status === 'redirect') {
      alert.warning('No page imported', `${results[0].from} redirects to ${results[0].to}`);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error while updating the preview UI: ${err.message}`, err);
  }
};

const toggleReportButton = (show) => {
  PreviewButtons.DOWNLOAD_IMPORT_REPORT_BUTTON.classList.toggle('hidden', !show);
};

const setTheme = (theme) => {
  const codeMirrorTheme = theme === 'dark' ? 'base16-dark' : 'base16-light';
  preview.transformedEditor.setOption('theme', codeMirrorTheme);
  preview.markdownEditor.setOption('theme', codeMirrorTheme);
};

export {
  REPORT_FILENAME,
  PreviewButtons,
  setupPreview,
  attachListeners as attachPreviewListeners,
  loadPreview,
  updatePreview,
  getReport,
  toggleReportButton,
  setTheme as setPreviewTheme,
};

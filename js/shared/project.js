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
/* eslint-disable no-console */

import DocProject from './doc-project.js';
import XWalkProject from './xwalk-project.js';
import { LOCAL_STORAGE_KEYS } from './localstorage.js';
/**
 * @typedef {"doc" | "xwalk"} ProjectType
 * @description Represents the possible types of a project.
 */

/**
 * @typedef {Object} ProjectConfig
 * @property {string} origin - The base URL to fetch data from.
 */

/**
 * Creates a project instance based on the project type stored in .importrc.json.
 * If no type is stored, shows a dialog to let the user choose.
 * @param {ProjectConfig} config - The configuration of the project.
 * @returns {Promise<Object>} The appropriate project instance.
 */
const Project = async (config) => {
  const projectTypeMap = {
    doc: DocProject,
    xwalk: XWalkProject,
  };

  /**
   * The selected project type, one of doc, xwalk, or da.
   */
  let projectType;

  /**
   * The project instance.
   */
  let project;

  let projectPickerEl;
  let projectLockEl;
  let projectTypeContainerEl;

  let hasIrcProjectType = false;
  let hasIrcInvalidProjectType = false;
  let hasIrcJsonError = false;

  const PROJECT_CONFIG_FILE = '.importrc.json';
  const AEM_CLI_TOOLS_ENDPOINT = '/tools/importer';

  const clearLocalStorage = () => {
    localStorage.removeItem('project.type');
  };

  /**
   * Persist the project type to .importerrc.json
   */
  const saveProjectProperties = async () => {
    localStorage.setItem('project.type', project.getType());
  };

  /**
   * Show the project dialog.
   * @returns {Promise<Object>} The appropriate project instance.
   */
  const showProjectDialog = async () => {
    const dialogEl = window.top.document.getElementById('project-dialog');
    if (!dialogEl) {
      // eslint-disable-next-line no-console
      console.error('Project dialog element not found in parent window');
      return DocProject(config);
    }

    return new Promise((resolve) => {
      const handleConfirm = () => {
        const selectedType = dialogEl.querySelector('sp-radio-group').selected;
        projectType = selectedType;
        dialogEl.open = false;

        // Update project type element in top frame
        if (projectPickerEl) {
          projectPickerEl.value = selectedType;
        }

        project = projectTypeMap[selectedType](config);
        saveProjectProperties();
        resolve(project);
      };

      const confirmButton = dialogEl.querySelector('sp-button[variant="primary"]');
      if (confirmButton) {
        confirmButton.addEventListener('click', handleConfirm);
      }

      dialogEl.open = true;
    });
  };

  /**
   * Add an event listener for project type changes.
   */
  const projectTypeChangeListener = () => {
    const handler = async (event) => {
      const { value } = event.target;
      if (value === 'reset') {
        clearLocalStorage();
        projectType = null;
        await showProjectDialog();
        window.location.reload();
      } else {
        projectType = value;
        project = projectTypeMap[projectType](config);
        await saveProjectProperties();
        window.location.reload();
      }
    };

    if (projectPickerEl) {
      projectPickerEl.addEventListener('change', handler);
    }
  };

  /**
   * Add an event listener for project type changes in the dialog.
   */
  const projectDialogChangeListener = () => {
    const projectTypeGroupEl = window.top.document.getElementById('project-type-group');
    const dialogEl = window.top.document.getElementById('project-dialog');
    projectTypeGroupEl.addEventListener('change', () => {
      const okButton = dialogEl.querySelector('sp-button[variant="primary"]');
      if (okButton) {
        okButton.disabled = false;
      }
    });
  };

  /**
   * Initialize the project by loading project related properties.
   */
  const init = async () => {
    projectPickerEl = window.top.document.getElementById('project-type');
    projectLockEl = window.top.document.getElementById('project-lock');
    projectTypeContainerEl = window.top.document.getElementById('project-type-container');

    const response = await fetch(`${AEM_CLI_TOOLS_ENDPOINT}/${PROJECT_CONFIG_FILE}`);
    if (response.ok) {
      let data;
      try {
        data = await response.json();
      } catch (error) {
        hasIrcJsonError = true;
        console.error('Error parsing .importrc.json', error);
      }

      if (data?.type && !projectTypeMap[data.type]) {
        hasIrcInvalidProjectType = true;
        console.error(`Invalid project type: ${data.type}.  Please fix the .importrc.json to use a valid project type. One of ${Object.keys(projectTypeMap).join(', ')}`);
      } else {
        projectType = data?.type || null;
      }

      if (projectType) {
        hasIrcProjectType = true;
        localStorage.setItem(LOCAL_STORAGE_KEYS.PROJECT_TYPE_LOCKED, true);
        project = projectTypeMap[projectType](config);
        clearLocalStorage();
      } else {
        // make sure the project type is not locked if they happened to delete their .importrc.json
        localStorage.removeItem(LOCAL_STORAGE_KEYS.PROJECT_TYPE_LOCKED);
      }
    }

    if (!projectType) {
      projectType = localStorage.getItem('project.type') || null;
      if (projectType) {
        project = projectTypeMap[projectType](config);
      }
    }

    projectTypeChangeListener();
    projectDialogChangeListener();
  };

  /**
   * Helper function to check if there is an error with the project type.
   * @return {boolean} True if there is an error, false otherwise.
   */
  const hasError = () => hasIrcProjectType || hasIrcJsonError || hasIrcInvalidProjectType;

  /**
   * Update the UI based on the project type.
   */
  const updateUI = () => {
    const SAVE_AS_DOCX = document.getElementById('import-local-docx');
    const DA_FIELD = document.getElementById('import-local-da');
    const XWALK_FIELDS = document.getElementById('xwalk');
    const JCR_ASSET_FOLDER = document.getElementById('jcr-asset-folder');
    const JCR_SITE_FOLDER = document.getElementById('jcr-site-folder');

    // disable the project type picker if there is a hard project type
    if (hasIrcProjectType) {
      projectPickerEl.disabled = true;
      projectLockEl.style.display = 'block';
    }

    if (hasIrcInvalidProjectType || hasIrcJsonError) {
      // if we have an error then we can display the picker as invalid
      projectPickerEl.invalid = true;

      const overlay = window.top.document.createElement('sp-overlay');
      overlay.trigger = 'project-type@hover';
      overlay.placement = 'top';

      const tooltip = window.top.document.createElement('sp-tooltip');
      overlay.appendChild(tooltip);

      projectTypeContainerEl.appendChild(overlay);

      if (hasIrcJsonError) {
        tooltip.textContent = 'The .importrc.json file contains errors. Please see the console for details.';
      } else {
        tooltip.textContent = `The project type is invalid. Please fix the .importrc.json to use a valid project type. One of ${Object.keys(projectTypeMap).join(', ')}`;
      }
    }

    if (projectType === 'doc') {
      if (XWALK_FIELDS) XWALK_FIELDS.remove();

      config.fields['import-jcr-package'] = false;

      // bulk import does not have these tabs
      const jcrTab = document.querySelector('sp-tab[label="JCR"]');
      if (jcrTab) {
        jcrTab.remove();
      }
    } else {
      if (SAVE_AS_DOCX) SAVE_AS_DOCX.remove();
      if (DA_FIELD) DA_FIELD.remove();
      config.fields['import-local-docx'] = false;

      // initial state setup, if the fields are empty, mark them as invalid
      JCR_SITE_FOLDER.invalid = localStorage.getItem(`textfield-${JCR_SITE_FOLDER.id}`) === '';
      JCR_ASSET_FOLDER.invalid = localStorage.getItem(`textfield-${JCR_ASSET_FOLDER.id}`) === '';

      project.setSitePath(JCR_SITE_FOLDER.value);
      project.setAssetPath(JCR_ASSET_FOLDER.value);
    }

    // Update UI based on project type
    if (projectPickerEl) {
      projectPickerEl.value = projectType;
    }
  };

  await init();

  // do not show the dialog if there is already a project type
  // do not show the dialog if there is an error
  if (!projectType && !hasError()) {
    await showProjectDialog();
  }

  updateUI();

  return project;
};

export default Project;

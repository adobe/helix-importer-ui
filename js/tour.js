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
import { LOCAL_STORAGE_KEYS } from './shared/localstorage.js';
/**
 * Shows a coachmark for the project picker if the user hasn't seen it before
 */
export default function showProjectPickerCoachmark() {
  if (localStorage.getItem(LOCAL_STORAGE_KEYS.TOURS_PROJECT_PICKER_SEEN)
    || localStorage.getItem(LOCAL_STORAGE_KEYS.PROJECT_TYPE_LOCKED)) {
    return;
  }

  const projectPicker = window.top.document.getElementById('project-type');
  if (!projectPicker) {
    return;
  }

  // Create coachmark elements
  const coachIndicator = window.top.document.createElement('sp-coach-indicator');
  coachIndicator['static-color'] = 'dark';

  // add the coach indicator before the projectPicker
  projectPicker.parentElement.insertBefore(coachIndicator, projectPicker);

  const overlay = window.top.document.createElement('sp-overlay');
  overlay.open = true;
  overlay.placement = 'top';
  overlay.trigger = 'project-type@click';
  overlay.type = 'modal';

  projectPicker.parentElement.appendChild(overlay);

  const coachmark = window.top.document.createElement('sp-coachmark');
  coachmark.open = true;
  coachmark.primaryCTA = 'Dismiss';
  coachmark.addEventListener('primary', () => {
    overlay.remove();
    coachIndicator.remove();
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOURS_PROJECT_PICKER_SEEN, 'true');
  });

  const titleSlot = window.top.document.createElement('div');
  titleSlot.slot = 'title';
  titleSlot.textContent = 'Project Type';
  coachmark.appendChild(titleSlot);

  const contentSlot = window.top.document.createElement('div');
  contentSlot.slot = 'content';
  contentSlot.textContent = 'This is your project picker. Based on your project selection the UI will update to show the appropriate options.';
  coachmark.appendChild(contentSlot);

  overlay.appendChild(coachmark);
}

// if project.type has not been set
//  don't show the coachmark until the dialog is closed
if (!localStorage.getItem(LOCAL_STORAGE_KEYS.PROJECT_TYPE)) {
  const projectDialog = window.top.document.querySelector('#project-dialog');
  projectDialog.addEventListener('close', () => {
    showProjectPickerCoachmark();
  });
} else if (!localStorage.getItem(LOCAL_STORAGE_KEYS.TOURS_PROJECT_PICKER_SEEN)) {
  showProjectPickerCoachmark();
}

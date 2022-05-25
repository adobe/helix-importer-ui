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
import { asyncForEach } from './utils.js';

async function saveFile(dirHandle, path, content) {
  if (!dirHandle) {
    throw new Error('No directory handle provided');
  }

  let parentDirHandle = dirHandle;
  const folders = path.split('/');
  await asyncForEach(folders, async (folder, i) => {
    if (folder && i < folders.length - 1) {
      parentDirHandle = await parentDirHandle.getDirectoryHandle(folder, { create: true });
    }
  });

  const fileHandle = await parentDirHandle.getFileHandle(
    folders[folders.length - 1],
    { create: true },
  );

  const writable = await fileHandle.createWritable();
  await writable.write(content);
  return writable.close();
}

async function getDirectoryHandle() {
  return window.showDirectoryPicker();
}

export {
  saveFile,
  getDirectoryHandle,
};

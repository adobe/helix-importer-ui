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

const runtime = {};

function attachRuntime(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    runtime[key] = value;
  });
}

function registerRuntime(callback = () => undefined) {
  window.addEventListener('message', (event) => {
    // Ensure the message is from a trusted origin
    if (event.origin !== window.location.origin) {
      return;
    }

    // Handle the received message
    const { theme } = event.data;
    if (theme) {
      document.querySelector('sp-theme').color = theme;
    }

    callback(event.data);
  });

  window.attachRuntime = attachRuntime;
}

function getRuntime() {
  return runtime;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  registerRuntime,
  getRuntime,
};

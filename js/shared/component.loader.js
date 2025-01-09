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

export const loadComponents = async (config) => {
  const components = {};
  if (config.origin) {
    const [
      componentModels, componentsDefinition, componentFilters,
    ] = await Promise.all([
      fetch(`${config.origin}/component-models.json`).then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch component-models.json: ${res.status}`);
        } else {
          return res.text();
        }
      }),
      fetch(`${config.origin}/component-definition.json`).then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch component-definition.json: ${res.status}`);
        } else {
          return res.text();
        }
      }),
      fetch(`${config.origin}/component-filters.json`).then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch component-filters.json: ${res.status}`);
        } else {
          return res.text();
        }
      }),
    ]);
    components.models = JSON.parse(componentModels);
    components.definition = JSON.parse(componentsDefinition);
    components.filters = JSON.parse(componentFilters);
  }
  return components;
};
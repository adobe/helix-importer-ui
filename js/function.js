/*
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/**
 * Determines if the given parameter is an array.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if the parameter is an array, false otherwise.
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Determines whether the given value is a non-empty array (length greater than zero).
 * @param {*} value - The value to check.
 * @return {boolean} True if the value is a non-empty array, false otherwise.
 */
function isNonEmptyArray(value) {
  return isArray(value) && value.length > 0;
}

/**
 * Checks if the given parameter is an object and not an array or null.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if the parameter is an object, false otherwise.
 */
function isObject(value) {
  return value !== null && typeof value === 'object' && !isArray(value);
}

/**
 * Checks if the given value is an object and contains properties of its own.
 * @param {*} value - The value to check.
 * @return {boolean} True if the value is a non-empty object, false otherwise.
 */
function isNonEmptyObject(value) {
  return isObject(value) && Object.keys(value).length > 0;
}

/**
 * Determines if the given parameter is a string.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if the parameter is a string, false otherwise.
 */
function isString(value) {
  return (!!value || value === '') && typeof value === 'string';
}

/**
 * Checks if the given string is not empty.
 *
 * @param {*} str - The string to check.
 * @returns {boolean} True if the string is not empty, false otherwise.
 */
function hasText(str) {
  return !!str && isString(str);
}

export {
  isArray,
  isNonEmptyArray,
  isNonEmptyObject,
  isObject,
  isString,
  hasText,
};

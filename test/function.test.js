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

/* eslint-env mocha */

import { expect } from 'chai';
import {
  hasText,
  isArray,
  isNonEmptyArray,
  isNonEmptyObject,
  isObject,
  isString,
} from '../js/function.js';

describe('function tests', () => {
  it('is array', () => {
    const invalidArrays = [
      true,
      {},
      { asd: 'dsa' },
      '',
      'dasd',
      NaN,
      Infinity,
      -Infinity,
      123,
    ];

    invalidArrays.forEach((value) => expect(isArray(value)).to.be.false);
    expect(isArray([])).to.equal(true);
    expect(isArray(['abc'])).to.equal(true);
  });

  it('is non-empty array', () => {
    const invalidArrays = [
      true,
      {},
      { asd: 'dsa' },
      '',
      'dasd',
      NaN,
      Infinity,
      -Infinity,
      123,
      [],
    ];

    invalidArrays.forEach((value) => expect(isNonEmptyArray(value)).to.be.false);
    expect(isNonEmptyArray(['abc'])).to.equal(true);
  });

  it('is object', () => {
    const invalidObjects = [
      null,
      undefined,
      123,
      'dasd',
      [],
      ['dasd'],
    ];

    invalidObjects.forEach((value) => expect(isObject(value)).to.be.false);

    expect(isObject({})).to.equal(true);
    expect(isObject({ asd: 'dsa' })).to.equal(true);
  });

  it('non empty object', () => {
    const invalidObjects = [
      null,
      undefined,
      123,
      'dasd',
      [],
      ['dasd'],
      {},
    ];

    invalidObjects.forEach((value) => expect(isNonEmptyObject(value)).to.be.false);

    expect(isNonEmptyObject({})).to.equal(false);
    expect(isNonEmptyObject({ asd: 'dsa' })).to.equal(true);
  });

  it('is string', () => {
    const invalidStrings = [
      null,
      undefined,
      123,
      [],
      ['dasd'],
      {},
      { asd: 'dsa' },
    ];

    invalidStrings.forEach((value) => expect(isString(value)).to.be.false);

    expect(isString('')).to.equal(true);
    expect(isString('dasd')).to.equal(true);
  });

  it('has text', () => {
    const invalidStrings = [
      null,
      undefined,
      123,
      [],
      [''],
      {},
      { asd: 'dsa' },
      '',
    ];

    invalidStrings.forEach((value) => expect(hasText(value)).to.be.false);

    expect(hasText('a')).to.equal(true);
    expect(hasText(' ')).to.equal(true);
    expect(hasText(' a ')).to.equal(true);
  });
});

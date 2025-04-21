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
/* eslint-env mocha */
import { expect } from 'chai';
import { compareVersions } from '../js/shared/utils.js';

describe('utils', () => {
  describe('compareVersions', () => {
    const AEM_CLI_VERSION = '16.10.16';

    it('should return true when version is less than AEM_CLI_VERSION', () => {
      expect(compareVersions('16.10.15', AEM_CLI_VERSION)).to.equal(-1);
      expect(compareVersions('16.9.99', AEM_CLI_VERSION)).to.equal(-1);
      expect(compareVersions('15.99.99', AEM_CLI_VERSION)).to.equal(-1);
    });

    it('should return false when version is equal to AEM_CLI_VERSION', () => {
      expect(compareVersions('16.10.16', AEM_CLI_VERSION)).to.equal(0);
    });

    it('should return false when version is greater than AEM_CLI_VERSION', () => {
      expect(compareVersions('16.10.17', AEM_CLI_VERSION)).to.equal(1);
      expect(compareVersions('16.11.0', AEM_CLI_VERSION)).to.equal(1);
      expect(compareVersions('17.0.0', AEM_CLI_VERSION)).to.equal(1);
    });

    it('should handle edge cases', () => {
      // Test with invalid version format
      expect(() => compareVersions('invalid', AEM_CLI_VERSION)).to.throw(Error);

      // Test with empty version
      expect(() => compareVersions('', AEM_CLI_VERSION)).to.throw(Error);
    });
  });
});

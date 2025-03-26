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
import XWalkProject from '../js/shared/xwalk-project.js';

describe('xwalk project', () => {
  let project;

  beforeEach(() => {
    project = XWalkProject({
      origin: 'https://example.com',
    });
  });

  describe('asset folder tests', () => {
    it('setAssetPath should set asset folder', () => {
      project.setAssetPath('root');
      expect(project.getAssetPath()).to.equal('root');

      project.setAssetPath('/root');
      expect(project.getAssetPath()).to.equal('root');

      project.setAssetPath('//root');
      expect(project.getAssetPath()).to.equal('root');

      project.setAssetPath('//root/subfolder');
      expect(project.getAssetPath()).to.equal('root/subfolder');

      expect(project.getAssetPath()).to.equal('root/subfolder');
    });

    it('setAssetPath should remove /content/dam prefix and leading slash', () => {
      project.setAssetPath('/content/dam/assets/images');
      expect(project.getAssetPath()).to.equal('assets/images');
    });

    it('setAssetPath should not modify folder without /content prefix or leading slash', () => {
      project.setAssetPath('assets/images');
      expect(project.getAssetPath()).to.equal('assets/images');
    });

    it('setAssetPath should remove leading slash', () => {
      project.setAssetPath('/assets/images');
      expect(project.getAssetPath()).to.equal('assets/images');
    });

    it('setAssetPath null should be set to null', () => {
      project.setAssetPath(null);
      expect(project.getAssetPath()).to.be.null;
    });
  });

  describe('site folder tests', () => {
    it('setSitePath should set site folder', () => {
      project.setSitePath('site');
      expect(project.getSitePath()).to.equal('site');
    });

    it('setSitePath should remove leading slash from site', () => {
      project.setSitePath('/site');
      expect(project.getSitePath()).to.equals('site');
    });

    it('setSitePath should remove all leading slashes', () => {
      project.setSitePath('//site');
      expect(project.getSitePath()).to.equals('site');
    });

    it('setSitePath should remove /content prefix and leading slash', () => {
      project.setSitePath('/content/site');
      expect(project.getSitePath()).to.equal('site');
    });

    it('setSitePath should keep subfolders', () => {
      project.setSitePath('/content/site/subfolder');
      expect(project.getSitePath()).to.equal('site/subfolder');
    });

    it('setSitePath should not modify folder without /content prefix or leading slash', () => {
      project.setSitePath('site');
      expect(project.getSitePath()).to.equal('site');
    });

    it('setSitePath null should be set to null', () => {
      project.setSitePath(null);
      expect(project.getSitePath()).to.be.null;
    });
  });
});

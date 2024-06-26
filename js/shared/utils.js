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
import { getContentFrame, IS_EXPRESS, IS_FRAGMENTS } from './ui.js';
// eslint-disable-next-line import/no-cycle
import {
  getFragmentSectionsMappingData,
} from '../sections-mapping/import/sections-mapping.import.js';
import {
  getFreeSelectionsMapping,
} from '../express/free-mapping/free.mapping.utils.js';

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
}

// Create and return an element with optional 'props' attributes and optional inner text.
function createElement(nodeName, props, innerText) {
  const newElement = document.createElement(nodeName);
  if (newElement) {
    if (props) {
      Object.entries(props)
        .forEach(([key, value]) => {
          newElement.setAttribute(key, value);
        });
    }
    if (innerText) {
      newElement.innerText = innerText;
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('Error creating element:', nodeName);
  }
  return newElement;
}

/**
 * Get the current URL.  User can change from time to time.
 * @returns {string}
 */
const getCurrentURL = () => {
  const frame = getContentFrame();
  const { originalURL } = frame.dataset;
  return originalURL;
};

function getElementByXpath(document, path) {
  try {
    return document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Error evaluating this xpath:', path, e);
  }
  return undefined;
}

// courtesy of https://github.com/adobecom/aem-milo-migrations/blob/main/tools/importer/parsers/utils.js
const getXPath = (elm, document, withDetails = false) => {
  const allNodes = document.getElementsByTagName('*');
  let segs;
  // eslint-disable-next-line no-param-reassign
  for (segs = []; elm && elm.nodeType === 1; elm = elm.parentNode) {
    if (withDetails) {
      if (elm.hasAttribute('id')) {
        let uniqueIdCount = 0;
        for (let n = 0; n < allNodes.length; n += 1) {
          if (allNodes[n].hasAttribute('id') && allNodes[n].id === elm.id) {
            uniqueIdCount += 1;
          }
          if (uniqueIdCount > 1) {
            break;
          }
        }
        if (uniqueIdCount === 1) {
          segs.unshift(`id("${elm.getAttribute('id')}")`);
          return segs.join('/');
        }

        segs.unshift(`${elm.localName.toLowerCase()}[@id="${elm.getAttribute('id')}"]`);
      } else if (elm.hasAttribute('class')) {
        segs.unshift(`${elm.localName.toLowerCase()}[@class="${[...elm.classList].join(' ').trim()}"]`);
      }
    } else {
      let i;
      let sib;
      for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.localName === elm.localName) {
          i += 1;
        }
      }
      segs.unshift(`${elm.localName.toLowerCase()}[${i}]`);
    }
  }
  return segs.length ? `/${segs.join('/')}` : null;
};

function getSectionsMappingData(url) {
  if (IS_FRAGMENTS) {
    return getFragmentSectionsMappingData(url);
  }
  if (IS_EXPRESS) {
    return getFreeSelectionsMapping(url);
  }

  return [];
}

export {
  asyncForEach,
  createElement,
  getCurrentURL,
  getElementByXpath,
  getSectionsMappingData,
  getXPath,
};

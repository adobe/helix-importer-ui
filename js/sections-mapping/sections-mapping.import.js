/**
 * GENERIC IMPORT SCRIPT FOR SECTIONS MAPPING DATA
 */

import * as parsers from './parsers/parsers.js';
import { getImporterSectionsMapping } from '../shared/mappings.js';

/**
 * functions
 */

export function generateDocumentPath({ document, url }) {
  let { pathname } = new URL(url);
  pathname = pathname.replace('.html', '')
  return WebImporter.FileUtils.sanitizePath(pathname);
}

function getElementByXpath(document, path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

/**
 * constants
 */

// init sections report
const IMPORT_REPORT = {};

/**
 * main
 */

export default {
  onLoad: async ({ document /* , url, params */ }) => {
    // send 'esc' keydown event to close the dialog
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        altKey: false,
        code: 'Escape',
        ctrlKey: false,
        isComposing: false,
        key: 'Escape',
        location: 0,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        which: 27,
        charCode: 0,
        keyCode: 27,
      }),
    );
    document.elementFromPoint(0, 0).click();

    // mark hidden divs + add bounding client rect data to all "visible" divs
    document.querySelectorAll('div').forEach((div) => {
      if (div && /none/i.test(window.getComputedStyle(div).display.trim())) {
        div.setAttribute('data-hlx-imp-hidden-div', '');
      } else {
        var domRect = div.getBoundingClientRect().toJSON()
        Object.keys(domRect).forEach(p => domRect[p] = Math.round(domRect[p]));
        if (domRect.width > 0 && domRect.height > 0) {
          div.setAttribute('data-hlx-imp-rect', JSON.stringify(domRect));
        }
        const bgImage = window.getComputedStyle(div).getPropertyValue('background-image');
        if (bgImage && bgImage !== 'none') {
          div.setAttribute('data-hlx-background-image', bgImage);
        }
        const bgColor = window.getComputedStyle(div).getPropertyValue('background-color');
        if (bgColor && bgColor !== 'rgb(0, 0, 0)' && bgColor !== 'rgba(0, 0, 0, 0)') {
          div.setAttribute('data-hlx-imp-bgcolor', bgColor);
        }
        const color = window.getComputedStyle(div).getPropertyValue('color');
        if (color && color !== 'rgb(0, 0, 0)') {
          div.setAttribute('data-hlx-imp-color', color);
        }
      }
    });
  },

  transform: async ({ document, params }) => {

    // // console.log(parsers?);
    // debugger;

    /**
     * get sections mapping data
     */
    const mapping = getImporterSectionsMapping(params.originalURL);
    if (!mapping) {
      throw new Error('No sections mapping data found, aborting');
    }

    const main = document.querySelector('main') || document.body;

    /**
     * parse sections mapping data
     */

    const importedContent = document.createElement('div');

    const elementsToParse = mapping.map((m) => {
      // get dom element from xpath string
      return getElementByXpath(document, m.xpath) || null;
    });

    mapping.forEach((m, idx) => {
      // get dom element from xpath string
      const el = elementsToParse[idx  ];
      if (el) {
        console.log('found element', m.section, el);
        const parser = parsers[m.mapping];
        if (parser) {
          const block = parser(el, window);
          if (block) {
            importedContent.appendChild(block);
          }
        } else {
          console.warn('parser not found', m.mapping);
        }
      } else {
        console.warn('element not found', m.section, m.xpath);
      }
    });

    /**
     * cleanup to remove unwanted elements
     */

    // hidden elements
    main.querySelectorAll('[data-hlx-imp-hidden-div]').forEach((el) => { el.remove(); });

    WebImporter.DOMUtils.remove(main, [
      'style',
      'source',
      'script',
    ]);

    main.querySelectorAll('div').forEach((el) => {
      Object.keys(el.dataset).forEach((key) => delete el.dataset[key]);
      for (let i = 0; i < el.attributes.length; i++) {
          el.removeAttribute(el.attributes[i].name);
      }
    });

    /**
     * return + custom report
     */

    // // make every report value a string
    // Object.keys(IMPORT_REPORT).map(k => (IMPORT_REPORT[k] = '' + IMPORT_REPORT[k]));

    const elements = [{
      element: importedContent,
      path: generateDocumentPath({ document, url: params.originalURL }),
      report: IMPORT_REPORT,
    }];

    return elements;
  },

  /**
   * Return a path that describes the document being transformed (file name, nesting...).
   * The path is then used to create the corresponding Word document.
   * @param {String} url The url of the document being transformed.
   * @param {HTMLDocument} document The document
   */
  generateDocumentPath: generateDocumentPath,

};

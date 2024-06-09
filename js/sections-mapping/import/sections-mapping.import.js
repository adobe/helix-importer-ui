/**
 * GENERIC IMPORT SCRIPT FOR SECTIONS MAPPING DATA
 */
/* global WebImporter */

import * as parsers from './parsers/parsers.js';

/**
 * functions
 */

export function generateDocumentPath({ url }) {
  let p = new URL(url).pathname;
  if (p.endsWith('/')) {
    p = `${p}index`;
  }
  p = decodeURIComponent(p)
    .toLowerCase()
    .replace(/\.html$/, '')
    .replace(/[^a-z0-9/]/gm, '-');
  return WebImporter.FileUtils.sanitizePath(p);
}

function getSectionsMappingData(/* url */) {
  const item = localStorage.getItem('helix-importer-sections-mapping');

  if (item) {
    const mData = JSON.parse(item);
    return mData.mapping;
    // TODO - support multiple mappings
    // const found = mData.find((m) => m.url === url);
    // if (found) {
    //   return found;
    // }
  }

  return null;
}

function getElementByXpath(document, path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  )
    .singleNodeValue;
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
        const domRect = div.getBoundingClientRect().toJSON();
        if (Math.round(domRect.width) > 0 && Math.round(domRect.height) > 0) {
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
    /**
     * get sections mapping data
     */

    const mapping = getSectionsMappingData(params.originalURL);
    if (!mapping) {
      throw new Error('No sections mapping data found, aborting');
    }

    /**
     * init elements
     */

    const main = document.querySelector('main') || document.body;
    const headerEl = document.createElement('div');
    const footerEl = document.createElement('div');
    const importedElements = [];

    /**
     * parse sections mapping data
     */

    const importedContent = document.createElement('div');

    // get dom element from xpath string
    const elementsToParse = mapping.map((m) => getElementByXpath(document, m.xpath) || null);

    mapping.forEach((m, idx) => {
      // get dom element from xpath string
      const el = elementsToParse[idx];
      if (el) {
        console.log('found element', m.section, el);
        if (m.mapping === 'header') {
          const block = parsers.header(el, window);
          if (block) {
            headerEl.appendChild(block);
          }
        } else if (m.mapping === 'footer') {
          const block = parsers.footer(el, window);
          if (block) {
            footerEl.appendChild(block);
          }
        } else {
          const parser = parsers[m.mapping];
          if (parser) {
            const block = parser(el, window);
            if (block) {
              importedContent.appendChild(block);
            }
          } else {
            console.warn('parser not found', m.mapping);
          }
        }
      } else {
        console.warn('element not found', m.section, m.xpath);
      }
    });

    /**
     * cleanup to remove unwanted elements
     */

    // adjust anchor links (https://github.com/adobe/helix-importer/issues/348)
    if (main.querySelector('a[href^="#"]')) {
      const u = new URL(params.originalURL);
      const links = main.querySelectorAll('a[href^="#"]');
      for (let i = 0; i < links.length; i += 1) {
        const a = links[i];
        a.href = `${u.pathname}${a.getAttribute('href')}`;
      }
    }

    // hidden elements
    main.querySelectorAll('[data-hlx-imp-hidden-div]').forEach((el) => { el.remove(); });

    WebImporter.DOMUtils.remove(main, [
      'style',
      'source',
      'script',
    ]);

    main.querySelectorAll('div').forEach((el) => {
      Object.keys(el.dataset).forEach((key) => delete el.dataset[key]);
      for (let i = 0; i < el.attributes.length; i += 1) {
        el.removeAttribute(el.attributes[i].name);
      }
    });

    /**
     * return + custom report
     */

    // // make every report value a string
    // Object.keys(IMPORT_REPORT).map(k => (IMPORT_REPORT[k] = '' + IMPORT_REPORT[k]));

    importedElements.push({
      element: importedContent,
      path: generateDocumentPath({ document, url: params.originalURL }),
      report: IMPORT_REPORT,
    });

    if (headerEl.children.length > 0) {
      importedElements.push({
        element: headerEl,
        path: '/nav',
      });
    }

    if (footerEl.children.length > 0) {
      importedElements.push({
        element: footerEl,
        path: '/footer',
      });
    }

    return importedElements;
  },

  /**
   * Return a path that describes the document being transformed (file name, nesting...).
   * The path is then used to create the corresponding Word document.
   * @param {String} url The url of the document being transformed.
   * @param {HTMLDocument} document The document
   */
  generateDocumentPath,

};

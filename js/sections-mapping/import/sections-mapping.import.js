/**
 * GENERIC IMPORT SCRIPT FOR SECTIONS MAPPING DATA
 */
/* global WebImporter */

import { getElementByXpath } from '../../shared/utils.js';
import * as parsers from './parsers/parsers.js';

/**
 * functions
 */

function getImgFromBackground(element, document, originalURL) {
  const styleAttr = element?.getAttribute('style')?.split(';');
  if (styleAttr) {
    styleAttr.forEach((style) => {
      const split = style.split(':');
      const prop = split.shift();
      const value = split.join(':').trim();
      if (prop === 'background-image' || prop === 'background') {
        const sanitizedValue = value.replace(/\s/g, '').split(',').shift();
        const elStyle = element.style;
        elStyle.backgroundImage = sanitizedValue;
      }
    });
    const url = element.style.backgroundImage;
    if (url && url.toLowerCase() !== 'none') {
      let src = url.replace(/url\(/gm, '').replace(/'/gm, '').replace(/"/gm, '').replace(/\)/gm, '');
      if (src.startsWith('http://localhost')) {
        const u = new URL(src);
        const newU = new URL(`${u.pathname}${u.search}${u.hash}`, originalURL);
        src = newU.toString();
      }
      const img = document.createElement('img');
      img.src = src;
      return img;
    }
  }
  return null;
}

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

export function getFragmentSectionsMappingData(url) {
  const item = localStorage.getItem('helix-importer-sections-mapping');

  if (item) {
    const mData = JSON.parse(item);

    // return manual mapping first
    let found = mData.find((m) => m.url === url && m.autoDetect === false);
    if (found) {
      return found.mapping;
    }

    // return auto-detected mapping
    found = mData.find((m) => m.url === url && m.autoDetect === true);
    if (found) {
      return found.mapping;
    }
  }

  return null;
}

/**
 * constants
 */

const IMPORT_TARGETS = {
  AEM_BLOCK_COLLECTION: 'aem-block-collection',
  CROSSWALK: 'crosswalk',
};

// // init sections report
// const IMPORT_REPORT = {};

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
    document.elementFromPoint(0, 0)?.click();

    // mark hidden divs + add bounding client rect data to all "visible" divs
    document.querySelectorAll('*').forEach((el) => {
      if (el && /none/i.test(window.getComputedStyle(el).display.trim())) {
        el.setAttribute('data-hlx-imp-hidden-div', '');
      }
    });

    document.querySelectorAll('div').forEach((div) => {
      if (div && /none/i.test(window.getComputedStyle(div).display.trim())) {
        div.setAttribute('data-hlx-imp-hidden-div', '');
      } else {
        const domRect = div.getBoundingClientRect().toJSON();
        if (Math.round(domRect.width) > 0 && Math.round(domRect.height) > 0) {
          div.setAttribute('data-hlx-imp-rect', JSON.stringify(domRect));
        }
        const bgImage = window.getComputedStyle(div).getPropertyValue('background-image');
        if (bgImage && bgImage !== 'none' && bgImage.includes('url(')) {
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

    const mapping = getFragmentSectionsMappingData(params.originalURL);
    if (!mapping) {
      throw new Error('No sections mapping data found, aborting');
    }

    // get import target
    const target = sessionStorage.getItem('demo-tool-aem-importer-target') || IMPORT_TARGETS.AEM_BLOCK_COLLECTION;

    const importedElements = mapping.map((m) => {
      const importedEl = {
        element: null,
        path: m.path,
        report: {},
      };

      // build element!
      const el = document.createElement('div');

      // import content for sections mapping data
      m.sections.forEach((s, idx) => {
        s.blocks.forEach((b) => {
          const bEl = getElementByXpath(document, b.xpath);

          if (!bEl) {
            console.warn('element not found', b.section, b.xpath);
            return;
          }

          // make all links absolute
          bEl.querySelectorAll('a').forEach((a) => {
            const href = a.getAttribute('href');
            if (href) {
              // eslint-disable-next-line no-param-reassign
              a.href = new URL(href, params.originalURL).href;
            }
            // remove empty links
            if (!href && a.textContent.trim().length === 0) {
              a.remove();
            }
          });

          // crosswalk does not support images inside links
          if (target === IMPORT_TARGETS.CROSSWALK) {
            bEl.querySelectorAll('a > img').forEach((i) => {
              i.parentElement.before(i);
            });
          }

          bEl.querySelectorAll('img').forEach((img) => {
            const src = img.getAttribute('src');
            if (!src.startsWith('./') && !src.startsWith('/') && !src.startsWith('../') && !src.startsWith('http')) {
              const u = new URL(src, params.originalURL);
              img.src = u.toString();
            }
          });

          bEl.querySelectorAll('[style*="background-image: url"], [style*="background: url"]').forEach((element) => {
            const img = getImgFromBackground(element, document, params.originalURL);
            element.prepend(img);
            element.style.removeProperty('background-image');
          });

          const parser = parsers[b.mapping];
          if (parser) {
            const block = parser(bEl.cloneNode(true), {
              mapping: b,
              document,
              target,
              params,
              allMappings: m,
            });
            if (block) {
              el.appendChild(block);
            }
          } else {
            console.warn('parser not found', m.mapping);
            el.appendChild(bEl.cloneNode(true));
          }
        });

        if (s.settings && s.settings['section-metadata-style']) {
          const smBlock = WebImporter.DOMUtils.createTable([
            ['section-metadata'],
            ['style', s.settings['section-metadata-style']],
          ], document);
          el.appendChild(smBlock);
        }

        if (idx < m.sections.length - 1) {
          el.appendChild(document.createElement('hr'));
        }
      });

      // do not create metadata for now for crosswalk as it may break when converting to JCR.
      if (target !== 'crosswalk') {
        if (m.path !== '/nav' && m.path !== '/footer') {
          WebImporter.rules.createMetadata(el, document);
        }
      }

      // adjust anchor links
      if (el.querySelector('a[href^="#"]')) {
        const u = new URL(params.originalURL);
        const links = el.querySelectorAll('a[href^="#"]');
        for (let i = 0; i < links.length; i += 1) {
          const a = links[i];
          a.href = `${u.pathname}${a.getAttribute('href')}`;
        }
      }

      // cleanup unwanted attributes in element and children
      function cleanUpAttributes(e) {
        e.removeAttribute('class');
        e.removeAttribute('style');
        const attrNames = e.getAttributeNames().filter((a) => a.startsWith('data-') || a.startsWith('aria-'));
        if (attrNames.length > 0) {
          attrNames.forEach((a) => {
            e.removeAttribute(a);
          });
        }
      }
      cleanUpAttributes(el);
      el.querySelectorAll('*').forEach((e) => cleanUpAttributes(e));

      // default helix-importer rules
      WebImporter.rules.adjustImageUrls(el, params.originalURL, params.originalURL);

      WebImporter.DOMUtils.remove(el, [
        'style',
        'source',
        'script',
        'noscript',
      ]);

      importedEl.element = el;

      return importedEl;
    });
    /**
     * init elements
     */

    // const main = document.querySelector('main') || document.body;
    // const headerEl = document.createElement('div');
    // const footerEl = document.createElement('div');
    // const importedElements = [];

    // /**
    //  * parse sections mapping data
    //  */

    // const importedContent = document.createElement('div');

    // // get dom element from xpath string
    // const elementsToParse = mapping.map((m) => getElementByXpath(document, m.xpath) || null);

    // mapping.forEach((m, idx) => {
    //   // get dom element from xpath string
    //   const el = elementsToParse[idx];
    //   if (el) {
    //     console.log('found element', m.section, el);
    //     if (m.mapping === 'header') {
    //       const block = parsers.header(el, window);
    //       if (block) {
    //         headerEl.appendChild(block);
    //       }
    //     } else if (m.mapping === 'footer') {
    //       const block = parsers.footer(el, window);
    //       if (block) {
    //         footerEl.appendChild(block);
    //       }
    //     } else {
    //       const parser = parsers[m.mapping];
    //       if (parser) {
    //         const block = parser(el, window);
    //         if (block) {
    //           importedContent.appendChild(block);
    //         }
    //       } else {
    //         console.warn('parser not found', m.mapping);
    //       }
    //     }
    //   } else {
    //     console.warn('element not found', m.section, m.xpath);
    //   }
    // });

    // /**
    //  * cleanup to remove unwanted elements
    //  */

    // // adjust anchor links (https://github.com/adobe/helix-importer/issues/348)
    // if (main.querySelector('a[href^="#"]')) {
    //   const u = new URL(params.originalURL);
    //   const links = main.querySelectorAll('a[href^="#"]');
    //   for (let i = 0; i < links.length; i += 1) {
    //     const a = links[i];
    //     a.href = `${u.pathname}${a.getAttribute('href')}`;
    //   }
    // }

    // // hidden elements
    // main.querySelectorAll('[data-hlx-imp-hidden-div]').forEach((el) => { el.remove(); });

    // WebImporter.DOMUtils.remove(main, [
    //   'style',
    //   'source',
    //   'script',
    // ]);

    // main.querySelectorAll('div').forEach((el) => {
    //   Object.keys(el.dataset).forEach((key) => delete el.dataset[key]);
    //   for (let i = 0; i < el.attributes.length; i += 1) {
    //     el.removeAttribute(el.attributes[i].name);
    //   }
    // });

    /**
     * return + custom report
     */

    // // make every report value a string
    // Object.keys(IMPORT_REPORT).map(k => (IMPORT_REPORT[k] = '' + IMPORT_REPORT[k]));

    // importedElements.push({
    //   element: importedContent,
    //   path: generateDocumentPath({ document, url: params.originalURL }),
    //   report: IMPORT_REPORT,
    // });

    // if (headerEl.children.length > 0) {
    //   importedElements.push({
    //     element: headerEl,
    //     path: '/nav',
    //   });
    // }

    // if (footerEl.children.length > 0) {
    //   importedElements.push({
    //     element: footerEl,
    //     path: '/footer',
    //   });
    // }

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

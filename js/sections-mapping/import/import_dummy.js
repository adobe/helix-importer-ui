/**
 * functions
 */

export function generateDocumentPath({ document, url }) {
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

/**
 * constants
 */

// init sections report
const IMPORT_REPORT = {};

/**
 * main
 */

export default {
  // onLoad: async ({ document, url, params }) => {
  //   // mark hidden divs + add bounding client rect data to all "visible" divs
  //   document.querySelectorAll('div').forEach((div) => {
  //     if (div && /none/i.test(window.getComputedStyle(div).display.trim())) {
  //       div.setAttribute('data-hlx-imp-hidden-div', '');
  //     } else {
  //       var domRect = div.getBoundingClientRect().toJSON()
  //       Object.keys(domRect).forEach(p => domRect[p] = Math.round(domRect[p]));
  //       if (domRect.width > 0 && domRect.height > 0) {
  //         div.setAttribute('data-hlx-imp-rect', JSON.stringify(domRect));
  //       }
  //       const bgImage = window.getComputedStyle(div).getPropertyValue('background-image');
  //       if (bgImage && bgImage !== 'none') {
  //         div.setAttribute('data-hlx-background-image', bgImage);
  //       }
  //       const bgColor = window.getComputedStyle(div).getPropertyValue('background-color');
  //       if (bgColor && bgColor !== 'rgb(0, 0, 0)' && bgColor !== 'rgba(0, 0, 0, 0)') {
  //         div.setAttribute('data-hlx-imp-bgcolor', bgColor);
  //       }
  //       const color = window.getComputedStyle(div).getPropertyValue('color');
  //       if (color && color !== 'rgb(0, 0, 0)') {
  //         div.setAttribute('data-hlx-imp-color', color);
  //       }
  //     }
  //   });
    
  // },

  transform: async ({ document, params }) => {

    // // console.log(parsers?);
    // debugger;

    const main = document.body;

    // main.querySelectorAll('a[href^="#"]').forEach((el) => el.remove());
    // // main.querySelectorAll('noscript, script, style, header, footer, form').forEach((el) => el.remove());
    // main.querySelectorAll(':scope > div, :scope > a').forEach((el) => el.remove());

    // // <a class="sg-Page-skipToContent" href="#main-content">Skip to content</a>
    // const link = document.createElement('a');
    // link.href = '#main-content';
    // link.textContent = 'Example';
    // main.querySelector('main').prepend(link);

    const elements = [{
      element: main,
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

/* global WebImporter */

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

export function getElementByXpath(document, path) {
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
export function getNSiblingsDivs(el, document, n = null) {
  let cmpFn = n;

  if (!isNaN(n)) {
    cmpFn = (c) => c === n;
  }

  let selectedXpathPattern = '';
  const xpathGrouping = [];

  el.querySelectorAll('*').forEach(d => {
    const xpath = getXPath(d, document);
    const xp = xpath.substring(0, xpath.lastIndexOf('['));
    if (!xpathGrouping[xp]) {
      xpathGrouping[xp] = [d];
    } else {
      xpathGrouping[xp].push(d);
    }
  });

  // find the xpath pattern that has n elements
  for (let key in xpathGrouping) {
    if (cmpFn(xpathGrouping[key].length)) {
      selectedXpathPattern = key;
      break;
    }
  }

  return xpathGrouping[selectedXpathPattern] || null;
}

// thanks to https://stackoverflow.com/questions/49974145/how-to-convert-rgba-to-hex-color-code-using-javascript
export function RGBAToHexA(rgba, forceRemoveAlpha = false) {
  return "#" + rgba.replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
    .split(',') // splits them at ","
    .filter((string, index) => !forceRemoveAlpha || index !== 3)
    .map(string => parseFloat(string)) // Converts them to numbers
    .map((number, index) => index === 3 ? Math.round(number * 255) : number) // Converts alpha to 255 number
    .map(number => number.toString(16)) // Converts numbers to hex
    .map(string => string.length === 1 ? "0" + string : string) // Adds 0 when length of one number is 1
    .join("") // Puts the array to togehter to a string
}

export function getBGColor(el, document, recurse = true) {
  let bgcolor = el.querySelector('div[data-hlx-imp-bgcolor]')?.getAttribute('data-hlx-imp-bgcolor');

  if (bgcolor) {
    return RGBAToHexA(bgcolor);
  }
  // strategy 3
  if (!bgcolor) {
    const bgImage = el.querySelector('[data-hlx-background-image]')?.dataset?.hlxBackgroundImage;
    if (bgImage && bgImage.trim().startsWith('linear-gradient')) {
      let m;
      if ((m = /(rgb\(\d+,\s*\d+,\s*\d+\))/.exec(bgImage)) !== null) {
        console.log('linear-gradient', m);
        bgcolor = RGBAToHexA(m[1]);
      }
    }
  }
  return bgcolor;
}

const BG_EXTRACTION_STRATEGIES = {
  default: 'default',
  image: 'image',
  color: 'color',
};

/**
 * @param {HTMLElement} el original element
 * @param {Document} document original page document
 * @param {Object} options extra options for the function
 * @returns {string}
 */
export function extractBackground(el, document, options = {}) {
  const opts = {
    ...{ strategy: 'default', defaultBackground: '' },
    ...options,
  };

  console.log('extractBackground options:', opts);

  let background = null;

  // strategy 1
  if (
    options.strategy === BG_EXTRACTION_STRATEGIES.image
    || options.strategy === BG_EXTRACTION_STRATEGIES.default
  ) {
    try {
      const bg = document.defaultView.getComputedStyle(el).getPropertyValue('background-image');
      if (bg !== '' && !bg.includes('none') && bg.includes('url(')) {
        background = WebImporter.DOMUtils.getImgFromBackground(el, document);
      }
      if (options.strategy === BG_EXTRACTION_STRATEGIES.image && background && background.src.includes('url')) {
        console.log('extractBackground s1: background', background.src);
        console.log(el);
        return background;
      }
    } catch (e) {
      // nothing to do
    }
  }

  // strategy 2
  if (!background) {
    if (
      options.strategy === BG_EXTRACTION_STRATEGIES.image
      || options.strategy === BG_EXTRACTION_STRATEGIES.default
    ) {
      el.querySelectorAll('div').forEach((d) => {
        // do not extract background image of a video
        if (!d.querySelector('video')) {
          try {
            const bg = document.defaultView.getComputedStyle(d).getPropertyValue('background-image');
            if (bg !== '' && !bg.includes('none') && bg.includes('url(')) {
              background = WebImporter.DOMUtils.getImgFromBackground(d, document);
            }
          } catch (e) {
            // nothing to do
          }
        }
      });
      if (options.strategy === BG_EXTRACTION_STRATEGIES.image && background) {
        console.log('extractBackground s2: background', background.src);
        return background;
      }
    }
  }

  // strategy 3 - use Helix Importer onLoad data marker 'data-hlx-background-image'
  if (!background) {
    const bgImage = el.querySelector('[data-hlx-background-image]')?.dataset?.hlxBackgroundImage;
    if (bgImage) {
      if (bgImage.trim().startsWith('url')) {
        const img = WebImporter.DOMUtils.getImgFromBackground(el.querySelector('[data-hlx-background-image]'), document);
        if (img) {
          background = img;
          if (options.strategy === BG_EXTRACTION_STRATEGIES.image && background) {
            console.log('extractBackground s3: background', background.src);
            return background;
          }
        }
      }
    }
  }

  if (background) {
    console.log('extractBackground: background', background.src);
    try {
      const u = new URL(background.src);
    } catch (e) {
      console.warn('extractBackground: invalid URL', background.src);
      background = null;
    }
  }

  // fallback: use default
  if (!background) {
    background = opts.defaultBackground;
  }

  return background;
}

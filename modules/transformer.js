import parsers from './parsers/index.js';

/* global WebImporter */

function convertToTitleCase(str) {
  if (!str) {
    return ""
  }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

export default class Transformer {
  static transform(rules, source) {
    console.log(rules);
    const { document } = source;

    const {
      root,
      cleanup: {
        remove = [],
      },
      blocks = [],
    } = rules;

    //phase 1: get root element
    const main = root ? document.querySelector(root) : document.body;

    // phase 2: DOM removal
    WebImporter.DOMUtils.remove(document, remove);

    // phase 3: block creation
    blocks.forEach((blockCfg) => {
      const { type, selectors = [], parse, target = 'replace' } = blockCfg;
      const parserFn = parse || parsers[type] || (() => []);
      const elements = selectors.length
        ? selectors.reduce((acc, selector) => [...acc, ...main.querySelectorAll(selector)], [])
        : [main];
      // process every element for this block
      elements.forEach((element) => {
          // parse the element into block items
          const items = parserFn.call(this, element, source);
          // create the block
          const block = WebImporter.Blocks.createBlock(document, {
            name: convertToTitleCase(type),
            cells: items
          });
          if (target === 'append') {
            main.append(block);
          } else {
            element.replaceWith(block);
          }
      });
    });

    return main;
  }

}
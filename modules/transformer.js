import parsers from './parsers/index.js';
import CellUtils from './cells.js';

/* global WebImporter */

const IGNORE_ELEMENTS = [
  'style',
  'source',
  'script',
  'noscript',
  'iframe',
];

function processRemoval(main, selectors = []) {
  WebImporter.DOMUtils.remove(
    main,
    selectors.filter((selector) => !CellUtils.isTextSelector(selector)),
  );
  const textSelectors = selectors.filter(CellUtils.isTextSelector);
  textSelectors.forEach((selector) => {
    const { selector: searchSelector, search: searchValue } = CellUtils.getSearchSelector(selector);
    [...main.querySelectorAll(searchSelector)]
      .flatMap((el) => [...el.childNodes])
      .filter((node) => node.nodeType === Node.TEXT_NODE
        && node.textContent.trim() === searchValue)
      .forEach((node) => node.remove());
  });
}

export default class Transformer {
  /**
   * Transform a source document from a set of rules.
   *
   * @param rules Transformation ruleset
   * @param source Source document properties
   * @return Transformed root element
   */
  static transform(rules, source) {
    const { document } = source;

    const {
      root = 'main',
      cleanup: {
        ignore: removeIgnore = IGNORE_ELEMENTS,
        start: removeStart = [],
        end: removeEnd = [],
      },
      blocks = [],
    } = rules;

    // phase 1: get root element
    const main = document.querySelector(root) || document.body;

    // phase 2: DOM removal - start
    processRemoval(main, removeStart);

    // phase 3: block creation
    blocks.forEach((blockCfg) => {
      const {
        type, variants, selectors, parse, insertMode = 'replace', params = {},
      } = blockCfg;
      const parserFn = parse || parsers[type] || parsers.block;
      const validSelectors = selectors
        ? selectors.filter(CellUtils.isValidCSSSelector)
        : [];
      const elements = validSelectors.length
        ? selectors.reduce((acc, selector) => [...acc, ...main.querySelectorAll(selector)], [])
        : [main];
      // process every element for this block
      elements.forEach((element) => {
        // add params to source
        const mergedParams = { ...source.params, ...params };
        // parse the element into block items
        let items = parserFn.call(this, element, { ...source, params: mergedParams });
        if (Array.isArray(items)) {
          items = items.filter((item) => item);
        }
        if (!CellUtils.isEmpty(items)) {
          // create the block
          const block = WebImporter.Blocks.createBlock(document, {
            name: WebImporter.Blocks.computeBlockName(type),
            variants,
            cells: items,
          });
          if (block) {
            // add block to DOM
            if (insertMode === 'append') {
              main.append(block);
            } else if (insertMode === 'prepend') {
              main.prepend(block);
            } else {
              element.replaceWith(block);
            }
          }
        }
      });
    });

    // phase 4: DOM removal - end
    processRemoval(main, removeEnd);
    WebImporter.DOMUtils.remove(main, removeIgnore);

    return main;
  }
}

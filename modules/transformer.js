import parsers from './parsers/index.js';

/* global WebImporter */

function isValidCSSSelector(selector) {
  try {
    document.querySelector(selector);
    return true;
  } catch (e) {
    return false;
  }
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
    console.log('Transformer Rules', rules);
    const { document } = source;

    const {
      root,
      cleanup: {
        start: removeStart = [],
        end: removeEnd = [],
      },
      blocks = [],
    } = rules;

    //phase 1: get root element
    const main = root ? document.querySelector(root) : document.body;

    // phase 2: DOM removal - start
    WebImporter.DOMUtils.remove(document, removeStart);

    // phase 3: block creation
    blocks.forEach((blockCfg) => {
      const { type, selectors = [], parse, target = 'replace', params = {} } = blockCfg;
      const parserFn = parse || parsers[type] || parsers['block'];
      const elements = selectors.length
        ? selectors.reduce((acc, selector) => [...acc, ...main.querySelectorAll(selector)], [])
        : [main];
      // process every element for this block
      elements.forEach((element) => {
        // add params to source
        source.params = { ...source.params, ...params};
        // parse the element into block items
        const items = parserFn.call(this, element, source);
        // create the block
        const block = WebImporter.Blocks.createBlock(document, {
          name: WebImporter.Blocks.computeBlockName(type),
          cells: items
        });
        // add block to DOM
        if (target === 'append') {
          main.append(block);
        } else if (target === 'prepend') {
          main.prepend(block);
        } else {
          element.replaceWith(block);
        }
      });
    });

    // phase 3: DOM removal - end
    WebImporter.DOMUtils.remove(document, removeEnd);

    return main;
  }

  /**
   * Build a name/value pair block configuration from a selector object.
   *
   * Selector Object:
   * {
   *   name: value_selector | [condition_selector, value_selector]
   * }
   *
   * @param element Root element to query from
   * @param params Object of selector conditions
   */
  static buildBlockConfig(element, params) {
    const cfg = {};
    Object.entries(params).forEach(([name, value]) => {
      let selector = value;
      if (Array.isArray(value)) {
        // find first matching element
        const [, conditionalSelector] = value.find(([condition]) => element.querySelector(condition)) || []
        selector = conditionalSelector;
      }
      let cfgValue = selector;
      if (selector && isValidCSSSelector(selector)) {
        cfgValue = [...element.querySelectorAll(selector)].map((el) => el.textContent || el.content);
        if (cfgValue.length === 1) {
          cfgValue = cfgValue[0];
        }
      }
      if (cfgValue !== undefined) {
        cfg[name] = cfgValue;
      }
    });
    return cfg;
  }

  /**
   * Build a two-dimensional array of block cells from a selector object.
   * @param element
   * @param cells
   */
  static buildBlockCells(element, cells) {
    return cells.map((row) => {
      if (Array.isArray(row)) {
        return row.map((col) => {
          return [...element.querySelectorAll(col)];
        });
      }
      return [...element.querySelectorAll(row)];
    });
  }

}
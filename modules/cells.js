import DOMPurify from 'dompurify';

const PSEUDO_TEXT_SELECTOR = '::text';
const TEMPLATE_REGEX = /\{\{(.+?)}}/g;
const ATTRIBUTE_REGEX = /\[([^=]*?)]$/;

function isHTMLElement(el) {
  return (
    typeof HTMLElement === 'object' ? el instanceof HTMLElement // DOM2
      : el
        && typeof el === 'object'
        && el.nodeType === 1
        && typeof el.nodeName === 'string'
  );
}

function isValidCSSSelector(selector) {
  try {
    document.querySelector(selector);
    return true;
  } catch (e) {
    return false;
  }
}

function isAttributeSelector(selector) {
  return ATTRIBUTE_REGEX.test(selector);
}

function getValueSelector(selector = '') {
  const expr = new RegExp(`${PSEUDO_TEXT_SELECTOR}(?::nth-child\\((?<nthChild>\\d+)\\))?$`);
  const useText = expr.test(selector);
  const [, nthChild] = selector.match(expr) || [];
  let cleanSelector = selector.replace(expr, '');
  const useSiblingText = useText && cleanSelector.endsWith('+ ');
  cleanSelector = cleanSelector.replace(/\+ \*$/, '');
  return {
    selector: cleanSelector.trim(),
    useText,
    useSiblingText,
    childIndex: parseInt(nthChild, 10),
  };
}

function getElementText(element, options) {
  const {
    useText, childIndex, useSiblingText, selector,
  } = options;
  const [, attribute] = selector.match(ATTRIBUTE_REGEX) || [];
  if (!useText && attribute) {
    return element.getAttribute(attribute);
  }
  if (childIndex && !Number.isNaN(childIndex)) {
    const textNodes = [...element.childNodes]
      .filter((el) => el.nodeType === Node.TEXT_NODE);
    return textNodes[childIndex - 1]?.textContent || '';
  }
  return useSiblingText
    ? element.nextSibling.textContent
    : element.textContent || element.content || '';
}

/**
 * Evaluate a cell value based on a selector or template string.
 * If the cell is a selector, query the element for the value.
 * If the cell is a template string, replace the templates with the
 * selector value and create a document fragment..
 *
 * @param element Block element
 * @param cell Selector or template string
 * @param params Additional parameters for cell evaluation
 * @return {HTMLElement[]}
 */
function evaluateCell(element, cell, params = {}) {
  if (!cell) {
    return undefined;
  }

  let cellList = cell;
  if (!Array.isArray(cellList)) {
    cellList = [cellList];
  }
  return cellList.map((c) => {
    const { selector: valueSelector, useText, ...textProps } = getValueSelector(c);
    const selector = valueSelector;
    if (selector && isValidCSSSelector(selector)) {
      // convert selector string to a cell value
      let cellValue = [...element.querySelectorAll(selector)].map((el) => {
        const isEmptyElement = el.childNodes.length === 0;
        if (isEmptyElement
            || useText
            || isAttributeSelector(selector)
            || params.replace) {
          let text = getElementText(el, { useText, ...textProps, selector });
          // additional processing based on conditional params that were provided
          const { replace, split } = params;
          // perform replacements
          if (replace) {
            const [search, replacement = ''] = replace;
            text = text.replace(new RegExp(search), replacement).trim();
          }
          if (split) {
            const [delim, partIndex = 0] = split;
            const textParts = text.split(delim).filter((part) => part);
            if (textParts.length > partIndex) {
              text = textParts[partIndex];
            }
          }
          return text ? text.replace(/^\s+|\s+$/g, '') : text;
        }
        return el;
      });
      if (cellValue.length <= 1) {
        [cellValue = selector] = cellValue;
      }
      return cellValue;
    }
    // convert template string to a cell value
    let html = c.replace(TEMPLATE_REGEX, (match, expression) => {
      const value = expression.trim();
      if (isValidCSSSelector(value)) {
        const matchedElement = element.querySelector(value);
        if (isAttributeSelector(value)) {
          return getElementText(matchedElement, { selector: value });
        }
        return matchedElement?.innerHTML || '';
      }
      return value;
    });
    // clean up HTML and return a document fragment
    html = DOMPurify.sanitize(html);
    return element.ownerDocument.createRange().createContextualFragment(html);
  });
}

export default class CellUtils {
  /**
   * Build a name/value pair block configuration from a selector object.
   *
   * Selector Object:
   * {
   *   name: value_selector | [condition_selector, value_selector]
   * }
   *
   * @param element Root element to query from
   * @param items Object of selector conditions
   */
  static buildBlockConfig(element, items) {
    const cfg = {};
    Object.entries(items).forEach(([name, value]) => {
      let selector = value;
      let params = {};
      if (Array.isArray(value)) {
        // find first matching element
        const [, conditionalSelector, conditionalParams] = value
          .find(([condition]) => element.querySelector(condition)) || [];
        selector = conditionalSelector;
        params = conditionalParams || {};
      }
      const cfgValue = evaluateCell(element, selector, params);
      if (cfgValue !== undefined) {
        const doc = element.ownerDocument || element;
        const cfgElement = doc.createElement('p');
        cfgElement.append(...cfgValue);
        cfg[name] = cfgElement;
      }
    });
    return cfg;
  }

  /**
   * Build a two-dimensional array of block cells from a selector array.
   * Each column in the selector array can be a CSS selector or a template string.
   * A template string allows for additional HTML to be added along with selector references.
   *
   * Selector Array:
   * [
   *  [colSelector | colTemplate, ...],
   * ]
   *
   * @param element
   * @param cells
   */
  static buildBlockCells(element, cells) {
    return cells.map((row) => {
      if (isHTMLElement(row)) {
        return [row];
      }
      if (Array.isArray(row)) {
        return row.map((col) => evaluateCell(element, col));
      }
      return evaluateCell(element, row);
    })
      .filter((row) => row.some((col) => (Array.isArray(col) ? col.length > 0 : col)));
  }

  /**
   * Is the cells parameter considered empty?
   * Block cells can either be an object or an array.
   * Cells that are an empty array or an object with no keys are considered to be empty.
   * @param cells An object or array of cell values.
   * @return {boolean}
   */
  static isEmpty(cells) {
    if (Array.isArray(cells)) {
      return cells.length === 0;
    } if (typeof cells === 'object' && cells !== null) {
      return Object.keys(cells).length === 0;
    }
    return false;
  }

  /**
   * Does the selector represent a valid CSS selector?
   * @param selector
   * @return {boolean}
   */
  static isValidCSSSelector(selector) {
    return isValidCSSSelector(selector);
  }

  static isTextSelector(selector = '') {
    return selector.includes(PSEUDO_TEXT_SELECTOR) || false;
  }

  static getSearchSelector(selector = '') {
    const [, searchText] = selector.match(new RegExp(`${PSEUDO_TEXT_SELECTOR}\\((.*?)\\)`));
    const cleanSelector = selector
      .replace(new RegExp(`${PSEUDO_TEXT_SELECTOR}\\((.*)\\)`), '')
      .trim();
    return {
      selector: cleanSelector,
      search: searchText,
    };
  }
}

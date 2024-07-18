import { getElementByXpath } from '../import.utils.js';

/* global WebImporter */
export default function columnsParser(el, { mapping, document }) {
  // layout
  const { numCols } = mapping.layout;
  let colsCtr = 0;
  const children = mapping.childrenXpaths.reduce(
    (acc, c) => {
      colsCtr += 1;
      const cEl = getElementByXpath(document, c.xpath);
      if (!cEl) {
        console.warn('element not found', c.section, c.xpath);
      }

      if (colsCtr > numCols) {
        colsCtr = 1;
        acc.push([[cEl]]);
      } else {
        const arr = acc[acc.length - 1];
        if (!arr) {
          acc.push([[cEl]]);
        } else {
          arr.push([cEl]);
        }
      }
      return acc;
    },
    [],
  );

  while (children[children.length - 1].length < numCols) {
    children[children.length - 1].push(['']);
  }

  const block = WebImporter.DOMUtils.createTable([
    ['columns'],
    ...children,
  ], document);
  return block;
}

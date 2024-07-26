import { getElementByXpath } from '../import.utils.js';

/* global WebImporter */
export default function columnsParser(el, { mapping, document }) {
  const blockName = mapping.customBlockName || 'columns';

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

      let content = cEl;
      if (cEl.nodeName === 'LI') {
        content = document.createElement('div');
        content.append(...cEl.children);
      }

      if (colsCtr > numCols) {
        colsCtr = 1;
        acc.push([[content]]);
      } else {
        const arr = acc[acc.length - 1];
        if (!arr) {
          acc.push([[content]]);
        } else {
          arr.push([content]);
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
    [blockName],
    ...children,
  ], document);
  return block;
}

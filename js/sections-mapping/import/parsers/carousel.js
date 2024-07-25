import { extractBackground, getNSiblingsDivs } from '../import.utils.js';

/* global WebImporter */
export default function carouselParser(el, { mapping, document }) {
  const blockName = mapping.customBlockName || 'carousel';

  const columns = getNSiblingsDivs(el, document, (n) => n > 2);
  if (columns) {
    const children = [];
    columns.forEach((c) => {
      const content = c.nodeName === 'LI' ? document.createElement('div').append(...c.children) : c;

      const imgEl = extractBackground(content, document, { strategy: 'image' }) || content.querySelector('img') || '';

      if (content.textContent.replaceAll('\n', '').trim().length > 0) {
        children.push([imgEl, content]);
      }
    });

    const block = WebImporter.DOMUtils.createTable([
      [blockName],
      ...children,
    ], document);
    return block;
  }

  return null;
}

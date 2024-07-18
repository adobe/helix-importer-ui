import { extractBackground, getNSiblingsDivs } from '../import.utils.js';

/* global WebImporter */
export default function carouselParser(el, { mapping, document }) {
  const blockName = mapping.customBlockName || 'carousel';

  const columns = getNSiblingsDivs(el, document, (n) => n > 2);
  if (columns) {
    const children = columns.map((c) => {
      const imgEl = extractBackground(c, document, { strategy: 'image' }) || c.querySelector('img') || null;
      console.log('imgEl', imgEl);
      return [imgEl, c];
    });

    const block = WebImporter.DOMUtils.createTable([
      [blockName],
      ...children,
    ], document);
    return block;
  }

  return null;
}

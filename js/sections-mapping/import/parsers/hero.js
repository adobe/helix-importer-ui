import { extractBackground } from '../import.utils.js';

/* globals WebImporter */
export default function heroParser(el, { mapping, document, target }) {
  const blockName = mapping.customBlockName || 'hero';

  const imgEl = extractBackground(el, document, { strategy: 'image' }) || el.querySelector('img') || null;

  const cells = [
    [blockName],
  ];

  if (target === 'crosswalk') {
    cells.push([imgEl || '']);
  } else if (imgEl) {
    el.prepend(imgEl);
  }

  cells.push([el]);

  return WebImporter.DOMUtils.createTable(cells, document);
}

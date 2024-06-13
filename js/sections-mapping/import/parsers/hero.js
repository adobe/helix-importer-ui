import { extractBackground } from '../import.utils.js';

/* globals WebImporter */
export default function heroParser(el, { mapping, document }) {
  const imgEl = extractBackground(el, document, { strategy: 'image' }) || null;
  console.log('imgEl', imgEl);

  if (imgEl) {
    el.prepend(imgEl);
  }
  return WebImporter.DOMUtils.createTable([
    ['hero'],
    [el],
  ], document);
}

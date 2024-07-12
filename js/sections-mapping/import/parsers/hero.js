import { extractBackground } from '../import.utils.js';

/* globals WebImporter */
export default function heroParser(el, { mapping, document }) {
  const imgEl = extractBackground(el, document, { strategy: 'image' }) || null;
  console.log('imgEl', imgEl);

  if (imgEl) {
    el.prepend(imgEl);
  }

  const tableHeading = mapping.variant ? 'hero-' + mapping.variant : 'hero';

  return WebImporter.DOMUtils.createTable([
    [tableHeading],
    [el],
  ], document);
}

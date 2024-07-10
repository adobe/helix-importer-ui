import { extractBackground, getElementByXpath } from '../import.utils.js';

/* globals WebImporter */
export default function heroParser(el, { mapping, document }) {
  const children = mapping.childrenXpaths.map((c) => {
    const cEl = getElementByXpath(document, c.xpath);
    if (!cEl) {
      console.warn('element not found', c.section, c.xpath);
      return;
    }
    const imgEl = document.createElement('div');

    const bgImg = extractBackground(cEl, document, { strategy: 'image' });
    if (bgImg) {
      imgEl.appendChild(bgImg);
    }

    return [imgEl, cEl];
  });

  return WebImporter.DOMUtils.createTable([
    ['cards'],
    ...children,
  ], document);
}

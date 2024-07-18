import { extractBackground, getElementByXpath } from '../import.utils.js';

/* globals WebImporter */
export default function heroParser(el, { mapping, document }) {
  const children = mapping.childrenXpaths.map((c) => {
    const cEl = getElementByXpath(document, c.xpath);
    if (!cEl) {
      console.warn('element not found', c.section, c.xpath);
      return;
    }

    cEl.querySelectorAll('[data-hlx-imp-hidden-div]').forEach((d) => d.remove());

    const imgEl = document.createElement('div');

    const bgImg = extractBackground(cEl, document, { strategy: 'image' }) || cEl.querySelector('img');
    if (bgImg) {
      imgEl.appendChild(bgImg);
    }

    return [imgEl, cEl];
  });

  const tableHeading = mapping.customBlockName ? mapping.customBlockName : 'cards';

  return WebImporter.DOMUtils.createTable([
    [tableHeading],
    ...children,
  ], document);
}

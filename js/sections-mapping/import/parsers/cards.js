import { extractBackground, getElementByXpath } from '../import.utils.js';

/* globals WebImporter */
export default function cardsParser(el, { mapping, document }) {
  if (!mapping?.childrenXpaths) {
    console.warn('cardsParser: missing childrenXpaths, returning default content');
    return el;
  }
  const blockName = mapping.customBlockName || 'cards';

  const children = mapping.childrenXpaths.map((c) => {
    const cEl = getElementByXpath(document, c.xpath);
    if (!cEl) {
      console.warn('element not found', c.section, c.xpath);
      return;
    }

    cEl.querySelectorAll('[data-hlx-imp-hidden-div]').forEach((d) => d.remove());

    let content = cEl;
    if (cEl.nodeName === 'LI') {
      content = document.createElement('div');
      content.append(...cEl.children);
    }

    const imgEl = document.createElement('div');

    const bgImg = extractBackground(content, document, { strategy: 'image' }) || content.querySelector('img');
    if (bgImg) {
      imgEl.appendChild(bgImg);
    }

    return [imgEl, content];
  });

  return WebImporter.DOMUtils.createTable([
    [blockName],
    ...children,
  ], document);
}

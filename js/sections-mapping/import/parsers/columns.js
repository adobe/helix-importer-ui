import { getNSiblingsDivs, getXPath } from '../import.utils.js';

/* global WebImporter */
export default function columnsParser(el, { mapping, window }) {
  const { document } = window;

  el.querySelectorAll('script, style').forEach((e) => e.remove());
  el.querySelectorAll('div').forEach((e) => {
    if (!e.querySelector('img, svg, iframe') && e.textContent.replaceAll('\n', '').trim().length === 0) {
      e.remove();
    }
  });

  el.querySelectorAll('div').forEach((d) => {
    console.log(getXPath(d, document, true));
    console.log(d.getBoundingClientRect());
    if (d.dataset.hlxImpRect) {
      console.log(d.dataset.hlxImpRect);
      console.log(JSON.parse(d.dataset.hlxImpRect));
    }
  });

  const columns = getNSiblingsDivs(el, document, (n) => n > 1);
  if (columns) {
    const block = WebImporter.DOMUtils.createTable([
      ['columns'],
      columns,
    ], document);
    return block;
  }

  return null;
}

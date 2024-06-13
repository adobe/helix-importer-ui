/* globals WebImporter */
export default function heroParser(el, { mapping, document }) {
  return WebImporter.DOMUtils.createTable([
    ['hero'],
    [el],
  ], document);
}

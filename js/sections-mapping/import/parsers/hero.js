/* globals WebImporter */
export default function heroParser(el, { mapping, window }) {
  const { document } = window;
  return WebImporter.DOMUtils.createTable([
    ['hero'],
    [el],
  ], document);
}

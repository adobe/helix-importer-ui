/* globals WebImporter */

export default function defaultContentParser(el, { mapping, document }) {
  if (mapping.customBlockName) {
    return WebImporter.DOMUtils.createTable([
      [mapping.customBlockName],
      [el],
    ], document);
  }

  return el;
}

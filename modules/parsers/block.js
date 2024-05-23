/* global WebImporter */

export default function parse(element, { document, params: { cells } }) {
  if (Array.isArray(cells)) {
    return WebImporter.Transformer.buildBlockCells(element, cells);
  } else if (typeof cells === 'object') {
    return WebImporter.Transformer.buildBlockConfig(element, cells);
  }
  return [];
}

/* global WebImporter */

export default function parse(element, { params: { cells } }) {
  let rows = cells;
  if (typeof cells === 'string') {
    rows = [...element.querySelectorAll(cells)];
  }
  if (Array.isArray(rows)) {
    return WebImporter.CellUtils.buildBlockCells(element, rows);
  }
  if (typeof rows === 'object') {
    return WebImporter.CellUtils.buildBlockConfig(element, rows);
  }
  return [];
}

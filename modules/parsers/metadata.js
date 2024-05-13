/* global WebImporter */
export default function parse(element, { document }) {
  return WebImporter.Blocks.buildMetaData(document) || {};
}

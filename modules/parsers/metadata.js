/* global WebImporter */

function isDate(str) {
  const date = new Date(str);
  return !isNaN(date);
}

export default function parse(element, { document, params: { metadata = {} } }) {
  const baseMetadata = WebImporter.Blocks.getMetadata(document) || {};
  const customMetadata = WebImporter.Transformer.buildBlockConfig(document, metadata);
  // convert dates
  Object.entries(customMetadata).forEach(([key, value]) => {
    if (isDate(value)) {
      customMetadata[key] = new Date(value).toISOString().slice(0, 10);
    }
  });
  return { ...baseMetadata, ...customMetadata };
}

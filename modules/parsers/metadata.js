import blockParser from './block.js';

/* global WebImporter */

function isDate(str) {
  if (typeof str !== 'string') return false;
  const date = new Date(str);
  return !Number.isNaN(Number(date));
}

export default function parse(element, { document, params: { cells = {} } }) {
  const baseMetadata = WebImporter.Blocks.getMetadata(document) || {};
  const customMetadata = blockParser(document, { params: { cells } });
  const meta = { ...baseMetadata, ...customMetadata };
  Object.entries(meta).forEach(([key, value]) => {
    // use first image
    if (key === 'Image') {
      const [img1] = value.src.split(',');
      value.src = img1;
    }
    // convert dates
    if (isDate(value)) {
      meta[key] = new Date(value).toISOString().slice(0, 10);
    }
  });
  return meta;
}

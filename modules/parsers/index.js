import parseMetadata from './metadata.js';
import parseColumns from './columns.js';
import defaultParser from './block.js';
import parseCarousel from './carousel.js';

const parsers = {
  metadata: parseMetadata,
  columns: parseColumns,
  carousel: parseCarousel,
  block: defaultParser,
};

export default parsers;

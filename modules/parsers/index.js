import parseMetadata from './metadata.js';
import parseColumns from './columns.js';
import defaultParser from './block.js';

const parsers = {
  metadata: parseMetadata,
  columns: parseColumns,
  block: defaultParser,
}

export default parsers;

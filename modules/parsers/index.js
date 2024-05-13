import parseMetadata from './metadata.js';
import parseColumns from './columns.js';

const parsers = {
  metadata: parseMetadata,
  columns: parseColumns,
}

export default parsers;

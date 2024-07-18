/* globals WebImporter */

export default function sectionMetadataParser(el, { mapping, document }) {
  const style = mapping.customBlockName || 'default';

  const block = document.createElement('div');
  block.append(el);

  block.append(WebImporter.DOMUtils.createTable([
    ['section-metadata'],
    ['style', style],
  ], document));

  return block;
}

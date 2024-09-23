/* global WebImporter */
import * as fragmentUI from './sm.ui.js';

export default async function detectSections(src, frame, autoDetect) {
  console.log('import-sm-auto-detect', autoDetect);

  const { originalURL } = frame.dataset;
  const sections = await window.xp.detectSections(
    frame.contentDocument.body,
    frame.contentWindow.window,
    { autoDetect },
  );
  console.log('sections', sections);

  const DETECTED_SECTIONS_BLOCKS_MAPPING = {
    unknown: 'defaultContent',
    'default-content': 'defaultContent',
    carousel: 'defaultContent',
    hero: 'defaultContent',
    columns: 'columns',
    header: 'header',
    footer: 'footer',
  };

  fragmentUI.initOverlayClickHandler();

  // look for existing mapping data
  try {
    if (autoDetect) {
      const parsedSections = sections.predictedBoxes.map((b) => ({
        id: b.id,
        color: 'rgba(0, 0, 255, 1)',
        width: b.width,
        height: b.height,
        xpath: b.xpath,
        childrenXpaths: (b.layout.numCols > 1 || b.layout.numRows > 1)
          ? b.children.map((child) => ({
            xpath: child.xpath,
            xpathWithDetails: child.xpathWithDetails,
          })) : null,
        layout: b.layout,
        x: b.x,
        y: b.y,
        mapping: DETECTED_SECTIONS_BLOCKS_MAPPING[b.prediction.sectionType] || 'unset',
      }));
      fragmentUI.setUIFragmentsFromSections(originalURL, parsedSections);
    } else {
      // add fragments
      fragmentUI.setUIFragmentsFromCache(originalURL);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Error loading sections mapping data for url ${originalURL}`, e);
  }
}

export function generateDocumentPath({ url }) {
  let p = new URL(url).pathname;
  if (p.endsWith('/')) {
    p = `${p}index`;
  }
  p = decodeURIComponent(p)
    .toLowerCase()
    .replace(/\.html$/, '')
    .replace(/[^a-z0-9/]/gm, '-');
  return WebImporter.FileUtils.sanitizePath(p);
}

export function getFragmentSectionsMappingData(url) {
  const item = localStorage.getItem('helix-importer-sections-mapping');

  if (item) {
    const mData = JSON.parse(item);

    // return manual mapping first
    let found = mData.find((m) => m.url === url && m.autoDetect === false);
    if (found) {
      return found;
    }

    // return auto-detected mapping
    found = mData.find((m) => m.url === url && m.autoDetect === true);
    if (found) {
      return found;
    }
  }

  return null;
}

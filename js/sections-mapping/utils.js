import * as fragmentUI from './sm.ui.js';

const detectSections = async (src, frame, autoDetect) => {
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
      fragmentUI.saveSMCache();
    } else {
      // add fragments
      fragmentUI.setUIFragmentsFromCache(originalURL);
    }
    fragmentUI.getSMData();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Error loading sections mapping data for url ${originalURL}`, e);
  }
};

export {
  detectSections,
}

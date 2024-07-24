import alert from '../shared/alert.js';
import { getContentFrame } from '../shared/ui.js';
import { getElementByXpath } from '../shared/utils.js';

const ADD_FRAGMENT_BTN = document.getElementById('sm-add-fragment');
const SM_FRAGMENTS_CONTAINER = document.getElementById('sm-fragments-container');
const SM_LOCAL_STORAGE_KEY = 'helix-importer-sections-mapping';

let importerConfig = {};

// selected fragment
const selectedSectionInFragmentProxy = { id: null };
const selectedSectionInFragment = new Proxy(selectedSectionInFragmentProxy, {
  set: (target, key, value) => {
    console.log('selectedSectionInFragment', target, key, value);

    const oldValue = target[key];
    console.log(`${key} set from ${selectedSectionInFragmentProxy.id} to ${value}`);
    target[key] = value;
    const oldOverlayDiv = SM_FRAGMENTS_CONTAINER.querySelector(`[data-id="${oldValue}"]`);
    if (oldOverlayDiv) {
      oldOverlayDiv.classList.remove('selected');
    }
    const overlayDiv = SM_FRAGMENTS_CONTAINER.querySelector(`[data-id="${value}"]`);
    if (overlayDiv) {
      overlayDiv.classList.add('selected');
    }
    return true;
  },
});

// selected section
const selectedBoxInSectionProxy = { id: null };
const selectedBoxInSection = new Proxy(selectedBoxInSectionProxy, {
  set: (target, key, value) => {
    const oldValue = target[key];
    target[key] = value;
    const oldOverlayDiv = getContentFrame().contentDocument.querySelector(`.xp-overlay[data-box-id="${oldValue}"]`);
    if (oldOverlayDiv) {
      oldOverlayDiv.classList.remove('hover');
    }
    const overlayDiv = getContentFrame().contentDocument.querySelector(`.xp-overlay[data-box-id="${value}"]`);
    if (overlayDiv) {
      overlayDiv.classList.add('hover');
    }
    return true;
  },
});

export function getSMData() {
  const fragments = [];
  // return fragments;
  SM_FRAGMENTS_CONTAINER.querySelectorAll('.sm-fragment').forEach((el) => {
    const fragment = {
      id: el.dataset.id,
      path: el.dataset.path,
      sections: [],
    };
    el.querySelectorAll('.sm-fragment-sections .sm-frg-section').forEach((section) => {
      const blocks = [];
      const secObj = {
        id: section.dataset.id,
        blocks,
        settings: {},
      };
      const smStyleEl = section.querySelector('#section-metadata-style');
      if (smStyleEl && smStyleEl.value !== '') {
        secObj.settings['section-metadata-style'] = smStyleEl.value;
      }
      section.querySelectorAll('.row').forEach((block) => {
        secObj.blocks.push({
          ...JSON.parse(block.dataset.boxData),
          mapping: block.querySelector('sp-picker').value,
          customBlockName: block.querySelector('sp-textfield').value,
        });
      });

      fragment.sections.push(secObj);
    });

    fragments.push(fragment);
  });
  return fragments;
}

export function getSMCache() {
  return JSON.parse(localStorage.getItem(SM_LOCAL_STORAGE_KEY) || '[]');
}

export function saveSMCache() {
  const url = importerConfig.fields['import-url'];
  const autoDetect = importerConfig.fields['import-sm-auto-detect'];
  const cache = getSMCache();
  const mapping = getSMData();

  if (mapping.length > 0) {
    const found = cache.find((item) => item.url === url && item.autoDetect === autoDetect);

    if (found) {
      found.mapping = mapping;
    } else {
      cache.push({
        url,
        autoDetect,
        mapping,
      });
    }
    localStorage.setItem(SM_LOCAL_STORAGE_KEY, JSON.stringify(cache));
  }
}

function getBlockPicker(value = 'defaultContent') {
  const blockPicker = document.createElement('sp-picker');
  blockPicker.setAttribute('label', 'Mapping ...');
  blockPicker.setAttribute('id', 'block-picker');

  [
    [
      { label: 'Default Content', attributes: { value: 'defaultContent' } },
    ],
    [
      { label: 'Cards', attributes: { value: 'cards' } },
      { label: 'Carousel', attributes: { value: 'carousel' } },
      { label: 'Columns', attributes: { value: 'columns' } },
      { label: 'Hero', attributes: { value: 'hero' } },
    ],
    [{ label: 'Header Nav', attributes: { value: 'header' } }],
    [{ label: 'Snapshot', attributes: { value: 'snapshot', disabled: true } }],
    [{ label: 'Exclude', attributes: { value: 'exclude' } }],
  ].forEach((group, idx, arr) => {
    group.forEach((item) => {
      const mItem = document.createElement('sp-menu-item');
      item.attributes = item.attributes || [];
      Object.keys(item.attributes).forEach((k) => {
        mItem.setAttribute(k, item.attributes[k]);
      });
      mItem.textContent = item.label;
      blockPicker.appendChild(mItem);
    });
    if (idx < arr.length - 1) {
      blockPicker.appendChild(document.createElement('sp-menu-divider'));
    }
  });

  blockPicker.setAttribute('value', value);

  blockPicker.addEventListener('change', () => {
    saveSMCache();
  });

  return blockPicker;
}

export function getMappingRow(boxData, idx = 1) {
  const row = document.createElement('div');
  row.dataset.idx = idx;
  row.classList.add('sm-frg-sec-block');
  row.dataset.boxId = boxData.id;
  row.dataset.xpath = boxData.xpath;
  row.dataset.boxY = boxData.y;
  row.classList.add('row');
  row.dataset.boxData = JSON.stringify(boxData);
  if (row.dataset.childrenXpaths) {
    row.dataset.childrenXpaths = JSON.stringify(boxData.childrenXpaths);
  }
  row.setAttribute('draggable', 'true');
  row.innerHTML = `
  <div id="sec-color" style="background-color: ${boxData.color || 'white'};"></div>
  <h3 id="sec-id"><strong>${boxData.id}</strong></h3>
  <h3 id="sec-layout" title="Cols x Rows"><sp-icon-view-grid size="xxs"></sp-icon-view-grid> ${boxData.layout.numCols} x ${boxData.layout.numRows}</h3>
  `;

  let pickerMapping = 'defaultContent';
  if (boxData.mapping === 'unset') {
    const t = SM_FRAGMENTS_CONTAINER.querySelector('.sm-fragment:has(.sm-frg-section.selected)');
    const path = t ? t.dataset.path : '';
    if (path === '/nav') {
      pickerMapping = 'header';
    } else if (boxData.layout.numCols > 1) {
      pickerMapping = 'columns';
    }
  } else {
    pickerMapping = boxData.mapping;
  }
  const mappingPicker = getBlockPicker(pickerMapping);
  mappingPicker.dataset.boxId = boxData.id;
  mappingPicker.dataset.xpath = boxData.xpath;

  row.appendChild(mappingPicker);

  // Add a react-spectrum textbox for custom block name
  const customBlockNamePicker = document.createElement('sp-textfield');
  customBlockNamePicker.setAttribute('label', 'Custom Block Name');
  customBlockNamePicker.setAttribute('id', 'custom-block-name');
  customBlockNamePicker.setAttribute('placeholder', 'Custom Block Name');
  customBlockNamePicker.setAttribute('value', boxData.customBlockName || '');
  customBlockNamePicker.addEventListener('input', (e) => {
    boxData.customBlockName = e.target.value;
    saveSMCache();
  });
  row.appendChild(customBlockNamePicker);

  const deleteBtn = document.createElement('sp-button');
  deleteBtn.setAttribute('variant', 'negative');
  deleteBtn.setAttribute('size', 's');
  deleteBtn.setAttribute('icon-only', '');
  deleteBtn.innerHTML = '<sp-icon-delete slot="icon"></sp-icon-delete>';
  row.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', (e) => {
    // row
    const rowEl = e.target.closest('.row');
    if (rowEl) {
      rowEl.remove();
      saveSMCache();
    }
  });

  row.addEventListener('dragstart', (event) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', JSON.stringify(boxData));
  });

  row.querySelector('#sec-id').addEventListener('mouseenter', (e) => {
    const target = e.target.closest('.row');
    if (target) {
      const id = target.dataset.boxId;
      const div = getElementByXpath(getContentFrame().contentDocument, target.dataset.xpath);
      div.scrollIntoViewIfNeeded({ behavior: 'smooth' });
      selectedBoxInSection.id = id;
    }
  });

  row.addEventListener('mouseleave', (e) => {
    const target = e.target.nodeName === 'DIV' ? e.target : e.target.closest('.row');
    if (target.nodeName === 'DIV') {
      selectedBoxInSection.id = null;
    }
  });

  return row;
}

export function useImportRules() {
  return importerConfig.fields['import-sm-use-rules'];
}

/**
 * sections ui elements
 */

export function addSectionAccordionElement(sectionId, settings, target) {
  const id = target.lastElementChild
    ? parseInt(target.lastElementChild.dataset.id.split('-')[1], 10) + 1 : 1;

  const label = `section-${id.toString().padStart(2, '0')}`;
  const elId = `sm-frg-section-${sectionId.toString().padStart(2, '0')}-${id.toString().padStart(2, '0')}`;

  const el = document.createElement('div');
  el.id = elId;
  el.dataset.id = `${sectionId}-${id}`;
  el.dataset.path = label;
  el.className = 'sm-frg-section';
  el.setAttribute('open', '');
  el.innerHTML = `
  <sp-button id="delete-section" size="s" variant="negative" treatment="fill" role="button" icon-only>
    <sp-icon-delete slot="icon" dir="ltr" aria-hidden="true"></sp-icon-delete>
  </sp-button>
    <sp-action-button id="sm-frg-section-edit-style-btn" size="s" quiet>
    <sp-icon-gears-edit slot="icon"></sp-icon-gears-edit>
    <sp-tooltip self-managed placement="left">
      <div>
        <sp-field-label for="section-metadata-style" side-aligned="start">Section Metadata Style property</sp-field-label>
        <sp-textfield id="section-metadata-style" placeholder="(ex. 'dark, center)" value="${settings && settings['section-metadata-style'] ? settings['section-metadata-style'] : ''}">
          <sp-help-text slot="negative-help-text">Please enter a name.</sp-help-text>
        </sp-textfield>
      </div>
    </sp-tooltip>
  </sp-action-button>
  <details open>
    <summary>${label}</summary>
    <div class="sm-frg-section-content">
      <div class="sm-frg-sections-title">
        <h2>Blocks</h2>   
        <sp-action-button size="s" quiet>
            <sp-icon-info slot="icon"></sp-icon-info>
            <sp-tooltip self-managed placement="bottom">
                * To add Blocks to this Section:<br>
                  1. Select the Section by clicking the gray rectangle on the left
                  2. click overlays in the page preview.
                <br><br>
                * If an overlay is blocking access to other ones, "shift + click" on it to remove it.
            </sp-tooltip>
        </sp-action-button>
      </div>
      <div class="sm-frg-section-blocks">
      </div>
    </div>
  </details>
`;

target.appendChild(el);

  const deleteBtnEl = el.querySelector('#delete-section');
  deleteBtnEl.addEventListener('click', () => {
    el.remove();
    saveSMCache();
  });

  el.addEventListener('click', (e) => {
    // handle sm section selection in fragment
    if (e.offsetX >= -25 && e.offsetX <= 0) {
      const evTarget = e.target || e.currentTarget;
      selectedSectionInFragment.id = evTarget.dataset.id;
    }
  });

  const settingsSMStyleTextfieldEl = el.querySelector('#section-metadata-style');
  settingsSMStyleTextfieldEl.addEventListener('input', (e) => {
    saveSMCache();
  });

  el.querySelector('.sm-frg-section-blocks').addEventListener('dragenter', (event) => {
    el.querySelector('.sm-frg-section-blocks').classList.add('dragover');
    event.preventDefault();
  });

  el.querySelector('.sm-frg-section-blocks').addEventListener('dragleave', (event) => {
    if (!event.relatedTarget.classList.contains('sm-frg-section-blocks') && !event.relatedTarget.closest('.sm-frg-section-blocks') && event.target.closest('.sm-frg-section-blocks')) {
      el.querySelector('.sm-frg-section-blocks').classList.remove('dragover');
    }
  });

  el.querySelector('.sm-frg-section-blocks').addEventListener('dragover', (e) => {
    e.dataTransfer.dropEffect = 'move';
    e.preventDefault();
  });

  el.querySelector('.sm-frg-section-blocks').addEventListener('drop', (e) => {
    const data = e.dataTransfer.getData('text/plain');
    const boxData = JSON.parse(data);
    const blockToMoveEl = SM_FRAGMENTS_CONTAINER.querySelector(`.sm-frg-sec-block[data-box-id="${boxData.id}"]`);
    if (blockToMoveEl) {
      const newId = e.target.closest('.sm-frg-section-blocks').lastElementChild
        ? parseInt(e.target.closest('.sm-frg-section-blocks').lastElementChild.dataset.id, 10) + 1 : 1;

      blockToMoveEl.remove();

      // eslint-disable-next-line no-use-before-define
      addBlockInSection(getMappingRow(boxData, newId), e.target.closest('.sm-frg-section'));

      saveSMCache();
    }
    e.target.closest('.sm-frg-section-blocks').classList.remove('dragover');
    e.preventDefault();
  });

  saveSMCache();

  return el;
}

/**
 * blocks ui elements
 */

export function addBlockInSection(row, target) {
  const rows = SM_FRAGMENTS_CONTAINER.querySelectorAll('.row');
  const t = target || SM_FRAGMENTS_CONTAINER.querySelector('.sm-frg-section.selected');
  if (t) {
    const found = Array.from(rows).find((r) => r.dataset.boxId === row.dataset.boxId);
    if (!found) {
      const sectionContainerEl = t.querySelector('.sm-frg-section-blocks');
      const found2 = Array.from(sectionContainerEl.querySelectorAll('.row')).find((r) => parseInt(r.dataset.boxY, 10) > parseInt(row.dataset.boxY, 10));
      if (found2) {
        sectionContainerEl.insertBefore(row, found2);
      } else {
        sectionContainerEl.append(row);
      }
      saveSMCache();
    } else {
      const sectionEl = found.closest('.sm-frg-section');
      const frgEl = sectionEl.closest('.sm-fragment');
      alert.warning(`Block already added to Section [${frgEl.dataset.path}][${sectionEl.dataset.path.toUpperCase()}]`);
    }
  } else {
    alert.warning('Please select a Section first');
  }
}

/**
 * fragments ui elements
 */

function getMainFragmentPath(url) {
  const u = new URL(url);
  let mainPath = u.pathname.replace(/\.[^/.]+$/, '');
  if (mainPath === '/') {
    mainPath = '/index';
  }
  return mainPath;
}

export function addFragmentAccordionElement(path) {
  const id = SM_FRAGMENTS_CONTAINER.lastElementChild
    ? parseInt(SM_FRAGMENTS_CONTAINER.lastElementChild.dataset.id, 10) + 1 : 1;

  const label = path || `/new-fragment-${id.toString().padStart(2, '0')}`;
  const elId = `sm-frg-${id.toString().padStart(2, '0')}`;

  const el = document.createElement('div');
  el.id = elId;
  el.dataset.id = id;
  el.dataset.path = label;
  el.className = 'sm-fragment';
  el.setAttribute('open', '');
  el.innerHTML = `
  <sp-button id="delete-frg" size="s" variant="negative" treatment="fill" role="button" icon-only>
    <sp-icon-delete slot="icon" dir="ltr" aria-hidden="true"></sp-icon-delete>
  </sp-button>
  <sp-action-button id="sm-fragment-edit-path-btn" size="s" quiet>
    <sp-icon-gears-edit slot="icon"></sp-icon-gears-edit>
    <sp-tooltip self-managed placement="left">
      <div>
        <sp-field-label for="fragment-path" side-aligned="start">Fragment Path (ex. /index)</sp-field-label>
        <sp-textfield id="fragment-path" placeholder="${label}">
          <sp-help-text slot="negative-help-text">Please enter a name.</sp-help-text>
        </sp-textfield>
      </div>
    </sp-tooltip>
  </sp-action-button>
  <details open>
    <summary>${label}</summary>
    <div class="sm-fragment-content">
      <div class="sm-frg-sections-title">
        <h2>Sections</h2>
        <sp-button id="frg-add-section" size="s" treatment="fill" role="button" icon-only>
          <sp-icon-add-circle slot="icon" dir="ltr" aria-hidden="true"></sp-icon-add-circle>
        </sp-button>
      </div>
      <div class="sm-fragment-sections">
      </div>
    </div>
  </details>
`;

  SM_FRAGMENTS_CONTAINER.appendChild(el);

  const accItemNameTextfieldEl = el.querySelector('sp-textfield');

  accItemNameTextfieldEl.addEventListener('input', (e) => {
    el.dataset.path = e.target.value;
    el.querySelector('summary').textContent = e.target.value;
    saveSMCache();
  });

  const deleteBtnEl = el.querySelector('#delete-frg');
  deleteBtnEl.addEventListener('click', () => {
    el.remove();
    saveSMCache();
  });

  const addSectionBtnEl = el.querySelector('#frg-add-section');
  addSectionBtnEl.addEventListener('click', () => {
    const sectionEl = addSectionAccordionElement(id, null, el.querySelector('.sm-fragment-sections'));
    selectedSectionInFragment.id = sectionEl.dataset.id;
    saveSMCache();
  });

  saveSMCache();

  return el;
}

export function initUIFromData(data) {
  data.forEach((fragment) => {
    const el = addFragmentAccordionElement(fragment.path);
    fragment.sections.forEach((section) => {
      const frgSecEl = addSectionAccordionElement(el.dataset.id, section.settings, el.querySelector('.sm-fragment-sections'));
      section.blocks.forEach((block, idx) => {
        const row = getMappingRow(block, idx + 1);
        addBlockInSection(row, frgSecEl);
      });
    });
  });
}

export function setUIFragmentsFromCache(url) {
  const cache = getSMCache();

  const found = cache.find((item) => item.url === url && item.autoDetect === false);
  if (found) {
    initUIFromData(found.mapping);
  } else {
    ['/nav', getMainFragmentPath(url), '/footer'].forEach((path) => {
      const frgEl = addFragmentAccordionElement(path);
      const sectionEl = addSectionAccordionElement(frgEl.dataset.id, null, frgEl.querySelector('.sm-fragment-sections'));
      if (path === '/nav') {
        selectedSectionInFragment.id = sectionEl.dataset.id;
      }
    });
  }
}

export function setUIFragmentsFromSections(url, sections) {
  const navFrgEl = addFragmentAccordionElement('/nav');
  const navFrgSecEl = addSectionAccordionElement(navFrgEl.dataset.id, null, navFrgEl.querySelector('.sm-fragment-sections'));
  const mainFrgEl = addFragmentAccordionElement(getMainFragmentPath(url));
  const mainFrgSecEl = addSectionAccordionElement(mainFrgEl.dataset.id, null, mainFrgEl.querySelector('.sm-fragment-sections'));
  const footerFrgEl = addFragmentAccordionElement('/footer');
  const footerFrgSecEl = addSectionAccordionElement(footerFrgEl.dataset.id, null, footerFrgEl.querySelector('.sm-fragment-sections'));

  sections.forEach((section, idx) => {
    const row = getMappingRow(section, idx + 1);
    if (section.mapping === 'header') {
      addBlockInSection(row, navFrgSecEl);
    } else if (section.mapping === 'footer') {
      addBlockInSection(row, footerFrgSecEl);
    } else {
      addBlockInSection(row, mainFrgSecEl);
    }
  });

  saveSMCache();
}

/**
 * common ui elements
 */

export function init(config) {
  importerConfig = config;
  ADD_FRAGMENT_BTN?.addEventListener('click', () => {
    const frgEl = addFragmentAccordionElement();
    const sectionEl = addSectionAccordionElement(frgEl.dataset.id, null, frgEl.querySelector('.sm-fragment-sections'));
    selectedSectionInFragment.id = sectionEl.dataset.id;
  });
}

export function initOverlayClickHandler() {
  getContentFrame().contentDocument.body.addEventListener('click', (e) => {
    const overlayDiv = e.target;
    // shift + click to remove overlay
    if (e.shiftKey) {
      overlayDiv.remove();
    } else if (overlayDiv.dataset.boxData) {
      const boxData = JSON.parse(overlayDiv.dataset.boxData);
      boxData.color = overlayDiv.style.borderColor;
      boxData.mapping = 'unset';
      addBlockInSection(getMappingRow(boxData));
    }
  });
}

export function reset() {
  SM_FRAGMENTS_CONTAINER.innerHTML = '';
  SM_FRAGMENTS_CONTAINER.childNodes.forEach((el) => {
    el.remove();
  });
}

export function setImporterConfig(config) {
  importerConfig = config;
}

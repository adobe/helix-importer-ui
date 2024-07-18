import alert from '../shared/alert.js';
import { getContentFrame } from '../shared/ui.js';
import { getElementByXpath } from '../shared/utils.js';

const ADD_FRAGMENT_BTN = document.getElementById('sm-add-fragment');
const SM_FRAGMENTS_CONTAINER = document.getElementById('sm-fragments-container');
const SM_LOCAL_STORAGE_KEY = 'helix-importer-sections-mapping';

let importerConfig = {};

// selected fragment
const selectedFragment = { id: null };
const selectedFragmentProxy = new Proxy(selectedFragment, {
  set: (target, key, value) => {
    const oldValue = target[key];
    if (selectedFragment.id === value) {
      return true;
    }
    console.log(`${key} set from ${selectedFragment.id} to ${value}`);
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
const selectedSection = { id: null };
const selectedSectionProxy = new Proxy(selectedSection, {
  set: (target, key, value) => {
    const oldValue = target[key];
    console.log(`${key} set from ${selectedSection.id} to ${value}`);
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

export function createAddFragmentBtn(target) {
  const el = document.createElement('sp-button');
  el.innerHTML = '<sp-icon-add slot="icon"></sp-icon-add>Add Fragment</sp-button>';
  el.addEventListener('click', () => {
    // getFragmentAccordionElement(target);
  });
  target.appendChild(el);
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
  <details>
    <summary>${label}</summary>
    <div class="sm-fragment-content">
      <div class="sm-frg-settings-wrapper">
        <h2>Settings</h2>
        <div class="sm-frg-settings-container">
          <div>
            <sp-field-label>Fragment Path (ex. /index)</sp-field-label>
            <sp-textfield class="option-field" id="import-url" placeholder="${label}">
              <sp-help-text slot="negative-help-text">Please enter a name.</sp-help-text>
            </sp-textfield>
          </div>
        </div>
      </div>
      <div class="sm-frg-sections-title">
        <h2>Sections</h2>   
        <sp-action-button size="s" quiet>
            <sp-icon-info slot="icon"></sp-icon-info>
            <sp-tooltip self-managed placement="bottom">
                * To add sections to this fragment:<br>
                  1. Select the fragment by clicking the gray rectangle on the left
                  2. click overlays in the page preview.
                <br><br>
                * If an overlay is blocking access to other ones, "shift + click" on it to remove it.
            </sp-tooltip>
        </sp-action-button>
      </div>
      <sp-divider size="m"></sp-divider>
      <div class="sm-fragment-sections">
      </div>
    </div>
  </details>
`;

  SM_FRAGMENTS_CONTAINER.appendChild(el);

  const accItemNameTextfieldEl = el.querySelector('sp-textfield');
  const deleteBtnEl = el.querySelector('#delete-frg');

  accItemNameTextfieldEl.addEventListener('input', (e) => {
    el.dataset.path = e.target.value;
    el.querySelector('summary').textContent = e.target.value;
  });

  deleteBtnEl.addEventListener('click', () => {
    el.remove();
  });

  el.addEventListener('click', (e) => {
    // handle sm fragment selection
    if (e.layerX > 0 && e.layerX < 25) {
      const target = e.target || e.currentTarget;
      console.log('selected item', target);
      selectedFragmentProxy.id = target.dataset.id;
    }
  });

  saveSMCache();

  return el;
}

export function getSMData() {
  const fragments = [];
  SM_FRAGMENTS_CONTAINER.querySelectorAll('.sm-fragment').forEach((el) => {
    const fragment = {
      id: el.dataset.id,
      path: el.dataset.path,
      sections: [],
    };
    el.querySelectorAll('.row').forEach((section) => {
      fragment.sections.push({
        ...JSON.parse(section.dataset.boxData),
        mapping: section.querySelector('sp-picker').value,
        customBlockName: section.querySelector('sp-textfield').value,
      });
    });
    fragments.push(fragment);
  });
  return fragments;
}

export function addSectionRow(row, target) {
  const rows = SM_FRAGMENTS_CONTAINER.querySelectorAll('.row');
  const t = target || SM_FRAGMENTS_CONTAINER.querySelector('.sm-fragment.selected');
  if (t) {
    const found = Array.from(rows).find((r) => r.dataset.sectionId === row.dataset.sectionId);
    if (!found) {
      const sectionContainerEl = t.querySelector('.sm-fragment-sections');
      const found2 = Array.from(sectionContainerEl.querySelectorAll('.row')).find((r) => parseInt(r.dataset.boxY, 10) > parseInt(row.dataset.boxY, 10));
      if (found2) {
        sectionContainerEl.insertBefore(row, found2);
      } else {
        sectionContainerEl.append(row);
      }
      saveSMCache();
    } else {
      alert.warning(`Section already added to fragment ${t.dataset.path}`);
    }
  } else {
    alert.warning('Please select a fragment first');
  }
}

export function initUIFromData(data) {
  data.forEach((fragment) => {
    const el = addFragmentAccordionElement(fragment.path);
    fragment.sections.forEach((section) => {
      addSectionRow(getMappingRow(section), el);
    });
  });
}

export function init(config) {
  importerConfig = config;
  ADD_FRAGMENT_BTN?.addEventListener('click', () => addFragmentAccordionElement());
}

export function initOverlayClickHandler() {
  getContentFrame().contentDocument.body.addEventListener('click', (e) => {
    const overlayDiv = e.target;
    // shift + click to remove overlay
    if (e.shiftKey) {
      overlayDiv.remove();
    } else if (overlayDiv.dataset.boxData) {
      const section = JSON.parse(overlayDiv.dataset.boxData);
      section.color = overlayDiv.style.borderColor;
      section.mapping = 'defaultContent';
      addSectionRow(getMappingRow(section));
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

  blockPicker.addEventListener('change', (e) => {
    saveSMCache();
  });

  return blockPicker;
}

export function getMappingRow(section, idx = 1) {
  const row = document.createElement('div');
  row.dataset.idx = idx;
  row.dataset.sectionId = section.id;
  row.dataset.xpath = section.xpath;
  row.dataset.boxY = section.y;
  row.classList.add('row');
  row.dataset.boxData = JSON.stringify(section);
  if (row.dataset.childrenXpaths) {
    row.dataset.childrenXpaths = JSON.stringify(section.childrenXpaths);
  }
  row.innerHTML = `
  <div id="sec-color" style="background-color: ${section.color || 'white'};"></div>
  <h3 id="sec-id"><strong>${section.id}</strong></h3>
  <h3 id="sec-layout" title="Cols x Rows"><sp-icon-view-grid size="xxs"></sp-icon-view-grid> ${section.layout.numCols} x ${section.layout.numRows}</h3>
  `;

  const pickerMapping = section.mapping === 'unset' && section.layout.numCols > 1 ? 'columns' : section.mapping;
  const mappingPicker = getBlockPicker(pickerMapping);
  mappingPicker.dataset.sectionId = section.id;
  mappingPicker.dataset.xpath = section.xpath;

  row.appendChild(mappingPicker);

  // Add a react-spectrum textbox for custom block name
  const customBlockNamePicker = document.createElement('sp-textfield');
  customBlockNamePicker.setAttribute('label', 'Custom Block Name');
  customBlockNamePicker.setAttribute('id', 'custom-block-name');
  customBlockNamePicker.setAttribute('placeholder', 'Custom Block Name');
  customBlockNamePicker.setAttribute('value', '');
  customBlockNamePicker.addEventListener('input', (e) => {
    section.customBlockName = e.target.value;
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
    console.log(e);
    console.log('delete section', section.id);
    // row
    const rowEl = e.target.closest('.row');
    if (rowEl) {
      rowEl.remove();
    }
  });

  row.querySelector('#sec-id').addEventListener('mouseenter', (e) => {
    console.log('mouseenter', e.currentTarget, e.target);

    // const target = e.target.nodeName === 'DIV' ? e.target : e.target.closest('.row');
    const target = e.target.closest('.row');
    if (target) {
      const id = target.dataset.sectionId;
      const div = getElementByXpath(getContentFrame().contentDocument, target.dataset.xpath);
      div.scrollIntoViewIfNeeded({ behavior: 'smooth' });
      selectedSectionProxy.id = id;
    }
  });

  row.addEventListener('mouseleave', (e) => {
    const target = e.target.nodeName === 'DIV' ? e.target : e.target.closest('.row');
    if (target.nodeName === 'DIV') {
      selectedSectionProxy.id = null;
    }
  });

  return row;
}

export function getSMCache() {
  return JSON.parse(localStorage.getItem(SM_LOCAL_STORAGE_KEY) || '[]');
}

export function saveSMCache() {
  const url = importerConfig.fields['import-url'];
  const autoDetect = importerConfig.fields['import-sm-auto-detect'];
  const cache = getSMCache();
  const mapping = getSMData();

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

function getMainFragmentPath(url) {
  const u = new URL(url);
  let mainPath = u.pathname.replace(/\.[^/.]+$/, '');
  if (mainPath === '/') {
    mainPath = '/index';
  }
  return mainPath;
}

export function setUIFragmentsFromCache(url) {
  const cache = getSMCache();
  const autoDetect = false;

  const found = cache.find((item) => item.url === url && item.autoDetect === autoDetect);
  if (found) {
    initUIFromData(found.mapping);
  } else {
    addFragmentAccordionElement('/nav');
    addFragmentAccordionElement(getMainFragmentPath(url));
    addFragmentAccordionElement('/footer');
  }
}

export function setUIFragmentsFromSections(url, sections) {
  const navFrgEl = addFragmentAccordionElement('/nav');
  const mainFrgEl = addFragmentAccordionElement(getMainFragmentPath(url));
  const footerFrgEl = addFragmentAccordionElement('/footer');

  sections.forEach((section, idx) => {
    const row = getMappingRow(section, idx + 1);
    if (section.mapping === 'header') {
      addSectionRow(row, navFrgEl);
    } else if (section.mapping === 'footer') {
      addSectionRow(row, footerFrgEl);
    } else {
      addSectionRow(row, mainFrgEl);
    }
  });
}

export function useImportRules() {
  return importerConfig.fields['import-sm-use-rules'];
}

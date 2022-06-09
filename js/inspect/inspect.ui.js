import { initOptionFields, attachOptionFieldsListeners } from '../shared/fields.js';
import { drop, generateCSS, rgb2hex } from './inspect.js';
import alert from '../shared/alert.js';

const PARENT_SELECTOR = '.inspect';
const CONFIG_PARENT_SELECTOR = `${PARENT_SELECTOR} .config`;
const VARS_PARENT_SELECTOR = `${PARENT_SELECTOR} .vars`;
const PREVIEW_PANEL = document.querySelector(`${PARENT_SELECTOR} .preview`);
const VARS_PANEL = document.querySelector(VARS_PARENT_SELECTOR);
const DROP_BUTTON = document.querySelector(`${CONFIG_PARENT_SELECTOR} #inspect-drop-button`);
const COPYCSS_BUTTON = document.querySelector(`${PARENT_SELECTOR} #inspect-copy-css-button`);
const CONTENT_FRAME = document.querySelector(`${PARENT_SELECTOR} #inspect-content-frame`);
const VARS_FIELDS = document.querySelectorAll(`${VARS_PARENT_SELECTOR} .inspect-var-field`);
const PICKERS = document.querySelectorAll(`${PARENT_SELECTOR} .picker`);

const config = {
  vars: {},
};

const enableButton = () => {
  DROP_BUTTON.removeAttribute('disabled');
};

const disableButton = () => {
  DROP_BUTTON.setAttribute('disabled', 'true');
};

const enablePickers = () => {
  PICKERS.forEach((picker) => { picker.removeAttribute('disabled'); });
};

const disablePickers = () => {
  PICKERS.forEach((picker) => { picker.setAttribute('disabled', 'true'); });
};

const doDrop = async () => {
  window.setTimeout(() => {
    if (!CONTENT_FRAME.contentDocument || !CONTENT_FRAME.contentDocument.documentElement) {
      alert.error('Cannot read frame document - check security context or disable Javascript (see Options)');
      return;
    }

    const vars = drop(CONTENT_FRAME.contentDocument);
    config.vars = vars;

    VARS_PANEL.classList.remove('hidden');

    VARS_FIELDS.forEach((field) => {
      const style = field.id.replace('inspect-', '');
      if (vars.styles[style]) {
        field.value = vars.styles[style];
        field.handleChange();
      }
    });

    document.querySelector('sp-dropzone').classList.add('hidden');
    document.querySelector('sp-asset').classList.remove('hidden');
    document.querySelector('sp-asset img').src = vars.logo;

    enablePickers();
  }, 2000);

  enableButton();
};

const getStyle = (win, x, y, type) => {
  const element = win.document.elementFromPoint(x, y);
  const style = win.getComputedStyle(element);
  if (type === 'color') {
    return rgb2hex(style.getPropertyValue('color'));
  }
  if (type === 'backgroundcolor') {
    return rgb2hex(style.getPropertyValue('background-color'));
  }
  if (type === 'font') {
    return style.getPropertyValue('font-family');
  }
  if (type === 'size') {
    return style.getPropertyValue('font-size');
  }
  return 'Unknown';
};

let currentPicker;
let pickerType;
let pickerField;
const capture = (event) => {
  if (pickerType) {
    const style = getStyle(event.view.window, event.clientX, event.clientY, pickerType);
    return style;
  }
  return null;
};

const saveCapture = (event) => {
  if (pickerField) {
    const style = capture(event);
    pickerField.value = style;
    // pickerField.dispatchEvent(new window.top.CustomEvent('change', { value: style }));
    pickerField.handleChange();
  }
  event.preventDefault();
  event.stopPropagation();
  // eslint-disable-next-line no-use-before-define
  stopCapturing();
};

const stopCapturing = () => {
  enablePickers();
  if (!currentPicker) return;
  currentPicker.removeAttribute('selected');
  currentPicker.removeAttribute('emphasized');
  CONTENT_FRAME.contentDocument.removeEventListener('mousemove', capture);
  CONTENT_FRAME.contentDocument.removeEventListener('mousedown', saveCapture);
};

const startCapturing = (picker) => {
  currentPicker = picker;

  const id = currentPicker.getAttribute('for');
  pickerField = document.getElementById(id);

  if (!pickerField) {
    // eslint-disable-next-line no-console
    console.error(`Field #${id} not found, invalid dom`);
    return;
  }

  disablePickers();

  if (currentPicker.classList.contains('colorpicker')) {
    pickerType = 'color';
  } else if (currentPicker.classList.contains('backgroundcolorpicker')) {
    pickerType = 'backgroundcolor';
  } else if (currentPicker.classList.contains('fontpicker')) {
    pickerType = 'font';
  } else if (currentPicker.classList.contains('sizepicker')) {
    pickerType = 'size';
  }
  currentPicker.removeAttribute('disabled');
  currentPicker.setAttribute('selected', 'true');
  currentPicker.setAttribute('emphasized', 'true');
  CONTENT_FRAME.contentDocument.addEventListener('mousemove', capture);
  CONTENT_FRAME.contentDocument.addEventListener('mousedown', saveCapture);
};

const doCopyCSS = async () => {
  let css = '';
  if (config.vars && config.vars.styles) {
    css = generateCSS(config.vars.styles);
  }

  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(css);
    alert.success('CSS copied to clipboard');
  }
};

const attachListeners = () => {
  attachOptionFieldsListeners(config.fields, CONFIG_PARENT_SELECTOR);

  VARS_FIELDS.forEach((field) => {
    const colorField = document.querySelector(`${VARS_PARENT_SELECTOR} sp-color-handle[for="${field.id}"]`);

    field.addEventListener('change', (e) => {
      config.vars[field.id] = e.target.value;

      if (colorField) {
        colorField.color = e.target.value;
      }
    });
  });

  CONTENT_FRAME.addEventListener('load', doDrop);
  // GENERATE_BUTTON.addEventListener('click', doGenerateSite);
  COPYCSS_BUTTON.addEventListener('click', doCopyCSS);
  DROP_BUTTON.addEventListener('click', async () => {
    PREVIEW_PANEL.classList.remove('hidden');
    disableButton();
    disablePickers();
    const url = new URL(config.fields['inspect-url']);

    if (config.fields['inspect-enable-js']) {
      CONTENT_FRAME.removeAttribute('sandbox');
    } else {
      CONTENT_FRAME.setAttribute('sandbox', 'allow-same-origin');
    }

    CONTENT_FRAME.src = `http://localhost:3001${url.pathname}?host=${url.origin}`;
  });
  PICKERS.forEach((picker) => {
    picker.addEventListener('click', () => {
      startCapturing(picker);
    });
  });
};

const init = () => {
  config.fields = initOptionFields(CONFIG_PARENT_SELECTOR);

  attachListeners();
};

init();

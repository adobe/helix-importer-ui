const isCheckbox = (field) => field.type === 'checkbox' || field.tagName.toLocaleLowerCase().includes('checkbox');

const getOptionFields = (parent) => document.querySelectorAll(`${parent} .option-field`);
const getTextFields = (parent) => document.querySelectorAll(`${parent} .textfield`);

const attachOptionFieldsListeners = (fields, parent) => {
  const optionFields = getOptionFields(parent);
  optionFields.forEach((field) => {
    field.addEventListener('change', () => {
      const value = isCheckbox(field) ? field.checked : field.value;
      fields[field.id] = value;
      localStorage.setItem(`option-field-${field.id}`, value);
    });
  });
};

const attachTextFieldListeners = (fields, parent) => {
  const textFields = getTextFields(parent);
  textFields.forEach((field) => {
    field.addEventListener('input', () => {
      const value = field.value.trim();
      const labelField = document.querySelector(`${parent} sp-field-label[for="${field.id}"]`);
      // if the field is required but the value is empty, then update the invalid field
      if (labelField && labelField.required) {
        field.invalid = value === '';
      }
      fields[field.id] = value;
      localStorage.setItem(`textfield-${field.id}`, value);
    });
  });
};

const initFields = (parent) => {
  const fields = {};
  const optionFields = getOptionFields(parent);
  optionFields.forEach((field) => {
    const value = localStorage.getItem(`option-field-${field.id}`);
    if (value !== null) {
      if (isCheckbox(field)) {
        field.checked = (value === 'true');
      } else {
        field.value = value;
      }
    }
    fields[field.id] = isCheckbox(field) ? field.checked : field.value;
  });

  const textFields = getTextFields(parent);
  textFields.forEach((field) => {
    const value = localStorage.getItem(`textfield-${field.id}`);
    if (value !== null) {
      field.value = value;
    }
    fields[field.id] = field.value;
  });
  return fields;
};

export {
  getOptionFields,
  initFields,
  attachOptionFieldsListeners,
  attachTextFieldListeners,
};

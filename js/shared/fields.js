const getOptionFields = (parent) => document.querySelectorAll(`${parent} .optionField`);

const attachOptionFieldsListeners = (fields, parent) => {
  const optionFields = getOptionFields(parent);
  optionFields.forEach((field) => {
    field.addEventListener('change', () => {
      const value = field.type === 'checkbox' ? field.checked : field.value;
      fields[field.id] = value;
      localStorage.setItem(`option-field-${field.id}`, value);
    });
  });
};

const initOptionFields = (parent) => {
  const fields = {};
  const optionFields = getOptionFields(parent);
  optionFields.forEach((field) => {
    const value = localStorage.getItem(`option-field-${field.id}`);
    if (value !== null) {
      if (field.type === 'checkbox') {
        field.checked = (value === 'true');
      } else {
        field.value = value;
      }
    }

    fields[field.id] = field.type === 'checkbox' ? field.checked : field.value;
  });

  return fields;
};

export {
  getOptionFields,
  initOptionFields,
  attachOptionFieldsListeners,
};

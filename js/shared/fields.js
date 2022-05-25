const isCheckbox = (field) => field.type === 'checkbox' || field.tagName.toLocaleLowerCase().includes('checkbox');

const getOptionFields = (parent) => document.querySelectorAll(`${parent} .option-field`);

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

const initOptionFields = (parent) => {
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

  return fields;
};

export {
  getOptionFields,
  initOptionFields,
  attachOptionFieldsListeners,
};

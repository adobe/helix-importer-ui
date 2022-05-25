const isCheckbox = (field) => field.type === 'checkbox' || field.tagName.toLocaleLowerCase().includes('checkbox');

const getoption-fields = (parent) => document.querySelectorAll(`${parent} .option-field`);

const attachOptionFieldsListeners = (fields, parent) => {
  const option-fields = getoption-fields(parent);
  option-fields.forEach((field) => {
    field.addEventListener('change', () => {
      const value = isCheckbox(field) ? field.checked : field.value;
      fields[field.id] = value;
      localStorage.setItem(`option-field-${field.id}`, value);
    });
  });
};

const initOptionFields = (parent) => {
  const fields = {};
  const option-fields = getoption-fields(parent);
  option-fields.forEach((field) => {
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
  getoption-fields,
  initOptionFields,
  attachOptionFieldsListeners,
};

const ALERT = document.getElementById('alert-container');

const doAlert = (message, variant) => {
  const toast = document.createElement('sp-toast');
  toast.setAttribute('timeout', 1);
  toast.setAttribute('variant', variant);
  toast.setAttribute('open', true);
  toast.innerHTML = message;
  ALERT.append(toast);
};

const success = (message) => {
  doAlert(message, 'positive');
};

const error = (message) => {
  doAlert(message, 'negative');
};

const info = (message) => {
  doAlert(message, 'info');
};

export {
  success,
  error,
  info,
};

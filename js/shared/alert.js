const ALERT = document.getElementById('alert-container');

const doAlert = (message, variant) => {
  const toast = document.createElement('sp-toast');
  toast.setAttribute('timeout', 1);
  toast.setAttribute('variant', variant);
  toast.setAttribute('open', true);
  toast.textContent = message;
  toast.addEventListener('close', () => {
    toast.remove();
  });

  if (ALERT.hasChildNodes()) {
    ALERT.childNodes.forEach((node) => {
      node.remove();
    });
  }
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

const warning = (message) => {
  doAlert(message, 'warning');
};

export default {
  success,
  error,
  info,
  warning,
};

const ALERT = document.getElementById('alert-container');

const doAlert = (message, variant, details) => {
  const toast = document.createElement('sp-toast');
  toast.setAttribute('timeout', 1);
  toast.setAttribute('variant', variant);
  toast.setAttribute('open', true);
  if (details) {
    toast.innerHTML = `
        ${message}
        <sp-button
            id="alertDetailsTrigger" 
            slot="action"
            static="white"
            variant="secondary"
            treatment="outline">
            Details
        </sp-button>
    `;
  } else {
    toast.textContent = message;
  }

  toast.addEventListener('close', () => {
    toast.remove();
  });

  if (ALERT.hasChildNodes()) {
    ALERT.childNodes.forEach((node) => {
      node.remove();
    });
  }

  ALERT.append(toast);

  if (details) {
    const overlay = document.createElement('sp-overlay');
    overlay.setAttribute('trigger', 'alertDetailsTrigger@click');
    overlay.setAttribute('type', 'modal');
    overlay.innerHTML = `
        <sp-dialog-wrapper headline="Details" dismissable underlay>
            <p>${details}</p>
        </sp-dialog-wrapper>
    `;
    ALERT.append(overlay);
  }
};

const success = (message, details) => {
  doAlert(message, 'positive', details);
};

const error = (message, details) => {
  doAlert(message, 'negative', details);
};

const info = (message, details) => {
  doAlert(message, 'info', details);
};

const warning = (message, details) => {
  doAlert(message, 'warning', details);
};

export default {
  success,
  error,
  info,
  warning,
};

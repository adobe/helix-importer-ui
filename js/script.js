const SIDENAV_ITEMS = document.querySelectorAll('sp-sidenav-item');

function updateSectionView(e) {
  const value = e.target?.getAttribute('value');
  if (value) {
    const frame = document.querySelector('iframe');
    frame.src = value;
  }
}

SIDENAV_ITEMS?.forEach((item) => {
  item.addEventListener('click', updateSectionView);
});

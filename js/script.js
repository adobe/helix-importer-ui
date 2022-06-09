const SIDENAV_ITEMS = document.querySelectorAll('sp-sidenav-item');

function updateSectionView(e) {
  const value = e.target?.getAttribute('value')?.toLowerCase();
  if (value) {
    const sections = document.querySelectorAll('main section[value]');
    sections.forEach((section) => {
      section.classList.add('hidden');
    });
    const targetSection = document.querySelector(`.${value}`);
    if (targetSection) targetSection.classList.remove('hidden');
  }
}

SIDENAV_ITEMS?.forEach((item) => {
  item.addEventListener('click', updateSectionView);
});

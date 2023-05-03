const SIDENAV_ITEMS = document.querySelectorAll('sp-sidenav-item');
const GITHUB_LINK = document.querySelector('a.footer');

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

async function updateVersion() {
  const res = await fetch('./package.json');
  const json = await res.json();
  GITHUB_LINK.textContent += `${json.name}@${json.version}`;
}

updateVersion();

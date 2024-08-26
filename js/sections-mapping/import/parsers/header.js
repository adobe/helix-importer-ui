/* global WebImporter */

import { IMPORT_TARGETS } from "../sections-mapping.import.js";

const brandLogoMapping = [
  {
    checkFn: (e) => e.querySelector('a > picture, a > img'),
    parseFn: (e, targetEl, bodyWidth, x, target) => {
      if (bodyWidth && x < bodyWidth / 2) {
        if (target === IMPORT_TARGETS.CROSSWALK) {
          targetEl.append(e);
        } else {
          const linkedPictureEl = document.createElement('div');
          const linkEl = e.parentElement;
          linkEl.parentElement.append(linkedPictureEl);
          linkedPictureEl.append(document.createElement('br'));
          linkedPictureEl.append(linkEl);
          linkedPictureEl.prepend(...linkEl.children);
          if (linkEl.textContent.replaceAll(/[\n\t]/gm, '').trim().length === 0) {
            linkEl.textContent = linkEl.href;
          }

          if (linkedPictureEl.closest('li')) {
            const liEl = linkedPictureEl.closest('li');
            targetEl.append(...liEl.children);
            liEl.remove();
          } else {
            targetEl.append(linkedPictureEl);
          }
        }
        return true;
      }
      return false;
    },
  },
  {
    checkFn: (e) => e.querySelector('picture + br + a, img + br + a'),
    parseFn: (e, targetEl, bodyWidth, x, target) => {
      if (bodyWidth && x < bodyWidth / 2) {
        const imgEl = e.closest('picture, img');
        if (imgEl) {
          if (target === IMPORT_TARGETS.CROSSWALK) {
            targetEl.append(imgEl);
          } else {
            if (imgEl.closest('li')) {
              const liEl = imgEl.closest('li');
              targetEl.append(...liEl.children);
              liEl.remove();
            } else {
              targetEl.append(imgEl);
            }
          }
        }
        return true;
      }
      return false;
    },
  },
  {
    checkFn: (e) => e.querySelector('img'),
    parseFn: (e, targetEl, bodyWidth, x) => {
      if (bodyWidth && x < bodyWidth / 2) {
        if (e.closest('li')) {
          const liEl = e.closest('li');
          targetEl.append(...liEl.children);
          liEl.remove();
        } else {
          targetEl.append(e);
        }
        return true;
      }
      return false;
    },
  },
  {
    checkFn: (e, { originURL }) => e.querySelector(`a[href="/"], a[href="${originURL}"], a[href="${originURL}/"]`),
    parseFn: (e, targetEl, bodyWidth, x) => {
      if (bodyWidth && x < bodyWidth / 2) {
        targetEl.append(e);
        return true;
      }
      return false;
    },
  },
  {
    checkFn: () => {
      // fetch favicon
      const resp = fetch('/favicon.ico');
      if (resp && resp.status === 200) {
        const logoEl = document.createElement('img');
        logoEl.src = '/favicon.ico';
        return logoEl;
      }
      return null;
    },
    parseFn: (e, targetEl) => {
      targetEl.append(e);
      return true;
    },
  },
];

function getBrandLogo(rootEl, document, { bodyWidth, originURL, target }) {
  const brandEl = document.createElement('div');
  brandLogoMapping.some((m) => {
    const logoEl = m.checkFn(rootEl, { originURL, target });
    if (logoEl) {
      let x = 0;
      try {
        x = JSON.parse(logoEl.closest('div')?.getAttribute('data-hlx-imp-rect')).x;
      } catch (e) {
        console.error('error', e);
      }

      return m.parseFn(logoEl, brandEl, bodyWidth, x, target);
    }
    return false;
  });

  return brandEl;
}

const navMapping = [
  {
    checkFn: (e) => [...e.querySelectorAll('nav ul, nav ol')]
      .filter((i) => !i.parentElement.closest('ul, ol') && !i.hasAttribute('data-hlx-imp-hidden-div'))
      .reduce((acc, navListEl) => {
        let x = null;
        try {
          x = JSON.parse(navListEl.closest('div')?.getAttribute('data-hlx-imp-rect')).x;
        } catch (err) {
          console.error('error', err);
        }

        if (!acc || (typeof x === 'number' && x < acc.x)) {
          return {
            el: navListEl,
            x,
          };
        }

        return acc;
      }, null),
    parseFn: (e, targetEl) => {
      targetEl.append(e?.el);
      return true;
    },
  },
  {
    checkFn: (e) => [...e.querySelectorAll('nav')]
      .filter((i) => !i.parentElement.closest('nav') && !i.hasAttribute('data-hlx-imp-hidden-div'))
      .reduce((acc, navListEl) => {
        let x = null;
        try {
          x = JSON.parse(navListEl.closest('div')?.getAttribute('data-hlx-imp-rect')).x;
        } catch (err) {
          console.error('error', err);
        }

        if (!acc || (typeof x === 'number' && x < acc.x)) {
          return {
            el: navListEl,
            x,
          };
        }

        return acc;
      }, null),
    parseFn: (e, targetEl) => {
      targetEl.append(e?.el);
      return true;
    },
  },
  {
    checkFn: (e, { bodyWidth }) => [...e.querySelectorAll('ol,ul')].filter((f) => f.parentElement.closest('ol,ul') === null).reduce(
      (acc, listEl) => {
        console.log('listEl', listEl);
        const items = [...listEl.querySelectorAll(':scope > li')].filter((liEl) => {
          liEl.querySelectorAll('script', 'style').forEach((d) => d.remove());
          return liEl.textContent.replaceAll('\n', '').trim().length > 0;
        });

        let x = null;
        try {
          x = JSON.parse(listEl.closest('div')?.getAttribute('data-hlx-imp-rect')).x;
        } catch (err) {
          console.error('error', err);
        }

        console.log('items', items.length, acc?.children.length, x, bodyWidth, listEl);

        if (
          items.length > 1
          && (!acc || items.length > acc.children.length)
          && (!bodyWidth || (typeof x === 'number' && x < bodyWidth / 2))
        ) {
          console.log('found', listEl);
          return listEl;
        }
        return acc;
      },
      null,
    ),
    parseFn: (e, targetEl) => {
      // cleanup
      const elsToDelete = e.querySelectorAll(':scope > :not(li)');
      elsToDelete.forEach((d) => d.remove());

      targetEl.append(e);
      return true;
    },
  },
];

function getNavigation(rootEl, document, { bodyWidth }) {
  const navEl = document.createElement('div');
  navMapping.some((m) => {
    const el = m.checkFn(rootEl, { bodyWidth });
    if (el) {
      console.log('nav', el);
      let x = 0;
      try {
        x = JSON.parse(el.closest('div')?.getAttribute('data-hlx-imp-rect')).x;
      } catch (e) {
        console.error('error', e);
      }

      return m.parseFn(el, navEl, bodyWidth, x);
    }
    return false;
  });

  return navEl;
}

function cleanup(el) {
  el.querySelectorAll('script', 'style').forEach((e) => e.remove());

  el.querySelectorAll('a').forEach((a) => {
    if (a.textContent.replaceAll('\n', '').trim().toLowerCase() === 'skip to content') {
      a.remove();
    }
  });
  return el;
}

export default function headerParser(el, { document, params, allMappings, target }) {
  const containerEl = document.createElement('div');

  const bodyWidth = allMappings.sections[0]?.blocks[0]?.width;
  const originURL = new URL(params.originalURL).origin;

  // get brand logo
  const brandEl = getBrandLogo(el, document, { bodyWidth, originURL, target });

  // get navigation content
  const navEl = getNavigation(el, document, { bodyWidth });

  // get remaining hidden elements
  const hiddenEls = document.createElement('div');
  while (el.querySelector('[data-hlx-imp-hidden-div]')) {
    hiddenEls.append(el.querySelector('[data-hlx-imp-hidden-div]'));
  }

  // get remaining content as tools
  const toolsEl = document.createElement('div');
  toolsEl.append(...el.children);

  containerEl.append(brandEl);
  containerEl.append(document.createElement('hr'));
  containerEl.append(navEl);
  containerEl.append(document.createElement('hr'));
  containerEl.append(toolsEl);

  // put hidden elements in a "hidden" section
  if (hiddenEls.children.length > 0 && hiddenEls.textContent.replaceAll('\n', '').trim().length > 0) {
    containerEl.append(document.createElement('hr'));
    containerEl.append(hiddenEls);
    containerEl.append(WebImporter.DOMUtils.createTable([
      ['section-metadata'],
      ['style', 'hidden'],
    ], document));
  }

  cleanup(containerEl);

  return containerEl;
}

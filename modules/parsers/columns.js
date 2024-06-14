import blockParser from './block.js';

function getXPath(elm, document, withDetails = false) {
  const allNodes = document.getElementsByTagName('*');
  const segments = [];
  // eslint-disable-next-line no-param-reassign
  for (segments; elm && elm.nodeType === 1; elm = elm.parentNode) {
    if (withDetails) {
      if (elm.hasAttribute('id')) {
        let uniqueIdCount = 0;
        // eslint-disable-next-line no-plusplus
        for (let n = 0; n < allNodes.length; n++) {
          // eslint-disable-next-line no-plusplus
          if (allNodes[n].hasAttribute('id') && allNodes[n].id === elm.id) uniqueIdCount++;
          if (uniqueIdCount > 1) break;
        }
        if (uniqueIdCount === 1) {
          segments.unshift(`id("${elm.getAttribute('id')}")`);
          return segments.join('/');
        }
        segments.unshift(`${elm.localName.toLowerCase()}[@id="${elm.getAttribute('id')}"]`);
      } else if (elm.hasAttribute('class')) {
        segments.unshift(`${elm.localName.toLowerCase()}[@class="${[...elm.classList].join(' ').trim()}"]`);
      }
    } else {
      let i = 1;
      let sib;
      for (i, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.localName === elm.localName) {
          i += 1;
        }
      }
      segments.unshift(`${elm.localName.toLowerCase()}[${i}]`);
    }
  }

  return segments.length ? `/${segments.join('/')}` : null;
}

// courtesy of https://github.com/adobecom/aem-milo-migrations/blob/main/tools/importer/parsers/utils.js
function getNSiblingsDivs(el, document, n = null) {
  let cmpFn = n;

  if (Number.isInteger(n)) {
    cmpFn = (c) => c === n;
  }

  let selectedXpathPattern = '';
  const xpathGrouping = [];

  el.querySelectorAll('*').forEach((d) => {
    const xpath = getXPath(d, document);
    const xp = xpath.substring(0, xpath.lastIndexOf('['));
    if (!xpathGrouping[xp]) {
      xpathGrouping[xp] = [d];
    } else {
      xpathGrouping[xp].push(d);
    }
  });

  // find the xpath pattern that has n elements
  // eslint-disable-next-line no-restricted-syntax
  for (const key in xpathGrouping) {
    if (cmpFn(xpathGrouping[key].length)) {
      selectedXpathPattern = key;
      break;
    }
  }
  if (!selectedXpathPattern) {
    if (cmpFn(el.children.length)) {
      return [...el.children];
    }
  }

  return xpathGrouping[selectedXpathPattern] || null;
}

export default function parse(el, { document, params: { cells } }) {
  // cleanup
  el.querySelectorAll('script, style').forEach((e) => e.remove());
  el.querySelectorAll('div').forEach((e) => {
    if (!e.querySelector('img, svg, iframe') && e.textContent.replaceAll('\n', '').trim().length === 0) {
      e.remove();
    }
  });

  if (cells) {
    return blockParser(el, { params: { cells } });
  }

  // begin automatic detection
  el.querySelectorAll('div').forEach((d) => {
    console.log(`XPATH: ${getXPath(d, document, true)}`);
    console.log(d.getBoundingClientRect());
    if (d.dataset.hlxImpRect) {
      console.log(d.dataset.hlxImpRect);
      console.log(JSON.parse(d.dataset.hlxImpRect));
    }
  });

  return [getNSiblingsDivs(el, document, (n) => n > 1)];
}

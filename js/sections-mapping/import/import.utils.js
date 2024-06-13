export function getXPath(elm, document, withDetails = false) {
  const allNodes = document.getElementsByTagName('*');
  let segs;
  for (segs = []; elm && elm.nodeType === 1; elm = elm.parentNode) {
    if (withDetails) {
      if (elm.hasAttribute('id')) {
        let uniqueIdCount = 0;
        for (let n = 0; n < allNodes.length; n += 1) {
          if (allNodes[n].hasAttribute('id') && allNodes[n].id === elm.id) uniqueIdCount += 1;
          if (uniqueIdCount > 1) break;
        }
        if (uniqueIdCount === 1) {
          segs.unshift(`id("${elm.getAttribute('id')}")`);
          return segs.join('/');
        }
        segs.unshift(`${elm.localName.toLowerCase()}[@id="${elm.getAttribute('id')}"]`);
      } else if (elm.hasAttribute('class')) {
        segs.unshift(`${elm.localName.toLowerCase()}[@class="${[...elm.classList].join(' ').trim()}"]`);
      }
    } else {
      let i;
      let sib;
      for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.localName === elm.localName) {
          i += 1;
        }
      }
      segs.unshift(`${elm.localName.toLowerCase()}[${i}]`);
    }
  }
  return segs.length ? `/${segs.join('/')}` : null;
}

// courtesy of https://github.com/adobecom/aem-milo-migrations/blob/main/tools/importer/parsers/utils.js
export function getNSiblingsDivs(el, document, n = null) {
  let cmpFn = n;

  if (!isNaN(n)) {
    cmpFn = (c) => c === n;
  }

  let selectedXpathPattern = '';
  const xpathGrouping = [];

  el.querySelectorAll('*').forEach(d => {
    const xpath = getXPath(d, document);
    const xp = xpath.substring(0, xpath.lastIndexOf('['));
    if (!xpathGrouping[xp]) {
      xpathGrouping[xp] = [d];
    } else {
      xpathGrouping[xp].push(d);
    }
  });

  // find the xpath pattern that has n elements
  for (let key in xpathGrouping) {
    if (cmpFn(xpathGrouping[key].length)) {
      selectedXpathPattern = key;
      break;
    }
  }

  return xpathGrouping[selectedXpathPattern] || null;
}

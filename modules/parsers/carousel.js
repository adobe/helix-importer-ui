import blockParser from './block.js';

/**
 * Get the common ancestor of two or more elements
 * @param {NodeList} elements The list of elements to compare
 * @returns {Node} The common ancestor
 */
function getCommonAncestor(elements) {
  // If there are no elements, return null
  if (elements.length === 0) {
    return null;
  }

  // If there's only one element, return it
  if (elements.length === 1) {
    return elements[0];
  }

  // Otherwise, create a new Range
  const range = document.createRange();

  // Start at the beginning of the first element
  range.setStart(elements[0], 0);

  // Stop at the end of the last element
  range.setEnd(
    elements[elements.length - 1],
    elements[elements.length - 1].childNodes.length,
  );

  // Return the common ancestor
  return range.commonAncestorContainer;
}

export default function parse(el, { params: { cells } }) {
  const cellRows = blockParser(el, { params: { cells } }) || [];

  // a carousel will consist of one row for every image found
  const images = el.querySelectorAll('img');
  if (images.length === 1 && images[0].children.length === 0) {
    return [[images[0]]];
  }
  const commonParent = getCommonAncestor(images);
  const imageRows = [...images].map((img) => {
    const slide = [...commonParent.children].find((child) => child.contains(img));
    const content = [...slide.children].filter((child) => !child.contains(img));
    return [img, content];
  });

  return [...cellRows, ...imageRows];
}

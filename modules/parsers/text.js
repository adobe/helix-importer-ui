export default function parse(el) {
  // Main case -> text node of the immediate children of 'el'
  let textCells = [...el.childNodes].map((node) => {
    let nextText = '';
    if (node.nodeType === Node.TEXT_NODE) {
      nextText = node.textContent.trim();
      if (nextText.length === 0) {
        return null;
      }
      return [nextText];
    }
    return null;
  }).filter((cell) => cell);

  // Did not get any hits so put together the text (in rows) of the children.
  if (textCells.length === 0) {
    textCells = [...el.children].map((node) => {
      const nextText = node.innerText.trim();
      if (nextText.length > 0) {
        return [nextText];
      }
      return null;
    }).filter((cell) => cell);
  }

  return textCells;
}

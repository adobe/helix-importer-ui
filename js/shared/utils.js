async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
}

function getElementByXpath(document, path) {
  try {
    return document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error evaluating this xpath:', path, e);
  }
  return undefined;
}

// Create and return an element with optional 'props' attributes and optional inner text.
function createElement(nodeName, props, innerText) {
  const newElement = document.createElement(nodeName);
  if (newElement) {
    if (props) {
      Object.entries(props)
        .forEach(([key, value]) => {
          newElement.setAttribute(key, value);
        });
    }
    if (innerText) {
      newElement.innerText = innerText;
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('Error creating element:', nodeName);
  }
  return newElement;
}

export {
  asyncForEach,
  getElementByXpath,
  createElement,
};

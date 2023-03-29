# Case study: import from a json file or a JSON API

Page to consider: https://main--hlxsite--kptdobe.hlx.page/content/json-page.json

This is dummy page, do not worry about the data, it is just here to illustrate how to consume some random JSON.
The goal is to convert that JSON object into a docx. The only additionals step is to parse the JSON object and load the useful data as DOM elements. This is probably not the smartest approach (a JSON to MD conversion would be more direct) but since everything is there in the importer, we are just reusing the existing process.

Here is an import.js example:

```js
const createMetadata = (main, document) => {
  const meta = {};

  const title = document.querySelector('title');
  if (title) {
    meta.Title = title.innerHTML.replace(/[\n\t]/gm, '');
  }

  const block = WebImporter.Blocks.getMetadataBlock(document, meta);
  main.append(block);
};

export default {
  preprocess: ({ document }) => {
    if (document.body.firstChild && document.body.firstChild.nodeName === 'PRE') {
      const json = JSON.parse(document.body.firstChild.textContent);

      // from here, convert your JSON into DOM elements
      // this is really specific to the JSON you're importing
      if (json.data && json.data.length > 0) {
        document.body.innerHTML = '';

        const title = document.createElement('title');
        title.textContent = json.data[0].Title;
        document.head.append(title);

        const main = document.createElement('main');
        const h1 = document.createElement('h1');
        h1.textContent = json.data[0].Title;
        main.append(h1);

        const p1 = document.createElement('p');
        p1.textContent = json.data[0]['Paragraph 1'];
        main.append(p1);

        const p2 = document.createElement('p');
        p2.textContent = json.data[0]['Paragraph 2'];
        main.append(p2);

        document.body.append(main);
      }
    }
  },

  transformDOM: ({
    // eslint-disable-next-line no-unused-vars
    document,
    url,
  }) => {
    const main = document.body;
    
    // you can implement your usual DOM transformation rules here
    createMetadata(main, document);

    return main;
  },
};
```

Notes:
- the JSON to DOM element conversion depends on the JSON schema
- If the JSON is super generic, it might be cleaner to focus on the JSON to DOM conversion in the `preprocess` step to get a clean DOM and on the usual DOM transformation rules in `transformDOM` for the project specific block creations. If the JSON is super specific (i.e. blocks are already identified here), then the JSN to DOM conversion might already output the blocs.

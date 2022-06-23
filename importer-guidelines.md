# Importer Guidelines

## General idea

The general idea of the importer is pretty straight forward: it takes a page DOM and transforms it into a Markdown file which is then converted to a docx file). For now, let's consider that the Markdown file is a one-to-one equivalent to the docx file thus next references to Markdown or docx are equivalent "to the output of the transformation process".

As Markdown is a pretty simple format, the DOM transformation is really basic: a `h1` becomes a `Heading 1`, a paragraph or text in a `span` or `div` becomes a paragraph, an `a` stays a link, an `img` an image... All styling, layout or `div` nesting disappears in the Markdown output. Only special case is `table` which stays a `table` HTML element in the Markdown output and become a table in Word (which is the foundation for Blocks). 

The point is really to extract the content only from the original page. And the importer objectif is to help digesting a large amount of pages from an existing website. If you have one page on the website, it is easy to manually copy/paste the content and save it into a Word document. But in the case of a blog site for example, with thousands of blog articles looking very similar, it would be fastidious to manullay copy/paste all pages. If a large set of pages look the same, this is when you want to use the importer and write a specific `import.js` transformation file.

### `import.js` transformation file

Out of the box, the importer should be able to consume any page and output a Markdown file out of it. Some parts like the navigation, the header or the footer should not appear in all the docx files, the first element of the docx should be a Heading 1, some data are metadata that can be stored in a Metadata block... these are basic rules to structure the content in the Word documents and the transformation file is the place to write those rules.

Such a rule is very straight forward to implement: it is usually a set of DOM operations: create new, move or delete DOM elements.

In your `import.js` transformation file, you can implement 2 methods:

- `transformDOM: ({ document, url, html }) => {}`: implement here your transformation rules and return the DOM element that needs to be transformed to Markdown (default is `document.body` but usually a `main` element is more relevant).
  - `document`: the incoming DOM
  - `url`: the current URL being imported
  - `html`: the original HTML source (when loading the DOM as a document, some things are cleaned up, having the raw original HTML is sometimes useful)
- `generateDocumentPath: ({ document, url }) => {}`: return a path that describes the document being transformed - allows you to define / filter the page name and the folder structure in which the document should be stored (default is the current url pathname with the trailing slash and the `.html`)
  - `document`: the incoming DOM
  - `url`: the current URL being imported

## Rule examples

### Cleanup

Assuming the incoming DOM looks like this (simplified):

```html
<html>
  <head></head>
  <body>
    <header>...</header>
    <main>
      <h1>Hello World</h1>
      <div>This is an example.</div>
      <p class="disclaimer">This is content I do not want in my Word documents</p>
    </main>
    <footer>...</footer>
  </body>
</html>
```

The 2 following implementations output the same result:

```md
# Hello World
This is an example.
```

Implementation 1:

```js
export default {
  transformDOM: ({ document }) => {
    // remove header and footer from body
    WebImporter.DOMUtils.remove(document.body, [
      'header',
      'footer',
      '.disclaimer',
    ]);

    return document.body;
  },
};
```

Implementation 2:

```js
export default {
  transformDOM: ({ document }) => {
    const main = document.querySelector('main');
    const disclaimer = main.querySelector('.disclaimer');
    if (disclaimer) disclaimer.remove();
    return main;
  },
};
```

Notes on those 2 different implementations:
- you need to return a DOM element, otherwise the `document.body` is used.
- you can either work on the full `body` element or focus on the `main` element. This is really up to you. Sometimes removing everything not necessary can be tidious.
- you do not need to transform the `div` into a `p` to get a text paragraph.

### Create a block

One important step of the content migration is to transform some existing "components" into Helix blocks. While the Helix philosophy is to use the maximum of the standard Markdown semantic (text, title, images, links...), sometimes blocks are needed to combine of several of those default elements.

In Word, a block is a table. To create a block during the import, you simply then need to create an HTML table. You can do that manually (create `<table>`, `tr`, `td`... elements) but a helper is provided. A block you will almost always need is a metadata table:

Input DOM:

```html
<html>
  <head></head>
  <body>
    <header>
      <title>The Hello World page</title>
      <meta property="og:description" content="This is a really cool Hello World page.">
      <meta property="og:image" content="https://www.sample.com/images/helloworld.png">
    </header>
    <main>
      <h1>Hello World</h1>
      <div>This is an example.</div>
      <p class="disclaimer">This is content I do not want in my Word documents</p>
    </main>
    <footer>...</footer>
  </body>
</html>
```

Implementation:

```js

const createMetadataBlock = (main, document) => {
  const meta = {};

  // find the <title> element
  const title = document.querySelector('title');
  if (title) {
    meta.Title = title.innerHTML.replace(/[\n\t]/gm, '');
  }

  // find the <meta property="og:description"> element
  const desc = document.querySelector('[property="og:description"]');
  if (desc) {
    meta.Description = desc.content;
  }

  // find the <meta property="og:image"> element
  const img = document.querySelector('[property="og:image"]');
  if (img) {
    // create an <img> element
    const el = document.createElement('img');
    el.src = img.content;
    meta.Image = el;
  }

  // helper to create the metadata block
  const block = WebImporter.Blocks.getMetadataBlock(document, meta);

  // append the block to the main element
  main.append(block);

  // returning the meta object might be usefull to other rules
  return meta;
};

export default {
  transformDOM: ({ document }) => {
    const main = document.querySelector('main');
    
    createMetadataBlock(main, document);

    // final cleanup
    WebImporter.DOMUtils.remove(main, [
      '.disclaimer',
    ]);

    return main;
  },
};
```

Output:

```md
# Hello World
This is an example.

<table>
  <tbody>
    <tr><th colspan="2">Metadata</th></tr>
    <tr><td>Title</td><td>The Hello World page</td></tr>
    <tr><td>Description</td><td>This is a really cool Hello World page.</td></tr>
    <tr><td>Image</td><td><img src="https://www.sample.com/images/helloworld.png"></td></tr>
  </tbody>
</table>
```

`WebImporter.Blocks.getMetadataBlock(document, meta);` is an helper to create the specific Metadata block. Another helper is available to create tables: 

```js
const el = document.createElement('img');
el.src = 'https://www.sample.com/images/helloworld.png';

const cells = [
  ['Metadata'],
  ['Title', 'The Hello World page'],
  ['Description', 'This is a really cool Hello World page.'],
  ['Image', el]
];
const table = WebImporter.DOMUtils.createTable(cells, document);
```

This code would produce almost the same table (does not deal with the colspan) than the Metadata table above.

### Convert background images

Backgroud images are either part of the CSS or inline styles. As mentioned above, the styles considered when converting the DOM to Markdown. If background images are used on the pages being imported, they must receive a special treatment.

Note: in a preprocessing step, the importer tries its best to inline in the DOM the background images which are stored in CSS files.

Input DOM:

```html
<html>
  <head></head>
  <body>
    <main>
      <h1>Hello World</h1>
      <div class="hero" style="background-image: url(https://www.sample.com/images/helloworld.png);"></div>
    </main>
  </body>
</html>
```

With not special handling, the output is: 

```md
# Hello World
```

With the following rule in the transformation file:

```js
const hero = document.querySelector('.hero');
WebImporter.DOMUtils.replaceBackgroundByImg(hero, document);
```

Output is then:
```md
# Hello World
![](https://www.sample.com/images/helloworld.png);
```


### More samples

Sites in the https://github.com/hlxsites/ organisation have all be imported. There are many different implementation cover a lot of use cases.

## Helpers

The `DOMUtils` and `Blocks` objects are exposed. Their implementation can be found here: 

- https://github.com/adobe/helix-importer/blob/main/src/utils/DOMUtils.js
- https://github.com/adobe/helix-importer/blob/main/src/utils/Blocks.js

While more documentation will be written, you can already find how to use them via the tests:

- https://github.com/adobe/helix-importer/blob/main/test/utils/DOMUtils.spec.js
- https://github.com/adobe/helix-importer/blob/main/test/utils/Blocks.spec.js
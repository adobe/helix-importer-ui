# Importer Guidelines

## General idea

The general idea of the importer is pretty straight forward: it takes a page DOM and transforms it into a Markdown file which is then converted to a docx file. For now, let's consider that the Markdown file is a one-to-one equivalent to the docx file thus the next references to Markdown or docx are equivalent to "the output of the transformation process".

As Markdown is a pretty simple format, the DOM transformation is really basic: a `h1` becomes a `Heading 1`, a paragraph or text in a `span` or `div` becomes a paragraph, an `a` stays a link, an `img` an image... All styling, layout or `div` nesting disappears in the Markdown output. The only special case is `table` which stays a `table` HTML element in the Markdown output and become a table in Word (which is the foundation for Blocks). 

The point is really to only extract the content from the original page. And the importers primary objective is to help in digesting a large amount of pages from an existing website. If you have only few pages on the website, it is easier and faster to manually copy/paste the content into Word documents. But in the case of a large website with pages that are structurally similar (for example a blog site with thousands of blog articles), it would be fastidious to manually copy/paste all pages. 

To summarize: if a large set of pages look the same, this is when you want to use the importer and write a specific `import.js` transformation file.

### `import.js` transformation file

Out of the box, the importer should be able to consume any page and output a Markdown file out of it. Some parts like the navigation, the header or the footer should not appear in all the docx files, the first element of the docx should be a Heading 1, some data are metadata that can be stored in a Metadata block... these are basic rules to structure the content in the Word documents and the transformation file is the place to write those rules.

Such a rule is very straight forward to implement: it is usually a set of DOM operations: create new, move or delete DOM elements.

In your `import.js` transformation file, you can implement 2 modes: 
- one input / one output - default file snippet: https://gist.github.com/kptdobe/8a726387ecca80dde2081b17b3e913f7
- one input / multiple outputs - default file snippet: https://gist.github.com/kptdobe/7bf50b69194884171b12874fc5c74588

#### one input / one output

You must implement those 2 methods:

- `transformDOM: ({ document, url, html, params }) => {}`: implement here your transformation rules and return the DOM element that needs to be transformed to Markdown (default is `document.body` but usually a `main` element is more relevant).
  - `document`: the incoming DOM
  - `url`: the current URL being imported
  - `html`: the original HTML source (when loading the DOM as a document, some things are cleaned up, having the raw original HTML is sometimes useful)
  - `params`: some params given by the importer. Only param so far is the `originalURL` which is the url of the page being imported (url is the one to the proxy)
- `generateDocumentPath: ({ document, url, html, params }) => {}`: return a path that describes the document being transformed - allows you to define / filter the page name and the folder structure in which the document should be stored (default is the current url pathname with the trailing slash and the `.html`). Params are the same than above.

This is simpler version of the implementation. You can achieve the same by implementing the `transform` method as describe below.

#### one input / multiple outputs

You must implement this method:
- `transform: ({ document, url, html, params }) => {}`: implement here your transformation rules and return an array of pairs `{ element, path }` where element is a DOM DOM element that needs to be transformed to Markdown and path is the path to the exported file.
  - `document`: the incoming DOM
  - `url`: the current URL being imported
  - `html`: the original HTML source (when loading the DOM as a document, some things are cleaned up, having the raw original HTML is sometimes useful)
  - `params`: some params given by the importer. Only param so far is the `originalURL` which is the url of the page being imported (url is the one to the proxy)

The idea is simple: return a list of elements that will be converted to docx and stored at the path location.

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
- you can either work on the full `body` element or focus on the `main` element. This is really up to you. Sometimes removing everything not necessary and can be tedious.
- you do not need to transform the `div` into a `p` to get a text paragraph.

### Create a block

One important step of the content migration is to transform some existing "components" into Franklin blocks. While the Franklin philosophy is to use the maximum of the standard Markdown semantic (text, title, images, links...), sometimes blocks are needed to combine of several of those default elements.

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

#### Special Note for `blockquote`
While exporting HTML contents enclosed within [blockquote](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) to Word docs, the `table` may not get exported correctly (like reported in https://github.com/adobe/helix-importer/issues/29). For such situations, consider removing or replacing `blockquote` enclosing the `table`.

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

### Mutiple output

If you need to transform one page into multiple Word documents (fragments, banners, author pages...), you can use the `transform` method.

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

With the following `import.js`, you will get 2 md / docx documents:

```js
{
  transform: ({ document, params }) => {
    const main = document.querySelector('main');
    // keep a reference to the image
    const image = main.querySelector('.hero')

    //remove the image from the main, otherwise we'll get it in the 2 documents
    WebImporter.DOMUtils.remove(main, [
      '.hero',
    ]);

    return [{
      element: main,
      path: '/main',
    }, {
      element: image,
      path: '/image',
    }];
  },
}
```

Outputs are:

`/main.md`

```md
# Hello World
```

`/image.md`

```md
![](https://www.sample.com/images/helloworld.png);
```

Note:
- be careful with the DOM elements you are working with. You always work on the same document thus you may destruct elements for one output which may have an inpact on the other outputs.
- you may have as many outputs as you want (limit not tested yet).

### More samples

Sites in the https://github.com/hlxsites/ organization have all be imported. There are many different implementations that cover a lot of use cases.

## Helpers

The `DOMUtils` and `Blocks` objects are exposed. Their implementation can be found here: 

- https://github.com/adobe/helix-importer/blob/main/src/utils/DOMUtils.js
- https://github.com/adobe/helix-importer/blob/main/src/utils/Blocks.js

While more documentation will be written, you can already find how to use them via the tests:

- https://github.com/adobe/helix-importer/blob/main/test/utils/DOMUtils.spec.js
- https://github.com/adobe/helix-importer/blob/main/test/utils/Blocks.spec.js

## Security and memory

When using this importer tool, everything happens in the browser which means the import process must be able to fetch all the resources and in some cases execute the Javascript from the page being imported.
When running `hlx import`, a proxy is started and all requests to the host are re-written client-side and go through the proxy. This allows the importer to control the security settings and avoid CORS and CSP issues. The target page is then loaded in an iframe and the importer access to the DOM via this iframe.

This is a generic solution that might not work in some cases, some sites are pretty imaginative in how to prevent being loaded in a iframe (like a Javascript redirect if the `window.location` is not their own host). If you face such a problem, you can contact the Franklin team and we can look at some workarounds and potentially integrate more logic in the proxy to handle more of these cases.

One workaround to try could be to run the browser with all security settings off. But this is getting harder and harder to do.

### Images

When the import process creates the docx, images are downloaded and inlined inside the Word document. Later, when the page is previewed for the first time, the images are then uploaded to the Franklin Media bus. When images are stored on the same host, this is usually not an issue but in a lot of cases, images are coming from different hosts. We then need some extra logic to also proxy those different hosts. This code might help (todo: create a helper for it or even integrate to the process): 

```js
const makeProxySrcs = (main, host) => {
  main.querySelectorAll('img').forEach((img) => {
    if (img.src.startsWith('/')) {
      // make absolute
      const cu = new URL(host);
      img.src = `${cu.origin}${img.src}`;
    }
    try {
      const u = new URL(img.src);
      u.searchParams.append('host', u.origin);
      img.src = `http://localhost:3001${u.pathname}${u.search}`;
    } catch (error) {
      console.warn(`Unable to make proxy src for ${img.src}: ${error.message}`);
    }
  });
};
```

This simply transforms the image srcs to use the proxy: `https://www.sample.com/images/helloworld.png` becomes `http://localhost:3001/images/helloworld.png?host=https://www.sample.com`

### Javascript or not Javascript: memory consumption

Disabling Javascript in the option is the best solution for speed and memory consumption. You can then import thousands of pages.
With Javascript enabled, things become more complicated for the browser. It depends on the amount of code to load and execute, but in general, you can only import around one hundred pages before the browser crashes (too much memory consumed).

Having Javascript enabled is usually required to capture content which is dynamically loaded which is 100% of the cases with SPA (React, Angular...). In this case, you need to create a small set of pages to import, run the import and reload the full browser window to flush the memory and run the next batch.

We are also working on a cli version of the importer (see https://github.com/adobe/helix-importer/issues/23) where memory can be handled properly.

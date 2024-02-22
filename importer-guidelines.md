# Importer Guidelines

## General idea

The general idea of the importer is pretty straight forward: it takes a page DOM and transforms it into a Markdown file which is then converted to a docx file. For now, let's consider that the Markdown file is a one-to-one equivalent to the docx file thus the next references to Markdown or docx are equivalent to "the output of the transformation process".

As Markdown is a pretty simple format, the DOM transformation is really basic: a `<h1>` becomes a `Heading 1`, a paragraph or text in a `<span>` or `<div>` becomes a paragraph, an `<a>` stays a link, an `<img>` an image... All styling, layout or `<div>` nesting disappears in the Markdown output. The only special case is `<table>` which becomes a `gridtable` element in the Markdown output and becomes a table in Word (which is the foundation for [Blocks](https://www.hlx.live/developer/markup-sections-blocks)).

The point is really to only extract the content from the original page. And the importer primary objective is to help in digesting a large amount of pages from an existing website. If you have only few pages on the website, it is easier and faster to manually copy/paste the content into Word documents. But in the case of a large website with pages that are structurally similar (for example a blog site with thousands of blog articles), it would be fastidious to manually copy/paste all pages. 

To summarize: if a large set of pages look the same, this is when you want to use the importer and write a specific `import.js` transformation file.

The transformation file will contain a set of basic transformation rules. Writing those import transformation rules is an iterative process: you will first digest one page with a minimun of transformations. Then you should try to style this page: you will see that you might need some blocks for certain pieces. That's when you come back to your transformation rules and add more to automatically convert some areas of the DOM into blocks. Once the page is exactly what you expect in terms of content structure, try another one. You might find other blocks that could benefit from automatic transformations. Try with 2, 3 more. Then you can run the import on your whole set of pages!

It is worth mentioning that this is a developer tool and requires some understanding of Javascript and the DOM. But nothing else.

Reading this document before starting with content import is highly recommended. You'll find some [tips and tricks at the end](#tips-and-tricks).

### `import.js` transformation file

Out of the box, the importer should be able to consume any page and output a Markdown file out of it. Some parts like the navigation, the header or the footer should not appear in all the docx files, the first element of the docx should be a Heading 1, some data are metadata that can be stored in a Metadata block... these are basic rules to structure the content in the Word documents and the transformation file is the place to write those rules.

Such a rule is very straight forward to implement: it is usually a set of DOM operations: create new, move or delete DOM elements.

In your `import.js` transformation file, you can implement 2 modes: 
- one input / one output - default file snippet: https://gist.github.com/kptdobe/8a726387ecca80dde2081b17b3e913f7 (the code provided here is equivalent to the default import running if you do not provide an `import.js` file)
- one input / multiple outputs - default file snippet: https://gist.github.com/kptdobe/7bf50b69194884171b12874fc5c74588

Note: when working on an import with the `Import - Workbench` tool, the `import.js` file is hot-reloaded and the import process is launched automatically each time you modify the file - this allows to immediately see the impact of your changes. This hot-reload behavior is NOT available when working with the `Import - Bulk` tool - this is to avoid the risk of re-launching the full import if you touch your `import.js` file while importing 1k or more pages.

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

### Note on generated paths

The AEM URL space is pretty restricted (lower case, only latin characters, only hyphens, no .html) and the recommendation given to authors is to maintain directory and document names following the exact same restrictions in Sharepoint / GDrive to have a one to one mapping between the path+file and its URL. It makes their life so much easier!

When importing a site, you will encounter a lot of various fancy URLs. The `generateDocumentPath` function allows you to control the document target path. It is a best practice to apply the `WebImporter.FileUtils.sanitizePath` helper method to all paths as provided in the provided default `import.js` file.

Some examples: 

| Source URL                                            | Recommended target path | Recommended target docx     |
|-------------------------------------------------------|-------------------------|-----------------------------|
| https://www.sample.com/A/b/C/d.html                   | /a/b/c/d                | /a/b/c/d.docx               | 
| https://www.sample.com/Fâncy_URL%20with%20spaces.html | /f-ncy-url-with-spaces  | /f-ncy-url-with-spaces.docx |

If you follow this pattern, the migration should be smooth: AEM should find the corresponding document for the old URLs. 
If you decide to do some more sophisticated transformations (like transform `Fâncy_URL` into `fancy-url`), you will need to recreate the corresponding redirects to make sure the old URLs are still mapped to the new content naming convention. You can use the importer reporting (see below) to report those mappings.

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
    const main = document.querySelector('main');
    // remove header and footer from main
    WebImporter.DOMUtils.remove(main, [
      'header',
      'footer',
      '.disclaimer',
    ]);

    return main;
  },
};
```

Implementation 2:

```js
export default {
  transformDOM: ({ document }) => {
    const main = document.querySelector('main');
    main.querySelector('header, footer, .disclaimer').forEach(el => el.remove());
    return main;
  },
};
```

Notes on those 2 different implementations:
- you need to return a DOM element, otherwise the `document.body` is used.
- you can either work on the full `body` element or focus on the `main` element. This is really up to you. Sometimes removing everything not necessary and can be tedious.
- you do not need to transform the `div` into a `p` to get a text paragraph.

### Create a block

One important step of the content migration is to transform some existing "components" into AEM blocks. While the AEM philosophy is to use the maximum of the standard Markdown semantic (text, title, images, links...), sometimes blocks are needed to combine of several of those default elements.

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

+-------------------------------------------------------+
| Metadata                                              |
+=============+=========================================+
| Title       | The Hello World page                    |
+-------------+-----------------------------------------+
| Description | This is a really cool Hello World page. |
+-------------+-----------------------------------------+
| Image       | ![][image0]                             |
+-------------+-----------------------------------------+

[image0]: https://www.sample.com/images/helloworld.png
```

`WebImporter.Blocks.getMetadataBlock(document, meta);` is an helper to create the specific Metadata block.
`WebImporter.DOMUtils.createTable(cells, document);` is another essential helper to create tables: 

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
main.append(table);
```

This code would do the same and produce the same table (almost - it does not deal yet with the colspan) than the Metadata table above.

You can "move" elements in the table by simply adding the elements to the cells array:

Input DOM:

```html
<html>
  <head></head>
  <body>
    <main>
      <img src="https://www.sample.com/images/hero.png">
      <h1>Hello World</h1>
      <p>This is an example.</p>
    </main>
    <footer>...</footer>
  </body>
</html>
```

Implementation:

```js
const title = document.querySelector('h1');
const img = document.querySelector('img');
const cells = [
  ['Hero'],
  [title, img],
];
const table = WebImporter.DOMUtils.createTable(cells, document);
main.prepend(table);
```

Output:

```md
+---------------+
| Hero          |
+===============+
| ![][image0]   |
|               |
| # Hello World |
+---------------+

This is an example.

[image0]: https://www.sample.com/images/helloworld.png
```

#### Special Note for `blockquote`
While exporting HTML contents enclosed within [blockquote](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) to Word docs, the `table` may not get exported correctly (like reported in https://github.com/adobe/helix-importer/issues/29). For such situations, consider removing or replacing `blockquote` enclosing the `table`.

### Add a section break

If you want to add a section break (the 3 dashes in Word `---`) to create a new section, just insert a `<hr>` element:

Example

Input DOM:

```html
<html>
  <head></head>
  <body>
    <main>
      <h1>Hello World</h1>
      <p>First section</p>
      <p>Second section</p>
    </main>
  </body>
</html>
```

```js
const firstParagraph = document.querySelector('main p')
firstParagraph.after(document.createElement('hr'));
```

```md
# Hello World
First section
---
Second section
```

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

### Reporting back

The Importer UI offers a "Download import report" button (same behavior in the `Import - Workbench` and `Import - Bulk` UIs). The XLSX report generated gives you the list of URLs processed, the status of the import (might have failed) and some explanations on why it failed. You can add some extra columns to that report. For that, you have to use the `transform` method, presented in the [Multiple Output](./importer-guidelines.md#multiple-output) section above (for the obvious reason you can define the properties of the output object). You do not have to return mutliple objects, one object or an array of one object is enough (migrating from the usage of `transformDOM` / `generateDocumentPath` is straight forward).

You can do something like:

```js
{
  transform: ({ document, params }) => {
    const main = document.querySelector('main');

    const listOfAllImages = [...main.querySelectorAll('img')].map((img) => img.src);
    const listOfAllMeta = [...document.querySelectorAll('meta')].map((meta) => { 
      const name = meta.getAttribute('name') || meta.getAttribute('property');
      if (name) {
        return { name, content: meta.content }
      }
      return null;
    }).filter((meta) => meta);

    return [{
      element: main,
      path: new URL(params.originalURL).pathname.replace(/\/$/, '').replace(/\.html$/, ''),
      report: {
        title: document.title,
        "List of images": listOfAllImages,
        metadata: listOfAllMeta,
      },
    }];
  },
}
```

For each imported entry, a `docx` file is created and 3 columns are added to the report:
- `title` column: the document title
- `List of images`column: a JSON stringified value of the list of all the images in the `main` element
- `metadata` column: a JSON stringified value of the list of all the metadata in the document

The report would look like this:

| URL | path | docx | status | redirect | title | List of images | metadata |
|-------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| https://www.sample.com/ | / | | Success | | Sample page title | ["https://www.sample.com/img1", "https://www.sample.com/img2"] | [{"name":"viewport","content":"width=device-width,initial-scale=1"},{"name":"description","content":"Sample site homepage description"},...] |
| https://www.sample.com/page1.html | /page1 | | Success | | Sample page 1 title | ["https://www.sample.com/img3", "https://www.otherdomain.com/img"] | [{"name":"viewport","content":"width=device-width,initial-scale=1"},{"name":"description","content":"Sample site page 1 description"},...] |

The report extra columns are created based on the top level properties in the `report` object. We recommand the value to be a string for easiness to consume in Excel but, in theory, it can be anything that can be `JSON.stringify`.

Depending on your Excel skills and your needs you can be creative and easily customise the report.

#### Advanced reporting trick

You can create Excel formulas directly in your import.js! The value of the report property simply needs to start with `=`, like in Excel cell.

Useful example:

```js
  transform: ({ document, params }) => {
    return [{
      path: new URL(params.originalURL).pathname.replace(/\/$/, '').replace(/\.html$/, ''),
      report: {
        title: document.title,
        'hlx.page': '=HYPERLINK(CONCATENATE("https://main--repo--owner.hlx.page",INDIRECT(ADDRESS(ROW(),2))))',
        'hlx.live': '=HYPERLINK(CONCATENATE("https://main--repo--owner.hlx.live",INDIRECT(ADDRESS(ROW(),2))))',
      },
    }];
  },
```

If you change repo and owner in the 2 host urls, this computes your project specific `hlx.page` and `hlx.live` urls for each of the imported URL.

Notes: 
- `ROW()` is needed because you do not know the current row letter
- `ADDRESS(ROW(),2)` computes the address of the cell: current row / second column (the path column) - e.g. `$B$2`
- `INDIRECT(...)` reads the value of the cell computed above
- Any error in a formula might completely break the Excel spreadsheet.
- For some function, Excel adds the [Implicit intersection operator: @](https://support.microsoft.com/en-us/office/implicit-intersection-operator-ce3be07b-0101-4450-a24e-c1c999be2b34) which breaks the formula. You then need to use another function.

This is more of a "hack" than a real solution and must be used carefully. You can always create the formula in the final Excel spreadsheet.

### Collect data vs importing content

The report capability previously described can be used as another feature: collect site data in one Excel file. The `element` property of the returned object(s) is optional, i.e. if you omit it, you can create an import that will only collect some data on each page and report them back in the report file.

With the same code as above, just remove the `element` property of the returned object:

```js
{
  transform: ({ document, params }) => {
    const main = document.querySelector('main');

    const listOfAllImages = [...main.querySelectorAll('img')].map((img) => img.src);
    const listOfAllMeta = [...document.querySelectorAll('meta')].map((meta) => { 
      const name = meta.getAttribute('name') || meta.getAttribute('property');
      if (name) {
        return { name, content: meta.content }
      }
      return null;
    }).filter((meta) => meta);

    return [{
      // do not return an element
      // element: main, 
      path: new URL(params.originalURL).pathname.replace(/\/$/, '').replace(/\.html$/, ''),
      report: {
        title: document.title,
        "List of images": listOfAllImages,
        metadata: listOfAllMeta,
      },
    }];
  },
}
```

For each URL of the import, this will NOT create a `docx` per URL but only feed the report with extra columns for each row / URL imported: `title`, `List of images` and `meta` columns will be appended to the report.

With this method, you can construct an `xlsx` spreadsheet with the site data you want to collect without creating the corresponding `docx` files.

### More samples

Sites in the https://github.com/hlxsites/ organization have all be imported. There are many different implementations that cover a lot of use cases.

## Case studies

Here is growing list of case studies to help you drive some more sophisticated imports.

1. [Convert a page and download all PDF files referenced on the page](./docs/download-pdf.md)
2. [Import content from a JSON API](./docs/import-from-json.md)
3. [Download as html with images](./docs/download-as-html.md)

## Helpers

The `DOMUtils` and `Blocks` objects are exposed. Their implementation can be found here: 

- https://github.com/adobe/helix-importer/blob/main/src/utils/DOMUtils.js
- https://github.com/adobe/helix-importer/blob/main/src/utils/Blocks.js

While more documentation will be written, you can already find how to use them via the tests:

- https://github.com/adobe/helix-importer/blob/main/test/utils/DOMUtils.spec.js
- https://github.com/adobe/helix-importer/blob/main/test/utils/Blocks.spec.js

### Rules

When using one of the default `import.js` file snippets provided above, you'll find some default "rules" being applied:

- `WebImporter.rules.createMetadata` has some logic to handle some of the common metadata you can find on most of the pages (see [implementation here](https://github.com/adobe/helix-importer/blob/main/src/importer/defaults/rules/createMetadata.js))
- `WebImporter.rules.transformBackgroundImages` converts the background images into proper `img` elements which are then imported (see [implementation here](https://github.com/adobe/helix-importer/blob/main/src/importer/defaults/rules/transformBackgroundImages.js))
- `WebImporter.rules.adjustImageUrls` converts all image src into fully qualified urls using the proxy host. This allows the docx conversion to be able to find and download the images. (see [implementation here](https://github.com/adobe/helix-importer/blob/main/src/importer/defaults/rules/adjustImageUrls.js))
- `WebImporter.rules.convertIcons` converts the svg images into a span using the `:icon-file-name:` convention. Note that this does not download the images which have to be handled separately (see [implementation here](https://github.com/adobe/helix-importer/blob/main/src/importer/defaults/rules/convertIcons.js))

## Proxy, security and memory

When using this importer tool, everything happens in the browser which means the import process must be able to fetch all the resources and in some cases execute the Javascript from the page being imported.

When running `aem import`, a proxy is started and all requests to the host are re-written client-side and go through the proxy. This allows the importer to control the security settings and avoid CORS and CSP issues. The target page is then loaded in an iframe and the importer access to the DOM via this iframe.

This is a generic solution that works in 90% of the cases. But some sites are pretty imaginative on how to prevent being loaded in a iframe (like a Javascript redirect if the `window.location` is not their own host). If you face such a problem, you can contact the AEM team and we can look at some workarounds and potentially integrate more logic in the proxy to handle more of these cases.

One workaround to try could be to run the browser with all security settings off. But this is getting harder and harder to do.

You can also use Chrome extensions like:
- [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
- [ModHeader - Modify HTTP headers](https://chrome.google.com/webstore/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj)

to disable CORS headers or set a custom cookie / referer for some of the requests made by the site.

### Images

When the import process creates the docx, images are downloaded and inlined inside the Word document. Later, when the page is previewed for the first time, the images are then uploaded to the AEM Edge Delivery media bus.

When images are stored on the same host, this is usually not an issue but, in many cases, images are coming from different hosts or are absolutely referenced. This makes it impossible for the browser to `fetch` the images and generates CORS issues. This is easy to observe in the console logs, you typically get a message like this:

```
[importer-ui] Cannot download image <image url>: Failed to fetch
Access to fetch at '<image url>' from origin 'http://localhost:3001' has been blocked by CORS policy...
```

A typical symptom is that you see the images in the Preview ui but images are missing in the Word document.

Problem is easy to solve: we need some extra logic to re-write the image url to go through the local proxy. The following code might help (pending todo to integrate the code to the importer itself - see https://github.com/adobe/helix-importer-ui/issues/42):

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

We might also work on a cli version of the importer (see https://github.com/adobe/helix-importer/issues/23) where memory could be handled properly.

## Tips and tricks

Every new project has its own collection of new use cases which might be totally new. Here is a collection of tips and tricks based on things we have seens so far or known limitations.

- Update the host of all the links during the import to match "https://main--<repo>--<ref>.hlx.page". This allow the naviguation on preview / live and the product domain.
- In most of the cases, importing the homepage is useless because it is unique and different from the rest. Find sets of pages that are similar, this is where it makes most sense to write some code to import them.
- Use the browser `console.log`, there might be some explicit import errors.
- Use the import opportunity to append the Metadata block to all your pages - they tend to be forgotten but are key for SEO.
- Linked images are not supported by Online Word thus they will be converted to image + link in Word.
- Reuse the DOM elements from the orignal page, no need to re-create complete DOM structures, especially if the Markdown is what you need. Example: Text in a `div` will become a paragraph, no need to create a `p` tag and replace the `div`. More generally, the DOM can be dirty, as long as the output Markdown looks as expected, it does not matter.
- If you import multiple page "types" for the project, you cannot either handle them in the same `import.js` file or have one `import-<type>.js` file per type (or any filename convention you lie). Use the UI options to point to a different import filename.
  
## Debugging

  If you experience some deep nested Javascript exception, you can run the importer ui in developer mode, JS files will not be minified and obfuscated. Just run in the `/tools/importer/helix-importer-ui` folder:
  
  ```bash
  npm run build:dev
  ```

 And reload the importer ui browser window.
 
 ℹ️ If you want to make and/or propose changes in the `helix-importer` package (a dependency for `helix-importer-ui`, following additional steps would be needed:
   1. check-out https://github.com/adobe/helix-importer
   1. execute `npm i` in the repository root
   1. execute `npm link`
   1. navigate to `helix-importer-ui` checkout folder from your project root (typically `$PROJECT_ROOT/tools/importer/helix-importer-ui`
   1. execute `npm i`
      * not required if you've already been working on importer via `aem import`)
   1. execute `npm link @adobe/helix-importer`
   1. update the `build:dev` goal in `package.json`, and remove `npm i` execution from the goal
      * this is required, otherwise the symlink created by `npm link @adobe/helix-importer` will be reset
   1. execute `npm run build:dev` and reload the importer ui browser window.
      * this step is required for all subsequent (local) updates made to `helix-importer` dependency
      * to restore, revert changes made to `package.json` and repeat this step

## Advanced

Some advanced patterns to cover more advanced edge cases.
### preprocess

In the `import.js` file, you can define the `preprocess` function: it will be called before any processing done by the importer. The importer is doing a cleanup of the DOM to remove some edge cases that cause issues. For example, the importer removes the `<script>` tags but you might need to extract some info from one of those `<script>` (like a JSON object).

```js
  preprocess: ({ document, url, html, params }) => {
    document.querySelectorAll('script').forEach((script) => {...}); // you will find the scripts in this method
  },
```

Note: you can use the `params` object to "pass" parameters to the `transformDOM` (or `transform`) function. For example:

```js
  preprocess: ({ document, url, html, params }) => {
    params.foundSomethingInPreprocessing = true;
  },

  transformDOM: ({ document, url, html, params }) => {
    console.log(params.foundSomethingInPreprocessing); // should display true
  },
```

### onLoad

In the `import.js` file, you can define the `onLoad` function: it will be called "on page load" of the content iframe, after the bottom scrolling and the page load timeout. You are still in the context on the original page, this is the place where you can wait for an element for example. This is useful in the case of lazy loaded elements, you want to wait for those elements to be injected in the DOM. You should also be able to trigger clicks on some elements.

```js
  onLoad: async ({ document, url, params }) => {
    try {
      await WebImporter.Loader.waitForElement('.wait-for-me', document, 10000, 500);
    } catch (error) {
      throw new Error(`Element .wait-for-me not found in page ${params.originalURL}`);
    }
  },
```

`WebImporter.Loader.waitForElement`: see method signature here https://github.com/adobe/helix-importer/blob/main/src/utils/Loader.js#L14

The code above forces the import process to wait for the DOM element with CSS class name `wait-for-me`. It checks every 500s if the element is there and fires an error if not found after 10s.
Firing an error is one way of defining the page has a problem (maybe it is different ?). The error message will appear in the report and can be reviewed afterward. But it is not required. If it is fine for the page to not have the element, you can just log an error or do nothing.

Note: calling `WebImporter.Loader.waitForElement` in the `transformDOM` or `transform` function would be useless - the execution context is different, the DOM is frozen and does not change anymore.

### Styles

By default, the importer does not deal with styles: CSS files are removed and only inline styles might be available during the transformation phase (on the DOM element of the document in the `preprocess`, `transform` or `transformDOM` function). Only exception is the `background-image` (computed) style which is inlined in the DOM so that, if useful, the background images can be converted into `img` elements and inserted into the DOM to become part of the content.
If necessary, the list of style elements that are inlined by the importer before the transformation phase can be overriden in `import.js` via the `REQUIRED_STYLES` array. Here an example reproducing the default behavior:

```js
export default {
  REQUIRED_STYLES: ['background-image'],
};
```

Just add the extra styles you need to perform your transformation.

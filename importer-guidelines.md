# Importer Guidelines

## General idea

The general idea of the importer is straightforward: it takes a page DOM and transforms it into a Markdown file, which is then converted to a docx file. For now, let's consider the Markdown file to be a one-to-one equivalent of the docx file. In the rest of this document, references to Markdown or docx are equivalent to "the output of the transformation process."

As Markdown is a fairly simple format, the DOM transformation is also basic: an `<h1>` becomes a `Heading 1`, a paragraph or text in a `<span>` or `<div>` becomes a paragraph, an `<a>` stays a link, and an `<img>` stays an image. All styling, layout, and `<div>` nesting disappear in the Markdown output. The only special case is `<table>`, which becomes a `gridtable` element in the Markdown output and then becomes a table in Word (which is the foundation for [Blocks](https://www.aem.live/developer/markup-sections-blocks)).

The point is to extract only the content from the original page. The importer's primary objective is to help process a large number of pages from an existing website. If you have only a few pages on the website, it is easier and faster to manually copy and paste the content into Word documents. In the case of a large website with pages that are structurally similar, however, such as a blog with thousands of articles, it would be tedious to copy and paste all pages manually.

To summarize: if a large set of pages look the same, this is when you want to use the importer and write a specific `import.js` transformation file.

The transformation file contains a set of basic transformation rules. Writing those rules is an iterative process: you first process one page with a minimum of transformations. Then you should try to style that page. You may find that you need some blocks for certain pieces. That is when you come back to your transformation rules and add more to automatically convert some areas of the DOM into blocks. Once the page is exactly what you expect in terms of content structure, try another one. You might find other blocks that could benefit from automatic transformations. Try 2 or 3 more, and then you can run the import on your full set of pages.

It is worth mentioning that this is a developer tool and requires some understanding of JavaScript and the DOM, but nothing more.

Reading this document before starting with content import is highly recommended. You'll find some [tips and tricks at the end](#tips-and-tricks).

### `import.js` transformation file

Out of the box, the importer should be able to consume any page and output a Markdown file from it. Some parts, such as the navigation, header, or footer, should not appear in the docx files. The first element of the docx should be a Heading 1. Some data are metadata and can be stored in a Metadata block. These are basic rules for structuring the content in the Word documents, and the transformation file is the place to write those rules.

Such a rule is usually straightforward to implement: it is typically a set of DOM operations to create, move, or delete DOM elements.

In your `import.js` transformation file, you can implement 2 modes: 
- one input / one output - default file snippet: https://gist.github.com/kptdobe/8a726387ecca80dde2081b17b3e913f7 (the code provided here is equivalent to the default import running if you do not provide an `import.js` file)
- one input / multiple outputs - default file snippet: https://gist.github.com/kptdobe/7bf50b69194884171b12874fc5c74588

Note: when working on an import with the `Import - Workbench` tool, the `import.js` file is hot-reloaded and the import process is launched automatically each time you modify the file. This allows you to immediately see the impact of your changes. This hot-reload behavior is not available when working with the `Import - Bulk` tool, to avoid the risk of re-launching the full import if you touch your `import.js` file while importing 1k or more pages.

#### one input / one output

You must implement those 2 methods:

- `transformDOM: ({ document, url, html, params }) => {}`: implement your transformation rules here and return the DOM element that needs to be transformed to Markdown (the default is `document.body`, but usually a `main` element is more relevant).
  - `document`: the incoming DOM
  - `url`: the current URL being imported
  - `html`: the original HTML source (when loading the DOM as a document, some things are cleaned up, so having the raw original HTML is sometimes useful)
  - `params`: parameters given by the importer. The only parameter so far is `originalURL`, which is the URL of the page being imported (`url` is the URL to the proxy)
- `generateDocumentPath: ({ document, url, html, params }) => {}`: return a path that describes the document being transformed. This allows you to define or filter the page name and the folder structure in which the document should be stored (the default is the current URL pathname with the trailing slash and the `.html` removed). Parameters are the same as above.

This is a simpler version of the implementation. You can achieve the same result by implementing the `transform` method described below.

#### one input / multiple outputs

You must implement this method:
- `transform: ({ document, url, html, params }) => {}`: implement your transformation rules here and return an array of pairs `{ element, path }`, where `element` is a DOM element that needs to be transformed to Markdown and `path` is the path to the exported file.
  - `document`: the incoming DOM
  - `url`: the current URL being imported
  - `html`: the original HTML source (when loading the DOM as a document, some things are cleaned up, so having the raw original HTML is sometimes useful)
  - `params`: parameters given by the importer. The only parameter so far is `originalURL`, which is the URL of the page being imported (`url` is the URL to the proxy)

The idea is simple: return a list of elements that will be converted to docx and stored at the path location.

### Note on generated paths

The AEM URL space is fairly restricted: lowercase only, Latin characters only, hyphens only, and no `.html`. Authors are therefore advised to maintain directory and document names with the same restrictions in Sharepoint / GDrive so there is a one-to-one mapping between the path + file and its URL. This makes their lives much easier.

When importing a site, you will encounter many fancy URLs. The `generateDocumentPath` function allows you to control the target document path. It is best practice to apply the `WebImporter.FileUtils.sanitizePath` helper method to all paths, as shown in the default `import.js` file.

Some examples: 

| Source URL                                            | Recommended target path | Recommended target docx     |
|-------------------------------------------------------|-------------------------|-----------------------------|
| https://www.sample.com/A/b/C/d.html                   | /a/b/c/d                | /a/b/c/d.docx               | 
| https://www.sample.com/Fâncy_URL%20with%20spaces.html | /f-ncy-url-with-spaces  | /f-ncy-url-with-spaces.docx |

If you follow this pattern, the migration should be smooth: AEM should find the corresponding document for the old URLs.
If you decide to do more sophisticated transformations, such as transforming `Fâncy_URL` into `fancy-url`, you will need to recreate the corresponding redirects to make sure the old URLs are still mapped to the new content naming convention. You can use importer reporting, described below, to report those mappings.

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

The following 2 implementations output the same result:

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

Notes on those 2 implementations:
- you need to return a DOM element; otherwise, `document.body` is used.
- you can either work on the full `body` element or focus on the `main` element. This is really up to you. Sometimes removing everything that is not necessary can be tedious.
- you do not need to transform the `div` into a `p` to get a text paragraph.

### Create a block

One important step in content migration is to transform some existing "components" into AEM blocks. While the AEM philosophy is to make the greatest possible use of standard Markdown semantics such as text, titles, images, and links, blocks are sometimes needed to combine several of those default elements.

In Word, a block is a table. To create a block during import, you simply need to create an HTML table. You can do that manually by creating `<table>`, `tr`, `td`, and related elements, but a helper is provided. One block you will almost always need is a metadata table:

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

  // returning the meta object might be useful to other rules
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

`WebImporter.Blocks.getMetadataBlock(document, meta);` is a helper for creating the specific Metadata block.
`WebImporter.DOMUtils.createTable(cells, document);` is another essential helper for creating tables:

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

This code would do the same and produce the same table (almost; it does not yet deal with the colspan) as the Metadata table above.

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
When exporting HTML content enclosed within a [blockquote](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) to Word docs, the `table` may not be exported correctly, as reported in https://github.com/adobe/helix-importer/issues/29. In such situations, consider removing or replacing the `blockquote` that encloses the `table`.

### Add a section break

If you want to add a section break, represented in Word as `---`, just insert an `<hr>` element:

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

Background images are either part of the CSS or inline styles. As mentioned above, styles are not considered when converting the DOM to Markdown. If background images are used on the pages being imported, they must receive special treatment.

Note: in a preprocessing step, the importer tries its best to inline background images stored in CSS files into the DOM.

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

With no special handling, the output is: 

```md
# Hello World
```

With the following rule in the transformation file:

```js
const hero = document.querySelector('.hero');
WebImporter.DOMUtils.replaceBackgroundByImg(hero, document);
```

The output is then:
```md
# Hello World
![](https://www.sample.com/images/helloworld.png);
```

### Multiple output

If you need to transform one page into multiple Word documents, such as fragments, banners, or author pages, you can use the `transform` method.

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

With the following `import.js`, you will get 2 md/docx documents:

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
- be careful with the DOM elements you are working with. You always work on the same document, so you may destructively modify elements for one output in ways that affect the other outputs.
- you may have as many outputs as you want (limit not tested yet).

### Reporting back

The Importer UI offers a "Download import report" button, with the same behavior in the `Import - Workbench` and `Import - Bulk` UIs. The generated XLSX report gives you the list of processed URLs, the status of the import, and some explanation of why it failed when applicable. You can add extra columns to that report. To do that, you have to use the `transform` method presented in the [Multiple Output](./importer-guidelines.md#multiple-output) section above, since it lets you define the properties of the output object. You do not have to return multiple objects; one object, or an array containing one object, is enough. Migrating from `transformDOM` / `generateDocumentPath` is straightforward.

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
- `List of images` column: a JSON-stringified value of the list of all images in the `main` element
- `metadata` column: a JSON-stringified value of the list of all metadata in the document

The report would look like this:

| URL | path | docx | status | redirect | title | List of images | metadata |
|-------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| https://www.sample.com/ | / | | Success | | Sample page title | ["https://www.sample.com/img1", "https://www.sample.com/img2"] | [{"name":"viewport","content":"width=device-width,initial-scale=1"},{"name":"description","content":"Sample site homepage description"},...] |
| https://www.sample.com/page1.html | /page1 | | Success | | Sample page 1 title | ["https://www.sample.com/img3", "https://www.otherdomain.com/img"] | [{"name":"viewport","content":"width=device-width,initial-scale=1"},{"name":"description","content":"Sample site page 1 description"},...] |

The extra report columns are created based on the top-level properties in the `report` object. We recommend using strings because they are easier to consume in Excel but, in theory, the value can be anything that can be `JSON.stringify`.

Depending on your Excel skills and your needs, you can be creative and easily customize the report.

#### Advanced reporting trick

You can create Excel formulas directly in your `import.js`. The value of the report property simply needs to start with `=`, as it would in an Excel cell.

Useful example:

```js
  transform: ({ document, params }) => {
    return [{
      path: new URL(params.originalURL).pathname.replace(/\/$/, '').replace(/\.html$/, ''),
      report: {
        title: document.title,
        'aem.page': '=HYPERLINK(CONCATENATE("https://main--repo--owner.aem.page",INDIRECT(ADDRESS(ROW(),2))))',
        'aem.live': '=HYPERLINK(CONCATENATE("https://main--repo--owner.aem.live",INDIRECT(ADDRESS(ROW(),2))))',
      },
    }];
  },
```

If you change `repo` and `owner` in the 2 host URLs, this computes your project-specific `aem.page` and `aem.live` URLs for each imported URL.

Notes: 
- `ROW()` is needed because you do not know the current row number
- `ADDRESS(ROW(),2)` computes the address of the cell: current row / second column (the path column), e.g. `$B$2`
- `INDIRECT(...)` reads the value of the cell computed above
- Any error in a formula might completely break the Excel spreadsheet.
- For some function, Excel adds the [Implicit intersection operator: @](https://support.microsoft.com/en-us/office/implicit-intersection-operator-ce3be07b-0101-4450-a24e-c1c999be2b34) which breaks the formula. You then need to use another function.

This is more of a hack than a real solution and must be used carefully. You can always create the formula in the final Excel spreadsheet instead.

### Collect data vs importing content

The report capability described above can also be used to collect site data in a single Excel file. The `element` property of the returned object or objects is optional. If you omit it, you can create an import that only collects data on each page and reports them back in the report file.

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

For each URL in the import, this will not create a `docx` file. Instead, it will add extra columns to the report for each imported row/URL: `title`, `List of images`, and `meta`.

With this method, you can construct an `xlsx` spreadsheet with the site data you want to collect without creating corresponding `docx` files.

### More samples

Sites in the https://github.com/hlxsites/ organization have all been imported. There are many different implementations that cover a lot of use cases.

## Case studies

Here is a growing list of case studies to help you build more sophisticated imports.

1. [Convert a page and download all PDF files referenced on the page](./docs/download-pdf.md)
2. [Import content from a JSON API](./docs/import-from-json.md)
3. [Download as html with images](./docs/download-as-html.md)

## Helpers

The `DOMUtils` and `Blocks` objects are exposed. Their implementations can be found here:

- https://github.com/adobe/helix-importer/blob/main/src/utils/DOMUtils.js
- https://github.com/adobe/helix-importer/blob/main/src/utils/Blocks.js

While more documentation will be written, you can already find how to use them via the tests:

- https://github.com/adobe/helix-importer/blob/main/test/utils/DOMUtils.spec.js
- https://github.com/adobe/helix-importer/blob/main/test/utils/Blocks.spec.js

### Rules

When using one of the default `import.js` file snippets provided above, you'll find some default "rules" being applied:

- `WebImporter.rules.createMetadata` contains logic to handle some of the common metadata you can find on most pages (see [implementation here](https://github.com/adobe/helix-importer/blob/main/src/importer/defaults/rules/createMetadata.js))
- `WebImporter.rules.transformBackgroundImages` converts the background images into proper `img` elements which are then imported (see [implementation here](https://github.com/adobe/helix-importer/blob/main/src/importer/defaults/rules/transformBackgroundImages.js))
- `WebImporter.rules.adjustImageUrls` converts all image src values into fully qualified URLs using the proxy host. This allows the docx conversion to find and download the images. (see [implementation here](https://github.com/adobe/helix-importer/blob/main/src/importer/defaults/rules/adjustImageUrls.js))
- `WebImporter.rules.convertIcons` converts the svg images into a span using the `:icon-file-name:` convention. Note that this does not download the images which have to be handled separately (see [implementation here](https://github.com/adobe/helix-importer/blob/main/src/importer/defaults/rules/convertIcons.js))

## Proxy, security and memory

When using this importer tool, everything happens in the browser, which means the import process must be able to fetch all resources and, in some cases, execute the JavaScript from the page being imported.

When running `aem import`, a proxy is started and all requests to the host are rewritten client-side to go through the proxy. This allows the importer to control the security settings and avoid CORS and CSP issues. The target page is then loaded in an iframe, and the importer accesses the DOM through that iframe.

This is a generic solution that works in 90% of cases. However, some sites are quite imaginative in how they prevent themselves from being loaded in an iframe, for example by using a JavaScript redirect if `window.location` is not their own host. If you face such a problem, you can contact the AEM team, and we can look at workarounds and potentially integrate more logic in the proxy to handle more of these cases.

One workaround to try could be to run the browser with all security settings off. But this is getting harder and harder to do.

You can also use Chrome extensions like:
- [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
- [ModHeader - Modify HTTP headers](https://chrome.google.com/webstore/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj)

to disable CORS headers or set a custom cookie / referer for some of the requests made by the site.

### Custom headers

Using the following command, you can define custom headers sent by the proxy to the remote host:

```
aem import --headers-file ./headers.json
```

This is useful to control the headers of the proxied request. One typical use case is to define the `Authorization` header or the `Cookie` header to authenticate to the remote host. The `headers.json` file would then look like this:

```
{
  "Authorization": "Bearer your_token_here"
}
```

### Images

When the import process creates the docx, images are downloaded and inlined inside the Word document. Later, when the page is previewed for the first time, the images are then uploaded to the AEM Edge Delivery media bus.

When images are stored on the same host, this is usually not an issue. In many cases, however, images come from different hosts or are referenced with absolute URLs. This makes it impossible for the browser to `fetch` the images and generates CORS issues. This is easy to observe in the console logs; you typically get a message like this:

```
[importer-ui] Cannot download image <image url>: Failed to fetch
Access to fetch at '<image url>' from origin 'http://localhost:3001' has been blocked by CORS policy...
```

A typical symptom is that you see the images in the Preview UI, but the images are missing in the Word document.

This problem is easy to solve: we need some extra logic to rewrite the image URL so it goes through the local proxy. The following code might help (there is still a pending task to integrate this code into the importer itself; see https://github.com/adobe/helix-importer-ui/issues/42):

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

This simply transforms the image src values to use the proxy: `https://www.sample.com/images/helloworld.png` becomes `http://localhost:3001/images/helloworld.png?host=https://www.sample.com`

### JavaScript or not JavaScript: memory consumption

Disabling JavaScript in the options is the best solution for speed and memory consumption. You can then import thousands of pages.
With JavaScript enabled, things become more complicated for the browser. It depends on the amount of code to load and execute, but in general, you can import only around one hundred pages before the browser crashes because it consumes too much memory.

Having JavaScript enabled is usually required to capture content that is dynamically loaded, which is the case for 100% of SPAs such as React and Angular applications. In this case, you need to create a small set of pages to import, run the import, reload the full browser window to flush memory, and then run the next batch.

We might also work on a CLI version of the importer, as discussed in https://github.com/adobe/helix-importer/issues/23, where memory could be handled more properly.

## Tips and tricks

Every new project has its own collection of use cases. Here is a collection of tips and tricks based on things we have seen so far and on known limitations.

- Update the host of all the links during the import to match "https://main--<repo>--<ref>.aem.page". This allows navigation on preview / live and the product domain.
- In most cases, importing the homepage is useless because it is unique and different from the rest. Find sets of pages that are similar; that is where it makes the most sense to write code to import them.
- Use the browser `console.log`, there might be some explicit import errors.
- Use the import opportunity to append the Metadata block to all your pages. These blocks tend to be forgotten but are key for SEO.
- Linked images are not supported by Online Word, so they will be converted to image + link in Word.
- Reuse the DOM elements from the original page; there is no need to recreate complete DOM structures, especially if Markdown output is all you need. Example: text in a `div` will become a paragraph, so there is no need to create a `p` tag and replace the `div`. More generally, the DOM can be dirty. As long as the output Markdown looks as expected, it does not matter.
- If you import multiple page "types" for the project, you can either handle them in the same `import.js` file or have one `import-<type>.js` file per type (or any filename convention you like). Use the UI options to point to a different import filename.
  
## Debugging

  If you encounter a deeply nested JavaScript exception, you can run the importer UI in developer mode so that JS files are not minified or obfuscated. Just run this in the `/tools/importer/helix-importer-ui` folder:
  
  ```bash
  npm run build:dev
  ```

 Then reload the importer UI browser window.
 
 ℹ️ If you want to make and/or propose changes in the `helix-importer` package, which is a dependency of `helix-importer-ui`, the following additional steps are needed:
   1. check-out https://github.com/adobe/helix-importer
   1. execute `npm i` in the repository root
   1. execute `npm link`
   1. navigate to `helix-importer-ui` checkout folder from your project root (typically `$PROJECT_ROOT/tools/importer/helix-importer-ui`
   1. execute `npm i`
      * not required if you've already been working on importer via `aem import`)
   1. execute `npm link @adobe/helix-importer`
   1. update the `build:dev` goal in `package.json`, and remove `npm i` execution from the goal
      * this is required, otherwise the symlink created by `npm link @adobe/helix-importer` will be reset
   1. execute `npm run build:dev` and reload the importer UI browser window.
      * this step is required for all subsequent (local) updates made to `helix-importer` dependency
      * to restore, revert changes made to `package.json` and repeat this step

## Advanced

Some advanced patterns can help cover more advanced edge cases.
### preprocess

In the `import.js` file, you can define the `preprocess` function. It will be called before any processing is done by the importer. The importer cleans up the DOM to remove edge cases that cause issues. For example, the importer removes `<script>` tags, but you might need to extract some information from one of those `<script>` tags, such as a JSON object.

```js
  preprocess: ({ document, url, html, params }) => {
    document.querySelectorAll('script').forEach((script) => {...}); // you will find the scripts in this method
  },
```

Note: you can use the `params` object to pass parameters to the `transformDOM` or `transform` function. For example:

```js
  preprocess: ({ document, url, html, params }) => {
    params.foundSomethingInPreprocessing = true;
  },

  transformDOM: ({ document, url, html, params }) => {
    console.log(params.foundSomethingInPreprocessing); // should display true
  },
```

### onLoad

In the `import.js` file, you can define the `onLoad` function. It will be called on page load of the content iframe, after the bottom scrolling and the page load timeout. You are still in the context of the original page, so this is the right place to wait for an element, for example. This is useful for lazy-loaded elements, where you want to wait for those elements to be injected into the DOM. You should also be able to trigger clicks on some elements.

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

The code above forces the import process to wait for the DOM element with the CSS class name `wait-for-me`. It checks every 500 ms whether the element is there and throws an error if it is not found after 10 seconds.
Throwing an error is one way of defining that the page has a problem, or perhaps that it is simply different. The error message will appear in the report and can be reviewed afterward. However, this is not required. If it is fine for the page not to have the element, you can just log an error or do nothing.

Note: calling `WebImporter.Loader.waitForElement` in the `transformDOM` or `transform` function would be useless. The execution context is different, and the DOM is frozen and no longer changes.

### Styles

By default, the importer does not deal with styles: CSS files are removed, and only inline styles might be available during the transformation phase on the DOM element of the document in the `preprocess`, `transform`, or `transformDOM` function. The only exception is the computed `background-image` style, which is inlined in the DOM so that, if useful, background images can be converted into `img` elements and inserted into the DOM as part of the content.
If necessary, the list of style properties that are inlined by the importer before the transformation phase can be overridden in `import.js` via the `REQUIRED_STYLES` array. Here is an example that reproduces the default behavior:

```js
export default {
  REQUIRED_STYLES: ['background-image'],
};
```

Just add the extra styles you need to perform your transformation.

### Hot reload of JS dependencies

It is common to use multiple files for the import process, usually with `import.js` as the entry point. By default, the UI will hot-reload only changes in the "Transformation file URL" specified in the UI, that is, `import.js`, and not its imports. This forces the user to refresh whenever dependencies are changed. To enable hot reloading of dependencies, `esbuild` can be used with the watch option.

- Ensure `esbuild` is installed and accessible.
- From the command line, start `esbuild` as follows, varying paths and parameters as required:
  - `esbuild import.js --bundle --outdir=importjs --watch`
  - This will watch for changes on import.js **and** all its imports, bundling them in the specified `outdir`.
- In the Importer UI, change the indicated transformation file to the one built in the output directory.

Now the UI will load the bundled JS file, which will be automatically built when any changes are made.

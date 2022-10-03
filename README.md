# Franklin Importer - UI

A collection of tools to support Franklin project imports.

## Usage

Check first the [Franklin cli installation](https://github.com/adobe/helix-cli#installation).

At the root of the project, simply run:

```
hlx import
```

The `import` command clones the helix-import-ui repo for you.

## Import

In the `URL(s)` field, give a list of page URLs to be imported (e.g. {https://wwww.host_of_pages_to_be_imported.com/page_1.html}) and hit the import button. The page(s) will be loaded in the central frame and the Markdown transfomation will happen in the right frame. Result of the transformation will be saved as a Word document on your local file system (target folder is asked and tool needs permissions to write).

### Transformation file

A default html to Markdown is applied by you can / need to provide your own. Initially the import transformation file is fetched at http://localhost:3001/tools/importer/import.js (can be changed in the options). Create the file using the following templates:

- if you need to create a single md/docx file out from each input page, you can use this template: https://gist.github.com/kptdobe/8a726387ecca80dde2081b17b3e913f7
- if you need to crate multiple files md/docx out from each input page, you must use this template: https://gist.github.com/kptdobe/7bf50b69194884171b12874fc5c74588

Note that in the current state, the 2 templates are doing the exact same thing. But the second one uses the `transform` method and the return array contain more than one element. See guidelines for an example.

### Guidelines

You can find some guidelines, best practices and code samples in the [Importer Guidelines](./importer-guidelines.md).

### Options

- `Local save as docx`: enable / disable the save as docx to the local file system. Disabling is useful when working on the `import.js` transformation and checking the docx is not necessarily at that time.
- `Import file URL`: url of the import transformation file
- `Page load timeout`: the transformation uses the target page DOM. This DOM might take some time to be fully decorated. You can reduce the timeout if your transformation does not need to wait or extend if the DOM takes longer to be fully complete
- `Enable Javascript`: 
  - page to import may have a Javascript redirect to the remote domain (to make sure you stay on their site). This then blocks the tool to access the content via the iframe. Disabling Javascript may help here. 
  - if the remote page is an SPA (React, Angular) or require Javascript to load some pieces of the content, Javascript is then required. Enabling Javascript may help here.
  - more generally, disabling Javascript speeds up the import process and reduces the memory consumed.
- `Scroll to bottom`: forces a scroll to the bottom of the page. This might allow images set with earger to be loaded or any element loaded with Javascript below the fold. Increasing the `Page load timeout` might give more time to those element to be loaded.

## Crawler

Allows to find URLs on a given host. 2 processes:

- `Get from robots.txt or sitemap`: the crawler will try to get the `robots.txt` file on the given host, follow the referenced sitemap(s) if any and extract URLs from all the sitemaps and sub-sitemaps. If it does not find a `robots.txt` file, it will try the `sitemap.xml` file (name can be changed in the options) and follow the references the same way.
- `Crawl`: the crawler will open the give URL and construct a list of URLs by recursively following all the links on the same hosts.

### Eyedropper

Allows to extract the CSS styles (font, colors) for an give page. Those styles can be used with the https://github.com/adobe/helix-project-boilerplate project.

## Cache

When `hlx import` serves content, imported resources can be cached locally. After the first import, the files could be served from local file system. To enable the cache:

```
hlx import --cache .cache/
```

In the `.cache/` folder of the project, you will find all html pages, js, css, images... files requested on the remote host.

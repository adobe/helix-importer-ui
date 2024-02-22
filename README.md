# AEM Importer - UI

A collection of tools to support AEM project imports.

**PLEASE DO READ THE [Importer Guidelines](./importer-guidelines.md) before starting any import.**

## Usage

Check first the [AEM cli installation](https://github.com/adobe/helix-cli#installation).

At the root of the project, simply run:

```
aem import
```

The `import` command clones the helix-import-ui repo for you.

## Import

In the `URL(s)` field, give a list of page URLs to be imported (e.g. {https://wwww.host_of_pages_to_be_imported.com/page_1.html}) and hit the import button. The page(s) will be loaded in the central frame and the Markdown transfomation will happen in the right frame. Result of the transformation will be saved as a Word document on your local file system (target folder is asked and tool needs permissions to write).

### Options

- `Local save`: enable / disable the save as `docx`, `html` or `md` to the local file system. Disabling is useful when working on the `import.js` transformation and checking the docx is not necessarily at that time. `html` or `md` can be used for further processing or debugging.
- `Import file URL`: url of the import transformation file (by convention the `aem` importer proxy maps `http://localhost:3001/tools/importer/*` urls to local folder so all import code must be placed under `<PROJECT_ROOT>/tools/importer/`)
- `Page load timeout`: the transformation uses the target page DOM. This DOM might take some time to be fully decorated. You can reduce the timeout if your transformation does not need to wait or extend if the DOM takes longer to be fully complete
- `Enable Javascript`: 
  - page to import may have a Javascript redirect to the remote domain (to make sure you stay on their site). This then blocks the tool to access the content via the iframe. Disabling Javascript may help here. 
  - if the remote page is an SPA (React, Angular) or require Javascript to load some pieces of the content, Javascript is then required. Enabling Javascript may help here.
  - more generally, disabling Javascript speeds up the import process and reduces the memory consumed.
- `Scroll to bottom`: forces a scroll to the bottom of the page. This might allow images set with earger to be loaded or any element loaded with Javascript below the fold. Increasing the `Page load timeout` might give more time to those element to be loaded.
- `Custom headers`: connection to the site you want to import content from might require some custom request headers, like a Bear, an API key (especially when hitting JSON API), a Coookie... Those headers are sent together with the fetch request (headers config property of the standard browser `fetch` API).

## Crawler

Allows to find URLs on a given host. 2 processes:

- `Get from robots.txt or sitemap`: the crawler will try to get the `robots.txt` file on the given host, follow the referenced sitemap(s) if any and extract URLs from all the sitemaps and sub-sitemaps. If it does not find a `robots.txt` file, it will try the `sitemap.xml` file (name can be changed in the options) and follow the references the same way.
- `Crawl`: the crawler will open the give URL and construct a list of URLs by recursively following all the links on the same hosts.

### Eyedropper

Allows to extract the CSS styles (font, colors) for an give page. Those styles can be used with the https://github.com/adobe/helix-project-boilerplate project.

## Cache

When `aem import` serves content, imported resources can be cached locally. After the first import, the files could be served from local file system. To enable the cache:

```
aem import --cache .cache/
```

In the `.cache/` folder of the project, you will find all html pages, js, css, images... files requested on the remote host.

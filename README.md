# Helix Importer Tools

WIP - a collection of tools to support Helix project imports.

## Setup

In your Helix project, create folders `tools/importer`, clone and build the `helix-importer-tools` project. Run:

```
mkdir tools && mkdir tools/importer
cd tools/importer
git clone https://github.com/kptdobe/helix-importer-tools
cd helix-importer-tools
npm run build
cd ../../..
```

You may want to use `npm run build:dev` to get a "debuggable" version of the `helix-importer-tools` project.

At the root of the project, run:

```
hlx import
```

Browse to http://localhost:3001/tools/importer/helix-importer-tools/index.html (current page opened points the older version of the tool).

## Import

In the `URL(s)` field, give a list of page URLs to be imported (e.g. {https://wwww.host_of_pages_to_be_imported.com/page_1.html}) and hit the import button. The page(s) will be loaded in the central frame and the Markdown transfomation will happen in the right frame. Result of the transformation will be saved as a Word document on your local file system (target folder is asked and tool needs permissions to write).

### Transformation file

A default html to Markdown is applied by you can / need to provide your own. Initially the import transformation file is fetched at http://localhost:3001/tools/importer/import.js (can be changed in the options). Create the file using the following template:

https://gist.github.com/kptdobe/8a726387ecca80dde2081b17b3e913f7

### Options

- `Local save as docx`: enable / disable the save as docx to the local file system. Disabling is useful when working on the `import.js` transformation and checking the docx is not necessarily at that time.
- `Import file URL`: url of the import transformation file
- `Page load timeout`: the transformation uses the target page DOM. This DOM might take some time to be fully decorated. You can reduce the timeout if your transformation does not need to wait or extend if the DOM takes longer to be fully complete
- `Enable Javascript`: 
  - page to import may have a Javascript redirect to the remote domain (to make sure you stay on their site). This then blocks the tool to access the content via the iframe. Disabling Javascript may help here. 
  - if the remote page is an SPA (React, Angular) or require Javascript to load some pieces of the content, Javascript is then required. Enabling Javascript may help here.

## Crawler

WIP

### Inspect

Allows to extract the CSS styles (font, colors) from a give page and to be used with the https://github.com/adobe/helix-project-boilerplate project. 

## Cache

When `hlx import` serves content, imported resources can be cached locally. After the first import, the files could be served from local file system. To enable the cache:

```
hlx import --cache .cache/
```

In the `.cache/` folder of the project, you will find all html pages, js, css, images... files requested on the remote host.
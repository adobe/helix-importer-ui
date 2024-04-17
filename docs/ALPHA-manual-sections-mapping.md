[ALPHA] Manual Sections Mapping Flow
===

POC demonstrating a new flow where a less technical persona can **manually** define the mapping for each section of a web page and get it then imported without having to write a custom import script.

... *zero-code import* ?

## 1. Enable Feature

From an AEM EDs project root folder:

* Install latest version of `helix-importer-ui` (`tools/importer/helix-importer-ui`)  
  `aem import`  
  Once started, stop it  
  `Cmd/Ctrl + c`
  
* Go into the locally installed helix-importer-ui project  
  `cd tools/importer/helix-importer-ui`

* Checkout the branch containing the new flow  
  `git checkout feat-import-manual-mapping`

* Build the UI in dev mode  
  `npm run build:dev`


## 2. Use Manual Sections Mapping Flow

(requires `1. Enable Feature`)

* Start Importer Server using modified code (do not fetch latest version!)  
  `aem import --skip-ui` 

* In Chrome:
  * Access http://localhost:3001/tools/importer/helix-importer-ui/index.html
  * You should be in tab `Import - Manual Mapping`
    (In `Load Options` you can notice the `Transformation file URL` is enforced to
    use the generic import script supporting the sections mapping data)
  * Put the URL you want to use
  * Click `Detect Sections` button
  * When Done, the `Mapping` tab on the right part of the page should be populated
    with the list of detected sections.
  * For each of them define the mapping via the picker
  * Finally, click `Import` button!




## Resources

* Detection library `adobe/helix-importer-ui/js/libs/vendors/detect/detect.min.js`  
  Internal Adobe project, contact catalan@adobe.com
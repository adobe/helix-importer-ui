/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/**
 * Get the properties of a page from the jcr:content node.
 * @param {string} xml the XML string of the page
 * @returns the properties of the jcr:content node
 */
export const getPageProperties = (xml) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');

  // get the jcr:content node properties
  const namespaceURI = 'http://www.jcp.org/jcr/1.0';
  const localName = 'content';
  const jcrContent = doc.getElementsByTagNameNS(namespaceURI, localName)[0];
  // eslint-disable-next-line max-len
  // return jcrContent ? jcrContent.getAttributeNames() : [];
  return jcrContent ? Array.from(jcrContent.attributes).map((attr) => attr.name) : [];
};

/**
 * Get the children of the jcr:content node.
 * @param {string} xml the XML string of the page
 * @returns the children of the jcr:content node
 */
export const getPageContentChildren = (xml) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');

  // get the names of the jcr:content node children
  const namespaceURI = 'http://www.jcp.org/jcr/1.0';
  const localName = 'content';
  const jcrContent = doc.getElementsByTagNameNS(namespaceURI, localName)[0];
  const children = jcrContent?.children;
  return children ? Array.from(children).map((child) => child.tagName) : [];
};

/**
 * Generate the properties.xml file for the content package.
 * @param {string} packageName the name of the package
 * @returns the properties.xml file
 */
export const getPropertiesXml = (packageName) => {
  const author = 'anonymous';
  const now = new Date().toISOString();
  const propXml = `<?xml version='1.0' encoding='UTF-8'?>
      <!DOCTYPE properties SYSTEM 'http://java.sun.com/dtd/properties.dtd'>
      <properties>
      <comment>FileVault Package Properties</comment>
      <entry key='description'></entry>
      <entry key='generator'>org.apache.jackrabbit.vault:3.7.1-T20231005151103-335689a8</entry>
      <entry key='packageType'>content</entry>
      <entry key='lastWrappedBy'>${author}</entry>
      <entry key='packageFormatVersion'>2</entry>
      <entry key='group'>my_packages</entry>
      <entry key='created'>${now}</entry>
      <entry key='lastModifiedBy'>${author}</entry>
      <entry key='buildCount'>1</entry>
      <entry key='lastWrapped'>${now}</entry>
      <entry key='version'></entry>
      <entry key='dependencies'></entry>
      <entry key='createdBy'>${author}</entry>
      <entry key='name'>${packageName}</entry>
      <entry key='lastModified'>${now}</entry>
      </properties>`;
  const propXmlPath = 'META-INF/vault/properties.xml';
  return { propXmlPath, propXml };
};

/**
 * Get the filter.xml file for the content package.
 * @param {Array} jcrPages the JCR pages to include in the package
 * @returns the filter.xml file
 */
export const getFilterXml = async (jcrPages) => {

  const pageFilters = jcrPages.reduce((acc, page) => {
    return `${acc}<filter root='${page.jcrPath}'>\n</filter>\n`;
  }, '');

  const filterXml = `<?xml version='1.0' encoding='UTF-8'?>
    <workspaceFilter version='1.0'>
      ${pageFilters}
    </workspaceFilter>`;
  const filterXmlPath = 'META-INF/vault/filter.xml';
  return { filterXmlPath, filterXml };
};

/**
 * Create a valid node name label out of an arbitrary site name.
 * @param {string} siteName the site name
 * @returns string which can be used as a JCR node name
 */
const getSiteName = (siteNameStr) => {
  const labelCharMapping = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_',
    '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_',
    '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '-', '_', '_',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '_', '_', '_', '_', '_',
    '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_', '_', '_', '_', '_',
    '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_', '_', '_', '_', '_',
    '_', 'f', '_', '_', '_', 'fi', 'fi', '_', '_', '_', '_', '_', '_', '_', '_', '_',
    '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'y', '_', '_', '_',
    '_', 'i', 'c', 'p', 'o', 'v', '_', 's', '_', '_', '_', '_', '_', '_', '_', '_',
    '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_',
    'a', 'a', 'a', 'a', 'ae', 'a', 'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i',
    'd', 'n', 'o', 'o', 'o', 'o', 'oe', 'x', 'o', 'u', 'u', 'u', 'ue', 'y', 'b', 'ss',
    'a', 'a', 'a', 'a', 'ae', 'a', 'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i',
    'o', 'n', 'o', 'o', 'o', 'o', 'oe', '_', 'o', 'u', 'u', 'u', 'ue', 'y', 'b', 'y'];
  const defaultReplacementCharacter = '_';
  const name = [];
  let prevEscaped = false;
  for (let idx = 0; idx < siteNameStr.length && name.length < 64; idx += 1) {
    const c = siteNameStr.charCodeAt(idx);
    let repl = defaultReplacementCharacter;
    if (c >= 0 && c < labelCharMapping.length) {
      repl = labelCharMapping[c];
    }
    if (repl === defaultReplacementCharacter) {
      // prevent escaping after a certain length
      if (!prevEscaped && name.length < 16) {
        name.push(defaultReplacementCharacter);
      }
      prevEscaped = true;
    } else {
      name.push(repl);
      prevEscaped = false;
    }
  }
  return name.join('');
};

/**
 * Get the package name based on the site name and the pages.
 * @param {Array} pages the pages to be included in the package
 * @param {string} siteNameStr the site name
 * @returns the package name
 */
export const getPackageName = (pages, siteNameStr) => {
  const siteName = getSiteName(siteNameStr);
  if (pages.length === 1) {
    const pageName = pages[0].path.split('/').pop();
    return `${siteName}_${pageName}`;
  }
  return siteName;
};

/**
 * Get the JCR page path based on the site name and the path.
 * @param {string} path the path of the page
 * @param {string} siteNameStr the site name
 * @returns the JCR page path
 */
export const getJcrPagePath = (path, siteNameStr) => {
  const siteName = getSiteName(siteNameStr);
  if (path.startsWith('/content/')) {
    // replace the 2nd token with the site name
    const tokens = path.split('/');
    tokens.splice(2, 1, siteName);
    return tokens.join('/');
  }
  // Remove any leading "/" from the path
  path = path.replace(/^\/+/, '');
  return `/content/${siteName}/${path}`;
};

/**
 * Get all elements with the "fileReference" attribute.
 * @param {string} xml - The XML string to parse.
 * @returns {Array} Array of objects containing image element and attribute name.
 */
export const getBlocks = (doc) => {
  // Find all elements that have the 'fileReference' attribute
  const allElements = doc.getElementsByTagName('*'); // Get all elements
  const items = [];

  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];

    // Check if the element has the 'fileReference' attribute
    if (element.getAttribute('sling:resourceType') === 'core/franklin/components/block/v1/block') {
      items.push(element);
    }
  }

  return items;
};

/**
 * Get the JCR path for an asset.
 * @param {string} assetUrl 
 * @param {string} siteNameStr 
 * @returns the JCR path for the asset
 */
const getJcrAssetPath = (assetUrl, siteNameStr) => {
  const siteName = getSiteName(siteNameStr);
  // add the query parameters to the path as _name1value1_name2value2
  const params = assetUrl.searchParams;
  const extension = (assetUrl.pathname.includes('.')) ? `.${assetUrl.pathname.split('.').pop()}` : '';
  let path = assetUrl.pathname.replace(extension, '');
  if (path.startsWith('/content/dam/')) {
    // replace the 3rd token with the site name
    const tokens = path.split('/');
    tokens.splice(3, 1, siteName);
    return `${tokens.join('/')}${extension}`;
  }
  // const suffix = Array.from(params.keys()).map((key) => `_${key}${params.get(key)}`).join('');
  const suffix = '';
  // replace media_ with media1_ in path to avoid conflicts with the media folder
  path = path.replace('/media_', '/media1_');

  return `/content/dam/${siteName}${path}${suffix}${extension}`;
};

/**
 * Get the JCR path for a asset reference.
 * @param {string} assetReference the asset reference
 * @param {string} pageUrl the URL of the page
 * @param {string} siteName the name of the site
 * @returns the JCR path for the file reference
 */
const getJcrAssetRef = (assetReference, pageUrl, siteName) => {
  if (!assetReference || assetReference === '') {
    return null;
  }
  const host = new URL(pageUrl).origin;
  let jcrPath = assetReference;
  let url;
  const pagePath = new URL(pageUrl).pathname;

  if (assetReference.startsWith('http')) {
    // external fileReference
    url = new URL(assetReference);
    if (url.origin === host || url.origin === 'http://localhost:3001' || url.origin === 'https://localhost:3001') {
      // the asset is hosted on the same server
      jcrPath = getJcrAssetPath(url, siteName);
    }
  } else if (assetReference.startsWith('/content/dam/')) {
    // DAM fileReference
    url = new URL(`${host}${assetReference}`);
    jcrPath = getJcrAssetPath(url, siteName);
  } else if (assetReference.startsWith('/')) {
    // absolute fileReference
    url = new URL(`${host}${assetReference}`);
    jcrPath = getJcrAssetPath(url, siteName);
  } else if (assetReference.startsWith('./')) {
    // relative fileReference: use the page path to make it an absolute path
    const parentPath = pagePath.substring(0, pagePath.lastIndexOf('/'));
    // eslint-disable-next-line no-param-reassign
    url = new URL(`${host}${parentPath}${assetReference.substring(1)}`);
    jcrPath = getJcrAssetPath(url, siteName);
  }
  return jcrPath;
}

/**
 * Traverse the DOM tree and update the asset references to point to the JCR paths.
 * @param {*} node - The node to traverse
 * @param {string} pageUrl - The URL of the page
 * @param {string} siteName - The name of the site
 * @param {Map} jcrAssetMap - A map of asset references to their corresponding JCR paths
 */
export const traverseAndUpdateAssetReferences = (node, pageUrl, siteName, jcrAssetMap) => {
  if (node.nodeType === 1) { // Element node
    for (const attr of node.attributes) {
      const attrValue = node.getAttribute(attr.name);
      if (jcrAssetMap.has(attrValue)) {
        const jcrAssetPath = getJcrAssetRef(attrValue, pageUrl, siteName);
        jcrAssetMap.set(attr.value, jcrAssetPath);
        node.setAttribute(attr.name, jcrAssetPath);
      }
    }
  }
  // Traverse child nodes
  for (let i = 0; i < node.childNodes.length; i++) {
    traverseAndUpdateAssetReferences(node.childNodes[i], pageUrl, siteName, jcrAssetMap);
  }
}



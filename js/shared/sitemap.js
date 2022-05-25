/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
async function loadSitemap(sitemapURL, origin) {
  const url = new URL(sitemapURL, origin);
  const resp = await fetch(`${origin}${url.pathname}${url.search}`);
  if (resp.ok) {
    const xml = await resp.text();
    const sitemap = (new window.DOMParser()).parseFromString(xml, 'text/xml');
    const subSitemaps = [...sitemap.querySelectorAll('sitemap loc')];
    let urls = [];
    const promises = subSitemaps.map((loc) => new Promise((resolve) => {
      const subSitemapURL = new URL(loc.textContent, origin);
      loadSitemap(subSitemapURL.pathname, origin).then((result) => {
        urls = urls.concat(result);
        resolve(true);
      });
    }));

    await Promise.all(promises);

    const urlLocs = sitemap.querySelectorAll('url loc');
    urlLocs.forEach((loc) => {
      const u = new URL(loc.textContent, origin);
      urls.push(u.toString());
    });

    return urls;
  }
  return [];
}

async function loadURLsFromRobots(origin) {
  let urls = [];
  const url = new URL('/robots.txt', origin);
  const res = await fetch(url.toString());
  if (false || res.ok) {
    const text = await res.text();
    // eslint-disable-next-line no-console
    console.log('found robots.txt', text);
    const regex = /^[Ss]itemap:\s*(.*)$/gm;
    let m;
    const sitemaps = [];
    // eslint-disable-next-line no-cond-assign
    while ((m = regex.exec(text)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex += 1;
      }

      sitemaps.push(m[1]);
    }

    const promises = sitemaps.map((sitemap) => new Promise((resolve) => {
      loadSitemap(sitemap, origin).then((u) => {
        urls = urls.concat(u);
        resolve();
      });
    }));

    await Promise.all(promises);
  } else {
    // eslint-disable-next-line no-console
    console.log('No robots.txt found - trying sitemap.xml');
    return loadSitemap('/sitemap.xml', origin);
  }
  return urls;
}

export {
  loadSitemap,
  loadURLsFromRobots,
};

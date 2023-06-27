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
/* global ExcelJS */
import { initOptionFields, attachOptionFieldsListeners } from '../shared/fields.js';
import { loadURLsFromRobots } from '../shared/sitemap.js';
import alert from '../shared/alert.js';
import { toggleLoadingButton } from '../shared/ui.js';

const PARENT_SELECTOR = '.crawl';
const CONFIG_PARENT_SELECTOR = `${PARENT_SELECTOR} form`;

const URLS_INPUT = document.getElementById('crawl-url');
const CRAWL_BUTTON = document.getElementById('crawl-docrawl-button');
const GETURLSFROMROBOTS_BUTTON = document.getElementById('crawl-getfromrobot-button');
const PROCESS_BUTTONS = document.querySelectorAll('#crawl-getfromrobot-button, #crawl-docrawl-button');

const CRAWL_REPORT_BUTTON = document.getElementById('crawl-downloadCrawlReport');
const CRAWL_CONTAINER = document.querySelector(`${PARENT_SELECTOR} .page-preview`);
const CRAWLED_URLS_HEADING = document.querySelector('#crawl-result h2');
const CRAWLED_URLS_LIST = document.querySelector('#crawl-result ul');

const IGNORED_EXTENSIONS = [
  'css',
  'js',
  'png',
  'jpg',
  'jpeg',
  'webp',
  'eps',
  'pdf',
  'doc',
  'docx',
  'xls',
  'xlsx',
  'ppt',
  'pptx',
  'zip',
  'gz',
  'tgz',
  'tar',
  'bz2',
  'dmg',
  'exe',
  'iso',
  'mp4',
];

const config = {};

const crawlStatus = {
  crawled: 0,
  rows: [],
};

const displayCrawledURL = (url) => {
  const u = new URL(url);
  const li = document.createElement('li');
  const link = document.createElement('sp-link');
  link.setAttribute('size', 'm');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', url);
  link.textContent = u.pathname;
  li.append(link);

  CRAWLED_URLS_LIST.append(li);

  CRAWLED_URLS_HEADING.innerText = `Crawled URLs (${crawlStatus.crawled}):`;
};

const displayTooManyURLs = () => {
  const li = document.createElement('li');
  li.textContent = 'Too many urls to display. Please download the crawl report to access the full list.';
  CRAWLED_URLS_LIST.append(li);
};

const initResultPanel = () => {
  CRAWLED_URLS_LIST.textContent = '';
  CRAWLED_URLS_HEADING.innerText = 'Crawling...';
};

const disableProcessButtons = () => {
  PROCESS_BUTTONS.forEach((button) => {
    button.disabled = true;
  });
};

const enableProcessButtons = () => {
  PROCESS_BUTTONS.forEach((button) => {
    button.disabled = false;
  });
};

const resetResultPanelHeader = () => {
  if (CRAWLED_URLS_LIST.childNodes.length === 0) {
    CRAWLED_URLS_HEADING.innerText = '';
  }
};

const getProxyURLSetup = (url, origin) => {
  const u = new URL(url);
  if (!u.searchParams.get('host')) {
    u.searchParams.append('host', u.origin);
  }
  const src = `${origin}${u.pathname}${u.search}`;
  return {
    remote: {
      url,
      origin: u.origin,
    },
    proxy: {
      url: src,
      origin,
    },
  };
};

const getContentFrame = () => document.querySelector(`${PARENT_SELECTOR} iframe`);

const attachListeners = () => {
  attachOptionFieldsListeners(config.fields, PARENT_SELECTOR);

  CRAWL_BUTTON.addEventListener('click', (async () => {
    disableProcessButtons();
    toggleLoadingButton(CRAWL_BUTTON);
    initResultPanel();

    if (config.fields['crawl-show-preview']) {
      CRAWL_CONTAINER.classList.remove('hidden');
    } else {
      CRAWL_CONTAINER.classList.add('hidden');
    }

    CRAWL_REPORT_BUTTON.classList.remove('hidden');

    crawlStatus.crawled = 0;
    crawlStatus.rows = [];
    crawlStatus.urls = [];
    crawlStatus.hasExtra = true;

    const urlsArray = [URLS_INPUT.value];
    const processNext = () => {
      if (urlsArray.length > 0) {
        const url = urlsArray.pop();

        const { proxy } = getProxyURLSetup(url, config.origin);
        const src = proxy.url;

        const frame = document.createElement('iframe');
        frame.id = 'crawl-content-frame';

        let sandboxAttr = 'allow-same-origin';
        if (config.fields['crawl-enable-js']) {
          sandboxAttr += ' allow-scripts';
        }
        frame.setAttribute('sandbox', sandboxAttr);

        const onLoad = async () => {
          if (config.fields['import-scroll-to-bottom']) {
            frame.contentWindow.window.scrollTo({ left: 0, top: frame.contentDocument.body.scrollHeight, behavior: 'smooth' });
          }

          window.setTimeout(async () => {
            const current = frame.dataset.originalURL;
            const originalURL = new URL(current);
            const replacedURL = new URL(frame.dataset.replacedURL);

            try {
              const links = frame.contentDocument.querySelectorAll('a') || [];
              let nbLinks = 0;
              let nbLinksExternalHost = 0;
              let nbLinksAlreadyProcessed = 0;
              const linksToFollow = [];
              const linksExcluded = [];
              links.forEach((a) => {
                nbLinks += 1;
                if (a.href) {
                  const u = new URL(a.href);
                  if (u.host === originalURL.host || u.host === replacedURL.host) {
                    u.searchParams.delete('host');
                    const found = `${originalURL.origin}${u.pathname}${u.search}`;
                    const extension = u.pathname.split('.').pop();
                    if (IGNORED_EXTENSIONS.indexOf(extension) === -1) {
                      // eslint-disable-next-line max-len
                      if (!crawlStatus.urls.includes(found)
                        && !urlsArray.includes(found)
                        && current !== found
                        && u.pathname.startsWith(config.fields['crawl-filter-pathname'])) {
                        urlsArray.push(found);
                        linksToFollow.push(found);
                      } else {
                        nbLinksAlreadyProcessed += 1;
                      }
                    } else {
                      linksExcluded.push(found);
                    }
                  } else {
                    nbLinksExternalHost += 1;
                  }
                }
              });

              crawlStatus.urls.push(current);
              const row = {
                url: current,
                status: 'Success',
                nbLinks,
                nbLinksAlreadyProcessed,
                nbLinksExternalHost,
                nbLinksToFollow: linksToFollow.length,
                linksToFollow,
                nbLinksExcluded: linksExcluded.length,
                linksExcluded,
              };
              crawlStatus.rows.push(row);
              crawlStatus.crawled += 1;

              if (crawlStatus.urls.length === 1000) {
                displayTooManyURLs();
              } else if (crawlStatus.urls.length < 1000) {
                displayCrawledURL(current);
              }
            } catch (error) {
              // try to detect redirects
              const res = await fetch(replacedURL);
              if (res.ok) {
                if (res.redirected) {
                  // eslint-disable-next-line no-console
                  console.error(`Cannot crawl ${originalURL} - redirected to ${res.url}`, error);
                  crawlStatus.rows.push({
                    url: originalURL,
                    status: 'Redirect',
                    redirect: res.url,
                  });
                } else {
                  // eslint-disable-next-line no-console
                  console.error(`Cannot crawl ${originalURL} - probably a code error on ${res.url}`, error);
                  crawlStatus.rows.push({
                    url: originalURL,
                    status: `Code error: ${res.status}`,
                  });
                }
              } else {
                // eslint-disable-next-line no-console
                console.error(`Cannot crawl ${originalURL} - page may not exist (status ${res.status})`, error);
                crawlStatus.rows.push({
                  url: originalURL,
                  status: `Invalid: ${res.status}`,
                });
              }
            }

            const event = new Event('crawling-complete');
            frame.dispatchEvent(event);
          }, config.fields['crawl-pageload-timeout'] || 1);
        };

        frame.addEventListener('load', onLoad);
        frame.addEventListener('crawling-complete', processNext);

        // eslint-disable-next-line no-console
        console.log(`Loading frame with page ${url}`);
        frame.dataset.originalURL = url;
        frame.dataset.replacedURL = src;
        frame.src = src;

        const current = getContentFrame();
        current.removeEventListener('load', onLoad);
        current.removeEventListener('crawling-complete', processNext);

        current.replaceWith(frame);
      } else {
        const frame = getContentFrame();
        frame.removeEventListener('crawling-complete', processNext);
        CRAWL_REPORT_BUTTON.classList.remove('hidden');
        enableProcessButtons();
        toggleLoadingButton(CRAWL_BUTTON);
        resetResultPanelHeader();
      }
    };
    processNext();
  }));

  CRAWL_REPORT_BUTTON.addEventListener('click', (async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    let headers = ['URL'];
    if (crawlStatus.hasExtra) {
      headers = ['URL', 'status', 'redirect', 'Nb links on page', 'Nb links already processed', 'Nb links on external host', 'Nb links to follow', 'Links to follow', 'Nb links excluded', 'Links excluded'];
      worksheet.autoFilter = {
        from: 'A1',
        to: 'H1',
      };
    } else {
      worksheet.autoFilter = {
        from: 'A1',
        to: 'A1',
      };
    }

    worksheet.addRows([
      headers,
    ].concat(crawlStatus.rows.map(({
      // eslint-disable-next-line max-len
      url,
      status,
      redirect,
      nbLinks,
      nbLinksAlreadyProcessed,
      nbLinksExternalHost,
      nbLinksToFollow,
      linksToFollow,
      nbLinksExcluded,
      linksExcluded,
    }) => {
      if (crawlStatus.hasExtra) {
        return [
          url, status, redirect || '', nbLinks || '', nbLinksAlreadyProcessed || '', nbLinksExternalHost || '', nbLinksToFollow || '', linksToFollow ? linksToFollow.join(', ') : '', nbLinksExcluded || '', linksExcluded ? linksExcluded.join(', ') : '',
        ];
      }
      return [url];
    })));
    const buffer = await workbook.xlsx.writeBuffer();
    const a = document.createElement('a');
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    a.setAttribute('href', URL.createObjectURL(blob));
    a.setAttribute('download', 'crawl_report.xlsx');
    a.click();
  }));

  GETURLSFROMROBOTS_BUTTON.addEventListener('click', (async () => {
    disableProcessButtons();
    toggleLoadingButton(GETURLSFROMROBOTS_BUTTON);
    initResultPanel();

    crawlStatus.crawled = 0;
    crawlStatus.rows = [];
    crawlStatus.urls = [];
    crawlStatus.hasExtra = false;

    // eslint-disable-next-line no-alert
    try {
      crawlStatus.urls = (await loadURLsFromRobots(config.origin, URLS_INPUT.value, {
        log: alert.success,
        sitemap: config.fields['crawl-sitemap-file'],
      })).filter((url) => {
        const u = new URL(url);
        return u.pathname.startsWith(config.fields['crawl-filter-pathname']);
      });

      crawlStatus.crawled = crawlStatus.urls.length;
      crawlStatus.urls.forEach((url, index) => {
        if (index === 1000) {
          displayTooManyURLs();
        } else if (index < 1000) {
          displayCrawledURL(url);
        }

        const row = {
          url,
        };
        crawlStatus.rows.push(row);
      });
    } catch (e) {
      alert.error(`Error while loading sitemaps and URLs from robots.txt: ${e}`);
    }

    CRAWL_REPORT_BUTTON.classList.remove('hidden');
    enableProcessButtons();
    toggleLoadingButton(GETURLSFROMROBOTS_BUTTON);
    resetResultPanelHeader();
  }));
};

const init = () => {
  config.origin = window.location.origin;
  config.fields = initOptionFields(CONFIG_PARENT_SELECTOR);

  attachListeners();
};

init();

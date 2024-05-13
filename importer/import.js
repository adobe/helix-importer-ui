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

/* global WebImporter */

export default {
  root: 'main',
  cleanup: {
    remove: [
      '.cookie-status-message',
      '.breadcrumbs',
      '.messages',
      '.sidebar',
      'h1 + ul.instruments-menu',
      'h1',
    ],
  },
  blocks: [
    {
      type: 'metadata',
      target: 'append',
      parse: (element, { document }) => {
        const meta = WebImporter.Blocks.buildMetaData(document) || {};
        const keywords = document.querySelector('[name="keywords"]');
        if (keywords) {
          meta.keywords = keywords.content;
        }

        const date = document.querySelector('[property="og:article:published_time"]');
        if (date) {
          meta['Publication Date'] = date.content.substring(0, date.content.indexOf('T'));
        }

        if (document.body.classList.contains('is-blog')) {
          meta.category = '';

          element.querySelectorAll('.webinar-speaker-img').forEach((img) => {
            const speakerParent = img.parentElement;
            meta.category = 'Webinars';
            meta.series = '';
            meta.eventDate = '';
            const webinarSpeaker = speakerParent.querySelector('div strong');
            meta.speakers = meta.speakers ? `${meta.speakers} and ${webinarSpeaker?.textContent}` : webinarSpeaker?.textContent;
          });
        }
        return meta;
      }
    },
    {
      type: 'overview',
      selectors: [
        '.entry div:has(div > p > img)',
      ],
      parse: (element, { document }) => {
        const image = element.querySelector('div img');
        const content = element.querySelector(':scope > div:last-child');
        return [
          [image.closest('div'), content]
        ];
      }
    },
    {
      type: 'columns',
      selectors: [
        '.entry > .about-content',
      ],
    },
  ]

};

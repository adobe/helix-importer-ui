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
    start: [
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
      params: {
        metadata: {
          keywords: '[name="keywords"]',
          ['Publication Date']: '[property="og:article:published_time"]',
          category: [
            [':scope:has(.is-blog) .webinar-speaker-img', 'Webinars'],
            [':scope:has(.is-blog)', ''],
          ],
          series: [
            [':has(.is-blog) .webinar-speaker-img', ''],
          ],
          eventDate: [
            [':has(.is-blog) .webinar-speaker-img', ''],
          ],
          speakers: [
            [':has(.is-blog) .webinar-speaker-img', '.webinar-speaker-img + strong'],
          ],
        }
      },
    },
    {
      type: 'overview',
      selectors: [
        '.entry div:has(div > p > img)',
        '.entry > div > div:first-of-type:has(div > img)',
      ],
      params: {
        cells: [
          ['div:has(img)', ':scope > div:last-child']
        ]
      },
    },
    {
      type: 'columns',
      selectors: [
        '.entry > .about-content',
        '.desc-img-wrapper:has(> :nth-child(2):last-child)',
      ],
    },
  ]

};

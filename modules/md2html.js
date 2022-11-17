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

import { toHast as mdast2hast, defaultHandlers } from 'mdast-util-to-hast';
import { raw } from 'hast-util-raw';
import remarkGridTable from '@adobe/remark-gridtables';
import { mdast2hastGridTablesHandler, TYPE_TABLE } from '@adobe/mdast-util-gridtables';
import { toHtml } from 'hast-util-to-html';
import rehypeFormat from 'rehype-format';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

export default function md2html(md) {
  // note: we could use the entire unified chain, but it would need to be async -
  // which would require too much of a change
  const mdast = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkGridTable)
    .parse(md);

  const hast = mdast2hast(mdast, {
    handlers: {
      ...defaultHandlers,
      [TYPE_TABLE]: mdast2hastGridTablesHandler(),
    },
    allowDangerousHtml: true,
  });

  raw(hast);
  rehypeFormat()(hast);

  return toHtml(hast, {
    upperDoctype: true,
  });
}

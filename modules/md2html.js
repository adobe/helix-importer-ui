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
import { h } from 'hastscript';
import { toHtml } from 'hast-util-to-html';
import { select } from 'hast-util-select';
import { toString } from 'hast-util-to-string';
import { CONTINUE, SKIP, visit } from 'unist-util-visit';
import rehypeFormat from 'rehype-format';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

/* start: copied from helix-html-pipeline */
function childNodes(node) {
  return node.children.filter((n) => n.type === 'element');
}

function toBlockCSSClassNames(text) {
  if (!text) {
    return [];
  }
  const names = [];
  const idx = text.lastIndexOf('(');
  if (idx >= 0) {
    names.push(text.substring(0, idx));
    names.push(...text.substring(idx + 1).split(','));
  } else {
    names.push(text);
  }

  return names.map((name) => name
    .toLowerCase()
    .replace(/[^0-9a-z]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, ''))
    .filter((name) => !!name);
}

function tableToDivs($table, wrap = false) {
  const $cards = h('div');
  const $rows = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const child of $table.children) {
    if (child.tagName === 'thead' || child.tagName === 'tbody') {
      $rows.push(...childNodes(child));
    }
  }

  if ($rows.length === 0) {
    return $cards;
  }
  const $headerCols = childNodes($rows.shift());
  if ($headerCols.length === 0) {
    return $cards;
  }

  // special case, only 1 row and 1 column with a nested table
  if ($rows.length === 0 && $headerCols.length === 1) {
    const $nestedTable = select(':scope table', $headerCols[0]);
    if ($nestedTable) {
      return $nestedTable;
    }
  }

  // get columns names
  $cards.properties.className = toBlockCSSClassNames(toString($headerCols[0]));
  if ($cards.properties.className.length === 0) {
    delete $cards.properties.className;
  }

  // construct page block
  // eslint-disable-next-line no-restricted-syntax
  for (const $row of $rows) {
    const $card = h('div');
    // eslint-disable-next-line no-restricted-syntax
    for (const $cell of childNodes($row)) {
      // convert to div
      $card.children.push(h('div', {
        'data-align': $cell.properties.align,
        'data-valign': $cell.properties.vAlign,
      }, $cell.children));
    }
    $cards.children.push($card);
  }

  if (wrap) {
    return h('div', {}, $cards);
  }
  return $cards;
}

function createPageBlocks({ content }) {
  const { hast } = content;
  visit(hast, (node, idx, parent) => {
    if (node.tagName === 'table') {
      parent.children[idx] = tableToDivs(node, parent.tagName !== 'div');
      return SKIP;
    }
    return CONTINUE;
  });
}

function split(state) {
  const { content: { mdast } } = state;

  // filter all children that are break blocks
  const dividers = mdast.children.filter((node) => node.type === 'thematicBreak')
    // then get their index in the list of children
    .map((node) => mdast.children.indexOf(node));

  // find pairwise permutations of spaces between blocks
  // include the very start and end of the document
  const starts = [0, ...dividers];
  const ends = [...dividers, mdast.children.length];

  // content.mdast.children = _.zip(starts, ends)
  mdast.children = starts.map((k, i) => [k, ends[i]])
    // but filter out empty section
    .filter(([start, end]) => start !== end)
    // then return all nodes that are in between
    .map(([start, end]) => {
      // skip 'thematicBreak' nodes
      const index = mdast.children[start].type === 'thematicBreak' ? start + 1 : start;
      return {
        type: 'section',
        children: mdast.children.slice(index, end),
      };
    });
}
/* end: copied from helix-html-pipeline */

export default function md2html(md, da = false) {
  // note: we could use the entire unified chain, but it would need to be async -
  // which would require too much of a change
  const mdast = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkGridTable)
    .parse(md);

  if (da) {
    split({ content: { mdast } });
  }

  const hast = mdast2hast(mdast, {
    handlers: {
      ...defaultHandlers,
      [TYPE_TABLE]: mdast2hastGridTablesHandler(),
    },
    allowDangerousHtml: true,
  });

  raw(hast);
  rehypeFormat()(hast);

  if (da) {
    createPageBlocks({ content: { hast } });
  }

  return toHtml(hast, {
    upperDoctype: true,
  });
}

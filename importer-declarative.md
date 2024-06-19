# Declarative Transformations

A declarative transformation is a JSON object that describes the rules of how a site should be imported to AEM Edge Delivery without requiring any code to be written. 

## JSON Structure

```json
{
  "root": "<string>",
  "cleanup": {
    "start": ["<string>"],
    "end": ["<string>"]
  },
  "blocks": [
    {
      "type": "<block name>",
      "insertMode": "append | replace | prepend",
      "selectors": ["<string>"],
      "params": {}
    }
  ]
}
```

## Phases

An import consists of several phases which is reflected in the JSON structure.

### Root selection

The `root` property is a CSS selector that is used to determine the top-most DOM element that will be used during an import. 
This is the element that will be used to determine the scope of the import.

### Cleanup

The `cleanup` phase allows any additional DOM elements to be removed from the DOM before the import proceeds.
The `start` property is an array of CSS selectors that are used to identify elements that should be removed before the block creation phase.

### Block creation

The bulk of the import is done in the `blocks` array. Each block item is a JSON object that describes how a block should be created.

- `type`: The name of the block to create. The name will also be used for finding a custom parser, otherwise the default block parser will be used.
- `insertMode`: How the block should be added to the target DOM. This can be `append`, `prepend`, or `replace`. `replace` is the default insert mode.
- `selectors`: An array of CSS selectors that are used to identify the source element that represents this block type.
- `params`: Additional parameters that are passed to the block parsing function.

## Block parsing

Block parsing is the process of transforming an element from the source DOM into a block-compatible DOM structure. 
There are several built-in block parsers that can be used to transform elements into blocks or custom parsers can be included as well.

All block parsing functions must implement the same signature:

    parse(element, { document, url, html, params }): [[Element]] | Record<string, string>

- `element`: The source element that is being transformed
- `document`: the source DOM
- `url`: the current URL being imported
- `html`: the original HTML source
- `params`: the parameters passed to the block parser

The return value of the parse function must be an object with name/value pairs or a two-dimensional array of elements.

### Selector expressions

A powerful feature of declarative transformations is the ability to use CSS selector expressions to identify elements in the source DOM. 
By leveraging selector expressions it is possible to create complex transformations without writing any code.

#### Block config expressions

The `buildBlockConfig` function of the `CellUtils` class can be used to create a block configuration object by mapping from an object of CSS selector expressions.

An expression item could be a single name/value pair that maps directly. An item could be a simple expression where the value is obtained from a single CSS selector. 
Finally, multiple expressions can be defined in an array to allow values to be conditionally applied based on the page structure.

Example:
```json
{
    "simple_property": "Static value",
    "single_expression": "[name=\"keywords\"]",
    "multiple_expressions": [
        [":scope:has(.is-blog)", "Webinars"],
        [":scope:has(.is-blog)", ".blog-category"]
    ]
}
```

#### Block cell expressions

Similarly, the `buildBlockCells` function is able to map a two-dimensional array of CSS selector expressions to an array of elements that should be added to a block.

Example: Creates a block with one row and two columns. The first column contains a div that includes an image. The second column contains the last child div under the source element.
```json
[
  ["div:has(p > img)", ":scope > div:last-child"]
]
```

#### Text expressions

A `::text` pseudo-element can be used to query text nodes in a document.

A text **search** query can be used to target an element that contains a specific text value.

    div.sidebarbody ::text(Exmaple body text)

A text **value** query can ube used to extract adjacent sibling text that can then be used as a cell's value.

    [[".text-center small strong", ".text-center small strong:first-child + ::text"]]

### Built-in block parsers

#### Default block parser

The default block parser is used when no custom block parser is defined. It is able to create many different blocks, however, by consuming complex selector expressions.
The selector expressions used by the default block parser must be defined as a `cells` property in the `params` object.

eg.
```json
{
  "type": "my_block",
  "selectors": [
    ".selector div:has(div > p > img)",
    ".selector > div > div:first-of-type:has(div > img)"
  ],
  "params": {
    "cells": [
      [[".col1_selector_1", ".col1_selector_2"], [".col2_selector"]]
    ]
  }
}
```

#### Metadata block parser

Metadata is a built-in block concept and has its own parser that is able to extract metadata from the source DOM.
Since the Metadata block uses the block config format, a block config expression can be included with metadata parsing. 
The `metadata` parser will use selector expressions included with the `metadata` property of the `params` object.  
Title, Description, and Image metadata will automatically be included in the block and do not need to be defined in the block config expression.

eg.
```json
{
  "type": "metadata",
  "target": "append",
  "params": {
    "metadata": {
      "keywords": "[name=\"keywords\"]",
      "Publication Date": "[property=\"og:article:published_time\"]",
      "category": [
        [
          ":scope:has(.is-blog .post-list) .webinar-speaker-img",
          "Webinars"
        ],
        [
          ":scope:has(.is-blog .post-list)",
          ""
        ]
      ]
    }
  }
}
```

## Advanced Usage

### Transformer Class

The AEM Importer will automatically use the `Transformer` class when a declarative transformation is provided. However, this class can also be used from classic import scripts as well.

    WebImporter.Transformer.transform(rules, source);

- `rules`: The declarative rules object that describes the transformation
- `source`: Properties related to the source DOM

The `transform` function returns the transformed root element that can have further processing applied to it.

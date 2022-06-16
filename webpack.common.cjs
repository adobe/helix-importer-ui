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
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { NormalModuleReplacementPlugin } = require('webpack');

const importer = {
  target: ['web', 'es2020'],
  entry: './module/importer.js',
  output: {
    filename: 'importer-bundle.js',
    path: path.resolve(__dirname, 'dist/lib'),
    publicPath: '/lib',
    library: {
      name: 'WebImporter',
      type: 'umd',
    },
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      worker_threads: false,
      'stream/web': false,
      url: false,
    },
    alias: {
      'fs-extra': 'fs',
    },
  },
  externals: {
    'node:stream/web': 'commonjs2 node:stream/web',
  },
  plugins: [
    new NormalModuleReplacementPlugin(/node:/, (resource) => {
      resource.request = resource.request.replace(/^node:/, '');
      if (resource.request === 'url') {
        // this is some hack, since mdast-util-to-markdown has a `import {URL} from 'node:url`
        // which is handled wrongly by webpack, as the usual `url` polyfill doesn't include URL.
        resource.request = path.resolve(__dirname, './polyfills/url-constructor-polyfill.cjs');
      }
    }),
    new NodePolyfillPlugin(),
    new NormalModuleReplacementPlugin(/@adobe\/helix-fetch/, (resource) => {
      resource.request = path.resolve(__dirname, './polyfills/fetch-constructor-polyfill.cjs');
    }),
    new NormalModuleReplacementPlugin(/node-fetch/, (resource) => {
      resource.request = path.resolve(__dirname, './polyfills/node-fetch-constructor-polyfill.cjs');
    }),
  ],
  module: {
    rules: [
      {
        test: /\.xml$/i,
        type: 'asset/source',
      },
    ],
  },
};

const swc = {
  target: ['web', 'es2020'],
  entry: './swc/index.js',
  output: {
    filename: 'swc.js',
    path: path.resolve(__dirname, 'dist/lib'),
    publicPath: './js/libs/hlx/',
  },
};

module.exports = { importer, swc };

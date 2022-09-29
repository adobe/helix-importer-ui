module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
    es6: true,
  },
//  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  // parserOptions: {
  //   allowImportExportEverywhere: true,
  //   sourceType: 'module',
  //   requireConfigFile: false,
  // },
  rules: {
    // allow reassigning param
    'no-param-reassign': [2, { props: false }],
    'linebreak-style': ['error', 'unix'],
    'import/extensions': ['error', {
      js: 'always',
    }],
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      exports: {},
    },
  },
};

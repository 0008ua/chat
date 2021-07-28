module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'module',
  },
  'plugins': [
    'eslint-plugin-html',
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': [2, { 'code': 140 }],
    'object-curly-spacing': 0,
    'new-cap': 0,
    'require-jsdoc': 0,
    'no-invalid-this': 0,
    'camelcase': ['error', { allow: ['(.*?)_id(.*?)', '(.*?)_format(.*?)'] }],
    'linebreak-style': 0,
  },
}

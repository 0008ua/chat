module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'es6': true,
    'ecmaVersion': 6,
  },
  'rules': {
    'linebreak-style': 0,
    'object-curly-spacing': 0,
    'require-jsdoc': 0,
    'indent': [
      'error',
      2,
    ],
    'new-cap': 0,
    'max-len': [
      2,
      {
        'code': 180,
        'tabWidth': 2,
        'ignoreUrls': true,
      },
    ],
    'camelcase': ['error', { allow: ['(.*?)_id(.*?)', '(.*?)_format(.*?)'] }],
  },
};

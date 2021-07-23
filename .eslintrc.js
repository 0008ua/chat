export default {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "google"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2019
    },
    "rules": {
        "linebreak-style": 0,
        "object-curly-spacing": 0,
        "require-jsdoc": 0,
        "indent": [
            "error",
            2
        ],
        "new-cap": 0,
        "max-len": [
            2,
            {
                "code": 180,
                "tabWidth": 2,
                "ignoreUrls": true
            }
        ],
        'camelcase': ['error', { allow: ['(.*?)_id(.*?)', '(.*?)_format(.*?)'] }],
    }
}
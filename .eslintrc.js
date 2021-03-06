module.exports = {
    'extends': 'airbnb',
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'installedESLint': true,
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'parser': 'babel-eslint',
    'rules': {
        'strict': 0,
        'indent': [0],
        'linebreak-style': [2, 'unix'],
        'quotes': [2, 'single'],
        'semi': [0],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'max-len': [2, {
            'code': 121,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true
        }],
        'no-console': [2, {
            "allow": ["warn", "error"]
        }],
        'func-names': 0,
        'react/jsx-closing-bracket-location': [1, {
          "nonEmpty": "props-aligned", // Align the bracket with the last prop
          "selfClosing": "props-aligned" // Align the bracket with the opening tag
        }],
        'react/jsx-filename-extension': [1, {
            "extensions": [".js", ".jsx"]
        }],
        'react/forbid-prop-types': 0,
        'no-prototype-builtins': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'import/no-named-as-default': 0,
    }
};

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', 'prettier', 'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react/prop-types' :'off',
    'no-param-reassign': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension' : [
      'warn',
      { extensions: ['.jsx', '.js']}
    ],
    'import/prefer-default-export': 'off',
    'no-console' : ["error", {allow:["tron"]}]
  }
};

const typescriptParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = {
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      window: 'readonly',
      document: 'readonly',
      console: 'readonly',
      process: 'readonly',
      module: 'readonly',
      __dirname: 'readonly',
    },
  },
  plugins: {
    react: reactPlugin,
    '@typescript-eslint': typescriptPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};

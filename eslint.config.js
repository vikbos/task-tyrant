import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    languageOptions: {
        parser: typescriptParser
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // Must be last
    ],
    rules: {
      'prettier/prettier': 'error',
    },
  }
] 
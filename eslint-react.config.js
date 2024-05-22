import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';


export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
      'sort-imports': 'off',
      'one-var': 'off',
      'no-console': 'off',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      }
    }
  },
];

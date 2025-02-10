import globals from 'globals';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      semi: ['error'],
      'quotes': [2, 'single', { 'avoidEscape': true }],
    }
  },
  ...tseslint.configs.recommended,
];
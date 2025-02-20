import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
   // files: ['**/*.{js,mjs,cjs,ts}'],
    files: ['src/**/*.{js,mjs,cjs,ts}'],
    ignores: ['dist/**'], 
  },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
 {'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-irregular-whitespace': ['error']
    }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
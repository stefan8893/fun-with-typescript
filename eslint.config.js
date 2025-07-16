import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.{ts,mts,cts}'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    extends: [tseslint.configs.recommended],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]);

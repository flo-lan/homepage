import js from '@eslint/js'

import tseslintParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import tseslintPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': tseslintPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
    },
    rules: {
      // Core rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      'no-unused-vars': 'off',
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-shadow': 'error',

      // React/NextJS rules (from plugin-next)
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/react-in-jsx-scope': 'off', // Not needed for Next.js

      'prettier/prettier': 'error',
    },
  },

  {
    ignores: ['./.next/*', './node_modules/*', './dist/*', '**/*.config.js'],
  },

  // Prettier config must come last to disable conflicting rules
  prettierConfig,
]

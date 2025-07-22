// import js from '@eslint/js';
// import pluginVue from 'eslint-plugin-vue';
// import tsPlugin from '@typescript-eslint/eslint-plugin';
// import tsParser from '@typescript-eslint/parser';

// export default [
//   // Ignore patterns - migrated from .eslintignore
//   {
//     ignores: [
//       '**/dist/**',
//       '**/dist-ssr/**',
//       '**/node_modules/**',
//       '**/build/**',
//       '**/coverage/**',
//       '**/logs/**',
//       '**/*.log',
//       '**/npm-debug.log*',
//       '**/yarn-debug.log*',
//       '**/yarn-error.log*',
//       '**/pnpm-debug.log*',
//       '**/lerna-debug.log*',
//       '**/.DS_Store',
//       '**/*.local',
//       '**/cypress/videos/**',
//       '**/cypress/screenshots/**',
//       '**/.vscode/**',
//       '**/.vscode*',
//       '!**/.vscode/extensions.json',
//       '**/.idea/**',
//       '**/*.suo',
//       '**/*.ntvs*',
//       '**/*.njsproj',
//       '**/*.sln',
//       '**/*.sw?',
//       '**/*.tsbuildinfo',
//       '**/*credential*',
//       '**/.vite/**',
//     ]
//   },
  
//   // Base JavaScript rules
//   js.configs.recommended,

//   // TypeScript & Vue configuration
//   {
//     files: ['**/*.ts'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         project: './tsconfig.json'
//       }
//     },
//     plugins: {
//       '@typescript-eslint': tsPlugin,
//     },
//     rules: {
      
//       ...tsPlugin.configs.recommended.rules,
//       ...tsPlugin.configs['recommended-requiring-type-checking'].rules
//     }
//   },
  
//   // Vue TypeScript rules
//   {
//     files: ['**/*.vue'],
//     languageOptions: {
//       parserOptions: {
//         parser: tsParser
//       }
//     },
//   },

//   ...pluginVue.configs['flat/essential'],
  
//   // Custom rules and settings
//   {
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module'
//     },
//     rules: {
//       semi: ['warn', 'always']
//     }
//   }
// ];

import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {
      // your rules
    },
  },
);
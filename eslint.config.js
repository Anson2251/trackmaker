import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
    {
        ignores: [
            '*.d.ts',
            '**/coverage',
            '**/dist',
            "src/utils/input-device-preferences.ts",
            "src/utils/device-orientation-service.ts",
            // "src/libs/cartosketch/**/*.ts",
            // "src/components/CartoSketch/**/*"
        ]
    },
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

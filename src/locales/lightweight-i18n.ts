import { ref, inject, type Ref, type App, type Plugin, isRef, unref } from 'vue';

interface I18nOptions {
    locale: string;
    fallbackLocale: string;
    messages: Record<string, any>;
    missingWarn?: boolean;
}

export interface I18nInstance {
    t: (key: string, params?: Ref<Record<string, any>> | Record<string, any>) => string;
    locale: Ref<string>;
    availableLocales: string[];
    messages: Record<string, any>;
    fallbackLocale: string;
}

const I18nInjectionKey = Symbol('i18n');

function flattenMessages(messages: any, prefix = ''): Map<string, string> {
    const result = new Map<string, string>();

    for (const key in messages) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        const value = (messages as Record<string, any>)[key];

        if (typeof value === 'string') {
            result.set(fullKey, value);
        } else if (typeof value === 'object' && value !== null) {
            const nested = flattenMessages(value, fullKey);
            for (const [nestedKey, nestedValue] of nested) {
                result.set(nestedKey, nestedValue);
            }
        }
    }

    return result;
}

function buildTranslationRefs(messages: any, _locale: string): Map<string, string> {
    const flat = flattenMessages(messages);
    const refs = new Map<string, string>();

    for (const [key, value] of flat) {
        refs.set(key, value);
    }

    return refs;
}

export function createI18n(options: I18nOptions): I18nInstance & Plugin {
    const locale = ref(options.locale);
    const messages = options.messages;
    const fallbackLocale = options.fallbackLocale;
    const availableLocales = Object.keys(messages);
    const translationRefs = new Map<string, Map<string, string>>();

    // Build translation refs for all locales
    for (const loc of availableLocales) {
        if (!translationRefs.has(loc)) {
            translationRefs.set(loc, buildTranslationRefs(messages[loc], loc));
        }
    }

    function getTranslation(key: string): string {
        // Try current locale
        const currentRefs = translationRefs.get(locale.value);
        const translation = currentRefs?.get(key);

        if (translation !== undefined) {
            return translation;
        }

        // Fallback to fallback locale
        if (locale.value !== fallbackLocale) {
            const fallbackRefs = translationRefs.get(fallbackLocale);
            const fallbackTranslation = fallbackRefs?.get(key);

            if (fallbackTranslation !== undefined) {
                return fallbackTranslation;
            }
        }

        // Missing translation
        if (options.missingWarn !== false) {
            console.warn(`[i18n] Missing translation for key: ${key}`);
        }
        return key;
    }

    const PARAM_REGEX = /\{(\w+)\}/g;

    function t(key: string, params?: Ref<Record<string, any>> | Record<string, any>): string {
        let translation = getTranslation(key);
        if (!params) return translation;

        const currentParams = unref(params);

        translation = translation.replace(PARAM_REGEX, (match, paramName: string) => {
            return paramName in currentParams ? String(currentParams[paramName]) : match;
        });

        return translation;
    }

    // Global $t function for template usage (returns string)
    function globalT(key: string, params?: any): string {
        return t(key, params);
    }

    const instance: I18nInstance = {
        t,
        locale,
        availableLocales,
        messages: messages,
        fallbackLocale,
    };

    const plugin: Plugin = {
        install(app: App) {
            app.config.globalProperties.$t = globalT;
            app.config.globalProperties.$i18n = instance;

            app.provide(I18nInjectionKey, instance);

            // Make locale reactive across the app
            app.config.globalProperties.$locale = locale;
        }
    };

    return Object.assign(instance, plugin);
}

export function useI18n(): I18nInstance {
    const i18n = inject<I18nInstance>(I18nInjectionKey);

    if (!i18n) {
        throw new Error('I18n instance not found. Did you forget to install the i18n plugin?');
    }

    return i18n;
}

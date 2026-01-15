import { createI18n } from 'vue-i18n';
import en from './en.json';
import zhCN from './zh-CN.json';

const messages = {
    en,
    'zh-CN': zhCN
};

// Function to detect system locale
function getSystemLocale(): string {
    const browserLang = navigator.language;
    if (browserLang.startsWith('zh')) {
        return 'zh-CN';
    }
    return 'en';
}

// Function to get initial locale based on saved preference
function getInitialLocale(savedLocale: string): string {
    if (savedLocale === 'system') {
        return getSystemLocale();
    }
    return savedLocale ?? getSystemLocale();
}

// Get saved locale preference or use system default
const savedLocale = localStorage.getItem('trackmaker_settings')
    ? (JSON.parse(localStorage.getItem('trackmaker_settings') || '{}') as { interfaceLanguage?: string })?.interfaceLanguage
    : null;

export const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(savedLocale || 'system'),
    fallbackLocale: 'en',
    messages
});

// Export system locale detection for use in other parts of the app
export { getSystemLocale };

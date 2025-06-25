import { createI18n } from 'vue-i18n';
import en from './en.json';
import zhCN from './zh-CN.json';

const messages = {
  en,
  'zh-CN': zhCN
};

export const i18n = createI18n({
  legacy: false,
  locale: navigator.language ?? 'en',
  fallbackLocale: 'en',
  messages
});

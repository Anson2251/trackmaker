// Lightweight i18n for splash screen - minimal bundle size
// Uses simple message lookup without loading full vue-i18n

type Locale = 'en' | 'zh-CN';

// Message IDs that can be passed from modules
export type MessageId =
    | 'permission.location.prompt'
    | 'permission.location.required'
    | 'permission.imu.required'
    | 'permission.allow'
    | 'permission.deny'
    | 'permission.title'
    | 'error.title'
    | 'timeout.title'
    | 'timeout.message'
    | 'retry';

interface SplashMessages {
    'permission.location.prompt': string;
    'permission.location.required': string;
    'permission.imu.required': string;
    'permission.allow': string;
    'permission.deny': string;
    'permission.title': string;
    'error.title': string;
    'timeout.title': string;
    'timeout.message': string;
    'retry': string;
}

const messages: Record<Locale, SplashMessages> = {
    'en': {
        'permission.location.prompt': "Your browser will request permission to access your location.",
        'permission.location.required': "This app requires access to your location to track your movements.",
        'permission.imu.required': "This app requires access to your device's motion sensors to provide orientation tracking.",
        'permission.allow': "Allow",
        'permission.deny': "Deny",
        'permission.title': "Permission Required",
        'error.title': "Loading Error",
        'timeout.title': "Connection Timeout",
        'timeout.message': "Unable to load required modules within the timeout period. Please check your internet connection and try again.",
        'retry': "Retry"
    },
    'zh-CN': {
        'permission.location.prompt': "您的浏览器将请求位置访问权限。",
        'permission.location.required': "此应用需要访问您的位置以追踪您的运动。",
        'permission.imu.required': "此应用需要访问您设备的运动传感器以提供方向追踪。",
        'permission.allow': "允许",
        'permission.deny': "拒绝",
        'permission.title': "需要权限",
        'error.title': "加载错误",
        'timeout.title': "连接超时",
        'timeout.message': "无法在超时时间内加载所需模块。请检查您的网络连接并重试。",
        'retry': "重试"
    }
};

// Detect locale from browser or storage
const getLocale = (): Locale => {
    // Check localStorage for saved preference (matches vue-i18n format)
    try {
        const savedLocale = localStorage.getItem('interface-language');
        if (savedLocale && messages[savedLocale as Locale]) {
            return savedLocale as Locale;
        }
    } catch { /* ignore */ }

    // Detect from browser language
    const browserLang = navigator.language;
    if (browserLang.startsWith('zh')) {
        return 'zh-CN';
    }
    return 'en';
};

export const locale = getLocale();

export const t = (key: MessageId): string => {
    return messages[locale][key] || messages['en'][key] || key;
};

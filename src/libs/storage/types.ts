/**
 * Storage types and interfaces
 */

export interface Settings {
    theme: 'light' | 'dark' | 'system';
    interfaceLanguage: string;
    mapLanguage: string;
    watchCompatibilityMode: boolean;
    geolocationCorrection: boolean;
}

export interface StorageData {
    settings?: Settings;
    [key: string]: unknown;
}

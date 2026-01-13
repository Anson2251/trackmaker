/**
 * Settings Types
 * Shared types for settings across the application
 */

export type Settings = {
    // User-facing settings
    theme: 'light' | 'dark' | 'system';
    interfaceLanguage: string;
    mapLanguage: string;
    watchCompatibilityMode: boolean;
    geolocationCorrection: boolean;
    // Advanced settings (Firefox config style)
    debugMode: boolean;
    maxCacheSize: number;
    gpsUpdateInterval: number;
    mapTileServer: string;
    customMapTileUrl: string;
    mapTilerApiKey: string;
    autoRecenterTimeout: number;
    showCompass: boolean;
    keepScreenOn: boolean;
    enableKalmanFilter: boolean;
    mapZoomLevel: number;
};

export type SettingKey = keyof Settings;

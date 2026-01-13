/**
 * Default settings values
 * Separated from the store for early access and cleaner code
 */

import type { Settings } from '@/libs/settings-types';

export const defaultSettings: Settings = {
    // User-facing settings
    theme: 'system',
    interfaceLanguage: 'en',
    mapLanguage: 'interface',
    watchCompatibilityMode: true,
    geolocationCorrection: false,
    // Advanced settings (Firefox config style)
    debugMode: false,
    maxCacheSize: 100,
    gpsUpdateInterval: 1000,
    mapTileServer: 'maptiler',
    customMapTileUrl: '',
    mapTilerApiKey: '',
    autoRecenterTimeout: 60000,
    showCompass: true,
    keepScreenOn: true,
    enableKalmanFilter: true,
    mapZoomLevel: 15,
};

// Advanced settings configuration (for UI display)
export interface AdvancedSettingConfig {
    key: keyof Settings;
    name: string;
    type: 'boolean' | 'string' | 'number';
    description: string;
    userFacing?: boolean; // If true, shown in main settings page
}

export const advancedSettingsConfig: AdvancedSettingConfig[] = [
    // User-facing settings
    {
        key: 'theme',
        name: 'Theme',
        type: 'string',
        description: 'Application theme (light, dark, or system default)',
        userFacing: true,
    },
    {
        key: 'interfaceLanguage',
        name: 'Interface Language',
        type: 'string',
        description: 'Language for the user interface',
        userFacing: true,
    },
    {
        key: 'mapLanguage',
        name: 'Map Language',
        type: 'string',
        description: 'Language for map labels',
        userFacing: true,
    },
    {
        key: 'watchCompatibilityMode',
        name: 'Watch Compatibility Mode',
        type: 'boolean',
        description: 'Enable compatibility mode for GPS watches',
        userFacing: true,
    },
    {
        key: 'geolocationCorrection',
        name: 'Geolocation Correction (WGS to GCJ)',
        type: 'boolean',
        description: 'Apply WGS to GCJ coordinate conversion for China region',
        userFacing: true,
    },
    // Advanced settings
    {
        key: 'debugMode',
        name: 'Debug Mode',
        type: 'boolean',
        description: 'Enable debug logging and developer tools',
    },
    {
        key: 'maxCacheSize',
        name: 'Max Cache Size (MB)',
        type: 'number',
        description: 'Maximum local storage cache size for map tiles',
    },
    {
        key: 'gpsUpdateInterval',
        name: 'GPS Update Interval (ms)',
        type: 'number',
        description: 'Minimum interval between GPS position updates',
    },
    {
        key: 'mapTileServer',
        name: 'Map Tile Server',
        type: 'string',
        description: 'Tile server for map rendering (maptiler, openfreemap, custom)',
    },
    {
        key: 'customMapTileUrl',
        name: 'Custom Map Tile URL',
        type: 'string',
        description: 'Custom map tile server URL (used when Map Tile Server is set to custom)',
    },
    {
        key: 'mapTilerApiKey',
        name: 'MapTiler API Key',
        type: 'string',
        description: 'API key for MapTiler services',
    },
    {
        key: 'autoRecenterTimeout',
        name: 'Auto Recenter Timeout (ms)',
        type: 'number',
        description: 'Time limit to restore last map position (in milliseconds)',
    },
    {
        key: 'showCompass',
        name: 'Show Compass',
        type: 'boolean',
        description: 'Display compass overlay on map',
    },
    {
        key: 'keepScreenOn',
        name: 'Keep Screen On',
        type: 'boolean',
        description: 'Prevent screen from turning off during tracking',
    },
    {
        key: 'enableKalmanFilter',
        name: 'Enable Kalman Filter',
        type: 'boolean',
        description: 'Use Kalman filter for GPS position smoothing',
    },
    {
        key: 'mapZoomLevel',
        name: 'Default Map Zoom Level',
        type: 'number',
        description: 'Default zoom level when opening the map',
    },
];

// Get all advanced-only settings (not shown in main settings)
export const getAdvancedOnlySettings = () =>
    advancedSettingsConfig.filter((s) => !s.userFacing);

// Get user-facing settings
export const getUserFacingSettings = () =>
    advancedSettingsConfig.filter((s) => s.userFacing);

export { defaultSettings as defaults };

/**
 * Early Settings Module
 * Provides read-only access to settings before the full storage system is initialized.
 * Uses localStorage directly for web, or Tauri API for desktop.
 */

const EARLY_STORAGE_KEY = 'trackmaker_settings';

// Check if we're in Tauri environment (simple check)
const isTauri = typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).__TAURI_INTERNALS__ !== undefined;

/**
 * Get a setting value by key - works before full storage initialization
 */
export function getEarlySetting<K extends keyof Settings>(
    key: K
): Settings[K] {
    try {
        if (isTauri) {
            // In Tauri, try to use invoke (simplified - actual impl would use @tauri-apps/api)
            // For now, fall back to localStorage
        }

        // Use localStorage directly
        const stored = localStorage.getItem(EARLY_STORAGE_KEY);
        if (stored !== null) {
            const settings = JSON.parse(stored) as Partial<Settings>;
            return (settings[key] ?? defaultSettings[key]) as Settings[K];
        }
    } catch {
        // Silently fail and return default
    }

    return defaultSettings[key];
}

/**
 * Get all settings - works before full storage initialization
 */
export function getAllEarlySettings(): Settings {
    try {
        if (isTauri) {
            // In Tauri, try to use invoke (simplified)
        }

        const stored = localStorage.getItem(EARLY_STORAGE_KEY);
        if (stored) {
            const saved = JSON.parse(stored) as Partial<Settings>;
            return { ...defaultSettings, ...saved };
        }
    } catch {
        // Silently fail
    }

    return { ...defaultSettings };
}

/**
 * Check if debug mode is enabled (most common early-access setting)
 */
export function isDebugModeEnabled(): boolean {
    return getEarlySetting('debugMode');
}

/**
 * Get GPS update interval in milliseconds
 */
export function getGpsUpdateInterval(): number {
    return getEarlySetting('gpsUpdateInterval');
}

/**
 * Check if Kalman filter is enabled
 */
export function isKalmanFilterEnabled(): boolean {
    return getEarlySetting('enableKalmanFilter');
}

/**
 * Get default map zoom level
 */
export function getDefaultMapZoomLevel(): number {
    return getEarlySetting('mapZoomLevel');
}

/**
 * Check if screen should be kept on during tracking
 */
export function shouldKeepScreenOn(): boolean {
    return getEarlySetting('keepScreenOn');
}

/**
 * Get map tile server URL or identifier
 */
export function getMapTileServer(): string {
    return getEarlySetting('mapTileServer');
}

/**
 * Check if compass should be shown
 */
export function shouldShowCompass(): boolean {
    return getEarlySetting('showCompass');
}

/**
 * Check if auto-recenter map is enabled
 */
export function getAutoRecenterTimeout(): number {
    return getEarlySetting('autoRecenterTimeout');
}

/**
 * Get custom map tile URL
 */
export function getCustomMapTileUrl(): string {
    return getEarlySetting('customMapTileUrl');
}

/**
 * Get MapTiler API key
 */
export function getMapTilerApiKey(): string {
    return getEarlySetting('mapTilerApiKey');
}


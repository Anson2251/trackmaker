/**
 * Default settings values
 * Separated from the store for early access and cleaner code
 */

import type { Settings } from '@/libs/settings-types';

export const defaultSettings: Settings = {
    // User-facing settings
    theme: 'system',
    interfaceLanguage: 'system',
    mapLanguage: 'interface',
    watchCompatibilityMode: true,
    geolocationCorrection: false,
    geolocationBackend: 'auto',
    // Advanced settings (Firefox config style)
    debugMode: false,
    maxCacheSize: 100,
    gpsUpdateInterval: 500,
    mapTileServer: 'maptiler',
    customMapTileUrl: '',
    mapTilerApiKey: '',
    autoRecenterTimeout: 60000,
    showCompass: true,
    keepScreenOn: true,
    enableKalmanFilter: true,
    mapZoomLevel: 15,
    imuUpdateFrequency: 10,
    kalmanGpsUpdateInterval: 1000,
    // Kalman filter parameters
    kalmanInitialAccelerationUncertainty: 0.1,
    kalmanInitialPositionUncertainty: 1,
    kalmanInitialVelocityUncertainty: 0.1,
    kalmanGpsSpeedUncertainty: 1,
    kalmanImuAccelerationUncertainty: 0.1,
    kalmanVelocityProcessNoise: 0.01,
    // ZUPT (Zero-Velocity Update) parameters
    zuptEnabled: true,
    zuptThreshold: 0.3,
    zuptConsecutiveSamples: 3,
    zuptVelocityNoise: 0.1,
    // Merge processor parameters
    mergeBatchSize: 1000,
    maxMergeQueueSize: 10000,
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
    {
        key: 'geolocationBackend',
        name: 'Geolocation Backend',
        type: 'string',
        description: 'Backend strategy for geolocation (auto, kalman, kalman-no-imu, gps, or ip)',
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
        key: 'kalmanGpsUpdateInterval',
        name: 'Kalman GPS Update Interval (ms)',
        type: 'number',
        description: 'Minimum interval between GPS position updates when using Kalman filter',
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
        userFacing: true,
    },
    {
        key: 'mapZoomLevel',
        name: 'Default Map Zoom Level',
        type: 'number',
        description: 'Default zoom level when opening the map',
    },
    {
        key: 'imuUpdateFrequency',
        name: 'IMU Update Frequency (Hz)',
        type: 'number',
        description: 'Update frequency for IMU sensors (0 = immediate, 10-20Hz recommended)',
    },
    // Kalman filter parameters
    {
        key: 'kalmanInitialAccelerationUncertainty',
        name: 'Initial Acceleration Uncertainty',
        type: 'number',
        description: 'Initial uncertainty for acceleration in Kalman filter (m/s²)',
    },
    {
        key: 'kalmanInitialPositionUncertainty',
        name: 'Initial Position Uncertainty',
        type: 'number',
        description: 'Initial uncertainty for position in Kalman filter (meters)',
    },
    {
        key: 'kalmanInitialVelocityUncertainty',
        name: 'Initial Velocity Uncertainty',
        type: 'number',
        description: 'Initial uncertainty for velocity in Kalman filter (m/s)',
    },
    {
        key: 'kalmanGpsSpeedUncertainty',
        name: 'GPS Speed Uncertainty',
        type: 'number',
        description: 'GPS speed uncertainty (m/s)',
    },
    {
        key: 'kalmanImuAccelerationUncertainty',
        name: 'IMU Acceleration Uncertainty',
        type: 'number',
        description: 'IMU acceleration uncertainty (m/s²)',
    },
    {
        key: 'kalmanVelocityProcessNoise',
        name: 'Velocity Process Noise',
        type: 'number',
        description: 'Process noise coefficient for velocity in Kalman filter',
    },
    // ZUPT (Zero-Velocity Update) parameters
    {
        key: 'zuptEnabled',
        name: 'ZUPT Enabled',
        type: 'boolean',
        description: 'Enable Zero-Velocity Update to improve position accuracy when stationary',
    },
    {
        key: 'zuptThreshold',
        name: 'ZUPT Threshold',
        type: 'number',
        description: 'Acceleration magnitude threshold for stationary detection (m/s²)',
    },
    {
        key: 'zuptConsecutiveSamples',
        name: 'ZUPT Consecutive Samples',
        type: 'number',
        description: 'Number of consecutive samples below threshold to trigger ZUPT',
    },
    {
        key: 'zuptVelocityNoise',
        name: 'ZUPT Velocity Noise',
        type: 'number',
        description: 'Measurement noise for zero-velocity assumption (m/s)',
    },
    // Merge processor parameters
    {
        key: 'mergeBatchSize',
        name: 'Merge Batch Size',
        type: 'number',
        description: 'Number of route entries to process per merge batch (higher = faster but uses more memory)',
    },
    {
        key: 'maxMergeQueueSize',
        name: 'Max Merge Queue Size',
        type: 'number',
        description: 'Maximum number of merge jobs in queue to prevent memory exhaustion',
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
        // Check if localStorage is available (may not be in some iframe/private browsing contexts)
        if (typeof localStorage === 'undefined') {
            return defaultSettings[key];
        }

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
        // Check if localStorage is available
        if (typeof localStorage === 'undefined') {
            return { ...defaultSettings };
        }

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

export function getKalmanGpsUpdateInterval(): number {
    return getEarlySetting('kalmanGpsUpdateInterval')
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

/**
 * Get IMU update frequency in Hz
 */
export function getIMUUpdateFrequency(): number {
    return getEarlySetting('imuUpdateFrequency');
}

/**
 * Get Kalman filter initial acceleration uncertainty
 */
export function getKalmanInitialAccelerationUncertainty(): number {
    return getEarlySetting('kalmanInitialAccelerationUncertainty');
}

/**
 * Get Kalman filter initial position uncertainty
 */
export function getKalmanInitialPositionUncertainty(): number {
    return getEarlySetting('kalmanInitialPositionUncertainty');
}

/**
 * Get Kalman filter initial velocity uncertainty
 */
export function getKalmanInitialVelocityUncertainty(): number {
    return getEarlySetting('kalmanInitialVelocityUncertainty');
}

/**
 * Get Kalman filter GPS speed uncertainty
 */
export function getKalmanGpsSpeedUncertainty(): number {
    return getEarlySetting('kalmanGpsSpeedUncertainty');
}

/**
 * Get Kalman filter IMU acceleration uncertainty
 */
export function getKalmanImuAccelerationUncertainty(): number {
    return getEarlySetting('kalmanImuAccelerationUncertainty');
}

/**
 * Get Kalman filter velocity process noise
 */
export function getKalmanVelocityProcessNoise(): number {
    return getEarlySetting('kalmanVelocityProcessNoise');
}

/**
 * Get ZUPT enabled status
 */
export function isZUPTEnabled(): boolean {
    return getEarlySetting('zuptEnabled');
}

/**
 * Get ZUPT acceleration threshold
 */
export function getZUPTThreshold(): number {
    return getEarlySetting('zuptThreshold');
}

/**
 * Get ZUPT consecutive samples requirement
 */
export function getZUPTConsecutiveSamples(): number {
    return getEarlySetting('zuptConsecutiveSamples');
}

/**
 * Get ZUPT velocity measurement noise
 */
export function getZUPTVelocityNoise(): number {
    return getEarlySetting('zuptVelocityNoise');
}

/**
 * Get merge batch size
 */
export function getMergeBatchSize(): number {
    return getEarlySetting('mergeBatchSize');
}

/**
 * Get maximum merge queue size
 */
export function getMaxMergeQueueSize(): number {
    return getEarlySetting('maxMergeQueueSize');
}

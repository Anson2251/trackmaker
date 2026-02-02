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
    geolocationBackend: 'auto' | 'kalman' | 'kalman-no-imu' | 'gps' | 'ip';
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
    imuUpdateFrequency: number;
    kalmanGpsUpdateInterval: number;
    // Kalman filter parameters
    kalmanInitialAccelerationUncertainty: number;
    kalmanInitialPositionUncertainty: number;
    kalmanInitialVelocityUncertainty: number;
    kalmanGpsSpeedUncertainty: number;
    kalmanImuAccelerationUncertainty: number;
    kalmanVelocityProcessNoise: number;
    // ZUPT (Zero-Velocity Update) parameters
    zuptEnabled: boolean;
    zuptThreshold: number;
    zuptConsecutiveSamples: number;
    zuptVelocityNoise: number;
    // Merge processor parameters
    mergeBatchSize: number;
    maxMergeQueueSize: number;
};

export type SettingKey = keyof Settings;

/**
 * Platform services - Main service provider for platform abstraction
 */

import { Result, ok, err } from 'neverthrow';
import { platformDetector } from './platform-detector';
import type { PlatformContext } from './types';
import { RuntimeEnvironment, type IStorageProvider, type IGeolocationProvider, type IFileProvider, type IIMUProvider, type IDeviceOrientationProvider } from './types';
import { TauriStorageProvider } from './providers/tauri-storage-provider';
import { WebStorageProvider } from './providers/web-storage-provider';
import { TauriGeolocationProvider } from './providers/tauri-geolocation-provider';
import { WebGeolocationProvider } from './providers/web-geolocation-provider';
import { WebDeviceOrientationProvider } from './providers/web-device-orientation-provider';
import { WebIMUProvider } from './providers/web-imu-provider';
import { PlatformDetectionError, PlatformDetectionErrorCode } from './errors';
import { GenericError } from '@/libs/error-handling';

/**
 * Platform services configuration
 */
export interface PlatformServicesConfig {
    storage?: {
        tauriStorePath?: string;
        webDbName?: string;
        webStoreName?: string;
    };
    geolocation?: {
        tauriHandlerName?: string;
        enableKalmanFilter?: boolean;
        kalmanConfig?: any;
        permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>;
    };
    permissions?: {
        onPermissionChange?: (provider: string, state: PermissionState) => void;
    };
    deviceOrientation?: {
        permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>;
    };
    imu?: {
        permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>;
    }
}

/**
 * Main platform services class that provides access to platform-specific implementations
 */
export class PlatformServices {
    private static instance: PlatformServices | null = null;
    private context: PlatformContext;
    private storageProvider: IStorageProvider | null = null;
    private geolocationProvider: IGeolocationProvider | null = null;
    private fileProvider: IFileProvider | null = null;
    private imuProvider: IIMUProvider | null = null;
    private deviceOrientationProvider: IDeviceOrientationProvider | null = null;
    private initialized = false;

    private constructor(context: PlatformContext) {
        this.context = context;
    }

    static async init(config?: PlatformServicesConfig): Promise<Result<PlatformServices, PlatformDetectionError>> {
        const context = platformDetector.getPlatformContext();
        const services = new PlatformServices(context);

        // Initialize providers based on platform
        const initResult = await services.initializeProviders(config);
        if (initResult.isErr()) {
            return err(initResult.error);
        }

        PlatformServices.instance = services;
        return ok(services);
    }

    /**
     * Get the singleton instance of PlatformServices
     */
    static getInstance(): Result<PlatformServices, PlatformDetectionError> {
        if (!PlatformServices.instance) {
            return err(new PlatformDetectionError("Platform services not initialized", PlatformDetectionErrorCode.NOT_INITIALIZED))
        }

        return ok(PlatformServices.instance);
    }

    /**
     * Initialize platform-specific providers
     */
    private async initializeProviders(config?: PlatformServicesConfig): Promise<Result<void, PlatformDetectionError>> {
        try {
            // Initialize storage provider
            this.storageProvider = this.createStorageProvider(config?.storage);

            // Initialize sensor providers first (needed for Kalman IMU fusion)
            const providers = await Promise.all([
                this.createIMUProvider(config?.imu),
                this.createDeviceOrientationProvider(config?.deviceOrientation),
            ])

            this.imuProvider = providers[0];
            this.deviceOrientationProvider = providers[1];
            this.geolocationProvider = await this.createGeolocationProvider(config?.geolocation);

            // Initialize file provider (placeholder for now)
            this.fileProvider = this.createFileProvider();

            this.initialized = true;
            return ok(undefined);
        } catch (error) {
            return err(new PlatformDetectionError(
                'Failed to initialize platform providers',
                PlatformDetectionErrorCode.DETECTION_FAILED,
                error as Error
            ));
        }
    }

    /**
     * Create appropriate storage provider based on platform
     */
    private createStorageProvider(storageConfig?: PlatformServicesConfig['storage']): IStorageProvider {
        switch (this.context.environment) {
            case RuntimeEnvironment.TAURI:
                return new TauriStorageProvider(
                    storageConfig?.tauriStorePath || 'user-data.json'
                );

            case RuntimeEnvironment.WEB:
            case RuntimeEnvironment.MOBILE_WEB:
            case RuntimeEnvironment.UNKNOWN:
            default:
                return new WebStorageProvider(
                    storageConfig?.webDbName || 'trackmaker-db',
                    storageConfig?.webStoreName || 'user-data'
                );
        }
    }

    /**
     * Create appropriate geolocation provider based on platform
     */
    private async createGeolocationProvider(geoConfig?: PlatformServicesConfig['geolocation']): Promise<IGeolocationProvider> {
        // Create base provider based on platform
        let baseProvider: IGeolocationProvider;

        switch (this.context.environment) {
            case RuntimeEnvironment.TAURI:
                baseProvider = new TauriGeolocationProvider(
                    geoConfig?.tauriHandlerName || 'get_geolocation'
                );
                break;

            case RuntimeEnvironment.WEB:
            case RuntimeEnvironment.MOBILE_WEB:
            case RuntimeEnvironment.UNKNOWN:
            default:
                baseProvider = new WebGeolocationProvider();
                break;
        }

        // Initialize provider with permission callback if provided
        await baseProvider.init(geoConfig?.permissionCallback);

        return baseProvider;
    }

    /**
     * Create appropriate file provider based on platform (placeholder)
     */
    private createFileProvider(): IFileProvider {
        // TODO: Implement file providers when needed
        // For now, return a placeholder that throws unsupported errors
        return {
            init: async () => err(new GenericError('File provider not implemented')),
            readFile: async () => err(new GenericError('File provider not implemented')),
            writeFile: async () => err(new GenericError('File provider not implemented')),
            deleteFile: async () => err(new GenericError('File provider not implemented')),
            listFiles: async () => err(new GenericError('File provider not implemented')),
            exists: async () => err(new GenericError('File provider not implemented')),
            isSupported: () => false
        };
    }

    /**
     * Create appropriate IMU provider based on platform
     */
    private async createIMUProvider(config: PlatformServicesConfig['imu']): Promise<IIMUProvider> {
        // TODO: Implement Tauri IMU provider when needed

        const provider = new WebIMUProvider();
        await provider.init(config?.permissionCallback);
        return provider;
    }

    /**
     * Create appropriate device orientation provider based on platform
     */
    private async createDeviceOrientationProvider(config: PlatformServicesConfig['deviceOrientation']): Promise<IDeviceOrientationProvider> {
        // TODO: Implement Tauri device orientation provider when needed

        const provider = new WebDeviceOrientationProvider();
        await provider.init(config?.permissionCallback);
        return provider;

    }

    /**
     * Get the platform context
     */
    getContext(): PlatformContext {
        return this.context;
    }

    /**
     * Get storage provider
     */
    getStorage(): Result<IStorageProvider, PlatformDetectionError> {
        if (!this.storageProvider) {
            return err(new PlatformDetectionError(
                'Storage provider not initialized',
                PlatformDetectionErrorCode.DETECTION_FAILED
            ));
        }
        return ok(this.storageProvider);
    }

    /**
     * Get geolocation provider
     */
    getGeolocation(): Result<IGeolocationProvider, PlatformDetectionError> {
        if (!this.geolocationProvider) {
            return err(new PlatformDetectionError(
                'Geolocation provider not initialized',
                PlatformDetectionErrorCode.DETECTION_FAILED
            ));
        }
        return ok(this.geolocationProvider);
    }

    /**
     * Get file provider
     */
    getFile(): Result<IFileProvider, PlatformDetectionError> {
        if (!this.fileProvider) {
            return err(new PlatformDetectionError(
                'File provider not initialized',
                PlatformDetectionErrorCode.DETECTION_FAILED
            ));
        }
        return ok(this.fileProvider);
    }

    /**
     * Check if services are initialized
     */
    isInitialized(): boolean {
        return this.initialized;
    }

    /**
     * Get platform capabilities
     */
    getCapabilities() {
        return this.context.capabilities;
    }

    /**
     * Get platform configuration
     */
    getConfiguration() {
        return this.context.configuration;
    }

    /**
     * Check if running in specific environment
     */
    isEnvironment(environment: RuntimeEnvironment): boolean {
        return this.context.environment === environment;
    }

    /**
     * Reset the singleton instance (for testing)
     */
    static reset(): void {
        PlatformServices.instance = null;
    }

    /**
     * Get the geolocation provider directly (for unified geolocation service)
     */
    getGeolocationProvider(): IGeolocationProvider | null {
        return this.geolocationProvider;
    }

    /**
     * Get IMU provider
     */
    getIMU(): Result<IIMUProvider, PlatformDetectionError> {
        if (!this.imuProvider) {
            return err(new PlatformDetectionError(
                'IMU provider not initialized',
                PlatformDetectionErrorCode.DETECTION_FAILED
            ));
        }
        return ok(this.imuProvider);
    }

    /**
     * Get device orientation provider
     */
    getDeviceOrientation(): Result<IDeviceOrientationProvider, PlatformDetectionError> {
        if (!this.deviceOrientationProvider) {
            return err(new PlatformDetectionError(
                'Device orientation provider not initialized',
                PlatformDetectionErrorCode.DETECTION_FAILED
            ));
        }
        return ok(this.deviceOrientationProvider);
    }
}

/**
 * Convenience function to get platform services
 */
export function getPlatformServices(): Result<PlatformServices, PlatformDetectionError> {
    return PlatformServices.getInstance();
}

/**
 * Convenience function to check if running in Tauri
 */
export function isTauri(): boolean {
    if (typeof navigator === 'undefined') return false;
    return platformDetector.detectEnvironment() === RuntimeEnvironment.TAURI;
}

/**
 * Convenience function to check if running in web environment
 */
export function isWeb(): boolean {
    if (typeof navigator === 'undefined') return false;
    const env = platformDetector.detectEnvironment();
    return env === RuntimeEnvironment.WEB || env === RuntimeEnvironment.MOBILE_WEB;
}

/**
 * Convenience function to check if running on mobile
 */
export function isMobile(): boolean {
    if (typeof navigator === 'undefined') return false;
    const context = platformDetector.getPlatformContext();
    return context.isMobile;
}

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
    };
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

    /**
     * Get the singleton instance of PlatformServices
     */
    static getInstance(config?: PlatformServicesConfig): Result<PlatformServices, PlatformDetectionError> {
        if (!PlatformServices.instance) {
            const context = platformDetector.getPlatformContext();
            const services = new PlatformServices(context);

            // Initialize providers based on platform
            const initResult = services.initializeProviders(config);
            if (initResult.isErr()) {
                return err(initResult.error);
            }

            PlatformServices.instance = services;
        }

        return ok(PlatformServices.instance);
    }

    /**
     * Initialize platform-specific providers
     */
    private initializeProviders(config?: PlatformServicesConfig): Result<void, PlatformDetectionError> {
        try {
            // Initialize storage provider
            this.storageProvider = this.createStorageProvider(config?.storage);

            // Initialize geolocation provider
            this.geolocationProvider = this.createGeolocationProvider(config?.geolocation);

            // Initialize file provider (placeholder for now)
            this.fileProvider = this.createFileProvider();

            // Initialize sensor providers
            this.imuProvider = this.createIMUProvider();
            this.deviceOrientationProvider = this.createDeviceOrientationProvider();

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
    private createGeolocationProvider(geoConfig?: PlatformServicesConfig['geolocation']): IGeolocationProvider {
        switch (this.context.environment) {
            case RuntimeEnvironment.TAURI:
                return new TauriGeolocationProvider(
                    geoConfig?.tauriHandlerName || 'get_geolocation'
                );

            case RuntimeEnvironment.WEB:
            case RuntimeEnvironment.MOBILE_WEB:
            default:
                return new WebGeolocationProvider();
        }
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
    private createIMUProvider(): IIMUProvider {
        switch (this.context.environment) {
            case RuntimeEnvironment.TAURI:
                // TODO: Implement Tauri IMU provider when needed
                // For now, return web provider as fallback
                return new WebIMUProvider();

            case RuntimeEnvironment.WEB:
            case RuntimeEnvironment.MOBILE_WEB:
            default:
                return new WebIMUProvider();
        }
    }

    /**
     * Create appropriate device orientation provider based on platform
     */
    private createDeviceOrientationProvider(): IDeviceOrientationProvider {
        switch (this.context.environment) {
            case RuntimeEnvironment.TAURI:
                // TODO: Implement Tauri device orientation provider when needed
                // For now, return web provider as fallback
                return new WebDeviceOrientationProvider();

            case RuntimeEnvironment.WEB:
            case RuntimeEnvironment.MOBILE_WEB:
            default:
                return new WebDeviceOrientationProvider();
        }
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
export function getPlatformServices(config?: PlatformServicesConfig): Result<PlatformServices, PlatformDetectionError> {
    return PlatformServices.getInstance(config);
}

/**
 * Convenience function to check if running in Tauri
 */
export function isTauri(): boolean {
    return platformDetector.detectEnvironment() === RuntimeEnvironment.TAURI;
}

/**
 * Convenience function to check if running in web environment
 */
export function isWeb(): boolean {
    const env = platformDetector.detectEnvironment();
    return env === RuntimeEnvironment.WEB || env === RuntimeEnvironment.MOBILE_WEB;
}

/**
 * Convenience function to check if running on mobile
 */
export function isMobile(): boolean {
    const context = platformDetector.getPlatformContext();
    return context.isMobile;
}

/**
 * Platform abstraction layer - Main exports
 */

// Types and interfaces
export type {
    IStorageProvider,
    IGeolocationProvider,
    IFileProvider,
    PlatformContext,
    PlatformCapabilities,
    PlatformConfiguration,
    RuntimeEnvironment
} from './types';

// Main services
export {
    PlatformServices,
    getPlatformServices,
    isTauri,
    isWeb,
    isMobile
} from './platform-services';

// Platform detection
export {
    PlatformDetector,
    platformDetector,
    getPlatformContext,
    detectEnvironment
} from './platform-detector';

// Error types
export {
    StorageError,
    StorageErrorCode,
    GeolocationProviderError,
    GeolocationProviderErrorCode,
    FileProviderError,
    FileProviderErrorCode,
    PlatformDetectionError,
    PlatformDetectionErrorCode
} from './errors';

// Provider implementations
export { TauriStorageProvider } from './providers/tauri-storage-provider';
export { WebStorageProvider } from './providers/web-storage-provider';
export { TauriGeolocationProvider } from './providers/tauri-geolocation-provider';
export { WebGeolocationProvider } from './providers/web-geolocation-provider';

// Configuration types
export type { PlatformServicesConfig } from './platform-services';

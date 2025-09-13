/**
 * Platform detection utilities for determining runtime environment
 */

import { UAParser } from 'ua-parser-js';
import { RuntimeEnvironment, type PlatformContext } from './types';
import { GenericError } from '@/libs/error-handling';
import { Result, ok, err } from 'neverthrow';

/**
 * Detects the current runtime environment
 */
export class PlatformDetector {
    private parser: UAParser;

    constructor() {
        this.parser = new UAParser(navigator.userAgent);
    }

    /**
     * Detect the current runtime environment
     */
    detectEnvironment(): RuntimeEnvironment {
        // Check for Tauri environment first
        if (this.isTauriEnvironment()) {
            return RuntimeEnvironment.TAURI;
        }

        // Check for mobile web environment
        const device = this.parser.getDevice();
        if (device.type === 'mobile') {
            return RuntimeEnvironment.MOBILE_WEB;
        }

        // Default to web environment
        return RuntimeEnvironment.WEB;
    }

    /**
     * Check if running in Tauri environment
     */
    private isTauriEnvironment(): boolean {
        return __TAURI_ENVIRONMENT__;
    }

    /**
     * Get platform context with detailed information
     */
    getPlatformContext(): PlatformContext {
        const environment = this.detectEnvironment();
        const device = this.parser.getDevice();
        const browser = this.parser.getBrowser();
        const os = this.parser.getOS();

        return {
            environment,
            capabilities: this.getPlatformCapabilities(environment),
            configuration: this.getDefaultConfiguration(environment),
            userAgent: navigator.userAgent,
            isMobile: device.type === 'mobile',
            isTablet: device.type === 'tablet',
            browser: browser.name || undefined,
            os: os.name || undefined
        };
    }

    /**
     * Get platform-specific capabilities
     */
    private getPlatformCapabilities(environment: RuntimeEnvironment) {
        const baseCapabilities = {
            storage: {
                persistent: true,
                encryption: false
            },
            geolocation: {
                native: false,
                browser: true,
                ipBased: true,
                highAccuracy: true
            },
            fileSystem: {
                read: false,
                write: false,
                native: false
            },
            network: {
                fetch: true,
                websocket: true,
                native: false
            },
            permissions: {
                geolocation: true,
                notifications: 'Notification' in window,
                camera: 'mediaDevices' in navigator,
                microphone: 'mediaDevices' in navigator
            }
        };

        switch (environment) {
            case RuntimeEnvironment.TAURI:
                return {
                    ...baseCapabilities,
                    storage: {
                        persistent: true,
                        encryption: true,
                        quota: undefined // Unlimited in Tauri
                    },
                    geolocation: {
                        native: true,
                        browser: true,
                        ipBased: true,
                        highAccuracy: true
                    },
                    fileSystem: {
                        read: true,
                        write: true,
                        native: true
                    },
                    network: {
                        fetch: true,
                        websocket: true,
                        native: true
                    },
                    permissions: {
                        ...baseCapabilities.permissions,
                        geolocation: true
                    }
                };

            case RuntimeEnvironment.MOBILE_WEB:
                return {
                    ...baseCapabilities,
                    geolocation: {
                        ...baseCapabilities.geolocation,
                        highAccuracy: false // Often limited on mobile web
                    },
                    permissions: {
                        ...baseCapabilities.permissions,
                        geolocation: true
                    }
                };

            case RuntimeEnvironment.WEB:
            default:
                return baseCapabilities;
        }
    }

    /**
     * Get default configuration for the platform
     */
    private getDefaultConfiguration(environment: RuntimeEnvironment) {
        const baseConfig = {
            storage: {
                autoSave: true
            },
            geolocation: {
                timeout: 30000,
                maximumAge: 10000,
                enableHighAccuracy: true
            },
            fileSystem: {
                maxFileSize: 10 * 1024 * 1024 // 10MB
            }
        };

        switch (environment) {
            case RuntimeEnvironment.TAURI:
                return {
                    ...baseConfig,
                    storage: {
                        ...baseConfig.storage,
                        filePath: 'user-data.json',
                        autoSave: false
                    },
                    geolocation: {
                        ...baseConfig.geolocation,
                        tauriHandler: 'get_geolocation'
                    },
                    fileSystem: {
                        ...baseConfig.fileSystem,
                        basePath: './data',
                        allowedExtensions: ['.json', '.geojson', '.gpx', '.kml']
                    }
                };

            case RuntimeEnvironment.MOBILE_WEB:
                return {
                    ...baseConfig,
                    storage: {
                        ...baseConfig.storage,
                        dbName: 'mobile-trackmaker-db',
                        storeName: 'user-data'
                    },
                    geolocation: {
                        ...baseConfig.geolocation,
                        timeout: 20000,
                        maximumAge: 5000,
                        enableHighAccuracy: false
                    }
                };

            case RuntimeEnvironment.WEB:
            default:
                return {
                    ...baseConfig,
                    storage: {
                        ...baseConfig.storage,
                        dbName: 'trackmaker-db',
                        storeName: 'user-data'
                    }
                };
        }
    }

    /**
     * Validate platform detection
     */
    validate(): Result<boolean, GenericError> {
        try {
            const context = this.getPlatformContext();

            // Basic validation
            if (!context.environment || !context.capabilities) {
                return err(new GenericError('Invalid platform detection results'));
            }

            // Log platform detection results
            console.info('[PlatformDetector] Platform detected:', {
                environment: context.environment,
                isMobile: context.isMobile,
                isTablet: context.isTablet,
                browser: context.browser,
                os: context.os
            });

            return ok(true);
        } catch (error) {
            return err(new GenericError('Platform detection failed', undefined, error as Error));
        }
    }
}

/**
 * Global platform detector instance
 */
export const platformDetector = new PlatformDetector();

/**
 * Convenience function to get current platform context
 */
export function getPlatformContext(): PlatformContext {
    return platformDetector.getPlatformContext();
}

/**
 * Convenience function to detect current environment
 */
export function detectEnvironment(): RuntimeEnvironment {
    return platformDetector.detectEnvironment();
}

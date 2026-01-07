import { Result, err, ok } from 'neverthrow';
import { GeolocationPermissionError, GeolocationUnsupportedError } from '../../error-handling/geolocation';
import type { IGeolocationProvider } from '@/libs/platform/types';

export interface PermissionPromptCallback {
    (status: PermissionState): Promise<boolean | void>;
}

export interface PermissionServiceInterface {
    getPermissionStatus(): Promise<Result<PermissionState, GeolocationPermissionError>>;
    requestPermission(promptCallback?: PermissionPromptCallback): Promise<Result<PermissionState, GeolocationPermissionError>>;
    addPermissionChangeListener(callback: (state: PermissionState) => void): () => void;
}

export class PermissionService implements PermissionServiceInterface {
    private permissionChangeListeners: Set<(state: PermissionState) => void> = new Set();
    private currentPermissionState: PermissionState | null = null;
    private platformGeolocationProvider: IGeolocationProvider | null = null;

    async getPermissionStatus(): Promise<Result<PermissionState, GeolocationPermissionError>> {
        // Use platform provider exclusively
        if (this.platformGeolocationProvider) {
            try {
                const platformResult = await this.platformGeolocationProvider.getPermissionStatus();
                if (platformResult.isOk()) {
                    this.currentPermissionState = platformResult.value;
                    return ok(platformResult.value);
                } else {
                    return err(new GeolocationPermissionError(
                        'Failed to get permission status from platform provider',
                        platformResult.error
                    ));
                }
            } catch (error) {
                return err(new GeolocationPermissionError(
                    'Platform provider permission check error',
                    error as Error
                ));
            }
        }

        // If no platform provider is available, check if geolocation is supported
        if (!navigator.geolocation) {
            return err(new GeolocationUnsupportedError('Geolocation is not supported by this browser'));
        }

        // Fallback to browser permissions API
        try {
            if (!navigator.permissions) {
                return await this.fallbackPermissionCheck();
            }

            const result = await navigator.permissions.query({ name: 'geolocation' });
            this.currentPermissionState = result.state;
            return ok(result.state);
        } catch (error) {
            return err(new GeolocationPermissionError('Failed to get permission status', error as Error));
        }
    }

    private async fallbackPermissionCheck(): Promise<Result<PermissionState, GeolocationPermissionError>> {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                () => resolve(ok('granted')),
                (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        resolve(ok('denied'));
                    } else {
                        resolve(ok('prompt'));
                    }
                },
                { timeout: 5000, maximumAge: Infinity, enableHighAccuracy: false }
            );
        });
    }

    async requestPermission(promptCallback?: PermissionPromptCallback): Promise<Result<PermissionState, GeolocationPermissionError>> {
        // Use platform provider exclusively if available
        if (this.platformGeolocationProvider) {
            try {
                const platformResult = await this.platformGeolocationProvider.requestPermission();
                if (platformResult.isOk()) {
                    this.currentPermissionState = platformResult.value;
                    return ok(platformResult.value);
                } else {
                    return err(new GeolocationPermissionError(
                        'Failed to request permission from platform provider',
                        platformResult.error
                    ));
                }
            } catch (error) {
                return err(new GeolocationPermissionError(
                    'Platform provider permission request error',
                    error as Error
                ));
            }
        }

        // Fallback to browser permissions API
        if (!navigator.permissions) {
            return this.getPermissionStatus();
        }

        try {
            const result = await navigator.permissions.query({ name: 'geolocation' });

            if (result.state === 'prompt' && promptCallback) {
                const userResponse = await promptCallback(result.state);
                if (userResponse) {
                    // User granted permission through prompt, re-check status
                    const newStatus = await this.fallbackPermissionCheck();
                    if (newStatus.isOk()) {
                        this.currentPermissionState = newStatus.value;
                        return ok(newStatus.value);
                    }
                }
            }

            this.currentPermissionState = result.state;
            return ok(result.state);
        } catch (error) {
            return err(new GeolocationPermissionError('Failed to request permission', error as Error));
        }
    }

    addPermissionChangeListener(callback: (state: PermissionState) => void): () => void {
        this.permissionChangeListeners.add(callback);

        // Set up native permission change listener if available
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'geolocation' }).then(result => {
                result.addEventListener('change', () => {
                    this.currentPermissionState = result.state;
                    this.notifyPermissionChange(result.state);
                });
            }).catch(() => {
                // Ignore errors in setting up permission change listener
            });
        }

        return () => {
            this.permissionChangeListeners.delete(callback);
        };
    }

    private notifyPermissionChange(state: PermissionState): void {
        this.permissionChangeListeners.forEach(callback => {
            try {
                callback(state);
            } catch (error) {
                console.error('Error in permission change listener:', error);
            }
        });
    }

    get currentPermission(): PermissionState | null {
        return this.currentPermissionState;
    }

    /**
     * Set the platform geolocation provider for unified permission handling
     */
    setPlatformProvider(provider: IGeolocationProvider): void {
        this.platformGeolocationProvider = provider;
    }
}

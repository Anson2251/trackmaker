import { Result, ok, err } from 'neverthrow';
import { getPlatformServices } from '@/libs/platform';
import type {
    IDeviceOrientationProvider,
    IIMUProvider,
    DeviceOrientationReading,
    IMUReading
} from '@/libs/platform';
import {
    ImuError,
    ImuUpdateServiceError,
    type OrientationUpdateHandler,
    type AccelerationUpdateHandler,
    type GyroscopeUpdateHandler
} from '../types';
import { logError, toAppError } from '@/libs/error-handling';
import { cloneDeep } from 'lodash-es';

export class ImuOrientationManager {
    private orientationProvider: IDeviceOrientationProvider | null = null;
    private motionProvider: IIMUProvider | null = null;
    private isInitialized = false;

    // Orientation
    private orientationListeners: Map<number, (orientation: DeviceOrientationReading) => void> = new Map();
    private orientationListenerCount = 0;
    private lastKnownOrientation: DeviceOrientationReading | null = null;
    // private orientationWatchId: number | null = null;

    // Acceleration
    private accelerationListeners: Map<number, (acceleration: IMUReading) => void> = new Map();
    private accelerationListenerCount = 0;
    private lastKnownAcceleration: IMUReading | null = null;
    // private accelerationWatchId: number | null = null;

    // Gyroscope
    private gyroscopeListeners: Map<number, (gyroscope: IMUReading) => void> = new Map();
    private gyroscopeListenerCount = 0;
    private lastKnownGyroscope: IMUReading | null = null;
    // private gyroscopeWatchId: number | null = null;

    async initialize(): Promise<Result<void, ImuError>> {
        if (this.isInitialized) {
            console.info("[ImuOrientationManager] Already initialized");
            return ok(undefined);
        }

        console.info("[ImuOrientationManager] Initializing IMU and orientation services");

        try {
            const platformServices = getPlatformServices();
            if (platformServices.isErr()) {
                return err(new ImuUpdateServiceError(
                    'Failed to get platform services',
                    'platform_services_failed',
                    platformServices.error
                ));
            }

            // Initialize orientation provider
            const orientationResult = platformServices.value.getDeviceOrientation();
            if (orientationResult.isOk()) {
                this.orientationProvider = orientationResult.value;
                const initResult = await this.orientationProvider.init();
                if (initResult.isErr()) {
                    console.warn("[ImuOrientationManager] Failed to initialize orientation provider:", initResult.error);
                    // Continue without orientation
                } else {
                    // Try to get initial reading
                    const current = await this.orientationProvider.getCurrentOrientation();
                    if (current.isOk() && current.value) {
                        this.lastKnownOrientation = current.value;
                    }
                }
            } else {
                console.warn("[ImuOrientationManager] No orientation provider available");
            }

            // Initialize motion provider
            const motionResult = platformServices.value.getIMU();
            if (motionResult.isOk()) {
                this.motionProvider = motionResult.value;
                const initResult = await this.motionProvider.init();
                if (initResult.isErr()) {
                    console.warn("[ImuOrientationManager] Failed to initialize motion provider:", initResult.error);
                    // Continue without motion
                } else {
                    // Try to get initial readings
                    const accCurrent = await this.motionProvider.getAccelerationReading();
                    if (accCurrent.isOk() && accCurrent.value) {
                        this.lastKnownAcceleration = accCurrent.value;
                    }
                    const gyroCurrent = await this.motionProvider.getGyroscopeReading();
                    if (gyroCurrent.isOk() && gyroCurrent.value) {
                        this.lastKnownGyroscope = gyroCurrent.value;
                    }
                }
            } else {
                console.warn("[ImuOrientationManager] No motion provider available");
            }

            this.isInitialized = true;
            console.info("[ImuOrientationManager] Initialization complete");
            return ok(undefined);

        } catch (error) {
            const appError = toAppError(error, 'Exception during IMU initialization');
            logError(appError, 'ImuOrientationManager.initialize');
            return err(new ImuUpdateServiceError(
                'Initialization exception',
                'initialization_exception',
                appError
            ));
        }
    }

    // Orientation methods

    async getCurrentOrientation(): Promise<Result<DeviceOrientationReading | null, ImuError>> {
        if (!this.isInitialized) {
            return err(new ImuUpdateServiceError('Manager not initialized', 'not_initialized'));
        }

        if (!this.orientationProvider) {
            return err(new ImuUpdateServiceError('Orientation provider unavailable', 'no_orientation_provider'));
        }

        try {
            const result = await this.orientationProvider.getCurrentOrientation();
            if (result.isOk()) {
                if (result.value) {
                    this.lastKnownOrientation = cloneDeep(result.value);
                    this.notifyOrientationListeners(result.value);
                }
                return ok(result.value);
            }
            return err(new ImuUpdateServiceError(
                'Failed to get orientation',
                'get_orientation_failed',
                result.error
            ));
        } catch (error) {
            const appError = toAppError(error, 'Exception getting orientation');
            logError(appError, 'ImuOrientationManager.getCurrentOrientation');
            return err(new ImuUpdateServiceError(
                'Orientation exception',
                'orientation_exception',
                appError
            ));
        }
    }

    async startOrientationUpdates(callback: OrientationUpdateHandler): Promise<Result<number, ImuError>> {
        if (!this.isInitialized) {
            const initResult = await this.initialize();
            if (initResult.isErr()) return err(initResult.error) as Result<number, ImuError>;
        }

        if (!this.orientationProvider) {
            return err(new ImuUpdateServiceError('Orientation provider unavailable', 'no_orientation_provider'));
        }

        try {
            // Start provider if not already
            if (this.orientationListenerCount === 0) {
                const startResult = await this.orientationProvider.start();
                if (startResult.isErr()) {
                    return err(new ImuUpdateServiceError(
                        'Failed to start orientation provider',
                        'start_orientation_failed',
                        startResult.error
                    ));
                }
            }

            // Create wrapped callback that updates state and calls user callback
            const wrappedCallback = (orientation: DeviceOrientationReading) => {
                this.doOrientationUpdate(orientation);
                callback(orientation);
            };

            const listenerId = this.orientationProvider.onOrientationChange(wrappedCallback);
            this.orientationListeners.set(listenerId, callback);
            this.orientationListenerCount++;

            console.info("[ImuOrientationManager] Orientation updates started");
            return ok(listenerId);

        } catch (error) {
            const appError = toAppError(error, 'Exception starting orientation updates');
            logError(appError, 'ImuOrientationManager.startOrientationUpdates');
            return err(new ImuUpdateServiceError(
                'Start orientation exception',
                'start_orientation_exception',
                appError
            ));
        }
    }

    stopOrientationUpdates(listenerId: number): Result<void, ImuError> {
        if (!this.orientationProvider) {
            return ok(undefined);
        }

        try {
            // Remove from provider first
            const removeResult = this.orientationProvider.removeEventListener(listenerId);
            if (removeResult.isErr()) {
                console.warn('[ImuOrientationManager] Failed to remove orientation listener from provider:', removeResult.error);
            }

            // Clean up our references
            this.orientationListeners.delete(listenerId);
            if (this.orientationListenerCount > 0) {
                this.orientationListenerCount--;
            }

            if (this.orientationListenerCount === 0) {
                this.orientationProvider.stop();
                console.info("[ImuOrientationManager] Orientation provider stopped");
            }

            console.info("[ImuOrientationManager] Orientation listener removed");
            return ok(undefined);

        } catch (error) {
            const appError = toAppError(error, 'Exception stopping orientation update');
            logError(appError, 'ImuOrientationManager.stopOrientationUpdates');
            return err(new ImuUpdateServiceError(
                'Stop orientation exception',
                'stop_orientation_exception',
                appError
            ));
        }
    }

    isOrientationServiceRunning(): boolean {
        return this.orientationListenerCount > 0;
    }

    getLastKnownOrientation(): DeviceOrientationReading | null {
        return this.lastKnownOrientation ? cloneDeep(this.lastKnownOrientation) : null;
    }

    // Acceleration methods

    async getCurrentAcceleration(): Promise<Result<IMUReading | null, ImuError>> {
        if (!this.isInitialized) {
            return err(new ImuUpdateServiceError('Manager not initialized', 'not_initialized'));
        }

        if (!this.motionProvider) {
            return err(new ImuUpdateServiceError('Motion provider unavailable', 'no_motion_provider'));
        }

        try {
            const result = await this.motionProvider.getAccelerationReading();
            if (result.isOk()) {
                if (result.value) {
                    this.lastKnownAcceleration = cloneDeep(result.value);
                    this.notifyAccelerationListeners(result.value);
                }
                return ok(result.value);
            }
            return err(new ImuUpdateServiceError(
                'Failed to get acceleration',
                'get_acceleration_failed',
                result.error
            ));
        } catch (error) {
            const appError = toAppError(error, 'Exception getting acceleration');
            logError(appError, 'ImuOrientationManager.getCurrentAcceleration');
            return err(new ImuUpdateServiceError(
                'Acceleration exception',
                'acceleration_exception',
                appError
            ));
        }
    }

    async startAccelerationUpdates(
        options: { normalizeToENU?: boolean } = {},
        callback: AccelerationUpdateHandler
    ): Promise<Result<number, ImuError>> {
        if (!this.isInitialized) {
            const initResult = await this.initialize();
            if (initResult.isErr()) return err(initResult.error) as Result<number, ImuError>;
        }

        if (!this.motionProvider) {
            return err(new ImuUpdateServiceError('Motion provider unavailable', 'no_motion_provider'));
        }

        try {
            // Start provider if not already
            if (this.accelerationListenerCount === 0) {
                const startResult = await this.motionProvider.startAcceleration(options);
                if (startResult.isErr()) {
                    return err(new ImuUpdateServiceError(
                        'Failed to start acceleration provider',
                        'start_acceleration_failed',
                        startResult.error
                    ));
                }
            }

            // Create wrapped callback that updates state and calls user callback
            const wrappedCallback = (acceleration: IMUReading) => {
                // Validate acceleration data
                if (!this.isValidIMUReading(acceleration)) {
                    console.warn('[ImuOrientationManager] Invalid acceleration data received:', acceleration);
                    return;
                }

                this.doAccelerationUpdate(acceleration);

                // Call user callback with error handling
                try {
                    callback(acceleration);
                } catch (error) {
                    console.error('[ImuOrientationManager] Error in user acceleration callback:', error);
                }
            };

            const listenerId = this.motionProvider.onAccelerationReading(wrappedCallback);
            this.accelerationListeners.set(listenerId, callback);
            this.accelerationListenerCount++;

            console.info("[ImuOrientationManager] Acceleration updates started");
            return ok(listenerId);

        } catch (error) {
            const appError = toAppError(error, 'Exception starting acceleration updates');
            logError(appError, 'ImuOrientationManager.startAccelerationUpdates');
            return err(new ImuUpdateServiceError(
                'Start acceleration exception',
                'start_acceleration_exception',
                appError
            ));
        }
    }

    stopAccelerationUpdates(listenerId: number): Result<void, ImuError> {
        if (!this.motionProvider) {
            return ok(undefined);
        }

        try {
            // Remove from provider first
            const removeResult = this.motionProvider.removeEventListener(listenerId);
            if (removeResult.isErr()) {
                console.warn('[ImuOrientationManager] Failed to remove acceleration listener from provider:', removeResult.error);
            }

            // Clean up our references
            this.accelerationListeners.delete(listenerId);
            if (this.accelerationListenerCount > 0) {
                this.accelerationListenerCount--;
            }

            if (this.accelerationListenerCount === 0) {
                this.motionProvider.stopAcceleration();
                this.lastKnownAcceleration = null; // Clear cached data
                console.info("[ImuOrientationManager] Acceleration provider stopped");
            }

            console.info("[ImuOrientationManager] Acceleration listener removed");
            return ok(undefined);

        } catch (error) {
            const appError = toAppError(error, 'Exception stopping acceleration update');
            logError(appError, 'ImuOrientationManager.stopAccelerationUpdates');
            return err(new ImuUpdateServiceError(
                'Stop acceleration exception',
                'stop_acceleration_exception',
                appError
            ));
        }
    }

    isAccelerationServiceRunning(): boolean {
        return this.accelerationListenerCount > 0;
    }

    getLastKnownAcceleration(): IMUReading | null {
        return this.lastKnownAcceleration ? cloneDeep(this.lastKnownAcceleration) : null;
    }

    // Gyroscope methods

    async getCurrentGyroscope(): Promise<Result<IMUReading | null, ImuError>> {
        if (!this.isInitialized) {
            return err(new ImuUpdateServiceError('Manager not initialized', 'not_initialized'));
        }

        if (!this.motionProvider) {
            return err(new ImuUpdateServiceError('Motion provider unavailable', 'no_motion_provider'));
        }

        try {
            const result = await this.motionProvider.getGyroscopeReading();
            if (result.isOk()) {
                if (result.value) {
                    this.lastKnownGyroscope = cloneDeep(result.value);
                    this.notifyGyroscopeListeners(result.value);
                }
                return ok(result.value);
            }
            return err(new ImuUpdateServiceError(
                'Failed to get gyroscope',
                'get_gyroscope_failed',
                result.error
            ));
        } catch (error) {
            const appError = toAppError(error, 'Exception getting gyroscope');
            logError(appError, 'ImuOrientationManager.getCurrentGyroscope');
            return err(new ImuUpdateServiceError(
                'Gyroscope exception',
                'gyroscope_exception',
                appError
            ));
        }
    }

    async startGyroscopeUpdates(
        options: { normalizeToENU?: boolean } = {},
        callback: GyroscopeUpdateHandler
    ): Promise<Result<number, ImuError>> {
        if (!this.isInitialized) {
            const initResult = await this.initialize();
            if (initResult.isErr()) return err(initResult.error) as Result<number, ImuError>;
        }

        if (!this.motionProvider) {
            return err(new ImuUpdateServiceError('Motion provider unavailable', 'no_motion_provider'));
        }

        try {
            // Start provider if not already
            if (this.gyroscopeListenerCount === 0) {
                const startResult = await this.motionProvider.startGyroscope(options);
                if (startResult.isErr()) {
                    return err(new ImuUpdateServiceError(
                        'Failed to start gyroscope provider',
                        'start_gyroscope_failed',
                        startResult.error
                    ));
                }
            }

            // Create wrapped callback that updates state and calls user callback
            const wrappedCallback = (gyroscope: IMUReading) => {
                // Validate gyroscope data
                if (!this.isValidIMUReading(gyroscope)) {
                    console.warn('[ImuOrientationManager] Invalid gyroscope data received:', gyroscope);
                    return;
                }

                this.doGyroscopeUpdate(gyroscope);

                // Call user callback with error handling
                try {
                    callback(gyroscope);
                } catch (error) {
                    console.error('[ImuOrientationManager] Error in user gyroscope callback:', error);
                }
            };

            const listenerId = this.motionProvider.onGyroscopeReading(wrappedCallback);
            this.gyroscopeListeners.set(listenerId, callback);
            this.gyroscopeListenerCount++;

            console.info("[ImuOrientationManager] Gyroscope updates started");
            return ok(listenerId);

        } catch (error) {
            const appError = toAppError(error, 'Exception starting gyroscope updates');
            logError(appError, 'ImuOrientationManager.startGyroscopeUpdates');
            return err(new ImuUpdateServiceError(
                'Start gyroscope exception',
                'start_gyroscope_exception',
                appError
            ));
        }
    }

    stopGyroscopeUpdates(listenerId: number): Result<void, ImuError> {
        if (!this.motionProvider) {
            return ok(undefined);
        }

        try {
            // Remove from provider first
            const removeResult = this.motionProvider.removeEventListener(listenerId);
            if (removeResult.isErr()) {
                console.warn('[ImuOrientationManager] Failed to remove gyroscope listener from provider:', removeResult.error);
            }

            // Clean up our references
            this.gyroscopeListeners.delete(listenerId);
            if (this.gyroscopeListenerCount > 0) {
                this.gyroscopeListenerCount--;
            }

            if (this.gyroscopeListenerCount === 0) {
                this.motionProvider.stopGyroscope();
                this.lastKnownGyroscope = null; // Clear cached data
                console.info("[ImuOrientationManager] Gyroscope provider stopped");
            }

            console.info("[ImuOrientationManager] Gyroscope listener removed");
            return ok(undefined);

        } catch (error) {
            const appError = toAppError(error, 'Exception stopping gyroscope update');
            logError(appError, 'ImuOrientationManager.stopGyroscopeUpdates');
            return err(new ImuUpdateServiceError(
                'Stop gyroscope exception',
                'stop_gyroscope_exception',
                appError
            ));
        }
    }

    isGyroscopeServiceRunning(): boolean {
        return this.gyroscopeListenerCount > 0;
    }

    getLastKnownGyroscope(): IMUReading | null {
        return this.lastKnownGyroscope ? cloneDeep(this.lastKnownGyroscope) : null;
    }

    // Convenience methods

    async getCurrentMotion(): Promise<Result<{ acceleration: IMUReading | null; gyroscope: IMUReading | null }, ImuError>> {
        const [accResult, gyroResult] = await Promise.all([
            this.getCurrentAcceleration(),
            this.getCurrentGyroscope()
        ]);

        if (accResult.isErr() && gyroResult.isErr()) {
            return err(accResult.error); // or gyro, same
        }

        return ok({
            acceleration: accResult.isOk() ? accResult.value : null,
            gyroscope: gyroResult.isOk() ? gyroResult.value : null
        });
    }

    getLastKnownMotion(): { acceleration: IMUReading | null; gyroscope: IMUReading | null } | null {
        if (!this.lastKnownAcceleration && !this.lastKnownGyroscope) {
            return null;
        }
        return {
            acceleration: this.lastKnownAcceleration ? cloneDeep(this.lastKnownAcceleration) : null,
            gyroscope: this.lastKnownGyroscope ? cloneDeep(this.lastKnownGyroscope) : null
        };
    }

    isMotionServiceRunning(): boolean {
        return this.isAccelerationServiceRunning() || this.isGyroscopeServiceRunning();
    }

    isSupported(): boolean {
        if (!this.isInitialized) {
            const platformServices = getPlatformServices();
            if (platformServices.isErr()) return false;

            const orientationResult = platformServices.value.getDeviceOrientation();
            const motionResult = platformServices.value.getIMU();

            return orientationResult.isOk() && motionResult.isOk() &&
                   orientationResult.value.isSupported() && motionResult.value.isSupported();
        }

        return !!(this.orientationProvider?.isSupported() && this.motionProvider?.isSupported());
    }

    // Additional listener methods for internal use or extra listeners

    addOrientationListener(callback: OrientationUpdateHandler): number {
        const id = Date.now() + Math.floor(Math.random() * 1000);
        this.orientationListeners.set(id, callback as (orientation: DeviceOrientationReading) => void);
        return id;
    }

    removeOrientationListener(id: number): void {
        this.orientationListeners.delete(id);
    }

    addAccelerationListener(callback: AccelerationUpdateHandler): number {
        const id = Date.now() + Math.floor(Math.random() * 1000);
        this.accelerationListeners.set(id, callback as (acceleration: IMUReading) => void);
        return id;
    }

    removeAccelerationListener(id: number): void {
        this.accelerationListeners.delete(id);
    }

    addGyroscopeListener(callback: GyroscopeUpdateHandler): number {
        const id = Date.now() + Math.floor(Math.random() * 1000);
        this.gyroscopeListeners.set(id, callback as (gyroscope: IMUReading) => void);
        return id;
    }

    removeGyroscopeListener(id: number): void {
        this.gyroscopeListeners.delete(id);
    }

    // Private update methods - similar to geolocation manager's doLocationUpdate

    private doOrientationUpdate(orientation: DeviceOrientationReading): void {
        // Validate orientation data
        if (!this.isValidOrientationReading(orientation)) {
            console.warn('[ImuOrientationManager] Invalid orientation data received:', orientation);
            return;
        }

        this.lastKnownOrientation = cloneDeep(orientation);
        this.notifyOrientationListeners(orientation);
    }

    private doAccelerationUpdate(acceleration: IMUReading): void {
        this.lastKnownAcceleration = cloneDeep(acceleration);
        this.notifyAccelerationListeners(acceleration);
    }

    private doGyroscopeUpdate(gyroscope: IMUReading): void {
        this.lastKnownGyroscope = cloneDeep(gyroscope);
        this.notifyGyroscopeListeners(gyroscope);
    }

    // Private notification methods - only notify additional listeners, not the original callback

    private notifyOrientationListeners(orientation: DeviceOrientationReading): void {
        this.orientationListeners.forEach((callback) => {
            try {
                callback(orientation);
            } catch (error) {
                console.error('[ImuOrientationManager] Error in orientation listener:', error);
            }
        });
    }

    private notifyAccelerationListeners(acceleration: IMUReading): void {
        this.accelerationListeners.forEach((callback) => {
            try {
                callback(acceleration);
            } catch (error) {
                console.error('[ImuOrientationManager] Error in acceleration listener:', error);
            }
        });
    }

    private notifyGyroscopeListeners(gyroscope: IMUReading): void {
        this.gyroscopeListeners.forEach((callback) => {
            try {
                callback(gyroscope);
            } catch (error) {
                console.error('[ImuOrientationManager] Error in gyroscope listener:', error);
            }
        });
    }

    /**
     * Validate IMU reading data to prevent crashes
     */
    private isValidIMUReading(reading: IMUReading): boolean {
        if (!reading || typeof reading !== 'object') {
            return false;
        }

        // Check for valid numeric values
        const { x, y, z, timestamp } = reading;

        return (
            typeof x === 'number' && !isNaN(x) && isFinite(x) &&
            typeof y === 'number' && !isNaN(y) && isFinite(y) &&
            typeof z === 'number' && !isNaN(z) && isFinite(z) &&
            typeof timestamp === 'number' && !isNaN(timestamp) && isFinite(timestamp) &&
            timestamp > 0 // Reasonable timestamp check
        );
    }

    /**
     * Validate orientation reading data to prevent crashes
     */
    private isValidOrientationReading(reading: DeviceOrientationReading): boolean {
        if (!reading || typeof reading !== 'object') {
            return false;
        }

        // Check for valid numeric values
        const { alpha, beta, gamma, timestamp } = reading;

        return (
            typeof alpha === 'number' && !isNaN(alpha) && isFinite(alpha) &&
            typeof beta === 'number' && !isNaN(beta) && isFinite(beta) &&
            typeof gamma === 'number' && !isNaN(gamma) && isFinite(gamma) &&
            typeof timestamp === 'number' && !isNaN(timestamp) && isFinite(timestamp) &&
            timestamp > 0 // Reasonable timestamp check
        );
    }
}

export const imuOrientationManager = new ImuOrientationManager();

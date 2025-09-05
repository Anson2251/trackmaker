import {
    type GeographicPointType,
    type GeographicPointWithMotionType,
    type MotionAwareGeolocationBackend,
    LocationResponseErrorEnum,
    type LocationResponseErrorType
} from "../types";
import { GPSMotionKalmanFilter, type GPSMotionMeasurement, type DeviceMotionData } from "../kalman-filter";
import { deviceMotionService } from "../device-motion-service";
import PlatformInfo from '@/utils/platform';
import { storeGet } from "@/libs/store";
import type { Settings } from "@/store/settings-store";
import { wgs2gcj } from "../conversion";

/**
 * Kalman filter enhanced geolocation backend that fuses GPS and device motion data
 */
export class KalmanFilterGeolocationBackend implements MotionAwareGeolocationBackend {
    private platform = new PlatformInfo();
    private kalmanFilter: GPSMotionKalmanFilter | null = null;
    private motionData: DeviceMotionData | null = null;
    private isMotionServiceStarted = false;
    private lastGpsPosition: GeographicPointWithMotionType | null = null;
    private watchId = 0;
    private activeWatches = new Map<number, (position: GeographicPointType | GeographicPointWithMotionType) => void>();

    private get isIOS() {
        return this.platform.os.toLowerCase().includes('ios');
    }

    private get isMobile() {
        return this.platform.isMobile || this.platform.isTablet;
    }

    private getOptions() {
        return {
            enableHighAccuracy: !this.isMobile,
            timeout: this.isMobile ? 20000 : 30000,
            maximumAge: this.isMobile ? 5000 : 10000
        };
    }

    private validateEnvironment() {
        if (!navigator.geolocation) {
            throw new Error("Geolocation is not supported by this browser.");
        }
        if (this.isIOS && window.location.protocol !== 'https:') {
            throw {
                code: LocationResponseErrorEnum.IOS_HTTPS_REQUIRED,
                message: "Geolocation requires HTTPS on iOS"
            };
        }
    }

    async getPermissionStatus() {
        if (!navigator.permissions) {
            console.warn("navigator.permissions is not supported in this browser");
            return new Promise<"granted" | "denied" | "prompt">((resolve) => {
                navigator.geolocation.getCurrentPosition(
                    () => resolve("granted"),
                    (error) => {
                        if (error.code === error.PERMISSION_DENIED) {
                            resolve("denied");
                        } else {
                            resolve("prompt");
                        }
                    },
                    {
                        timeout: 5000,
                        maximumAge: Infinity,
                        enableHighAccuracy: false
                    }
                );
            });
        }

        const result = await navigator.permissions.query({ name: 'geolocation' });
        const status = result.state;
        console.log("GPS permission status: ", status);
        return status;
    }

    /**
     * Start device motion service if available
     */
    private async startMotionService(): Promise<boolean> {
        if (this.isMotionServiceStarted) {
            return true;
        }

        try {
            const motionService = deviceMotionService;
            const started = await motionService.start();

            if (started) {
                // Add listener for motion data updates
                motionService.addListener((data) => {
                    this.motionData = data;
                });

                this.isMotionServiceStarted = true;
                console.info('[KalmanFilterGPS] Device motion service started');
            }

            return started;
        } catch (error) {
            console.warn('[KalmanFilterGPS] Failed to start device motion service:', error);
            return false;
        }
    }

    /**
     * Stop device motion service
     */
    private stopMotionService(): void {
        if (this.isMotionServiceStarted) {
            deviceMotionService.stop();
            this.isMotionServiceStarted = false;
            this.motionData = null;
            console.info('[KalmanFilterGPS] Device motion service stopped');
        }
    }

    /**
     * Create GPS motion measurement from GPS position and motion data
     */
    private createMeasurement(gpsPosition: GeographicPointWithMotionType): GPSMotionMeasurement {
        return {
            gps: {
                latitude: gpsPosition.latitude,
                longitude: gpsPosition.longitude,
                accuracy: gpsPosition.accuracy,
                speed: gpsPosition.speed,
                heading: gpsPosition.heading,
                timestamp: Date.now()
            },
            motion: this.motionData
        };
    }

    /**
     * Apply Kalman filter to GPS position
     */
    private applyKalmanFilter(gpsPosition: GeographicPointWithMotionType): GeographicPointWithMotionType {
        if (!this.kalmanFilter) {
            // Initialize Kalman filter with first GPS position
            this.kalmanFilter = new GPSMotionKalmanFilter(gpsPosition.latitude, gpsPosition.longitude);
            this.lastGpsPosition = gpsPosition;
            return gpsPosition;
        }

        // Create measurement from GPS and motion data
        const measurement = this.createMeasurement(gpsPosition);

        // Predict step (use motion data if available)
        this.kalmanFilter.predict(this.motionData);

        // Update step with GPS measurement
        this.kalmanFilter.update(measurement);

        // Get filtered state
        const filteredState = this.kalmanFilter.getState();

        // Create enhanced position with filtered data
        const filteredPosition: GeographicPointWithMotionType = {
            latitude: filteredState.latitude,
            longitude: filteredState.longitude,
            accuracy: this.kalmanFilter.getPositionAccuracy(),
            speed: Math.sqrt(filteredState.velocityNorth ** 2 + filteredState.velocityEast ** 2),
            heading: Math.atan2(filteredState.velocityEast, filteredState.velocityNorth) * 180 / Math.PI,
            altitude: gpsPosition.altitude,
            altitudeAccuracy: gpsPosition.altitudeAccuracy,
            motionData: this.motionData || undefined
        };

        this.lastGpsPosition = filteredPosition;
        return filteredPosition;
    }

    async getCurrentPosition(): Promise<GeographicPointType> {
        const positionWithMotion = await this.getCurrentPositionWithMotion();
        return {
            latitude: positionWithMotion.latitude,
            longitude: positionWithMotion.longitude
        };
    }

    async getCurrentPositionWithMotion(): Promise<GeographicPointWithMotionType> {
        try {
            this.validateEnvironment();
        } catch (error) {
            console.error("[KalmanFilterGPS] Environment validation failed");
            return Promise.reject(error);
        }

        // Start motion service if available
        await this.startMotionService();

        const geolocationCorrection = (await storeGet<Settings>('settings'))?.geolocationCorrection as boolean ?? false;
        const options = this.getOptions();
        console.info("[KalmanFilterGPS] Requesting current position from GPS");

        return new Promise<GeographicPointWithMotionType>((resolve, reject: (reason: LocationResponseErrorType) => void) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.info("[KalmanFilterGPS] Successfully retrieved current position");

                    // Create enhanced position with motion data
                    const enhancedPosition: GeographicPointWithMotionType = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy,
                        speed: position.coords.speed,
                        heading: position.coords.heading,
                        altitude: position.coords.altitude,
                        altitudeAccuracy: position.coords.altitudeAccuracy,
                        motionData: this.motionData || undefined
                    };

                    // Apply Kalman filter
                    const filteredPosition = this.applyKalmanFilter(enhancedPosition);

                    if (geolocationCorrection) {
                        const corrected = wgs2gcj({
                            latitude: filteredPosition.latitude,
                            longitude: filteredPosition.longitude
                        });

                        filteredPosition.latitude = corrected.latitude;
                        filteredPosition.longitude = corrected.longitude;
                    }

                    resolve(filteredPosition);
                },
                (error) => {
                    console.error(`[KalmanFilterGPS] Failed to get current position: code ${error.code}`);
                    reject({
                        code: error.code,
                        message: error.message
                    });
                },
                options
            );
        });
    }

    async watchPosition(callback: (location: GeographicPointType) => void): Promise<number> {
        const motionCallback = (position: GeographicPointWithMotionType) => {
            callback({
                latitude: position.latitude,
                longitude: position.longitude
            });
        };

        return this.watchPositionWithMotion(motionCallback);
    }

    async watchPositionWithMotion(callback: (location: GeographicPointWithMotionType) => void): Promise<number> {
        try {
            this.validateEnvironment();
        } catch (error) {
            console.error("[KalmanFilterGPS] Environment validation failed for watch position");
            return Promise.reject(error);
        }

        // Start motion service if available
        await this.startMotionService();

        const options = this.getOptions();
        console.info("[KalmanFilterGPS] Starting position watch with Kalman filter");

        const compatibilityMode = (await storeGet<Settings>('settings'))?.watchCompatibilityMode as boolean ?? true;
        const geolocationCorrection = (await storeGet<Settings>('settings'))?.geolocationCorrection as boolean ?? false;

        return new Promise<number>((resolve) => {
            this.watchId++;
            const currentWatchId = this.watchId;

            if (compatibilityMode) {
                console.info("[KalmanFilterGPS] Using compatibility mode for position watch");

                const updatePosition = async () => {
                    try {
                        const newPosition = await this.getCurrentPositionWithMotion();

                        if (this.lastGpsPosition &&
                            this.lastGpsPosition.latitude === newPosition.latitude &&
                            this.lastGpsPosition.longitude === newPosition.longitude) {
                            return; // Position unchanged
                        }

                        this.lastGpsPosition = newPosition;
                        console.info("[KalmanFilterGPS] Position updated via compatibility mode");
                        callback(newPosition);
                    } catch (error) {
                        console.error("[KalmanFilterGPS] Error in compatibility mode watch:", error);
                    }
                };

                // Store the update function so we can clear it later
                const updateFunction = updatePosition as unknown as { intervalId?: ReturnType<typeof setInterval> };
                this.activeWatches.set(currentWatchId, updatePosition);

                // Start periodic updates
                const intervalId = setInterval(updatePosition, 5000);

                // Store interval ID for cleanup
                updateFunction.intervalId = intervalId;

                resolve(currentWatchId);
            } else {
                console.info("[KalmanFilterGPS] Using native watch with Kalman filter");

                const watchId = navigator.geolocation.watchPosition(
                    (position) => {
                        console.info("[KalmanFilterGPS] Position updated via native watch");

                        // Create enhanced position with motion data
                        const enhancedPosition: GeographicPointWithMotionType = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            accuracy: position.coords.accuracy,
                            speed: position.coords.speed,
                            heading: position.coords.heading,
                            altitude: position.coords.altitude,
                            altitudeAccuracy: position.coords.altitudeAccuracy,
                            motionData: this.motionData || undefined
                        };

                        // Apply Kalman filter
                        const filteredPosition = this.applyKalmanFilter(enhancedPosition);

                        if (geolocationCorrection) {
                            const corrected = wgs2gcj({
                                latitude: filteredPosition.latitude,
                                longitude: filteredPosition.longitude
                            });

                            filteredPosition.latitude = corrected.latitude;
                            filteredPosition.longitude = corrected.longitude;
                        }

                        callback(filteredPosition);
                    },
                    (error) => {
                        console.error("[KalmanFilterGPS] Error in native watch:", error);
                        throw new Error(`Error while watching the geolocation [Kalman Filter GPS]. Code: ${error.code}, Msg: ${error.message}`);
                    },
                    options
                );

                resolve(watchId);
            }
        });
    }

    clearWatch(channelId: number): void {
        console.info("[KalmanFilterGPS] Clearing position watch");

        // Check if this is a compatibility mode watch
        const updateFunction = this.activeWatches.get(channelId);
        const updateFunc = updateFunction as unknown as { intervalId?: number };
        if (updateFunction && updateFunc.intervalId) {
            clearInterval(updateFunc.intervalId);
            this.activeWatches.delete(channelId);
        } else {
            // Native watch
            navigator.geolocation.clearWatch(channelId);
        }

        // Stop motion service if no more watches are active
        if (this.activeWatches.size === 0) {
            this.stopMotionService();
        }
    }
}

export default KalmanFilterGeolocationBackend;

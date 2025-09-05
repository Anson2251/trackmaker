import { ResultAsync } from 'neverthrow'
import { UpdateService } from './update-service';
import type { GeographicPointType, GeographicPointWithMotionType, MotionAwareGeolocationBackend } from './types';

export function locate(): ResultAsync<GeolocationPosition, GeolocationPositionError> {
	return ResultAsync.fromPromise(
		new Promise<GeolocationPosition>((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		}),
		(error: unknown) => error as GeolocationPositionError
	)
}

export function watch(callback: (position: GeolocationPosition) => void): number {
	return navigator.geolocation.watchPosition(callback, () => {
		console.warn("Geolocation watch position failed.")
	});
}

export function unwatch(id: number): void {
	navigator.geolocation.clearWatch(id);
}

// Export Kalman filter enhanced services
export { GPSMotionKalmanFilter, type GPSMotionMeasurement, type DeviceMotionData, type KalmanFilterState } from './kalman-filter';
export { deviceMotionService, type DeviceMotionService } from './device-motion-service';
export { KalmanFilterGeolocationBackend } from './backends/kalman-filter-gps';
export type { GeographicPointType, GeographicPointWithMotionType, MotionAwareGeolocationBackend } from './types';

/**
 * Enhanced geolocation service with Kalman filter support
 */
export class EnhancedGeolocationService {
    private updateService: UpdateService;

    constructor() {
        this.updateService = new UpdateService();
    }

    /**
     * Build the enhanced geolocation service
     */
    async build(useKalmanFilter: boolean = true): Promise<void> {
        // Configure to use Kalman filter
        const service = this.updateService as UpdateService & { useKalmanFilter?: boolean };
        service.useKalmanFilter = useKalmanFilter;

        await this.updateService.build();
    }

    /**
     * Get current position with optional motion data
     */
    async getCurrentPosition(): Promise<GeographicPointType> {
        return this.updateService.present;
    }

    /**
     * Get current position with motion data (if Kalman filter is enabled)
     */
    async getCurrentPositionWithMotion(): Promise<GeographicPointWithMotionType> {
        if (!this.updateService.backend) {
            throw new Error('Geolocation service not built');
        }

        // Check if backend supports motion data
        const backend = this.updateService.backend as MotionAwareGeolocationBackend;
        if (backend && backend.getCurrentPositionWithMotion) {
            return backend.getCurrentPositionWithMotion();
        } else {
            // Fallback to regular position
            const position = await this.updateService.present;
            return {
                ...position,
                accuracy: 0,
                speed: null,
                heading: null,
                altitude: null,
                altitudeAccuracy: null
            };
        }
    }

    /**
     * Start watching position
     */
    start(): Promise<number> {
        return this.updateService.start() as Promise<number>;
    }

    /**
     * Stop watching position
     */
    stop(handler: number): void {
        this.updateService.stop(handler);
    }

    /**
     * Add location change listener
     */
    addListener(callback: (location: GeographicPointType) => void): number {
        return this.updateService.addListener(callback);
    }

    /**
     * Remove location change listener
     */
    removeListener(id: number): void {
        this.updateService.removeListener(id);
    }

    /**
     * Check if service is running
     */
    get isStarted(): boolean {
        return this.updateService.isStarted;
    }

    /**
     * Get current position
     */
    get present(): GeographicPointType {
        return this.updateService.present;
    }
}

// Export the enhanced service as default
export default EnhancedGeolocationService;


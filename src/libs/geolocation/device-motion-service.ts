import type { DeviceMotionData } from './kalman-filter';

/**
 * Device motion service for accessing accelerometer and gyroscope data
 */
export class DeviceMotionService {
    private static instance: DeviceMotionService;
    private isListening = false;
    private lastMotionData: DeviceMotionData | null = null;
    private listeners: Set<(data: DeviceMotionData) => void> = new Set();
    private updateInterval = 50; // ms (20 Hz update rate)
    private intervalId: number | null = null;

    private constructor() {}

    /**
     * Get singleton instance of the service
     */
    public static getInstance(): DeviceMotionService {
        if (!DeviceMotionService.instance) {
            DeviceMotionService.instance = new DeviceMotionService();
        }
        return DeviceMotionService.instance;
    }

    /**
     * Check if device motion is supported
     */
    public static isSupported(): boolean {
        return typeof window !== 'undefined' &&
               'DeviceMotionEvent' in window &&
               'DeviceOrientationEvent' in window;
    }

    /**
     * Request permission for device motion (iOS 13+ requirement)
     */
    public static async requestPermission(): Promise<boolean> {
        if (!DeviceMotionService.isSupported()) {
            console.warn('[DeviceMotion] Device motion not supported');
            return false;
        }

        // Check if we need to request permission (iOS 13+)
        const deviceMotionEvent = DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> };
        if (typeof deviceMotionEvent.requestPermission === 'function') {
            try {
                const permission = await deviceMotionEvent.requestPermission();
                return permission === 'granted';
            } catch (error) {
                console.error('[DeviceMotion] Failed to request permission:', error);
                return false;
            }
        }

        // For other platforms, assume permission is granted
        return true;
    }

    /**
     * Start listening to device motion events
     */
    public async start(): Promise<boolean> {
        if (this.isListening) {
            console.info('[DeviceMotion] Already listening');
            return true;
        }

        if (!DeviceMotionService.isSupported()) {
            console.warn('[DeviceMotion] Device motion not supported');
            return false;
        }

        try {
            // Request permission if needed
            const hasPermission = await DeviceMotionService.requestPermission();
            if (!hasPermission) {
                console.warn('[DeviceMotion] Permission denied');
                return false;
            }

            // Start listening to device motion events
            window.addEventListener('devicemotion', this.handleDeviceMotion, true);

            // Also listen to device orientation for rotation rates
            window.addEventListener('deviceorientation', this.handleDeviceOrientation, true);

            this.isListening = true;
            console.info('[DeviceMotion] Started listening to device motion');

            // Start periodic updates
            this.startPeriodicUpdates();

            return true;
        } catch (error) {
            console.error('[DeviceMotion] Failed to start:', error);
            return false;
        }
    }

    /**
     * Stop listening to device motion events
     */
    public stop(): void {
        if (!this.isListening) {
            return;
        }

        window.removeEventListener('devicemotion', this.handleDeviceMotion, true);
        window.removeEventListener('deviceorientation', this.handleDeviceOrientation, true);

        this.stopPeriodicUpdates();
        this.isListening = false;
        console.info('[DeviceMotion] Stopped listening');
    }

    /**
     * Add a listener for motion data updates
     */
    public addListener(callback: (data: DeviceMotionData) => void): () => void {
        this.listeners.add(callback);

        // Return unsubscribe function
        return () => {
            this.listeners.delete(callback);
        };
    }

    /**
     * Get the last known motion data
     */
    public getLastMotionData(): DeviceMotionData | null {
        return this.lastMotionData;
    }

    /**
     * Check if service is currently listening
     */
    public isActive(): boolean {
        return this.isListening;
    }

    /**
     * Handle device motion events
     */
    private handleDeviceMotion = (event: DeviceMotionEvent): void => {
        if (!this.isListening) return;

        // Get acceleration data
        const acceleration = {
            x: event.acceleration?.x || 0,
            y: event.acceleration?.y || 0,
            z: event.acceleration?.z || 0
        };

        // Get rotation rate data
        const rotationRate = {
            alpha: event.rotationRate?.alpha || 0,
            beta: event.rotationRate?.beta || 0,
            gamma: event.rotationRate?.gamma || 0
        };

        // Create motion data object
        const motionData: DeviceMotionData = {
            acceleration,
            rotationRate,
            timestamp: Date.now()
        };

        this.lastMotionData = motionData;
    };

    /**
     * Handle device orientation events (for additional rotation data)
     */
    private handleDeviceOrientation = (): void => {
        if (!this.isListening) return;

        // This can be used to enhance rotation rate data if needed
        // For now, we'll just use it as a fallback or additional source
    };

    /**
     * Start periodic updates to listeners
     */
    private startPeriodicUpdates(): void {
        this.stopPeriodicUpdates();

        this.intervalId = window.setInterval(() => {
            const motionData = this.lastMotionData;
            if (motionData) {
                // Notify all listeners with the latest motion data
                this.listeners.forEach(callback => {
                    try {
                        callback(motionData);
                    } catch (error) {
                        console.error('[DeviceMotion] Error in listener callback:', error);
                    }
                });
            }
        }, this.updateInterval);
    }

    /**
     * Stop periodic updates
     */
    private stopPeriodicUpdates(): void {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    /**
     * Calibrate the motion sensors (zero out any bias)
     */
    public calibrate(): void {
        // This would typically involve collecting samples over a period
        // and calculating average offsets to subtract from future readings
        console.info('[DeviceMotion] Calibration requested (not implemented)');
    }

    /**
     * Set update interval (in milliseconds)
     */
    public setUpdateInterval(interval: number): void {
        this.updateInterval = Math.max(16, interval); // Minimum 16ms (60Hz)

        if (this.isListening) {
            this.stopPeriodicUpdates();
            this.startPeriodicUpdates();
        }
    }
}

// Export singleton instance and types
export const deviceMotionService = DeviceMotionService.getInstance();
export default deviceMotionService;

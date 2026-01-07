/**
 * Kalman filter implementation for GPS coordinate filtering
 * Based on the asynchronous Kalman filter design document
 * Uses ml-matrix for efficient matrix calculations
 * Uses proj4rs for accurate coordinate transformations
 */

import { Matrix, inverse } from 'ml-matrix';
import { CoordinateTransformer } from './coordinate-transformer';
import type { GeoCoordinate } from '@/utils/proj4-distance';

/**
 * State vector for Kalman filter [px, py, vx, vy]
 * px, py: position (x, y in meters)
 * vx, vy: velocity (x, y in m/s)
 */
export interface KalmanState {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    covariance: Matrix;
    timestamp: number;
}

/**
 * IMU reading with acceleration data
 */
export interface IMUReading {
    acceleration: { x: number; y: number; z: number };
    timestamp: number;
}

/**
 * GPS reading with accuracy information
 */
export interface GPSReading {
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: number;
}

/**
 * Kalman filter configuration
 */
export interface KalmanConfig {
    sigmaAcceleration: number; // Process noise for acceleration
    initialPositionUncertainty: number; // Initial position uncertainty
    initialVelocityUncertainty: number; // Initial velocity uncertainty
}

export class KalmanFilter {
    private state: KalmanState;
    private config: KalmanConfig;
    private coordinateTransformer: CoordinateTransformer;

    constructor(config: Partial<KalmanConfig>) {
        this.config = {
            sigmaAcceleration: 4.0, // Suitable for driving/cycling/walking
            initialPositionUncertainty: 20, // 20 meters initial uncertainty
            initialVelocityUncertainty: 4, // 4 m/s initial velocity uncertainty
            ...config
        };

        // Initialize coordinate transformer
        this.coordinateTransformer = new CoordinateTransformer();

        // Initialize state with zeros
        this.state = {
            position: { x: 0, y: 0 },
            velocity: { x: 0, y: 0 },
            covariance: new Matrix([
                [Math.pow(this.config.initialPositionUncertainty, 2), 0, 0, 0],
                [0, Math.pow(this.config.initialPositionUncertainty, 2), 0, 0],
                [0, 0, Math.pow(this.config.initialVelocityUncertainty, 2), 0],
                [0, 0, 0, Math.pow(this.config.initialVelocityUncertainty, 2)]
            ]),
            timestamp: performance.now()
        };
    }

    /**
     * Initialize the filter with the first GPS reading
     */
    public async initialize(gpsReading: GPSReading): Promise<void> {
        // Validate GPS reading - reject invalid coordinates
        if (gpsReading.latitude === 0 && gpsReading.longitude === 0) {
            throw new Error('Invalid GPS coordinates: Cannot initialize Kalman filter with (0, 0)');
        }

        // Set reference point for coordinate transformer if not set
        if (!this.coordinateTransformer.isInitialized()) {
            const referencePoint: GeoCoordinate = {
                longitude: gpsReading.longitude,
                latitude: gpsReading.latitude
            };
            this.coordinateTransformer.setReferencePoint(referencePoint);
        }

        // Convert GPS to local coordinates using proj4
        const cartesian = await this.coordinateTransformer.geographicToLocal({
            longitude: gpsReading.longitude,
            latitude: gpsReading.latitude
        });

        this.state.position = { x: cartesian.x, y: cartesian.y };
        this.state.timestamp = gpsReading.timestamp;

        // Set initial covariance based on GPS accuracy
        const sigmaGPS = this.gpsAccuracyToSigma(gpsReading.accuracy);
        this.state.covariance = new Matrix([
            [sigmaGPS * sigmaGPS, 0, 0, 0],
            [0, sigmaGPS * sigmaGPS, 0, 0],
            [0, 0, Math.pow(this.config.initialVelocityUncertainty, 2), 0],
            [0, 0, 0, Math.pow(this.config.initialVelocityUncertainty, 2)]
        ]);
    }

    /**
     * Update the filter with a new GPS reading
     */
    public async updateWithGPS(gpsReading: GPSReading): Promise<KalmanState> {
        // Validate GPS reading - reject invalid coordinates
        if (gpsReading.latitude === 0 && gpsReading.longitude === 0) {
            console.warn('[KalmanFilter] Ignoring invalid GPS coordinates (0, 0)');
            return this.state;
        }

        if (!this.coordinateTransformer.isInitialized()) {
            await this.initialize(gpsReading);
            return this.state;
        }

        // Predict step
        const dt = (gpsReading.timestamp - this.state.timestamp) / 1000; // Convert to seconds
        this.predict(dt);

        // Update step with GPS measurement
        await this.updateGPS(gpsReading);

        this.state.timestamp = gpsReading.timestamp;
        return this.state;
    }

    /**
     * Update the filter with IMU acceleration data
     */
    public updateWithIMU(imuReading: IMUReading): KalmanState {
        if (!this.coordinateTransformer.isInitialized()) {
            return this.state; // Not initialized yet
        }

        // Predict step with IMU control input
        const dt = (imuReading.timestamp - this.state.timestamp) / 1000; // Convert to seconds
        this.predict(dt, imuReading.acceleration);

        this.state.timestamp = imuReading.timestamp;
        return this.state;
    }

    /**
     * Get current filtered position in latitude/longitude
     */
    public async getFilteredPosition(): Promise<{ latitude: number; longitude: number }> {
        if (!this.coordinateTransformer.isInitialized()) {
            throw new Error('Kalman filter not initialized - cannot get filtered position');
        }

        const geographic = await this.coordinateTransformer.localToGeographic(this.state.position);
        return {
            latitude: geographic.latitude,
            longitude: geographic.longitude
        };
    }

    /**
     * Get current state
     */
    public getState(): KalmanState {
        return { ...this.state };
    }

    /**
     * Get the last calculated Kalman gain matrix
     * Returns null if no GPS update has been processed yet
     */
    public getLastKalmanGain(): Matrix | null {
        // The Kalman gain is calculated during the updateGPS step
        // We need to store it to expose it later
        return this.lastKalmanGain || null;
    }

    private lastKalmanGain: Matrix | null = null;

    /**
     * Predict step of Kalman filter
     */
    private predict(dt: number, acceleration?: { x: number; y: number }): void {
        // State transition matrix F
        const F = new Matrix([
            [1, 0, dt, 0],
            [0, 1, 0, dt],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        // Control matrix B
        const B = new Matrix([
            [0.5 * dt * dt, 0],
            [0, 0.5 * dt * dt],
            [dt, 0],
            [0, dt]
        ]);

        // Control input u (acceleration)
        const u = new Matrix([
            [acceleration ? acceleration.x : 0],
            [acceleration ? acceleration.y : 0]
        ]);

        // Process noise covariance Q
        const sigmaA = this.config.sigmaAcceleration;
        const Q = new Matrix([
            [Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2, 0],
            [0, Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2],
            [Math.pow(dt, 3) / 2, 0, dt * dt, 0],
            [0, Math.pow(dt, 3) / 2, 0, dt * dt]
        ]).mul(sigmaA * sigmaA);

        // State vector [px, py, vx, vy]
        const x = new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y]
        ]);

        // Predicted state: x_pred = F * x + B * u
        const xPred = F.mmul(x).add(B.mmul(u));

        // Predicted covariance: P_pred = F * P * F^T + Q
        const PPred = F.mmul(this.state.covariance).mmul(F.transpose()).add(Q);

        // Update state
        this.state.position = { x: xPred.get(0, 0), y: xPred.get(1, 0) };
        this.state.velocity = { x: xPred.get(2, 0), y: xPred.get(3, 0) };
        this.state.covariance = PPred;
    }

    /**
     * Update step with GPS measurement
     */
    private async updateGPS(gpsReading: GPSReading): Promise<void> {
        // Measurement matrix H (we only measure position, not velocity)
        const H = new Matrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0]
        ]);

        // Convert GPS to local coordinates using proj4
        const projected = await this.coordinateTransformer.geographicToLocal({
            longitude: gpsReading.longitude,
            latitude: gpsReading.latitude
        });
        const measurement = new Matrix([
            [projected.x],
            [projected.y]
        ]);

        // Measurement noise covariance R
        const sigmaGPS = this.gpsAccuracyToSigma(gpsReading.accuracy);
        const R = new Matrix([
            [sigmaGPS * sigmaGPS, 0],
            [0, sigmaGPS * sigmaGPS]
        ]);

        // State vector [px, py, vx, vy]
        const x = new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y]
        ]);

        // Expected measurement: H * x
        const expectedMeasurement = H.mmul(x);

        // Innovation covariance: S = H * P * H^T + R
        const S = H.mmul(this.state.covariance).mmul(H.transpose()).add(R);

        // Kalman gain: K = P * H^T * S^(-1)
        const K = this.state.covariance.mmul(H.transpose()).mmul(inverse(S));

        // Store the Kalman gain for debugging/monitoring
        this.lastKalmanGain = K;

        // Innovation: y = z - H * x
        const innovation = measurement.sub(expectedMeasurement);

        // Updated state: x = x + K * y
        const updatedState = x.add(K.mmul(innovation));

        // Updated covariance: P = (I - K * H) * P
        const I = Matrix.eye(4);
        const updatedCovariance = I.sub(K.mmul(H)).mmul(this.state.covariance);

        // Update state
        this.state.position = { x: updatedState.get(0, 0), y: updatedState.get(1, 0) };
        this.state.velocity = { x: updatedState.get(2, 0), y: updatedState.get(3, 0) };
        this.state.covariance = updatedCovariance;
    }

    /**
     * Convert GPS accuracy to standard deviation
     * Uses the formula from the design document: σ² = accuracy² / (2 * ln(20))
     */
    private gpsAccuracyToSigma(accuracy: number): number {
        return accuracy / Math.sqrt(2 * Math.log(20));
    }
}

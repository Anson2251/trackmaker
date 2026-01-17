import { Matrix, inverse } from 'ml-matrix';
import type { GPSReading, IMUReading } from '../types';
import { CoordinateTransformer } from '../utils/coordinate-transformer';

export interface KalmanState {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    acceleration: { x: number; y: number };
    covariance: Matrix;
    timestamp: number;
}

export interface KalmanConfig {
    sigmaAcceleration: number;
    initialPositionUncertainty: number;
    initialVelocityUncertainty: number;
    gpsSpeedUncertainty?: number; // meters per second
    imuAccelerationUncertainty?: number; // meters per second squared
    debugEnabled?: boolean;
}

export class PureKalmanFilter {
    private state: KalmanState;
    private config: KalmanConfig;
    private coordinateTransformer: CoordinateTransformer;
    private lastKalmanGain: Matrix | null = null;
    private isInitialized = false;
    private debugEnabled = false;

    constructor(config: Partial<KalmanConfig>) {
        this.config = {
            sigmaAcceleration: 0.1,
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 10,
            gpsSpeedUncertainty: 2.0,
            imuAccelerationUncertainty: 4.0,
            ...config
        };

        this.coordinateTransformer = new CoordinateTransformer();
        this.state = this.createInitialState();
    }

    private createInitialState(): KalmanState {
        return {
            position: { x: 0, y: 0 },
            velocity: { x: 0, y: 0 },
            acceleration: { x: 0, y: 0 },
            covariance: new Matrix([
                [Math.pow(this.config.initialPositionUncertainty, 2), 0, 0, 0, 0, 0],
                [0, Math.pow(this.config.initialPositionUncertainty, 2), 0, 0, 0, 0],
                [0, 0, Math.pow(this.config.initialVelocityUncertainty, 2), 0, 0, 0],
                [0, 0, 0, Math.pow(this.config.initialVelocityUncertainty, 2), 0, 0],
                [0, 0, 0, 0, Math.pow(this.config.sigmaAcceleration, 2), 0],
                [0, 0, 0, 0, 0, Math.pow(this.config.sigmaAcceleration, 2)]
            ]),
            timestamp: performance.now()
        };
    }



    async initialize(gpsReading: GPSReading): Promise<void> {
        if (gpsReading.latitude === 0 && gpsReading.longitude === 0) {
            throw new Error('Invalid GPS coordinates: Cannot initialize Kalman filter with (0, 0)');
        }

        if (!this.coordinateTransformer.isInitialized()) {
            this.coordinateTransformer.setReferencePoint({
                longitude: gpsReading.longitude,
                latitude: gpsReading.latitude
            });
        }

        const cartesian = await this.coordinateTransformer.geographicToLocal({
            longitude: gpsReading.longitude,
            latitude: gpsReading.latitude
        });

        this.state.position = { x: cartesian.x, y: cartesian.y };
        this.state.timestamp = gpsReading.timestamp;

        // Set initial velocity from GPS if available
        const hasVelocity = gpsReading.speed !== undefined && gpsReading.speed !== null &&
                           gpsReading.heading !== undefined && gpsReading.heading !== null;
        if (hasVelocity) {
            const velocity = this.gpsVelocityToLocal(gpsReading.speed!, gpsReading.heading!);
            this.state.velocity = { x: velocity.x, y: velocity.y };
        }

        const sigmaGPS = this.gpsAccuracyToSigma(gpsReading.accuracy);
        const velocityUncertainty = hasVelocity ? this.config.gpsSpeedUncertainty! : this.config.initialVelocityUncertainty;
        const accelerationUncertainty = this.config.sigmaAcceleration;
        this.state.covariance = new Matrix([
            [sigmaGPS * sigmaGPS, 0, 0, 0, 0, 0],
            [0, sigmaGPS * sigmaGPS, 0, 0, 0, 0],
            [0, 0, velocityUncertainty * velocityUncertainty, 0, 0, 0],
            [0, 0, 0, velocityUncertainty * velocityUncertainty, 0, 0],
            [0, 0, 0, 0, accelerationUncertainty * accelerationUncertainty, 0],
            [0, 0, 0, 0, 0, accelerationUncertainty * accelerationUncertainty]
        ]);

        if (this.debugEnabled) {
            console.log('[KalmanFilter] Initialized:', {
                position: this.state.position,
                velocity: this.state.velocity,
                hasVelocity,
                positionUncertainty: sigmaGPS,
                velocityUncertainty
            });
        }

        this.isInitialized = true;
    }

    predict(deltaTime: number): void {
        if (!this.isInitialized) return;

        // deltaTime is in seconds, timestamp is in milliseconds
        this.predictInternal(deltaTime);
        this.state.timestamp += deltaTime * 1000;
    }

    async updateGPS(gpsReading: GPSReading): Promise<void> {
        if (!this.isInitialized) return;

        if (gpsReading.latitude === 0 && gpsReading.longitude === 0) {
            console.warn('[PureKalmanFilter] Ignoring invalid GPS coordinates (0, 0)');
            return;
        }

        const dt = (gpsReading.timestamp - this.state.timestamp) / 1000;
        if (dt > 0) {
            this.predictInternal(dt);
        }

        await this.updateGPSInternal(gpsReading);
        this.state.timestamp = gpsReading.timestamp;
    }

    updateIMU(imuReading: IMUReading): void {
        if (!this.isInitialized) return;

        const dt = (imuReading.timestamp - this.state.timestamp) / 1000;
        if (dt > 0) {
            this.predictInternal(dt);
            this.state.timestamp = imuReading.timestamp;
        }

        if (imuReading.acceleration) {
            this.updateIMUInternal(imuReading.acceleration);
        }
    }

    async getFilteredPosition(): Promise<{ latitude: number; longitude: number }> {
        if (!this.isInitialized) {
            throw new Error('Kalman filter not initialized - cannot get filtered position');
        }

        const geographic = await this.coordinateTransformer.localToGeographic(this.state.position);
        return {
            latitude: geographic.latitude,
            longitude: geographic.longitude
        };
    }

    getState(): KalmanState {
        return { ...this.state };
    }

    getLastKalmanGain(): Matrix | null {
        return this.lastKalmanGain;
    }

    isFilterInitialized(): boolean {
        return this.isInitialized;
    }

    private predictInternal(dt: number): void {
        const F = new Matrix([
            [1, 0, dt, 0, 0.5 * dt * dt, 0],
            [0, 1, 0, dt, 0, 0.5 * dt * dt],
            [0, 0, 1, 0, dt, 0],
            [0, 0, 0, 1, 0, dt],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1]
        ]);

        const sigmaA = this.config.sigmaAcceleration;
        const Q = new Matrix([
            [Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2, 0, Math.pow(dt, 2) / 2, 0],
            [0, Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2, 0, Math.pow(dt, 2) / 2],
            [Math.pow(dt, 3) / 2, 0, dt * dt, 0, dt, 0],
            [0, Math.pow(dt, 3) / 2, 0, dt * dt, 0, dt],
            [Math.pow(dt, 2) / 2, 0, dt, 0, 1, 0],
            [0, Math.pow(dt, 2) / 2, 0, dt, 0, 1]
        ]).mul(sigmaA * sigmaA);

        const x = new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y],
            [this.state.acceleration.x],
            [this.state.acceleration.y]
        ]);

        const xPred = F.mmul(x);
        const PPred = F.mmul(this.state.covariance).mmul(F.transpose()).add(Q);

        if (this.debugEnabled && dt > 0.1) {
            const covTrace = PPred.trace();
            const posVar = Math.sqrt(PPred.get(0, 0) + PPred.get(1, 1));
            const velVar = Math.sqrt(PPred.get(2, 2) + PPred.get(3, 3));
            const accVar = Math.sqrt(PPred.get(4, 4) + PPred.get(5, 5));
            console.log('[KalmanFilter] Prediction:', {
                dt,
                sigmaA,
                covarianceTrace: covTrace,
                positionUncertainty: posVar,
                velocityUncertainty: velVar,
                accelerationUncertainty: accVar
            });
        }

        this.state.position = { x: xPred.get(0, 0), y: xPred.get(1, 0) };
        this.state.velocity = { x: xPred.get(2, 0), y: xPred.get(3, 0) };
        this.state.acceleration = { x: xPred.get(4, 0), y: xPred.get(5, 0) };
        this.state.covariance = PPred;
    }

    private async updateGPSInternal(gpsReading: GPSReading): Promise<void> {
        const cartesian = await this.coordinateTransformer.geographicToLocal({
            longitude: gpsReading.longitude,
            latitude: gpsReading.latitude
        });

        // Check if GPS provides velocity information
        const hasVelocity = gpsReading.speed !== undefined && gpsReading.speed !== null &&
                           gpsReading.heading !== undefined && gpsReading.heading !== null;

        // Create observation matrix
        let H: Matrix;
        if (hasVelocity) {
            // Observe both position and velocity (not acceleration)
            H = new Matrix([
                [1, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 0]
            ]);
        } else {
            // Observe only position
            H = new Matrix([
                [1, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0]
            ]);
        }

        // Create measurement vector
        let z: Matrix;
        if (hasVelocity) {
            const velocity = this.gpsVelocityToLocal(gpsReading.speed!, gpsReading.heading!);
            z = new Matrix([
                [cartesian.x],
                [cartesian.y],
                [velocity.x],
                [velocity.y]
            ]);
        } else {
            z = new Matrix([
                [cartesian.x],
                [cartesian.y]
            ]);
        }

        // Create measurement noise matrix
        const sigmaGPS = this.gpsAccuracyToSigma(gpsReading.accuracy);
        let R: Matrix;
        if (hasVelocity) {
            const sigmaSpeed = this.config.gpsSpeedUncertainty!;
            R = new Matrix([
                [sigmaGPS * sigmaGPS, 0, 0, 0],
                [0, sigmaGPS * sigmaGPS, 0, 0],
                [0, 0, sigmaSpeed * sigmaSpeed, 0],
                [0, 0, 0, sigmaSpeed * sigmaSpeed]
            ]);
        } else {
            R = new Matrix([
                [sigmaGPS * sigmaGPS, 0],
                [0, sigmaGPS * sigmaGPS]
            ]);
        }

        const epsilon = 1e-6;
        const HPred = H.mmul(this.state.covariance).mmul(H.transpose());
        const S = HPred.add(R);
        // Add small epsilon to diagonal to ensure invertibility
        const Sreg = S.add(Matrix.identity(S.rows, S.columns).mul(epsilon));
        const K = this.state.covariance.mmul(H.transpose()).mmul(inverse(Sreg));

        this.lastKalmanGain = K;

        // Debug logging
        if (this.debugEnabled) {
            console.log('[KalmanFilter] GPS update:', {
                hasVelocity,
                position: { x: cartesian.x, y: cartesian.y },
                gpsSpeed: gpsReading.speed,
                gpsHeading: gpsReading.heading,
                kalmanGain: K.to2DArray(),
                gainNorm: Math.sqrt(K.to1DArray().reduce((sum, val) => sum + val * val, 0))
            });
        }

        const x = new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y],
            [this.state.acceleration.x],
            [this.state.acceleration.y]
        ]);

        const y = z.subtract(H.mmul(x));
        const xUpdated = x.add(K.mmul(y));
        const I = Matrix.identity(6, 6);
        const PUpdated = I.subtract(K.mmul(H)).mmul(this.state.covariance);

        // Add small epsilon to diagonal to ensure positive definiteness
        const PStabilized = PUpdated.add(Matrix.identity(6, 6).mul(epsilon));

        this.state.position = { x: xUpdated.get(0, 0), y: xUpdated.get(1, 0) };
        this.state.velocity = { x: xUpdated.get(2, 0), y: xUpdated.get(3, 0) };
        this.state.acceleration = { x: xUpdated.get(4, 0), y: xUpdated.get(5, 0) };
        this.state.covariance = PStabilized;
    }

    private gpsAccuracyToSigma(accuracy: number): number {
        // HTML5 Geolocation API spec: accuracy is "the radius of 95% confidence"
        // Convert to standard deviation (sigma): σ = accuracy / sqrt(2 * ln(20))
        // For 1D Gaussian: P(|X| < accuracy) = 0.95 => σ² = accuracy² / (2 * ln(20))
        const minAccuracy = 1.0; // Minimum 1 meter accuracy to avoid singular matrices
        const effectiveAccuracy = Math.max(accuracy, minAccuracy);
        return effectiveAccuracy / Math.sqrt(2 * Math.log(20));
    }

    private gpsVelocityToLocal(speed: number, heading: number): { x: number; y: number } {
        // Convert heading (degrees clockwise from true north) to radians
        // In navigation: 0° = North, 90° = East, 180° = South, 270° = West
        // In local Cartesian coordinates: x = East, y = North
        const headingRad = heading * Math.PI / 180;
        const vEast = speed * Math.sin(headingRad);
        const vNorth = speed * Math.cos(headingRad);
        return { x: vEast, y: vNorth };
    }

    private updateIMUInternal(acceleration: { x: number; y: number }): void {
        // IMU measures acceleration directly
        const H = new Matrix([
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1]
        ]);

        const z = new Matrix([
            [acceleration.x],
            [acceleration.y]
        ]);

        // Measurement noise for IMU acceleration
        const sigmaAcc = Math.max(this.config.imuAccelerationUncertainty!, 0.1);
        const epsilon = 1e-6;
        const R = new Matrix([
            [sigmaAcc * sigmaAcc, 0],
            [0, sigmaAcc * sigmaAcc]
        ]);

        const HPred = H.mmul(this.state.covariance).mmul(H.transpose());
        const S = HPred.add(R);
        // Add small epsilon to diagonal to ensure invertibility
        const Sreg = S.add(Matrix.identity(S.rows, S.columns).mul(epsilon));
        const K = this.state.covariance.mmul(H.transpose()).mmul(inverse(Sreg));

        this.lastKalmanGain = K;

        if (this.debugEnabled) {
            console.log('[KalmanFilter] IMU update:', {
                acceleration: { x: acceleration.x, y: acceleration.y },
                kalmanGain: K.to2DArray(),
                gainNorm: Math.sqrt(K.to1DArray().reduce((sum, val) => sum + val * val, 0))
            });
        }

        const x = new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y],
            [this.state.acceleration.x],
            [this.state.acceleration.y]
        ]);

        const y = z.subtract(H.mmul(x));
        const xUpdated = x.add(K.mmul(y));
        const I = Matrix.identity(6, 6);
        const PUpdated = I.subtract(K.mmul(H)).mmul(this.state.covariance);

        const PStabilized = PUpdated.add(Matrix.identity(6, 6).mul(epsilon));

        this.state.position = { x: xUpdated.get(0, 0), y: xUpdated.get(1, 0) };
        this.state.velocity = { x: xUpdated.get(2, 0), y: xUpdated.get(3, 0) };
        this.state.acceleration = { x: xUpdated.get(4, 0), y: xUpdated.get(5, 0) };
        this.state.covariance = PStabilized;
    }
}

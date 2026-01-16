import { Matrix, inverse } from 'ml-matrix';
import type { GPSReading, IMUReading } from '../types';
import { CoordinateTransformer } from '../utils/coordinate-transformer';

export interface KalmanState {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    covariance: Matrix;
    timestamp: number;
}

export interface KalmanConfig {
    sigmaAcceleration: number;
    initialPositionUncertainty: number;
    initialVelocityUncertainty: number;
}

export class PureKalmanFilter {
    private state: KalmanState;
    private config: KalmanConfig;
    private coordinateTransformer: CoordinateTransformer;
    private lastKalmanGain: Matrix | null = null;
    private isInitialized = false;

    constructor(config: Partial<KalmanConfig>) {
        this.config = {
            sigmaAcceleration: 0.1,
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 4,
            ...config
        };

        this.coordinateTransformer = new CoordinateTransformer();
        this.state = this.createInitialState();
    }

    private createInitialState(): KalmanState {
        return {
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

        const sigmaGPS = this.gpsAccuracyToSigma(gpsReading.accuracy);
        this.state.covariance = new Matrix([
            [sigmaGPS * sigmaGPS, 0, 0, 0],
            [0, sigmaGPS * sigmaGPS, 0, 0],
            [0, 0, Math.pow(this.config.initialVelocityUncertainty, 2), 0],
            [0, 0, 0, Math.pow(this.config.initialVelocityUncertainty, 2)]
        ]);

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
        if (dt > 0 && imuReading.acceleration) {
            this.predictInternal(dt, imuReading.acceleration);
            this.state.timestamp = imuReading.timestamp;
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

    private predictInternal(dt: number, acceleration?: { x: number; y: number }): void {
        const F = new Matrix([
            [1, 0, dt, 0],
            [0, 1, 0, dt],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);

        const B = new Matrix([
            [0.5 * dt * dt, 0],
            [0, 0.5 * dt * dt],
            [dt, 0],
            [0, dt]
        ]);

        const u = new Matrix([
            [acceleration ? acceleration.x : 0],
            [acceleration ? acceleration.y : 0]
        ]);

        const sigmaA = this.config.sigmaAcceleration;
        const Q = new Matrix([
            [Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2, 0],
            [0, Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2],
            [Math.pow(dt, 3) / 2, 0, dt * dt, 0],
            [0, Math.pow(dt, 3) / 2, 0, dt * dt]
        ]).mul(sigmaA * sigmaA);

        const x = new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y]
        ]);

        const xPred = F.mmul(x).add(B.mmul(u));
        const PPred = F.mmul(this.state.covariance).mmul(F.transpose()).add(Q);

        this.state.position = { x: xPred.get(0, 0), y: xPred.get(1, 0) };
        this.state.velocity = { x: xPred.get(2, 0), y: xPred.get(3, 0) };
        this.state.covariance = PPred;
    }

    private async updateGPSInternal(gpsReading: GPSReading): Promise<void> {
        const cartesian = await this.coordinateTransformer.geographicToLocal({
            longitude: gpsReading.longitude,
            latitude: gpsReading.latitude
        });

        const H = new Matrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0]
        ]);

        const z = new Matrix([
            [cartesian.x],
            [cartesian.y]
        ]);

        const sigmaGPS = this.gpsAccuracyToSigma(gpsReading.accuracy);
        const R = new Matrix([
            [sigmaGPS * sigmaGPS, 0],
            [0, sigmaGPS * sigmaGPS]
        ]);

        const HPred = H.mmul(this.state.covariance).mmul(H.transpose());
        const S = HPred.add(R);
        const K = this.state.covariance.mmul(H.transpose()).mmul(inverse(S));

        this.lastKalmanGain = K;

        const x = new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y]
        ]);

        const y = z.subtract(H.mmul(x));
        const xUpdated = x.add(K.mmul(y));
        const I = Matrix.identity(4, 4);
        const PUpdated = I.subtract(K.mmul(H)).mmul(this.state.covariance);

        // Add small epsilon to diagonal to ensure positive definiteness
        const epsilon = 1e-6;
        const PStabilized = PUpdated.add(Matrix.identity(4, 4).mul(epsilon));

        this.state.position = { x: xUpdated.get(0, 0), y: xUpdated.get(1, 0) };
        this.state.velocity = { x: xUpdated.get(2, 0), y: xUpdated.get(3, 0) };
        this.state.covariance = PStabilized;
    }

    private gpsAccuracyToSigma(accuracy: number): number {
        // HTML5 Geolocation API spec: accuracy is "the radius of 95% confidence"
        // Convert to standard deviation (sigma): σ = accuracy / sqrt(2 * ln(20))
        // For 1D Gaussian: P(|X| < accuracy) = 0.95 => σ² = accuracy² / (2 * ln(20))
        return accuracy / Math.sqrt(2 * Math.log(20));
    }
}

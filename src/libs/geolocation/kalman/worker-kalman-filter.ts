/**
 * Kalman filter implementation for web worker.
 *
 * The current worker architecture is kept intact, but the filter core is
 * intentionally rolled back to the older 4D model that was more stable in
 * real-world tracking:
 *   state = [x, y, vx, vy]
 *
 * GPS updates correct position only.
 * IMU acceleration is used as a control input for prediction, not as a direct
 * measurement update.
 */

import { Matrix, inverse } from 'ml-matrix';
import type { IMUReading } from '../types';
import type { KalmanConfig } from './kalman-types';
import type { CartesianGPSReading, KalmanState, KalmanStateInternal } from './worker-types';

export class WorkerKalmanFilter {
    private static readonly LOW_SPEED_RESET_THRESHOLD = 0.5;
    private static readonly MIN_GPS_SPEED_BLEND = 0.65;
    private state: KalmanStateInternal;
    private config: KalmanConfig;
    private lastKalmanGain: Matrix | null = null;
    private isInitialized = false;
    private debugEnabled = false;

    constructor(config: Partial<KalmanConfig>) {
        this.config = {
            initialAccelerationUncertainty: 2,
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 10,
            gpsSpeedUncertainty: 0.5,
            ...config
        };

        this.state = this.createInitialState();
        this.debugEnabled = this.config.debugEnabled || false;
    }

    dispose(): void {
        this.state = this.createInitialState();
        this.lastKalmanGain = null;
        this.isInitialized = false;
    }

    private createInitialState(): KalmanStateInternal {
        return {
            position: { x: 0, y: 0 },
            velocity: { x: 0, y: 0 },
            acceleration: { x: 0, y: 0 },
            covariance: new Matrix([
                [Math.pow(this.config.initialPositionUncertainty, 2), 0, 0, 0],
                [0, Math.pow(this.config.initialPositionUncertainty, 2), 0, 0],
                [0, 0, Math.pow(this.config.initialVelocityUncertainty, 2), 0],
                [0, 0, 0, Math.pow(this.config.initialVelocityUncertainty, 2)]
            ]),
            timestamp: performance.now()
        };
    }

    initialize(reading: CartesianGPSReading): void {
        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] Initializing with reading:', reading);
        }

        this.state.position = { x: reading.x, y: reading.y };
        // Only use GPS-derived velocity when the caller has already gated it as trustworthy.
        this.state.velocity = reading.velocity
            ? { x: reading.velocity.x, y: reading.velocity.y }
            : { x: 0, y: 0 };
        this.state.acceleration = { x: 0, y: 0 };
        this.state.timestamp = reading.timestamp;

        const sigmaGPS = this.gpsAccuracyToSigma(reading.accuracy);
        const velocityUncertainty = reading.velocity
            ? (this.config.gpsSpeedUncertainty ?? this.config.initialVelocityUncertainty)
            : this.config.initialVelocityUncertainty;

        this.state.covariance = new Matrix([
            [sigmaGPS * sigmaGPS, 0, 0, 0],
            [0, sigmaGPS * sigmaGPS, 0, 0],
            [0, 0, velocityUncertainty * velocityUncertainty, 0],
            [0, 0, 0, velocityUncertainty * velocityUncertainty]
        ]);

        this.lastKalmanGain = null;
        this.isInitialized = true;
    }

    predict(deltaTime: number): void {
        if (!this.isInitialized) return;

        this.predictInternal(deltaTime, this.state.acceleration);
        this.state.timestamp += deltaTime * 1000;
    }

    updateGPS(reading: CartesianGPSReading): void {
        if (!this.isInitialized) return;

        if (reading.x === 0 && reading.y === 0) {
            console.warn('[WorkerKalmanFilter] Ignoring invalid coordinates (0, 0)');
            return;
        }

        const dt = (reading.timestamp - this.state.timestamp) / 1000;
        if (dt > 0) {
            this.predictInternal(dt, this.state.acceleration);
        }

        this.updateGPSInternal(reading);
        this.state.timestamp = reading.timestamp;
    }

    updateIMU(imuReading: IMUReading): void {
        if (!this.isInitialized || !imuReading.acceleration) return;

        const acceleration = {
            x: imuReading.acceleration.x,
            y: imuReading.acceleration.y
        };
        const dt = (imuReading.timestamp - this.state.timestamp) / 1000;

        if (dt > 0) {
            this.predictInternal(dt, acceleration);
            this.state.timestamp = imuReading.timestamp;
        }

        // Keep the latest acceleration as the control input for the next gap.
        this.state.acceleration = acceleration;

        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] IMU control update:', {
                dt,
                acceleration
            });
        }
    }

    getFilteredPosition(): { x: number; y: number } {
        if (!this.isInitialized) {
            throw new Error('Kalman filter not initialized - cannot get filtered position');
        }

        return { ...this.state.position };
    }

    getState(): KalmanState {
        return {
            position: { ...this.state.position },
            velocity: { ...this.state.velocity },
            acceleration: { ...this.state.acceleration },
            covariance: this.state.covariance.to2DArray(),
            timestamp: this.state.timestamp
        };
    }

    getLastKalmanGain(): number[][] | null {
        return this.lastKalmanGain ? this.lastKalmanGain.to2DArray() : null;
    }

    isFilterInitialized(): boolean {
        return this.isInitialized;
    }

    private predictInternal(dt: number, acceleration: { x: number; y: number }): void {
        if (dt <= 0) {
            return;
        }

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
            [acceleration.x],
            [acceleration.y]
        ]);

        const sigmaA = this.config.initialAccelerationUncertainty;
        const Q = new Matrix([
            [Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2, 0],
            [0, Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2],
            [Math.pow(dt, 3) / 2, 0, dt * dt, 0],
            [0, Math.pow(dt, 3) / 2, 0, dt * dt]
        ]).mul(sigmaA * sigmaA);

        const x = this.getStateVector();
        const xPred = F.mmul(x).add(B.mmul(u));
        const pPred = F.mmul(this.state.covariance).mmul(F.transpose()).add(Q);

        this.state.position = { x: xPred.get(0, 0), y: xPred.get(1, 0) };
        this.state.velocity = { x: xPred.get(2, 0), y: xPred.get(3, 0) };
        this.state.covariance = pPred;

        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] Prediction:', {
                dt,
                acceleration,
                position: this.state.position,
                velocity: this.state.velocity
            });
        }
    }

    private updateGPSInternal(reading: CartesianGPSReading): void {
        const H = new Matrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0]
        ]);

        const z = new Matrix([
            [reading.x],
            [reading.y]
        ]);

        const sigmaGPS = this.gpsAccuracyToSigma(reading.accuracy);
        const R = new Matrix([
            [sigmaGPS * sigmaGPS, 0],
            [0, sigmaGPS * sigmaGPS]
        ]);

        const x = this.getStateVector();
        const expectedMeasurement = H.mmul(x);
        const S = H.mmul(this.state.covariance).mmul(H.transpose()).add(R);
        const K = this.state.covariance.mmul(H.transpose()).mmul(inverse(S));
        const innovation = z.sub(expectedMeasurement);
        const xUpdated = x.add(K.mmul(innovation));
        const I = Matrix.eye(4);
        const pUpdated = I.sub(K.mmul(H)).mmul(this.state.covariance);

        this.lastKalmanGain = K;
        this.state.position = { x: xUpdated.get(0, 0), y: xUpdated.get(1, 0) };
        this.state.velocity = { x: xUpdated.get(2, 0), y: xUpdated.get(3, 0) };
        this.state.covariance = pUpdated;

        if (reading.velocity || reading.speed !== undefined) {
            this.applyGPSSpeedCorrection(reading);
        }

        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] GPS update:', {
                position: { x: reading.x, y: reading.y },
                innovation: { x: innovation.get(0, 0), y: innovation.get(1, 0) },
                velocity: this.state.velocity
            });
        }
    }

    private applyGPSSpeedCorrection(reading: CartesianGPSReading): void {
        const gpsSpeedVariance = Math.pow((this.config.gpsSpeedUncertainty ?? this.config.initialVelocityUncertainty) * 0.5, 2);
        const currentVelocity = { ...this.state.velocity };

        let measuredVelocity: { x: number; y: number } | null = null;
        if (reading.velocity) {
            measuredVelocity = reading.velocity;
        } else if (reading.speed !== undefined) {
            const currentSpeed = Math.hypot(currentVelocity.x, currentVelocity.y);
            if (reading.speed < WorkerKalmanFilter.LOW_SPEED_RESET_THRESHOLD || currentSpeed < WorkerKalmanFilter.LOW_SPEED_RESET_THRESHOLD) {
                measuredVelocity = { x: 0, y: 0 };
            } else {
                const scale = reading.speed / currentSpeed;
                measuredVelocity = {
                    x: currentVelocity.x * scale,
                    y: currentVelocity.y * scale
                };
            }
        }

        if (!measuredVelocity) {
            return;
        }

        const kx = Math.max(
            WorkerKalmanFilter.MIN_GPS_SPEED_BLEND,
            this.state.covariance.get(2, 2) / (this.state.covariance.get(2, 2) + gpsSpeedVariance)
        );
        const ky = Math.max(
            WorkerKalmanFilter.MIN_GPS_SPEED_BLEND,
            this.state.covariance.get(3, 3) / (this.state.covariance.get(3, 3) + gpsSpeedVariance)
        );

        this.state.velocity = {
            x: currentVelocity.x + kx * (measuredVelocity.x - currentVelocity.x),
            y: currentVelocity.y + ky * (measuredVelocity.y - currentVelocity.y)
        };
        this.state.covariance.set(2, 2, (1 - kx) * this.state.covariance.get(2, 2));
        this.state.covariance.set(3, 3, (1 - ky) * this.state.covariance.get(3, 3));
    }

    private getStateVector(): Matrix {
        return new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y]
        ]);
    }

    private gpsAccuracyToSigma(accuracy: number): number {
        const minAccuracy = 1.0;
        const effectiveAccuracy = Math.max(accuracy, minAccuracy);
        return effectiveAccuracy / Math.sqrt(2 * Math.log(20));
    }
}

/**
 * Kalman filter implementation for web worker
 * Works in local Cartesian coordinates (meters)
 *
 * State vector (6×1): [x, y, vx, vy, ax, ay]ᵀ
 *   x, y: position (meters, East/North from reference)
 *   vx, vy: velocity (m/s)
 *   ax, ay: acceleration (m/s²)
 *
 * Discrete-time constant acceleration model:
 *   x_{k+1} = F·x_k + w_k,  w_k ~ N(0, Q)
 *   z_k = H·x_k + v_k,      v_k ~ N(0, R)
 *
 * Key matrices:
 *   F: State transition (6×6)
 *   Q: Process noise covariance (6×6)
 *   H: Measurement matrix (depends on sensor)
 *   R: Measurement noise covariance
 *   P: State covariance (6×6)
 *   K: Kalman gain (6×m where m = measurement dimension)
 */

import { Matrix, inverse } from 'ml-matrix';
import type { IMUReading } from '../types';
import type { KalmanConfig } from './kalman-types';
import type { CartesianGPSReading, KalmanState, KalmanStateInternal } from './worker-types';

export class WorkerKalmanFilter {
    private state: KalmanStateInternal;
    private config: KalmanConfig;
    private lastKalmanGain: Matrix | null = null;
    private isInitialized = false;
    private debugEnabled = false;

    constructor(config: Partial<KalmanConfig>) {
        // Configuration parameters (all in SI units: meters, seconds):
        // - initialAccelerationUncertainty: σ_A (m/s²) - uncertainty in acceleration
        // - initialPositionUncertainty: σ_p (m) - initial position uncertainty
        // - initialVelocityUncertainty: σ_v (m/s) - initial velocity uncertainty
        // - gpsSpeedUncertainty: σ_speed (m/s) - GPS velocity measurement noise
        // - imuAccelerationUncertainty: σ_acc (m/s²) - IMU acceleration measurement noise
        // - velocityProcessNoise: σ_vj (m/s per second) - velocity jerk process noise
        // - debugEnabled: Enable detailed logging
        this.config = {
            initialAccelerationUncertainty: 2,
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 10,
            gpsSpeedUncertainty: 0.5,
            imuAccelerationUncertainty: 0.1,
            velocityProcessNoise: 1.1,
            ...config
        };

        this.state = this.createInitialState();
        this.debugEnabled = this.config.debugEnabled || false;
    }

    dispose(): void {
        this.state.covariance = new Matrix(6, 6);
        this.lastKalmanGain = null;
        this.isInitialized = false;
    }

    private createInitialState(): KalmanStateInternal {
        // Default state before initialization (all zeros with large uncertainties)
        // Used when filter is constructed but not yet initialized with GPS
        return {
            position: { x: 0, y: 0 },
            velocity: { x: 0, y: 0 },
            acceleration: { x: 0, y: 0 },
            covariance: new Matrix([
                [Math.pow(this.config.initialPositionUncertainty, 2), 0, 0, 0, 0, 0],
                [0, Math.pow(this.config.initialPositionUncertainty, 2), 0, 0, 0, 0],
                [0, 0, Math.pow(this.config.initialVelocityUncertainty, 2), 0, 0, 0],
                [0, 0, 0, Math.pow(this.config.initialVelocityUncertainty, 2), 0, 0],
                [0, 0, 0, 0, Math.pow(this.config.initialAccelerationUncertainty, 2), 0],
                [0, 0, 0, 0, 0, Math.pow(this.config.initialAccelerationUncertainty, 2)]
            ]),
            timestamp: performance.now()
        };
    }

    initialize(reading: CartesianGPSReading): void {
        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] Initializing with reading:', reading);
        }

        // Set initial state from first GPS measurement
        this.state.position = { x: reading.x, y: reading.y };
        this.state.timestamp = reading.timestamp;

        // Set initial velocity if GPS provides it (from speed/heading)
        if (reading.velocity) {
            this.state.velocity = { x: reading.velocity.x, y: reading.velocity.y };
        }

        // Initial covariance matrix P₀ = diag(σ_x², σ_y², σ_vx², σ_vy², σ_ax², σ_ay²)
        // All off-diagonal elements zero (uncorrelated initial uncertainties)
        const sigmaGPS = this.gpsAccuracyToSigma(reading.accuracy);
        const velocityUncertainty = reading.velocity
            ? (this.config.gpsSpeedUncertainty ?? 0.5)
            : this.config.initialVelocityUncertainty;
        const accelerationUncertainty = this.config.initialAccelerationUncertainty;

        this.state.covariance = new Matrix([
            [sigmaGPS * sigmaGPS, 0, 0, 0, 0, 0],
            [0, sigmaGPS * sigmaGPS, 0, 0, 0, 0],
            [0, 0, velocityUncertainty * velocityUncertainty, 0, 0, 0],
            [0, 0, 0, velocityUncertainty * velocityUncertainty, 0, 0],
            [0, 0, 0, 0, accelerationUncertainty * accelerationUncertainty, 0],
            [0, 0, 0, 0, 0, accelerationUncertainty * accelerationUncertainty]
        ]);

        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] Initialized:', {
                position: this.state.position,
                hasVelocity: !!reading.velocity,
                positionUncertainty: sigmaGPS,
                velocityUncertainty,
                initialTimestamp: this.state.timestamp
            });
        }

        this.isInitialized = true;
    }

    predict(deltaTime: number): void {
        if (!this.isInitialized) return;

        this.predictInternal(deltaTime);
        this.state.timestamp += deltaTime * 1000;
    }

    updateGPS(reading: CartesianGPSReading): void {
        if (!this.isInitialized) return;

        // Guard against invalid (0,0) coordinates (common GPS error)
        if (reading.x === 0 && reading.y === 0) {
            console.warn('[WorkerKalmanFilter] Ignoring invalid coordinates (0, 0)');
            return;
        }

        // Time synchronization: predict forward to measurement time
        // dt = (t_measurement - t_state) in seconds
        const dt = (reading.timestamp - this.state.timestamp) / 1000;
        if (dt > 0) {
            this.predictInternal(dt);
        }

        // Update with GPS measurement
        this.updateGPSInternal(reading);
        this.state.timestamp = reading.timestamp;
    }

    updateIMU(imuReading: IMUReading): void {
        if (!this.isInitialized) return;

        const dt = (imuReading.timestamp - this.state.timestamp) / 1000;

        if (dt > 0) {
            this.predictInternal(dt);
            this.state.timestamp = imuReading.timestamp;
        } else if (dt < 0) {
            if (this.debugEnabled) {
                console.log('[WorkerKalmanFilter] IMU reading before state, resetting timestamp');
            }
            this.state.timestamp = imuReading.timestamp;
        }

        if (imuReading.acceleration) {
            this.updateIMUInternal(imuReading.acceleration);
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

    private computeProcessNoise(dt: number): Matrix {
        const dt2 = dt * dt;
        const dt3 = dt2 * dt;
        const dt4 = dt3 * dt;
        const dt5 = dt4 * dt;
        const sigmaA = this.config.initialAccelerationUncertainty;
        const sigmaA2 = sigmaA * sigmaA;

        const Q_ca = new Matrix([
            [dt5 / 20 * sigmaA2, 0, dt4 / 8 * sigmaA2, 0, dt3 / 6 * sigmaA2, 0],
            [0, dt5 / 20 * sigmaA2, 0, dt4 / 8 * sigmaA2, 0, dt3 / 6 * sigmaA2],
            [dt4 / 8 * sigmaA2, 0, dt3 / 3 * sigmaA2, 0, dt2 / 2 * sigmaA2, 0],
            [0, dt4 / 8 * sigmaA2, 0, dt3 / 3 * sigmaA2, 0, dt2 / 2 * sigmaA2],
            [dt3 / 6 * sigmaA2, 0, dt2 / 2 * sigmaA2, 0, dt * sigmaA2, 0],
            [0, dt3 / 6 * sigmaA2, 0, dt2 / 2 * sigmaA2, 0, dt * sigmaA2]
        ]);

        const sigmaVJ = this.config.velocityProcessNoise ?? 1.0;
        const Q_velocity = new Matrix([
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, dt * sigmaVJ * sigmaVJ, 0, 0, 0],
            [0, 0, 0, dt * sigmaVJ * sigmaVJ, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]);

        return Q_ca.add(Q_velocity);
    }

    private predictInternal(dt: number): void {
        if (dt <= 0) {
            if (this.debugEnabled) {
                console.warn('[WorkerKalmanFilter] predictInternal called with non-positive dt:', dt);
            }
            return;
        }

        // State transition matrix F (6×6)
        // Discrete-time constant acceleration model:
        //   x_{k+1} = x_k + v_x·dt + ½·a_x·dt²
        //   y_{k+1} = y_k + v_y·dt + ½·a_y·dt²
        //   v_x_{k+1} = v_x_k + a_x·dt
        //   v_y_{k+1} = v_y_k + a_y·dt
        //   a_x_{k+1} = a_x_k
        //   a_y_{k+1} = a_y_k
        const F = new Matrix([
            [1, 0, dt, 0, 0.5 * dt * dt, 0],
            [0, 1, 0, dt, 0, 0.5 * dt * dt],
            [0, 0, 1, 0, dt, 0],
            [0, 0, 0, 1, 0, dt],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1]
        ]);

        // Process noise covariance Q = Q_ca + Q_velocity
        const sigmaA = this.config.initialAccelerationUncertainty;
        const Q = this.computeProcessNoise(dt);

        // Current state vector x = [x, y, vx, vy, ax, ay]ᵀ
        const x = new Matrix([
            [this.state.position.x],
            [this.state.position.y],
            [this.state.velocity.x],
            [this.state.velocity.y],
            [this.state.acceleration.x],
            [this.state.acceleration.y]
        ]);

        // Prediction equations:
        //   x_pred = F·x
        //   P_pred = F·P·Fᵀ + Q
        const xPred = F.mmul(x);
        const PPred = F.mmul(this.state.covariance).mmul(F.transpose()).add(Q);

        if (this.debugEnabled) {
            const covTrace = PPred.trace();
            const posVar = Math.sqrt(PPred.get(0, 0) + PPred.get(1, 1));
            const velVar = Math.sqrt(PPred.get(2, 2) + PPred.get(3, 3));
            const accVar = Math.sqrt(PPred.get(4, 4) + PPred.get(5, 5));
            console.log('[WorkerKalmanFilter] Prediction:', {
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

    private updateGPSInternal(reading: CartesianGPSReading): void {
        // Check if GPS provides velocity information
        const hasVelocity = !!reading.velocity;

        // Create observation matrix H (m×6 where m = 2 or 4)
        // Maps state vector to measurement vector z = H·x + v
        let H: Matrix;
        if (hasVelocity) {
            // Observe both position and velocity (not acceleration)
            // z = [x_gps, y_gps, vx_gps, vy_gps]ᵀ = H·x + v
            // H = [1 0 0 0 0 0]  -> maps to x position
            //     [0 1 0 0 0 0]  -> maps to y position
            //     [0 0 1 0 0 0]  -> maps to x velocity
            //     [0 0 0 1 0 0]  -> maps to y velocity
            H = new Matrix([
                [1, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 0]
            ]);
        } else {
            // Observe only position (GPS without speed/heading)
            // z = [x_gps, y_gps]ᵀ = H·x + v
            H = new Matrix([
                [1, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0]
            ]);
        }

        // Create measurement vector z
        let z: Matrix;
        if (hasVelocity) {
            z = new Matrix([
                [reading.x],
                [reading.y],
                [reading.velocity!.x],
                [reading.velocity!.y]
            ]);
        } else {
            z = new Matrix([
                [reading.x],
                [reading.y]
            ]);
        }

        // Create measurement noise covariance matrix R (m×m)
        // GPS accuracy: 95% confidence radius → convert to standard deviation σ
        // σ_gps = accuracy / √(2·ln(20)) ≈ accuracy / 2.448
        const sigmaGPS = this.gpsAccuracyToSigma(reading.accuracy);
        let R: Matrix;
        if (hasVelocity) {
            // GPS velocity uncertainty (σ_speed from config)
            const sigmaSpeed = this.config.gpsSpeedUncertainty ?? 0.5;
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

        // Kalman gain computation:
        // S = H·P·Hᵀ + R                (innovation covariance)
        // K = P·Hᵀ·S⁻¹                  (Kalman gain)
        const epsilon = 1e-6; // Regularization to prevent singular matrices
        const HPred = H.mmul(this.state.covariance).mmul(H.transpose());
        const S = HPred.add(R);
        const Sreg = S.add(Matrix.identity(S.rows, S.columns).mul(epsilon));
        const K = this.state.covariance.mmul(H.transpose()).mmul(inverse(Sreg));

        this.lastKalmanGain = K;

        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] GPS update:', {
                hasVelocity,
                position: { x: reading.x, y: reading.y },
                kalmanGain: K.to2DArray()
            });
        }

        // State update equations:
        // y = z - H·x                    (innovation/residual)
        // x_updated = x + K·y
        // P_updated = (I - K·H)·P
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
        const I_KH = I.subtract(K.mmul(H));

        // Joseph formula for numerically stable covariance update
        const PUpdated = I_KH
            .mmul(this.state.covariance)
            .mmul(I_KH.transpose())
            .add(K.mmul(R).mmul(K.transpose()));

        const PStabilized = PUpdated.add(Matrix.identity(6, 6).mul(epsilon));

        this.state.position = { x: xUpdated.get(0, 0), y: xUpdated.get(1, 0) };
        this.state.velocity = { x: xUpdated.get(2, 0), y: xUpdated.get(3, 0) };
        this.state.acceleration = { x: xUpdated.get(4, 0), y: xUpdated.get(5, 0) };
        this.state.covariance = PStabilized;
    }

    private gpsAccuracyToSigma(accuracy: number): number {
        // Convert GPS accuracy (95% confidence radius) to standard deviation σ
        // HTML5 Geolocation API: accuracy = radius of 95% confidence circle
        // For 2D isotropic Gaussian: P(√(x²+y²) < accuracy) = 0.95
        //
        // Mathematical derivation:
        // Let r = √(x²+y²) where x,y ~ N(0, σ²) independent
        // Then r follows Rayleigh distribution with scale parameter σ
        // CDF: P(r < R) = 1 - exp(-R²/(2σ²))
        // Set P(r < accuracy) = 0.95:
        //   0.95 = 1 - exp(-accuracy²/(2σ²))
        //   exp(-accuracy²/(2σ²)) = 0.05
        //   -accuracy²/(2σ²) = ln(0.05) = -ln(20)
        //   σ² = accuracy²/(2·ln(20))
        //   σ = accuracy / √(2·ln(20))
        //
        // Minimum accuracy enforced to avoid singular covariance matrices
        const minAccuracy = 1.0; // meters
        const effectiveAccuracy = Math.max(accuracy, minAccuracy);
        return effectiveAccuracy / Math.sqrt(2 * (Math.LN2 + Math.LN10));
    }

    private updateIMUInternal(acceleration: { x: number; y: number; z: number }): void {
        // IMU measures acceleration directly - apply immediately without Kalman blending
        // This ensures responsive acceleration tracking for motion prediction
        const epsilon = 1e-6;
        const sigmaAcc = Math.max(this.config.imuAccelerationUncertainty ?? 0.1, 0.05);

        // Directly update acceleration state
        this.state.acceleration = { x: acceleration.x, y: acceleration.y };

        // Update acceleration covariance (rows 4-5, cols 4-5) to reflect IMU uncertainty
        const P = this.state.covariance;
        P.set(4, 4, sigmaAcc * sigmaAcc);
        P.set(4, 5, 0);
        P.set(5, 4, 0);
        P.set(5, 5, sigmaAcc * sigmaAcc);

        // Clear cross-correlations between acceleration and other states
        // This prevents the filter from "dragging" acceleration back to predicted values
        for (let i = 0; i < 4; i++) {
            P.set(4, i, epsilon);
            P.set(5, i, epsilon);
            P.set(i, 4, epsilon);
            P.set(i, 5, epsilon);
        }

        this.state.covariance = P;

        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] IMU direct update:', {
                acceleration: { x: acceleration.x, y: acceleration.y },
                sigmaAcc
            });
        }
    }
}

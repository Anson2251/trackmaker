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
        const velocityUncertainty = reading.velocity ? this.config.gpsSpeedUncertainty! : this.config.initialVelocityUncertainty;
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
        // Q_ca: Discrete white noise acceleration model (σ_A² = acceleration uncertainty)
        // From continuous-time Q = ∫₀ᵈᵗ F(τ)·G·Q_c·Gᵀ·F(τ)ᵀ dτ where Q_c = diag(σ_A², σ_A²)
        // For constant acceleration model with state [x, y, vx, vy, ax, ay]:
        // Q_ca = σ_A² · [dt⁴/4  0     dt³/2  0     dt²/2  0
        //               0     dt⁴/4   0     dt³/2  0     dt²/2
        //               dt³/2  0     dt²    0     dt     0
        //               0     dt³/2   0     dt²    0     dt
        //               dt²/2  0     dt     0     1      0
        //               0     dt²/2   0     dt     0     1]
        const sigmaA = this.config.initialAccelerationUncertainty;
        const Q_ca = new Matrix([
            [Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2, 0, Math.pow(dt, 2) / 2, 0],
            [0, Math.pow(dt, 4) / 4, 0, Math.pow(dt, 3) / 2, 0, Math.pow(dt, 2) / 2],
            [Math.pow(dt, 3) / 2, 0, dt * dt, 0, dt, 0],
            [0, Math.pow(dt, 3) / 2, 0, dt * dt, 0, dt],
            [Math.pow(dt, 2) / 2, 0, dt, 0, 1, 0],
            [0, Math.pow(dt, 2) / 2, 0, dt, 0, 1]
        ]).mul(sigmaA * sigmaA);

        // Q_velocity: Additional velocity process noise to allow direction changes
        // Models uncertainty in velocity derivative (jerk) σ_vj²
        // Adds noise only to velocity components: Q_velocity = diag(0,0, σ_vj²·dt, σ_vj²·dt, 0,0)
        const sigmaVelocityJerk = this.config.velocityProcessNoise ?? 1.0;
        const Q_velocity = new Matrix([
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, dt * sigmaVelocityJerk * sigmaVelocityJerk, 0, 0, 0],
            [0, 0, 0, dt * sigmaVelocityJerk * sigmaVelocityJerk, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]);

        const Q = Q_ca.add(Q_velocity);

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
        const PUpdated = I.subtract(K.mmul(H)).mmul(this.state.covariance);

        // Add small regularization to maintain positive definiteness
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
        //   σ = accuracy / √(2·ln(20)) ≈ accuracy / 2.448
        //
        // Minimum accuracy enforced to avoid singular covariance matrices
        const minAccuracy = 1.0; // meters
        const effectiveAccuracy = Math.max(accuracy, minAccuracy);
        return effectiveAccuracy / Math.sqrt(2 * Math.log(20));
    }

    private updateIMUInternal(acceleration: { x: number; y: number; z: number }): void {
        // IMU measures acceleration directly (we only use x,y components, ignore z)
        // Measurement model: z = [a_x_imu, a_y_imu]ᵀ = H·x + v
        // H = [0 0 0 0 1 0]  -> maps to x acceleration component
        //     [0 0 0 0 0 1]  -> maps to y acceleration component
        const H = new Matrix([
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1]
        ]);

        const z = new Matrix([
            [acceleration.x],
            [acceleration.y]
        ]);

        // Measurement noise for IMU acceleration (smartphone accelerometer typically 0.1-0.5 m/s²)
        // σ_acc from config, with minimum of 0.5 m/s² for stability
        const sigmaAcc = Math.max(this.config.imuAccelerationUncertainty!, 0.5);
        const epsilon = 1e-6;
        const R = new Matrix([
            [sigmaAcc * sigmaAcc, 0],
            [0, sigmaAcc * sigmaAcc]
        ]);

        // Innovation covariance S = H·P·Hᵀ + R
        const HPred = H.mmul(this.state.covariance).mmul(H.transpose());
        const S = HPred.add(R);

        // Check for near-singular covariance (poor conditioning)
        // Happens when S diagonal elements are very small or off-diagonal correlation near ±1
        if (S.get(0, 0) < epsilon || S.get(1, 1) < epsilon ||
            Math.abs(S.get(0, 1)) > 0.9 * Math.sqrt(S.get(0, 0) * S.get(1, 1))) {
            if (this.debugEnabled) {
                console.warn('[WorkerKalmanFilter] Near-singular IMU measurement covariance');
            }
        }

        // Regularize and compute Kalman gain K = P·Hᵀ·S⁻¹
        const Sreg = S.add(Matrix.identity(S.rows, S.columns).mul(epsilon));
        const K = this.state.covariance.mmul(H.transpose()).mmul(inverse(Sreg));

        this.lastKalmanGain = K;

        if (this.debugEnabled) {
            console.log('[WorkerKalmanFilter] IMU update:', {
                acceleration: { x: acceleration.x, y: acceleration.y }
            });
        }

        // State update (same as GPS update):
        // y = z - H·x                    (acceleration residual)
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
        const PUpdated = I.subtract(K.mmul(H)).mmul(this.state.covariance);

        // Regularize updated covariance
        const PStabilized = PUpdated.add(Matrix.identity(6, 6).mul(epsilon));

        this.state.position = { x: xUpdated.get(0, 0), y: xUpdated.get(1, 0) };
        this.state.velocity = { x: xUpdated.get(2, 0), y: xUpdated.get(3, 0) };
        this.state.acceleration = { x: xUpdated.get(4, 0), y: xUpdated.get(5, 0) };
        this.state.covariance = PStabilized;
    }
}

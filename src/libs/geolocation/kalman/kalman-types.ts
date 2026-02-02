import Matrix from "ml-matrix";

export interface KalmanState {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    acceleration: { x: number; y: number };
    covariance: Matrix;
    timestamp: number;
}

export interface KalmanConfig {
    initialAccelerationUncertainty: number;
    initialPositionUncertainty: number;
    initialVelocityUncertainty: number;
    gpsSpeedUncertainty?: number; // meters per second
    imuAccelerationUncertainty?: number; // meters per second squared
    debugEnabled?: boolean;
    velocityProcessNoise?: number;
    // ZUPT (Zero-Velocity Update) parameters
    zuptEnabled?: boolean;
    zuptThreshold?: number; // m/s² threshold for stationary detection
    zuptConsecutiveSamples?: number; // consecutive samples required to trigger ZUPT
    zuptVelocityNoise?: number; // m/s uncertainty for zero-velocity measurement
}

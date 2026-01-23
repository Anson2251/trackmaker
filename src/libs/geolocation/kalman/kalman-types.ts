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
}

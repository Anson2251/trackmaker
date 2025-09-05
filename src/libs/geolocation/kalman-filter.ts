import { Matrix } from 'ml-matrix';
import type { GeoCoordinate } from '@/utils/proj4-distance';

/**
 * Device motion data interface
 */
export interface DeviceMotionData {
    acceleration: {
        x: number; // m/s², east direction
        y: number; // m/s², north direction
        z: number; // m/s², up direction
    };
    rotationRate: {
        alpha: number; // rad/s, around z-axis (yaw)
        beta: number;  // rad/s, around x-axis (pitch)
        gamma: number; // rad/s, around y-axis (roll)
    };
    timestamp: number;
}

/**
 * GPS motion measurement interface
 */
export interface GPSMotionMeasurement {
    gps: {
        latitude: number;
        longitude: number;
        accuracy: number;
        speed: number | null;
        heading: number | null;
        timestamp: number;
    };
    motion: DeviceMotionData | null;
}

/**
 * Kalman filter state interface
 */
export interface KalmanFilterState {
    latitude: number;
    longitude: number;
    velocityNorth: number; // m/s
    velocityEast: number;  // m/s
    accelerationNorth: number; // m/s²
    accelerationEast: number;  // m/s²
    covariance: number[][]; // 6x6 covariance matrix
}

/**
 * Kalman filter for fusing GPS and device motion data
 * State vector: [latitude, longitude, velocity_north, velocity_east, acceleration_north, acceleration_east]
 * Measurement vector: [gps_latitude, gps_longitude, motion_velocity_north, motion_velocity_east]
 */
export class GPSMotionKalmanFilter {
    private state: Matrix; // State vector [lat, lon, vel_n, vel_e, acc_n, acc_e]
    private covariance: Matrix; // State covariance matrix
    private processNoise: Matrix; // Process noise covariance
    private measurementNoise: Matrix; // Measurement noise covariance

    // State transition matrix
    private F: Matrix = Matrix.eye(6);

    // Measurement matrix
    private H: Matrix;

    // Time step (seconds)
    private dt: number;

    // Earth's radius at current latitude (meters)
    private earthRadius: number;

    // Reference position for local coordinate system
    private referencePosition: GeoCoordinate | null = null;

    constructor(initialLatitude: number, initialLongitude: number, dt: number = 0.1) {
        this.dt = dt;
        this.earthRadius = this.calculateEarthRadius(initialLatitude);
        this.referencePosition = { latitude: initialLatitude, longitude: initialLongitude };

        // Initialize state: [lat, lon, vel_n, vel_e, acc_n, acc_e]
        this.state = Matrix.columnVector([initialLatitude, initialLongitude, 0, 0, 0, 0]);

        // Initialize covariance with large uncertainties
        this.covariance = Matrix.eye(6).mul(1000);

        // Process noise - tuned for pedestrian/vehicle motion
        const positionNoise = 0.1; // m²
        const velocityNoise = 1.0;  // (m/s)²
        const accelerationNoise = 4.0; // (m/s²)²

        this.processNoise = Matrix.diag([
            positionNoise / (this.earthRadius * this.earthRadius), // lat variance (rad²)
            positionNoise / (this.earthRadius * this.earthRadius * Math.cos(initialLatitude * Math.PI / 180) ** 2), // lon variance (rad²)
            velocityNoise,   // velocity north variance
            velocityNoise,   // velocity east variance
            accelerationNoise, // acceleration north variance
            accelerationNoise  // acceleration east variance
        ]);

        // Measurement noise
        const gpsPositionNoise = 5.0; // m²
        const motionVelocityNoise = 0.5; // (m/s)²

        this.measurementNoise = Matrix.diag([
            gpsPositionNoise / (this.earthRadius * this.earthRadius), // GPS lat variance
            gpsPositionNoise / (this.earthRadius * this.earthRadius * Math.cos(initialLatitude * Math.PI / 180) ** 2), // GPS lon variance
            motionVelocityNoise, // motion velocity north variance
            motionVelocityNoise  // motion velocity east variance
        ]);

        // Initialize state transition matrix
        this.updateStateTransitionMatrix();

        // Measurement matrix - we measure position and velocity
        this.H = new Matrix([
            [1, 0, 0, 0, 0, 0], // latitude measurement
            [0, 1, 0, 0, 0, 0], // longitude measurement
            [0, 0, 1, 0, 0, 0], // velocity north measurement
            [0, 0, 0, 1, 0, 0]  // velocity east measurement
        ]);
    }

    /**
     * Calculate Earth's radius at given latitude using WGS84 ellipsoid
     */
    private calculateEarthRadius(latitude: number): number {
        const a = 6378137.0; // WGS84 semi-major axis
        const b = 6356752.314245; // WGS84 semi-minor axis
        const latRad = latitude * Math.PI / 180;

        const numerator = (a * a * Math.cos(latRad)) ** 2 + (b * b * Math.sin(latRad)) ** 2;
        const denominator = (a * Math.cos(latRad)) ** 2 + (b * Math.sin(latRad)) ** 2;

        return Math.sqrt(numerator / denominator);
    }

    /**
     * Update state transition matrix based on current time step
     */
    private updateStateTransitionMatrix(): void {
        const dt = this.dt;
        const dt2 = dt * dt / 2;

        // State transition matrix for constant acceleration model
        this.F = new Matrix([
            [1, 0, dt,  0, dt2,   0], // latitude
            [0, 1,  0, dt,   0, dt2], // longitude
            [0, 0,  1,  0,  dt,   0], // velocity north
            [0, 0,  0,  1,   0,  dt], // velocity east
            [0, 0,  0,  0,   1,   0], // acceleration north
            [0, 0,  0,  0,   0,   1]  // acceleration east
        ]);
    }

    /**
     * Convert geographic coordinates to local north-east coordinates (meters)
     */
    private geoToLocal(lat: number, lon: number): [number, number] {
        if (!this.referencePosition) {
            throw new Error('Reference position not set');
        }

        const dLat = lat - this.referencePosition.latitude;
        const dLon = lon - this.referencePosition.longitude;

        const north = dLat * Math.PI / 180 * this.earthRadius;
        const east = dLon * Math.PI / 180 * this.earthRadius * Math.cos(this.referencePosition.latitude * Math.PI / 180);

        return [north, east];
    }

    /**
     * Convert local north-east coordinates (meters) to geographic coordinates
     */
    private localToGeo(north: number, east: number): [number, number] {
        if (!this.referencePosition) {
            throw new Error('Reference position not set');
        }

        const dLat = north / this.earthRadius * 180 / Math.PI;
        const dLon = east / (this.earthRadius * Math.cos(this.referencePosition.latitude * Math.PI / 180)) * 180 / Math.PI;

        const lat = this.referencePosition.latitude + dLat;
        const lon = this.referencePosition.longitude + dLon;

        return [lat, lon];
    }

    /**
     * Predict next state using motion model
     */
    predict(motionData: DeviceMotionData | null): void {
        // Update state transition matrix if time step has changed
        this.updateStateTransitionMatrix();

        // State prediction: x̂ₖ|ₖ₋₁ = F * xₖ₋₁|ₖ₋₁
        const predictedState = this.F.mmul(this.state);

        // If we have motion data, incorporate acceleration measurements
        if (motionData) {
            // Convert device acceleration to north-east coordinates
            // This is a simplified model - in practice, you'd need to account for device orientation
            const accNorth = motionData.acceleration.y; // Assuming y is forward/north
            const accEast = motionData.acceleration.x;  // Assuming x is right/east

            // Update acceleration component of state
            predictedState.set(4, 0, accNorth);
            predictedState.set(5, 0, accEast);
        }

        // Covariance prediction: Pₖ|ₖ₋₁ = F * Pₖ₋₁|ₖ₋₁ * Fᵀ + Q
        const FP = this.F.mmul(this.covariance);
        const FPFt = FP.mmul(this.F.transpose());
        const predictedCovariance = FPFt.add(this.processNoise);

        this.state = predictedState;
        this.covariance = predictedCovariance;
    }

    /**
     * Update state with GPS and motion measurements
     */
    update(measurement: GPSMotionMeasurement): void {
        // Calculate velocity from GPS if available
        let gpsVelNorth = 0;
        let gpsVelEast = 0;
        if (measurement.gps.speed && measurement.gps.heading !== null) {
            const headingRad = measurement.gps.heading * Math.PI / 180;
            gpsVelNorth = measurement.gps.speed * Math.cos(headingRad);
            gpsVelEast = measurement.gps.speed * Math.sin(headingRad);
        }

        // Calculate motion-based velocity if available
        let motionVelNorth = this.state.get(2, 0); // Use current velocity estimate
        let motionVelEast = this.state.get(3, 0);

        if (measurement.motion) {
            // Integrate acceleration to get velocity change
            const dt = this.dt;
            const accNorth = measurement.motion.acceleration.y;
            const accEast = measurement.motion.acceleration.x;

            // Update velocity estimates with acceleration integration
            motionVelNorth = this.state.get(2, 0) + accNorth * dt;
            motionVelEast = this.state.get(3, 0) + accEast * dt;
        }

        // Update state with motion-based velocity if no GPS velocity
        if (!measurement.gps.speed && measurement.motion) {
            this.state.set(2, 0, motionVelNorth);
            this.state.set(3, 0, motionVelEast);
        }

        // Create measurement vector
        const measurementVector = Matrix.columnVector([
            measurement.gps.latitude,
            measurement.gps.longitude,
            gpsVelNorth,
            gpsVelEast
        ]);

        // Innovation: y = z - H * x̂
        const predictedMeasurement = this.H.mmul(this.state);
        const innovation = measurementVector.sub(predictedMeasurement);

        // Innovation covariance: S = H * P * Hᵀ + R
        const HP = this.H.mmul(this.covariance);
        const HPHT = HP.mmul(this.H.transpose());
        const innovationCovariance = HPHT.add(this.measurementNoise);

        // Simplified Kalman filter update - avoid complex matrix inversion
        // For now, we'll use a direct update approach with scaled innovation

        // Calculate innovation scaling factor based on measurement uncertainty
        const positionUncertainty = Math.sqrt(innovationCovariance.get(0, 0) + innovationCovariance.get(1, 1));
        const velocityUncertainty = Math.sqrt(innovationCovariance.get(2, 2) + innovationCovariance.get(3, 3));

        // Simple gain calculation (diagonal approximation)
        const positionGain = Math.min(0.8, 1.0 / (1.0 + positionUncertainty));
        const velocityGain = Math.min(0.5, 1.0 / (1.0 + velocityUncertainty));

        // State update with scaled innovation
        const newState = this.state.clone();
        newState.set(0, 0, this.state.get(0, 0) + positionGain * innovation.get(0, 0)); // latitude
        newState.set(1, 0, this.state.get(1, 0) + positionGain * innovation.get(1, 0)); // longitude
        newState.set(2, 0, this.state.get(2, 0) + velocityGain * innovation.get(2, 0)); // velocity north
        newState.set(3, 0, this.state.get(3, 0) + velocityGain * innovation.get(3, 0)); // velocity east

        // Simple covariance update (reduce uncertainty after update)
        const newCovariance = this.covariance.mul(0.9); // Reduce uncertainty by 10%

        this.state = newState;
        this.covariance = newCovariance;

        // Update reference position if we've moved too far
        const [newNorth, newEast] = this.geoToLocal(this.state.get(0, 0), this.state.get(1, 0));
        const distanceFromRef = Math.sqrt(newNorth * newNorth + newEast * newEast);

        if (distanceFromRef > 1000) { // More than 1km from reference
            this.referencePosition = {
                latitude: this.state.get(0, 0),
                longitude: this.state.get(1, 0)
            };
            this.earthRadius = this.calculateEarthRadius(this.referencePosition.latitude);
        }
    }

    /**
     * Get current filtered state
     */
    getState(): KalmanFilterState {
        return {
            latitude: this.state.get(0, 0),
            longitude: this.state.get(1, 0),
            velocityNorth: this.state.get(2, 0),
            velocityEast: this.state.get(3, 0),
            accelerationNorth: this.state.get(4, 0),
            accelerationEast: this.state.get(5, 0),
            covariance: this.covariance.to2DArray()
        };
    }

    /**
     * Get current position accuracy estimate (standard deviation in meters)
     */
    getPositionAccuracy(): number {
        const latVar = this.covariance.get(0, 0) * this.earthRadius * this.earthRadius;
        const lonVar = this.covariance.get(1, 1) * this.earthRadius * this.earthRadius * Math.cos(this.state.get(0, 0) * Math.PI / 180) ** 2;

        return Math.sqrt(latVar + lonVar);
    }

    /**
     * Reset filter with new initial position
     */
    reset(initialLatitude: number, initialLongitude: number): void {
        this.state = Matrix.columnVector([initialLatitude, initialLongitude, 0, 0, 0, 0]);
        this.covariance = Matrix.eye(6).mul(1000);
        this.referencePosition = { latitude: initialLatitude, longitude: initialLongitude };
        this.earthRadius = this.calculateEarthRadius(initialLatitude);
    }
}

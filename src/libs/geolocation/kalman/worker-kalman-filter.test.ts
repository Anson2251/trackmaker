import { describe, expect, it } from 'vitest';

import { WorkerKalmanFilter } from './worker-kalman-filter';

describe('WorkerKalmanFilter', () => {
    it('uses joint GPS position and velocity updates when trusted velocity is available', () => {
        const filter = new WorkerKalmanFilter({
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 10,
            gpsSpeedUncertainty: 0.5,
        });

        filter.initialize({
            x: 0,
            y: 0,
            accuracy: 5,
            timestamp: 0,
        });

        filter.updateGPS({
            x: 10,
            y: 0,
            accuracy: 5,
            timestamp: 1000,
            speed: 5,
            velocity: { x: 5, y: 0 },
        });

        const state = filter.getState();
        const gain = filter.getLastKalmanGain();

        expect(state.position.x).toBeGreaterThan(0);
        expect(state.velocity.x).toBeGreaterThan(0);
        expect(gain?.[0]).toHaveLength(4);
    });

    it('falls back to position-only GPS updates when no trusted velocity is available', () => {
        const filter = new WorkerKalmanFilter({
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 10,
            gpsSpeedUncertainty: 0.5,
        });

        filter.initialize({
            x: 0,
            y: 0,
            accuracy: 5,
            timestamp: 0,
        });

        filter.updateGPS({
            x: 10,
            y: 0,
            accuracy: 5,
            timestamp: 1000,
            speed: 5,
        });

        const gain = filter.getLastKalmanGain();

        expect(gain?.[0]).toHaveLength(2);
    });

    it('treats very low GPS speed as a zero-velocity measurement', () => {
        const filter = new WorkerKalmanFilter({
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 10,
            gpsSpeedUncertainty: 0.5,
        });

        filter.initialize({
            x: 0,
            y: 0,
            accuracy: 5,
            timestamp: 0,
            velocity: { x: 4, y: 0 },
        });

        filter.predict(1);
        const predictedVelocity = filter.getState().velocity.x;

        filter.updateGPS({
            x: 0,
            y: 0,
            accuracy: 5,
            timestamp: 1000,
            speed: 0.1,
        });

        const updatedVelocity = filter.getState().velocity.x;
        const gain = filter.getLastKalmanGain();

        expect(updatedVelocity).toBeLessThan(predictedVelocity);
        expect(gain?.[0]).toHaveLength(4);
    });

    it('assigns higher velocity uncertainty to low-speed and low-quality GPS measurements', () => {
        const filter = new WorkerKalmanFilter({
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 10,
            gpsSpeedUncertainty: 0.5,
        });

        const lowSpeedSigma = (filter as unknown as {
            gpsSpeedToSigma: (reading: { accuracy: number; speed?: number }, measuredVelocity: { x: number; y: number } | null) => number;
        }).gpsSpeedToSigma({ accuracy: 5, speed: 0.5 }, { x: 1, y: 0 });

        const highSpeedSigma = (filter as unknown as {
            gpsSpeedToSigma: (reading: { accuracy: number; speed?: number }, measuredVelocity: { x: number; y: number } | null) => number;
        }).gpsSpeedToSigma({ accuracy: 5, speed: 5 }, { x: 1, y: 0 });

        const poorAccuracySigma = (filter as unknown as {
            gpsSpeedToSigma: (reading: { accuracy: number; speed?: number }, measuredVelocity: { x: number; y: number } | null) => number;
        }).gpsSpeedToSigma({ accuracy: 20, speed: 5 }, { x: 1, y: 0 });

        expect(lowSpeedSigma).toBeGreaterThan(highSpeedSigma);
        expect(poorAccuracySigma).toBeGreaterThan(highSpeedSigma);
    });
});

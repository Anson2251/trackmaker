import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ok } from 'neverthrow';

const workerClientMocks = vi.hoisted(() => {
    const initialize = vi.fn();
    const processGPS = vi.fn();
    const processIMU = vi.fn();
    const getFilteredPosition = vi.fn();
    const getState = vi.fn();
    const getLastKalmanGain = vi.fn();
    const dispose = vi.fn();
    const isReady = vi.fn();

    return {
        initialize,
        processGPS,
        processIMU,
        getFilteredPosition,
        getState,
        getLastKalmanGain,
        dispose,
        isReady,
    };
});

vi.mock('./worker-client', () => ({
    KalmanWorkerClient: class {
        initialize = workerClientMocks.initialize;
        processGPS = workerClientMocks.processGPS;
        processIMU = workerClientMocks.processIMU;
        getFilteredPosition = workerClientMocks.getFilteredPosition;
        getState = workerClientMocks.getState;
        getLastKalmanGain = workerClientMocks.getLastKalmanGain;
        dispose = workerClientMocks.dispose;
        isReady = workerClientMocks.isReady;
    },
}));

vi.mock('../utils/coordinate-transformer', () => ({
    CoordinateTransformer: class {
        setReferencePoint = vi.fn();
        geographicToLocal = vi.fn(async ({ longitude, latitude }: { longitude: number; latitude: number }) => ({ x: longitude, y: latitude }));
        localToGeographic = vi.fn(async ({ x, y }: { x: number; y: number }) => ({ longitude: x, latitude: y }));
    },
}));

vi.mock('./imu-fusion-manager', () => ({
    IMUFusionManager: class {
        initialize = vi.fn(async () => ok(undefined));
        isAvailable = vi.fn(async () => false);
        startListening = vi.fn(async () => ok(undefined));
        stopListening = vi.fn(async () => ok(undefined));
    },
}));

vi.mock('../../default-settings', () => ({
    getKalmanInitialAccelerationUncertainty: vi.fn(() => 0.1),
    getKalmanInitialPositionUncertainty: vi.fn(() => 1),
    getKalmanInitialVelocityUncertainty: vi.fn(() => 0.1),
    getKalmanGpsSpeedUncertainty: vi.fn(() => 0.5),
    isDebugModeEnabled: vi.fn(() => false),
}));

describe('LocationProcessor', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        workerClientMocks.initialize.mockResolvedValue(undefined);
        workerClientMocks.processGPS.mockResolvedValue(undefined);
        workerClientMocks.processIMU.mockResolvedValue(undefined);
        workerClientMocks.getFilteredPosition.mockResolvedValue({ x: 120, y: 30 });
        workerClientMocks.getState.mockResolvedValue({
            position: { x: 120, y: 30 },
            velocity: { x: 0, y: 0 },
            acceleration: { x: 0, y: 0 },
            covariance: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],
            timestamp: 0,
        });
        workerClientMocks.getLastKalmanGain.mockResolvedValue(null);
        workerClientMocks.isReady.mockReturnValue(true);
    });

    it('does not synthesize GPS velocity on the very first reading without a trusted heading', async () => {
        const { LocationProcessor } = await import('./location-processor');
        const processor = new LocationProcessor(() => undefined, { useIMU: false });

        const result = await processor.initialize({
            latitude: 30,
            longitude: 120,
            accuracy: 5,
            timestamp: 1000,
            speed: 4,
        });

        expect(result.isOk()).toBe(true);
        expect(workerClientMocks.initialize).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
            x: 120,
            y: 30,
            speed: 4,
            velocity: undefined,
        }));
    });

    it('falls back to course derived from consecutive GPS points when heading is missing', async () => {
        const { LocationProcessor } = await import('./location-processor');
        const processor = new LocationProcessor(() => undefined, { useIMU: false });

        await processor.initialize({
            latitude: 30,
            longitude: 120,
            accuracy: 5,
            timestamp: 1000,
            speed: 4,
        });

        await processor.processGPSLocation({
            latitude: 30,
            longitude: 130,
            accuracy: 5,
            timestamp: 2000,
            speed: 4,
        });

        const processedReading = workerClientMocks.processGPS.mock.calls[0]?.[0];

        expect(processedReading).toEqual(expect.objectContaining({
            x: 130,
            y: 30,
            speed: 4,
        }));
        expect(processedReading.velocity.x).toBeCloseTo(4);
        expect(processedReading.velocity.y).toBeCloseTo(0);
    });

    it('ignores course fallback when the displacement is too small for the reported accuracy', async () => {
        const { LocationProcessor } = await import('./location-processor');
        const processor = new LocationProcessor(() => undefined, { useIMU: false });

        await processor.initialize({
            latitude: 30,
            longitude: 120,
            accuracy: 10,
            timestamp: 1000,
            speed: 4,
        });

        await processor.processGPSLocation({
            latitude: 30,
            longitude: 121,
            accuracy: 10,
            timestamp: 2000,
            speed: 4,
        });

        expect(workerClientMocks.processGPS).toHaveBeenCalledWith(expect.objectContaining({
            velocity: undefined,
        }));
    });
});

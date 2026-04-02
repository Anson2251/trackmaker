import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ok } from 'neverthrow';

const providerMocks = vi.hoisted(() => {
    const onAccelerationReading = vi.fn();
    const onGyroscopeReading = vi.fn();
    const removeEventListener = vi.fn(() => ok(undefined));
    let accelerationCallback: ((reading: { x: number; y: number; z: number; timestamp: number }) => void) | null = null;
    let gyroscopeCallback: ((reading: { x: number; y: number; z: number; timestamp: number }) => void) | null = null;

    return {
        onAccelerationReading,
        onGyroscopeReading,
        removeEventListener,
        getAccelerationCallback: () => accelerationCallback,
        setAccelerationCallback: (callback: typeof accelerationCallback) => {
            accelerationCallback = callback;
        },
        getGyroscopeCallback: () => gyroscopeCallback,
        setGyroscopeCallback: (callback: typeof gyroscopeCallback) => {
            gyroscopeCallback = callback;
        },
    };
});

vi.mock('@/libs/platform', () => ({
    getPlatformServices: vi.fn(() => ok({
        getIMU: () => ok({
            onAccelerationReading: providerMocks.onAccelerationReading,
            onGyroscopeReading: providerMocks.onGyroscopeReading,
            removeEventListener: providerMocks.removeEventListener,
        }),
    })),
}));

describe('IMUFusionManager', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        providerMocks.onAccelerationReading.mockImplementation((callback) => {
            providerMocks.setAccelerationCallback(callback);
            return 11;
        });
        providerMocks.onGyroscopeReading.mockImplementation((callback) => {
            providerMocks.setGyroscopeCallback(callback);
            return 22;
        });
        providerMocks.removeEventListener.mockReturnValue(ok(undefined));
    });

    it('subscribes to provider events and forwards combined IMU readings', async () => {
        const { IMUFusionManager } = await import('./imu-fusion-manager');
        const manager = new IMUFusionManager();
        const callback = vi.fn();

        const initResult = await manager.initialize();
        expect(initResult.isOk()).toBe(true);

        const startResult = await manager.startListening(callback);
        expect(startResult.isOk()).toBe(true);

        providerMocks.getAccelerationCallback()?.({ x: 1, y: 2, z: 3, timestamp: 100 });
        providerMocks.getGyroscopeCallback()?.({ x: 4, y: 5, z: 6, timestamp: 120 });

        expect(callback).toHaveBeenNthCalledWith(1, {
            timestamp: 100,
            acceleration: { x: 1, y: 2, z: 3 },
        });
        expect(callback).toHaveBeenNthCalledWith(2, {
            timestamp: 120,
            acceleration: { x: 1, y: 2, z: 3 },
            gyroscope: { x: 4, y: 5, z: 6 },
        });
    });

    it('removes provider listeners when stopping', async () => {
        const { IMUFusionManager } = await import('./imu-fusion-manager');
        const manager = new IMUFusionManager();

        await manager.initialize();
        await manager.startListening(() => undefined);
        await manager.stopListening();

        expect(providerMocks.removeEventListener).toHaveBeenCalledTimes(2);
        expect(providerMocks.removeEventListener).toHaveBeenCalledWith(11);
        expect(providerMocks.removeEventListener).toHaveBeenCalledWith(22);
    });
});

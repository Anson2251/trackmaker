// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { WebIMUProvider } from './web-imu-provider';

type DeviceOrientationPayload = {
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
    absolute?: boolean;
    webkitCompassHeading?: number;
    timeStamp?: number;
};

type DeviceMotionPayload = {
    acceleration?: { x: number | null; y: number | null; z: number | null } | null;
    accelerationIncludingGravity?: { x: number | null; y: number | null; z: number | null } | null;
    rotationRate?: { alpha: number | null; beta: number | null; gamma: number | null } | null;
    timeStamp?: number;
};

type ListenerMap = Map<string, Set<EventListenerOrEventListenerObject>>;

function createWindowListenerHarness(): {
    listeners: ListenerMap;
    addEventListenerSpy: ReturnType<typeof vi.spyOn>;
    removeEventListenerSpy: ReturnType<typeof vi.spyOn>;
    dispatchOrientation: (payload?: DeviceOrientationPayload) => void;
    dispatchMotion: (payload?: DeviceMotionPayload) => void;
} {
    const listeners: ListenerMap = new Map();

    const addEventListenerSpy = vi.spyOn(window, 'addEventListener').mockImplementation(((type: string, listener: EventListenerOrEventListenerObject) => {
        const existing = listeners.get(type) ?? new Set<EventListenerOrEventListenerObject>();
        existing.add(listener as EventListenerOrEventListenerObject);
        listeners.set(type, existing);
    }) as typeof window.addEventListener);

    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener').mockImplementation(((type: string, listener: EventListenerOrEventListenerObject) => {
        listeners.get(type)?.delete(listener as EventListenerOrEventListenerObject);
    }) as typeof window.removeEventListener);

    const dispatch = (type: string, event: object) => {
        for (const listener of listeners.get(type) ?? []) {
            if (typeof listener === 'function') {
                listener(event as Event);
            } else {
                listener.handleEvent(event as Event);
            }
        }
    };

    return {
        listeners,
        addEventListenerSpy,
        removeEventListenerSpy,
        dispatchOrientation(payload: DeviceOrientationPayload = {}) {
            dispatch('deviceorientation', {
                alpha: 10,
                beta: 20,
                gamma: 30,
                absolute: true,
                timeStamp: 1,
                ...payload,
            });
        },
        dispatchMotion(payload: DeviceMotionPayload = {}) {
            dispatch('devicemotion', {
                acceleration: null,
                accelerationIncludingGravity: null,
                rotationRate: null,
                timeStamp: 1,
                ...payload,
            });
        },
    };
}

function installSensorConstructors(): {
    motionPermissionSpy: ReturnType<typeof vi.fn>;
    orientationPermissionSpy: ReturnType<typeof vi.fn>;
} {
    const motionPermissionSpy = vi.fn().mockResolvedValue('granted');
    const orientationPermissionSpy = vi.fn().mockResolvedValue('granted');

    class FakeDeviceMotionEvent {}
    class FakeDeviceOrientationEvent {}

    Object.assign(FakeDeviceMotionEvent, { requestPermission: motionPermissionSpy });
    Object.assign(FakeDeviceOrientationEvent, { requestPermission: orientationPermissionSpy });

    vi.stubGlobal('DeviceMotionEvent', FakeDeviceMotionEvent);
    vi.stubGlobal('DeviceOrientationEvent', FakeDeviceOrientationEvent);
    Object.assign(window, {
        DeviceMotionEvent: FakeDeviceMotionEvent,
        DeviceOrientationEvent: FakeDeviceOrientationEvent,
    });

    return { motionPermissionSpy, orientationPermissionSpy };
}

async function initProvider(provider: WebIMUProvider, dispatchOrientation: (payload?: DeviceOrientationPayload) => void) {
    const initPromise = provider.init();
    await new Promise((resolve) => setTimeout(resolve, 0));
    dispatchOrientation({ alpha: 0, beta: 0, gamma: 0 });
    return initPromise;
}

function expectVectorCloseTo(
    reading: { x: number; y: number; z: number; timestamp: number } | null,
    expected: { x: number; y: number; z: number; timestamp: number },
): void {
    expect(reading).not.toBeNull();
    expect(reading?.x).toBeCloseTo(expected.x, 5);
    expect(reading?.y).toBeCloseTo(expected.y, 5);
    expect(reading?.z).toBeCloseTo(expected.z, 5);
    expect(reading?.timestamp).toBe(expected.timestamp);
}

describe('WebIMUProvider', () => {
    beforeEach(() => {
        installSensorConstructors();
    });

    it('requests both motion and orientation permissions during init', async () => {
        const { motionPermissionSpy, orientationPermissionSpy } = installSensorConstructors();
        const { dispatchOrientation } = createWindowListenerHarness();
        const provider = new WebIMUProvider();

        const result = await initProvider(provider, dispatchOrientation);

        expect(result.isOk()).toBe(true);
        expect(motionPermissionSpy).toHaveBeenCalledTimes(1);
        expect(orientationPermissionSpy).toHaveBeenCalledTimes(1);
    });

    it('fails init when a required sensor permission is denied', async () => {
        const { motionPermissionSpy } = installSensorConstructors();
        motionPermissionSpy.mockResolvedValueOnce('denied');
        const { dispatchOrientation } = createWindowListenerHarness();
        const provider = new WebIMUProvider();

        const result = await initProvider(provider, dispatchOrientation);

        expect(result.isErr()).toBe(true);
    });

    it('publishes raw orientation readings and caches the latest raw orientation', async () => {
        const { dispatchOrientation } = createWindowListenerHarness();
        const provider = new WebIMUProvider();
        await initProvider(provider, dispatchOrientation);

        const callback = vi.fn();
        provider.onOrientationChange(callback);

        dispatchOrientation({
            alpha: 15,
            beta: 25,
            gamma: 35,
            absolute: false,
            webkitCompassHeading: 270,
            timeStamp: 42,
        });

        const currentResult = await provider.getCurrentOrientation();

        expect(callback).toHaveBeenCalledWith(expect.objectContaining({
            alpha: 15,
            beta: 25,
            gamma: 35,
            absolute: false,
            webkitCompassHeading: 270,
            timestamp: 42,
        }));
        expect(currentResult.isOk() && currentResult.value).toEqual(expect.objectContaining({
            alpha: 15,
            beta: 25,
            gamma: 35,
            absolute: false,
            webkitCompassHeading: 270,
            timestamp: 42,
        }));
    });

    it('shares one devicemotion listener across acceleration and gyroscope subscriptions', async () => {
        const harness = createWindowListenerHarness();
        const provider = new WebIMUProvider();
        await initProvider(provider, harness.dispatchOrientation);

        harness.addEventListenerSpy.mockClear();
        harness.removeEventListenerSpy.mockClear();

        await provider.startAcceleration();
        await provider.startGyroscope();

        const motionAdds = harness.addEventListenerSpy.mock.calls.filter(([type]: [string, ...unknown[]]) => type === 'devicemotion');
        expect(motionAdds).toHaveLength(1);

        provider.stopAcceleration();
        let motionRemoves = harness.removeEventListenerSpy.mock.calls.filter(([type]: [string, ...unknown[]]) => type === 'devicemotion');
        expect(motionRemoves).toHaveLength(0);

        provider.stopGyroscope();
        motionRemoves = harness.removeEventListenerSpy.mock.calls.filter(([type]: [string, ...unknown[]]) => type === 'devicemotion');
        expect(motionRemoves).toHaveLength(1);
    });

    it('emits acceleration readings from devicemotion events', async () => {
        const { dispatchOrientation, dispatchMotion } = createWindowListenerHarness();
        const provider = new WebIMUProvider();
        await initProvider(provider, dispatchOrientation);

        const callback = vi.fn();
        provider.onAccelerationReading(callback);
        await provider.startAcceleration({ frequency: -1, normalizeToENU: false });

        dispatchMotion({
            acceleration: { x: 1, y: 2, z: 3 },
            timeStamp: 123,
        });

        const result = await provider.getAccelerationReading();

        expect(callback).toHaveBeenLastCalledWith({ x: 1, y: 2, z: 3, timestamp: 123 });
        expect(result.isOk() && result.value).toEqual({ x: 1, y: 2, z: 3, timestamp: 123 });
    });

    it('normalizes gyroscope readings into ENU using the cached orientation', async () => {
        const { dispatchOrientation, dispatchMotion } = createWindowListenerHarness();
        const provider = new WebIMUProvider();
        await initProvider(provider, dispatchOrientation);

        dispatchOrientation({ alpha: 90, beta: 0, gamma: 0, timeStamp: 10 });

        const callback = vi.fn();
        provider.onGyroscopeReading(callback);
        await provider.startGyroscope({ frequency: -1, normalizeToENU: true });

        dispatchMotion({
            rotationRate: { alpha: 0, beta: 1, gamma: 0 },
            timeStamp: 200,
        });

        const result = await provider.getGyroscopeReading();
        const reading = result.isOk() ? result.value : null;

        expect(callback).toHaveBeenCalled();
        expectVectorCloseTo(reading, { x: 0, y: -1, z: 0, timestamp: 200 });
    });

    it('removes gravity from accelerationIncludingGravity using the compensated orientation', async () => {
        const { dispatchOrientation, dispatchMotion } = createWindowListenerHarness();
        const provider = new WebIMUProvider();
        await initProvider(provider, dispatchOrientation);

        dispatchOrientation({ alpha: 0, beta: 90, gamma: 0, timeStamp: 20 });

        const callback = vi.fn();
        provider.onAccelerationReading(callback);
        await provider.startAcceleration({ frequency: -1, normalizeToENU: false });

        dispatchMotion({
            acceleration: null,
            accelerationIncludingGravity: { x: 0, y: 9.81, z: 0 },
            timeStamp: 300,
        });

        const result = await provider.getAccelerationReading();
        const reading = result.isOk() ? result.value : null;

        expect(callback).toHaveBeenCalled();
        expectVectorCloseTo(reading, { x: 0, y: 0, z: 0, timestamp: 300 });
    });

    it('ignores orientation events with all-null angles', async () => {
        const { dispatchOrientation } = createWindowListenerHarness();
        const provider = new WebIMUProvider();
        await initProvider(provider, dispatchOrientation);

        dispatchOrientation({ alpha: null, beta: null, gamma: null, timeStamp: 999 });

        const result = await provider.getCurrentOrientation();

        expect(result.isOk() && result.value).not.toEqual(expect.objectContaining({ timestamp: 999 }));
    });
});

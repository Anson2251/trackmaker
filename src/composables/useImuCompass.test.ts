// @vitest-environment jsdom

import { defineComponent } from 'vue';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { err, ok } from 'neverthrow';

const removeEventListener = vi.fn();
const onOrientationChange = vi.fn();
const getCurrentOrientation = vi.fn();
const getIMU = vi.fn();
const getPlatformServices = vi.fn(() => ok({ getIMU }));
const logError = vi.fn();

vi.mock('@/libs/platform', () => ({
    getPlatformServices,
}));

vi.mock('@/libs/error-handling', async () => {
    const actual = await vi.importActual<typeof import('@/libs/error-handling')>('@/libs/error-handling');
    return {
        ...actual,
        logError,
    };
});

describe('useImuCompass', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();

        onOrientationChange.mockImplementation((callback: (orientation: { alpha: number; beta: number; gamma: number; absolute?: boolean; timestamp: number }) => void) => {
            return 1;
        });
        getCurrentOrientation.mockResolvedValue(ok({ alpha: 90, beta: 0, gamma: 0, absolute: true, timestamp: 1 }));
        getIMU.mockReturnValue(ok({
            onOrientationChange,
            getCurrentOrientation,
            removeEventListener,
        }));
    });

    it('updates bearing from the current orientation and live callbacks', async () => {
        const { useImuCompass } = await import('./useImuCompass');
        const wrapper = mount(defineComponent({
            template: '<div />',
            setup() {
                return useImuCompass();
            },
        }));

        await wrapper.vm.startTracking();

        expect(wrapper.vm.bearing).toBe(270);

        onOrientationChange.mock.calls[0]?.[0]({ alpha: 180, beta: 0, gamma: 0, absolute: true, timestamp: 2 });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.bearing).toBe(180);
        expect(wrapper.vm.error).toBeNull();
    });

    it('marks heading as unavailable when orientation is relative only', async () => {
        const { useImuCompass } = await import('./useImuCompass');
        getCurrentOrientation.mockResolvedValueOnce(ok({ alpha: 90, beta: 0, gamma: 0, absolute: false, timestamp: 1 }));

        const wrapper = mount(defineComponent({
            template: '<div />',
            setup() {
                return useImuCompass();
            },
        }));

        await wrapper.vm.startTracking();
        onOrientationChange.mock.calls[0]?.[0]({ alpha: 90, beta: 0, gamma: 0, absolute: false, timestamp: 2 });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.error).toBe('Compass heading unavailable');
    });

    it('removes the listener when tracking stops or component unmounts', async () => {
        const { useImuCompass } = await import('./useImuCompass');
        const wrapper = mount(defineComponent({
            template: '<div />',
            setup() {
                return useImuCompass();
            },
        }));

        await wrapper.vm.startTracking();
        wrapper.vm.stopTracking();
        expect(removeEventListener).toHaveBeenCalledWith(1);

        await wrapper.vm.startTracking();
        wrapper.unmount();
        expect(removeEventListener).toHaveBeenLastCalledWith(1);
    });

    it('stays unsupported when no IMU provider is available', async () => {
        const { useImuCompass } = await import('./useImuCompass');
        getIMU.mockReturnValueOnce(err(new Error('no imu')));

        const wrapper = mount(defineComponent({
            template: '<div />',
            setup() {
                return useImuCompass();
            },
        }));

        await wrapper.vm.startTracking();

        expect(wrapper.vm.isSupported).toBe(false);
        expect(wrapper.vm.isTracking).toBe(false);
        expect(onOrientationChange).not.toHaveBeenCalled();
    });

    it('reports processing errors from orientation callbacks', async () => {
        const { useImuCompass } = await import('./useImuCompass');
        const wrapper = mount(defineComponent({
            template: '<div />',
            setup() {
                return useImuCompass();
            },
        }));

        await wrapper.vm.startTracking();
        onOrientationChange.mock.calls[0]?.[0]({ alpha: Number.NaN, beta: 0, gamma: 0, absolute: true, timestamp: 2 });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.error).toBe('Compass heading unavailable');
    });
});

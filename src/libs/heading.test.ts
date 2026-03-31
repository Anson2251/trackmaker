import { afterEach, describe, expect, it } from 'vitest';

import {
    compensateOrientationForScreen,
    headingToLocalVelocity,
    localVectorToHeading,
    normalizeHeadingIfFinite,
    orientationToCompassHeading,
    relativeHeading,
} from './heading';
import type { DeviceOrientationReading } from './platform/types';

function setWindowOrientation(angle: number): void {
    Object.defineProperty(globalThis, 'window', {
        value: {
            screen: {
                orientation: {
                    angle,
                },
            },
        },
        configurable: true,
        writable: true,
    });
}

function clearWindowOrientation(): void {
    Reflect.deleteProperty(globalThis, 'window');
}

function createOrientationReading(overrides: Partial<DeviceOrientationReading> = {}): DeviceOrientationReading {
    return {
        alpha: 10,
        beta: 20,
        gamma: 30,
        timestamp: 1,
        ...overrides,
    };
}

afterEach(() => {
    clearWindowOrientation();
});

describe('normalizeHeadingIfFinite', () => {
    it('returns undefined for invalid heading values', () => {
        expect(normalizeHeadingIfFinite(undefined)).toBeUndefined();
        expect(normalizeHeadingIfFinite(null)).toBeUndefined();
        expect(normalizeHeadingIfFinite(Number.NaN)).toBeUndefined();
    });

    it('normalizes finite heading values', () => {
        expect(normalizeHeadingIfFinite(-10)).toBe(350);
        expect(normalizeHeadingIfFinite(725)).toBe(5);
    });
});

describe('heading/vector conversions', () => {
    it('computes relative heading in [0, 360)', () => {
        expect(relativeHeading(10, 350)).toBe(20);
        expect(relativeHeading(350, 10)).toBe(340);
    });

    it('converts heading 0 to north-aligned local velocity', () => {
        expect(headingToLocalVelocity(5, 0)).toEqual({ x: 0, y: 5 });
    });

    it('converts heading 90 to east-aligned local velocity', () => {
        const velocity = headingToLocalVelocity(5, 90);

        expect(velocity.x).toBeCloseTo(5);
        expect(velocity.y).toBeCloseTo(0);
    });

    it('converts local vectors back into north-clockwise heading', () => {
        expect(localVectorToHeading(0, 5)).toBeCloseTo(0);
        expect(localVectorToHeading(5, 0)).toBeCloseTo(90);
        expect(localVectorToHeading(-5, 0)).toBeCloseTo(270);
    });
});

describe('compensateOrientationForScreen', () => {
    it('rotates alpha beta gamma when the screen is rotated', () => {
        setWindowOrientation(90);

        const compensated = compensateOrientationForScreen(createOrientationReading());

        expect(compensated.alpha).toBe(100);
        expect(compensated.beta).toBeCloseTo(30);
        expect(compensated.gamma).toBeCloseTo(-20);
    });

    it('keeps the original reading when there is no screen rotation', () => {
        setWindowOrientation(0);

        expect(compensateOrientationForScreen(createOrientationReading())).toEqual(createOrientationReading());
    });
});

describe('orientationToCompassHeading', () => {
    it('prefers webkitCompassHeading when available', () => {
        expect(
            orientationToCompassHeading(createOrientationReading({
                alpha: Number.NaN,
                absolute: false,
                webkitCompassHeading: 12,
            })),
        ).toBe(12);
    });

    it('returns undefined when only relative orientation is available', () => {
        expect(
            orientationToCompassHeading(createOrientationReading({
                absolute: false,
            })),
        ).toBeUndefined();
    });

    it('returns undefined when alpha is invalid', () => {
        expect(
            orientationToCompassHeading(createOrientationReading({
                alpha: Number.NaN,
            })),
        ).toBeUndefined();
    });

    it('applies screen orientation compensation before computing compass heading', () => {
        setWindowOrientation(90);

        expect(orientationToCompassHeading(createOrientationReading({ alpha: 10 }))).toBe(260);
    });
});

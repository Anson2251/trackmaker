import type { DeviceOrientationReading } from './platform/types';

export function normalizeHeading(heading: number): number {
    if (!Number.isFinite(heading)) {
        return 0;
    }

    const normalized = heading % 360;
    return normalized < 0 ? normalized + 360 : normalized;
}

export function relativeHeading(heading: number, referenceHeading: number): number {
    return normalizeHeading(heading - referenceHeading);
}

export function headingToRadians(heading: number): number {
    return normalizeHeading(heading) * Math.PI / 180;
}

export function headingToLocalVelocity(speed: number, heading: number): { x: number; y: number } {
    const headingRad = headingToRadians(heading);
    return {
        x: speed * Math.sin(headingRad),
        y: speed * Math.cos(headingRad)
    };
}

export function localVectorToHeading(x: number, y: number): number {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
        return 0;
    }

    return normalizeHeading(Math.atan2(x, y) * 180 / Math.PI);
}

function getScreenOrientationAngle(): number {
    if (typeof window === 'undefined') {
        return 0;
    }

    if (typeof window.screen?.orientation?.angle === 'number') {
        return window.screen.orientation.angle;
    }

    if (typeof window.orientation === 'number') {
        return window.orientation;
    }

    return 0;
}

export function compensateOrientationForScreen(orientation: DeviceOrientationReading): DeviceOrientationReading {
    // DeviceOrientationEvent angles on Android are often reported in the current
    // screen coordinate frame. Rotate alpha back into the physical device frame
    // first, then downstream code can use the corrected angles in its matrices.
    return {
        ...orientation,
        alpha: normalizeHeading(orientation.alpha + getScreenOrientationAngle())
    };
}

export function orientationToCompassHeading(orientation: DeviceOrientationReading): number {
    if (orientation.webkitCompassHeading !== undefined) {
        return normalizeHeading(orientation.webkitCompassHeading);
    }

    const alpha = compensateOrientationForScreen(orientation).alpha;
    if (!Number.isFinite(alpha)) {
        return 0;
    }

    return normalizeHeading(360 - alpha);
}

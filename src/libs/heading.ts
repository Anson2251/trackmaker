import type { DeviceOrientationReading } from './platform/types';

export function normalizeHeading(heading: number): number {
    if (!Number.isFinite(heading)) {
        return 0;
    }

    const normalized = heading % 360;
    return normalized < 0 ? normalized + 360 : normalized;
}

export function normalizeHeadingIfFinite(heading: number | null | undefined): number | undefined {
    if (typeof heading !== 'number' || !Number.isFinite(heading)) {
        return undefined;
    }

    return normalizeHeading(heading);
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

function getNormalizedScreenOrientationAngle(): number {
    const angle = normalizeHeading(getScreenOrientationAngle());
    const normalizedAngle = Math.round(angle / 90) * 90;
    return normalizedAngle === 360 ? 0 : normalizedAngle;
}

export function compensateOrientationForScreen(orientation: DeviceOrientationReading): DeviceOrientationReading {
    // DeviceOrientationEvent angles on Android are often reported in the current
    // screen coordinate frame. Rotate alpha back into the physical device frame
    // first, then downstream code can use the corrected angles in its matrices.
    const screenAngle = getNormalizedScreenOrientationAngle();
    if (screenAngle === 0) {
        return orientation;
    }

    const radians = screenAngle * Math.PI / 180;
    const cosAngle = Math.cos(radians);
    const sinAngle = Math.sin(radians);

    const alpha = Number.isFinite(orientation.alpha)
        ? normalizeHeading(orientation.alpha + screenAngle)
        : orientation.alpha;
    const beta = Number.isFinite(orientation.beta) && Number.isFinite(orientation.gamma)
        ? orientation.beta * cosAngle + orientation.gamma * sinAngle
        : orientation.beta;
    const gamma = Number.isFinite(orientation.beta) && Number.isFinite(orientation.gamma)
        ? orientation.gamma * cosAngle - orientation.beta * sinAngle
        : orientation.gamma;

    return {
        ...orientation,
        alpha,
        beta,
        gamma
    };
}

export function orientationToCompassHeading(orientation: DeviceOrientationReading): number | undefined {
    const webkitCompassHeading = normalizeHeadingIfFinite(orientation.webkitCompassHeading);
    if (webkitCompassHeading !== undefined) {
        return webkitCompassHeading;
    }

    if (orientation.absolute === false) {
        return undefined;
    }

    const alpha = compensateOrientationForScreen(orientation).alpha;
    if (!Number.isFinite(alpha)) {
        return undefined;
    }

    return normalizeHeading(360 - alpha);
}

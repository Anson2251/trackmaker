/**
 * Unified coordinate transformation utility using proj4rs
 * Provides accurate coordinate transformations for geolocation applications
 */

import { Projection, Point, transform } from 'proj4rs';
import type { GeoCoordinate, ProjectedCoordinate } from '@/utils/proj4-distance';
import { PROJECTIONS } from '@/utils/proj4-distance';
import { GeographicPoint } from '../types';
import gcoord from "gcoord";
import { getEarlySetting } from '@/libs/default-settings';

const EARTH_RADIUS = 6378137;

/**
 * Coordinate transformation options
 */
export interface TransformOptions {
    /** Target projection for transformation */
    projection?: string;
    /** Reference point for local coordinate system */
    referencePoint?: GeoCoordinate;
}

/**
 * Unified coordinate transformer class
 */
export class CoordinateTransformer {
    private referencePoint: GeoCoordinate | null = null;
    private localProjection: string | null = null;
    private geolocationCorrectionEnabled: boolean;
    private cachedWGS84Projection: Projection | null = null;
    private cachedLocalProjection: Projection | null = null;
    private cachedPoint: Point | null = null;

    constructor(options?: TransformOptions) {
        this.geolocationCorrectionEnabled = this.getGeolocationCorrectionSetting();

        if (options?.referencePoint) {
            this.setReferencePoint(options.referencePoint, options.projection);
        }
    }

    dispose(): void {
        if (this.cachedWGS84Projection) {
            this.cachedWGS84Projection.free();
            this.cachedWGS84Projection = null;
        }
        if (this.cachedLocalProjection) {
            this.cachedLocalProjection.free();
            this.cachedLocalProjection = null;
        }
        if (this.cachedPoint) {
            this.cachedPoint.free();
            this.cachedPoint = null;
        }
        this.referencePoint = null;
        this.localProjection = null;
    }

    private getWGS84Projection(): Projection {
        if (!this.cachedWGS84Projection) {
            this.cachedWGS84Projection = new Projection(PROJECTIONS.WGS84);
        }
        return this.cachedWGS84Projection;
    }

    private getLocalProjectionObj(): Projection {
        if (!this.cachedLocalProjection || !this.localProjection) {
            throw new Error('Reference point not set. Call setReferencePoint() first.');
        }
        return this.cachedLocalProjection;
    }

    private getPoint(): Point {
        if (!this.cachedPoint) {
            this.cachedPoint = new Point(0, 0, 0);
        }
        return this.cachedPoint;
    }

    private getGeolocationCorrectionSetting(): boolean {
        return getEarlySetting('geolocationCorrection') ?? false;
    }

    /**
     * Set the reference point for local coordinate transformations
     * @param point - Reference coordinate (longitude, latitude)
     * @param projection - Optional projection to use
     */
    public setReferencePoint(point: GeoCoordinate, projection?: string): void {
        this.referencePoint = point;
        this.localProjection = projection || `+proj=tmerc +lat_0=${point.latitude} +lon_0=${point.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`;

        if (this.cachedLocalProjection) {
            this.cachedLocalProjection.free();
        }
        this.cachedLocalProjection = new Projection(this.localProjection);
    }

    /**
     * Transform geographic coordinates to local Cartesian coordinates
     * @param coord - Geographic coordinate (longitude, latitude)
     * @returns Local Cartesian coordinate (x, y) in meters
     */
    public async geographicToLocal(coord: GeoCoordinate): Promise<ProjectedCoordinate> {
        if (!this.referencePoint || !this.localProjection) {
            throw new Error('Reference point not set. Call setReferencePoint() first.');
        }

        let effectiveCoord = coord;
        if (this.geolocationCorrectionEnabled) {
            const gp = new GeographicPoint(coord.latitude, coord.longitude);
            effectiveCoord = wgs2gcj(gp);
        }

        const from = this.getWGS84Projection();
        const to = this.getLocalProjectionObj();
        const point = this.getPoint();
        point.x = effectiveCoord.longitude;
        point.y = effectiveCoord.latitude;
        point.z = 0;

        try {
            transform(from, to, point);
            return { x: point.x, y: point.y };
        } catch {
            return this.geographicToLocalFallback(coord);
        }
    }

    /**
     * Transform local Cartesian coordinates back to geographic coordinates
     * @param coord - Local Cartesian coordinate (x, y) in meters
     * @returns Geographic coordinate (longitude, latitude)
     */
    public async localToGeographic(coord: ProjectedCoordinate): Promise<GeoCoordinate> {
        if (!this.referencePoint || !this.localProjection) {
            throw new Error('Reference point not set. Call setReferencePoint() first.');
        }

        const from = this.getLocalProjectionObj();
        const to = this.getWGS84Projection();
        const point = this.getPoint();
        point.x = coord.x;
        point.y = coord.y;
        point.z = 0;

        try {
            transform(from, to, point);
            const result = { longitude: point.x, latitude: point.y };
            if (this.geolocationCorrectionEnabled) {
                const gp = new GeographicPoint(result.latitude, result.longitude);
                return gcj2wgs(gp);
            }
            return result;
        } catch {
            return this.localToGeographicFallback(coord);
        }
    }

    /**
     * Fallback method for geographic to local transformation using equirectangular projection
     * @param coord - Geographic coordinate (longitude, latitude)
     * @returns Local Cartesian coordinate (x, y) in meters
     */
    private geographicToLocalFallback(coord: GeoCoordinate): ProjectedCoordinate {
        if (!this.referencePoint) {
            throw new Error('Reference point not set');
        }

        const R = 6371000; // Earth's radius in meters
        const lat1 = this.referencePoint.latitude * Math.PI / 180;
        const lng1 = this.referencePoint.longitude * Math.PI / 180;
        const lat2 = coord.latitude * Math.PI / 180;
        const lng2 = coord.longitude * Math.PI / 180;

        const x = R * (lng2 - lng1) * Math.cos((lat1 + lat2) / 2);
        const y = R * (lat2 - lat1);

        return { x, y };
    }

    /**
     * Fallback method for local to geographic transformation using equirectangular projection
     * @param coord - Local Cartesian coordinate (x, y) in meters
     * @returns Geographic coordinate (longitude, latitude)
     */
    private localToGeographicFallback(coord: ProjectedCoordinate): GeoCoordinate {
        if (!this.referencePoint) {
            throw new Error('Reference point not set');
        }

        const lat1 = this.referencePoint.latitude * Math.PI / 180;
        const lng1 = this.referencePoint.longitude * Math.PI / 180;

        const latitude = (coord.y / EARTH_RADIUS + lat1) * 180 / Math.PI;
        const longitude = (coord.x / (EARTH_RADIUS * Math.cos(lat1)) + lng1) * 180 / Math.PI;

        return { latitude, longitude };
    }

    /**
     * Get current reference point
     */
    public getReferencePoint(): GeoCoordinate | null {
        return this.referencePoint;
    }

    /**
     * Get current local projection string
     */
    public getLocalProjection(): string | null {
        return this.localProjection;
    }

    /**
     * Check if transformer is initialized
     */
    public isInitialized(): boolean {
        return this.referencePoint !== null && this.localProjection !== null;
    }
}

/**
 * Convert WGS84 coordinate to GCJ02 coordinate (China coordinate system)
 * Simple pure transformation function
 * @param location - WGS84 geographic point
 * @returns GCJ02 corrected geographic point
 */
export function wgs2gcj(location: GeographicPoint): GeographicPoint {
    const converted = gcoord.transform([location.longitude, location.latitude], gcoord.WGS84, gcoord.GCJ02);
    return new GeographicPoint(converted[1], converted[0]);
}

export function gcj2wgs(location: GeographicPoint): GeographicPoint {
    const converted = gcoord.transform([location.longitude, location.latitude], gcoord.GCJ02, gcoord.WGS84);
    return new GeographicPoint(converted[1], converted[0]);
}

/**
 * Global coordinate transformer instance
 */
export const globalCoordinateTransformer = new CoordinateTransformer();

/**
 * Convenience function to transform geographic to local coordinates
 */
export async function geographicToLocal(coord: GeoCoordinate, referencePoint?: GeoCoordinate): Promise<ProjectedCoordinate> {
    if (referencePoint) {
        const transformer = new CoordinateTransformer({ referencePoint });
        return transformer.geographicToLocal(coord);
    } else if (globalCoordinateTransformer.isInitialized()) {
        return globalCoordinateTransformer.geographicToLocal(coord);
    } else {
        throw new Error('No reference point available. Provide a referencePoint or set one globally.');
    }
}

/**
 * Convenience function to transform local to geographic coordinates
 */
export async function localToGeographic(coord: ProjectedCoordinate, referencePoint?: GeoCoordinate): Promise<GeoCoordinate> {
    if (referencePoint) {
        const transformer = new CoordinateTransformer({ referencePoint });
        return transformer.localToGeographic(coord);
    } else if (globalCoordinateTransformer.isInitialized()) {
        return globalCoordinateTransformer.localToGeographic(coord);
    } else {
        throw new Error('No reference point available. Provide a referencePoint or set one globally.');
    }
}

/**
 * Initialize the global coordinate transformer with a reference point
 */
export function initializeGlobalTransformer(referencePoint: GeoCoordinate, projection?: string): void {
    globalCoordinateTransformer.setReferencePoint(referencePoint, projection);
}

/**
 * Unified coordinate transformation utility using proj4rs
 * Provides accurate coordinate transformations for geolocation applications
 */

import { Projection, Point, transform } from 'proj4rs';
import type { GeoCoordinate, ProjectedCoordinate } from '@/utils/proj4-distance';
import { PROJECTIONS } from '@/utils/proj4-distance';

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

    constructor(options: TransformOptions = {}) {
        if (options.referencePoint) {
            this.setReferencePoint(options.referencePoint, options.projection);
        }
    }

    /**
     * Set the reference point for local coordinate transformations
     * @param point - Reference coordinate (longitude, latitude)
     * @param projection - Optional projection to use
     */
    public setReferencePoint(point: GeoCoordinate, projection?: string): void {
        this.referencePoint = point;
        // Use local transverse mercator projection centered at reference point
        this.localProjection = projection || `+proj=tmerc +lat_0=${point.latitude} +lon_0=${point.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`;
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

        try {
            // Transform from WGS84 to local projection
            const from = new Projection(PROJECTIONS.WGS84);
            const to = new Projection(this.localProjection);
            const point = new Point(coord.longitude, coord.latitude, 0);

            transform(from, to, point);

            const result: ProjectedCoordinate = { x: point.x, y: point.y };

            // Clean up WASM resources
            from.free();
            to.free();
            point.free();

            return result;
        } catch {
            // Fallback to simple equirectangular projection
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

        try {
            // Transform from local projection to WGS84
            const from = new Projection(this.localProjection);
            const to = new Projection(PROJECTIONS.WGS84);
            const point = new Point(coord.x, coord.y, 0);

            transform(from, to, point);

            const result: GeoCoordinate = {
                longitude: point.x,
                latitude: point.y
            };

            // Clean up WASM resources
            from.free();
            to.free();
            point.free();

            return result;
        } catch {
            // Fallback to simple equirectangular projection
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

        const R = 6371000; // Earth's radius in meters
        const lat1 = this.referencePoint.latitude * Math.PI / 180;
        const lng1 = this.referencePoint.longitude * Math.PI / 180;

        const latitude = (coord.y / R + lat1) * 180 / Math.PI;
        const longitude = (coord.x / (R * Math.cos(lat1)) + lng1) * 180 / Math.PI;

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
 * Global coordinate transformer instance
 */
export const globalCoordinateTransformer = new CoordinateTransformer();

/**
 * Convenience function to transform geographic to local coordinates
 */
export async function geographicToLocal(coord: GeoCoordinate, referencePoint?: GeoCoordinate): Promise<ProjectedCoordinate> {
    if (referencePoint) {
        const transformer = new CoordinateTransformer({ referencePoint });
        return await transformer.geographicToLocal(coord);
    } else if (globalCoordinateTransformer.isInitialized()) {
        return await globalCoordinateTransformer.geographicToLocal(coord);
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
        return await transformer.localToGeographic(coord);
    } else if (globalCoordinateTransformer.isInitialized()) {
        return await globalCoordinateTransformer.localToGeographic(coord);
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
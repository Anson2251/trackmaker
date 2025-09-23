/**
 * Proj4-based distance calculation utility
 * Provides functions to calculate distances between geographic coordinates
 * using proj4 transformations via proj4rs
 */

// Import proj4rs - the WASM build of proj4
import initProj4rs, { Projection, Point, transform } from 'proj4rs';
import proj4wasm from "proj4rs/proj4rs_bg.wasm?url"

// Define common projections
const PROJECTIONS = {
    // Geographic coordinate system (latitude/longitude)
    WGS84: '+proj=longlat +datum=WGS84 +no_defs',
    GRS80: '+proj=latlong +ellps=GRS80 +no_defs',

    // Projected coordinate systems for distance calculations
    UTM_ZONE_50N: '+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs', // Beijing area
    UTM_ZONE_51N: '+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs', // Shanghai area

    // Gauss-Kruger / Transverse Mercator projections
    CGCS2000_3_DEGREE: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
    BEIJING_1954: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs',

    // Web Mercator (used by most web maps)
    WEB_MERCATOR: '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs'
} as const;

// Coordinate type definitions
export interface GeoCoordinate {
    longitude: number;
    latitude: number;
}

export interface ProjectedCoordinate {
    x: number;
    y: number;
}

export interface DistanceOptions {
    projection?: string;
    useHaversine?: boolean;
    ellipsoid?: string;
}

// WASM module initialization state
let isProj4rsInitialized = false;

/**
 * Initialize the proj4rs WASM module
 * This must be called before any other proj4rs functions
 */
export async function initProj4rsModule(): Promise<void> {
    if (!isProj4rsInitialized) {
        try {
            console.log("[Proj4WASM] Fetching WASM module...")
            await initProj4rs({module_or_path: proj4wasm});
            isProj4rsInitialized = true;
            console.log("[Proj4WASM] WASM module loaded successfully.")
        }
        catch (error) {
            console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback.");
            console.error(error);
            isProj4rsInitialized = true; // at least we tried
        }
    }
}

/**
 * Transform coordinates from one projection to another
 * @param fromProjection - Source projection string
 * @param toProjection - Target projection string
 * @param coordinate - Coordinate to transform [lng, lat]
 * @returns Transformed coordinate [x, y] in meters
 */
export async function transformCoordinate(
    fromProjection: string,
    toProjection: string,
    coordinate: [number, number]
): Promise<[number, number]> {
    try {
        // Ensure WASM module is initialized
        await initProj4rsModule();

        const from = new Projection(fromProjection);
        const to = new Projection(toProjection);
        const point = new Point(coordinate[0], coordinate[1], 0);

        transform(from, to, point);

        const result: [number, number] = [point.x, point.y];

        // Clean up WASM resources
        from.free();
        to.free();
        point.free();

        return result;
    } catch (error) {
        throw new Error(`Failed to transform coordinate: ${error instanceof Error ? error.message : String(error)}`);
    }
}

/**
 * Calculate Euclidean distance between two points in projected coordinates
 * @param point1 - First point {x, y}
 * @param point2 - Second point {x, y}
 * @returns Distance in meters
 */
export function calculateEuclideanDistance(
    point1: ProjectedCoordinate,
    point2: ProjectedCoordinate
): number {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculate haversine distance between two geographic coordinates
 * @param coord1 - First coordinate {lng, lat}
 * @param coord2 - Second coordinate {lng, lat}
 * @returns Distance in meters
 */
export function calculateHaversineDistance(
    coord1: GeoCoordinate,
    coord2: GeoCoordinate
): number {
    const R = 6371000; // Earth's radius in meters

    const lat1Rad = coord1.latitude * Math.PI / 180;
    const lat2Rad = coord2.latitude * Math.PI / 180;
    const deltaLat = (coord2.latitude - coord1.latitude) * Math.PI / 180;
    const deltaLng = (coord2.longitude - coord1.longitude) * Math.PI / 180;

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

/**
 * Calculate distance between two geographic coordinates using proj4 transformation
 * @param coord1 - First coordinate {lng, lat}
 * @param coord2 - Second coordinate {lng, lat}
 * @param options - Distance calculation options
 * @returns Distance in meters
 */
export async function calculateProj4Distance(
    coord1: GeoCoordinate,
    coord2: GeoCoordinate,
    options: DistanceOptions = {}
): Promise<number> {
    const {
        projection = PROJECTIONS.CGCS2000_3_DEGREE,
        useHaversine = false
    } = options;

    if (useHaversine) {
        return calculateHaversineDistance(coord1, coord2);
    }

    try {
        // Transform both coordinates to the target projection
        const projCoord1 = await transformCoordinate(PROJECTIONS.WGS84, projection, [coord1.longitude, coord1.latitude]);
        const projCoord2 = await transformCoordinate(PROJECTIONS.WGS84, projection, [coord2.longitude, coord2.latitude]);

        // Calculate Euclidean distance in projected space
        return calculateEuclideanDistance(
            { x: projCoord1[0], y: projCoord1[1] },
            { x: projCoord2[0], y: projCoord2[1] }
        );
    } catch (error) {
        console.warn('Failed to use proj4 distance calculation, falling back to haversine:', error);
        return calculateHaversineDistance(coord1, coord2);
    }
}

/**
 * Calculate distance between multiple points along a path
 * @param coordinates - Array of coordinates
 * @param options - Distance calculation options
 * @returns Total distance in meters
 */
export async function calculatePathDistance(
    coordinates: GeoCoordinate[],
    options: DistanceOptions = {}
): Promise<number> {
    if (coordinates.length < 2) {
        return 0;
    }

    let totalDistance = 0;
    for (let i = 1; i < coordinates.length; i++) {
        totalDistance += await calculateProj4Distance(coordinates[i - 1], coordinates[i], options);
    }

    return totalDistance;
}

/**
 * Get the appropriate UTM zone projection for a given longitude
 * @param longitude - Longitude in degrees
 * @returns UTM projection string
 */
export function getUTMProjection(longitude: number): string {
    const zone = Math.floor((longitude + 180) / 6) + 1;
    return `+proj=utm +zone=${zone} +datum=WGS84 +units=m +no_defs`;
}

/**
 * Format distance in appropriate units
 * @param meters - Distance in meters
 * @returns Formatted string with appropriate units
 */
export function formatDistance(meters: number): string {
    if (meters < 1000) {
        return `${Math.round(meters)} m`;
    } else if (meters < 10000) {
        return `${(meters / 1000).toFixed(1)} km`;
    } else {
        return `${Math.round(meters / 1000)} km`;
    }
}

// Export projections for external use
export { PROJECTIONS };

// Default export
export default {
    calculateProj4Distance,
    calculateHaversineDistance,
    calculatePathDistance,
    transformCoordinate,
    calculateEuclideanDistance,
    getUTMProjection,
    formatDistance,
    PROJECTIONS
};

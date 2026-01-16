import { GeographicPoint } from "../types";
import type { LocationCallback, LocationSource } from "../types";
import { LocationEventEmitter } from "./location-event-emitter";

/**
 * LocationStateManager class manages the state of geographic locations.
 * It keeps track of the current location, its source backend, and provides
 * methods for updating, retrieving, and subscribing to location changes.
 */
export class LocationStateManager {
    // Private property to store the current geographic location
    private currentLocation: GeographicPoint | null = null;
    // Private property to store the source backend of the current location
    private currentBackend: LocationSource | null = null;
    // Private property to handle location change events
    private eventEmitter: LocationEventEmitter;

    /**
     * Creates an instance of LocationStateManager.
     * Initializes the event emitter for location change notifications.
     */
    constructor() {
        this.eventEmitter = new LocationEventEmitter();
    }

    /**
     * Updates the current location and emits an event with the new location and source
     * @param location The new geographic point location
     * @param source The source of the location update
     */
    updateLocation(location: GeographicPoint, source: LocationSource): void {
        this.currentLocation = location;
        this.currentBackend = source;
        this.eventEmitter.emit(location, source);
    }

    getCurrentLocation(): GeographicPoint | null {
        return this.currentLocation;
    }

    getCurrentBackend(): LocationSource | null {
        return this.currentBackend;
    }

    subscribe(callback: LocationCallback): () => void {
        return this.eventEmitter.subscribe(callback);
    }

    clear(): void {
        this.currentLocation = null;
        this.currentBackend = null;
        this.eventEmitter.clear();
    }

    hasLocation(): boolean {
        return this.currentLocation !== null;
    }
}

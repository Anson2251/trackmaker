import { GeographicPoint } from '../types';
import type { LocationCallback, LocationSource } from '../types';

/**
 * A class that implements an event emitter for location events.
 * It allows subscribing to location updates and emitting location events to all subscribers.
 */
export class LocationEventEmitter {
    // A set to store all callback functions subscribed to location events
    private callbacks = new Set<LocationCallback>();

    /**
     * Subscribe a callback function to receive location events
     * @param callback - The function to be called when a location event is emitted
     * @returns A function that can be called to unsubscribe the callback
     */
    subscribe(callback: LocationCallback): () => void {
        this.callbacks.add(callback);
        // Return an unsubscribe function that removes the callback from the set
        return () => this.callbacks.delete(callback);
    }

    /**
     * Emit a location event to all subscribed callbacks
     * @param location - The geographic point containing location data
     * @param source - The source of the location data
     */
    emit(location: GeographicPoint, source: LocationSource): void {
        // Iterate through all callbacks and execute them with the provided location and source
        for (const callback of this.callbacks) {
            try {
                callback(location, source);
            } catch (error) {
                // Log any errors that occur during callback execution
                console.error('[LocationEventEmitter] Callback error:', error);
            }
        }
    }

    /**
     * Clear all subscribed callbacks
     */
    clear(): void {
        this.callbacks.clear();
    }

    /**
     * Get the number of currently subscribed callbacks
     * @returns The size of the callbacks set
     */
    get size(): number {
        return this.callbacks.size;
    }
}

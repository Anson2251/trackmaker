/**
 * Class representing a bidirectional map.
 * @template T The type of the keys in the forward map.
 * @template U The type of the values in the forward map.
 */
export class BidirectionalMap<T, U> {
    /**
     * The forward map.
     */
    private forwardMap: Map<T, U> = new Map();

    /**
     * The backward map.
     */
    private backwardMap: Map<U, T> = new Map();

    /**
     * Constructs a new bidirectional map.
     * @param data The initial data to populate the map with.
     */
    constructor(data: { key1: T, key2: U }[] = []) {
        data.forEach((i) => {
            this.forwardMap.set(i.key1, i.key2);
            this.backwardMap.set(i.key2, i.key1);
        })
    }

    /**
     * Returns the value associated with the given key in the forward map.
     * @param key The key to look up.
     * @returns The value associated with the key, or undefined if the key is not in the map.
     */
    getForward(key: T): U | undefined {
        return this.forwardMap.get(key);
    }

    /**
     * Returns the key associated with the given value in the backward map.
     * @param key The value to look up.
     * @returns The key associated with the value, or undefined if the value is not in the map.
     */
    getBackward(key: U): T | undefined {
        return this.backwardMap.get(key);
    }

    /**
     * Sets the value associated with the given key in the forward map, and its associated key in the backward map.
     * @param key1 The key to set.
     * @param key2 The value to set.
     */
    set(key1: T, key2: U) {
        this.forwardMap.set(key1, key2);
        this.backwardMap.set(key2, key1);
    }

    /**
     * Removes the key and its associated value in both the forward and backward maps.
     * @param key The key to remove.
     */
    removeForward(key: T) {
        this.backwardMap.delete(this.getForward(key)!);
        this.forwardMap.delete(key);
    }

    /**
     * Removes the value and its associated key in both the forward and backward maps.
     * @param key The value to remove.
     */
    removeBackward(key: U) {
        this.forwardMap.delete(this.getBackward(key)!);
        this.backwardMap.delete(key);
    }

    /**
     * Returns an array of all the keys in the forward map.
     * @returns An array of all the keys in the forward map.
     */
    forwardKeys(): T[] {
        return Array.from(this.forwardMap.keys());
    }

    /**
     * Returns an array of all the values in the backward map.
     * @returns An array of all the values in the backward map.
     */
    backwardKeys(): U[] {
        return Array.from(this.backwardMap.keys());
    }

    /**
     * Iterates over the forward map, calling the given callback function for each key-value pair.
     * @param callback The callback function to call for each key-value pair.
     */
    iterateForward(callback: (key: T, value: U, map: Map<T, U>) => void) {
        this.forwardMap.forEach((value: U, key: T, map: Map<T, U>) => callback(key, value, map));
    }

    /**
     * Iterates over the backward map, calling the given callback function for each key-value pair.
     * @param callback The callback function to call for each key-value pair.
     */
    iterateBackward(callback: (key: U, value: T, map: Map<U, T>) => void) {
        this.backwardMap.forEach((value: T, key: U, map: Map<U, T>) => callback(key, value, map));
    }

    /**
     * Returns whether the given key is in the forward map.
     * @param key The key to check.
     * @returns Whether the key is in the forward map.
     */
    hasForward(key: T): boolean {
        return this.forwardMap.has(key);
    }

    /**
     * Returns whether the given value is in the backward map.
     * @param key The value to check.
     * @returns Whether the value is in the backward map.
     */
    hasBackward(key: U): boolean {
        return this.backwardMap.has(key);
    }
}

export default BidirectionalMap;

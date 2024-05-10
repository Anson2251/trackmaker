export class BidirectionalMap<T, U> {
    private forwardMap: Map<T, U> = new Map();
    private backwardMap: Map<U, T> = new Map();
    constructor(data: { key1: T, key2: U }[] = []) {
        data.forEach((i) => {
            this.forwardMap.set(i.key1, i.key2);
            this.backwardMap.set(i.key2, i.key1);
        })
    }

    getForward(key: T): U | undefined {
        return this.forwardMap.get(key);
    }

    getBackward(key: U): T | undefined {
        return this.backwardMap.get(key);
    }

    set(key1: T, key2: U) {
        this.forwardMap.set(key1, key2);
        this.backwardMap.set(key2, key1);
    }

    removeForward(key: T) {
        this.backwardMap.delete(this.getForward(key)!);
        this.forwardMap.delete(key);
    }

    removeBackward(key: U) {
        this.forwardMap.delete(this.getBackward(key)!);
        this.backwardMap.delete(key);
    }

    forwardKeys(): T[] {
        return Array.from(this.forwardMap.keys());
    }

    backwardKeys(): U[] {
        return Array.from(this.backwardMap.keys());
    }

    iterateForward(callback: (key: T, value: U, map: Map<T, U>) => void) {
        this.forwardMap.forEach((value: U, key: T, map: Map<T, U>) => callback(key, value, map));
    }

    iterateBackward(callback: (key: U, value: T, map: Map<U, T>) => void) {
        this.backwardMap.forEach((value: T, key: U, map: Map<U, T>) => callback(key, value, map));
    }

    hasForward(key: T): boolean {
        return this.forwardMap.has(key);
    }

    hasBackward(key: U): boolean {
        return this.backwardMap.has(key);
    }
}

export default BidirectionalMap;

/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { v4 as uuidV4 } from "uuid";

export abstract class CartoSketchComponent<T> {
    abstract properties: Record<string, T>;
    id: string;
    name: string;
    constructor() {
        this.id = uuidV4();
        this.name = this.id;
    }

    setProperties(options: T): void {
        Object.assign(this.properties, options);
        this.onPropertyChange();
    }

    setProperty(property: string, value: any): boolean {
        if (!(property in this.properties)) {
            console.warn(`Invalid property: ${property}`);
            return false;
        }
        (this.properties as any)[property] = value;
        this.onPropertyChange();
        return true;
    }

    getProperties(): Readonly<Record<string, T>> {
        return Object.freeze(this.properties);
    }

    getProperty(key: string): any | undefined {
        if (!(key in this.properties)) {
            return undefined;
        } else {
            return (this.properties as any)[key] as any;
        }
    }

    abstract onPropertyChange(): void;

    abstract getNativeID(): number;

    getComponentID(): string {
        return this.id;
    }

    setName(name: string){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    abstract exportToGeoJSON(): Object;
}

export default CartoSketchComponent;

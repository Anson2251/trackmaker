import {v4 as uuidV4} from "uuid";
import type {GeographicPoint} from "@/utils/geolocation";

export type AcceptedComponentPropertyDataType = boolean | number | string;
export type ComponentProperties = Record<string, AcceptedComponentPropertyDataType>;

type ComponentEventHandler<T extends ComponentProperties> = {
    type: string,
    id: number,
    callback: (component: DrawingComponentProxy<T>) => void,
}

export abstract class DrawingComponentProxy<T extends ComponentProperties> {
    properties: T;
    id: string = uuidV4();
    name: string = "Untitled";
    coordinates: GeographicPoint[];
    private handlers: ComponentEventHandler<T>[] = [];
    abstract type: string;

    protected constructor(coordinates: GeographicPoint[], properties: T, id?: string, name?: string) {
        this.coordinates = coordinates;
        this.properties = Object.assign({}, properties);
        if (id) this.id = id;
        if (name) this.name = name;
    }

    private executeHandler(type: string): void {
        this.handlers.forEach(item => {
            if (item.type === type) item.callback(this);
        });
    }

    addHandler(type: string, callback: ComponentEventHandler<T>["callback"]): number {
        const id = (this.handlers.length > 0 ? this.handlers[this.handlers.length].id + 1 : 0);
        this.handlers.push({
            type: type,
            id: id,
            callback: callback
        });
        return id;
    }

    removeHandler(id: number): void{
        this.handlers = this.handlers.filter((handler) => handler.id !== id);
    }

    setProperties(options: T): void {
        Object.assign(this.properties, options);

        this.executeHandler("propertyChange");
    }

    setProperty(key: keyof T, value: any): boolean {
        if (!(key in this.properties)) {
            console.warn(`Invalid property: ${key as string}`);
            return false;
        }

        if(this.properties[key] === value) return true;

        this.properties[key] = value;
        this.executeHandler("propertyChange");
        return true;
    }

    getProperties(): Readonly<T> {
        return Object.freeze(this.properties);
    }

    getProperty(key: keyof T): AcceptedComponentPropertyDataType | undefined {
        if (!(key in this.properties)) return undefined;
        else return this.properties[key] as any;
    }

    getPropertiesKeys(): string[] {
        return Object.keys(this.properties);
    }

    setLocations(coordinates: GeographicPoint[]): void {
        this.coordinates = coordinates;
        this.executeHandler("locationChange");
    }

    getLocations(): Readonly<GeographicPoint[]> {
        return Object.freeze(this.coordinates);
    }

    abstract exportToGeoJSON(): Object;
}

export default DrawingComponentProxy;

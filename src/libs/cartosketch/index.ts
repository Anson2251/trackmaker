import localforage from "localforage";

import * as RouteNamespace from "@/libs/cartosketch/route";
import * as DraftNamespace from "@/libs/cartosketch/draft";

import CartoSketchDraft from "@/libs/cartosketch/draft";
import CartoSketchRoute from "@/libs/cartosketch/route";

import type {GeographicSketchType} from "@/libs/cartosketch/definitions";
import {v4 as uuidV4} from "uuid";


// for the data stored in the database, it follows the format of Geographic...
// after parsing, the data should be returned as CartoSketch...
export type GeographicSketchGeoJSON = {
    type: "FeatureCollection",
    features: {
        type: "Feature",
        properties: any,
        geometry: {
            type: "Polygon" | "LineString" | "Point",
            coordinates: [number, number] | [number, number][]
        }
    }[]
}

export type CartoSketchInfo = {
    name: string,
    id: string,
}


export class CartoSketch {
    readonly id: string;
    name: string;
    routes: CartoSketchRoute;
    drafts: CartoSketchDraft;

    constructor(name: string, id = uuidV4(), routes?: CartoSketchRoute, drafts?: CartoSketchDraft) {
        this.name = name;
        this.id = id;
        this.routes = routes || new CartoSketchRoute(name, [], id);
        this.drafts = drafts || new CartoSketchDraft(name, [], id);
    }

    exportToStorage(): GeographicSketchType {
        return {
            id: this.id,
            name: this.name,
            routes: this.routes.exportToStorage(),
            drafts: this.drafts.exportToStorage()
        }
    }

    exportAsGeoJSON(): GeographicSketchGeoJSON {
        const routeFeatures = this.routes.exportAsGeoJSON().features;
        const draftFeatures = this.drafts.exportAsGeoJSON().features;
        const features: GeographicSketchGeoJSON["features"] = [...routeFeatures, ...draftFeatures];

        return {
            type: "FeatureCollection",
            features: features
        }
    }

    async save() {
        await CartoSketch.write(this);
    }
}

export namespace CartoSketch {
    /** The storage database name */
    export const storageSpace = "cartosketch_storage";
    /** The database instance */
    export const storage = localforage.createInstance({name: storageSpace});

    /** The namespace for routes */
    export import Routes = RouteNamespace;
    /** The namespace for drafts */
    export import Drafts = DraftNamespace;

    /**
     * Checks if a CartoSketch with the given ID exists in the storage.
     *
     * @param id - The ID of the CartoSketch to check.
     * @return A promise that resolves to true if the CartoSketch exists, false otherwise.
     */
    export async function exist(id: string) {
        try {
            return Promise.resolve(!!(await storage.getItem(id)));
        } catch (e) {
            return Promise.reject(e);
        }
    }

    /**
     * Retrieves a list of CartoSketch objects from the storage.
     *
     * @return A promise that resolves to an array of raw geographic sketches.
     */
    export async function getInfoList(): Promise<CartoSketchInfo[]> {
        const info: CartoSketchInfo[] = [];

        for (const id of (await getIDList())) {
            const sketch = await readRaw(id);
            if (sketch) {
                info.push({
                    name: sketch.name,
                    id: sketch.id
                });
            } else {
                console.error(`CartoSketch ${id} cannot be read, ignore`);
            }
        }

        return Promise.resolve(info);
    }

    /**
     * Reads a CartoSketch from the storage based on the provided data.
     *
     * @param data - The data containing the name, id, routes, and drafts of the CartoSketch.
     * @return The CartoSketch object created from the provided data.
     */
    export function readFromStorage(data: GeographicSketchType): CartoSketch {
        return new CartoSketch(data.name, data.id, CartoSketch.Routes.CartoSketchRoute.readFromStorage(data.routes), CartoSketch.Drafts.CartoSketchDraft.readFromStorage(data.drafts));
    }

    /**
     * Retrieves a list of IDs from the storage.
     *
     * @return A promise that resolves to an array of IDs.
     */
    export async function getIDList(): Promise<string[]> {
        return await storage.keys();
    }

    /**
     * Retrieves a list of CartoSketch objects from the storage.
     *
     * @return A promise that resolves to an array of CartoSketch objects.
     */
    export async function getList(): Promise<CartoSketch[]> {
        const sketches: CartoSketch[] = [];
        for (const id of (await getIDList())) {
            sketches.push(await read(id));
        }
        return Promise.resolve(sketches);
    }

    /**
     * Retrieves a list of raw geographic sketches from the storage.
     *
     * @return A promise that resolves to an array of raw geographic sketches.
     */
    export async function getListRaw(): Promise<GeographicSketchType[]> {
        const sketches: GeographicSketchType[] = [];

        for (const id of (await getIDList())) {
            const sketch = await readRaw(id);
            if (sketch) sketches.push(sketch);
        }

        return Promise.resolve(sketches);
    }


    /**
     * Removes a CartoSketch from the storage based on the provided ID.
     *
     * @param {string} id - The ID of the CartoSketch to remove.
     * @return {Promise<void>} A promise that resolves when the CartoSketch is successfully removed, or rejects with an error message if the CartoSketch does not exist or cannot be removed.
     */
    export async function remove(id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            exist(id)
                .then(async (exist) => {
                    if (exist) {
                        await deleteRaw(id)
                            .then(() => resolve())
                            .catch((err) => reject(`Fail to remove the CartoSketch with id: ${id}. Reason: ${err}`));
                    } else {
                        reject("The CartoSketch with id: " + id + " cannot be found and will not be removed");
                    }
                })
                .catch((err) => {
                    reject(`Fail to identify the existence of the CartoSketch with id: ${id}. Reason: ${err}. It will not be removed`);
                });
        });
    }

    /**
     * Reads a CartoSketch from the storage based on the provided ID.
     *
     * @param id - The ID of the CartoSketch to read.
     * @return A promise that resolves to the read CartoSketch, or rejects with an error message if the CartoSketch does not exist or is empty.
     */
    export async function read(id: string): Promise<CartoSketch> {
        if (!await exist(id)) return Promise.reject("The CartoSketch with id: " + id + " not found");
        const data = await readRaw(id);

        if (data) return Promise.resolve(readFromStorage(data));
        else return Promise.reject("The CartoSketch with id: " + id + " is empty. It cannot be read");
    }

    /**
     * Saves a CartoSketch to the storage.
     *
     * @param sketch - The CartoSketch object to be saved.
     * @return A promise that resolves when the CartoSketch is saved successfully.
     */
    export async function write(sketch: CartoSketch): Promise<void> {
        await writeRaw(sketch.id, sketch.exportToStorage());
    }

    /**
     * Reads a raw item from the storage based on the provided ID, undefined if the item does not exist.
     *
     * @param id - The ID of the item to read.
     * @return A promise that resolves to the read item, or rejects with an error if the item does not exist.
     */
    export async function readRaw(id: string): Promise<GeographicSketchType | undefined> {
        return new Promise((resolve, reject) => {
            storage.getItem<GeographicSketchType>(id)
                .then(data => resolve(data !== null ? data : undefined))
                .catch(err => reject(err));
        });
    }

    /**
     * Writes raw data to the storage with the given ID.
     *
     * @param id - The ID of the item to write.
     * @param data - The data to write.
     * @return A promise that resolves when the data is successfully written, or rejects with an error if there was an issue.
     */
    export function writeRaw(id: string, data: GeographicSketchType): Promise<void> {
        return new Promise((resolve, reject) => {
            storage.setItem(id, data)
                .then(() => resolve())
                .catch(err => reject(err));
        })
    }

    /**
     * Deletes a raw item from the storage based on the provided ID.
     *
     * @param id - The ID of the item to delete.
     * @return A promise that resolves when the item is successfully deleted, or rejects with an error if there was an issue.
     */
    export function deleteRaw(id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            storage.removeItem(id)
                .then(() => resolve())
                .catch(err => reject(err));
        })
    }
}

export default CartoSketch;

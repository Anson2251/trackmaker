import localforage from "localforage";
import { v4 as uuidV4 } from "uuid";

import type { GeographicPoint } from "../geolocation";

export type GeoJSONPoint = [number, number];

export type GeographicRouteItem = {
    name: string,
    id: string,
    properties: {
        strokeColor?: string,
        strokeThickness?: number,
        visible?: boolean
    }
    points: GeographicPoint[]
};

export type GeographicRoute = {
    id: string;
    name: string,
    routes: GeographicRouteItem[]
};

export type RouteList = GeographicRoute[]

export namespace CartoSketchRoutes {
    export const storageSpace = "routes_storage"
    export const storage = localforage.createInstance({ name: storageSpace });

    /**
     * Simply create a route from the templete. This action will not write the route into the database.
     * @param name 
     * @param points The routes of the route, if it is not provided, an empty array will be assigned
     * @returns 
     */
    export function createItem(name: string, points: GeographicPoint[] = [], properties?: GeographicRouteItem["properties"]): GeographicRouteItem {
        return {
            name: name,
            id: uuidV4(),
            properties: {
                strokeColor: properties?.strokeColor,
                strokeThickness: properties?.strokeThickness,
                visible: properties?.visible
            },
            points: points
        }
    }

    /**
     * Simply create a route from the templete. This action will not write the route into the database.
     * @param name 
     * @param routes The routes of the route, if it is not provided, an empty route will be assigned
     * @returns 
     */
    export function create(name: string, id?: string, routes: GeographicRouteItem[] = []): GeographicRoute {
        const newID = id || uuidV4();
        return {
            id: newID,
            name: name,
            routes: routes
        }
    }

    export function existName(name: string): Promise<boolean> {
        return new Promise((resolve) => {
            storage.iterate((value: GeographicRoute) => {
                if (value.name === name) resolve(true);
            });
            resolve(false);
        })
    }

    export async function exist(id: string): Promise<boolean> {
        return (await storage.keys()).includes(id);
    }

    export async function getNameList() {
        return await storage.keys();
    }

    export async function getName(id: string) {
        return (await read(id)).name;
    }

    /**
     * Reads the list of routes from the route storage
     *
     * @return A Promise that resolves to an array of RouteList objects, contains name and route
     */
    export async function readList(): Promise<RouteList> {
        const routeIDs = await storage.keys(); // get the list of names of the routes
        const collections: RouteList = [];

        for (const id of routeIDs) {
            collections.push(await read(id));
        }

        return Promise.resolve(collections);
    }

    /**
     * Reads a route from the route storage by its name.
     *
     * @param id - The id of the route to read.
     * @return A Promise that resolves to the GeographicRoute object if found,
     * or rejects with an error message if the name is not provided or the route is not found.
     */
    export async function read(id: string): Promise<GeographicRoute> {
        if (!exist(id)) return Promise.reject(`Route id: ${id} not found`);

        const route = await storage.getItem<GeographicRoute>(id);
        if (route) return Promise.resolve(route);
        else return Promise.reject(`Failed to read route ${id}`);
    }

    /**
     * Modifiy a route in the route storage
     *
     * @param id - The id of the route to write.
     * @param routes - The route to write.
     * @return A Promise that resolves the ID assigned to the route when the route is written successfully
     */
    export async function save(id: string, name?: string, routes?: GeographicRouteItem[]): Promise<void> {
        if (!exist(id) && !name) return Promise.reject("Name should be also provided when previous route not exist");

        const previousRoute = (await exist(id)) ? (await read(id)) : create(name!, id);
        await storage.setItem<GeographicRoute>(id, {
            id: id,
            name: name || previousRoute.name,
            routes: routes || previousRoute.routes
        })
        return Promise.resolve();
    }

    export async function remove(id: string): Promise<void> {
        if (!exist(id)) return Promise.reject(`Route id: ${id} not found`);

        await storage.removeItem(id);
        return Promise.resolve()
    }
}


export default CartoSketchRoutes;

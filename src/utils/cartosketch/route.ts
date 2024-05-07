import localforage from "localforage";
import { createID } from "./utils";

export type GeographicPoint = {
    latitude: number;
    longitude: number;
}

export type GeoJSONPoint = [number, number];

export type GeographicRoute = {
    id: string;
    name: string,
    route: GeographicPoint[]
};

export type RouteList = GeographicRoute[]

export namespace CartoSketchRoutes {
    export const routeStorageSpace = "routes_storage"
    export const routeStorage = localforage.createInstance({ name: routeStorageSpace });

    export async function getNameList() {
        return await routeStorage.keys();
    }
    /**
     * Reads the list of routes from the route storage
     *
     * @return A Promise that resolves to an array of RouteList objects, contains name and route
     */
    export async function readRouteList(): Promise<RouteList> {
        const routeIDs = await routeStorage.keys(); // get the list of names of the routes
        const collections: RouteList = [];

        routeIDs.forEach(async (id) => {
            collections.push(await readRoute(id));
        });

        return Promise.resolve(collections);
    }

    /**
     * Reads a route from the route storage by its name.
     *
     * @param id - The id of the route to read.
     * @return A Promise that resolves to the GeographicRoute object if found,
     * or rejects with an error message if the name is not provided or the route is not found.
     */
    export async function readRoute(id: string): Promise<GeographicRoute> {
        if (!id) return Promise.reject("No id provided");
        if (!(await routeStorage.keys()).includes(id)) return Promise.reject(`Route id: ${id} not found`);

        const route = await routeStorage.getItem<GeographicRoute>(id);
        if (route) return Promise.resolve(route);
        else return Promise.reject(`Failed to read route ${id}`);
    }

    /**
     * Writes a route to the route storage.
     *
     * @param name - The name of the route to write.
     * @param routes - The route to write.
     * @return A Promise that resolves the ID assigned to the route when the route is written successfully
     */
    export async function writeRoute(name: string, routes: GeographicPoint[]): Promise<string> {
        if (!name || !routes) return Promise.reject("No name or routes provided");

        const newID = createID();
        try {
            await routeStorage.setItem<GeographicRoute>(newID, {
                id: newID,
                name: name,
                route: routes
            })
            return Promise.resolve(newID);
        }
        catch (err) {
            return Promise.reject(err);
        }
    }

}


export default CartoSketchRoutes;

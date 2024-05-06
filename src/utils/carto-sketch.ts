import localforage from "localforage";
import bingMapsGeojson from "@/components/BingMap/plugins/geojson";

export namespace CartoSketch {
    export type GeographicPoint = {
        latitude: number;
        longitude: number;
    }

    export type GeoJSONPoint = [number, number];

    export type GeographicRoute = GeographicPoint[];

    export type GeographicDraft = {
        type: "Feature",
        geometry: {
            type: "Polygon" | "LineString" | "Point",
            coordinates: GeoJSONPoint | GeoJSONPoint[];
        },
        properties: {
            title: string,
            subTitle: string;
            class: "Polygon" | "LineString" | "Point" | "Label",
            label: string,
            fillColor: string,
            strokeColor: string,
            strokeThickness: number,
            icon: string,
            visible: boolean
        }
    }

    export type DraftList = {
        name: string,
        drafts: GeographicDraft[],
    }[]


    export type RouteList = {
        name: string,
        route: GeographicRoute,
    }[]

    export const storageNamespaces = {
        routes: "routes_storage",
        drafts: "drafts_storage"
    }

    export const routeStorage = localforage.createInstance({ name: storageNamespaces.routes });
    export const draftStorage = localforage.createInstance({ name: storageNamespaces.drafts });

    export namespace Routes {
        /**
         * Reads the list of routes from the route storage
         *
         * @return A Promise that resolves to an array of RouteList objects, contains name and route
         */
        export async function readRouteList(): Promise<RouteList> {
            const index = await routeStorage.keys(); // get the list of names of the routes
            const collections: RouteList = [];

            index.forEach(async (name) => {
                readRoute(name).then((route) => {
                    collections.push({ name: name, route: route });
                })
            })
            return Promise.resolve(collections);
        }

        /**
         * Reads a route from the route storage by its name.
         *
         * @param name - The name of the route to read.
         * @return A Promise that resolves to the GeographicRoute object if found,
         * or rejects with an error message if the name is not provided or the route is not found.
         */
        export async function readRoute(name: string): Promise<GeographicRoute> {
            if (!name) return Promise.reject("No name provided");
            if (!(await routeStorage.keys()).includes(name)) return Promise.reject(`Route ${name} not found`);

            const route = await routeStorage.getItem<GeographicRoute>(name);
            if (route) return Promise.resolve(route);
            else return Promise.reject(`Failed to read route ${name}`);
        }

        /**
         * Writes a route to the route storage.
         *
         * @param name - The name of the route to write.
         * @param routes - The route to write.
         * @return A Promise that resolves when the route is written successfully, or rejects with an error message if the name or routes are not provided.
         */
        export async function writeRoute(name: string, routes: GeographicRoute): Promise<void> {
            if (!name || !routes) return Promise.reject("No name or routes provided");

            routeStorage.setItem(name, routes).then(() => {
                return Promise.resolve();
            }).catch((err) => {
                return Promise.reject(err);
            })
        }

    }

    export namespace Drafts {
        /**
         * Reads the list of routes from the route storage
         *
         * @return A Promise that resolves to an array of RouteList objects, contains name and route
         */
        export async function readDraftList(): Promise<DraftList> {
            const index = await draftStorage.keys(); // get the list of names of the routes
            const collections: DraftList = [];

            index.forEach(async (name) => {
                readDraft(name).then((drafts) => {
                    collections.push({ name: name, drafts: drafts });
                })
            });
            return Promise.resolve(collections);
        }

        /**
         * Reads a route from the route storage by its name.
         *
         * @param name - The name of the route to read.
         * @return A Promise that resolves to the GeographicRoute object if found,
         * or rejects with an error message if the name is not provided or the route is not found.
         */
        export async function readDraft(name: string): Promise<GeographicDraft[]> {
            if (!name) return Promise.reject("No name provided");
            if (!(await draftStorage.keys()).includes(name)) return Promise.reject(`Drafts for route ${name} not found`);

            const draft = (await routeStorage.getItem<GeographicDraft[]>(name) || []);
            return Promise.resolve(draft);
        }

        /**
         * Creates a new draft from the provided geojson object.
         *
         * @param geojson - The geojson object containing the draft information.
         * @return A Promise that resolves to the new draft object.
         */
        export async function createDraft(geojson: any): Promise<GeographicDraft> {
            const type = geojson.geometry.type as string;
            const coord = geojson.geometry.coordinates as GeoJSONPoint | GeoJSONPoint[];
            const title = geojson.properties.title as string;
            const className = geojson.properties.class as string || type;

            if (!(type in ["Polygon", "LineString", "Point"])) return Promise.reject("Invalid or unsupported geometry type");
            if (!coord) return Promise.reject("No coordinates provided");
            if (!title) return Promise.reject("No title provided");
            if (!(className in ["Polygon", "LineString", "Point", "Label"])) return Promise.reject("Invalid or unsupported class name");

            const newDraft: GeographicDraft = {
                type: "Feature",
                geometry: {
                    type: type as "Polygon" | "LineString" | "Point",
                    coordinates: coord,
                },
                properties: {
                    title: title,
                    subTitle: geojson.properties.subTitle || "",
                    class: className as "Polygon" | "LineString" | "Point" | "Label",
                    label: geojson.properties.label || "",
                    fillColor: geojson.properties.fillColor || "",
                    strokeColor: geojson.properties.strokeColor || "",
                    strokeThickness: geojson.properties.strokeThickness || 1,
                    icon: geojson.properties.icon || "",
                    visible: geojson.properties.visible || true,
                }
            }

            return Promise.resolve(newDraft);
        }

        export async function importDraft(name: string, draft: string): Promise<void> {
            if (!name) return Promise.reject("No name provided");

            const parsedDraft = JSON.parse(draft);
            const newDraft: GeographicDraft[] = []
            if (Array.isArray(parsedDraft.features)) {
                parsedDraft.features.forEach(async (feature: any) => {
                    try {
                        newDraft.push(await createDraft(feature));
                    }
                    catch (e) {
                        console.error(`Fail to import feature, for: ${e}`);
                        return Promise.reject(`Fail to import feature, for: ${e}`);
                    }
                })
            } else {
                try {
                    newDraft.push(await createDraft(parsedDraft));
                }
                catch (e) {
                    console.error(`Fail to import feature, for: ${e}`);
                    return Promise.reject(`Fail to import feature, for: ${e}`);
                }
            }
            await writeDrafts(name, newDraft);
            return Promise.resolve();
        }

        export async function exportDraft(name: string): Promise<string> {
            if (!name) return Promise.reject("No name provided");
            if (!(await draftStorage.keys()).includes(name)) return Promise.reject(`Drafts for route ${name} not found`);

            const selectedDraft = await draftStorage.getItem<GeographicDraft[]>(name) || [];
            return Promise.resolve(JSON.stringify(selectedDraft));
        }

        /**
         * Writes a route to the route storage.
         *
         * @param name - The name of the route to write.
         * @param drafts - The route to write.
         * @return A Promise that resolves when the route is written successfully, or rejects with an error message if the name or routes are not provided.
         */
        export async function writeDrafts(name: string, drafts: GeographicDraft[]): Promise<void> {
            if (!name || !drafts) return Promise.reject("No name or routes provided");

            draftStorage.setItem(name, drafts).then(() => {
                return Promise.resolve();
            }).catch((err) => {
                return Promise.reject(err);
            })
        }

    }
}
import localforage from "localforage";
import type { GeoJSONPoint } from "./route";

export type GeographicDraftItem = {
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

export type GeographicDraft = {
    id: string,
    name: string,
    drafts: GeographicDraftItem[]
}

export type DraftList = GeographicDraft[];

export namespace CartoSketchDrafts {
    export const draftStorageSpace = "drafts_storage"
    export const draftStorage = localforage.createInstance({ name: draftStorageSpace });

    export async function getNameList() {
        return await draftStorage.keys();
    }
    /**
     * Reads the list of routes from the route storage
     *
     * @return A Promise that resolves to an array of RouteList objects, contains name and route
     */
    export async function readDraftList(): Promise<DraftList> {
        const draftIDs = await draftStorage.keys(); // get the list of names of the routes
        const collections: DraftList = [];

        draftIDs.forEach(async (id) => {
            collections.push(await readDraft(id));
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
    export async function readDraft(id: string): Promise<GeographicDraft> {
        if (!id) return Promise.reject("No id provided");
        if (!(await draftStorage.keys()).includes(id)) return Promise.reject(`Drafts for route ${id} not found`);

        const draft = await draftStorage.getItem<GeographicDraft>(id)
        if (draft) return Promise.resolve(draft);
        else return Promise.reject(`Failed to read draft ${id}`);
    }

    /**
     * Create a new draft from the provided geojson object, which only contains one feature.
     *
     * @param geojson - The geojson object containing the draft information.
     * @return A Promise that resolves to the new draft object.
     */
    export async function createDraftItemFromGeoJSON(geojson: any): Promise<GeographicDraftItem> {
        if (Array.isArray(geojson.features)) Promise.reject("Only one feature is supported");

        const type = geojson.geometry.type as string;
        const coord = geojson.geometry.coordinates as GeoJSONPoint | GeoJSONPoint[];
        const title = geojson.properties.title as string;
        const className = geojson.properties.class as string || type;

        if (!(type in ["Polygon", "LineString", "Point"])) return Promise.reject("Invalid or unsupported geometry type");
        if (!coord) return Promise.reject("No coordinates provided");
        if (!title) return Promise.reject("No title provided");
        if (!(className in ["Polygon", "LineString", "Point", "Label"])) return Promise.reject("Invalid or unsupported class name");

        const newDraft: GeographicDraftItem = {
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


    /**
     * Import a draft which is in the form of GeoJSON based on the provided name and draft content.
     *
     * @param id - The id of the route the draft belongs to
     * @param name - The name of the draft.
     * @param draft - The draft content to import.
     * @return A promise that resolves to the imported draft.
     */
    export async function importDraft(id: string, name: string, draft: string): Promise<GeographicDraft> {
        if (!name) return Promise.reject("No name provided");

        const parsedDraft = JSON.parse(draft);
        const newDraft: GeographicDraftItem[] = []

        try {
            if (Array.isArray(parsedDraft.features)) { // contains multiple features
                parsedDraft.features.forEach(async (feature: any) => {
                    newDraft.push(await createDraftItemFromGeoJSON(feature))
                });
            }
            else newDraft.push(await createDraftItemFromGeoJSON(parsedDraft)); // only contains the single feature
        }
        catch (err) {
            const reason = `Fail to import draft ${name} from the form of GeoJSON, Trackback:\n${err}`;
            console.error(reason);
            return Promise.reject(reason);
        }

        return Promise.resolve(await writeDrafts(id, name, newDraft));
    }

    /**
     * Export a draft identified by its id.
     *
     * @param id - The id of the draft to export.
     * @return A Promise that resolves to the exported draft as a string.
     */
    export async function exportDraft(id: string): Promise<string> {
        if (!id) return Promise.reject("No name provided");
        if (!(await draftStorage.keys()).includes(id)) return Promise.reject(`Drafts for route ${id} not found`);

        const selectedDraft = await draftStorage.getItem<GeographicDraftItem[]>(id);
        if (selectedDraft) return Promise.resolve(JSON.stringify(selectedDraft));
        else return Promise.reject(`Failed to read draft ${id}`);
    }

    
    /**
     * Writes drafts to the draft storage with the given name and drafts.
     *
     * @param id - The id of the drafts.
     * @param name - The name of the drafts.
     * @param drafts - The array of draft items to be written.
     * @param [mode="override"] - The mode of writing the drafts. Defaults to "override".
     * @return A promise that resolves to the newly created draft.
     */
    export async function writeDrafts(id: string, name: string, drafts: GeographicDraftItem[], mode: "override" | "merge" = "override"): Promise<GeographicDraft> {
        if (!name || !drafts) return Promise.reject("No name or routes provided");

        const newDraft: GeographicDraft = {
            id: id,
            name: name,
            drafts: drafts
        }

        const previousDrafts = await readDraft(id);

        if (previousDrafts) {
            console.log(`A same-ID draft with name ${name} already exists. Merging it with the new draft.`);
            if(mode === "merge") newDraft.drafts = previousDrafts.drafts.concat(newDraft.drafts);
        }

        await draftStorage.setItem<GeographicDraft>(name, newDraft)
        return Promise.resolve(newDraft);
    }

    /**
     * Deletes a draft identified by its id.
     *
     * @param id - The id of the draft to delete.
     * @return A Promise that resolves when the draft is successfully deleted, or rejects with an error message if the id is not provided or the draft is not found.
     */
    export async function deleteDraft(id: string): Promise<void> {
        if (!id) return Promise.reject("No id provided");
        if (!(await draftStorage.keys()).includes(id)) return Promise.reject(`Draft id: ${id} not found`);

        await draftStorage.removeItem(id);
        return Promise.resolve();
    }
}

export default CartoSketchDrafts;

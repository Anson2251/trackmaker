import localforage from "localforage";
import bingMapsGeojson from "@/components/BingMap/plugins/geojson";

export namespace CartoSketch {
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

	export type CartoSketchStates = {
		id: string,
		name: string,
		hasDrafts: boolean,
	};

	export const storageNamespaces = {
		routes: "routes_storage",
		drafts: "drafts_storage"
	}

	export const routeStorage = localforage.createInstance({ name: storageNamespaces.routes });
	export const draftStorage = localforage.createInstance({ name: storageNamespaces.drafts });

	export function createID(): string {
		return (new Date()).getTime().toString(36);
	}

	/**
	 * Retrieves a list of CartoSketches with their corresponding draft and route state.
	 *
	 * @return A promise that resolves to an array of objects containing the name of the CartoSketch, whether it has drafts, and whether it has a route.
	 */
	export async function listCartoSketches(): Promise<CartoSketchStates[]> {
		const routeList = await Routes.readRouteList();
		const draftList = await Drafts.readDraftList();

		const listState: CartoSketchStates[] = []
		
		routeList.forEach((route) => {
			const draftState = !!draftList.find((draft) => draft.id === route.id);
			listState.push({
				id: route.id,
				name: route.name,
				hasDrafts: draftState,
			})
		})

		return Promise.resolve(listState);
	}

	export namespace Routes {
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

	export namespace Drafts {
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

			const draft = await routeStorage.getItem<GeographicDraft>(id)
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
		 * @param name - The name of the drafts.
		 * @param drafts - The array of draft items to be written.
		 * @return A promise that resolves to the newly created draft.
		 */
		export async function writeDrafts(id: string, name: string, drafts: GeographicDraftItem[]): Promise<GeographicDraft> {
			if (!name || !drafts) return Promise.reject("No name or routes provided");

			const newDraft: GeographicDraft = {
				id: id,
				name: name,
				drafts: drafts
			}

			const previousDrafts = await readDraft(id);

			if (previousDrafts) {
				console.log(`A same-ID draft with name ${name} already exists. Merging it with the new draft.`);
				newDraft.drafts = previousDrafts.drafts.concat(newDraft.drafts);
			}

			await draftStorage.setItem<GeographicDraft>(name, newDraft)
			return Promise.resolve(newDraft);
		}

	}
}

export default CartoSketch;

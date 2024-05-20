import localforage from "localforage";

import CartoSketchDraft from "./draft";
import CartoSketchRoute from "./route";

import type { GeographicDraftType } from "./draft";
import type { GeographicRouteType } from "./route";
import { v4 as uuidV4 } from "uuid";

export type GeographicSketchType = {
	id: string,
	name: string,
	routes: GeographicRouteType,
	drafts: GeographicDraftType,
}

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
}

export namespace CartoSketch {
	export const storageSpace = "cartosketch_storage";
	export const storage = localforage.createInstance({ name: storageSpace });

	export import Routes = CartoSketchRoute;
	export import Drafts = CartoSketchDraft;

	export async function exist(id: string){
		try {
			return !!(await storage.getItem(id));
		}
		catch(e){
			return false;
		}
	}


	export function readFromStorage(data: GeographicSketchType): CartoSketch {
		return new CartoSketch(data.name, data.id, CartoSketch.Routes.readFromStorage(data.routes), CartoSketch.Drafts.readFromStorage(data.drafts));
	}

	/** Gets all the ids in the storage space*/
	export async function getIDList(): Promise<string[]> {
		return await storage.keys();
	}

	export async function remove(id: string) {
		if(await exist(id)) await storage.removeItem(id);
		else console.warn("The CartoSketch with id: " + id + " not found and will not be removed");
	}

	export async function read(id: string): Promise<CartoSketch> {
		if(!await exist(id)) return Promise.reject("The CartoSketch with id: " + id + " not found");
		const data = await storage.getItem<GeographicSketchType>(id);
		if(data) return Promise.resolve(readFromStorage(data));
		else return Promise.reject("The CartoSketch with id: " + id + " is empty. It cannot be read");
	}

	export async function save(sketch: CartoSketch) {
		const data = sketch.exportToStorage();
		await storage.setItem(data.id, data);
	}
}

export default CartoSketch;

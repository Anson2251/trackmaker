import CartoSketchDrafts from "./draft";
import CartoSketchRoutes from "./route";

import type { GeographicDraftItem } from "./draft";
import type { GeographicRouteItem } from "./route";
import { v4 as uuidV4 } from "uuid";

export namespace CartoSketch {
	export type CartoSketchStates = {
		id: string,
		name: string,
		hasDrafts: boolean,
	};

	export type Sketch = {
		id: string,
		name: string,
		routes: GeographicRouteItem[],
		drafts: GeographicDraftItem[],
	}

	export import Routes = CartoSketchRoutes;
	export import Drafts = CartoSketchDrafts;

	export async function exist(id: string){
		const routeExist = (await Routes.storage.keys()).includes(id);
		const draftExist = (await Drafts.storage.keys()).includes(id);
		return {
			exist: routeExist || draftExist,
			route: routeExist,
			draft: draftExist
		}
	}

	export function create(name: string, id: string = uuidV4(), route: GeographicRouteItem[] = [], draft: GeographicDraftItem[] = []): Sketch {
		return {
			id: id,
			name: name,
			routes: route,
			drafts: draft
		}
	}

	/**
	 * Retrieves a list of CartoSketches with their corresponding draft and route state.
	 *
	 * @return A promise that resolves to an array of objects containing the name of the CartoSketch, whether it has drafts, and whether it has a route.
	 */
	export async function list(): Promise<CartoSketchStates[]> {
		const routeList = await CartoSketchRoutes.readList();
		const draftList = await CartoSketchDrafts.getList();

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

	export async function remove(id: string) {
		const sketchExist = await exist(id);
		if(!sketchExist.exist) return Promise.reject(`CartoSketch id: ${id} not found`);

		if(sketchExist.route) await CartoSketchRoutes.remove(id);
		if(sketchExist.draft) await CartoSketchDrafts.remove(id);
		return Promise.resolve();
	}

	export async function read(id: string, name?: string): Promise<Sketch> {
		const sketchExist = await exist(id);
		if(!sketchExist.exist) return Promise.reject(`CartoSketch id: ${id} not found`);
		if(!sketchExist.route && !name) return Promise.reject(`The name must be provided, either from the route or the parameter`);
		
		let draft;
		let route;
		const sketchName = name || (await CartoSketchRoutes.getName(id));

		if(sketchExist.route) route = await CartoSketchRoutes.read(id);
		else route = CartoSketch.Routes.create(name!, sketchName);

		if(sketchExist.draft) draft = await CartoSketchDrafts.read(id);
		else draft = CartoSketch.Drafts.create(name!);
		
		return Promise.resolve(create((route ? route.name : name!), id, route.routes, draft.drafts));
	}

	export async function save(sketch: Sketch) {
		if (!sketch.id) return Promise.reject("No id provided");
		if (!sketch.name) return Promise.reject("No name provided");

		await CartoSketchRoutes.save(sketch.id, sketch.name, sketch.routes);
		await CartoSketchDrafts.save(sketch.id, sketch.drafts);
		return Promise.resolve();
	}
}

export default CartoSketch;

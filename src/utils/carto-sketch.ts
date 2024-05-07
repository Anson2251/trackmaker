import CartoSketchDrafts from "./carto-sketch-draft";
import CartoSketchRoutes from "./carto-sketch-route";

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

	export function createID(): string {
		return (new Date()).getTime().toString(36);
	}

	/**
	 * Retrieves a list of CartoSketches with their corresponding draft and route state.
	 *
	 * @return A promise that resolves to an array of objects containing the name of the CartoSketch, whether it has drafts, and whether it has a route.
	 */
	export async function listCartoSketches(): Promise<CartoSketchStates[]> {
		const routeList = await CartoSketchRoutes.readRouteList();
		const draftList = await CartoSketchDrafts.readDraftList();

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
}

export default CartoSketch;

import CartoSketchDrafts from "./draft";
import CartoSketchRoutes from "./route";

export namespace CartoSketch {
	export type CartoSketchStates = {
		id: string,
		name: string,
		hasDrafts: boolean,
	};

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

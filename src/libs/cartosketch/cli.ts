import CartoSketch from "./index";
import { v4 as uuidV4 } from "uuid";

import CartoSketchDrafts from "./draft";
import CartoSketchRoute from "./route";

export namespace CartoSketchCLI {
    export function mountCLI() {
        (window as any).CartoSketch = CartoSketchCLI;
    }

    export async function listCartoSketches() {
        return await CartoSketch.getIDList();
    }

    export function getNewID() {
        return uuidV4();
    }

    export const draft = CartoSketchDrafts;
    export const route = CartoSketchRoute;
}

export default CartoSketchCLI;

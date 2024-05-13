import CartoSketch from ".";
import { v4 as uuidV4 } from "uuid";

import CartoSketchDrafts from "./draft";
import CartoSketchRoutes from "./route";

export namespace CartoSketchCLI {
    export function mountCLI() {
        (window as any).CartoSketch = CartoSketchCLI;
    }

    export function listCartoSketches() {
        return CartoSketch.list();
    }

    export function getNewID() {
        return uuidV4();
    }

    export const draft = CartoSketchDrafts;
    export const route = CartoSketchRoutes;
}

export default CartoSketchCLI;

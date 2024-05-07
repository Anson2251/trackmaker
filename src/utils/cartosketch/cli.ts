import CartoSketch from ".";
import { createID } from "./utils";

import CartoSketchDrafts from "./draft";
import CartoSketchRoutes from "./route";

export namespace CartoSketchCLI {
    export function mountCLI() {
        (window as any).CartoSketch = CartoSketchCLI;
    }

    export function listCartoSketches() {
        return CartoSketch.listCartoSketches();
    }

    export function getNewID() {
        return createID();
    }

    export const draft = CartoSketchDrafts;
    export const route = CartoSketchRoutes;
}

export default CartoSketchCLI;

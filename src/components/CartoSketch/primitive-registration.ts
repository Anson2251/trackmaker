import { BidirectionalMap } from "@/utils/bidirectional-map";
import { v4 as uuidV4 } from "uuid";

import CartoSketchComponent from "./components/component";
import bingMapsDrawing from "../BingMap/plugins/drawing-map";

type PrimitiveRegistration = "route" | "draft" | "unknown";
type PossibleConfigurationTypes = number | string | boolean;

export class BingMapsDrawingPrimitiveProxyLayer {
    private map;
    componentsPrimitivesMap: BidirectionalMap<string, number>;
    componentClassification: Map<number, PrimitiveRegistration>;
    registratedPrimitiveMap: Map<number, CartoSketchComponent<PossibleConfigurationTypes>> = new Map();
    constructor (map: bingMapsDrawing) {
        this.map = map;
        if(!this.map.manager) throw new Error("Map not ready");
        this.map.addHandler("drawingChanged", () => this.registrate());
        this.componentsPrimitivesMap = new BidirectionalMap<string, number>();
        this.componentClassification = new Map<number, PrimitiveRegistration>();
    }

    add(primitive: Microsoft.Maps.IPrimitive, componentID: string) {
        this.map.manager?.add(primitive);
        this.assignComponentID(((primitive as any).id as number), componentID);
    }

    getPrimitiveByID(id: number) {
        for (const primitive of this.map.manager!.getPrimitives()) {
            if((primitive as any).id === id) return primitive;
        }
    }

    remove(primitive: Microsoft.Maps.IPrimitive) {
        this.map.manager?.remove(primitive);
    }

    removeByID(id: number) {
        this.map.manager!.getPrimitives().forEach((primitive) => {
            if((primitive as any).id === id) this.remove(primitive);
        })
    }

    registrate(){
        const ids = this.getPrimitiveIDs();
        ids.forEach((id) => {
            if(!this.registrated(id)) {
                this.setRegistration(id, "unknown");
                this.assignComponentID(id);
            }
        })
    }

    assignComponentID(primitiveID: number, componentID: string = uuidV4()) {
        this.componentsPrimitivesMap.set(componentID, primitiveID);
    }

    setRegistration(id: number, className: "route" | "draft" | "unknown", componentID = uuidV4()) {
        if(!this.registrated(id)) 
        this.componentClassification.set(id, className);
    }

    delRegistration(id: number) {
        this.componentsPrimitivesMap.removeBackward(id as number);
        this.componentClassification.delete(id as number);
        this.registratedPrimitiveMap.delete(id as number);
    }

    getPrimitiveIDs(): number[] {
        return this.map.manager!.getPrimitives().map(p => ((p as any).id as number));
    }
    
    registrated(id: number) {
        return this.componentClassification.has(id);
    }
    
    updateRegistrations(primitives: Microsoft.Maps.IPrimitive[]) {
        primitives.forEach((primitive) => {
            if(!this.registrated((primitive as any).id)){
                this.setRegistration((primitive as any).id, "unknown");
            }
        });
    }
    
    getRegistration(id: number): "route" | "draft" | "unknown" {
        if(!this.registrated(id)) this.setRegistration(id, "unknown");
        return this.componentClassification.get(id)!;
    }

    removeRegistration(id: number) {
        this.componentClassification.delete(id);
    }
    
    classifyNames(): { routes: string[], drafts: string[], unknowns: string[] } {
        const routes: string[] = []
        const drafts: string[] = []
        const uknowns: string[] = []
    
        Array.from(this.componentClassification.keys()).forEach((key) => {
            const type = this.getRegistration(key);
            const name = this.componentsPrimitivesMap.getBackward(key)!;
            switch (type) {
                case "route": {
                    routes.push(name);
                    break;
                }
                case "draft": {
                    drafts.push(name);
                    break;
                }
                default: {
                    uknowns.push(uuidV4());
                }
            }
        })
    
        return {routes: routes, drafts: drafts, unknowns: uknowns}
    }
}


export default BingMapsDrawingPrimitiveProxyLayer;

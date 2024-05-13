import { BidirectionalMap } from "@/utils/bidirectional-map";
import { v4 as uuidV4 } from "uuid";

type PrimitiveRegistration = "route" | "draft" | "unknown";

export class CartoSketchPrimitiveRegistration {
    componentsPrimitivesMap: BidirectionalMap<string, number>;
    componentClassification: BidirectionalMap<number, PrimitiveRegistration>;
    constructor (componentsPrimitivesMap: BidirectionalMap<string, number>, componentClassification: BidirectionalMap<number, PrimitiveRegistration>) {
        this.componentsPrimitivesMap = componentsPrimitivesMap;
        this.componentClassification = componentClassification;
    }

    setRegistration(id: number, className: "route" | "draft" | "unknown") {
        this.componentClassification.set(id, className);
    }
    
    registrated(id: number) {
        return this.componentClassification.hasForward(id);
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
        return this.componentClassification.getForward(id)!;
    }

    removeRegistration(id: number) {
        this.componentClassification.removeForward(id);
    }
    
    classifyNames(): { routes: string[], drafts: string[], unknowns: string[] } {
        const routes: string[] = []
        const drafts: string[] = []
        const uknowns: string[] = []
    
        this.componentClassification.forwardKeys().forEach((key) => {
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


export default CartoSketchPrimitiveRegistration;

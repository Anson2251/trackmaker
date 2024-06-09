import DrawingComponentProxy from "@/utils/drawing-map/components-proxies/component";
import PolygonProxy from "@/utils/drawing-map/components-proxies/polygon";
import PolylineProxy from "@/utils/drawing-map/components-proxies/polyline";
import PushpinProxy from "@/utils/drawing-map/components-proxies/pushpin";
import type { PolygonProperties } from "@/utils/drawing-map/components-proxies/polygon";
import type { PushpinProperties } from "@/utils/drawing-map/components-proxies/pushpin";
import type { PolylineProperties } from "@/utils/drawing-map/components-proxies/polyline";

type ComponentProperties = PolygonProperties | PushpinProperties | PolylineProperties;
// type ComponentProperties = any;
export type HistoryPiece = { type: string, data: any };
type BackendHandlerType<T> = { type: string; id: number, handler: (backend: DrawingMapBackend<T>) => void };
export type PrimitiveClassification = "route" | "draft" | "unknown";

export interface ClassifiedComponentMeta {
    routes: ComponentMeta[],
    drafts: ComponentMeta[],
    unknowns: ComponentMeta[]
}

export type ComponentMeta = {
    id: string,
    name: string,
    type: string,
    properties: Record<string, string | number | boolean>,
    className: PrimitiveClassification
}

export abstract class DrawingMapBackend<T> {
    private history: (HistoryPiece[])[] = [];
    hostMap: T;
    handlers: BackendHandlerType<T>[] = [];
    name: string | undefined;
    id: string | undefined;

    private primitiveProxyLayer = new Map<string, DrawingComponentProxy<ComponentProperties>>()
    private primitiveClassification = new Map<string, PrimitiveClassification>();

    private previousPrimitives: DrawingComponentProxy<ComponentProperties>[] = [];

    constructor(hostMap: T) {
        this.hostMap = hostMap;
        this.addHandler("change", () => {
            const primitives = Array.from(this.primitiveProxyLayer).map(e => e[1]);
            primitives.forEach(p => {
                if(!this.primitiveClassification.has(p.id)) this.registerPrimitive(p)
            });
            this.generateShowHideHistory();
        });

        this.initialiseBackend()
            .then(() => {
                this.executeHandler("ready")
            })
            .catch((reason: string) => {
                throw new Error(`Fail to initialise drawing backend: ${reason}`);
            })
    }

    abstract initialiseBackend(): Promise<void>

    executeHandler(type: string) {
        this.handlers.forEach((i) => {
            if (i.type === type) i.handler(this);
        })
    }

    addHandler(type: BackendHandlerType<T>['type'], callback: BackendHandlerType<T>['handler']) {
        const id = this.handlers.length > 0 ? this.handlers[this.handlers.length - 1].id + 1 : 0;
        this.handlers.push({type, id: id, handler: callback});
    }

    abstract removeProxyPrimitiveFromMap(primitive: DrawingComponentProxy<ComponentProperties>): void

    abstract addProxyPrimitiveToMap(primitive: DrawingComponentProxy<ComponentProperties>): void

    showByID(id: string, silent = false) {
        const component = this.primitiveProxyLayer.get(id);
        if (component) {
            this.addProxyPrimitiveToMap(component);
            if (!silent) this.executeHandler("change");
        } else {
            throw new Error(`no corresponding primitive found by id: ${id}`);
        }
    }

    show(primitive: DrawingComponentProxy<ComponentProperties>, silent = false) {
        this.addProxyPrimitiveToMap(primitive);
        if (!silent) this.executeHandler("change");
    }

    hideByID(id: string, silent = false) {
        const component = this.primitiveProxyLayer.get(id);
        if (component) {
            this.removeProxyPrimitiveFromMap(component);
            if (!silent) this.executeHandler("change");
        } else {
            throw new Error(`no corresponding primitive found by id: ${id}`);
        }
    }

    hide(primitive: DrawingComponentProxy<ComponentProperties>, silent = false) {
        this.removeProxyPrimitiveFromMap(primitive);
        if (!silent) this.executeHandler("change");
    }

    abstract getShownComponentIDs(): string[]

    getShownComponents(): DrawingComponentProxy<ComponentProperties>[] {
        return this.getShownComponentIDs().map(id => this.primitiveProxyLayer.get(id)!);
    }

    addProxyPrimitive(primitive: DrawingComponentProxy<ComponentProperties>, className: PrimitiveClassification = "unknown") {
        this.registerPrimitive(primitive, className);
        this.primitiveProxyLayer.set(primitive.id, primitive);
    }

    deleteProxyPrimitive(primitive: DrawingComponentProxy<ComponentProperties>, silent = false) {
        try {
            this.hide(primitive);
        } finally {
            this.primitiveProxyLayer.delete(primitive.id);
            this.removeProxyPrimitiveFromMap(primitive);
            if (!silent) this.executeHandler("change");
        }
    }

    private addHistory(type: string, data: any) {
        this.history.push([{type, data}]);
    }

    private generateShowHideHistory(): HistoryPiece[] | null {
        const latestPrimitives = this.getShownComponents();
        const newPrimitive = diff(latestPrimitives, this.previousPrimitives);
        const removedPrimitive = diff(this.previousPrimitives, latestPrimitives);

        if (newPrimitive.length === 0 && removedPrimitive.length === 0) return null;
        const action: HistoryPiece[] = [
            {type: "add", data: newPrimitive},
            {type: "delete", data: removedPrimitive},
        ]

        // console.log(newPrimitive)
        this.previousPrimitives = this.getShownComponents();
        return action;
    }

    private findCorrespondingUndoAction() {
        let depth = 1;
        let actionDepth = 0;
        for (let i = this.history.length - 1; i >= 0; i--) { // find the corresponding action for the coming undo
            const action = this.history[i][0].type;
            if (action === "undo") depth += 1;
            else actionDepth += 1;
            if (depth === actionDepth) {
                return this.history[i];
            }
        }
        return [];
    }

    private findCorrespondingRedoAction() {
        let undoCount = 0;
        let redoCount = 1;
        for (let i = this.history.length - 1; i >= 0; i--) {
            const type = this.history[i][0].type;
            if (type === "undo") {
                undoCount += 1;
            } else if (type === "redo") {
                redoCount += 1;
            }
            if (type !== "redo" && type !== "undo") {
                return [];
            }
            if (undoCount === redoCount) return this.history[i];
        }
        return [];
    }

    undo() {
        if (this.history.length >= 1) {
            const correspondingAction = this.findCorrespondingUndoAction();

            if (correspondingAction.length === 0) {
                console.warn("No action to undo");
                return;
            }

            if (correspondingAction[0].type !== "redo") {
                correspondingAction.forEach((action) => {
                    if (action.type === "add") {
                        action.data.forEach((e: DrawingComponentProxy<ComponentProperties>) => this.hide(e, true));
                    } else if (action.type === "delete") {
                        action.data.forEach((e: DrawingComponentProxy<ComponentProperties>) => this.show(e, true));
                    }
                })
                this.executeHandler('change')
                this.history.push([{type: "undo", data: correspondingAction}]);
            } else {
                correspondingAction[0].data.forEach((redoneAction: HistoryPiece) => {
                    if (redoneAction.type === "add") {
                        redoneAction.data.forEach((e: DrawingComponentProxy<ComponentProperties>) => this.hide(e, true));
                    } else if (redoneAction.type === "delete") {
                        redoneAction.data.forEach((e: DrawingComponentProxy<ComponentProperties>) => this.show(e, true));
                    }
                })
                this.executeHandler('change')
                this.history.push([{type: "undo", data: correspondingAction[0].data}]);
            }
        }
    }

    redo() {
        if (this.history.length >= 1) {
            const undoAction = this.findCorrespondingRedoAction()

            if (undoAction.length === 0) {
                console.warn("No action to redo");
                return;
            }

            undoAction[0].data.forEach((actionPiece: HistoryPiece) => {
                if (actionPiece.type === "add") {
                    actionPiece.data.forEach((e: DrawingComponentProxy<ComponentProperties>) => this.show(e, true));
                } else if (actionPiece.type === "delete") {
                    actionPiece.data.forEach((e: DrawingComponentProxy<ComponentProperties>) => this.hide(e, true));
                }
            })
            this.executeHandler('change')
            this.history.push([{type: "redo", data: undoAction[0].data}]);
        }
    }

    abstract escape(): void;

    abstract editComponent(component: DrawingComponentProxy<ComponentProperties>): void;

    abstract clear(): void;

    edit(id: string){
        const component = this.primitiveProxyLayer.get(id);
        if (component) {
            this.editComponent(component);
        } else {
            throw new Error(`no corresponding primitive found by id: ${id}`);
        }
    }

    getPrimitiveMeta(primitive: DrawingComponentProxy<ComponentProperties>): ComponentMeta {
        return {
            id: primitive.id,
            className: this.primitiveClassification.get(primitive.id) || "unknown",
            name: primitive.name,
            type: primitive.type,
            properties: primitive.properties
        }
    }

    registerPrimitive(primitive: DrawingComponentProxy<ComponentProperties>, className?: PrimitiveClassification) {
        this.primitiveClassification.set(primitive.id, className || "unknown");
    }

    getClassificationInfo(): ClassifiedComponentMeta {
        const primitives = Array.from(this.primitiveProxyLayer).map(e => e[1]);

        const getMeta = (className: PrimitiveClassification) => {
            return primitives
                .filter((p) => this.getPrimitiveMeta(p).className === className)
                .map((p) => this.getPrimitiveMeta(p));
        };

        return {
            routes: getMeta("route"),
            drafts: getMeta("draft"),
            unknowns: getMeta("unknown")
        }
    }

    getClassifiedProxyComponents(): {
        routes: PolylineProxy[];
        drafts: (PolygonProxy | PolylineProxy | PushpinProxy)[];
        unknowns: DrawingComponentProxy<ComponentProperties>[];
    } {
        const primitives = Array.from(this.primitiveProxyLayer).map(e => e[1]);
        return {
            routes: primitives.filter((p) => this.getPrimitiveMeta(p).className === "route") as PolylineProxy[],
            drafts: primitives.filter((p) => this.getPrimitiveMeta(p).className === "draft") as (PolygonProxy | PolylineProxy | PushpinProxy)[],
            unknowns: primitives.filter((p) => this.getPrimitiveMeta(p).className === "unknown")
        }
    }
}

function diff<T>(list1: T[], list2: Iterable<T>): T[] {
    const list2Set = new Set(list2);
    return list1.filter(x => !list2Set.has(x));
}

export default DrawingMapBackend;

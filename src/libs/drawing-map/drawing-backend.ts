import DrawingComponentProxy from "@/libs/drawing-map/components-proxies/component";
import PolygonProxy from "@/libs/drawing-map/components-proxies/polygon";
import PolylineProxy from "@/libs/drawing-map/components-proxies/polyline";
import PushpinProxy from "@/libs/drawing-map/components-proxies/pushpin";
import type { PolygonProperties } from "@/libs/drawing-map/components-proxies/polygon";
import type { PushpinProperties } from "@/libs/drawing-map/components-proxies/pushpin";
import type { PolylineProperties } from "@/libs/drawing-map/components-proxies/polyline";
import MapBackend from "@/libs/map-backends/backend";

type ComponentProperties = PolygonProperties | PushpinProperties | PolylineProperties;
// type ComponentProperties = any;
export type HistoryPiece = { type: string, data: any };
type BackendHandlerType<T extends MapBackend<any, any>> = { type: string; id: number, handler: (backend: DrawingMapBackend<T>) => void };
export type PrimitiveClassification = "route" | "draft" | "unknown";


/**
 * Interface that represents a classification of components.
 *
 * It categorizes components into three categories: routes, drafts, and unknowns.
 * Each category is represented as an array of `ComponentMeta` objects.
 */
export interface ClassifiedComponentMeta {
    /**
     * An array of `ComponentMeta` objects representing the routes.
     */
    routes: ComponentMeta[],
    /**
     * An array of `ComponentMeta` objects representing the drafts.
     */
    drafts: ComponentMeta[],
    /**
     * An array of `ComponentMeta` objects representing the unknown components.
     */
    unknowns: ComponentMeta[]
}

/**
 * Represents the metadata of a drawing component.
 *
 * This type is used to describe the properties of a drawing component. It includes the unique identifier
 * of the component (`id`), the name of the component (`name`), the type of the component (`type`),
 * the properties of the component (`properties`), and the classification of the component (`className`).
 */
export type ComponentMeta = {
    /**
     * The unique identifier of the component.
     */
    id: string,
    /**
     * The name of the component.
     */
    name: string,
    /**
     * The type of the component.
     */
    type: string,
    /**
     * The properties of the component.
     *
     * The properties are represented as a record where the keys are strings and the values can be
     * strings, numbers, or booleans.
     */
    properties: Record<string, string | number | boolean>,
    /**
     * The classification of the component.
     *
     * The classification can be one of the following: "route", "draft", or "unknown".
     */
    className: PrimitiveClassification
}

export abstract class DrawingMapBackend<HostMapType extends MapBackend<any, any>> {
    private history: (HistoryPiece[])[] = [];
    hostMap: HostMapType;
    handlers: BackendHandlerType<HostMapType>[] = [];
    name: string | undefined;
    id: string | undefined;

    private primitiveProxyLayer = new Map<string, DrawingComponentProxy<ComponentProperties>>()
    private primitiveClassification = new Map<string, PrimitiveClassification>();

    private previousPrimitives: DrawingComponentProxy<ComponentProperties>[] = [];

    /**
     * Constructor for the DrawingMapBackend class.
     *
     * @param hostMap - The host map instance.
     */
    constructor(hostMap: HostMapType) {
        // Set the host map instance
        this.hostMap = hostMap;

        // Add a change handler to the backend
        this.addHandler("change", () => {
            // Get the primitives from the primitive proxy layer
            const primitives = Array.from(this.primitiveProxyLayer).map(e => e[1]);
            
            // For each primitive, register it if it is not already classified
            primitives.forEach(p => {
                if(!this.primitiveClassification.has(p.id)) this.registerPrimitive(p)
            });
            
            // Generate a history of show and hide actions
            this.generateShowHideHistory();
        });

        // Add a ready handler to the drawing tools plugin
        (this.hostMap as any).plugins.drawingTools.addHandler("ready", () => {
            // Execute the ready handler
            this.executeHandler("ready");
        });

        // Initialize the backend
        this.initialiseBackend()
            .then(() => {
                // Execute the ready handler after the initialization is successful
                this.executeHandler("ready");
            })
            .catch((reason: string) => {
                // Throw an error if the initialization fails
                throw new Error(`Fail to initialise drawing backend: ${reason}`);
            })
    }

    abstract initialiseBackend(): Promise<void>

    /**
     * Execute a registered handler
     * @param type Type of the handler
     */
    executeHandler(type: string) {
        this.handlers.forEach((i) => {
            if (i.type === type) i.handler(this);
        })
    }

    /**
     * Add a handler to the backend
     * @param type The type of the handler
     * @param callback The callback function of the handler
     */
    addHandler(type: BackendHandlerType<HostMapType>['type'], callback: BackendHandlerType<HostMapType>['handler']) {
        // Generate a unique ID for the handler
        const id = this.handlers.length > 0 ? this.handlers[this.handlers.length - 1].id + 1 : 0;
        
        // Create a new handler object and push it to the handlers array
        this.handlers.push({
            type: type,  // The type of the handler
            id: id,      // The unique ID of the handler
            handler: callback  // The callback function of the handler
        });
    }

    abstract removeProxyPrimitiveFromMap(primitive: DrawingComponentProxy<ComponentProperties>): void

    abstract addProxyPrimitiveToMap(primitive: DrawingComponentProxy<ComponentProperties>): void

    /**
     * Show a primitive by its ID
     * @param id The ID of the primitive
     * @param silent Whether to trigger the change handler
     */
    showByID(id: string, silent = false) {
        const component = this.primitiveProxyLayer.get(id);
        if (component) {
            this.addProxyPrimitiveToMap(component);
            if (!silent) this.executeHandler("change");
        } else {
            throw new Error(`No corresponding primitive found by id: ${id}`);
        }
    }

    /**
     * Show a primitive
     * @param primitive The primitive to show
     * @param silent Whether to trigger the change handler
     */
    show(primitive: DrawingComponentProxy<ComponentProperties>, silent = false) {
        this.addProxyPrimitiveToMap(primitive);
        if (!silent) this.executeHandler("change");
    }

    /**
     * Hide a primitive by its ID
     * @param id - The ID of the primitive
     * @param [silent=false] - Whether to trigger the change handler
     */
    hideByID(id: string, silent = false) {
        const component = this.primitiveProxyLayer.get(id);
        if (component) {
            this.removeProxyPrimitiveFromMap(component);
            if (!silent) this.executeHandler("change");
        } else {
            throw new Error(`No corresponding primitive found by id: ${id}`);
        }
    }

    /**
     * Hide a primitive
     * @param primitive The primitive to hide
     * @param [silent=false] Whether to trigger the change handler
+     */
    hide(primitive: DrawingComponentProxy<ComponentProperties>, silent = false) {
        this.removeProxyPrimitiveFromMap(primitive);
        if (!silent) this.executeHandler("change");
    }

    abstract getShownComponentIDs(): string[]

    /**
     * Get the shown components
     * @returns The shown components
     */
    getShownComponents(): DrawingComponentProxy<ComponentProperties>[] {
        return this.getShownComponentIDs().map(id => this.primitiveProxyLayer.get(id)!);
    }

    /**
     * Add a primitive to the proxy layer with a given className
     * @param primitive - The primitive to add
     * @param [className="unknown"] - The className of the primitive
     */
    addProxyPrimitive(primitive: DrawingComponentProxy<ComponentProperties>, className: PrimitiveClassification = "unknown") {
        this.registerPrimitive(primitive, className);
        this.primitiveProxyLayer.set(primitive.id, primitive);
    }

    /**
     * Delete a primitive from the proxy layer
     * @param primitive - The primitive to delete
     * @param [silent=false] - Whether to trigger the change handler
     */
    deleteProxyPrimitive(primitive: DrawingComponentProxy<ComponentProperties>, silent = false): void {
        try {
            this.hide(primitive);
        } finally {
            this.primitiveProxyLayer.delete(primitive.id);
            this.removeProxyPrimitiveFromMap(primitive);
            if (!silent) this.executeHandler("change");
        }
    }

    /**
     * Add a history entry to the history stack
     * @param type - The type of the history entry
     * @param data - The data of the history entry
     */
    private addHistory(type: string, data: any): void {
        this.history.push([{type, data}]);
    }

    /**
     * Generates a history entry for the showing and hiding of components.
     *
     * @returns An array of history entries, or null if no changes have been made.
     */
    private generateShowHideHistory(): HistoryPiece[] | null {
        const latestPrimitives: DrawingComponentProxy<ComponentProperties>[] = this.getShownComponents();
        const newPrimitive: DrawingComponentProxy<ComponentProperties>[] = diff(latestPrimitives, this.previousPrimitives);
        const removedPrimitive: DrawingComponentProxy<ComponentProperties>[] = diff(this.previousPrimitives, latestPrimitives);

        if (newPrimitive.length === 0 && removedPrimitive.length === 0) return null;
        const action: HistoryPiece[] = [
            {type: "add", data: newPrimitive},
            {type: "delete", data: removedPrimitive},
        ]

        // console.log(newPrimitive)
        this.previousPrimitives = this.getShownComponents();
        return action;
    }

    /**
     * Find the corresponding undo action in the history stack.
     *
     * @returns The corresponding undo action, or an empty array if not found.
     */
    private findCorrespondingUndoAction(): HistoryPiece[] {
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

    /**
     * Find the corresponding redo action in the history stack.
     *
     * @returns The corresponding redo action, or an empty array if not found.
     */
    private findCorrespondingRedoAction(): HistoryPiece[] {
        let undoCount = 0;
        let redoCount = 1;
        for (let i = this.history.length - 1; i >= 0; i--) {
            const type = this.history[i][0].type;
            if (type === "undo") {
                undoCount += 1;
            } else if (type === "redo") {
                redoCount += 1;
            }
            // terminate the loop if it's not an undo or redo action
            if (type !== "redo" && type !== "undo") {
                return [];
            }
            // if the undo count equals the redo count, it's the corresponding redo action
            if (undoCount === redoCount) return this.history[i];
        }
        return [];
    }

    /**
     * Undo the latest action.
     *
     * @returns
     */
    undo(): void {
        if (this.history.length >= 1) {
            const correspondingAction: HistoryPiece[] = this.findCorrespondingUndoAction();

            if (correspondingAction.length === 0) {
                console.warn("No action to undo");
                return;
            }

            if (correspondingAction[0].type !== "redo") {
                correspondingAction.forEach((action: HistoryPiece) => {
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

    /**
     * Redo the last undone action.
     *
     * @returns
     */
    redo(): void {
        if (this.history.length >= 1) {
            const undoAction: HistoryPiece[] = this.findCorrespondingRedoAction();

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
            });
            this.executeHandler('change');
            this.history.push([{type: "redo", data: undoAction[0].data}]);
        }
    }

    /** Escape editing */
    abstract escape(): void;

    /** Go into edit mode for a specific component
     * @param component
     */
    abstract editComponent(component: DrawingComponentProxy<ComponentProperties>): void;

    /** Clear all components */
    abstract clear(): void;

    /**
     * Go into edit mode for a specific component
     * @param id - The ID of the component
     * @throws {Error} - If no corresponding primitive is found by the given ID
     */
    edit(id: string): void {
        const component: DrawingComponentProxy<ComponentProperties> | undefined = this.primitiveProxyLayer.get(id);
        if (component) {
            this.editComponent(component);
        } else {
            throw new Error(`No corresponding primitive found by id: ${id}`);
        }
    }

    /**
     * Get the metadata of a drawing component by its primitive
     * @param primitive - The primitive of the component
     * @returns The metadata of the component
     */
    getPrimitiveMeta(primitive: DrawingComponentProxy<ComponentProperties>): ComponentMeta {
        return {
            /** The unique identifier of the component */
            id: primitive.id,
            /** The classification of the component */
            className: this.primitiveClassification.get(primitive.id) || "unknown",
            /** The name of the component */
            name: primitive.name,
            /** The type of the component */
            type: primitive.type,
            /** The properties of the component */
            properties: primitive.properties
        }
    }

    /**
     * Register a primitive with its classification
     * @param primitive - The primitive to register
     * @param className - The classification of the primitive. Default to "unknown" if not provided.
     */
    registerPrimitive(primitive: DrawingComponentProxy<ComponentProperties>, className?: PrimitiveClassification): void {
        this.primitiveClassification.set(primitive.id, className || "unknown");
    }

    /**
     * Get the metadata of drawing components categorized by their classifications
     * @returns An object containing arrays of metadata of drawing components categorized by their classifications
     *          Each classification is a key in the object, and the corresponding value is an array of metadata of components
     *          of that classification.
     */
    getClassificationInfo(): ClassifiedComponentMeta {
        /** The array of primitives */
        const primitives = Array.from(this.primitiveProxyLayer).map(e => e[1]);

        /**
         * Get the metadata of drawing components of a specific classification
         * @param className - The classification of the components
         * @returns An array of metadata of drawing components of the specified classification
         */
        const getMeta = (className: PrimitiveClassification): ComponentMeta[] => {
            return primitives
                .filter((p) => this.getPrimitiveMeta(p).className === className)
                .map((p) => this.getPrimitiveMeta(p));
        };

        return {
            /** The metadata of drawing components categorized as route */
            routes: getMeta("route"),
            /** The metadata of drawing components categorized as draft */
            drafts: getMeta("draft"),
            /** The metadata of drawing components categorized as unknown */
            unknowns: getMeta("unknown")
        }
    }

    /**
     * Get the drawing components categorized by their classifications
     * @returns An object containing arrays of drawing components categorized by their classifications
     *          Each classification is a key in the object, and the corresponding value is an array of components
     *          of that classification.
     */
    getClassifiedProxyComponents(): {
        /** The routes of drawing components */
        routes: PolylineProxy[];
        /** The drafts of drawing components, which includes polygons, polylines and pushpins */
        drafts: (PolygonProxy | PolylineProxy | PushpinProxy)[];
        /** The unknowns of drawing components */
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

/**
 * Returns the elements in the first list that are not present in the second list.
 *
 * @param list1 - The first list of elements.
 * @param list2 - The second list of elements.
 * @returns An array of elements in `list1` that are not present in `list2`.
 */
function diff<T>(list1: T[], list2: Iterable<T>): T[] {
    /**
     * A `Set` object that contains the elements of `list2`.
     */
    const list2Set = new Set(list2);
    /**
     * An array of elements in `list1` that are not present in `list2Set`.
     */
    return list1.filter(x => !list2Set.has(x));
}

export default DrawingMapBackend;

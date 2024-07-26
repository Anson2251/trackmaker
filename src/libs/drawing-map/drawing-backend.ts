import DrawingComponentProxy from "@/libs/drawing-map/components-proxies/component";
import PolygonProxy from "@/libs/drawing-map/components-proxies/polygon";
import PolylineProxy from "@/libs/drawing-map/components-proxies/polyline";
import PushpinProxy from "@/libs/drawing-map/components-proxies/pushpin";
import type { PolygonProperties } from "@/libs/drawing-map/components-proxies/polygon";
import type { PushpinProperties } from "@/libs/drawing-map/components-proxies/pushpin";
import type { PolylineProperties } from "@/libs/drawing-map/components-proxies/polyline";
import MapBackend from "@/libs/map-backends/backend";
import { cloneDeep } from "lodash-es";

type ComponentProperties = PolygonProperties | PushpinProperties | PolylineProperties;
// type ComponentProperties = any;
export type HistoryPiece = { type: string, data: any };
type BackendHandlerType<T extends MapBackend<any, any>> = { type: string; id: number, handler: (backend: DrawingMapBackend<T>) => void };
export type componentClassification = "route" | "draft" | "unknown";


/** It categorizes components into three categories: routes, drafts, and unknowns. */
export interface ClassifiedComponentMeta {
    routes: ComponentMeta[],
    drafts: ComponentMeta[],
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
    id: string,
    name: string,
    type: string,
    properties: Record<string, string | number | boolean>,
    /** The classification can be one of the following: "route", "draft", or "unknown". */
    className: componentClassification
}

export abstract class DrawingMapBackend<HostMapType extends MapBackend<any, any>> {
    private history: (HistoryPiece[])[] = [];
    /** The host map instance. */
    hostMap: HostMapType;
    /** The handlers in the backend. */
    handlers: BackendHandlerType<HostMapType>[] = [];
    name: string | undefined;
    id: string | undefined;

    /** The proxy layer of components, links ids with the components */
    componentLibrary = new Map<string, DrawingComponentProxy<ComponentProperties>>();
    componentClassification = new Map<string, componentClassification>();

    previousComponentIDs: Set<string> = new Set();
    shownComponentIDs: Set<string> = new Set();

    /**
     * Constructor for the DrawingMapBackend class.
     *
     * @param hostMap - The host map instance.
     */
    constructor(hostMap: HostMapType) {
        // Set the host map instance
        this.hostMap = hostMap;

        // Add a change handler to the backend
        // this.addHandler("change", () => {
        //     // Get the primitives from the primitive proxy layer
        //     const components = Array.from(this.componentProxyLayer).map(e => e[1]);
        //     console.log("change", this.getShownComponentIDs(), components);
            
        //     // For each primitive, register it if it is not already classified
        //     components.forEach(p => {
        //         if(!this.componentClassification.has(p.id)) this.registerPrimitive(p);
        //     });
            
        //     // Generate a history of show and hide actions
        //     this.generateShowHideHistory().forEach(p => this.addHistory(p.type, p.data));
        // });

        // // Add a ready handler to the drawing tools plugin
        // (this.hostMap as any).plugins.drawingTools.addHandler("ready", () => {
        //     // Execute the ready handler
        //     this.executeHandler("ready");
        // });

        // Initialize the backend
        this.initialiseBackend()
            .then(() => {
                // Execute the ready handler after the initialization is successful
                this.executeHandler("ready");
                this.startSyncComponents();
            })
            .catch((reason: string) => {
                // Throw an error if the initialization fails
                throw new Error(`Fail to initialise drawing backend: ${reason}`);
            });
    }

    /** Add the hook for synchronising components between the abstract backend and the implementation */
    startSyncComponents() {
        this.addHandler("change", () => {
            try {
            this.syncFromMapToBackend();
            this.syncFromBackendToMap();
            }
            catch (e) {
                console.error("Fail to sync components, reason: \na", e);
            }
        });
    }

    /** Sync components from the abstract backend to the drawing map implementation */
    abstract syncFromMapToBackend(): void;
    /** Sync components from the drawing map implementation to the abstract backend */
    abstract syncFromBackendToMap(): void;

    /** Initialise the backend */
    abstract initialiseBackend(): Promise<void>

    /**
     * Execute a registered handler
     * @param type Type of the handler
     */
    executeHandler(type: string) {
        this.handlers.forEach((i) => {
            if (i.type === type) i.handler(this);
        });
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

    /**
     * Show a primitive by its ID
     * @param id The ID of the primitive
     * @param silent Whether to trigger the change handler
     */
    showByID(id: string, silent = false) {
        this.shownComponentIDs.add(id);
        if (!silent) this.executeHandler("change");
    }

    /**
     * Show a primitive
     * @param component The primitive to show
     * @param silent Whether to trigger the change handler
     */
    show(component: DrawingComponentProxy<ComponentProperties>, silent = false) {
        this.showByID(component.id, silent);
    }

    /**
     * Hide a primitive by its ID
     * @param id - The ID of the primitive
     * @param [silent=false] - Whether to trigger the change handler
     */
    hideByID(id: string, silent = false) {
        this.shownComponentIDs.delete(id);
        if (!silent) this.executeHandler("change");
    }

    /**
     * Hide a primitive
     * @param component The primitive to hide
     * @param [silent=false] Whether to trigger the change handler
+     */
    hide(component: DrawingComponentProxy<ComponentProperties>, silent = false) {
        this.hideByID(component.id, silent);
    }

    abstract getShownComponentIDs(): string[]

    /**
     * Add a primitive to the proxy layer with a given className
     * @param component - The primitive to add
     * @param [className="unknown"] - The className of the primitive
     */
    add(component: DrawingComponentProxy<ComponentProperties>, className: componentClassification = "unknown") {
        this.componentLibrary.set(component.id, component);
        this.registerPrimitive(component, className);
    }

    /**
     * Delete a primitive from the proxy layer
     * @param primitive - The primitive to delete
     * @param [silent=false] - Whether to trigger the change handler
     */
    remove(primitive: DrawingComponentProxy<ComponentProperties>, silent = false): void {
        try {
            this.hide(primitive);
        } finally {
            this.componentLibrary.delete(primitive.id);
            this.componentClassification.delete(primitive.id);
            this.componentLibrary.delete(primitive.id);
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
    private generateShowHideHistory(): HistoryPiece[] {
        const newComponents = diff(this.shownComponentIDs, this.previousComponentIDs);
        const removedComponents = diff(this.previousComponentIDs, this.shownComponentIDs);

        const action: HistoryPiece[] = [];
        if(newComponents.length > 0) action.push({type: "show", data: newComponents});
        if(removedComponents.length > 0) action.push({type: "delete", data: removedComponents});

        this.previousComponentIDs = cloneDeep(this.shownComponentIDs);
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
        console.log(this.history);
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
                });
                this.executeHandler('change');
                this.addHistory( "undo",correspondingAction);
            } else {
                correspondingAction[0].data.forEach((redoneAction: HistoryPiece) => {
                    if (redoneAction.type === "add") {
                        redoneAction.data.forEach((e: DrawingComponentProxy<ComponentProperties>) => this.hide(e, true));
                    } else if (redoneAction.type === "delete") {
                        redoneAction.data.forEach((e: DrawingComponentProxy<ComponentProperties>) => this.show(e, true));
                    }
                });
                this.executeHandler('change');
                this.addHistory("undo", correspondingAction[0].data);
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
            this.addHistory("redo", undoAction[0].data);
        }
    }

    /** Escape editing */
    abstract escape(): void;

    /** Go into edit mode for a specific component
     * @param primitive
     */
    abstract editPrimitive(primitive: DrawingComponentProxy<ComponentProperties>): void;

    /** Clear all components */
    abstract clear(): void;

    /**
     * Go into edit mode for a specific component
     * @param id - The ID of the component
     * @throws {Error} - If no corresponding primitive is found by the given ID
     */
    editComponent(id: string): void {
        const component: DrawingComponentProxy<ComponentProperties> | undefined = this.componentLibrary.get(id);
        if (component) {
            this.editPrimitive(component);
        } else {
            throw new Error(`No corresponding primitive found by id: ${id}`);
        }
    }

    /**
     * Get the metadata of a drawing component by its primitive
     * @param component - The primitive of the component
     * @returns The metadata of the component
     */
    getComponentMeta(component: DrawingComponentProxy<ComponentProperties>): ComponentMeta {
        return {
            /** The unique identifier of the component */
            id: component.id,
            /** The classification of the component */
            className: this.componentClassification.get(component.id) || "unknown",
            /** The name of the component */
            name: component.name,
            /** The type of the component */
            type: component.type,
            /** The properties of the component */
            properties: component.properties
        };
    }

    /**
     * Register a primitive with its classification
     * @param primitive - The primitive to register
     * @param className - The classification of the primitive. Default to "unknown" if not provided.
     */
    registerPrimitive(primitive: DrawingComponentProxy<ComponentProperties>, className?: componentClassification): void {
        this.componentClassification.set(primitive.id, className || "unknown");
    }

    /** Get the metadata of drawing components categorized by their classifications */
    getClassificationInfo(): ClassifiedComponentMeta {
        /** The array of primitives */
        const primitives = Array.from(this.componentLibrary).map(e => e[1]);

        /**
         * Get the metadata of drawing components of a specific classification
         * @param className - The classification of the components
         * @returns An array of metadata of drawing components of the specified classification
         */
        const getMeta = (className: componentClassification): ComponentMeta[] => {
            return primitives
                .filter((p) => this.getComponentMeta(p).className === className)
                .map((p) => this.getComponentMeta(p));
        };

        return {
            /** The metadata of drawing components categorized as route */
            routes: getMeta("route"),
            /** The metadata of drawing components categorized as draft */
            drafts: getMeta("draft"),
            /** The metadata of drawing components categorized as unknown */
            unknowns: getMeta("unknown")
        };
    }

    /** Get the drawing components categorized by their classifications */
    getClassifiedProxyComponents(): {
        /** The routes of drawing components */
        routes: PolylineProxy[];
        /** The drafts of drawing components, which includes polygons, polylines and pushpins */
        drafts: (PolygonProxy | PolylineProxy | PushpinProxy)[];
        /** The unknowns of drawing components */
        unknowns: DrawingComponentProxy<ComponentProperties>[];
    } {
        const primitives = Array.from(this.componentLibrary).map(e => e[1]);
        return {
            routes: primitives.filter((p) => this.getComponentMeta(p).className === "route") as PolylineProxy[],
            drafts: primitives.filter((p) => this.getComponentMeta(p).className === "draft") as (PolygonProxy | PolylineProxy | PushpinProxy)[],
            unknowns: primitives.filter((p) => this.getComponentMeta(p).className === "unknown")
        };
    }
}

/**
 * Returns the elements in the first list that are not present in the second list.
 *
 * @param list1 - The first list of elements.
 * @param list2 - The second list of elements.
 * @returns An array of elements in `list1` that are not present in `list2`.
 */
function diff<T>(list1: Iterable<T>, list2: Iterable<T>): T[] {
    /**
     * A `Set` object that contains the elements of `list2`.
     */
    const list2Set = new Set(list2);
    /**
     * An array of elements in `list1` that are not present in `list2Set`.
     */
    return Array.from(list1).filter((e) => !list2Set.has(e));
}

export default DrawingMapBackend;

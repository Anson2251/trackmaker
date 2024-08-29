import DrawingMapBackend from "@/libs/drawing-map/drawing-backend";
import MapBackend from "../map-backends/backend";
import CartoSketch from "@/libs/cartosketch";
import * as ComponentProxyConversion from "@/libs/drawing-map/components-proxies/conversion";

type AdaptHandlerType = { type: string; id: number, handler: () => void };

import PlatformInfo from "@/utils/platform";

const isMac = PlatformInfo.os === "Mac OS";

/**
 * Adapter for the SketchEdit, allowing to use the drawing backend from the SketchEdit component
 */
export class SketchEditAdapter<T extends MapBackend<any, any>> {
    /**
     * Registered handlers
     */
    private handlers: AdaptHandlerType[] = [];

    /**
     * Backend instance
     */
    private backend: DrawingMapBackend<T> | undefined;

    /**
     * Indicate if the backend is ready
     */
    private isBackendReady: boolean = false;

    /**
     * Indicate if the adapter is initialised
     */
    private initialised: boolean = false;

    /**
     * ID of the sketch
     */
    sketchID: string | undefined;

    /**
     * Name of the sketch
     */
    sketchName: string | undefined;

    shortcutMounted: boolean = false;

    /**
     * Constructor
     * @param backend Backend instance
     */
    constructor(backend?: DrawingMapBackend<T>) {
        this.backend = backend;

        if(this.backend) this.backendReady();
    }

    /**
     * Set the backend instance
     * @param backend Backend instance
     */
    setBackend(backend: DrawingMapBackend<T>) {
        this.backend = backend;
        this.isBackendReady = false;
        this.backendReady();
    }

    /**
     * Initialise the backend when ready
     */
    private backendReady(){
        if(!this.backend) return;
        this.backend.addHandler("ready", () => {
            this.isBackendReady = true;
            this.initialiseAdapter();
        });
    }

    /**
     * Check if the backend is ready
     */
    private checkBackendReady() {
        if(!this.isBackendReady) console.warn("SketchEditAdapter: Backend is not ready");
        return this.isBackendReady;
    }

    /**
     * Initialise the adapter
     */
    initialiseAdapter() {
        this.mountKeyShortcuts();
        this.initialised = true;
    }

    /**
     * Redo the last action
     */
    redo() {
        if(!this.checkBackendReady()) return;
        console.log("redo");
        this.backend!.redo();
    }

    /**
     * Undo the last action
     */
    undo() {
        if(!this.checkBackendReady()) return;
        console.log("undo");
        this.backend!.undo();
    }

    /**
     * Escape the current state
     */
    escape() {
        if(!this.checkBackendReady()) return;
        this.backend!.escape();
    }

    /**
     * Edit a specific primitive
     * @param id ID of the primitive
     */
    edit(id: string) {
        if(!this.checkBackendReady()) return;
        this.backend!.editComponent(id);
    }

    /**
     * Clear all the primitives
     */
    clear() {
        if(!this.checkBackendReady()) return;
        console.log("clear");
        this.backend!.clear();
    }

    /**
     * Mount the key shortcuts
     */
    private mountKeyShortcuts() {
        if(!this.checkBackendReady()) return;
        if(this.shortcutMounted) return;
        this.shortcutMounted = true;
        document.addEventListener("keyup", (e) => {
            console.log(e.key, e.ctrlKey, e.metaKey, e.shiftKey);
            const isUndo = (e.key === "z" && !e.shiftKey && ((e.ctrlKey && !isMac) || (e.metaKey && isMac)));
            const isRedo = (e.key === "z" && e.shiftKey && ((e.ctrlKey && !isMac) || (e.metaKey && isMac)));

            if (isUndo) this.undo();
            if (isRedo) this.redo();
            if (e.key === "Escape") this.escape();
        });
    }

    /**
     * Execute a registered handler
     * @param type Type of the handler
     */
    private executeHandler(type: string) {
        this.handlers.forEach((i) => {
            if (i.type === type) i.handler();
        });
    }

    /**
     * Add a handler
     * @param type Type of the handler
     * @param callback Callback function
     */
    addHandler(type: AdaptHandlerType['type'], callback: AdaptHandlerType['handler']) {
        const id = this.handlers.length > 0 ? this.handlers[this.handlers.length - 1].id + 1 : 0;
        this.handlers.push({type, id: id, handler: callback});
    }

    /**
     * Remove a handler
     * @param id ID of the handler
     */
    removeHandler(id: AdaptHandlerType['id']) {
        this.handlers = this.handlers.filter((h) => h.id !== id);
    }

    /**
     * Load a sketch from the ID
     * @param id ID of the sketch
     */
    async load(id: string) {
        if (!this.checkBackendReady()) return;
        const sketch = await CartoSketch.read(id);
        if (!sketch) {
            return Promise.reject(`Cannot load sketch ${id}`);
        }

        console.log(sketch, this);

        this.sketchID = sketch.id;
        this.sketchName = sketch.name;

        if (!this.initialised) {
            console.warn("Cannot import from sketch, adapter not initialised");
            return;
        }

        const proxies = ComponentProxyConversion.importComponentsFromCartoSketch(sketch);
        proxies.routes.forEach((r) => {
            this.backend!.add(r as any, "route");
        });
        proxies.drafts.forEach((d) => {
            this.backend!.add(d as any, "draft");
        });

        this.executeHandler("change");
    }

    /**
     * Save the sketch
     */
    async save() {
        if (!this.checkBackendReady()) return;
        if (!this.initialised) {
            console.warn("Cannot export to sketch, adapter not initialised");
            return;
        }

        if (!this.sketchID || !this.sketchName) {
            return Promise.reject("Cannot export to sketch, sketch ID or name not set. It seems the sketch has not been loaded yet");
        }

        const components = this.backend!.getClassifiedProxyComponents();
        const sketch = ComponentProxyConversion.exportComponentsToCartoSketch(components.routes, components.drafts, this.sketchID, this.sketchName);
        await sketch.save();
    }
}

export default SketchEditAdapter;
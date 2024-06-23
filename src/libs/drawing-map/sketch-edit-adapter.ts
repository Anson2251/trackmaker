import DrawingMapBackend from "@/libs/drawing-map/drawing-backend";
import CartoSketch from "@/libs/cartosketch";
import * as ComponentProxyConversion from "@/libs/drawing-map/components-proxies/conversion";

type AdaptHandlerType = { type: string; id: number, handler: () => void };

import BrowserPlatform from "@/utils/platform";

const isMac = BrowserPlatform.os === "Mac OS";

export class SketchEditAdapter<T> {
    private handlers: AdaptHandlerType[] = [];
    private backend: DrawingMapBackend<T> | undefined;
    private isBackendReady: boolean = false;
    private initialised: boolean = false;
    sketchID: string | undefined;
    sketchName: string | undefined;

    constructor(backend?: DrawingMapBackend<T>) {
        this.backend = backend;

        if(this.backend) this.backendReady();
    }

    setBackend(backend: DrawingMapBackend<T>) {
        this.backend = backend;
        this.isBackendReady = false;
        this.backendReady();
    }

    private backendReady(){
        if(!this.backend) return;
        this.backend.addHandler("ready", () => {
            this.isBackendReady = true;
            this.initialiseAdapter();
        });
    }

    private checkBackendReady() {
        if(!this.isBackendReady) console.warn("SketchEditAdapter: Backend is not ready");
        return this.isBackendReady;
    }

    initialiseAdapter() {
        this.mountKeyShortcuts();
        this.initialised = true;
    }

    redo() {
        if(!this.checkBackendReady()) return;
        console.log("redo");
        this.backend!.redo();
    }

    undo() {
        if(!this.checkBackendReady()) return;
        console.log("undo");
        this.backend!.undo();
    }

    escape() {
        if(!this.checkBackendReady()) return;
        this.backend!.escape();
    }

    edit(id: string) {
        if(!this.checkBackendReady()) return;
        this.backend!.edit(id);
    }

    clear() {
        if(!this.checkBackendReady()) return;
        console.log("clear");
        this.backend!.clear();
    }

    private mountKeyShortcuts() {
        if(!this.checkBackendReady()) return;
        document.addEventListener("keydown", (e) => {
            const isUndo = (e.key === "z" && !e.shiftKey && ((e.ctrlKey && !isMac) || (e.metaKey && isMac)));
            const isRedo = (e.key === "z" && e.shiftKey && ((e.ctrlKey && !isMac) || (e.metaKey && isMac)));

            if (isUndo) this.undo();
            if (isRedo) this.redo();
            if (e.key === "Escape") this.escape();
        })
    }

    private executeHandler(type: string) {
        this.handlers.forEach((i) => {
            if (i.type === type) i.handler();
        })
    }

    addHandler(type: AdaptHandlerType['type'], callback: AdaptHandlerType['handler']) {
        const id = this.handlers.length > 0 ? this.handlers[this.handlers.length - 1].id + 1 : 0;
        this.handlers.push({type, id: id, handler: callback});
    }

    removeHandler(id: AdaptHandlerType['id']) {
        this.handlers = this.handlers.filter((h) => h.id !== id);
    }

    async load(id: string) {
        if (!this.checkBackendReady()) return;
        const sketch = await CartoSketch.read(id);
        if (!sketch) {
            console.warn(`Cannot load sketch ${id}`);
            return;
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
            this.backend!.addProxyPrimitive(r as any, "route");
        });
        proxies.drafts.forEach((d) => {
            this.backend!.addProxyPrimitive(d as any, "draft");
        });

        this.executeHandler("change");
    }

    async save() {
        if (!this.checkBackendReady()) return;
        if (!this.initialised) {
            console.warn("Cannot export to sketch, adapter not initialised");
            return;
        }

        if (!this.sketchID || !this.sketchName) {
            console.warn("Cannot export to sketch, sketch ID or name not set. It seems the sketch has not been loaded yet");
            return;
        }

        const components = this.backend!.getClassifiedProxyComponents();
        const sketch = ComponentProxyConversion.exportComponentsToCartoSketch(components.routes, components.drafts, this.sketchID, this.sketchName)
        await sketch.save();
    }
}

export default SketchEditAdapter;
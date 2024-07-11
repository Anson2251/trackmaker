/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import type {MapPlugin} from "@/libs/map-backends/plugin";
import BingMapBackend from "@/libs/map-backends/bing-maps/bing-map-backend";

type DrawingEventHandler = { type: DrawingEventType, callback: (drawing: BingMapPlugin_Drawing, ...args: any) => void };
export type DrawingEventType = "ready" | "drawingChanged";

export class BingMapPlugin_Drawing implements MapPlugin<BingMapBackend> {
    private tools: Microsoft.Maps.DrawingTools;
    initialised = false;
    space = "drawingTools";
    host: BingMapBackend;

    manager: Microsoft.Maps.DrawingManager | undefined;
    handler: DrawingEventHandler[] = [];

    previousPrimitives: Set<number> = new Set();

    constructor(parentMap: BingMapBackend) {
        this.host = parentMap;
        if (!this.host.map.getOptions().liteMode) console.warn("Drawing tools are recommended in lite mode, for the performance concern");
        if (!(window as any).LoadedBingMapDrawingModule) throw new Error("Bing Map Drawing Module has not been loaded yet");
        this.tools = new Microsoft.Maps.DrawingTools(parentMap.map);

        this.initManger().then((manager) => {
            this.manager = manager;
            this.initialised = true;
            this.executeHandler("ready");
        });
    }

    private initManger(): Promise<Microsoft.Maps.DrawingManager> {
        return new Promise((resolve) => {
            if (this.manager) resolve(this.manager);
            this.tools.showDrawingManager((manager) => {
                Microsoft.Maps.Events.addHandler(manager, "drawingEnded", () => this.onChange());
                Microsoft.Maps.Events.addHandler(manager, "drawingErased", () => this.onChange());
                resolve(manager)
            });
        });
    }

    mount() {
        this.host.plugins[this.space] = this;
        return true;
    }

    unmount(): boolean {
        try {
            (this.host as any).plugins[this.space] = undefined;
            this.manager?.dispose();
            this.tools?.dispose();
        } catch (e) {
            console.error("Fail to dispose drawing map plugin", e);
            return false;
        }
        return true;
    }

    addHandler(type: DrawingEventType, callback: (drawing: BingMapPlugin_Drawing) => void) {
        this.handler.push({type, callback});
    }

    addNativeHandler(type: DrawingEventType, callback: (drawing: BingMapPlugin_Drawing) => void) {
        console.log("add native handler", type);
        if(!this.manager) throw new Error("Fail to add native handler, manager is not initialized");
        Microsoft.Maps.Events.addHandler(this.manager, type, callback);
    }

    private executeHandler(type: DrawingEventType, ...args: any) {
        this.handler.forEach((i) => {
            if (i.type === type) i.callback(this, ...args);
        })
    }

    private onChange() {
        if (!this.manager) return;

        const primitives = this.manager.getPrimitives();
        const newPrimitives = primitives.filter((p) => !this.previousPrimitives.has((p as any).id));
        const deletedPrimitives = Array.from(this.previousPrimitives).filter((id) => !primitives.some((p) => (p as any).id === id));

        this.executeHandler("drawingChanged", newPrimitives, deletedPrimitives);
    }

    stopDrawing() {
        this.tools?.finish()
    }

    edit(shape: Microsoft.Maps.IPrimitive) {
        this.tools?.edit(shape);
    }

    remove(shape: Microsoft.Maps.IPrimitive) {
        this.manager?.remove(shape);
    }

    getPrimitiveByID(id: number) {
        return this.manager?.getPrimitives().find((p) => (p as any).id === id)
    }

    getPrimitiveID(primitive: Microsoft.Maps.IPrimitive) {
        return (primitive as any).id
    }

    clear() {
        this.manager?.clear();
    }
}

export function initBingMapsDrawingModule(timeout: number = 1000): Promise<void> {
    return new Promise((resolve, reject) => {
        if ((window as any).LoadedBingMapDrawingModule) resolve();
        else (window as any).LoadedBingMapDrawingModule = false;

        if (!(window as any).LoadedBingMapScripts) reject("Bing map script has not been loaded yet");

        Microsoft.Maps.loadModule('Microsoft.Maps.DrawingTools', () => (window as any).LoadedBingMapDrawingModule = true);

        let timer = 0;
        const waiter = setInterval(() => {
            if ((window as any).LoadedBingMapDrawingModule && Microsoft.Maps.GeoJson) {
                clearInterval(waiter);
                resolve();
            }
            if (timer > timeout) reject(new Error("Loading Bing Maps Drawing Module timeout"));
            timer += 1;
        }, 1);
    })
}

export default BingMapPlugin_Drawing;
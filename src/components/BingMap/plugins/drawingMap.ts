/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import bingMapsPluginTemplete from "./base";
import bingMaps from "../map";
import * as localforage from "localforage";

import bingMapsGeojson from "@/components/BingMap/plugins/geojson";

import BrowserPlatform from "@/utils/browser-platform";
const isMac = BrowserPlatform.os === "Mac OS";

export type HistoryPiece = { type: string, data: any };
export type SavingDraft = { name: string, item: any };
export type DraftPiece = { name: string, item: Microsoft.Maps.IPrimitive[] };

export class bingMapsDrawing extends bingMapsPluginTemplete {
    private tools: Microsoft.Maps.DrawingTools | undefined;
    space = "drawingTools";
    history: (HistoryPiece[])[] = [];
    manager: Microsoft.Maps.DrawingManager | undefined;
    previousPrimitives: Microsoft.Maps.IPrimitive[] = [];
    geojson: bingMapsGeojson;
    drafts: SavingDraft[] = [];

    constructor(parentMap: bingMaps) {
        super(parentMap);
        if (!this.host.map.getOptions().liteMode) console.warn("Drawing tools are recommended in lite mode, for the performance concern");
        if (!(window as any).LoadedBingMapDrawingModule) throw new Error("Bing Map Drawing Module has not been loaded yet");
        this.tools = new Microsoft.Maps.DrawingTools(parentMap.map);
        this.tools.showDrawingManager((manager) => {
            this.manager = manager;
            Microsoft.Maps.Events.addHandler(this.manager, "drawingEnded", () => this.onChange())
            Microsoft.Maps.Events.addHandler(this.manager, "drawingErased", () => this.onChange())
        });

        this.geojson = new bingMapsGeojson(this.host);
        this.mountKeyShortcuts();

        localforage.getItem("drafts").then((drafts) => {
            console.log("Existing draft: ", drafts);
        });
    }

    mount() {
        this.host.plugins[this.space] = this;
        return true;
    }

    unmount(): boolean {
        try {
            (this.host as any).plugins[this.space] = null;
            this.manager?.dispose();
            this.tools?.dispose();
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }

    private onChange() {
        if (!this.manager) return;

        const LatestPrimitives = this.manager.getPrimitives();
        const newPrimitive = diff(LatestPrimitives, this.previousPrimitives);
        const removedPrimitive = diff(this.previousPrimitives, LatestPrimitives);

        if (newPrimitive.length === 0 && removedPrimitive.length === 0) return;
        const action = [
            { type: "add", data: newPrimitive },
            { type: "delete", data: removedPrimitive },
        ]
        this.history.push(action);
        console.log(this.manager.getPrimitives(), this.host.map.entities.getPrimitives())

        this.previousPrimitives = this.manager.getPrimitives();
    }

    undo() {
        if (this.history.length >= 1 && this.manager) {
            const correspondingAction = ((() => {
                let depth = 1;
                let actionDepth = 0;
                for (let i = this.history.length - 1; i >= 0; i--) { // find the corresponding action for the comming undo
                    const action = this.history[i][0].type;
                    if (action === "undo") depth += 1;
                    else actionDepth += 1;
                    if (depth === actionDepth) {
                        return this.history[i];
                    }
                }
                return [];
            })());

            if (correspondingAction.length === 0) {
                console.warn("No action to undo");
                return;
            }

            if (correspondingAction[0].type !== "redo") {
                correspondingAction.forEach((action) => {
                    if (action.type === "add") {
                        action.data.forEach((e: Microsoft.Maps.IPrimitive) => this.manager?.remove(e));
                        this.previousPrimitives = this.manager!.getPrimitives();
                    }
                    else if (action.type === "delete") {
                        action.data.forEach((e: Microsoft.Maps.IPrimitive) => this.manager?.add(e));
                        this.previousPrimitives = this.manager!.getPrimitives();
                    }

                })
                this.history.push([{ type: "undo", data: correspondingAction }]);
            }
            else {
                correspondingAction[0].data.forEach((redoneAction: HistoryPiece) => {
                    if (redoneAction.type === "add") {
                        redoneAction.data.forEach((e: Microsoft.Maps.IPrimitive) => this.manager?.remove(e));
                        this.previousPrimitives = this.manager!.getPrimitives();
                    }
                    else if (redoneAction.type === "delete") {
                        redoneAction.data.forEach((e: Microsoft.Maps.IPrimitive) => this.manager?.add(e));
                        this.previousPrimitives = this.manager!.getPrimitives();
                    }
                })
                this.history.push([{ type: "undo", data: correspondingAction[0].data }]);
            }
        }
    }

    redo() {
        if (this.history.length >= 1 && this.manager) {
            const undoAction = ((() => {
                let undoCount = 0;
                let redoCount = 1;
                for (let i = this.history.length - 1; i >= 0; i--) {
                    const type = this.history[i][0].type;
                    if (type === "undo") {
                        undoCount += 1;
                    }
                    else if (type === "redo") {
                        redoCount += 1;
                    }
                    if (type !== "redo" && type !== "undo") {
                        return [];
                    }
                    if (undoCount === redoCount) return this.history[i];
                }
                return [];
            })());

            if (undoAction.length === 0) {
                console.warn("No action to redo");
                return;
            }

            undoAction[0].data.forEach((actionPiece: HistoryPiece) => {
                if (actionPiece.type === "add") {
                    actionPiece.data.forEach((e: Microsoft.Maps.IPrimitive) => this.manager?.add(e));
                    this.previousPrimitives = this.manager!.getPrimitives();
                }
                else if (actionPiece.type === "delete") {
                    actionPiece.data.forEach((e: Microsoft.Maps.IPrimitive) => this.manager?.remove(e));
                    this.previousPrimitives = this.manager!.getPrimitives();
                }
            })

            this.history.push([{ type: "redo", data: undoAction[0].data }]);
        }
    }

    private mountKeyShortcuts() {
        document.addEventListener("keydown", (e) => {
            const isUndo = (e.key === "z" && !e.shiftKey && ((e.ctrlKey && !isMac) || (e.metaKey && isMac)));
            const isRedo = (e.key === "z" && e.shiftKey && ((e.ctrlKey && !isMac) || (e.metaKey && isMac)));

            if (isUndo) this.undo();
            if (isRedo) this.redo();
            if (e.key === "Escape") {
                this.stopDrawing();
            }
        })
    }

    stopDrawing() {
        this.tools?.finish()
    }

    save = async (name?: string): Promise<SavingDraft[]> => {
        const draftName = name || prompt("Enter draft name");
        if (!draftName) return Promise.reject("No draft name provided");

        console.log(this.geojson)
        const item = this.geojson.write(this.manager!.getPrimitives(), false);
        const previousItems = await localforage.getItem("drafts") as SavingDraft[] || [];
        previousItems.push({ name: draftName!, item: item });

        await localforage.setItem("drafts", previousItems)
        console.log(await localforage.getItem("drafts"));
        return previousItems;
    }

    async load(name?: string): Promise<Microsoft.Maps.IPrimitive[]> {
        const previousItems = await localforage.getItem("drafts") as SavingDraft[];

        const draftName = name || prompt("Enter draft name");
        if (!draftName) Promise.reject("No draft name provided");

        const draft = previousItems.find((draft) => draft.name === draftName);
        if (!draft) Promise.reject("No draft found");

        return this.geojson.read(draft!.item);
    }

    async loadAll(): Promise<DraftPiece[]> {
        const items = await localforage.getItem("drafts") as SavingDraft[];
        const primitives = items.map((draft) => new Object({ name: draft.name, item: this.geojson.read(draft.item) }) as DraftPiece);

        return primitives;
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
            if ((window as any).LoadedBingMapDrawingModule) {
                clearInterval(waiter);
                resolve();
            }
            if (timer > timeout) reject(new Error("Loading Bing Maps Drawing Module timeout"));
            timer += 10;
        }, 10);
    })
}

function diff<T>(list1: T[], list2: Iterable<T>): T[] {
    const list2Set = new Set(list2);
    return list1.filter(x => !list2Set.has(x));
}

export default bingMapsDrawing;
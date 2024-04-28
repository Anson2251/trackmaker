/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import bingMapPlugin from "./base";
import bingMaps from "../map";

export class bingMapsDrawing extends bingMapPlugin{
    private tools: Microsoft.Maps.DrawingTools | undefined;
    space = "drawingTools";
    history: { action: string, data: any }[] = [];
    manager: Microsoft.Maps.DrawingManager | undefined;
    constructor(parentMap: bingMaps){
        super(parentMap);
        if(!this.map.map.getOptions().liteMode) console.warn("Drawing tools are recommended in lite mode, for the performance concern");
        if(!(window as any).LoadedBingMapDrawingModule) throw new Error("Bing Map Drawing Module has not been loaded yet");
        this.tools = new Microsoft.Maps.DrawingTools(parentMap.map);
        this.tools.showDrawingManager((manager) => {
            this.manager = manager;
        });

        this.mountKeyShortcuts();
    }

    undo(){
        if(this.history.length > 0){
            if(this.history.length > 1 && this.manager) {
                const lastAction = this.history[this.history.length - 1];

                this.manager.remove(lastAction.data);
                this.history.push({action: "undo", data: lastAction.data});
            }
        }
    }

    private mountKeyShortcuts(){
        this.map.container.addEventListener("keydown", (e) => {
            if(e.key === "z" && e.ctrlKey){
                this.undo();
            }
            if(e.key === "Escape"){
                this.stopDrawing();
            }
        })
    }

    stopDrawing(){
        this.tools?.finish();
    }
}

export function initBingMapsDrawingModule(timeout: number = 1000): Promise<void>{
    return new Promise((resolve, reject) => {
        if ((window as any).LoadedBingMapDrawingModule) resolve();
        else (window as any).LoadedBingMapDrawingModule = false;

        if(!(window as any).LoadedBingMapScripts) reject("Bing map script has not been loaded yet");

        Microsoft.Maps.loadModule('Microsoft.Maps.DrawingTools', () => (window as any).LoadedBingMapDrawingModule = true);

        let timer = 0;
        const waiter = setInterval(() => {
            if((window as any).LoadedBingMapDrawingModule){
                clearInterval(waiter);
                resolve();
            }
            if(timer > timeout) reject(new Error("Loading Bing Maps Drawing Module timeout"));
            timer += 10;
        }, 10);
    })
}
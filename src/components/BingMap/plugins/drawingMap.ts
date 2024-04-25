/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import bingMapPlugin from "./base";
import bingMaps from "../map";

export class bingMapsDrawing extends bingMapPlugin{
    private tools: Microsoft.Maps.DrawingTools | undefined;
    space = "drawingTools";
    constructor(parentMap: bingMaps){
        super(parentMap);

        if(!(window as any).LoadedBingMapDrawingModule) throw new Error("Bing Map Drawing Module has not been loaded yet");
        this.tools = new Microsoft.Maps.DrawingTools(parentMap.map);
            this.tools.showDrawingManager(function (manager) {
        });
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
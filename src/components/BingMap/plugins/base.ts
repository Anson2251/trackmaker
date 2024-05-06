/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.d.ts" />

import bingMaps from "../map";

export class bingMapsPlugin {
    host: bingMaps;
    space: string | undefined;
    constructor(parentMap: bingMaps){
        this.host = parentMap;
    }

    mount(): boolean { 
        throw new Error("Mount method not implemented.");
     }

    unmount(): boolean {
        throw new Error("Unmount method not implemented.");
    }
}

export default bingMapsPlugin;

/// <reference path="../../../../node_modules/@types/bingmaps/index.d.ts" />

import bingMaps from "../map";

export class bingMapPlugin {
    map: bingMaps;
    space: string | undefined;
    constructor(parentMap: bingMaps){
        this.map = parentMap;
    }

    mount(){
        if(!this.space) return false;
        (this.map as any).plugins[this.space] = this;
        return true;
    }

    unmount(){
        (this.map as any).plugins[this.space!] = null;
        return true;
    }
}

export default bingMapPlugin;

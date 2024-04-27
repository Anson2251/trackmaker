/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.d.ts" />

import bingMapPlugin from "./base";
import bingMaps from "../map";

export class bingMapsPushPins extends bingMapPlugin {
    map: bingMaps;
    space = "pushPinLayer";
    readonly pushPins: {id: number, pin: Microsoft.Maps.Pushpin}[] = [];
    constructor(parentMap: bingMaps){
        super(parentMap);
        this.map = parentMap;
    }
    
    add(location: Microsoft.Maps.Location, options: Microsoft.Maps.IPushpinOptions){
        const id = this.pushPins.length > 0 ? this.pushPins[this.pushPins.length - 1].id + 1 : 0;
        const pin = new Microsoft.Maps.Pushpin(location, options);

        this.map.map.entities.push(pin);
        this.pushPins.push({id: id, pin: pin});
        return id;
    }
    remove(id: number){
        const index = this.pushPins.findIndex((pin) => pin.id === id);
        if(index !== -1){
            this.map.map.entities.remove(this.pushPins[index].pin);
            this.pushPins.splice(index, 1);
        }
    }

    setOptions(id: number, options: Microsoft.Maps.IPushpinOptions){
        const index = this.pushPins.findIndex((pin) => pin.id === id);
        if(index !== -1){
            this.pushPins[index].pin.setOptions(options);
        }
    }
}

export default bingMapsPushPins;
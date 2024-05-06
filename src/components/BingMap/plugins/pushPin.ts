/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.d.ts" />

import bingMapsPluginTemplete from "./base";
import bingMaps from "../map";

export class bingMapsPushPins extends bingMapsPluginTemplete {
    host: bingMaps;
    space = "pushPinLayer";
    readonly pushPins: {id: number, pin: Microsoft.Maps.Pushpin}[] = [];
    constructor(parentMap: bingMaps){
        super(parentMap);
        this.host = parentMap;
    }

    mount() {
        (this.host as any).plugins[this.space] = this;
        return true;
    }

    unmount() {
        try{
            (this.host as any).plugins[this.space] = null;
            this.pushPins.forEach((pin) => this.host.map.entities.remove(pin.pin));
        }
        catch(e){
            console.log(e);
            return false;
        }
        return true;
    }
    
    add(location: Microsoft.Maps.Location, options: Microsoft.Maps.IPushpinOptions){
        const id = this.pushPins.length > 0 ? this.pushPins[this.pushPins.length - 1].id + 1 : 0;
        const pin = new Microsoft.Maps.Pushpin(location, options);

        this.host.map.entities.push(pin);
        this.pushPins.push({id: id, pin: pin});
        return id;
    }
    remove(id: number){
        const index = this.pushPins.findIndex((pin) => pin.id === id);
        if(index !== -1){
            this.host.map.entities.remove(this.pushPins[index].pin);
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
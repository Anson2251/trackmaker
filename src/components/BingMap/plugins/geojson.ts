import bingMapsPluginTemplete from "./base";
import bingMaps from "../map";

export class bingMapsGeojson extends bingMapsPluginTemplete{
    space = "geojson";
    host: bingMaps;
    constructor(parentMaps: bingMaps){
        super(parentMaps);
        if(!(window as any).LoadedBingMapGeojsonModule) throw new Error("Bing Map Geojson Module has not been loaded yet");

        this.host = parentMaps;
    }

    mount() {
        (this.host as any).plugins[this.space] = this;
        return true;
    }

    unmount() {
        (this.host as any).plugins[this.space] = null;
        return true;
    }

    read = bingMapsGeojson.read

    readFromUrl = bingMapsGeojson.readFromUrl;

    write = bingMapsGeojson.write;
}

export namespace bingMapsGeojson {
    export function read(geoJson: string | Microsoft.Maps.IGeoJsonObject, styles?: Microsoft.Maps.IStylesOptions | undefined): Microsoft.Maps.IPrimitive[] {
        const data = Microsoft.Maps.GeoJson.read(geoJson, styles);
        return Array.isArray(data) ? data : [data]
    }

    export function readFromUrl(url: string, timeout = 10000, jsonpQueryParam?: string | undefined, styles?: Microsoft.Maps.IStylesOptions | undefined) {
        return new Promise<Microsoft.Maps.IPrimitive[]>((resolve, reject) => {
            const callback = (data: Microsoft.Maps.IPrimitive[] | Microsoft.Maps.IPrimitive) => {
                resolve(Array.isArray(data) ? data : [data]);
            }
            setTimeout(() => reject("Timeout"), timeout);
            Microsoft.Maps.GeoJson.readFromUrl(url, callback, jsonpQueryParam, styles);
        })
    }

    export function write(data: Microsoft.Maps.IPrimitive | Microsoft.Maps.IPrimitive[], stringify?: true): string
    export function write(data: Microsoft.Maps.IPrimitive | Microsoft.Maps.IPrimitive[], stringify?: false): Microsoft.Maps.IGeoJsonObject
    export function write(data: Microsoft.Maps.IPrimitive | Microsoft.Maps.IPrimitive[], stringify = true) {
        const jsonData = Microsoft.Maps.GeoJson.write(data);
        return stringify ? JSON.stringify(jsonData) : jsonData;
    }
}

export function initbingMapsGeojsonModule(){
    return new Promise<void>((resolve, reject) => {
        if((window as any).LoadedBingMapGeojsonModule) resolve();
        else (window as any).LoadedBingMapGeojsonModule = false;
        if(!(window as any).LoadedBingMapScripts) reject("Bing map script has not been loaded yet");

        Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', () =>  {
            (window as any).LoadedBingMapGeojsonModule = true;
            resolve();
        });
    })
}

export default bingMapsGeojson;
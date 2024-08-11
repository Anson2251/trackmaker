import * as GeoLocation from "@/utils/geolocation";
import type { MapPluginConstructor } from "@/libs/map-backends/plugin";
import {isNumber, isEmpty} from "lodash-es";

export const allocateMapID = () => {
    window.MapCount = isNumber(window.MapCount) ? window.MapCount + 1 : 0;
    return window.MapCount;
};

/**
The options that a map generally have
*/
export interface DefaultOptionTypes<MapIDType> {
    /** The centre of the map */
    centre: GeoLocation.GeographicPointType;
    /** The type of the id which indicates the type of the map */
    type: MapIDType;
    /** The collection of the support types */
    supportedMapTypes: MapIDType[];
    /** The initial zoom of the map */
    zoom?: number;
    /** The credential of the map API */
    credentials: string;
    /** The max zoom range */
    maxZoom: number;
    /** The min zoom range */
    minZoom: number;
    /** The max pitch range */
    maxPitch?: number;
    /** The min pitch range */
    minPitch?: number;
}

/** The type of viewport of the map */
export interface ViewOptionType {
    /** The zoom value */
    zoom?: number;
    /** The view centre of the map */
    centre?: GeoLocation.GeographicPointType;
}

/** The type of the map handlers */
export type MapEventHandlerType = {
    id: number;
    type: string;
    handler: (eventArg?: any) => void;
};

export type RangeType = {
    max: number;
    min: number;
}

export type AllPossibleMapFeatures = "pitch" | "bearing" | "fractionalZoom"

export type MapViewPortType = {
    centre: GeoLocation.GeographicPointType;
    bearing: number;
    pitch: number;
}

/** The general map backend
 */
export abstract class MapBackend<
    MapType,
    OptionTypes extends DefaultOptionTypes<OptionTypes["type"]>,
> {
    private zoom: number = 5;
    private zoomRange: RangeType;
    private pitchRange: RangeType;

    private viewPort: MapViewPortType;
    private viewPortFrozen = false;
    private mapViewPort: MapViewPortType;
    
    readonly credentials: string;
    mapType: OptionTypes["type"];
    readonly container: HTMLElement;
    readonly map: MapType;

    eventHandlers: MapEventHandlerType[] = [];
    readonly plugins: any = {};
    readonly supportMapTypes: OptionTypes["supportedMapTypes"];
    private supportedFeatures: AllPossibleMapFeatures[];
    

    properties: Record<string, any>;

    /**
     * @param container The html container where the map places
     * @param options The options
     * @param plugins The plugins to load
     */
    constructor(
        container: HTMLElement,
        options: OptionTypes,
        supportedFeatures: AllPossibleMapFeatures[] = [],
        plugins: MapPluginConstructor<MapBackend<MapType, OptionTypes>>[] = [],
    ) {
        this.supportedFeatures = supportedFeatures;
        this.properties = {};

        this.mapViewPort = {
            centre: GeoLocation.clonePoint(options.centre),
            bearing: 0,
            pitch: 0,
        };
        this.zoom = options.zoom || this.zoom;

        this.viewPort = {
            centre: GeoLocation.clonePoint(this.mapViewPort.centre),
            bearing: 0,
            pitch: 0,
        };

        this.zoomRange = {min: 0, max: 0};
        this.setZoomRange(options.minZoom, options.maxZoom);

        this.pitchRange = {min: 0, max: 0};
        this.setPitchRange(options.minPitch || 0, options.maxPitch || 60);

        this.container = container;
        this.credentials = options.credentials;
        this.mapType = options.type;
        this.supportMapTypes = options.supportedMapTypes;
        if (!this.supportMapTypes.includes(this.mapType)) {
            console.warn(
                `The map type ${this.mapType} is not supported. Fallback to the default map type ${this.supportMapTypes[0]}`,
            );
            this.mapType = this.supportMapTypes[0];
        }

        this.map = this.initialiseMap(options);

        this.startSynchroniseMap();
        this.loadPlugins(plugins);
        this.onMapViewChanged();
        this.onReady();
    }

    /** Initialise the map, should be implemented by subclasses */
    abstract initialiseMap(options: OptionTypes): MapType;

    /** Start synchronise the map, should be implemented by subclasses */
    abstract startSynchroniseMap(): void;

    freezeViewCentre() {
        console.log("View centre is frozen");
        this.gotoCentre();
        this.viewPortFrozen = true;
    }

    unfreezeViewCentre() {
        console.log("View centre is unfrozen");
        this.viewPortFrozen = false;
    }

    getMapViewFrozenStatus() {
        return this.viewPortFrozen;
    }

    /**
     * Set the centre of the map
     * @param centre
     * @param silence Whether to call the corresponding handlers
     */
    setCentre(centre: GeoLocation.GeographicPointType, silence: boolean): void {
        this.mapViewPort.centre = GeoLocation.clonePoint(centre);
        if (!silence) this.onMapViewChanged();
    }

    /** Get the map centre */
    getCentre() {
        return Object.freeze(this.mapViewPort.centre);
    }

    private supportPitch() {
        const flag = this.supportedFeatures.includes("pitch");
        if(!flag) console.info("Map does not support pitch");
        return flag;
    }

    setPitchRange(min?: number, max?: number) {
        if(!this.supportPitch()) return;
        if(isNumber(min)) this.pitchRange.min = min!;
        if(isNumber(max)) this.pitchRange.max = max!;
    }
    
    verifyPitch(pitch: number) {
        return pitch >= this.pitchRange.min && pitch <= this.pitchRange.max;
    }

    getPitch() {
        if(!this.supportPitch()) return 0;
        return this.mapViewPort.pitch;
    }

    setPitch(pitch: number, silence: boolean) {
        if(!this.supportPitch()) return;
        if(!this.verifyPitch(pitch)) return;
        this.mapViewPort.pitch = pitch;
        if(!silence) this.onMapViewChanged();
    }

    private supportBearing() {
        const flag = this.supportedFeatures.includes("bearing");
        if(!flag) console.info("Map does not support bearing");
        return flag;
    }

    getBearing() {
        if(!this.supportBearing()) return 0;
        return this.mapViewPort.bearing;
    }

    setBearing(bearing: number, silence: boolean) {
        if(!this.supportBearing()) return;
        this.mapViewPort.bearing = 360 - bearing;
        if(!silence) this.onMapViewChanged();
    }

    setMapViewPort(port: Partial<MapViewPortType>, silence = false) {
        if(isNumber(port.bearing)) this.setBearing(port.bearing, true);
        if(isNumber(port.pitch)) this.setPitch(port.pitch, true);
        if(!isEmpty(port.centre)) this.setCentre(port.centre, true);
        if(!silence) this.onMapViewChanged();
    }

    getMapViewPort(): Readonly<MapViewPortType> {
        return Object.freeze(this.mapViewPort);
    }

    /** get the view centre */
    getViewCentre() {
        return Object.freeze(this.viewPort.centre);
    }
    
    /**
     * Set the view centre
     * @param viewCentre Set the centre of viewport
     * @param updateMapView Whether to call the corresponding handlers
     */
    setViewCentre(viewCentre: GeoLocation.GeographicPointType, silence = false) {
        const mapCentre = this.getCentre();
        if(this.viewPortFrozen && !(viewCentre.latitude === mapCentre.latitude && viewCentre.longitude === mapCentre.longitude)) return;
        this.viewPort.centre = GeoLocation.clonePoint(viewCentre);
        if(!silence) this.onMapViewChanged();
    }

    getViewBearing() {
        if(!this.supportBearing()) return 0;
        return this.viewPort.bearing;
    }

    setViewBearing(bearing: number, silence = false) {
        if(!this.supportBearing()) return;
        if(this.viewPortFrozen && bearing !== this.viewPort.bearing) return;
        this.viewPort.bearing = 360 - bearing;
        if(!silence) this.onMapViewChanged();
    }

    getViewPitch() {
        if(!this.supportPitch()) return 0;
        return this.viewPort.pitch;
    }

    setViewPitch(pitch: number, silence = false) {
        if(!this.supportPitch() || !this.verifyPitch(pitch)) return;
        if(this.viewPortFrozen && pitch !== this.viewPort.pitch) return;
        this.viewPort.pitch = pitch;
        if(!silence) this.onMapViewChanged();
    }

    /**
     * Set the viewport
     * @param view Set the zoom and centre of the map
     */
    setViewPort(view: Partial<(ViewOptionType & MapViewPortType)>, silence = false) {
        if(isNumber(view.zoom)) this.setZoom(view.zoom, false);
        if(!isEmpty(view.centre)) this.setViewCentre(view.centre);
        if(isNumber(view.bearing)) this.setViewBearing(view.bearing);
        if(isNumber(view.pitch)) this.setViewPitch(view.pitch);

        if(!silence) this.onMapViewChanged();
    }

    /**
     * Get the current view port of the map.
     * @returns The viewport
     */
    getViewPort(): Readonly<MapViewPortType> {
        return Object.freeze(this.viewPort);
    }

    /**
     * Set the zoom of the map
     * @param zoom
     * @param silence Whether to call the corresponding handlers
     * @returns
     */
    setZoom(zoom: number, silence: boolean = true) {
        if (!this.verifyZoom(zoom)) {
            console.warn(`Invalid zoom value "${zoom}". The value must be between ${this.zoomRange.min} and ${this.zoomRange.max} inclusive`);
            return false;
        }

        this.zoom = zoom;
        if (!silence) this.onMapViewChanged();
        return true;
    }

    /**
     * Get the zoom of the map
     */
    getZoom() {
        return this.zoom;
    }

    /** Move the map to the centre */
    gotoCentre() {
        this.setViewCentre(this.getCentre());
    }

    /**
     * Zoom in the map
     * @returns Whether the zoom is valid
     */
    zoomIn() {
        const valid = this.verifyZoom(this.zoom + 1);
        if (valid) {
            this.zoom += 1;
            this.onMapViewChanged();
            return true;
        }
        return false;
    }

    /**
     * Zoom out the map
     * @returns Whether the zoom is valid
     */
    zoomOut() {
        const valid = this.verifyZoom(this.zoom - 1);
        if (valid) {
            this.zoom -= 1;
            this.onMapViewChanged();
            return true;
        }
        return false;
    }

    /**
     * @returns The zoom range
     */
    getZoomRange() {
        return Object.freeze({ min: this.zoomRange.min, max: this.zoomRange.max });
    }

    setZoomRange(min?: number, max?: number) {
        if(isNumber(min)) this.zoomRange.min = min!;
        if(isNumber(max)) this.zoomRange.max = max!;
    }

    /**
     * Load the plugins
     * @param plugins The plugin list
     * @returns Whether the loading is successful
     */
    async loadPlugins(plugins: MapPluginConstructor<MapBackend<MapType, OptionTypes>>[]) {
        let success = true;

        for(const plugin of plugins){
            const mountSuccess = await (async () => {
                try {
                    return await new plugin(this).mount();
                } catch (e) {
                    console.info(`Fail to initialize plugin: ${plugin.name}`, e);
                    return false;
                }
            })();
            if (!mountSuccess) success = false;
        } // mount plugins

        return success;
    }

    /**
     * Add the event to the host map level
     * @param type type of the event
     * @param handler the callback function
     */
    abstract addNativeHandler(
        type: string,
        handler: (eventArg?: any) => void,
    ): any;

    /**
     * Remove the event from the host map level
     * @param id id of the event
     */
    abstract removeNativeHandler(id: any): any;

    /**
     * Add the event to the host map
     * @param type type of the event
     * @param handler the callback function
     * @param native Whether the event is native (add to the host map level)
     */
    addEventHandler(
        type: string,
        handler: (map: MapBackend<MapType, OptionTypes>) => void,
        native: false,
    ): number;
    addEventHandler(
        type: string,
        handler: (eventArg?: any) => void,
        native: true,
    ): any;
    addEventHandler(
        type: string,
        handler: (eventArg?: any) => void,
        native: boolean = false,
    ): number | any {
        let eventID: number | any;
        if (!native) eventID = this.addEventHandlersCustomized(type, handler);
        else eventID = this.addNativeHandler(type, handler);
        return eventID;
    }

    /**
     * Remove the event from the host map
     * @param id id of the event
     * @param native Whether the event is native (remove from the host map level)
     */
    removeEventHandler(id: number, native: false): void;
    removeEventHandler(id: any, native: true): void;
    removeEventHandler(id: number | any, native: boolean = false) {
        if (!native) this.removeEventHandlersCustomized(id as number);
        else this.removeNativeHandler(id);
    }

    /**
     * Add the event to the host map
     * @param type type of the event
     * @param handler the callback function
     */
    private addEventHandlersCustomized(
        type: string,
        handler: MapEventHandlerType["handler"],
    ) {
        const id =
            this.eventHandlers.length > 0
                ? this.eventHandlers[this.eventHandlers.length - 1].id + 1
                : 0;
        this.eventHandlers.push({ id: id, type: type, handler: handler });
        return id;
    }

    /**
     * Remove the event from the host map
     * @param id id of the event
     */
    private removeEventHandlersCustomized(id: number): boolean {
        const index = this.eventHandlers.findIndex(
            (handler) => handler.id === id,
        );
        if (index !== -1) {
            this.eventHandlers.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Trigger the event
     * @param type type of the event
     * @param eventArg event arg
     */
    triggerEvent(type: string, ...eventArg: any[]) {
        this.eventHandlers.forEach((handler) => {
            if (handler.type === type) handler.handler(...eventArg);
        });
    }
    onMapViewChanged() {
        this.triggerEvent("viewchangeend", this);
    }

    onReady() {
        this.triggerEvent("ready", this);
    }

    verifyZoom(zoom: number): boolean {
        return zoom >= this.zoomRange.min && zoom <= this.zoomRange.max;
    }
}

export default MapBackend;

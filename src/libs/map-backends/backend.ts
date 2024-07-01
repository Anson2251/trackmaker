import * as GeoLocation from "@/utils/geolocation";
import type { MapPluginConstructor } from "@/libs/map-backends/plugin";

export const allocateMapID = () => {
    (window as any).MapCount = ((window as any).MapCount || -1) + 1;
    return (window as any).MapCount;
};

/**
The options that a map generally have
*/
export interface Options<MapIDType> {
    /** The centre of the map */
    centre: GeoLocation.GeographicPoint;
    /** The type of the id which indicates the type of the map */
    type: MapIDType;
    /** The collection of the support types */
    supportedMapTypes: MapIDType[];
    /** The initial zoom of the map */
    zoom?: number;
    /** The credential of the map API */
    credentials: string;
    /** The flag to enable the dashboard */
    showDashboard?: boolean;
    /** The max zoom range */
    maxZoom?: number;
    /** The min zoom range */
    minZoom?: number;
}

/** The type of viewport of the map */
export interface ViewOptionType {
    /** The zoom value */
    zoom?: number;
    /** The view centre of the map */
    centre?: GeoLocation.GeographicPoint;
}

/** The type of the map handlers */
export type MapEventHandlerType = {
    id: number;
    type: string;
    handler: (eventArg?: any) => void;
};

/** The general map backend
 */
export abstract class MapBackend<
    MapType,
    OptionTypes extends Options<OptionTypes["type"]>,
> {
    zoom: number = 5;
    viewCentre: GeoLocation.GeographicPoint;
    centre: GeoLocation.GeographicPoint;
    readonly credentials: string;
    mapType: OptionTypes["type"];
    container: HTMLElement;
    map: MapType;
    eventHandlers: MapEventHandlerType[] = [];
    maxZoom: number = 20;
    minZoom: number = 3;
    plugins: any = {};
    supportMapTypes: OptionTypes["supportedMapTypes"];

    properties: Record<string, any>;

    /**
     * @param container The html container where the map places
     * @param options The options
     * @param plugins The plugins to load
     */
    constructor(
        container: HTMLElement,
        options: OptionTypes,
        plugins: MapPluginConstructor<MapBackend<MapType, OptionTypes>>[] = [],
    ) {
        this.container = container;
        this.mapType = options.type;
        this.centre = options.centre;
        this.viewCentre = GeoLocation.clonePoint(this.centre);
        this.zoom = options.zoom || this.zoom;
        this.maxZoom = options.maxZoom || this.maxZoom;
        this.minZoom = options.minZoom || this.minZoom;
        this.credentials = options.credentials;

        this.supportMapTypes = options.supportedMapTypes;
        if (!this.supportMapTypes.includes(this.mapType)) {
            console.warn(
                `The map type ${this.mapType} is not supported. Fallback to the default map type ${this.supportMapTypes[0]}`,
            );
            this.mapType = this.supportMapTypes[0];
        }

        this.properties = {};

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

    /**
     * Set the centre of the map
     * @param centre
     * @param silence Whether to call the corresponding handlers
     */
    setCentre(centre: GeoLocation.GeographicPoint, silence: boolean): void {
        this.centre = centre;
        if (!silence) this.onMapViewChanged();
    }

    /** Get the map centre */
    getCentre() {
        return this.centre;
    }

    /**
     * Set the view centre
     * @param viewCentre Set the centre of viewport
     * @param updateMapView Whether to call the corresponding handlers
     */
    setViewCentre(
        viewCentre: GeoLocation.GeographicPoint,
        updateMapView: boolean = true,
    ) {
        this.viewCentre = GeoLocation.clonePoint(viewCentre);
        if (updateMapView) {
            this.onMapViewChanged();
        }
    }

    /** get the view centre */
    getViewCentre() {
        return this.viewCentre;
    }

    /**
     * Load the plugins
     * @param plugins The plugin list
     * @returns Whether the loading is successful
     */
    loadPlugins(
        plugins: MapPluginConstructor<MapBackend<MapType, OptionTypes>>[],
    ) {
        let success = true;

        plugins.forEach((plugin) => {
            const mountSuccess = (() => {
                try {
                    return new plugin(this).mount();
                } catch (e) {
                    console.error(
                        `Fail to initialize plugin: ${plugin.name}`,
                        e,
                    );
                    return false;
                }
            })();
            if (!mountSuccess) success = false;
        }); // mount plugins

        return success;
    }

    /**
     * Set the zoom of the map
     * @param zoom
     * @param updateMapView Whether to call the corresponding handlers
     * @returns
     */
    setZoom(zoom: number, updateMapView: boolean = true) {
        if (!this.verifyZoom(zoom)) {
            console.warn(
                `Invalid zoom value. Must be between ${this.minZoom} and ${this.maxZoom} inclusive`,
            );
            return false;
        }

        this.zoom = zoom;
        if (updateMapView) this.onMapViewChanged();
        return true;
    }

    /**
     * Get the zoom of the map
     */
    getZoom() {
        return this.zoom;
    }

    /**
     * Set the viewport
     * @param view Set the zoom and centre of the map
     */
    setView(view: ViewOptionType) {
        this.setZoom(view.zoom || this.zoom, false);
        this.setViewCentre(view.centre || this.viewCentre, false);

        this.onMapViewChanged();
    }

    /** Move the map to the centre */
    gotoCentre() {
        this.setViewCentre(this.centre);
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
        return { min: this.minZoom, max: this.maxZoom };
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

    private verifyZoom(zoom: number): boolean {
        return zoom >= this.minZoom && zoom <= this.maxZoom;
    }
}

export default MapBackend;

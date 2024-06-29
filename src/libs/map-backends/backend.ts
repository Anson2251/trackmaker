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

export type MapEventHandlerType = {
	id: number;
	type: string;
	handler: (eventArg?: any) => void;
};

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

	abstract initialiseMap(options: OptionTypes): MapType;

	abstract startSynchroniseMap(): void;

	setCentre(centre: GeoLocation.GeographicPoint, silence: boolean): void {
		this.centre = centre;
		if (!silence) this.onMapViewChanged();
	}

	getCentre() {
		return this.centre;
	}

	setViewCentre(
		viewCentre: GeoLocation.GeographicPoint,
		updateMapView: boolean = true,
	) {
		this.viewCentre = GeoLocation.clonePoint(viewCentre);
		if (updateMapView) {
			this.onMapViewChanged();
		}
	}

	getViewCentre() {
		return this.viewCentre;
	}

	loadPlugins(
		plugins: MapPluginConstructor<MapBackend<MapType, OptionTypes>>[],
	) {
		let success = true;

		plugins.forEach((plugin) => {
			const mountSuccess = (() => {
				try {
					return new plugin(this).mount();
				} catch (e) {
					console.error(`Fail to initialize plugin: ${plugin.name}`, e);
					return false;
				}
			})();
			if (!mountSuccess) success = false;
		}); // mount plugins

		return success;
	}

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

	getZoom() {
		return this.zoom;
	}

	setView(view: ViewOptionType) {
		this.setZoom(view.zoom || this.zoom, false);
		this.setViewCentre(view.centre || this.viewCentre, false);

		this.onMapViewChanged();
	}

	gotoCentre() {
		this.setViewCentre(this.centre);
	}

	zoomIn() {
		const valid = this.verifyZoom(this.zoom + 1);
		if (valid) {
			this.zoom += 1;
			this.onMapViewChanged();
			return true;
		}
		return false;
	}

	zoomOut() {
		const valid = this.verifyZoom(this.zoom - 1);
		if (valid) {
			this.zoom -= 1;
			this.onMapViewChanged();
			return true;
		}
		return false;
	}

	getZoomRange() {
		return { min: this.minZoom, max: this.maxZoom };
	}

	abstract addNativeHandler(
		type: string,
		handler: (eventArg?: any) => void,
	): any;

	abstract removeNativeHandler(id: any): any;

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

	removeEventHandler(id: number, native: false): void;
	removeEventHandler(id: any, native: true): void;
	removeEventHandler(id: number | any, native: boolean = false) {
		if (!native) this.removeEventHandlersCustomized(id as number);
		else this.removeNativeHandler(id);
	}

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

	private removeEventHandlersCustomized(id: number): boolean {
		const index = this.eventHandlers.findIndex((handler) => handler.id === id);
		if (index !== -1) {
			this.eventHandlers.splice(index, 1);
			return true;
		}
		return false;
	}

	onMapViewChanged() {
		this.eventHandlers.forEach((handler) => {
			if (handler.type === "viewchangeend") handler.handler(this);
		});
	}

	onReady() {
		this.eventHandlers.forEach((handler) => {
			if (handler.type === "ready") handler.handler(this);
		});
	}

	private verifyZoom(zoom: number): boolean {
		return zoom >= this.minZoom && zoom <= this.maxZoom;
	}
}

export default MapBackend;

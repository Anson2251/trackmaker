import { ref, watch } from "vue";
import { inRange } from "lodash-es";

import * as GeoLocation from "@/utils/geolocation";
import { DeviceOrientationService } from "@/utils/device-orientation-service";
import { MapLibreGLBackend, type MapLibreGLBackendOptionTypes, type MapLibreGLBackendType } from "@/libs/map-backends/maplibre-gl/maplibre-gl-backend";
import type { MapPluginConstructor } from "@/libs/map-backends/plugin";
import BingMapBackend, { type BingMapOptions } from "@/libs/map-backends/bing-maps/bing-map-backend";
import MapBackend, { allocateMapID } from "@/libs/map-backends/backend";

import { mapTilerKey, bingMapsKey } from "@/configs";

export type PropsType = {
    plugin?: MapPluginConstructor<MapLibreGLBackend>[],
    centre?: {
        latitude: number,
        longitude: number
    },
    viewCentre?: {
        latitude: number,
        longitude: number
    },
    tracking?: boolean,
    mapType: string,
    zoom?: number,
}

export type MessageEmitterType = {
    info: (msg: string, duration: number) => void,
    warning: (msg: string, duration: number) => void
    error: (msg: string, duration: number) => void
}

export type CommonMapEmitters = (event: "ready" | "update:centre" | "update:zoom" | "update:viewCentre" | "update:mapType", ...args: any[]) => void;

export class MapManager {
    id: string;
    container: HTMLElement | undefined = undefined;
    map: MapBackend<any, any> | undefined = undefined;
    trackingMode = ref(false);
    zoom = ref(10);
    pitch = ref(0);
    bearing = ref(0);
    bearingTweakStickDeg = 0;
    backendType: "bing" | "maplibregl";
    private message: MessageEmitterType;
    private emit: CommonMapEmitters;
    private props: any;

    constructor(props: PropsType & any, emits: CommonMapEmitters, messageEmitter: MessageEmitterType, backendType: "bing" | "maplibregl" = "maplibregl") {
        this.id = `MapView-${backendType.toUpperCase()}-${allocateMapID()}`;
        this.message = messageEmitter;
        this.emit = emits;
        this.props = props;
        this.backendType = backendType;

        watch(this.pitch, () => {
            if (!this.map) return;
            if (this.map.verifyPitch(this.pitch.value)) this.map.setPitch(this.pitch.value, false);
            else {
                if(this.pitch.value > this.map.getPitchRange().max) this.message.warning("Already at maximum preset pitch level", 1000);
                else if(this.pitch.value < this.map.getPitchRange().min) this.message.warning("Already at minimum preset pitch level", 1000);
                this.pitch.value = this.map.getPitch();
            }
        });

        watch(this.bearing, () => {
            const sticksDeg = Math.round(this.bearing.value / 90) * 90;
            if (inRange(Math.abs(sticksDeg - this.bearing.value), 0, this.bearingTweakStickDeg)) this.bearing.value = sticksDeg; // no need to tweak
            this.map?.setBearing(this.bearing.value, false);
        });

        watch(this.zoom, () => {
            if (!this.map) return;
            if (this.map.verifyZoom(this.zoom.value)) this.map.setZoom(this.zoom.value, false);
            else {
                if(this.zoom.value > this.map.getZoomRange().max) this.message.warning("Already at maximum preset zoom level", 1000);
                else if(this.zoom.value < this.map.getZoomRange().min) this.message.warning("Already at minimum preset zoom level", 1000);
                this.zoom.value = this.map.getZoom();
            }
        });

        

        watch(this.trackingMode, this.trackingModeEnterLeave.bind(this));
        // TODO: add a input status indicator to prevent these updaters break user's input (especially for mobile devices with touch screens)

        watch(props, this.handleProps.bind(this), { deep: true });
    }

    private handleProps(newProps: any, oldProps: any) {
        if (!this.map) return;

        if (oldProps.centre && newProps.centre && oldProps.centre !== newProps.centre) {
            this.map.setCentre(newProps.centre || { latitude: 0, longitude: 0 }, this.trackingMode.value);
        }

        if (oldProps.zoom && newProps.zoom && oldProps.zoom !== newProps.zoom) {
            this.map.setZoom(newProps.zoom || 10);
        }

        if (oldProps.viewCentre && newProps.viewCentre && oldProps.viewCentre !== newProps.viewCentre) {
            this.map.setCentre(newProps.viewCentre || { latitude: 0, longitude: 0 }, this.trackingMode.value);
        }

        // TODO
        // if (oldProps.mapType && newProps.mapType && oldProps.mapType !== newProps.mapType) {
        //     this.map.map.setMapType((newProps.mapType || Microsoft.Maps.MapTypeId.road) as any);
        // }
    }
    setupBingMap() {
        const mapOptions: BingMapOptions = {
            centre: (this.props.centre ? this.props.centre : { latitude: 0, longitude: 0 }),
            type: (this.props.mapType as any || Microsoft.Maps.MapTypeId.road),
            supportedMapTypes: [Microsoft.Maps.MapTypeId.road, Microsoft.Maps.MapTypeId.aerial, Microsoft.Maps.MapTypeId.canvasDark, Microsoft.Maps.MapTypeId.canvasLight],
            zoom: (this.props.zoom || 10),
            credentials: bingMapsKey,
            customizedTouchpadBehavior: (this.props.customizedTouchpadBehavior || true),
            enableInertia: (this.props.enableInertia || false),
            forceHiDPI: (this.props.forceHiDPI || false),
            showDashboard: (this.props.showDashboard || false),
            liteMode: (this.props.liteMode || false),
            minZoom: 1,
            maxZoom: 15
        };
        const mapPlugins = this.props.plugin || [];

        return new BingMapBackend(this.container!, mapOptions, mapPlugins as MapPluginConstructor<BingMapBackend>[]);
    }

    setupMapLibreGLMap() {
        const mapOptions: MapLibreGLBackendOptionTypes = {
            centre: (this.props.centre ? this.props.centre : { latitude: 0, longitude: 0 }),
            zoom: (this.props.zoom || 10),
            type: this.props.mapType,
            supportedMapTypes: ["street", "satellite"],
            credentials: mapTilerKey,
            maxZoom: 22,
            minZoom: 1,
        };
        const mapPlugins = this.props.plugin || [];

        return new MapLibreGLBackend(this.container!, mapOptions, mapPlugins);
    }

    private setupMap() {
        if (!this.container) throw new Error(`Container for ${this.id} is not ready.`);

        switch (this.backendType) {
            case "bing":
                return this.setupBingMap();
            case "maplibregl":
                return this.setupMapLibreGLMap();
            default:
                throw new Error(`Unsupported map backend type: ${this.backendType}`);
        }
    }

    private initialiseGeolocation() {
        GeoLocation.UpdateService.addListener((newLocation) => {
            if (!this.map) return;
            if (!this.trackingMode.value) return;

            this.map.setCentre(newLocation, this.trackingMode.value);
            this.map.gotoCentre();
            this.emit("update:centre", { ...newLocation });
        });

        GeoLocation.UpdateService.worker.addHandler("error", (_: any, error: any) => {
            this.message.error(`Fail to update your location, reason: "${error.message}".`, 3000);
        }, true);
    }

    private initialiseDeviceOrientation() {
        DeviceOrientationService.addHandler((deg) => {
            console.log("device orientation", deg);
            this.bearing.value = deg;
        });
    }

    mount() {
        this.initialiseGeolocation();
        this.initialiseDeviceOrientation();

        this.container = document.getElementById(this.id)!;

        this.map = this.setupMap();
        this.map.addEventHandler("viewchangeend", (newMap: MapLibreGLBackendType) => {
            this.emit("update:zoom", newMap.getZoom());
            this.emit("update:viewCentre", { ...newMap.getCentre() });
        }, false);

        const initCentre = setInterval(() => {
            if (GeoLocation.UpdateService.isInitialised()) {
                if (!this.map) return;
                clearInterval(initCentre);

                this.map.setCentre(GeoLocation.UpdateService.getPresent(), true);
                this.map.gotoCentre();
            }
        });

        this.trackingModeEnterLeave();
        this.emit("ready", this.map);

    }

    private trackingModeEnterLeave() {
        if (!this.map) {
            console.log("map not ready");
            return;
        }
        this.trackingMode.value ? this.map.freezeViewCentre() : this.map.unfreezeViewCentre();
        if (this.trackingMode.value) {
            this.message.info("You're in tracking mode. The map will only follow your geographical location.", 3000);
        }
    }
}

export default MapManager;

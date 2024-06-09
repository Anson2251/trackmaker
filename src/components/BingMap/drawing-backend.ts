/// <reference path="../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import DrawingMapBackend from "@/utils/drawing-map/drawing-backend";

import bingMaps from "./map";
import bingMapsDrawing from "@/components/BingMap/plugins/drawing-map";
import DrawingComponentProxy from "@/utils/drawing-map/components-proxies/component";
import type {PolygonProperties} from "@/utils/drawing-map/components-proxies/polygon";
import type {PushpinProperties} from "@/utils/drawing-map/components-proxies/pushpin";
import type {PolylineProperties} from "@/utils/drawing-map/components-proxies/polyline";

import BidirectionalMap from "@/utils/bidirectional-map";
import {v4 as uuidV4} from "uuid";

type ComponentProperties = PolygonProperties | PushpinProperties | PolylineProperties;

type DrawingBingMap = {
    plugins: {
        drawingTools: bingMapsDrawing
    }
}

export class BingMapDrawingBackend extends DrawingMapBackend<DrawingBingMap> {
    primitiveComponentMap = new BidirectionalMap<number, string>();

    initialiseBackend(): Promise<void> {
        if (this.hostMap.plugins.drawingTools.initialised) return Promise.resolve();
        return new Promise((resolve) => {
            this.hostMap.plugins.drawingTools.addHandler("ready", () => {
                resolve();
            });
        });
    }

    escape(): void {
        this.hostMap.plugins.drawingTools.stopDrawing();
    }

    addProxyPrimitiveToMap(component: DrawingComponentProxy<ComponentProperties>): void {
        const primitive = BingMapDrawingBackend.convertProxyToBingMapPrimitives(component);
        this.hostMap.plugins.drawingTools.manager?.add(primitive);
        this.primitiveComponentMap.set(this.hostMap.plugins.drawingTools.getPrimitiveID(primitive), component.id);
    }

    clear(): void {
        this.hostMap.plugins.drawingTools.clear();
    }

    editComponent(component: DrawingComponentProxy<ComponentProperties>): void {
        const primitive = this.getPrimitiveFromComponent(component)
        if (primitive === undefined) throw new Error(`Fail to find primitive with id ${component.id}. (Internal Error)`);
        this.hostMap.plugins.drawingTools.edit(primitive);
    }

    getShownComponentIDs(): string[] {
        return this.hostMap.plugins.drawingTools.manager?.getPrimitives().map(p => {
            const primitiveID = this.hostMap.plugins.drawingTools.getPrimitiveID(p);
            const componentID = this.primitiveComponentMap.getForward(primitiveID);
            if (componentID === undefined) throw new Error(`Fail to find component id with primitive id ${primitiveID}. (Internal Error)`);
            return componentID
        }) || [];
    }

    removeProxyPrimitiveFromMap(component: DrawingComponentProxy<ComponentProperties>): void {
        const primitive = this.getPrimitiveFromComponent(component);
        if(primitive) this.hostMap.plugins.drawingTools.manager?.remove(primitive);
    }

    getPrimitiveFromComponent(component: DrawingComponentProxy<ComponentProperties>): Microsoft.Maps.IPrimitive | undefined {
        const primitiveID = this.primitiveComponentMap.getBackward(component.id);
        if (primitiveID === undefined) return undefined;
        return this.hostMap.plugins.drawingTools.getPrimitiveByID(primitiveID);
    }
}

export namespace BingMapDrawingBackend {
    export function convertProxyToBingMapPrimitives(component: DrawingComponentProxy<ComponentProperties>): Microsoft.Maps.IPrimitive {
        const coordinates = component.type === "Point"
            ? new Microsoft.Maps.Location(component.coordinates[0].latitude, component.coordinates[0].longitude)
            : component.coordinates.map(c => new Microsoft.Maps.Location(c.latitude, c.longitude));

        const properties = JSON.parse(JSON.stringify(component.getProperties())) as ComponentProperties;

        switch (component.type) {
            case "Polygon": {
                return new Microsoft.Maps.Polygon(coordinates as Microsoft.Maps.Location[], properties);
            }
            case "LineString": {
                return new Microsoft.Maps.Polyline(coordinates as Microsoft.Maps.Location[], properties);
            }
            case "Point": {
                return new Microsoft.Maps.Pushpin(coordinates as Microsoft.Maps.Location, properties);
            }
            default: {
                throw new Error(`Unknown component type: ${component.type}`);
            }
        }
    }
}

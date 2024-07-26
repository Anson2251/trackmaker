import DrawingMapBackend from "@/libs/drawing-map/drawing-backend";
import BingMapBackend from "./bing-map-backend";
import * as BingMapPrimitiveUtils from "./primitive-utils";
import type BingMapPlugin_Drawing from "@/libs/map-backends/bing-maps/plugins/drawing-map";
import DrawingComponentProxy from "@/libs/drawing-map/components-proxies/component";
import { type PolygonProperties } from "@/libs/drawing-map/components-proxies/polygon";
import { type PushpinProperties } from "@/libs/drawing-map/components-proxies/pushpin";
import { type PolylineProperties } from "@/libs/drawing-map/components-proxies/polyline";

import BidirectionalMap from "@/utils/bidirectional-map";
import { difference } from "lodash-es";

type ComponentProperties = PolygonProperties | PushpinProperties | PolylineProperties;

interface DrawingBingMap extends BingMapBackend {
    plugins: {
        drawingTools: BingMapPlugin_Drawing
    }
}

export class BingMapDrawingBackend extends DrawingMapBackend<DrawingBingMap> {
    primitiveComponentMap = new BidirectionalMap<number, string>();
    previousPrimitiveIDs: number[] = [];

    syncFromMapToBackend(): void {
        const latestPrimitivesIDs = this.hostMap.plugins.drawingTools.getAllPrimitiveIDs();
        const newPrimitivesIDs = difference(latestPrimitivesIDs, this.previousPrimitiveIDs);
        const deletedPrimitives = difference(this.previousPrimitiveIDs, latestPrimitivesIDs);

        this.previousPrimitiveIDs = latestPrimitivesIDs;

        const addedComponentIDs: string[] = [];
        if (newPrimitivesIDs) {
            newPrimitivesIDs.forEach(id => {
                const primitive = this.hostMap.plugins.drawingTools.getPrimitiveByID(id)!;
                const component = BingMapPrimitiveUtils.convertNativePrimitive2ProxyComponent(primitive);

                // add registration
                this.add(component);
                this.showByID(component.id, true);
                addedComponentIDs.push(component.id);
                this.primitiveComponentMap.set(id, component.id);
            });
        }

        const deletedComponentIDs: string[] = [];
        if (deletedPrimitives) {
            deletedPrimitives.forEach(id => {
                const correspondingComponentID = this.primitiveComponentMap.getForward(id);
                if (!correspondingComponentID) throw new Error(`correspondingComponentID ${id} is undefined`);

                const component = this.componentLibrary.get(correspondingComponentID)!;

                // remove registration
                this.hide(component, true);
                this.remove(component);
                deletedComponentIDs.push(correspondingComponentID);
                this.primitiveComponentMap.removeForward(id);
            });
        }

        // TODO: add history record
    }
    syncFromBackendToMap(): void {
        // throw new Error("Method not implemented.");
    }
    
    

    getShownComponentIDs(): string[] {
        return this.primitiveComponentMap.backwardKeys();
    }

    escape(): void {
        this.hostMap.plugins.drawingTools.stopDrawing();
    }

    initialiseBackend(): Promise<void> {
        if (this.hostMap.plugins.drawingTools.initialised) return Promise.resolve();
        return new Promise((resolve) => {
            this.hostMap.plugins.drawingTools.addHandler("ready", () => {
                this.hostMap.plugins.drawingTools.addHandler("drawingChanged", () => {
                    this.executeHandler("change");
                });
                resolve();
            });
        });
    }

    clear(): void {
        this.hostMap.plugins.drawingTools.clear();
    }

    editPrimitive(component: DrawingComponentProxy<ComponentProperties>): void {
        const primitive = this.getPrimitiveFromComponent(component);
        if (primitive === undefined) throw new Error(`Fail to find primitive with id ${component.id}`);
        this.hostMap.plugins.drawingTools.edit(primitive);
    }

    // getShownComponentIDs(): string[] {
    //     return this.hostMap.plugins.drawingTools.manager?.getPrimitives().map((p: any) => {
    //         const primitiveID = this.hostMap.plugins.drawingTools.getPrimitiveID(p);
    //         const componentID = this.primitiveComponentMap.getForward(primitiveID);
    //         if (componentID === undefined) throw new Error(`Fail to find component id with primitive id ${primitiveID}. (Internal Error)`);
    //         return componentID;
    //     }) || [];
    // }

    // removeProxyPrimitiveFromMap(component: DrawingComponentProxy<ComponentProperties>): void {
    //     const primitive = this.getPrimitiveFromComponent(component);
    //     if(primitive) this.hostMap.plugins.drawingTools.manager?.remove(primitive);
    // }

    getPrimitiveFromComponent(component: DrawingComponentProxy<ComponentProperties>): Microsoft.Maps.IPrimitive | undefined {
        const primitiveID = this.primitiveComponentMap.getBackward(component.id);
        if (primitiveID === undefined) return undefined;
        return this.hostMap.plugins.drawingTools.getPrimitiveByID(primitiveID);
    }
}



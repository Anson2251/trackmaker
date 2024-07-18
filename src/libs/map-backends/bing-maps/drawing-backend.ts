import DrawingMapBackend from "@/libs/drawing-map/drawing-backend";
import BingMapBackend from "./bing-map-backend";

import type BingMapPlugin_Drawing from "@/components/BingMap/plugins/drawing-map";
import DrawingComponentProxy from "@/libs/drawing-map/components-proxies/component";
import PolygonProxy, { type PolygonProperties } from "@/libs/drawing-map/components-proxies/polygon";
import PushPinProxy, { type PushpinProperties } from "@/libs/drawing-map/components-proxies/pushpin";
import PolylineProxy, { type PolylineProperties } from "@/libs/drawing-map/components-proxies/polyline";

import BidirectionalMap from "@/utils/bidirectional-map";

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
        const newPrimitivesIDs = latestPrimitivesIDs.filter(id => !this.previousPrimitiveIDs.includes(id));
        const deletedPrimitives = this.previousPrimitiveIDs.filter(id => !latestPrimitivesIDs.includes(id));

        this.previousPrimitiveIDs = latestPrimitivesIDs;

        console.log(newPrimitivesIDs, deletedPrimitives);

        const addedComponentIDs: string[] = [];
        if (newPrimitivesIDs) {
            newPrimitivesIDs.forEach(id => {
                const primitive = this.hostMap.plugins.drawingTools.getPrimitiveByID(id);
                if (!primitive) return;

                const component = this.convertNativePrimitiveToProxyComponent(primitive);

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
                if (!correspondingComponentID) {
                    console.error("correspondingComponentID not found");
                    return;
                }

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
        throw new Error("Method not implemented.");
    }
    convertProxyComponentToNativePrimitive(component: DrawingComponentProxy<PolygonProperties | PushpinProperties | PolylineProperties>): Microsoft.Maps.IPrimitive {
        const className = component.type;
        switch (className) {
            case "pushpin": {
                return BingMapDrawingBackend.convertPushPinProxyToPrimitive(component as PushPinProxy);
            }
            case "polyline": {
                return BingMapDrawingBackend.convertPolylineProxyToPrimitive(component as PolylineProxy);
            }
            case "polygon": {
                return BingMapDrawingBackend.convertPolygonProxyToPrimitive(component as PolygonProxy);
            }
        }
        throw new Error(`Fail to convert component with class name "${className}"`);
    }
    convertNativePrimitiveToProxyComponent(primitive: Microsoft.Maps.IPrimitive): DrawingComponentProxy<PolygonProperties | PushpinProperties | PolylineProperties> {
        const className = this.getPrimitiveClass(primitive);
        let newComponent: any = null;
        switch (className) {
            case "pushpin": {
                newComponent = BingMapDrawingBackend.convertPushPinPrimitiveToProxy(primitive as Microsoft.Maps.Pushpin);
                break;
            }
            case "polyline": {
                newComponent = BingMapDrawingBackend.convertPolylinePrimitiveToProxy(primitive as Microsoft.Maps.Polyline);
                break;
            }
            case "polygon": {
                newComponent = BingMapDrawingBackend.convertPolygonPrimitiveToProxy(primitive as Microsoft.Maps.Polygon);
                break;
            }
        }
        if (!newComponent) throw new Error(`Fail to convert primitive with class name "${className}"`);
        return newComponent;
    }

    getShownComponentIDs(): string[] {
        throw new Error("Method not implemented.");
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

    // addProxyPrimitiveToMap(component: DrawingComponentProxy<ComponentProperties>): void {
    //     const primitive = BingMapDrawingBackend.convertProxyToBingMapPrimitives(component);
    //     this.hostMap.plugins.drawingTools.manager?.add(primitive);
    //     this.primitiveComponentMap.set(this.hostMap.plugins.drawingTools.getPrimitiveID(primitive), component.id);
    // }

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

    private getPrimitiveClass(p: Microsoft.Maps.IPrimitive): string {
        return (((p as any).entity.id as string).split("_")[0] as string).toLocaleLowerCase();
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

    export function convertPushPinPrimitiveToProxy(primitive: Microsoft.Maps.Pushpin): PushPinProxy {
        const coord = (primitive as Microsoft.Maps.Pushpin).getLocation();
        const geoLocation = {
            latitude: coord.latitude,
            longitude: coord.longitude
        };
        const properties: PushpinProperties = {
            title: (primitive as Microsoft.Maps.Pushpin).getTitle(),
            subTitle: (primitive as Microsoft.Maps.Pushpin).getSubTitle(),
            label: (primitive as Microsoft.Maps.Pushpin).getSubTitle(),
            icon: (primitive as Microsoft.Maps.Pushpin).getIcon(),
            visible: (primitive as Microsoft.Maps.Pushpin).getVisible(),
            draggable: (primitive as Microsoft.Maps.Pushpin).getDraggable(),
        };
        return new PushPinProxy([geoLocation], properties);
    }

    export function convertPolylinePrimitiveToProxy(primitive: Microsoft.Maps.Polyline): PolylineProxy {
        const coordinates = (primitive as Microsoft.Maps.Polyline).getLocations();
        const properties: PolylineProperties = {
            strokeColor: (primitive as Microsoft.Maps.Polyline).getStrokeColor().toString(),
            strokeThickness: (primitive as Microsoft.Maps.Polyline).getStrokeThickness(),
            visible: (primitive as Microsoft.Maps.Polyline).getVisible(),
        };
        return new PolylineProxy(coordinates, properties);
    }

    export function convertPolygonPrimitiveToProxy(primitive: Microsoft.Maps.Polygon): PolygonProxy {
        const coordinates = (primitive as Microsoft.Maps.Polygon).getLocations();
        const properties: PolygonProperties = {
            fillColor: (primitive as Microsoft.Maps.Polygon).getFillColor().toString(),
            strokeColor: (primitive as Microsoft.Maps.Polygon).getStrokeColor().toString(),
            strokeThickness: (primitive as Microsoft.Maps.Polygon).getStrokeThickness(),
            visible: (primitive as Microsoft.Maps.Polygon).getVisible(),
        };
        return new PolygonProxy(coordinates, properties);
    }

    export function convertPushPinProxyToPrimitive(proxy: PushPinProxy): Microsoft.Maps.Pushpin {
        return new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(proxy.coordinates[0].latitude, proxy.coordinates[0].longitude), proxy.properties);
    }

    export function convertPolylineProxyToPrimitive(proxy: PolylineProxy): Microsoft.Maps.Polyline {
        return new Microsoft.Maps.Polyline(proxy.coordinates.map(c => new Microsoft.Maps.Location(c.latitude, c.longitude)), proxy.properties);
    }

    export function convertPolygonProxyToPrimitive(proxy: PolygonProxy): Microsoft.Maps.Polygon {
        return new Microsoft.Maps.Polygon(proxy.coordinates.map(c => new Microsoft.Maps.Location(c.latitude, c.longitude)), proxy.properties);
    }
}

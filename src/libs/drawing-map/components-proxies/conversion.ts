import type {GeographicPointType} from "@/utils/geolocation";
import PolygonProxy, { type PolygonProperties } from "@/libs/drawing-map/components-proxies/polygon";
import PushpinProxy, { type PushpinProperties } from "@/libs/drawing-map/components-proxies/pushpin";
import PolylineProxy, { type PolylineProperties } from "@/libs/drawing-map/components-proxies/polyline";

import {CartoSketchRoute, CartoSketchRouteItem} from "@/libs/cartosketch/route";
import {CartoSketchDraft, CartoSketchDraftItem} from "@/libs/cartosketch/draft";
import CartoSketch from "@/libs/cartosketch";

import { cloneDeep } from "lodash-es";

type ComponentProxiesCollection = PolygonProxy | PolylineProxy | PushpinProxy;

// ====== CONVERT TO PROXIES ======

export function importComponentFromGeoJSON(GeoJSON: any, type?: "Polygon" | "Point" | "LineString", id?: string, name?: string): ComponentProxiesCollection {
    if(type && GeoJSON.geometry.type as string !== type) throw new Error(`Cannot convert GeoJSON type: ${GeoJSON.geometry.type} into ${type}`);

    const shapeType = (type || GeoJSON.geometry.type) as string;
    const shapeCoords = (GeoJSON.geometry.coordinates as [number, number][]).map((point) => ({longitude: point[0], latitude: point[1]} as GeographicPointType));
    const shapeName = (name || GeoJSON.properties.name || GeoJSON.properties.title) as string;

    switch(shapeType) {
        case "Polygon":
            return new PolygonProxy(shapeCoords, GeoJSON.properties, id, shapeName);
        case "LineString":
            return new PolylineProxy(shapeCoords, GeoJSON.properties, id, shapeName);
        case "Point":
            return new PushpinProxy(shapeCoords, GeoJSON.properties, id, shapeName);
        default:
            throw new Error(`Unknown GeoJSON type: ${shapeType}`);
    }
}

export function importComponentFromCartoSketchDraftItem(item: CartoSketchDraftItem): PolygonProxy | PolylineProxy | PushpinProxy {
    const shape = item.getShapes();
    switch(shape.type) {
        case "Point": {
            const point: GeographicPointType = {
                latitude: shape.coordinates[0][1] as number,
                longitude: shape.coordinates[0][0] as number
            };
            const properties: PushpinProperties = Object.assign({}, {
                draggable: false,
                icon: "",
                label: "",
                title: (item.name as string) || "",
                subTitle:  "",
                visible: true,
            }, item.properties);
            return new PushpinProxy([point], properties, item.id, item.name);
        }
        case "LineString": {
            const coordinates = (shape.coordinates as [number, number][]).map((point) => ({
                longitude: point[0],
                latitude: point[1]
            } as GeographicPointType));
            const properties: PolylineProperties = Object.assign({}, {
                strokeColor: "#000000",
                strokeThickness: 1,
                visible: true,
            }, item.properties);

            return new PolylineProxy(coordinates, properties, item.id, item.name);
        }
        case "Polygon": {
            const coordinates = (shape.coordinates as [number, number][]).map((point) => ({
                longitude: point[0],
                latitude: point[1]
            } as GeographicPointType));
            const properties: PolygonProperties = Object.assign({}, {
                fillColor: "#2d9cec",
                strokeColor: "#000000",
                strokeThickness: 1,
                visible: true,
            }, item.properties);

            return new PolylineProxy(coordinates, properties, item.id, item.name);
        }
        default: {
            throw new Error(`Unknown GeoJSON type: ${shape.type}`);
        }
    }
}

export function importComponentsFromCartoSketchDraft(draft: CartoSketchDraft): ComponentProxiesCollection[] {
    return draft.getDrafts().map(component => importComponentFromCartoSketchDraftItem(component));
}

export function importRouteFromCartoSketchRouteItem(item: CartoSketchRouteItem): PolylineProxy {
    const properties: PolylineProperties = Object.assign({}, {
        strokeColor: "#000000",
        strokeThickness: 1,
        visible: true,
    }, item.properties);
    const coordinates = item.getPoints().map(p => ({latitude: p.latitude, longitude: p.longitude} as GeographicPointType));
    return new PolylineProxy(coordinates, properties, item.id, item.name);
}

export function importRouteFromCartoSketchRoute(route: CartoSketchRoute): PolylineProxy[] {
    return route.getRoutes().map(item => importRouteFromCartoSketchRouteItem(item));
}

export function importComponentsFromCartoSketch(sketch: CartoSketch): {routes: PolylineProxy[], drafts: ComponentProxiesCollection[] } {
    return {
        routes: importRouteFromCartoSketchRoute(sketch.routes),
        drafts: importComponentsFromCartoSketchDraft(sketch.drafts),
    };
}

// ======= EXPORT FROM PROXIES =======

export function exportComponentToCartoSketchDraftItem(component: ComponentProxiesCollection): CartoSketchDraftItem {
    const properties = cloneDeep(component.getProperties()) as  PolygonProperties | PolylineProperties | PushpinProperties;
    const shape = {
        type: component.type as "Point" | "LineString" | "Polygon",
        coordinates: component.coordinates.map(p => [p.longitude, p.latitude] as [number, number]),
    };

    switch (component.type) {
        case "Polygon": {
            return new CartoSketchDraftItem(component.name, shape, component.id, properties);
        }
        case "LineString": {
            return new CartoSketchDraftItem(component.name, shape, component.id, properties);
        }
        case "Point": {
            return new CartoSketchDraftItem(component.name, shape, component.id, properties);
        }
        default: {
            throw new Error(`Unknown component type: ${component.type}`);
        }
    }
}

export function exportComponentsToCartoSketchDraft(components: ComponentProxiesCollection[], id: string, name: string): CartoSketchDraft {
    const drafts = components.map(c => exportComponentToCartoSketchDraftItem(c));
    return new CartoSketchDraft(name, drafts, id);
}

export function exportComponentTOCartoSketchRouteItem(component: PolylineProxy): CartoSketchRouteItem {
    const points = component.getLocations().map(p => ({latitude: p.latitude, longitude: p.longitude} as GeographicPointType));
    const properties = cloneDeep(component.getProperties()) as PolylineProperties;
    return new CartoSketchRouteItem(component.name, component.id, points, properties);
}

export function exportComponentsToCartoSketchRoute(components: PolylineProxy[], id: string, name: string): CartoSketchRoute {
    return new CartoSketchRoute(name, components.map(r => exportComponentTOCartoSketchRouteItem(r)), id);
}

export function exportComponentsToCartoSketch(routes: PolylineProxy[], drafts: ComponentProxiesCollection[], id: string, name: string): CartoSketch {
    const sketchRoutes = exportComponentsToCartoSketchRoute(routes, id, name);
    const sketchDrafts = exportComponentsToCartoSketchDraft(drafts, id, name);
    return new CartoSketch(name, id, sketchRoutes, sketchDrafts);
}

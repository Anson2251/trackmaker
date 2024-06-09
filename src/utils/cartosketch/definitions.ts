import type {GeographicPoint} from "@/utils/geolocation";


// ======= GENERAL =======

export type GeographicSketchType = {
    id: string,
    name: string,
    routes: GeographicRouteType,
    drafts: GeographicDraftType,
}

export type GeoJSONPoint = [number, number];

export const supportedShapeTypes = ["Polygon", "LineString", "Point"];
export type SupportedShapeType = "Polygon" | "LineString" | "Point";

export type GeographicShape = {
    type: SupportedShapeType,
    coordinates: GeoJSONPoint[];
}


// ======= DRAFT =======

export type GeographicDraftItemType = {
    id: string;
    name: string
    shape: GeographicShape,
    properties: GeographicDraftItemProperties,
}

export type GeographicDraftItemGeoJSON = {
    type: "Feature",
    properties: GeographicDraftItemProperties,
    /** the shape inside the feature */
    geometry: GeographicShape
}

export type GeographicDraftType = {
    id: string,
    name: string,
    drafts: GeographicDraftItemType[]
}

export type GeographicDraftGeoJSON = {
    type: "FeatureCollection",
    features: GeographicDraftItemGeoJSON[]
}

export type GeographicDraftItemProperties = {
    title?: string,
    subTitle?: string;
    label?: string,
    fillColor?: string,
    strokeColor?: string,
    strokeThickness?: number,
    icon?: string,
    visible?: boolean
}


// ======= ROUTE =======

export type GeographicRouteItemProperties = {
    strokeColor?: string,
    strokeThickness?: number,
    visible?: boolean
}

export type GeographicRouteItemType = {
    name: string,
    id: string,
    properties: GeographicRouteItemProperties,
    points: GeographicPoint[]
};

export type GeographicRouteItemGeoJSON = {
    type: "Feature",
    properties: GeographicRouteItemProperties,
    /** the shape inside the feature */
    geometry: {
        type: "LineString",
        /** the list of points which form the shape */
        coordinates: Array<[number, number]>,
    },
}

export type GeographicRouteGeoJSON = {
    type: "FeatureCollection",
    /** the list of routes in the collection */
    features: GeographicRouteItemGeoJSON[]
}

export type GeographicRouteType = {
    id: string;
    name: string,
    routes: GeographicRouteItemType[]
};


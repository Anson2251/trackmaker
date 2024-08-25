import type {GeographicPointType} from "@/utils/geolocation";


// ======= GENERAL =======

export type GeographicSketchMetaType = {
    name: string,
    author: string,
    description: string,
    creation_timestamp: number,
    modification_timestamp: number,
    tags: string[],
    type: "application/json",
    version: 1,
    signature: string
}

export type GeographicSketchType = {
    id: string,
    routes: GeographicRouteType,
    drafts: GeographicDraftType,
    meta: GeographicSketchMetaType
}

export type GeoJSONPoint = [number, number];

export const supportedShapeTypes = ["Polygon", "LineString", "Point"];
export type SupportedShapeType = "Polygon" | "LineString" | "Point";

export type GeographicShape = {
    type: SupportedShapeType,
    coordinates: GeoJSONPoint[];
}

export type GeneralComponentMetaType = {
    name: string,
    description: string,
}

export function GeographicSketchMetaDefaultValue(): GeographicSketchMetaType {
    return {
        name: "Untitled",
        author: "",
        description: "",
        creation_timestamp: Date.now(),
        modification_timestamp: Date.now(),
        tags: [],
        type: "application/json",
        version: 1,
        signature: ""
    };
}

export function GeneralComponentMetaDefaultValue(): GeneralComponentMetaType {
    return {
        name: "Untitled",
        description: "",
    };
}


// ======= DRAFT =======

export type GeographicDraftItemType = {
    id: string;
    name: string
    shape: GeographicShape,
    properties: GeographicDraftItemProperties,
    meta: GeneralComponentMetaType
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
    points: GeographicPointType[],
    meta: GeneralComponentMetaType
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

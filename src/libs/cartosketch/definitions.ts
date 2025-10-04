import type { GeographicPoint } from "../geolocation/types";

// ======= META =======

export type GeographicGeneralMetaType = {
    name: string;
    description: string;
    creation_timestamp: number;
    modification_timestamp: number;
    created_by: string,
    modified_by: string,
    tags: string[];
}

export function GeographicGeneralMetaDefaultValue(): GeographicGeneralMetaType {
    return ({
        name: "Untitled",
        description: "A new geographic item",
        creation_timestamp: Date.now(),
        modification_timestamp: Date.now(),
        created_by: "anonymous",
        modified_by: "anonymous",
        tags: []
    });
}

export type GeographicSketchMetaType = GeographicGeneralMetaType & {
    version: number;
    signature?: string;
};

export function GeographicSketchMetaDefaultValue(): GeographicSketchMetaType {
    return {
        ...GeographicGeneralMetaDefaultValue(),
        version: 1,
        signature: undefined
    };
}

// ======= GENERAL =======

export type GeographicSketchType = {
    id: string;
    meta: GeographicSketchMetaType;
    routes: GeographicRouteType;
    drafts: GeographicDraftType;
}

export type GeoJSONPoint = [number, number];

export const supportedShapeTypes = ["Polygon", "LineString", "Point"];
export type SupportedShapeType = "Polygon" | "LineString" | "Point";

export type GeographicShape = {
    type: SupportedShapeType,
    coordinates: GeoJSONPoint[] | GeoJSONPoint;
}

// ======= DRAFT =======

export type GeographicDraftItemType = {
    id: string;
    meta: GeographicGeneralMetaType,
    shape: GeographicShape,
    properties: GeographicDraftItemProperties,
}

export type GeographicDraftItemGeoJSON = {
    type: "Feature",
    properties: GeographicDraftItemProperties & GeographicGeneralMetaType,
    /** the shape inside the feature */
    geometry: GeographicShape
}

export type GeographicDraftType = {
    id: string;
    meta: GeographicGeneralMetaType,
    drafts: GeographicDraftItemType[]
}

export type GeographicDraftGeoJSON = {
    type: "FeatureCollection",
    features: GeographicDraftItemGeoJSON[],
    properties: GeographicGeneralMetaType
}

export type GeographicDraftItemProperties = {
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
    visible?: boolean,
    description?: string,
}

export type GeographicRouteItemType = {
    id: string,
    meta: GeographicGeneralMetaType & {
        record_timespan?: number,
        distance?: number
    },
    properties: GeographicRouteItemProperties,
    points: GeographicPoint[]
};

export type GeographicRouteItemGeoJSON = {
    type: "Feature",
    properties: GeographicRouteItemProperties & GeographicGeneralMetaType,
    /** the shape inside the feature */
    geometry: {
        type: "LineString",
        /** the list of points which form the shape */
        coordinates: [number, number][],
    },
}

export type GeographicRouteGeoJSON = {
    type: "FeatureCollection",
    /** the list of routes in the collection */
    features: GeographicRouteItemGeoJSON[],
    properties: GeographicGeneralMetaType
}

export type GeographicRouteType = {
    id: string;
    meta: GeographicGeneralMetaType,
    routes: GeographicRouteItemType[]
};

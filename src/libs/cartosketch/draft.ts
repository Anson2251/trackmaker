import { v4 as uuidV4 } from "uuid";
import type {
    GeographicDraftItemType,
    GeographicDraftItemProperties,
    GeographicDraftItemGeoJSON,
    GeographicShape,
    SupportedShapeType,
} from "@/libs/cartosketch/definitions";
import { GeographicGeneralMetaDefaultValue, supportedShapeTypes } from "@/libs/cartosketch/definitions";
import type { GeographicGeneralMetaType } from "@/libs/cartosketch/definitions";

/**
 * Export a draft item as GeoJSON
 */
export function exportDraftAsGeoJSON(draft: GeographicDraftItemType): GeographicDraftItemGeoJSON {
    return {
        type: "Feature",
        properties: Object.assign({}, draft.properties, draft.meta),
        geometry: draft.shape
    };
}

/**
 * Import a draft from GeoJSON
 */
export function importDraftFromGeoJSON(geojson: GeographicDraftItemGeoJSON, name?: string, id?: string): GeographicDraftItemType {
    const type = geojson.geometry.type as string;
    const coordinates = Array.isArray(geojson.geometry.coordinates[0]) 
        ? geojson.geometry.coordinates 
        : [geojson.geometry.coordinates] as [number, number][];

    if (!(type in supportedShapeTypes)) throw new Error(`Invalid or unsupported geometry type ${type}`);
    if (!coordinates) throw new Error(`No coordinates provided in feature`);

    const properties: GeographicDraftItemProperties = {
        fillColor: geojson.properties.fillColor || "",
        strokeColor: geojson.properties.strokeColor || "",
        strokeThickness: geojson.properties.strokeThickness || 1,
        icon: geojson.properties.icon || "",
        visible: geojson.properties.visible !== undefined ? geojson.properties.visible : true,
    };

    const shape: GeographicShape = {
        type: type as SupportedShapeType,
        coordinates: coordinates,
    };

    const meta: GeographicGeneralMetaType = {
        name: geojson.properties.name || name || "Untitled Draft",
        description: geojson.properties.description || "",
        creation_timestamp: geojson.properties.creation_timestamp || Date.now(),
        modification_timestamp: geojson.properties.modification_timestamp || Date.now(),
        tags: geojson.properties.tags || [],
        created_by: geojson.properties.created_by || "",
        modified_by: geojson.properties.modified_by || ""
    };

    return {
        id: id ?? uuidV4(),
        meta,
        shape,
        properties
    };
}

/**
 * Create a new empty draft
 */
export function createDraft(
    shape: GeographicShape,
    properties: GeographicDraftItemProperties = {},
    meta: Partial<GeographicGeneralMetaType> = {}
): GeographicDraftItemType {
    return {
        id: uuidV4(),
        meta: { ...GeographicGeneralMetaDefaultValue(), ...meta },
        shape,
        properties
    };
}

/**
 * Update draft modification timestamp
 */
export function touchDraft(draft: GeographicDraftItemType): void {
    draft.meta.modification_timestamp = Date.now();
}

/**
 * Set draft shape
 */
export function setDraftShape(draft: GeographicDraftItemType, shape: GeographicShape): void {
    draft.shape = shape;
    touchDraft(draft);
}

/**
 * Set draft properties
 */
export function setDraftProperties(draft: GeographicDraftItemType, properties: Partial<GeographicDraftItemProperties>): void {
    draft.properties = { ...draft.properties, ...properties };
    touchDraft(draft);
}

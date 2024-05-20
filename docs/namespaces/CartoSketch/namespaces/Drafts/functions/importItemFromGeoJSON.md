[**trackmaker**](../../../../../index.md) • **Docs**

***

[trackmaker](../../../../../globals.md) / [CartoSketch](../../../index.md) / [Drafts](../index.md) / importItemFromGeoJSON

# Function: importItemFromGeoJSON()

> **importItemFromGeoJSON**(`geojson`, `name`?, `id`?): `CartoSketchDraftItem`

Create a new draft from the provided GeoJSON object, which only contains one feature.

## Parameters

• **geojson**: `any`

The GeoJSON object containing the draft information.

• **name?**: `string`

• **id?**: `string`

## Returns

`CartoSketchDraftItem`

A Promise that resolves to the new draft object.

## Source

[draft.ts:106](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L106)

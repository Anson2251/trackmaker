[**trackmaker**](../../../../../index.md) • **Docs**

***

[trackmaker](../../../../../globals.md) / [CartoSketch](../../../index.md) / [Drafts](../index.md) / importFromGeoJSON

# Function: importFromGeoJSON()

> **importFromGeoJSON**(`geojson`, `name`?, `id`?): [`Drafts`](../../../classes/Drafts.md)

Import a draft which is in the form of GeoJSON based on the provided name and draft content.
Newly imported draft will not be stored in the database

## Parameters

• **geojson**: `any`

The draft content to import.

• **name?**: `string`

• **id?**: `string`= `undefined`

## Returns

[`Drafts`](../../../classes/Drafts.md)

A promise that resolves to the imported draft.

## Source

[draft.ts:147](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L147)

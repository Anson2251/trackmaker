[**trackmaker**](../../../index.md) • **Docs**

***

[trackmaker](../../../globals.md) / [CartoSketch](../index.md) / Drafts

# Namespace: Drafts

## Functions

### create()

> **create**(`name`, `drafts`, `id`): [`Drafts`](../index.md#drafts)

#### Parameters

• **name**: `string`

• **drafts**: `CartoSketchDraftItem`[]= `[]`

• **id**: `string`= `undefined`

#### Returns

[`Drafts`](../index.md#drafts)

#### Source

[draft.ts:90](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L90)

***

### createItem()

> **createItem**(`name`, `id`, `shape`, `properties`): `CartoSketchDraftItem`

#### Parameters

• **name**: `string`

• **id**: `string`= `undefined`

• **shape**: `GeographicShape`

• **properties**: `GeographicDraftItemProperties`= `{}`

#### Returns

`CartoSketchDraftItem`

#### Source

[draft.ts:94](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L94)

***

### importFromGeoJSON()

> **importFromGeoJSON**(`geojson`, `name`?, `id`?): [`Drafts`](../index.md#drafts)

Import a draft which is in the form of GeoJSON based on the provided name and draft content.
Newly imported draft will not be stored in the database

#### Parameters

• **geojson**: `any`

The draft content to import.

• **name?**: `string`

• **id?**: `string`= `undefined`

#### Returns

[`Drafts`](../index.md#drafts)

A promise that resolves to the imported draft.

#### Source

[draft.ts:147](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L147)

***

### importItemFromGeoJSON()

> **importItemFromGeoJSON**(`geojson`, `name`?, `id`?): `CartoSketchDraftItem`

Create a new draft from the provided GeoJSON object, which only contains one feature.

#### Parameters

• **geojson**: `any`

The GeoJSON object containing the draft information.

• **name?**: `string`

• **id?**: `string`

#### Returns

`CartoSketchDraftItem`

A Promise that resolves to the new draft object.

#### Source

[draft.ts:106](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L106)

***

### readFromStorage()

> **readFromStorage**(`data`): [`Drafts`](../index.md#drafts)

#### Parameters

• **data**: `GeographicDraftType`

#### Returns

[`Drafts`](../index.md#drafts)

#### Source

[draft.ts:161](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L161)

***

### readItemFromStorage()

> **readItemFromStorage**(`data`): `CartoSketchDraftItem`

#### Parameters

• **data**: `GeographicDraftItemType`

#### Returns

`CartoSketchDraftItem`

#### Source

[draft.ts:157](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L157)

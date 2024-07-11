[**trackmaker**](../../../../README.md) • **Docs**

***

[trackmaker](../../../../modules.md) / [libs/cartosketch/draft](../README.md) / CartoSketchDraft

# CartoSketchDraft

## Functions

### create()

> **create**(`name`, `drafts`, `id`): [`CartoSketchDraft`](../README.md#cartosketchdraft)

#### Parameters

• **name**: `string`

• **drafts**: [`CartoSketchDraftItem`](../README.md#cartosketchdraftitem)[] = `[]`

• **id**: `string` = `...`

#### Returns

[`CartoSketchDraft`](../README.md#cartosketchdraft)

#### Defined in

[src/libs/cartosketch/draft.ts:56](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L56)

***

### createItem()

> **createItem**(`name`, `id`, `shape`, `properties`): [`CartoSketchDraftItem`](../README.md#cartosketchdraftitem)

#### Parameters

• **name**: `string`

• **id**: `string` = `...`

• **shape**: [`GeographicShape`](../../definitions.md#geographicshape)

• **properties**: [`GeographicDraftItemProperties`](../../definitions.md#geographicdraftitemproperties) = `{}`

#### Returns

[`CartoSketchDraftItem`](../README.md#cartosketchdraftitem)

#### Defined in

[src/libs/cartosketch/draft.ts:60](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L60)

***

### importFromGeoJSON()

> **importFromGeoJSON**(`geojson`, `name`?, `id`?): [`CartoSketchDraft`](../README.md#cartosketchdraft)

Import a draft which is in the form of GeoJSON based on the provided name and draft content.
Newly imported draft will not be stored in the database

#### Parameters

• **geojson**: `any`

The draft content to import.

• **name?**: `string`

• **id?**: `string` = `...`

#### Returns

[`CartoSketchDraft`](../README.md#cartosketchdraft)

A promise that resolves to the imported draft.

#### Defined in

[src/libs/cartosketch/draft.ts:113](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L113)

***

### importItemFromGeoJSON()

> **importItemFromGeoJSON**(`geojson`, `name`?, `id`?): [`CartoSketchDraftItem`](../README.md#cartosketchdraftitem)

Create a new draft from the provided GeoJSON object, which only contains one feature.

#### Parameters

• **geojson**: `any`

The GeoJSON object containing the draft information.

• **name?**: `string`

• **id?**: `string`

#### Returns

[`CartoSketchDraftItem`](../README.md#cartosketchdraftitem)

A Promise that resolves to the new draft object.

#### Defined in

[src/libs/cartosketch/draft.ts:72](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L72)

***

### readFromStorage()

> **readFromStorage**(`data`): [`CartoSketchDraft`](../README.md#cartosketchdraft)

#### Parameters

• **data**: [`GeographicDraftType`](../../definitions.md#geographicdrafttype)

#### Returns

[`CartoSketchDraft`](../README.md#cartosketchdraft)

#### Defined in

[src/libs/cartosketch/draft.ts:127](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L127)

***

### readItemFromStorage()

> **readItemFromStorage**(`data`): [`CartoSketchDraftItem`](../README.md#cartosketchdraftitem)

#### Parameters

• **data**: [`GeographicDraftItemType`](../../definitions.md#geographicdraftitemtype)

#### Returns

[`CartoSketchDraftItem`](../README.md#cartosketchdraftitem)

#### Defined in

[src/libs/cartosketch/draft.ts:123](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L123)

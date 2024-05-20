[**trackmaker**](../../../index.md) • **Docs**

***

[trackmaker](../../../globals.md) / [CartoSketch](../index.md) / Drafts

# Class: Drafts

## Constructors

### new Drafts()

> **new Drafts**(`name`, `drafts`, `id`): [`Drafts`](Drafts.md)

#### Parameters

• **name**: `string`

• **drafts**: `CartoSketchDraftItem`[]= `[]`

• **id**: `string`= `undefined`

#### Returns

[`Drafts`](Drafts.md)

#### Source

[draft.ts:55](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L55)

## Properties

### drafts

> `readonly` **drafts**: `CartoSketchDraftItem`[]

#### Source

[draft.ts:53](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L53)

***

### id

> `readonly` **id**: `string`

#### Source

[draft.ts:51](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L51)

***

### name

> **name**: `string`

#### Source

[draft.ts:52](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L52)

## Methods

### addDraft()

> **addDraft**(`draft`): `void`

#### Parameters

• **draft**: `CartoSketchDraftItem`

#### Returns

`void`

#### Source

[draft.ts:69](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L69)

***

### exportAsGeoJSON()

> **exportAsGeoJSON**(): `GeographicDraftGeoJSON`

#### Returns

`GeographicDraftGeoJSON`

#### Source

[draft.ts:73](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L73)

***

### exportToStorage()

> **exportToStorage**(): `GeographicDraftType`

#### Returns

`GeographicDraftType`

#### Source

[draft.ts:80](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L80)

***

### getDraft()

> **getDraft**(`id`): `undefined` \| `CartoSketchDraftItem`

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `CartoSketchDraftItem`

#### Source

[draft.ts:65](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L65)

***

### getDrafts()

> **getDrafts**(): readonly `CartoSketchDraftItem`[]

#### Returns

readonly `CartoSketchDraftItem`[]

#### Source

[draft.ts:61](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/draft.ts#L61)

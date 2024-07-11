[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / libs/cartosketch/draft

# libs/cartosketch/draft

## Index

### Namespaces

- [CartoSketchDraft](namespaces/CartoSketchDraft.md)

## References

### default

Renames and re-exports [CartoSketchDraft](README.md#cartosketchdraft)

## Classes

### CartoSketchDraft

#### Constructors

##### new CartoSketchDraft()

> **new CartoSketchDraft**(`name`, `drafts`, `id`): [`CartoSketchDraft`](README.md#cartosketchdraft)

###### Parameters

• **name**: `string`

• **drafts**: [`CartoSketchDraftItem`](README.md#cartosketchdraftitem)[] = `[]`

• **id**: `string` = `...`

###### Returns

[`CartoSketchDraft`](README.md#cartosketchdraft)

###### Defined in

[src/libs/cartosketch/draft.ts:21](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L21)

#### Properties

##### drafts

> `readonly` **drafts**: [`CartoSketchDraftItem`](README.md#cartosketchdraftitem)[]

###### Defined in

[src/libs/cartosketch/draft.ts:19](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L19)

##### id

> `readonly` **id**: `string`

###### Defined in

[src/libs/cartosketch/draft.ts:17](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L17)

##### name

> **name**: `string`

###### Defined in

[src/libs/cartosketch/draft.ts:18](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L18)

#### Methods

##### addDraft()

> **addDraft**(`draft`): `void`

###### Parameters

• **draft**: [`CartoSketchDraftItem`](README.md#cartosketchdraftitem)

###### Returns

`void`

###### Defined in

[src/libs/cartosketch/draft.ts:35](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L35)

##### exportAsGeoJSON()

> **exportAsGeoJSON**(): [`GeographicDraftGeoJSON`](../definitions.md#geographicdraftgeojson)

###### Returns

[`GeographicDraftGeoJSON`](../definitions.md#geographicdraftgeojson)

###### Defined in

[src/libs/cartosketch/draft.ts:39](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L39)

##### exportToStorage()

> **exportToStorage**(): [`GeographicDraftType`](../definitions.md#geographicdrafttype)

###### Returns

[`GeographicDraftType`](../definitions.md#geographicdrafttype)

###### Defined in

[src/libs/cartosketch/draft.ts:46](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L46)

##### getDraft()

> **getDraft**(`id`): `undefined` \| [`CartoSketchDraftItem`](README.md#cartosketchdraftitem)

###### Parameters

• **id**: `string`

###### Returns

`undefined` \| [`CartoSketchDraftItem`](README.md#cartosketchdraftitem)

###### Defined in

[src/libs/cartosketch/draft.ts:31](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L31)

##### getDrafts()

> **getDrafts**(): readonly [`CartoSketchDraftItem`](README.md#cartosketchdraftitem)[]

###### Returns

readonly [`CartoSketchDraftItem`](README.md#cartosketchdraftitem)[]

###### Defined in

[src/libs/cartosketch/draft.ts:27](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L27)

***

### CartoSketchDraftItem

#### Constructors

##### new CartoSketchDraftItem()

> **new CartoSketchDraftItem**(`name`, `shapes`, `id`, `properties`): [`CartoSketchDraftItem`](README.md#cartosketchdraftitem)

###### Parameters

• **name**: `string`

• **shapes**: [`GeographicShape`](../definitions.md#geographicshape)

• **id**: `string` = `...`

• **properties**: [`GeographicDraftItemProperties`](../definitions.md#geographicdraftitemproperties) = `{}`

###### Returns

[`CartoSketchDraftItem`](README.md#cartosketchdraftitem)

###### Defined in

[src/libs/cartosketch/draft.ts:139](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L139)

#### Properties

##### id

> `readonly` **id**: `string`

###### Defined in

[src/libs/cartosketch/draft.ts:135](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L135)

##### name

> **name**: `string`

###### Defined in

[src/libs/cartosketch/draft.ts:134](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L134)

##### properties

> `readonly` **properties**: [`GeographicDraftItemProperties`](../definitions.md#geographicdraftitemproperties)

###### Defined in

[src/libs/cartosketch/draft.ts:137](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L137)

#### Methods

##### exportAsGeoJSON()

> **exportAsGeoJSON**(): [`GeographicDraftItemGeoJSON`](../definitions.md#geographicdraftitemgeojson)

###### Returns

[`GeographicDraftItemGeoJSON`](../definitions.md#geographicdraftitemgeojson)

###### Defined in

[src/libs/cartosketch/draft.ts:159](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L159)

##### exportToStorage()

> **exportToStorage**(): [`GeographicDraftItemType`](../definitions.md#geographicdraftitemtype)

###### Returns

[`GeographicDraftItemType`](../definitions.md#geographicdraftitemtype)

###### Defined in

[src/libs/cartosketch/draft.ts:167](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L167)

##### getShapes()

> **getShapes**(): `Readonly`\<[`GeographicShape`](../definitions.md#geographicshape)\>

###### Returns

`Readonly`\<[`GeographicShape`](../definitions.md#geographicshape)\>

###### Defined in

[src/libs/cartosketch/draft.ts:150](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L150)

##### setProperties()

> **setProperties**(`properties`): `void`

###### Parameters

• **properties**: [`GeographicDraftItemProperties`](../definitions.md#geographicdraftitemproperties)

###### Returns

`void`

###### Defined in

[src/libs/cartosketch/draft.ts:154](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L154)

##### setShapes()

> **setShapes**(`shapes`): `void`

###### Parameters

• **shapes**: [`GeographicShape`](../definitions.md#geographicshape)

###### Returns

`void`

###### Defined in

[src/libs/cartosketch/draft.ts:146](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/draft.ts#L146)

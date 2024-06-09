[**trackmaker**](../../index.md) • **Docs**

***

[trackmaker](../../globals.md) / CartoSketch

# Namespace: CartoSketch

## Index

### Namespaces

- [Drafts](namespaces/Drafts.md)
- [Routes](namespaces/Routes.md)

## Classes

### Drafts

#### Constructors

##### new Drafts()

> **new Drafts**(`name`, `drafts`, `id`): [`Drafts`](index.md#drafts)

###### Parameters

• **name**: `string`

• **drafts**: `CartoSketchDraftItem`[]= `[]`

• **id**: `string`= `undefined`

###### Returns

[`Drafts`](index.md#drafts)

###### Source

[draft.ts:55](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L55)

#### Properties

##### drafts

> `readonly` **drafts**: `CartoSketchDraftItem`[]

###### Source

[draft.ts:53](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L53)

##### id

> `readonly` **id**: `string`

###### Source

[draft.ts:51](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L51)

##### name

> **name**: `string`

###### Source

[draft.ts:52](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L52)

#### Methods

##### addDraft()

> **addDraft**(`draft`): `void`

###### Parameters

• **draft**: `CartoSketchDraftItem`

###### Returns

`void`

###### Source

[draft.ts:69](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L69)

##### exportAsGeoJSON()

> **exportAsGeoJSON**(): `GeographicDraftGeoJSON`

###### Returns

`GeographicDraftGeoJSON`

###### Source

[draft.ts:73](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L73)

##### exportToStorage()

> **exportToStorage**(): `GeographicDraftType`

###### Returns

`GeographicDraftType`

###### Source

[draft.ts:80](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L80)

##### getDraft()

> **getDraft**(`id`): `undefined` \| `CartoSketchDraftItem`

###### Parameters

• **id**: `string`

###### Returns

`undefined` \| `CartoSketchDraftItem`

###### Source

[draft.ts:65](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L65)

##### getDrafts()

> **getDrafts**(): readonly `CartoSketchDraftItem`[]

###### Returns

readonly `CartoSketchDraftItem`[]

###### Source

[draft.ts:61](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/draft.ts#L61)

***

### Routes

#### Constructors

##### new Routes()

> **new Routes**(`name`, `routes`, `id`): [`Routes`](index.md#routes)

###### Parameters

• **name**: `string`

• **routes**: `CartoSketchRouteItem`[]= `[]`

• **id**: `string`= `undefined`

###### Returns

[`Routes`](index.md#routes)

###### Source

[route.ts:50](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L50)

#### Properties

##### id

> `readonly` **id**: `string`

###### Source

[route.ts:47](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L47)

##### name

> **name**: `string`

###### Source

[route.ts:48](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L48)

##### routes

> `readonly` **routes**: `CartoSketchRouteItem`[]

###### Source

[route.ts:49](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L49)

#### Methods

##### addRoute()

> **addRoute**(`route`): `void`

###### Parameters

• **route**: `CartoSketchRouteItem`

###### Returns

`void`

###### Source

[route.ts:64](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L64)

##### exportAsGeoJSON()

> **exportAsGeoJSON**(): `GeographicRouteGeoJSON`

###### Returns

`GeographicRouteGeoJSON`

###### Source

[route.ts:68](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L68)

##### exportToStorage()

> **exportToStorage**(): `GeographicRouteType`

###### Returns

`GeographicRouteType`

###### Source

[route.ts:75](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L75)

##### getRoute()

> **getRoute**(`id`): `undefined` \| `CartoSketchRouteItem`

###### Parameters

• **id**: `string`

###### Returns

`undefined` \| `CartoSketchRouteItem`

###### Source

[route.ts:60](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L60)

##### getRoutes()

> **getRoutes**(): readonly `CartoSketchRouteItem`[]

###### Returns

readonly `CartoSketchRouteItem`[]

###### Source

[route.ts:56](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L56)

## Variables

### storage

> `const` **storage**: `LocalForage`

The database instance

#### Source

[index.ts:72](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L72)

***

### storageSpace

> `const` **storageSpace**: `"cartosketch_storage"` = `"cartosketch_storage"`

The storage database name

#### Source

[index.ts:70](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L70)

## Functions

### deleteRaw()

> **deleteRaw**(`id`): `Promise`\<`void`\>

Deletes a raw item from the storage based on the provided ID.

#### Parameters

• **id**: `string`

The ID of the item to delete.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the item is successfully deleted, or rejects with an error if there was an issue.

#### Source

[index.ts:225](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L225)

***

### exist()

> **exist**(`id`): `Promise`\<`boolean`\>

Checks if a CartoSketch with the given ID exists in the storage.

#### Parameters

• **id**: `string`

The ID of the CartoSketch to check.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if the CartoSketch exists, false otherwise.

#### Source

[index.ts:85](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L85)

***

### getIDList()

> **getIDList**(): `Promise`\<`string`[]\>

Retrieves a list of IDs from the storage.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of IDs.

#### Source

[index.ts:108](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L108)

***

### getList()

> **getList**(): `Promise`\<[`CartoSketch`](../../globals.md#cartosketch)[]\>

Retrieves a list of CartoSketch objects from the storage.

#### Returns

`Promise`\<[`CartoSketch`](../../globals.md#cartosketch)[]\>

A promise that resolves to an array of CartoSketch objects.

#### Source

[index.ts:117](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L117)

***

### getListRaw()

> **getListRaw**(): `Promise`\<[`GeographicSketchType`](../../globals.md#geographicsketchtype)[]\>

Retrieves a list of raw geographic sketches from the storage.

#### Returns

`Promise`\<[`GeographicSketchType`](../../globals.md#geographicsketchtype)[]\>

A promise that resolves to an array of raw geographic sketches.

#### Source

[index.ts:130](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L130)

***

### read()

> **read**(`id`): `Promise`\<[`CartoSketch`](../../globals.md#cartosketch)\>

Reads a CartoSketch from the storage based on the provided ID.

#### Parameters

• **id**: `string`

The ID of the CartoSketch to read.

#### Returns

`Promise`\<[`CartoSketch`](../../globals.md#cartosketch)\>

A promise that resolves to the read CartoSketch, or rejects with an error message if the CartoSketch does not exist or is empty.

#### Source

[index.ts:172](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L172)

***

### readFromStorage()

> **readFromStorage**(`data`): [`CartoSketch`](../../globals.md#cartosketch)

Reads a CartoSketch from the storage based on the provided data.

#### Parameters

• **data**: [`GeographicSketchType`](../../globals.md#geographicsketchtype)

The data containing the name, id, routes, and drafts of the CartoSketch.

#### Returns

[`CartoSketch`](../../globals.md#cartosketch)

The CartoSketch object created from the provided data.

#### Source

[index.ts:99](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L99)

***

### readRaw()

> **readRaw**(`id`): `Promise`\<[`GeographicSketchType`](../../globals.md#geographicsketchtype) \| `undefined`\>

Reads a raw item from the storage based on the provided ID, undefined if the item does not exist.

#### Parameters

• **id**: `string`

The ID of the item to read.

#### Returns

`Promise`\<[`GeographicSketchType`](../../globals.md#geographicsketchtype) \| `undefined`\>

A promise that resolves to the read item, or rejects with an error if the item does not exist.

#### Source

[index.ts:196](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L196)

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Removes a CartoSketch from the storage based on the provided ID.

#### Parameters

• **id**: `string`

The ID of the CartoSketch to remove.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the CartoSketch is successfully removed, or rejects with an error message if the CartoSketch does not exist or cannot be removed.

#### Source

[index.ts:148](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L148)

***

### write()

> **write**(`sketch`): `Promise`\<`void`\>

Saves a CartoSketch to the storage.

#### Parameters

• **sketch**: [`CartoSketch`](../../globals.md#cartosketch)

The CartoSketch object to be saved.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the CartoSketch is saved successfully.

#### Source

[index.ts:186](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L186)

***

### writeRaw()

> **writeRaw**(`id`, `data`): `Promise`\<`void`\>

Writes raw data to the storage with the given ID.

#### Parameters

• **id**: `string`

The ID of the item to write.

• **data**: [`GeographicSketchType`](../../globals.md#geographicsketchtype)

The data to write.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the data is successfully written, or rejects with an error if there was an issue.

#### Source

[index.ts:211](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L211)

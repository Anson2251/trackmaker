[**trackmaker**](../../../../README.md) • **Docs**

***

[trackmaker](../../../../modules.md) / [libs/cartosketch](../../README.md) / CartoSketch

# CartoSketch

## Index

### Namespaces

- [Drafts](namespaces/Drafts.md)
- [Routes](namespaces/Routes/README.md)

## Variables

### storage

> `const` **storage**: `LocalForage`

The database instance

#### Defined in

[src/libs/cartosketch/index.ts:75](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L75)

***

### storageSpace

> `const` **storageSpace**: `"cartosketch_storage"` = `"cartosketch_storage"`

The storage database name

#### Defined in

[src/libs/cartosketch/index.ts:73](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L73)

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

#### Defined in

[src/libs/cartosketch/index.ts:251](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L251)

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

#### Defined in

[src/libs/cartosketch/index.ts:88](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L88)

***

### getIDList()

> **getIDList**(): `Promise`\<`string`[]\>

Retrieves a list of IDs from the storage.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of IDs.

#### Defined in

[src/libs/cartosketch/index.ts:134](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L134)

***

### getInfoList()

> **getInfoList**(): `Promise`\<[`CartoSketchInfo`](../../README.md#cartosketchinfo)[]\>

Retrieves a list of CartoSketch objects from the storage.

#### Returns

`Promise`\<[`CartoSketchInfo`](../../README.md#cartosketchinfo)[]\>

A promise that resolves to an array of raw geographic sketches.

#### Defined in

[src/libs/cartosketch/index.ts:101](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L101)

***

### getList()

> **getList**(): `Promise`\<[`CartoSketch`](../../README.md#cartosketch)[]\>

Retrieves a list of CartoSketch objects from the storage.

#### Returns

`Promise`\<[`CartoSketch`](../../README.md#cartosketch)[]\>

A promise that resolves to an array of CartoSketch objects.

#### Defined in

[src/libs/cartosketch/index.ts:143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L143)

***

### getListRaw()

> **getListRaw**(): `Promise`\<[`GeographicSketchType`](../../definitions.md#geographicsketchtype)[]\>

Retrieves a list of raw geographic sketches from the storage.

#### Returns

`Promise`\<[`GeographicSketchType`](../../definitions.md#geographicsketchtype)[]\>

A promise that resolves to an array of raw geographic sketches.

#### Defined in

[src/libs/cartosketch/index.ts:156](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L156)

***

### read()

> **read**(`id`): `Promise`\<[`CartoSketch`](../../README.md#cartosketch)\>

Reads a CartoSketch from the storage based on the provided ID.

#### Parameters

• **id**: `string`

The ID of the CartoSketch to read.

#### Returns

`Promise`\<[`CartoSketch`](../../README.md#cartosketch)\>

A promise that resolves to the read CartoSketch, or rejects with an error message if the CartoSketch does not exist or is empty.

#### Defined in

[src/libs/cartosketch/index.ts:198](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L198)

***

### readFromStorage()

> **readFromStorage**(`data`): [`CartoSketch`](../../README.md#cartosketch)

Reads a CartoSketch from the storage based on the provided data.

#### Parameters

• **data**: [`GeographicSketchType`](../../definitions.md#geographicsketchtype)

The data containing the name, id, routes, and drafts of the CartoSketch.

#### Returns

[`CartoSketch`](../../README.md#cartosketch)

The CartoSketch object created from the provided data.

#### Defined in

[src/libs/cartosketch/index.ts:125](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L125)

***

### readRaw()

> **readRaw**(`id`): `Promise`\<[`GeographicSketchType`](../../definitions.md#geographicsketchtype) \| `undefined`\>

Reads a raw item from the storage based on the provided ID, undefined if the item does not exist.

#### Parameters

• **id**: `string`

The ID of the item to read.

#### Returns

`Promise`\<[`GeographicSketchType`](../../definitions.md#geographicsketchtype) \| `undefined`\>

A promise that resolves to the read item, or rejects with an error if the item does not exist.

#### Defined in

[src/libs/cartosketch/index.ts:222](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L222)

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

#### Defined in

[src/libs/cartosketch/index.ts:174](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L174)

***

### write()

> **write**(`sketch`): `Promise`\<`void`\>

Saves a CartoSketch to the storage.

#### Parameters

• **sketch**: [`CartoSketch`](../../README.md#cartosketch)

The CartoSketch object to be saved.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the CartoSketch is saved successfully.

#### Defined in

[src/libs/cartosketch/index.ts:212](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L212)

***

### writeRaw()

> **writeRaw**(`id`, `data`): `Promise`\<`void`\>

Writes raw data to the storage with the given ID.

#### Parameters

• **id**: `string`

The ID of the item to write.

• **data**: [`GeographicSketchType`](../../definitions.md#geographicsketchtype)

The data to write.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the data is successfully written, or rejects with an error if there was an issue.

#### Defined in

[src/libs/cartosketch/index.ts:237](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L237)

[**trackmaker**](index.md) • **Docs**

***

# trackmaker

## Namespaces

- [CartoSketch](namespaces/CartoSketch/index.md)

## References

### default

Renames and re-exports [CartoSketch](globals.md#cartosketch)

## Classes

### CartoSketch

#### Constructors

##### new CartoSketch()

> **new CartoSketch**(`name`, `id`, `routes`?, `drafts`?): [`CartoSketch`](globals.md#cartosketch)

###### Parameters

• **name**: `string`

• **id**: `string`= `undefined`

• **routes?**: [`Routes`](namespaces/CartoSketch/index.md#routes)

• **drafts?**: [`Drafts`](namespaces/CartoSketch/index.md#drafts)

###### Returns

[`CartoSketch`](globals.md#cartosketch)

###### Source

[index.ts:36](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L36)

#### Properties

##### drafts

> **drafts**: [`Drafts`](namespaces/CartoSketch/index.md#drafts)

###### Source

[index.ts:34](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L34)

##### id

> `readonly` **id**: `string`

###### Source

[index.ts:31](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L31)

##### name

> **name**: `string`

###### Source

[index.ts:32](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L32)

##### routes

> **routes**: [`Routes`](namespaces/CartoSketch/index.md#routes)

###### Source

[index.ts:33](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L33)

#### Methods

##### exportAsGeoJSON()

> **exportAsGeoJSON**(): [`GeographicSketchGeoJSON`](globals.md#geographicsketchgeojson)

###### Returns

[`GeographicSketchGeoJSON`](globals.md#geographicsketchgeojson)

###### Source

[index.ts:52](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L52)

##### exportToStorage()

> **exportToStorage**(): [`GeographicSketchType`](globals.md#geographicsketchtype)

###### Returns

[`GeographicSketchType`](globals.md#geographicsketchtype)

###### Source

[index.ts:43](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L43)

##### save()

> **save**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Source

[index.ts:63](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L63)

## Type Aliases

### GeographicSketchGeoJSON

> **GeographicSketchGeoJSON**: `object`

#### Type declaration

##### features

> **features**: `object`[]

##### type

> **type**: `"FeatureCollection"`

#### Source

[index.ts:17](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L17)

***

### GeographicSketchType

> **GeographicSketchType**: `object`

#### Type declaration

##### drafts

> **drafts**: `GeographicDraftType`

##### id

> **id**: `string`

##### name

> **name**: `string`

##### routes

> **routes**: `GeographicRouteType`

#### Source

[index.ts:10](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/index.ts#L10)

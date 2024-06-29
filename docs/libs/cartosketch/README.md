[**trackmaker**](../../README.md) • **Docs**

***

[trackmaker](../../modules.md) / libs/cartosketch

# libs/cartosketch

## Index

### Namespaces

- [CartoSketch](namespaces/CartoSketch/README.md)

## References

### default

Renames and re-exports [CartoSketch](README.md#cartosketch)

## Classes

### CartoSketch

#### Constructors

##### new CartoSketch()

> **new CartoSketch**(`name`, `id`, `routes`?, `drafts`?): [`CartoSketch`](README.md#cartosketch)

###### Parameters

• **name**: `string`

• **id**: `string` = `...`

• **routes?**: [`CartoSketchRoute`](namespaces/CartoSketch/namespaces/Routes/README.md#cartosketchroute)

• **drafts?**: [`CartoSketchDraft`](draft/README.md#cartosketchdraft)

###### Returns

[`CartoSketch`](README.md#cartosketch)

###### Defined in

[src/libs/cartosketch/index.ts:39](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L39)

#### Properties

##### drafts

> **drafts**: [`CartoSketchDraft`](draft/README.md#cartosketchdraft)

###### Defined in

[src/libs/cartosketch/index.ts:37](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L37)

##### id

> `readonly` **id**: `string`

###### Defined in

[src/libs/cartosketch/index.ts:34](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L34)

##### name

> **name**: `string`

###### Defined in

[src/libs/cartosketch/index.ts:35](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L35)

##### routes

> **routes**: [`CartoSketchRoute`](namespaces/CartoSketch/namespaces/Routes/README.md#cartosketchroute)

###### Defined in

[src/libs/cartosketch/index.ts:36](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L36)

#### Methods

##### exportAsGeoJSON()

> **exportAsGeoJSON**(): [`GeographicSketchGeoJSON`](README.md#geographicsketchgeojson)

###### Returns

[`GeographicSketchGeoJSON`](README.md#geographicsketchgeojson)

###### Defined in

[src/libs/cartosketch/index.ts:55](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L55)

##### exportToStorage()

> **exportToStorage**(): [`GeographicSketchType`](definitions.md#geographicsketchtype)

###### Returns

[`GeographicSketchType`](definitions.md#geographicsketchtype)

###### Defined in

[src/libs/cartosketch/index.ts:46](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L46)

##### save()

> **save**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Defined in

[src/libs/cartosketch/index.ts:66](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L66)

## Type Aliases

### CartoSketchInfo

> **CartoSketchInfo**: `object`

#### Type declaration

##### id

> **id**: `string`

##### name

> **name**: `string`

#### Defined in

[src/libs/cartosketch/index.ts:27](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L27)

***

### GeographicSketchGeoJSON

> **GeographicSketchGeoJSON**: `object`

#### Type declaration

##### features

> **features**: `object`[]

##### type

> **type**: `"FeatureCollection"`

#### Defined in

[src/libs/cartosketch/index.ts:15](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/index.ts#L15)

[**trackmaker**](../../README.md) • **Docs**

***

[trackmaker](../../modules.md) / libs/cartosketch/definitions

# libs/cartosketch/definitions

## Type Aliases

### GeoJSONPoint

> **GeoJSONPoint**: [`number`, `number`]

#### Defined in

[src/libs/cartosketch/definitions.ts:13](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L13)

***

### GeographicDraftGeoJSON

> **GeographicDraftGeoJSON**: `object`

#### Type declaration

##### features

> **features**: [`GeographicDraftItemGeoJSON`](definitions.md#geographicdraftitemgeojson)[]

##### type

> **type**: `"FeatureCollection"`

#### Defined in

[src/libs/cartosketch/definitions.ts:46](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L46)

***

### GeographicDraftItemGeoJSON

> **GeographicDraftItemGeoJSON**: `object`

#### Type declaration

##### geometry

> **geometry**: [`GeographicShape`](definitions.md#geographicshape)

the shape inside the feature

##### properties

> **properties**: [`GeographicDraftItemProperties`](definitions.md#geographicdraftitemproperties)

##### type

> **type**: `"Feature"`

#### Defined in

[src/libs/cartosketch/definitions.ts:33](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L33)

***

### GeographicDraftItemProperties

> **GeographicDraftItemProperties**: `object`

#### Type declaration

##### fillColor?

> `optional` **fillColor**: `string`

##### icon?

> `optional` **icon**: `string`

##### label?

> `optional` **label**: `string`

##### strokeColor?

> `optional` **strokeColor**: `string`

##### strokeThickness?

> `optional` **strokeThickness**: `number`

##### subTitle?

> `optional` **subTitle**: `string`

##### title?

> `optional` **title**: `string`

##### visible?

> `optional` **visible**: `boolean`

#### Defined in

[src/libs/cartosketch/definitions.ts:51](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L51)

***

### GeographicDraftItemType

> **GeographicDraftItemType**: `object`

#### Type declaration

##### id

> **id**: `string`

##### name

> **name**: `string`

##### properties

> **properties**: [`GeographicDraftItemProperties`](definitions.md#geographicdraftitemproperties)

##### shape

> **shape**: [`GeographicShape`](definitions.md#geographicshape)

#### Defined in

[src/libs/cartosketch/definitions.ts:26](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L26)

***

### GeographicDraftType

> **GeographicDraftType**: `object`

#### Type declaration

##### drafts

> **drafts**: [`GeographicDraftItemType`](definitions.md#geographicdraftitemtype)[]

##### id

> **id**: `string`

##### name

> **name**: `string`

#### Defined in

[src/libs/cartosketch/definitions.ts:40](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L40)

***

### GeographicRouteGeoJSON

> **GeographicRouteGeoJSON**: `object`

#### Type declaration

##### features

> **features**: [`GeographicRouteItemGeoJSON`](definitions.md#geographicrouteitemgeojson)[]

the list of routes in the collection

##### type

> **type**: `"FeatureCollection"`

#### Defined in

[src/libs/cartosketch/definitions.ts:89](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L89)

***

### GeographicRouteItemGeoJSON

> **GeographicRouteItemGeoJSON**: `object`

#### Type declaration

##### geometry

> **geometry**: `object`

the shape inside the feature

##### geometry.coordinates

> **coordinates**: [`number`, `number`][]

the list of points which form the shape

##### geometry.type

> **type**: `"LineString"`

##### properties

> **properties**: [`GeographicRouteItemProperties`](definitions.md#geographicrouteitemproperties)

##### type

> **type**: `"Feature"`

#### Defined in

[src/libs/cartosketch/definitions.ts:78](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L78)

***

### GeographicRouteItemProperties

> **GeographicRouteItemProperties**: `object`

#### Type declaration

##### strokeColor?

> `optional` **strokeColor**: `string`

##### strokeThickness?

> `optional` **strokeThickness**: `number`

##### visible?

> `optional` **visible**: `boolean`

#### Defined in

[src/libs/cartosketch/definitions.ts:65](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L65)

***

### GeographicRouteItemType

> **GeographicRouteItemType**: `object`

#### Type declaration

##### id

> **id**: `string`

##### name

> **name**: `string`

##### points

> **points**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)[]

##### properties

> **properties**: [`GeographicRouteItemProperties`](definitions.md#geographicrouteitemproperties)

#### Defined in

[src/libs/cartosketch/definitions.ts:71](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L71)

***

### GeographicRouteType

> **GeographicRouteType**: `object`

#### Type declaration

##### id

> **id**: `string`

##### name

> **name**: `string`

##### routes

> **routes**: [`GeographicRouteItemType`](definitions.md#geographicrouteitemtype)[]

#### Defined in

[src/libs/cartosketch/definitions.ts:95](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L95)

***

### GeographicShape

> **GeographicShape**: `object`

#### Type declaration

##### coordinates

> **coordinates**: [`GeoJSONPoint`](definitions.md#geojsonpoint)[]

##### type

> **type**: [`SupportedShapeType`](definitions.md#supportedshapetype)

#### Defined in

[src/libs/cartosketch/definitions.ts:18](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L18)

***

### GeographicSketchType

> **GeographicSketchType**: `object`

#### Type declaration

##### drafts

> **drafts**: [`GeographicDraftType`](definitions.md#geographicdrafttype)

##### id

> **id**: `string`

##### name

> **name**: `string`

##### routes

> **routes**: [`GeographicRouteType`](definitions.md#geographicroutetype)

#### Defined in

[src/libs/cartosketch/definitions.ts:6](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L6)

***

### SupportedShapeType

> **SupportedShapeType**: `"Polygon"` \| `"LineString"` \| `"Point"`

#### Defined in

[src/libs/cartosketch/definitions.ts:16](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L16)

## Variables

### supportedShapeTypes

> `const` **supportedShapeTypes**: `string`[]

#### Defined in

[src/libs/cartosketch/definitions.ts:15](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/definitions.ts#L15)

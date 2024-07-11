[**trackmaker**](../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../modules.md) / [libs/cartosketch](../../../../README.md) / [CartoSketch](../../README.md) / Routes

# Routes

## Index

### Namespaces

- [CartoSketchRoute](namespaces/CartoSketchRoute.md)

## References

### default

Renames and re-exports [CartoSketchRoute](README.md#cartosketchroute)

## Classes

### CartoSketchRoute

#### Constructors

##### new CartoSketchRoute()

> **new CartoSketchRoute**(`name`, `routes`, `id`): [`CartoSketchRoute`](README.md#cartosketchroute)

###### Parameters

• **name**: `string`

• **routes**: [`CartoSketchRouteItem`](README.md#cartosketchrouteitem)[] = `[]`

• **id**: `string` = `...`

###### Returns

[`CartoSketchRoute`](README.md#cartosketchroute)

###### Defined in

[src/libs/cartosketch/route.ts:17](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L17)

#### Properties

##### id

> `readonly` **id**: `string`

###### Defined in

[src/libs/cartosketch/route.ts:14](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L14)

##### name

> **name**: `string`

###### Defined in

[src/libs/cartosketch/route.ts:15](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L15)

##### routes

> `readonly` **routes**: [`CartoSketchRouteItem`](README.md#cartosketchrouteitem)[]

###### Defined in

[src/libs/cartosketch/route.ts:16](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L16)

#### Methods

##### addRoute()

> **addRoute**(`route`): `void`

###### Parameters

• **route**: [`CartoSketchRouteItem`](README.md#cartosketchrouteitem)

###### Returns

`void`

###### Defined in

[src/libs/cartosketch/route.ts:31](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L31)

##### exportAsGeoJSON()

> **exportAsGeoJSON**(): [`GeographicRouteGeoJSON`](../../../../definitions.md#geographicroutegeojson)

###### Returns

[`GeographicRouteGeoJSON`](../../../../definitions.md#geographicroutegeojson)

###### Defined in

[src/libs/cartosketch/route.ts:35](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L35)

##### exportToStorage()

> **exportToStorage**(): [`GeographicRouteType`](../../../../definitions.md#geographicroutetype)

###### Returns

[`GeographicRouteType`](../../../../definitions.md#geographicroutetype)

###### Defined in

[src/libs/cartosketch/route.ts:42](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L42)

##### getRoute()

> **getRoute**(`id`): `undefined` \| [`CartoSketchRouteItem`](README.md#cartosketchrouteitem)

###### Parameters

• **id**: `string`

###### Returns

`undefined` \| [`CartoSketchRouteItem`](README.md#cartosketchrouteitem)

###### Defined in

[src/libs/cartosketch/route.ts:27](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L27)

##### getRoutes()

> **getRoutes**(): readonly [`CartoSketchRouteItem`](README.md#cartosketchrouteitem)[]

###### Returns

readonly [`CartoSketchRouteItem`](README.md#cartosketchrouteitem)[]

###### Defined in

[src/libs/cartosketch/route.ts:23](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L23)

***

### CartoSketchRouteItem

#### Constructors

##### new CartoSketchRouteItem()

> **new CartoSketchRouteItem**(`name`, `id`, `points`, `properties`): [`CartoSketchRouteItem`](README.md#cartosketchrouteitem)

###### Parameters

• **name**: `string`

• **id**: `string` = `...`

• **points**: [`GeographicPoint`](../../../../../../utils/geolocation/README.md#geographicpoint)[] = `[]`

• **properties**: [`GeographicRouteItemProperties`](../../../../definitions.md#geographicrouteitemproperties) = `{}`

###### Returns

[`CartoSketchRouteItem`](README.md#cartosketchrouteitem)

###### Defined in

[src/libs/cartosketch/route.ts:110](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L110)

#### Properties

##### id

> `readonly` **id**: `string`

###### Defined in

[src/libs/cartosketch/route.ts:107](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L107)

##### name

> **name**: `string`

###### Defined in

[src/libs/cartosketch/route.ts:106](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L106)

##### properties

> `readonly` **properties**: [`GeographicRouteItemProperties`](../../../../definitions.md#geographicrouteitemproperties)

###### Defined in

[src/libs/cartosketch/route.ts:108](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L108)

#### Methods

##### appendPoint()

> **appendPoint**(`point`): `void`

###### Parameters

• **point**: [`GeographicPoint`](../../../../../../utils/geolocation/README.md#geographicpoint)

###### Returns

`void`

###### Defined in

[src/libs/cartosketch/route.ts:121](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L121)

##### exportAsBingMapsPrimitive()

> **exportAsBingMapsPrimitive**(): `Polyline`

###### Returns

`Polyline`

###### Defined in

[src/libs/cartosketch/route.ts:147](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L147)

##### exportAsGeoJSON()

> **exportAsGeoJSON**(): [`GeographicRouteItemGeoJSON`](../../../../definitions.md#geographicrouteitemgeojson)

###### Returns

[`GeographicRouteItemGeoJSON`](../../../../definitions.md#geographicrouteitemgeojson)

###### Defined in

[src/libs/cartosketch/route.ts:134](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L134)

##### exportToStorage()

> **exportToStorage**(): [`GeographicRouteItemType`](../../../../definitions.md#geographicrouteitemtype)

###### Returns

[`GeographicRouteItemType`](../../../../definitions.md#geographicrouteitemtype)

###### Defined in

[src/libs/cartosketch/route.ts:153](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L153)

##### getPoints()

> **getPoints**(): readonly [`GeographicPoint`](../../../../../../utils/geolocation/README.md#geographicpoint)[]

###### Returns

readonly [`GeographicPoint`](../../../../../../utils/geolocation/README.md#geographicpoint)[]

###### Defined in

[src/libs/cartosketch/route.ts:125](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L125)

##### setPoints()

> **setPoints**(`points`): `void`

###### Parameters

• **points**: [`GeographicPoint`](../../../../../../utils/geolocation/README.md#geographicpoint)[]

###### Returns

`void`

###### Defined in

[src/libs/cartosketch/route.ts:117](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L117)

##### setProperties()

> **setProperties**(`properties`): `void`

###### Parameters

• **properties**: [`GeographicRouteItemProperties`](../../../../definitions.md#geographicrouteitemproperties)

###### Returns

`void`

###### Defined in

[src/libs/cartosketch/route.ts:129](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/cartosketch/route.ts#L129)

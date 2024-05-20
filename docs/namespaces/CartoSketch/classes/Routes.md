[**trackmaker**](../../../index.md) • **Docs**

***

[trackmaker](../../../globals.md) / [CartoSketch](../index.md) / Routes

# Class: Routes

## Constructors

### new Routes()

> **new Routes**(`name`, `routes`, `id`): [`Routes`](Routes.md)

#### Parameters

• **name**: `string`

• **routes**: `CartoSketchRouteItem`[]= `[]`

• **id**: `string`= `undefined`

#### Returns

[`Routes`](Routes.md)

#### Source

[route.ts:50](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L50)

## Properties

### id

> `readonly` **id**: `string`

#### Source

[route.ts:47](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L47)

***

### name

> **name**: `string`

#### Source

[route.ts:48](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L48)

***

### routes

> `readonly` **routes**: `CartoSketchRouteItem`[]

#### Source

[route.ts:49](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L49)

## Methods

### addRoute()

> **addRoute**(`route`): `void`

#### Parameters

• **route**: `CartoSketchRouteItem`

#### Returns

`void`

#### Source

[route.ts:64](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L64)

***

### exportAsGeoJSON()

> **exportAsGeoJSON**(): `GeographicRouteGeoJSON`

#### Returns

`GeographicRouteGeoJSON`

#### Source

[route.ts:68](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L68)

***

### exportToStorage()

> **exportToStorage**(): `GeographicRouteType`

#### Returns

`GeographicRouteType`

#### Source

[route.ts:75](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L75)

***

### getRoute()

> **getRoute**(`id`): `undefined` \| `CartoSketchRouteItem`

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `CartoSketchRouteItem`

#### Source

[route.ts:60](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L60)

***

### getRoutes()

> **getRoutes**(): readonly `CartoSketchRouteItem`[]

#### Returns

readonly `CartoSketchRouteItem`[]

#### Source

[route.ts:56](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L56)

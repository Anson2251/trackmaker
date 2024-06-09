[**trackmaker**](../../../index.md) • **Docs**

***

[trackmaker](../../../globals.md) / [CartoSketch](../index.md) / Routes

# Namespace: Routes

## Functions

### create()

> **create**(`name`, `routes`, `id`): [`Routes`](../index.md#routes)

#### Parameters

• **name**: `string`

• **routes**: `CartoSketchRouteItem`[]= `[]`

• **id**: `string`= `undefined`

#### Returns

[`Routes`](../index.md#routes)

#### Source

[route.ts:85](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L85)

***

### createItem()

> **createItem**(`name`, `id`, `points`, `properties`): `CartoSketchRouteItem`

#### Parameters

• **name**: `string`

• **id**: `string`= `undefined`

• **points**: `GeographicPoint`[]= `[]`

• **properties**: `GeographicRouteItemProperties`= `{}`

#### Returns

`CartoSketchRouteItem`

#### Source

[route.ts:89](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L89)

***

### importFromGeoJSON()

> **importFromGeoJSON**(`geojson`, `name`?, `id`?): [`Routes`](../index.md#routes)

Imports a geojson object into a CartoSketchRoute object.

#### Parameters

• **geojson**: `any`

The geojson object to import.

• **name?**: `string`

The name of the route. If not provided, it will follow the id.

• **id?**: `string`= `undefined`

The id of the route. If not provided, a unique id will be generated.

#### Returns

[`Routes`](../index.md#routes)

The imported CartoSketchRoute object.

#### Source

[route.ts:102](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L102)

***

### importItemFromGeoJSON()

> **importItemFromGeoJSON**(`geojson`, `name`?, `id`?): `CartoSketchRouteItem`

#### Parameters

• **geojson**: `any`

• **name?**: `string`

• **id?**: `string`

#### Returns

`CartoSketchRouteItem`

#### Source

[route.ts:114](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L114)

***

### importItemFromStorage()

> **importItemFromStorage**(`data`): `CartoSketchRouteItem`

#### Parameters

• **data**: `GeographicRouteItemType`

#### Returns

`CartoSketchRouteItem`

#### Source

[route.ts:129](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L129)

***

### readFromStorage()

> **readFromStorage**(`data`): [`Routes`](../index.md#routes)

#### Parameters

• **data**: `GeographicRouteType`

#### Returns

[`Routes`](../index.md#routes)

#### Source

[route.ts:133](https://github.com/Anson2251/trackmaker/blob/afa9b386b079ee8a3c3427717f7fa4b2ddd19913/src/utils/cartosketch/route.ts#L133)

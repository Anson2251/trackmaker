[**trackmaker**](../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../modules.md) / [libs/cartosketch](../../../../../README.md) / [CartoSketch](../../../README.md) / [Routes](../README.md) / CartoSketchRoute

# CartoSketchRoute

## Functions

### create()

> **create**(`name`, `routes`, `id`): [`CartoSketchRoute`](../README.md#cartosketchroute)

#### Parameters

• **name**: `string`

• **routes**: [`CartoSketchRouteItem`](../README.md#cartosketchrouteitem)[] = `[]`

• **id**: `string` = `...`

#### Returns

[`CartoSketchRoute`](../README.md#cartosketchroute)

#### Defined in

[src/libs/cartosketch/route.ts:52](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/route.ts#L52)

***

### createItem()

> **createItem**(`name`, `id`, `points`, `properties`): [`CartoSketchRouteItem`](../README.md#cartosketchrouteitem)

#### Parameters

• **name**: `string`

• **id**: `string` = `...`

• **points**: [`GeographicPoint`](../../../../../../../utils/geolocation/README.md#geographicpoint)[] = `[]`

• **properties**: [`GeographicRouteItemProperties`](../../../../../definitions.md#geographicrouteitemproperties) = `{}`

#### Returns

[`CartoSketchRouteItem`](../README.md#cartosketchrouteitem)

#### Defined in

[src/libs/cartosketch/route.ts:56](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/route.ts#L56)

***

### importFromGeoJSON()

> **importFromGeoJSON**(`geojson`, `name`?, `id`?): [`CartoSketchRoute`](../README.md#cartosketchroute)

Imports a geojson object into a CartoSketchRoute object.

#### Parameters

• **geojson**: `any`

The geojson object to import.

• **name?**: `string`

The name of the route. If not provided, it will follow the id.

• **id?**: `string` = `...`

The id of the route. If not provided, a unique id will be generated.

#### Returns

[`CartoSketchRoute`](../README.md#cartosketchroute)

The imported CartoSketchRoute object.

#### Defined in

[src/libs/cartosketch/route.ts:69](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/route.ts#L69)

***

### importItemFromGeoJSON()

> **importItemFromGeoJSON**(`geojson`, `name`?, `id`?): [`CartoSketchRouteItem`](../README.md#cartosketchrouteitem)

#### Parameters

• **geojson**: `any`

• **name?**: `string`

• **id?**: `string`

#### Returns

[`CartoSketchRouteItem`](../README.md#cartosketchrouteitem)

#### Defined in

[src/libs/cartosketch/route.ts:81](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/route.ts#L81)

***

### importItemFromStorage()

> **importItemFromStorage**(`data`): [`CartoSketchRouteItem`](../README.md#cartosketchrouteitem)

#### Parameters

• **data**: [`GeographicRouteItemType`](../../../../../definitions.md#geographicrouteitemtype)

#### Returns

[`CartoSketchRouteItem`](../README.md#cartosketchrouteitem)

#### Defined in

[src/libs/cartosketch/route.ts:96](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/route.ts#L96)

***

### readFromStorage()

> **readFromStorage**(`data`): [`CartoSketchRoute`](../README.md#cartosketchroute)

#### Parameters

• **data**: [`GeographicRouteType`](../../../../../definitions.md#geographicroutetype)

#### Returns

[`CartoSketchRoute`](../README.md#cartosketchroute)

#### Defined in

[src/libs/cartosketch/route.ts:100](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/cartosketch/route.ts#L100)

[**trackmaker**](../../../../../index.md) • **Docs**

***

[trackmaker](../../../../../globals.md) / [CartoSketch](../../../index.md) / [Routes](../index.md) / importFromGeoJSON

# Function: importFromGeoJSON()

> **importFromGeoJSON**(`geojson`, `name`?, `id`?): [`Routes`](../../../classes/Routes.md)

Imports a geojson object into a CartoSketchRoute object.

## Parameters

• **geojson**: `any`

The geojson object to import.

• **name?**: `string`

The name of the route. If not provided, it will follow the id.

• **id?**: `string`= `undefined`

The id of the route. If not provided, a unique id will be generated.

## Returns

[`Routes`](../../../classes/Routes.md)

The imported CartoSketchRoute object.

## Source

[route.ts:102](https://github.com/Anson2251/trackmaker/blob/0370d3a06207a9d77c9f82b6a817216c8649e9c8/src/utils/cartosketch/route.ts#L102)

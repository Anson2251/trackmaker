[**trackmaker**](../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../README.md) / [Microsoft](../../../README.md) / [Maps](../README.md) / GeoJson

# GeoJson

Class responsible for reading/writing geo data in GeoJson format

## Requires

The Microsoft.Maps.GeoJson module.

## Functions

### read()

> **read**(`geoJson`, `styles`?): [`IPrimitive`](../README.md#iprimitive) \| [`IPrimitive`](../README.md#iprimitive)[]

Reads the data in geoJson format and returns the shapes.

#### Parameters

• **geoJson**: `string` \| [`IGeoJsonObject`](../README.md#igeojsonobject)

GeoJson data object that needs to be parsed into shapes.

• **styles?**: [`IStylesOptions`](../README.md#istylesoptions)

Styles that needs to be applied.

#### Returns

[`IPrimitive`](../README.md#iprimitive) \| [`IPrimitive`](../README.md#iprimitive)[]

An array of shapes.

#### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:85](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L85)

***

### readFromUrl()

> **readFromUrl**(`url`, `callback`, `jsonpQueryParam`?, `styles`?): `void`

Reads the data from a given url and returns the shapes.

#### Parameters

• **url**: `string`

GeoJson download url.

• **callback**

Callback function that needs to be called once the data is downloaded and parsed.

• **jsonpQueryParam?**: `string`

The name of the url query param to make a jsonp request.

• **styles?**: [`IStylesOptions`](../README.md#istylesoptions)

Styles that needs to be applied.

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:77](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L77)

***

### write()

> **write**(`data`): [`IGeoJsonObject`](../README.md#igeojsonobject)

Writes the data into geoJson format.

#### Parameters

• **data**: [`IPrimitive`](../README.md#iprimitive) \| [`IPrimitive`](../README.md#iprimitive)[]

Data that needs to be serialized.

#### Returns

[`IGeoJsonObject`](../README.md#igeojsonobject)

A geoJson formatted string.

#### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:92](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L92)

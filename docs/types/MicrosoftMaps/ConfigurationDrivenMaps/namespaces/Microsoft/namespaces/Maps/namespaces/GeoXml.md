[**trackmaker**](../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../README.md) / [Microsoft](../../../README.md) / [Maps](../README.md) / GeoXml

# GeoXml

A static class that contains functions for reading and writing geospatial XML data.

## Requires

The Microsoft.Maps.GeoXml module.

## Functions

### read()

> **read**(`xml`, `options`): [`IGeoXmlDataSet`](../README.md#igeoxmldataset)

Takes a geospatial XML string or a ArrayBuffer and parses the XML data into Bing Maps shapes.

#### Parameters

• **xml**: `string` \| `ArrayBuffer`

The XML as a string or ArrayBuffer to read.

• **options**: [`IGeoXmlReadOptions`](../README.md#igeoxmlreadoptions)

The read options.

#### Returns

[`IGeoXmlDataSet`](../README.md#igeoxmldataset)

#### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:313](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L313)

***

### readFromUrl()

> **readFromUrl**(`urlString`, `options`, `callback`): `void`

Takes an URL to an XML or zipped XML file and parses the XML data into Bing Maps shapes.

#### Parameters

• **urlString**: `string`

• **options**: [`IGeoXmlReadOptions`](../README.md#igeoxmlreadoptions)

The read options.

• **callback**

The callback function that consumes the parsed out GeoXml data.

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:321](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L321)

***

### write()

> **write**(`shapes`, `options`?): `string`

Writes Bing Maps shape data as a geospatial XML string in the specified format.

#### Parameters

• **shapes**: [`Map`](../README.md#map-2) \| [`IPrimitive`](../README.md#iprimitive) \| [`IPrimitive`](../README.md#iprimitive)[] \| [`Layer`](../README.md#layer) \| [`IGeoXmlDataSet`](../README.md#igeoxmldataset) \| [`GroundOverlay`](../README.md#groundoverlay)[]

The Bing Maps shapes, or map to retrieve shapes from, to write.

• **options?**: [`IGeoXmlWriteOptions`](../README.md#igeoxmlwriteoptions)

A set of options that customize how the XML is writen.

#### Returns

`string`

#### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:328](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L328)

***

### writeCompressed()

> **writeCompressed**(`shapes`, `compressFormat`?, `options`?): `string` \| `ArrayBuffer` \| `Blob`

Writes Bing Maps shape data to a geospatial XML file embedded in a compressed file.

#### Parameters

• **shapes**: [`Map`](../README.md#map-2) \| [`IPrimitive`](../README.md#iprimitive) \| [`IPrimitive`](../README.md#iprimitive)[] \| [`Layer`](../README.md#layer) \| [`IGeoXmlDataSet`](../README.md#igeoxmldataset) \| [`GroundOverlay`](../README.md#groundoverlay)[]

The Bing Maps shapes, or map to retrieve shapes from, to write.

• **compressFormat?**: [`GeoXmlCompressedFormat`](../README.md#geoxmlcompressedformat)

The compressed file format to use.

• **options?**: [`IGeoXmlWriteOptions`](../README.md#igeoxmlwriteoptions)

A set of options that customize how the XML is writen.

#### Returns

`string` \| `ArrayBuffer` \| `Blob`

#### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:336](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L336)

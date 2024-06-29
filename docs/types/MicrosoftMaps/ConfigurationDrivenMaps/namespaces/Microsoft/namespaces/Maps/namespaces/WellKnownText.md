[**trackmaker**](../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../README.md) / [Microsoft](../../../README.md) / [Maps](../README.md) / WellKnownText

# WellKnownText

Class responsible for readon/writing geo data in well known text format

## Requires

The Microsoft.Maps.WellKnownText module.

## Functions

### read()

> **read**(`wkt`, `styles`?): [`IPrimitive`](../README.md#iprimitive) \| [`IPrimitive`](../README.md#iprimitive)[]

Reads the data in wellknowntext format and returns the shapes. Multi-Geometry type shapes are returned as an array of shapes.

#### Parameters

• **wkt**: `string`

The well known text string that needs to be parsed into shapes.

• **styles?**: [`IStylesOptions`](../README.md#istylesoptions)

Styles to apply to the shapes.

#### Returns

[`IPrimitive`](../README.md#iprimitive) \| [`IPrimitive`](../README.md#iprimitive)[]

One of more shapes.

#### Defined in

[src/types/MicrosoftMaps/Modules/WellKnownText.d.ts:39](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/WellKnownText.d.ts#L39)

***

### write()

> **write**(`data`): `string`

Writes the data into wellknowntext format.

#### Parameters

• **data**: [`IPrimitive`](../README.md#iprimitive) \| [`IPrimitive`](../README.md#iprimitive)[]

The data that needs to be serialized.

#### Returns

`string`

Well known text formatted string.

#### Defined in

[src/types/MicrosoftMaps/Modules/WellKnownText.d.ts:46](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/WellKnownText.d.ts#L46)

[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / [utils/geojson](../README.md) / bingMapsGeojson

# bingMapsGeojson

## Functions

### read()

> **read**(`geoJson`, `styles`?): [`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive)[]

#### Parameters

• **geoJson**: `string` \| [`IGeoJsonObject`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#igeojsonobject)

• **styles?**: [`IStylesOptions`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#istylesoptions)

#### Returns

[`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive)[]

#### Defined in

[src/utils/geojson.ts:4](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/utils/geojson.ts#L4)

***

### readFromUrl()

> **readFromUrl**(`url`, `timeout`, `jsonpQueryParam`?, `styles`?): `Promise`\<[`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive)[]\>

#### Parameters

• **url**: `string`

• **timeout**: `number` = `10000`

• **jsonpQueryParam?**: `string`

• **styles?**: [`IStylesOptions`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#istylesoptions)

#### Returns

`Promise`\<[`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive)[]\>

#### Defined in

[src/utils/geojson.ts:9](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/utils/geojson.ts#L9)

***

### write()

#### write(data, stringify)

> **write**(`data`, `stringify`?): `string`

##### Parameters

• **data**: [`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive) \| [`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive)[]

• **stringify?**: `true`

##### Returns

`string`

##### Defined in

[src/utils/geojson.ts:19](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/utils/geojson.ts#L19)

#### write(data, stringify)

> **write**(`data`, `stringify`?): [`IGeoJsonObject`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#igeojsonobject)

##### Parameters

• **data**: [`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive) \| [`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive)[]

• **stringify?**: `false`

##### Returns

[`IGeoJsonObject`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#igeojsonobject)

##### Defined in

[src/utils/geojson.ts:20](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/utils/geojson.ts#L20)

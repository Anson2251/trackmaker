[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / [utils/geojson](../README.md) / bingMapsGeojson

# bingMapsGeojson

## Functions

### read()

> **read**(`geoJson`, `styles`?): `Microsoft.Maps.IPrimitive`[]

#### Parameters

• **geoJson**: `string` \| `IGeoJsonObject`

• **styles?**: `IStylesOptions`

#### Returns

`Microsoft.Maps.IPrimitive`[]

#### Defined in

[src/utils/geojson.ts:4](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geojson.ts#L4)

***

### readFromUrl()

> **readFromUrl**(`url`, `timeout`, `jsonpQueryParam`?, `styles`?): `Promise`\<`IPrimitive`[]\>

#### Parameters

• **url**: `string`

• **timeout**: `number` = `10000`

• **jsonpQueryParam?**: `string`

• **styles?**: `IStylesOptions`

#### Returns

`Promise`\<`IPrimitive`[]\>

#### Defined in

[src/utils/geojson.ts:9](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geojson.ts#L9)

***

### write()

#### write(data, stringify)

> **write**(`data`, `stringify`?): `string`

##### Parameters

• **data**: `IPrimitive` \| `IPrimitive`[]

• **stringify?**: `true`

##### Returns

`string`

##### Defined in

[src/utils/geojson.ts:19](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geojson.ts#L19)

#### write(data, stringify)

> **write**(`data`, `stringify`?): `Microsoft.Maps.IGeoJsonObject`

##### Parameters

• **data**: `IPrimitive` \| `IPrimitive`[]

• **stringify?**: `false`

##### Returns

`Microsoft.Maps.IGeoJsonObject`

##### Defined in

[src/utils/geojson.ts:20](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geojson.ts#L20)

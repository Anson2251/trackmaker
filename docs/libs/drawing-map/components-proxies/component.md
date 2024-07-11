[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / libs/drawing-map/components-proxies/component

# libs/drawing-map/components-proxies/component

## References

### default

Renames and re-exports [DrawingComponentProxy](component.md#drawingcomponentproxyt)

## Classes

### `abstract` DrawingComponentProxy\<T\>

#### Extended by

- [`PolygonProxy`](polygon.md#polygonproxy)
- [`PolylineProxy`](polyline.md#polylineproxy)
- [`PushPinProxy`](pushpin.md#pushpinproxy)

#### Type Parameters

• **T** *extends* [`ComponentProperties`](component.md#componentproperties)

#### Constructors

##### new DrawingComponentProxy()

> `protected` **new DrawingComponentProxy**\<`T`\>(`coordinates`, `properties`, `id`?, `name`?): [`DrawingComponentProxy`](component.md#drawingcomponentproxyt)\<`T`\>

###### Parameters

• **coordinates**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

• **properties**: `T`

• **id?**: `string`

• **name?**: `string`

###### Returns

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt)\<`T`\>

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:21](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L21)

#### Properties

##### coordinates

> **coordinates**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:17](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L17)

##### id

> **id**: `string`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:15](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L15)

##### name

> **name**: `string` = `"Untitled"`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:16](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L16)

##### properties

> **properties**: `T`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:14](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L14)

##### type

> `abstract` **type**: `string`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:19](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L19)

#### Methods

##### addHandler()

> **addHandler**(`type`, `callback`): `number`

###### Parameters

• **type**: `string`

• **callback**

###### Returns

`number`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:34](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L34)

##### exportToGeoJSON()

> `abstract` **exportToGeoJSON**(): `Object`

###### Returns

`Object`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:89](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L89)

##### getLocations()

> **getLocations**(): readonly [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Returns

readonly [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:85](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L85)

##### getProperties()

> **getProperties**(): `Readonly`\<`T`\>

###### Returns

`Readonly`\<`T`\>

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:67](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L67)

##### getPropertiesKeys()

> **getPropertiesKeys**(): `string`[]

###### Returns

`string`[]

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:76](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L76)

##### getProperty()

> **getProperty**(`key`): `undefined` \| [`AcceptedComponentPropertyDataType`](component.md#acceptedcomponentpropertydatatype)

###### Parameters

• **key**: keyof `T`

###### Returns

`undefined` \| [`AcceptedComponentPropertyDataType`](component.md#acceptedcomponentpropertydatatype)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:71](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L71)

##### removeHandler()

> **removeHandler**(`id`): `void`

###### Parameters

• **id**: `number`

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:44](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L44)

##### setLocations()

> **setLocations**(`coordinates`): `void`

###### Parameters

• **coordinates**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:80](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L80)

##### setProperties()

> **setProperties**(`options`): `void`

###### Parameters

• **options**: `T`

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:48](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L48)

##### setProperty()

> **setProperty**(`key`, `value`): `boolean`

###### Parameters

• **key**: keyof `T`

• **value**: `any`

###### Returns

`boolean`

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:54](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L54)

## Type Aliases

### AcceptedComponentPropertyDataType

> **AcceptedComponentPropertyDataType**: `boolean` \| `number` \| `string`

#### Defined in

[src/libs/drawing-map/components-proxies/component.ts:4](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L4)

***

### ComponentProperties

> **ComponentProperties**: `Record`\<`string`, [`AcceptedComponentPropertyDataType`](component.md#acceptedcomponentpropertydatatype)\>

#### Defined in

[src/libs/drawing-map/components-proxies/component.ts:5](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L5)

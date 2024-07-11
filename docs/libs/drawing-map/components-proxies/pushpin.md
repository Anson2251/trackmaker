[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / libs/drawing-map/components-proxies/pushpin

# libs/drawing-map/components-proxies/pushpin

## References

### default

Renames and re-exports [PushPinProxy](pushpin.md#pushpinproxy)

## Classes

### PushPinProxy

#### Extends

- [`DrawingComponentProxy`](component.md#drawingcomponentproxyt)\<[`PushpinProperties`](pushpin.md#pushpinproperties)\>

#### Constructors

##### new PushPinProxy()

> **new PushPinProxy**(`coordinates`, `properties`, `id`?, `name`?): [`PushPinProxy`](pushpin.md#pushpinproxy)

Initializes a new instance of the PushPinProxy class.

###### Parameters

• **coordinates**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

The coordinates of the pushpin. **Warning**: The location of the pin should only be stored as te first element

• **properties**: [`PushpinProperties`](pushpin.md#pushpinproperties)

The properties of the pushpin.

• **id?**: `string`

The ID of the pushpin.

• **name?**: `string`

The name of the pushpin.

###### Returns

[`PushPinProxy`](pushpin.md#pushpinproxy)

###### Overrides

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`constructor`](component.md#constructors)

###### Defined in

[src/libs/drawing-map/components-proxies/pushpin.ts:34](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/pushpin.ts#L34)

#### Properties

##### coordinates

> **coordinates**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`coordinates`](component.md#coordinates)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:17](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L17)

##### id

> **id**: `string`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`id`](component.md#id)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:15](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L15)

##### name

> **name**: `string` = `"Untitled"`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`name`](component.md#name)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:16](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L16)

##### properties

> **properties**: [`PushpinProperties`](pushpin.md#pushpinproperties)

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`properties`](component.md#properties)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:14](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L14)

##### type

> **type**: `string` = `"Point"`

###### Overrides

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`type`](component.md#type)

###### Defined in

[src/libs/drawing-map/components-proxies/pushpin.ts:24](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/pushpin.ts#L24)

#### Methods

##### addHandler()

> **addHandler**(`type`, `callback`): `number`

###### Parameters

• **type**: `string`

• **callback**

###### Returns

`number`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`addHandler`](component.md#addhandler)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:34](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L34)

##### exportToGeoJSON()

> **exportToGeoJSON**(): [`PushPinGeoJSON`](pushpin.md#pushpingeojson)

Converts the pushpin object to a GeoJSON representation.

###### Returns

[`PushPinGeoJSON`](pushpin.md#pushpingeojson)

The GeoJSON representation of the pushpin object.

###### Overrides

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`exportToGeoJSON`](component.md#exporttogeojson)

###### Defined in

[src/libs/drawing-map/components-proxies/pushpin.ts:56](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/pushpin.ts#L56)

##### getLocation()

> **getLocation**(): [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)

Retrieves the location of the pushpin.

###### Returns

[`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)

The location of the pushpin.

###### Defined in

[src/libs/drawing-map/components-proxies/pushpin.ts:43](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/pushpin.ts#L43)

##### getLocations()

> **getLocations**(): readonly [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Returns

readonly [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`getLocations`](component.md#getlocations)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:85](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L85)

##### getProperties()

> **getProperties**(): `Readonly`\<[`PushpinProperties`](pushpin.md#pushpinproperties)\>

###### Returns

`Readonly`\<[`PushpinProperties`](pushpin.md#pushpinproperties)\>

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`getProperties`](component.md#getproperties)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:67](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L67)

##### getPropertiesKeys()

> **getPropertiesKeys**(): `string`[]

###### Returns

`string`[]

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`getPropertiesKeys`](component.md#getpropertieskeys)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:76](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L76)

##### getProperty()

> **getProperty**(`key`): `undefined` \| [`AcceptedComponentPropertyDataType`](component.md#acceptedcomponentpropertydatatype)

###### Parameters

• **key**: keyof [`PushpinProperties`](pushpin.md#pushpinproperties)

###### Returns

`undefined` \| [`AcceptedComponentPropertyDataType`](component.md#acceptedcomponentpropertydatatype)

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`getProperty`](component.md#getproperty)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:71](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L71)

##### removeHandler()

> **removeHandler**(`id`): `void`

###### Parameters

• **id**: `number`

###### Returns

`void`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`removeHandler`](component.md#removehandler)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:44](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L44)

##### setLocations()

> **setLocations**(`coordinates`): `void`

###### Parameters

• **coordinates**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Returns

`void`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`setLocations`](component.md#setlocations)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:80](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L80)

##### setProperties()

> **setProperties**(`options`): `void`

###### Parameters

• **options**: [`PushpinProperties`](pushpin.md#pushpinproperties)

###### Returns

`void`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`setProperties`](component.md#setproperties)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:48](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L48)

##### setProperty()

> **setProperty**(`key`, `value`): `boolean`

###### Parameters

• **key**: keyof [`PushpinProperties`](pushpin.md#pushpinproperties)

• **value**: `any`

###### Returns

`boolean`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`setProperty`](component.md#setproperty)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:54](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/component.ts#L54)

## Type Aliases

### PushPinGeoJSON

> **PushPinGeoJSON**: `object`

#### Type declaration

##### geometry

> **geometry**: `object`

##### geometry.coordinates

> **coordinates**: [`number`, `number`]

##### geometry.type

> **type**: `"Point"`

##### properties

> **properties**: [`PushpinProperties`](pushpin.md#pushpinproperties)

##### type

> **type**: `"Feature"`

#### Defined in

[src/libs/drawing-map/components-proxies/pushpin.ts:13](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/pushpin.ts#L13)

***

### PushpinProperties

> **PushpinProperties**: `object`

#### Type declaration

##### draggable

> **draggable**: `boolean`

##### icon

> **icon**: `string`

##### label

> **label**: `string`

##### subTitle

> **subTitle**: `string`

##### title

> **title**: `string`

##### visible

> **visible**: `boolean`

#### Defined in

[src/libs/drawing-map/components-proxies/pushpin.ts:4](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/pushpin.ts#L4)

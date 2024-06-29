[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / libs/drawing-map/components-proxies/polygon

# libs/drawing-map/components-proxies/polygon

## References

### default

Renames and re-exports [PolygonProxy](polygon.md#polygonproxy)

## Classes

### PolygonProxy

#### Extends

- [`DrawingComponentProxy`](component.md#drawingcomponentproxyt)\<[`PolygonProperties`](polygon.md#polygonproperties)\>

#### Constructors

##### new PolygonProxy()

> **new PolygonProxy**(`shape`, `properties`, `id`?, `name`?): [`PolygonProxy`](polygon.md#polygonproxy)

###### Parameters

• **shape**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

• **properties**: [`PolygonProperties`](polygon.md#polygonproperties)

• **id?**: `string`

• **name?**: `string`

###### Returns

[`PolygonProxy`](polygon.md#polygonproxy)

###### Overrides

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`constructor`](component.md#constructors)

###### Defined in

[src/libs/drawing-map/components-proxies/polygon.ts:22](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/polygon.ts#L22)

#### Properties

##### coordinates

> **coordinates**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`coordinates`](component.md#coordinates)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:17](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L17)

##### id

> **id**: `string`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`id`](component.md#id)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:15](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L15)

##### name

> **name**: `string` = `"Untitled"`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`name`](component.md#name)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:16](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L16)

##### properties

> **properties**: [`PolygonProperties`](polygon.md#polygonproperties)

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`properties`](component.md#properties)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:14](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L14)

##### type

> **type**: `string` = `"Polygon"`

###### Overrides

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`type`](component.md#type)

###### Defined in

[src/libs/drawing-map/components-proxies/polygon.ts:21](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/polygon.ts#L21)

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

[src/libs/drawing-map/components-proxies/component.ts:34](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L34)

##### exportToGeoJSON()

> **exportToGeoJSON**(): [`PolygonGeoJSON`](polygon.md#polygongeojson)

###### Returns

[`PolygonGeoJSON`](polygon.md#polygongeojson)

###### Overrides

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`exportToGeoJSON`](component.md#exporttogeojson)

###### Defined in

[src/libs/drawing-map/components-proxies/polygon.ts:26](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/polygon.ts#L26)

##### getLocations()

> **getLocations**(): readonly [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Returns

readonly [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`getLocations`](component.md#getlocations)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:85](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L85)

##### getProperties()

> **getProperties**(): `Readonly`\<[`PolygonProperties`](polygon.md#polygonproperties)\>

###### Returns

`Readonly`\<[`PolygonProperties`](polygon.md#polygonproperties)\>

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`getProperties`](component.md#getproperties)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:67](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L67)

##### getPropertiesKeys()

> **getPropertiesKeys**(): `string`[]

###### Returns

`string`[]

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`getPropertiesKeys`](component.md#getpropertieskeys)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L76)

##### getProperty()

> **getProperty**(`key`): `undefined` \| [`AcceptedComponentPropertyDataType`](component.md#acceptedcomponentpropertydatatype)

###### Parameters

• **key**: keyof [`PolygonProperties`](polygon.md#polygonproperties)

###### Returns

`undefined` \| [`AcceptedComponentPropertyDataType`](component.md#acceptedcomponentpropertydatatype)

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`getProperty`](component.md#getproperty)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:71](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L71)

##### removeHandler()

> **removeHandler**(`id`): `void`

###### Parameters

• **id**: `number`

###### Returns

`void`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`removeHandler`](component.md#removehandler)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:44](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L44)

##### setLocations()

> **setLocations**(`coordinates`): `void`

###### Parameters

• **coordinates**: [`GeographicPoint`](../../../utils/geolocation/README.md#geographicpoint)[]

###### Returns

`void`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`setLocations`](component.md#setlocations)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:80](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L80)

##### setProperties()

> **setProperties**(`options`): `void`

###### Parameters

• **options**: [`PolygonProperties`](polygon.md#polygonproperties)

###### Returns

`void`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`setProperties`](component.md#setproperties)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:48](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L48)

##### setProperty()

> **setProperty**(`key`, `value`): `boolean`

###### Parameters

• **key**: keyof [`PolygonProperties`](polygon.md#polygonproperties)

• **value**: `any`

###### Returns

`boolean`

###### Inherited from

[`DrawingComponentProxy`](component.md#drawingcomponentproxyt).[`setProperty`](component.md#setproperty)

###### Defined in

[src/libs/drawing-map/components-proxies/component.ts:54](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/component.ts#L54)

## Type Aliases

### PolygonGeoJSON

> **PolygonGeoJSON**: `object`

#### Type declaration

##### geometry

> **geometry**: `object`

##### geometry.coordinates

> **coordinates**: [`number`, `number`][]

##### geometry.type

> **type**: `"Polygon"`

##### properties

> **properties**: [`PolygonProperties`](polygon.md#polygonproperties)

##### type

> **type**: `"Feature"`

#### Defined in

[src/libs/drawing-map/components-proxies/polygon.ts:11](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/polygon.ts#L11)

***

### PolygonProperties

> **PolygonProperties**: `object`

#### Type declaration

##### fillColor

> **fillColor**: `string`

##### strokeColor

> **strokeColor**: `string`

##### strokeThickness

> **strokeThickness**: `number`

##### visible

> **visible**: `boolean`

#### Defined in

[src/libs/drawing-map/components-proxies/polygon.ts:4](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/components-proxies/polygon.ts#L4)

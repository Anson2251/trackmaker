[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / components/BingMap/plugins/drawing-map

# components/BingMap/plugins/drawing-map

## References

### default

Renames and re-exports [BingMapPlugin_Drawing](drawing-map.md#bingmapplugin_drawing)

## Classes

### BingMapPlugin\_Drawing

#### Implements

- [`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype)\<[`BingMapBackend`](../bing-map-backend.md#bingmapbackend)\>

#### Constructors

##### new BingMapPlugin\_Drawing()

> **new BingMapPlugin\_Drawing**(`parentMap`): [`BingMapPlugin_Drawing`](drawing-map.md#bingmapplugin_drawing)

###### Parameters

• **parentMap**: [`BingMapBackend`](../bing-map-backend.md#bingmapbackend)

###### Returns

[`BingMapPlugin_Drawing`](drawing-map.md#bingmapplugin_drawing)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:18](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L18)

#### Properties

##### handler

> **handler**: `DrawingEventHandler`[] = `[]`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:16](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L16)

##### host

> **host**: [`BingMapBackend`](../bing-map-backend.md#bingmapbackend)

host map

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`host`](../../../libs/map-backends/plugin.md#host)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:13](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L13)

##### initialised

> **initialised**: `boolean` = `false`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:11](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L11)

##### manager

> **manager**: `undefined` \| `DrawingManager`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:15](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L15)

##### space

> **space**: `string` = `"drawingTools"`

this space under the plugins where the plugin will mount

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`space`](../../../libs/map-backends/plugin.md#space)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:12](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L12)

#### Methods

##### addHandler()

> **addHandler**(`type`, `callback`): `void`

###### Parameters

• **type**: [`DrawingEventType`](drawing-map.md#drawingeventtype)

• **callback**

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:59](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L59)

##### clear()

> **clear**(): `void`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:93](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L93)

##### edit()

> **edit**(`shape`): `void`

###### Parameters

• **shape**: `IPrimitive`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:77](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L77)

##### getPrimitiveByID()

> **getPrimitiveByID**(`id`): `undefined` \| `IPrimitive`

###### Parameters

• **id**: `number`

###### Returns

`undefined` \| `IPrimitive`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:85](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L85)

##### getPrimitiveID()

> **getPrimitiveID**(`primitive`): `any`

###### Parameters

• **primitive**: `IPrimitive`

###### Returns

`any`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:89](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L89)

##### mount()

> **mount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`mount`](../../../libs/map-backends/plugin.md#mount)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:42](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L42)

##### remove()

> **remove**(`shape`): `void`

###### Parameters

• **shape**: `IPrimitive`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:81](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L81)

##### stopDrawing()

> **stopDrawing**(): `void`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:73](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L73)

##### unmount()

> **unmount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`unmount`](../../../libs/map-backends/plugin.md#unmount)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:47](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L47)

## Type Aliases

### DrawingEventType

> **DrawingEventType**: `"ready"` \| `"drawingChanged"`

#### Defined in

[src/components/BingMap/plugins/drawing-map.ts:7](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L7)

## Functions

### initBingMapsDrawingModule()

> **initBingMapsDrawingModule**(`timeout`): `Promise`\<`void`\>

#### Parameters

• **timeout**: `number` = `1000`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/components/BingMap/plugins/drawing-map.ts:98](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/drawing-map.ts#L98)

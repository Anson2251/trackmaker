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

- [`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype)\<[`BingMapBackend`](../../../libs/map-backends/bing-maps/bing-map-backend.md#bingmapbackend)\>

#### Constructors

##### new BingMapPlugin\_Drawing()

> **new BingMapPlugin\_Drawing**(`parentMap`): [`BingMapPlugin_Drawing`](drawing-map.md#bingmapplugin_drawing)

###### Parameters

• **parentMap**: [`BingMapBackend`](../../../libs/map-backends/bing-maps/bing-map-backend.md#bingmapbackend)

###### Returns

[`BingMapPlugin_Drawing`](drawing-map.md#bingmapplugin_drawing)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:20](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L20)

#### Properties

##### handler

> **handler**: `DrawingEventHandler`[] = `[]`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:16](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L16)

##### host

> **host**: [`BingMapBackend`](../../../libs/map-backends/bing-maps/bing-map-backend.md#bingmapbackend)

host map

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`host`](../../../libs/map-backends/plugin.md#host)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:13](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L13)

##### initialised

> **initialised**: `boolean` = `false`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:11](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L11)

##### manager

> **manager**: `undefined` \| `DrawingManager`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:15](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L15)

##### previousPrimitives

> **previousPrimitives**: `Set`\<`number`\>

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:18](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L18)

##### space

> **space**: `string` = `"drawingTools"`

this space under the plugins where the plugin will mount

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`space`](../../../libs/map-backends/plugin.md#space)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:12](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L12)

#### Methods

##### addHandler()

> **addHandler**(`type`, `callback`): `void`

###### Parameters

• **type**: [`DrawingEventType`](drawing-map.md#drawingeventtype)

• **callback**

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:61](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L61)

##### addNativeHandler()

> **addNativeHandler**(`type`, `callback`): `void`

###### Parameters

• **type**: [`DrawingEventType`](drawing-map.md#drawingeventtype)

• **callback**

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:65](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L65)

##### clear()

> **clear**(): `void`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:107](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L107)

##### edit()

> **edit**(`shape`): `void`

###### Parameters

• **shape**: `IPrimitive`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:91](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L91)

##### getPrimitiveByID()

> **getPrimitiveByID**(`id`): `undefined` \| `IPrimitive`

###### Parameters

• **id**: `number`

###### Returns

`undefined` \| `IPrimitive`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:99](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L99)

##### getPrimitiveID()

> **getPrimitiveID**(`primitive`): `any`

###### Parameters

• **primitive**: `IPrimitive`

###### Returns

`any`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:103](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L103)

##### mount()

> **mount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`mount`](../../../libs/map-backends/plugin.md#mount)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:44](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L44)

##### remove()

> **remove**(`shape`): `void`

###### Parameters

• **shape**: `IPrimitive`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:95](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L95)

##### stopDrawing()

> **stopDrawing**(): `void`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:87](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L87)

##### unmount()

> **unmount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`unmount`](../../../libs/map-backends/plugin.md#unmount)

###### Defined in

[src/components/BingMap/plugins/drawing-map.ts:49](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L49)

## Type Aliases

### DrawingEventType

> **DrawingEventType**: `"ready"` \| `"drawingChanged"`

#### Defined in

[src/components/BingMap/plugins/drawing-map.ts:7](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L7)

## Functions

### initBingMapsDrawingModule()

> **initBingMapsDrawingModule**(`timeout`): `Promise`\<`void`\>

#### Parameters

• **timeout**: `number` = `1000`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/components/BingMap/plugins/drawing-map.ts:112](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/drawing-map.ts#L112)

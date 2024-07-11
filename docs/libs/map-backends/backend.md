[**trackmaker**](../../README.md) • **Docs**

***

[trackmaker](../../modules.md) / libs/map-backends/backend

# libs/map-backends/backend

## References

### default

Renames and re-exports [MapBackend](backend.md#mapbackendmaptypeoptiontypes)

## Classes

### `abstract` MapBackend\<MapType, OptionTypes\>

The general map backend

#### Extended by

- [`BingMapBackend`](bing-maps/bing-map-backend.md#bingmapbackend)
- [`MapLibreGLBackend`](maplibre-gl/maplibre-gl-backend.md#maplibreglbackend)

#### Type Parameters

• **MapType**

• **OptionTypes** *extends* [`DefaultOptionTypes`](backend.md#defaultoptiontypesmapidtype)\<`OptionTypes`\[`"type"`\]\>

#### Constructors

##### new MapBackend()

> **new MapBackend**\<`MapType`, `OptionTypes`\>(`container`, `options`, `plugins`): [`MapBackend`](backend.md#mapbackendmaptypeoptiontypes)\<`MapType`, `OptionTypes`\>

###### Parameters

• **container**: `HTMLElement`

The html container where the map places

• **options**: `OptionTypes`

The options

• **plugins**: [`MapPluginConstructor`](plugin.md#mappluginconstructorhostmaptype)\<[`MapBackend`](backend.md#mapbackendmaptypeoptiontypes)\<`MapType`, `OptionTypes`\>\>[] = `[]`

The plugins to load

###### Returns

[`MapBackend`](backend.md#mapbackendmaptypeoptiontypes)\<`MapType`, `OptionTypes`\>

###### Defined in

[src/libs/map-backends/backend.ts:72](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L72)

#### Properties

##### centre

> **centre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

###### Defined in

[src/libs/map-backends/backend.ts:54](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L54)

##### container

> **container**: `HTMLElement`

###### Defined in

[src/libs/map-backends/backend.ts:57](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L57)

##### credentials

> `readonly` **credentials**: `string`

###### Defined in

[src/libs/map-backends/backend.ts:55](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L55)

##### eventHandlers

> **eventHandlers**: [`MapEventHandlerType`](backend.md#mapeventhandlertype)[] = `[]`

###### Defined in

[src/libs/map-backends/backend.ts:59](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L59)

##### map

> **map**: `MapType`

###### Defined in

[src/libs/map-backends/backend.ts:58](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L58)

##### mapType

> **mapType**: `OptionTypes`\[`"type"`\]

###### Defined in

[src/libs/map-backends/backend.ts:56](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L56)

##### maxZoom

> **maxZoom**: `number` = `20`

###### Defined in

[src/libs/map-backends/backend.ts:60](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L60)

##### minZoom

> **minZoom**: `number` = `3`

###### Defined in

[src/libs/map-backends/backend.ts:61](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L61)

##### plugins

> **plugins**: `any` = `{}`

###### Defined in

[src/libs/map-backends/backend.ts:62](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L62)

##### properties

> **properties**: `Record`\<`string`, `any`\>

###### Defined in

[src/libs/map-backends/backend.ts:65](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L65)

##### supportMapTypes

> **supportMapTypes**: `OptionTypes`\[`"supportedMapTypes"`\]

###### Defined in

[src/libs/map-backends/backend.ts:63](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L63)

##### viewCentre

> **viewCentre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

###### Defined in

[src/libs/map-backends/backend.ts:53](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L53)

##### zoom

> **zoom**: `number` = `5`

###### Defined in

[src/libs/map-backends/backend.ts:52](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L52)

#### Methods

##### addEventHandler()

###### addEventHandler(type, handler, native)

> **addEventHandler**(`type`, `handler`, `native`): `number`

Add the event to the host map

###### Parameters

• **type**: `string`

type of the event

• **handler**

the callback function

• **native**: `false`

Whether the event is native (add to the host map level)

###### Returns

`number`

###### Defined in

[src/libs/map-backends/backend.ts:274](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L274)

###### addEventHandler(type, handler, native)

> **addEventHandler**(`type`, `handler`, `native`): `any`

###### Parameters

• **type**: `string`

• **handler**

• **native**: `true`

###### Returns

`any`

###### Defined in

[src/libs/map-backends/backend.ts:279](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L279)

##### addNativeHandler()

> `abstract` **addNativeHandler**(`type`, `handler`): `any`

Add the event to the host map level

###### Parameters

• **type**: `string`

type of the event

• **handler**

the callback function

###### Returns

`any`

###### Defined in

[src/libs/map-backends/backend.ts:257](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L257)

##### getCentre()

> **getCentre**(): [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

Get the map centre

###### Returns

[`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

###### Defined in

[src/libs/map-backends/backend.ts:123](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L123)

##### getViewCentre()

> **getViewCentre**(): [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

get the view centre

###### Returns

[`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

###### Defined in

[src/libs/map-backends/backend.ts:143](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L143)

##### getZoom()

> **getZoom**(): `number`

Get the zoom of the map

###### Returns

`number`

###### Defined in

[src/libs/map-backends/backend.ts:197](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L197)

##### getZoomRange()

> **getZoomRange**(): `object`

###### Returns

`object`

The zoom range

###### max

> **max**: `number`

###### min

> **min**: `number`

###### Defined in

[src/libs/map-backends/backend.ts:248](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L248)

##### gotoCentre()

> **gotoCentre**(): `void`

Move the map to the centre

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:213](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L213)

##### initialiseMap()

> `abstract` **initialiseMap**(`options`): `MapType`

Initialise the map, should be implemented by subclasses

###### Parameters

• **options**: `OptionTypes`

###### Returns

`MapType`

###### Defined in

[src/libs/map-backends/backend.ts:107](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L107)

##### loadPlugins()

> **loadPlugins**(`plugins`): `boolean`

Load the plugins

###### Parameters

• **plugins**: [`MapPluginConstructor`](plugin.md#mappluginconstructorhostmaptype)\<[`MapBackend`](backend.md#mapbackendmaptypeoptiontypes)\<`MapType`, `OptionTypes`\>\>[]

The plugin list

###### Returns

`boolean`

Whether the loading is successful

###### Defined in

[src/libs/map-backends/backend.ts:152](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L152)

##### onMapViewChanged()

> **onMapViewChanged**(): `void`

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:349](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L349)

##### onReady()

> **onReady**(): `void`

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:353](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L353)

##### removeEventHandler()

###### removeEventHandler(id, native)

> **removeEventHandler**(`id`, `native`): `void`

Remove the event from the host map

###### Parameters

• **id**: `number`

id of the event

• **native**: `false`

Whether the event is native (remove from the host map level)

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:300](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L300)

###### removeEventHandler(id, native)

> **removeEventHandler**(`id`, `native`): `void`

###### Parameters

• **id**: `any`

• **native**: `true`

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:301](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L301)

##### removeNativeHandler()

> `abstract` **removeNativeHandler**(`id`): `any`

Remove the event from the host map level

###### Parameters

• **id**: `any`

id of the event

###### Returns

`any`

###### Defined in

[src/libs/map-backends/backend.ts:266](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L266)

##### setCentre()

> **setCentre**(`centre`, `silence`): `void`

Set the centre of the map

###### Parameters

• **centre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

• **silence**: `boolean`

Whether to call the corresponding handlers

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:117](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L117)

##### setView()

> **setView**(`view`): `void`

Set the viewport

###### Parameters

• **view**: [`ViewOptionType`](backend.md#viewoptiontype)

Set the zoom and centre of the map

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:205](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L205)

##### setViewCentre()

> **setViewCentre**(`viewCentre`, `updateMapView`): `void`

Set the view centre

###### Parameters

• **viewCentre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

Set the centre of viewport

• **updateMapView**: `boolean` = `true`

Whether to call the corresponding handlers

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:132](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L132)

##### setZoom()

> **setZoom**(`zoom`, `updateMapView`): `boolean`

Set the zoom of the map

###### Parameters

• **zoom**: `number`

• **updateMapView**: `boolean` = `true`

Whether to call the corresponding handlers

###### Returns

`boolean`

###### Defined in

[src/libs/map-backends/backend.ts:181](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L181)

##### startSynchroniseMap()

> `abstract` **startSynchroniseMap**(): `void`

Start synchronise the map, should be implemented by subclasses

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:110](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L110)

##### triggerEvent()

> **triggerEvent**(`type`, ...`eventArg`): `void`

Trigger the event

###### Parameters

• **type**: `string`

type of the event

• ...**eventArg**: `any`[]

event arg

###### Returns

`void`

###### Defined in

[src/libs/map-backends/backend.ts:344](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L344)

##### zoomIn()

> **zoomIn**(): `boolean`

Zoom in the map

###### Returns

`boolean`

Whether the zoom is valid

###### Defined in

[src/libs/map-backends/backend.ts:221](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L221)

##### zoomOut()

> **zoomOut**(): `boolean`

Zoom out the map

###### Returns

`boolean`

Whether the zoom is valid

###### Defined in

[src/libs/map-backends/backend.ts:235](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L235)

## Interfaces

### DefaultOptionTypes\<MapIDType\>

The options that a map generally have

#### Extended by

- [`MapLibreGLBackendOptionTypes`](maplibre-gl/maplibre-gl-backend.md#maplibreglbackendoptiontypes)

#### Type Parameters

• **MapIDType**

#### Properties

##### centre

> **centre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

The centre of the map

###### Defined in

[src/libs/map-backends/backend.ts:14](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L14)

##### credentials

> **credentials**: `string`

The credential of the map API

###### Defined in

[src/libs/map-backends/backend.ts:22](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L22)

##### maxZoom?

> `optional` **maxZoom**: `number`

The max zoom range

###### Defined in

[src/libs/map-backends/backend.ts:26](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L26)

##### minZoom?

> `optional` **minZoom**: `number`

The min zoom range

###### Defined in

[src/libs/map-backends/backend.ts:28](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L28)

##### showDashboard?

> `optional` **showDashboard**: `boolean`

The flag to enable the dashboard

###### Defined in

[src/libs/map-backends/backend.ts:24](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L24)

##### supportedMapTypes

> **supportedMapTypes**: `MapIDType`[]

The collection of the support types

###### Defined in

[src/libs/map-backends/backend.ts:18](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L18)

##### type

> **type**: `MapIDType`

The type of the id which indicates the type of the map

###### Defined in

[src/libs/map-backends/backend.ts:16](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L16)

##### zoom?

> `optional` **zoom**: `number`

The initial zoom of the map

###### Defined in

[src/libs/map-backends/backend.ts:20](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L20)

***

### ViewOptionType

The type of viewport of the map

#### Properties

##### centre?

> `optional` **centre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

The view centre of the map

###### Defined in

[src/libs/map-backends/backend.ts:36](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L36)

##### zoom?

> `optional` **zoom**: `number`

The zoom value

###### Defined in

[src/libs/map-backends/backend.ts:34](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L34)

## Type Aliases

### MapEventHandlerType

> **MapEventHandlerType**: `object`

The type of the map handlers

#### Type declaration

##### handler()

> **handler**: (`eventArg`?) => `void`

###### Parameters

• **eventArg?**: `any`

###### Returns

`void`

##### id

> **id**: `number`

##### type

> **type**: `string`

#### Defined in

[src/libs/map-backends/backend.ts:40](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L40)

## Functions

### allocateMapID()

> **allocateMapID**(): `any`

#### Returns

`any`

#### Defined in

[src/libs/map-backends/backend.ts:4](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/backend.ts#L4)

[**trackmaker**](../../README.md) • **Docs**

***

[trackmaker](../../modules.md) / components/BingMap/bing-map-backend

# components/BingMap/bing-map-backend

## References

### default

Renames and re-exports [BingMapBackend](bing-map-backend.md#bingmapbackend)

## Classes

### BingMapBackend

The general map backend

#### Extends

- [`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes)\<`Microsoft.Maps.Map`, [`BingMapOptions`](bing-map-backend.md#bingmapoptions)\>

#### Constructors

##### new BingMapBackend()

> **new BingMapBackend**(`container`, `options`, `plugins`): [`BingMapBackend`](bing-map-backend.md#bingmapbackend)

###### Parameters

• **container**: `HTMLElement`

• **options**: [`BingMapOptions`](bing-map-backend.md#bingmapoptions)

• **plugins**: [`MapPluginConstructor`](../../libs/map-backends/plugin.md#mappluginconstructorhostmaptype)\<[`BingMapBackend`](bing-map-backend.md#bingmapbackend)\>[] = `[]`

###### Returns

[`BingMapBackend`](bing-map-backend.md#bingmapbackend)

###### Overrides

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`constructor`](../../libs/map-backends/backend.md#constructors)

###### Defined in

[src/components/BingMap/bing-map-backend.ts:25](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L25)

#### Properties

##### centre

> **centre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`centre`](../../libs/map-backends/backend.md#centre)

###### Defined in

[src/libs/map-backends/backend.ts:54](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L54)

##### container

> **container**: `HTMLElement`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`container`](../../libs/map-backends/backend.md#container)

###### Defined in

[src/libs/map-backends/backend.ts:57](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L57)

##### credentials

> `readonly` **credentials**: `string`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`credentials`](../../libs/map-backends/backend.md#credentials)

###### Defined in

[src/libs/map-backends/backend.ts:55](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L55)

##### eventHandlers

> **eventHandlers**: [`MapEventHandlerType`](../../libs/map-backends/backend.md#mapeventhandlertype)[] = `[]`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`eventHandlers`](../../libs/map-backends/backend.md#eventhandlers)

###### Defined in

[src/libs/map-backends/backend.ts:59](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L59)

##### map

> **map**: `Map`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`map`](../../libs/map-backends/backend.md#map)

###### Defined in

[src/libs/map-backends/backend.ts:58](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L58)

##### mapType

> **mapType**: `MapTypeId`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`mapType`](../../libs/map-backends/backend.md#maptype)

###### Defined in

[src/libs/map-backends/backend.ts:56](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L56)

##### maxZoom

> **maxZoom**: `number` = `20`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`maxZoom`](../../libs/map-backends/backend.md#maxzoom)

###### Defined in

[src/libs/map-backends/backend.ts:60](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L60)

##### minZoom

> **minZoom**: `number` = `3`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`minZoom`](../../libs/map-backends/backend.md#minzoom)

###### Defined in

[src/libs/map-backends/backend.ts:61](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L61)

##### plugins

> **plugins**: `any` = `{}`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`plugins`](../../libs/map-backends/backend.md#plugins)

###### Defined in

[src/libs/map-backends/backend.ts:62](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L62)

##### properties

> **properties**: `Record`\<`string`, `any`\>

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`properties`](../../libs/map-backends/backend.md#properties)

###### Defined in

[src/libs/map-backends/backend.ts:65](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L65)

##### supportMapTypes

> **supportMapTypes**: `MapTypeId`[]

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`supportMapTypes`](../../libs/map-backends/backend.md#supportmaptypes)

###### Defined in

[src/libs/map-backends/backend.ts:63](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L63)

##### viewCentre

> **viewCentre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`viewCentre`](../../libs/map-backends/backend.md#viewcentre)

###### Defined in

[src/libs/map-backends/backend.ts:53](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L53)

##### zoom

> **zoom**: `number` = `5`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`zoom`](../../libs/map-backends/backend.md#zoom)

###### Defined in

[src/libs/map-backends/backend.ts:52](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L52)

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

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`addEventHandler`](../../libs/map-backends/backend.md#addeventhandler)

###### Defined in

[src/libs/map-backends/backend.ts:271](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L271)

###### addEventHandler(type, handler, native)

> **addEventHandler**(`type`, `handler`, `native`): `any`

###### Parameters

• **type**: `string`

• **handler**

• **native**: `true`

###### Returns

`any`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`addEventHandler`](../../libs/map-backends/backend.md#addeventhandler)

###### Defined in

[src/libs/map-backends/backend.ts:276](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L276)

##### addNativeHandler()

> **addNativeHandler**(`type`, `handler`): `void`

Add the event to the host map level

###### Parameters

• **type**: `string`

type of the event

• **handler**

the callback function

###### Returns

`void`

###### Overrides

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`addNativeHandler`](../../libs/map-backends/backend.md#addnativehandler)

###### Defined in

[src/components/BingMap/bing-map-backend.ts:70](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L70)

##### getCentre()

> **getCentre**(): [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

Get the map centre

###### Returns

[`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`getCentre`](../../libs/map-backends/backend.md#getcentre)

###### Defined in

[src/libs/map-backends/backend.ts:123](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L123)

##### getViewCentre()

> **getViewCentre**(): [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

get the view centre

###### Returns

[`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`getViewCentre`](../../libs/map-backends/backend.md#getviewcentre)

###### Defined in

[src/libs/map-backends/backend.ts:143](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L143)

##### getZoom()

> **getZoom**(): `number`

Get the zoom of the map

###### Returns

`number`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`getZoom`](../../libs/map-backends/backend.md#getzoom)

###### Defined in

[src/libs/map-backends/backend.ts:194](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L194)

##### getZoomRange()

> **getZoomRange**(): `object`

###### Returns

`object`

The zoom range

###### max

> **max**: `number`

###### min

> **min**: `number`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`getZoomRange`](../../libs/map-backends/backend.md#getzoomrange)

###### Defined in

[src/libs/map-backends/backend.ts:245](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L245)

##### gotoCentre()

> **gotoCentre**(): `void`

Move the map to the centre

###### Returns

`void`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`gotoCentre`](../../libs/map-backends/backend.md#gotocentre)

###### Defined in

[src/libs/map-backends/backend.ts:210](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L210)

##### initialiseMap()

> **initialiseMap**(`options`): `Map`

Initialise the map, should be implemented by subclasses

###### Parameters

• **options**: [`BingMapOptions`](bing-map-backend.md#bingmapoptions)

###### Returns

`Map`

###### Overrides

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`initialiseMap`](../../libs/map-backends/backend.md#initialisemap)

###### Defined in

[src/components/BingMap/bing-map-backend.ts:30](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L30)

##### loadPlugins()

> **loadPlugins**(`plugins`): `boolean`

Load the plugins

###### Parameters

• **plugins**: [`MapPluginConstructor`](../../libs/map-backends/plugin.md#mappluginconstructorhostmaptype)\<[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes)\<`Map`, [`BingMapOptions`](bing-map-backend.md#bingmapoptions)\>\>[]

The plugin list

###### Returns

`boolean`

Whether the loading is successful

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`loadPlugins`](../../libs/map-backends/backend.md#loadplugins)

###### Defined in

[src/libs/map-backends/backend.ts:152](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L152)

##### onMapViewChanged()

> **onMapViewChanged**(): `void`

###### Returns

`void`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`onMapViewChanged`](../../libs/map-backends/backend.md#onmapviewchanged)

###### Defined in

[src/libs/map-backends/backend.ts:344](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L344)

##### onReady()

> **onReady**(): `void`

###### Returns

`void`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`onReady`](../../libs/map-backends/backend.md#onready)

###### Defined in

[src/libs/map-backends/backend.ts:348](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L348)

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

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`removeEventHandler`](../../libs/map-backends/backend.md#removeeventhandler)

###### Defined in

[src/libs/map-backends/backend.ts:297](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L297)

###### removeEventHandler(id, native)

> **removeEventHandler**(`id`, `native`): `void`

###### Parameters

• **id**: `any`

• **native**: `true`

###### Returns

`void`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`removeEventHandler`](../../libs/map-backends/backend.md#removeeventhandler)

###### Defined in

[src/libs/map-backends/backend.ts:298](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L298)

##### removeNativeHandler()

> **removeNativeHandler**(`id`): `void`

Remove the event from the host map level

###### Parameters

• **id**: `any`

id of the event

###### Returns

`void`

###### Overrides

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`removeNativeHandler`](../../libs/map-backends/backend.md#removenativehandler)

###### Defined in

[src/components/BingMap/bing-map-backend.ts:74](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L74)

##### setCentre()

> **setCentre**(`centre`, `silence`): `void`

Set the centre of the map

###### Parameters

• **centre**: [`GeographicPoint`](../../utils/geolocation/README.md#geographicpoint)

• **silence**: `boolean`

Whether to call the corresponding handlers

###### Returns

`void`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`setCentre`](../../libs/map-backends/backend.md#setcentre)

###### Defined in

[src/libs/map-backends/backend.ts:117](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L117)

##### setView()

> **setView**(`view`): `void`

Set the viewport

###### Parameters

• **view**: [`ViewOptionType`](../../libs/map-backends/backend.md#viewoptiontype)

Set the zoom and centre of the map

###### Returns

`void`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`setView`](../../libs/map-backends/backend.md#setview)

###### Defined in

[src/libs/map-backends/backend.ts:202](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L202)

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

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`setViewCentre`](../../libs/map-backends/backend.md#setviewcentre)

###### Defined in

[src/libs/map-backends/backend.ts:132](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L132)

##### setZoom()

> **setZoom**(`zoom`, `updateMapView`): `boolean`

Set the zoom of the map

###### Parameters

• **zoom**: `number`

• **updateMapView**: `boolean` = `true`

Whether to call the corresponding handlers

###### Returns

`boolean`

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`setZoom`](../../libs/map-backends/backend.md#setzoom)

###### Defined in

[src/libs/map-backends/backend.ts:178](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L178)

##### startSynchroniseMap()

> **startSynchroniseMap**(): `void`

Start synchronise the map, should be implemented by subclasses

###### Returns

`void`

###### Overrides

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`startSynchroniseMap`](../../libs/map-backends/backend.md#startsynchronisemap)

###### Defined in

[src/components/BingMap/bing-map-backend.ts:57](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L57)

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

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`triggerEvent`](../../libs/map-backends/backend.md#triggerevent)

###### Defined in

[src/libs/map-backends/backend.ts:339](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L339)

##### zoomIn()

> **zoomIn**(): `boolean`

Zoom in the map

###### Returns

`boolean`

Whether the zoom is valid

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`zoomIn`](../../libs/map-backends/backend.md#zoomin)

###### Defined in

[src/libs/map-backends/backend.ts:218](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L218)

##### zoomOut()

> **zoomOut**(): `boolean`

Zoom out the map

###### Returns

`boolean`

Whether the zoom is valid

###### Inherited from

[`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes).[`zoomOut`](../../libs/map-backends/backend.md#zoomout)

###### Defined in

[src/libs/map-backends/backend.ts:232](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/map-backends/backend.ts#L232)

## Type Aliases

### BingMapBackendType

> **BingMapBackendType**: [`MapBackend`](../../libs/map-backends/backend.md#mapbackendmaptypeoptiontypes)\<`Microsoft.Maps.Map`, [`BingMapOptions`](bing-map-backend.md#bingmapoptions)\>

#### Defined in

[src/components/BingMap/bing-map-backend.ts:21](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L21)

***

### BingMapOptions

> **BingMapOptions**: [`Options`](../../libs/map-backends/backend.md#optionsmapidtype)\<`Microsoft.Maps.MapTypeId`\> & `object`

#### Type declaration

##### customizedTouchpadBehavior?

> `optional` **customizedTouchpadBehavior**: `boolean`

##### enableInertia?

> `optional` **enableInertia**: `boolean`

##### forceHiDPI?

> `optional` **forceHiDPI**: `boolean`

##### liteMode?

> `optional` **liteMode**: `boolean`

##### showDashboard?

> `optional` **showDashboard**: `boolean`

#### Defined in

[src/components/BingMap/bing-map-backend.ts:13](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L13)

## Functions

### allocateBingMapID()

> **allocateBingMapID**(): `any`

#### Returns

`any`

#### Defined in

[src/components/BingMap/bing-map-backend.ts:7](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L7)

***

### initMapScript()

> **initMapScript**(`timeout`?, `scriptURL`?): `Promise`\<`void`\>

Initializes the Bing Maps script by appending a script tag to the document head.
If the script is already loaded, it resolves immediately.

#### Parameters

• **timeout?**: `number` = `10000`

The maximum time in milliseconds to wait for the script to load. Defaults to 10000.

• **scriptURL?**: `string` = `"https://www.bing.com/api/maps/mapcontrol"`

The URL of the Bing Maps script. Defaults to [https://www.bing.com/api/maps/mapcontrol](https://www.bing.com/api/maps/mapcontrol).

#### Returns

`Promise`\<`void`\>

A promise that resolves when the Bing Maps script is loaded, or rejects if the timeout is reached.

#### Defined in

[src/components/BingMap/bing-map-backend.ts:87](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/bing-map-backend.ts#L87)

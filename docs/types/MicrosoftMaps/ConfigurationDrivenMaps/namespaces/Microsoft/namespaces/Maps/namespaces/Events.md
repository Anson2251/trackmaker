[**trackmaker**](../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../README.md) / [Microsoft](../../../README.md) / [Maps](../README.md) / Events

# Events

A static class that manages events within the map SDK.

## Functions

### addHandler()

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`Map`](../README.md#map-2)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported events:
click, dblclick, mapresize, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1213](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1213)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`Pushpin`](../README.md#pushpin)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
changed, click, dblclick, drag, dragend, dragstart, mousedown, mouseout, mouseover, mouseup

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1223](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1223)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`Polygon`](../README.md#polygon) \| [`Polyline`](../README.md#polyline)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
changed, click, dblclick, mousedown, mouseout, mouseover, mouseup

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1233](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1233)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`Infobox`](../README.md#infobox)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, infoboxChanged, mouseenter, mouseleave

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1243](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1243)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`Layer`](../README.md#layer)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1253](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1253)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`EntityCollection`](../README.md#entitycollection)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
• entityadded
• entityremoved

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1264](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1264)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: `any`

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach.

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1273](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1273)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`DirectionsManager`](Directions.md#directionsmanager)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
• directionsError
• directionsUpdated

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:728](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L728)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`DrawingTools`](../README.md#drawingtools)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:196](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L196)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`DrawingManager`](../README.md#drawingmanager)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:206](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L206)

#### addHandler(target, eventName, handler)

> **addHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.

##### Parameters

• **target**: [`GeoXmlLayer`](../README.md#geoxmllayer)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:424](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L424)

***

### addOne()

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`Map`](../README.md#map-2)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported events:
click, dblclick, mapresize, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1286](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1286)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`Pushpin`](../README.md#pushpin)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
changed, click, dblclick, drag, dragend, dragstart, mousedown, mouseout, mouseover, mouseup

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1295](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1295)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`Polygon`](../README.md#polygon) \| [`Polyline`](../README.md#polyline)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
changed, click, dblclick, mousedown, mouseout, mouseover, mouseup

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1304](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1304)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`Infobox`](../README.md#infobox)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, infoboxChanged, mouseenter, mouseleave

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1313](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1313)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`Layer`](../README.md#layer)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1322](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1322)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`EntityCollection`](../README.md#entitycollection)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
• entityadded
• entityremoved

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1332](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1332)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: `any`

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach.

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1340](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1340)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`DirectionsManager`](Directions.md#directionsmanager)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
• directionsError
• directionsUpdated

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:742](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L742)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`DrawingTools`](../README.md#drawingtools)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:219](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L219)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`DrawingManager`](../README.md#drawingmanager)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:228](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L228)

#### addOne(target, eventName, handler)

> **addOne**(`target`, `eventName`, `handler`): `void`

Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.

##### Parameters

• **target**: [`GeoXmlLayer`](../README.md#geoxmllayer)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick

• **handler**

The callback function to handle the event when triggered.

##### Returns

`void`

##### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:437](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L437)

***

### addThrottledHandler()

#### addThrottledHandler(target, eventName, handler, throttleInterval)

> **addThrottledHandler**(`target`, `eventName`, `handler`, `throttleInterval`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`Map`](../README.md#map-2)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported events:
click, dblclick, mapresize, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart

• **handler**

The callback function to handle the event when triggered.

• **throttleInterval**: `number`

throttle interval (in ms)

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1355](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1355)

#### addThrottledHandler(target, eventName, handler, throttleInterval)

> **addThrottledHandler**(`target`, `eventName`, `handler`, `throttleInterval`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`Pushpin`](../README.md#pushpin)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
changed, click, dblclick, drag, dragend, dragstart, mousedown, mouseout, mouseover, mouseup

• **handler**

The callback function to handle the event when triggered.

• **throttleInterval**: `number`

throttle interval (in ms)

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1366](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1366)

#### addThrottledHandler(target, eventName, handler, throttleInterval)

> **addThrottledHandler**(`target`, `eventName`, `handler`, `throttleInterval`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`Polygon`](../README.md#polygon) \| [`Polyline`](../README.md#polyline)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
changed, click, dblclick, mousedown, mouseout, mouseover, mouseup

• **handler**

The callback function to handle the event when triggered.

• **throttleInterval**: `number`

throttle interval (in ms)

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1377](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1377)

#### addThrottledHandler(target, eventName, handler)

> **addThrottledHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`Infobox`](../README.md#infobox)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, infoboxChanged, mouseenter, mouseleave

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1387](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1387)

#### addThrottledHandler(target, eventName, handler, throttleInterval)

> **addThrottledHandler**(`target`, `eventName`, `handler`, `throttleInterval`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`Layer`](../README.md#layer)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick

• **handler**

The callback function to handle the event when triggered.

• **throttleInterval**: `number`

throttle interval (in ms)

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1398](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1398)

#### addThrottledHandler(target, eventName, handler, throttleInterval)

> **addThrottledHandler**(`target`, `eventName`, `handler`, `throttleInterval`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`EntityCollection`](../README.md#entitycollection)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
• entityadded
• entityremoved

• **handler**

The callback function to handle the event when triggered.

• **throttleInterval**: `number`

throttle interval (in ms)

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1410](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1410)

#### addThrottledHandler(target, eventName, handler, throttleInterval)

> **addThrottledHandler**(`target`, `eventName`, `handler`, `throttleInterval`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: `any`

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach.

• **handler**

The callback function to handle the event when triggered.

• **throttleInterval**: `number`

throttle interval (in ms)

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1420](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1420)

#### addThrottledHandler(target, eventName, handler, throttleInterval)

> **addThrottledHandler**(`target`, `eventName`, `handler`, `throttleInterval`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`DirectionsManager`](Directions.md#directionsmanager)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
• directionsError
• directionsUpdated

• **handler**

The callback function to handle the event when triggered.

• **throttleInterval**: `number`

throttle interval (in ms)

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:758](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L758)

#### addThrottledHandler(target, eventName, handler)

> **addThrottledHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`DrawingTools`](../README.md#drawingtools)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:242](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L242)

#### addThrottledHandler(target, eventName, handler, throttleInterval)

> **addThrottledHandler**(`target`, `eventName`, `handler`, `throttleInterval`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`DrawingManager`](../README.md#drawingmanager)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted

• **handler**

The callback function to handle the event when triggered.

• **throttleInterval**: `number`

throttle interval (in ms)

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:253](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L253)

#### addThrottledHandler(target, eventName, handler)

> **addThrottledHandler**(`target`, `eventName`, `handler`): [`IHandlerId`](../README.md#ihandlerid)

Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.

##### Parameters

• **target**: [`GeoXmlLayer`](../README.md#geoxmllayer)

The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.

• **eventName**: `string`

The type of event to attach. Supported Events:
click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick

• **handler**

The callback function to handle the event when triggered.

##### Returns

[`IHandlerId`](../README.md#ihandlerid)

The handler id.

##### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:451](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L451)

***

### hasHandler()

> **hasHandler**(`target`, `eventName`): `boolean`

Checks if the target has any attached event handler.

#### Parameters

• **target**: `any`

The object to check if an event is attached to it.

• **eventName**: `string`

The name of the event to check to see is attached.

#### Returns

`boolean`

A boolean indicating if the specified event type is attached to the object.

#### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1432](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1432)

***

### invoke()

> **invoke**(`target`, `evenName`, `args`): `void`

Invokes an event on the target. This causes all handlers for the specified event name to be called.

#### Parameters

• **target**: `any`

The object to invoke the event on.

• **evenName**: `string`

• **args**: `any`

Arguments for the event handler.

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1440](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1440)

***

### removeHandler()

> **removeHandler**(`handlerId`): `void`

Detaches the specified handler from the event. The handlerId is returned by the addHandler and addThrottledHandler methods.

#### Parameters

• **handlerId**: [`IHandlerId`](../README.md#ihandlerid)

The handler id of the event to remove.

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1446](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1446)

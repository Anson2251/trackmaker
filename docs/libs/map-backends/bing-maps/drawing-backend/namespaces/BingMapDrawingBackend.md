[**trackmaker**](../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../modules.md) / [libs/map-backends/bing-maps/drawing-backend](../README.md) / BingMapDrawingBackend

# BingMapDrawingBackend

## Functions

### convertPolygonPrimitiveToProxy()

> **convertPolygonPrimitiveToProxy**(`primitive`): [`PolygonProxy`](../../../../drawing-map/components-proxies/polygon.md#polygonproxy)

#### Parameters

• **primitive**: `Polygon`

#### Returns

[`PolygonProxy`](../../../../drawing-map/components-proxies/polygon.md#polygonproxy)

#### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:165](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L165)

***

### convertPolylinePrimitiveToProxy()

> **convertPolylinePrimitiveToProxy**(`primitive`): [`PolylineProxy`](../../../../drawing-map/components-proxies/polyline.md#polylineproxy)

#### Parameters

• **primitive**: `Polyline`

#### Returns

[`PolylineProxy`](../../../../drawing-map/components-proxies/polyline.md#polylineproxy)

#### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:155](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L155)

***

### convertProxyToBingMapPrimitives()

> **convertProxyToBingMapPrimitives**(`component`): `Microsoft.Maps.IPrimitive`

#### Parameters

• **component**: [`DrawingComponentProxy`](../../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

#### Returns

`Microsoft.Maps.IPrimitive`

#### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:115](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L115)

***

### convertPushPinPrimitiveToProxy()

> **convertPushPinPrimitiveToProxy**(`primitive`): [`PushPinProxy`](../../../../drawing-map/components-proxies/pushpin.md#pushpinproxy)

#### Parameters

• **primitive**: `Pushpin`

#### Returns

[`PushPinProxy`](../../../../drawing-map/components-proxies/pushpin.md#pushpinproxy)

#### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:138](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L138)

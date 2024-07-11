[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / libs/drawing-map/components-proxies/conversion

# libs/drawing-map/components-proxies/conversion

## Functions

### exportComponentTOCartoSketchRouteItem()

> **exportComponentTOCartoSketchRouteItem**(`component`): [`CartoSketchRouteItem`](../../cartosketch/namespaces/CartoSketch/namespaces/Routes/README.md#cartosketchrouteitem)

#### Parameters

• **component**: [`PolylineProxy`](polyline.md#polylineproxy)

#### Returns

[`CartoSketchRouteItem`](../../cartosketch/namespaces/CartoSketch/namespaces/Routes/README.md#cartosketchrouteitem)

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:139](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L139)

***

### exportComponentToCartoSketchDraftItem()

> **exportComponentToCartoSketchDraftItem**(`component`): [`CartoSketchDraftItem`](../../cartosketch/draft/README.md#cartosketchdraftitem)

#### Parameters

• **component**: `ComponentProxiesCollection`

#### Returns

[`CartoSketchDraftItem`](../../cartosketch/draft/README.md#cartosketchdraftitem)

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:111](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L111)

***

### exportComponentsToCartoSketch()

> **exportComponentsToCartoSketch**(`routes`, `drafts`, `id`, `name`): [`CartoSketch`](../../cartosketch/README.md#cartosketch)

#### Parameters

• **routes**: [`PolylineProxy`](polyline.md#polylineproxy)[]

• **drafts**: `ComponentProxiesCollection`[]

• **id**: `string`

• **name**: `string`

#### Returns

[`CartoSketch`](../../cartosketch/README.md#cartosketch)

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:149](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L149)

***

### exportComponentsToCartoSketchDraft()

> **exportComponentsToCartoSketchDraft**(`components`, `id`, `name`): [`CartoSketchDraft`](../../cartosketch/draft/README.md#cartosketchdraft)

#### Parameters

• **components**: `ComponentProxiesCollection`[]

• **id**: `string`

• **name**: `string`

#### Returns

[`CartoSketchDraft`](../../cartosketch/draft/README.md#cartosketchdraft)

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:134](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L134)

***

### exportComponentsToCartoSketchRoute()

> **exportComponentsToCartoSketchRoute**(`components`, `id`, `name`): [`CartoSketchRoute`](../../cartosketch/namespaces/CartoSketch/namespaces/Routes/README.md#cartosketchroute)

#### Parameters

• **components**: [`PolylineProxy`](polyline.md#polylineproxy)[]

• **id**: `string`

• **name**: `string`

#### Returns

[`CartoSketchRoute`](../../cartosketch/namespaces/CartoSketch/namespaces/Routes/README.md#cartosketchroute)

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:145](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L145)

***

### importComponentFromCartoSketchDraftItem()

> **importComponentFromCartoSketchDraftItem**(`item`): [`PolygonProxy`](polygon.md#polygonproxy) \| [`PolylineProxy`](polyline.md#polylineproxy) \| [`PushPinProxy`](pushpin.md#pushpinproxy)

#### Parameters

• **item**: [`CartoSketchDraftItem`](../../cartosketch/draft/README.md#cartosketchdraftitem)

#### Returns

[`PolygonProxy`](polygon.md#polygonproxy) \| [`PolylineProxy`](polyline.md#polylineproxy) \| [`PushPinProxy`](pushpin.md#pushpinproxy)

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:33](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L33)

***

### importComponentFromGeoJSON()

> **importComponentFromGeoJSON**(`GeoJSON`, `type`?, `id`?, `name`?): `ComponentProxiesCollection`

#### Parameters

• **GeoJSON**: `any`

• **type?**: `"Point"` \| `"Polygon"` \| `"LineString"`

• **id?**: `string`

• **name?**: `string`

#### Returns

`ComponentProxiesCollection`

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:14](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L14)

***

### importComponentsFromCartoSketch()

> **importComponentsFromCartoSketch**(`sketch`): `object`

#### Parameters

• **sketch**: [`CartoSketch`](../../cartosketch/README.md#cartosketch)

#### Returns

`object`

##### drafts

> **drafts**: `ComponentProxiesCollection`[]

##### routes

> **routes**: [`PolylineProxy`](polyline.md#polylineproxy)[]

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:102](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L102)

***

### importComponentsFromCartoSketchDraft()

> **importComponentsFromCartoSketchDraft**(`draft`): `ComponentProxiesCollection`[]

#### Parameters

• **draft**: [`CartoSketchDraft`](../../cartosketch/draft/README.md#cartosketchdraft)

#### Returns

`ComponentProxiesCollection`[]

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:84](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L84)

***

### importRouteFromCartoSketchRoute()

> **importRouteFromCartoSketchRoute**(`route`): [`PolylineProxy`](polyline.md#polylineproxy)[]

#### Parameters

• **route**: [`CartoSketchRoute`](../../cartosketch/namespaces/CartoSketch/namespaces/Routes/README.md#cartosketchroute)

#### Returns

[`PolylineProxy`](polyline.md#polylineproxy)[]

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:98](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L98)

***

### importRouteFromCartoSketchRouteItem()

> **importRouteFromCartoSketchRouteItem**(`item`): [`PolylineProxy`](polyline.md#polylineproxy)

#### Parameters

• **item**: [`CartoSketchRouteItem`](../../cartosketch/namespaces/CartoSketch/namespaces/Routes/README.md#cartosketchrouteitem)

#### Returns

[`PolylineProxy`](polyline.md#polylineproxy)

#### Defined in

[src/libs/drawing-map/components-proxies/conversion.ts:88](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/components-proxies/conversion.ts#L88)

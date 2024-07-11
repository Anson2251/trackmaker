[**trackmaker**](../../../../README.md) • **Docs**

***

[trackmaker](../../../../modules.md) / libs/map-backends/bing-maps/drawing-backend

# libs/map-backends/bing-maps/drawing-backend

## Index

### Namespaces

- [BingMapDrawingBackend](namespaces/BingMapDrawingBackend.md)

## Classes

### BingMapDrawingBackend

#### Extends

- [`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype)\<`DrawingBingMap`\>

#### Constructors

##### new BingMapDrawingBackend()

> **new BingMapDrawingBackend**(`hostMap`): [`BingMapDrawingBackend`](README.md#bingmapdrawingbackend)

Constructor for the DrawingMapBackend class.

###### Parameters

• **hostMap**: `DrawingBingMap`

The host map instance.

###### Returns

[`BingMapDrawingBackend`](README.md#bingmapdrawingbackend)

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`constructor`](../../../drawing-map/drawing-backend.md#constructors)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:90](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L90)

#### Properties

##### handlers

> **handlers**: `BackendHandlerType`\<`DrawingBingMap`\>[] = `[]`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`handlers`](../../../drawing-map/drawing-backend.md#handlers)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:76](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L76)

##### hostMap

> **hostMap**: `DrawingBingMap`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`hostMap`](../../../drawing-map/drawing-backend.md#hostmap)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:75](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L75)

##### id

> **id**: `undefined` \| `string`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`id`](../../../drawing-map/drawing-backend.md#id)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:78](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L78)

##### name

> **name**: `undefined` \| `string`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`name`](../../../drawing-map/drawing-backend.md#name)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:77](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L77)

##### primitiveClassification

> **primitiveClassification**: `Map`\<`string`, [`PrimitiveClassification`](../../../drawing-map/drawing-backend.md#primitiveclassification-1)\>

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`primitiveClassification`](../../../drawing-map/drawing-backend.md#primitiveclassification)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:81](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L81)

##### primitiveComponentMap

> **primitiveComponentMap**: [`BidirectionalMap`](../../../../utils/bidirectional-map.md#bidirectionalmaptu)\<`number`, `string`\>

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:23](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L23)

##### primitiveProxyLayer

> **primitiveProxyLayer**: `Map`\<`string`, [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>\>

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`primitiveProxyLayer`](../../../drawing-map/drawing-backend.md#primitiveproxylayer)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:80](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L80)

#### Methods

##### addHandler()

> **addHandler**(`type`, `callback`): `void`

Add a handler to the backend

###### Parameters

• **type**: `string`

The type of the handler

• **callback**

The callback function of the handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`addHandler`](../../../drawing-map/drawing-backend.md#addhandler)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:146](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L146)

##### addProxyPrimitive()

> **addProxyPrimitive**(`primitive`, `className`?): `void`

Add a primitive to the proxy layer with a given className

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to add

• **className?**: [`PrimitiveClassification`](../../../drawing-map/drawing-backend.md#primitiveclassification-1) = `"unknown"`

The className of the primitive

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`addProxyPrimitive`](../../../drawing-map/drawing-backend.md#addproxyprimitive)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:229](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L229)

##### addProxyPrimitiveToMap()

> **addProxyPrimitiveToMap**(`component`): `void`

###### Parameters

• **component**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`addProxyPrimitiveToMap`](../../../drawing-map/drawing-backend.md#addproxyprimitivetomap)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:38](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L38)

##### clear()

> **clear**(): `void`

Clear all components

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`clear`](../../../drawing-map/drawing-backend.md#clear)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:44](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L44)

##### deleteProxyPrimitive()

> **deleteProxyPrimitive**(`primitive`, `silent`?): `void`

Delete a primitive from the proxy layer

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to delete

• **silent?**: `boolean` = `false`

Whether to trigger the change handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`deleteProxyPrimitive`](../../../drawing-map/drawing-backend.md#deleteproxyprimitive)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:239](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L239)

##### edit()

> **edit**(`id`): `void`

Go into edit mode for a specific component

###### Parameters

• **id**: `string`

The ID of the component

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`edit`](../../../drawing-map/drawing-backend.md#edit)

###### Throws

- If no corresponding primitive is found by the given ID

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:404](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L404)

##### editComponent()

> **editComponent**(`component`): `void`

Go into edit mode for a specific component

###### Parameters

• **component**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`editComponent`](../../../drawing-map/drawing-backend.md#editcomponent)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:48](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L48)

##### escape()

> **escape**(): `void`

Escape editing

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`escape`](../../../drawing-map/drawing-backend.md#escape)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:34](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L34)

##### executeHandler()

> **executeHandler**(`type`): `void`

Execute a registered handler

###### Parameters

• **type**: `string`

Type of the handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`executeHandler`](../../../drawing-map/drawing-backend.md#executehandler)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:135](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L135)

##### getClassificationInfo()

> **getClassificationInfo**(): [`ClassifiedComponentMeta`](../../../drawing-map/drawing-backend.md#classifiedcomponentmeta)

Get the metadata of drawing components categorized by their classifications

###### Returns

[`ClassifiedComponentMeta`](../../../drawing-map/drawing-backend.md#classifiedcomponentmeta)

An object containing arrays of metadata of drawing components categorized by their classifications
         Each classification is a key in the object, and the corresponding value is an array of metadata of components
         of that classification.

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getClassificationInfo`](../../../drawing-map/drawing-backend.md#getclassificationinfo)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:448](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L448)

##### getClassifiedProxyComponents()

> **getClassifiedProxyComponents**(): `object`

Get the drawing components categorized by their classifications

###### Returns

`object`

An object containing arrays of drawing components categorized by their classifications
         Each classification is a key in the object, and the corresponding value is an array of components
         of that classification.

###### drafts

> **drafts**: ([`PolygonProxy`](../../../drawing-map/components-proxies/polygon.md#polygonproxy) \| [`PolylineProxy`](../../../drawing-map/components-proxies/polyline.md#polylineproxy) \| [`PushPinProxy`](../../../drawing-map/components-proxies/pushpin.md#pushpinproxy))[]

The drafts of drawing components, which includes polygons, polylines and pushpins

###### routes

> **routes**: [`PolylineProxy`](../../../drawing-map/components-proxies/polyline.md#polylineproxy)[]

The routes of drawing components

###### unknowns

> **unknowns**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

The unknowns of drawing components

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getClassifiedProxyComponents`](../../../drawing-map/drawing-backend.md#getclassifiedproxycomponents)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:479](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L479)

##### getPrimitiveFromComponent()

> **getPrimitiveFromComponent**(`component`): `undefined` \| `IPrimitive`

###### Parameters

• **component**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`undefined` \| `IPrimitive`

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:68](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L68)

##### getPrimitiveMeta()

> **getPrimitiveMeta**(`primitive`): [`ComponentMeta`](../../../drawing-map/drawing-backend.md#componentmeta)

Get the metadata of a drawing component by its primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive of the component

###### Returns

[`ComponentMeta`](../../../drawing-map/drawing-backend.md#componentmeta)

The metadata of the component

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getPrimitiveMeta`](../../../drawing-map/drawing-backend.md#getprimitivemeta)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:418](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L418)

##### getShownComponentIDs()

> **getShownComponentIDs**(): `string`[]

###### Returns

`string`[]

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getShownComponentIDs`](../../../drawing-map/drawing-backend.md#getshowncomponentids)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:54](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L54)

##### getShownComponents()

> **getShownComponents**(): [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

Get the shown components

###### Returns

[`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

The shown components

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getShownComponents`](../../../drawing-map/drawing-backend.md#getshowncomponents)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:220](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L220)

##### hide()

> **hide**(`primitive`, `silent`?): `void`

Hide a primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to hide

• **silent?**: `boolean` = `false`

Whether to trigger the change handler
+

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`hide`](../../../drawing-map/drawing-backend.md#hide)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:209](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L209)

##### hideByID()

> **hideByID**(`id`, `silent`?): `void`

Hide a primitive by its ID

###### Parameters

• **id**: `string`

The ID of the primitive

• **silent?**: `boolean` = `false`

Whether to trigger the change handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`hideByID`](../../../drawing-map/drawing-backend.md#hidebyid)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:194](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L194)

##### initialiseBackend()

> **initialiseBackend**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`initialiseBackend`](../../../drawing-map/drawing-backend.md#initialisebackend)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:25](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L25)

##### linkNewNativePrimitive()

> **linkNewNativePrimitive**(`primitive`): `void`

###### Parameters

• **primitive**: `IPrimitive`

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`linkNewNativePrimitive`](../../../drawing-map/drawing-backend.md#linknewnativeprimitive)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:83](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L83)

##### redo()

> **redo**(): `void`

Redo the last undone action.

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`redo`](../../../drawing-map/drawing-backend.md#redo)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:367](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L367)

##### registerPrimitive()

> **registerPrimitive**(`primitive`, `className`?): `void`

Register a primitive with its classification

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to register

• **className?**: [`PrimitiveClassification`](../../../drawing-map/drawing-backend.md#primitiveclassification-1)

The classification of the primitive. Default to "unknown" if not provided.

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`registerPrimitive`](../../../drawing-map/drawing-backend.md#registerprimitive)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:438](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L438)

##### removeProxyPrimitiveFromMap()

> **removeProxyPrimitiveFromMap**(`component`): `void`

###### Parameters

• **component**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`removeProxyPrimitiveFromMap`](../../../drawing-map/drawing-backend.md#removeproxyprimitivefrommap)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:63](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L63)

##### show()

> **show**(`primitive`, `silent`): `void`

Show a primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to show

• **silent**: `boolean` = `false`

Whether to trigger the change handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`show`](../../../drawing-map/drawing-backend.md#show)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:184](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L184)

##### showByID()

> **showByID**(`id`, `silent`): `void`

Show a primitive by its ID

###### Parameters

• **id**: `string`

The ID of the primitive

• **silent**: `boolean` = `false`

Whether to trigger the change handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`showByID`](../../../drawing-map/drawing-backend.md#showbyid)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:169](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L169)

##### startSyncComponents()

> **startSyncComponents**(): `void`

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`startSyncComponents`](../../../drawing-map/drawing-backend.md#startsynccomponents)

###### Defined in

[src/libs/map-backends/bing-maps/drawing-backend.ts:74](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/bing-maps/drawing-backend.ts#L74)

##### undo()

> **undo**(): `void`

Undo the latest action.

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`undo`](../../../drawing-map/drawing-backend.md#undo)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:328](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/drawing-backend.ts#L328)

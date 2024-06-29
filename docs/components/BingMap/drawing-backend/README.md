[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / components/BingMap/drawing-backend

# components/BingMap/drawing-backend

## Index

### Namespaces

- [BingMapDrawingBackend](namespaces/BingMapDrawingBackend.md)

## Classes

### BingMapDrawingBackend

#### Extends

- [`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype)\<`DrawingBingMap`\>

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

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`constructor`](../../../libs/drawing-map/drawing-backend.md#constructors)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:90](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L90)

#### Properties

##### handlers

> **handlers**: `BackendHandlerType`\<`DrawingBingMap`\>[] = `[]`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`handlers`](../../../libs/drawing-map/drawing-backend.md#handlers)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L76)

##### hostMap

> **hostMap**: `DrawingBingMap`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`hostMap`](../../../libs/drawing-map/drawing-backend.md#hostmap)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:75](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L75)

##### id

> **id**: `undefined` \| `string`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`id`](../../../libs/drawing-map/drawing-backend.md#id)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:78](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L78)

##### name

> **name**: `undefined` \| `string`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`name`](../../../libs/drawing-map/drawing-backend.md#name)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:77](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L77)

##### primitiveComponentMap

> **primitiveComponentMap**: [`BidirectionalMap`](../../../utils/bidirectional-map.md#bidirectionalmaptu)\<`number`, `string`\>

###### Defined in

[src/components/BingMap/drawing-backend.ts:23](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L23)

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

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`addHandler`](../../../libs/drawing-map/drawing-backend.md#addhandler)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L143)

##### addProxyPrimitive()

> **addProxyPrimitive**(`primitive`, `className`?): `void`

Add a primitive to the proxy layer with a given className

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to add

• **className?**: [`PrimitiveClassification`](../../../libs/drawing-map/drawing-backend.md#primitiveclassification) = `"unknown"`

The className of the primitive

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`addProxyPrimitive`](../../../libs/drawing-map/drawing-backend.md#addproxyprimitive)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:224](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L224)

##### addProxyPrimitiveToMap()

> **addProxyPrimitiveToMap**(`component`): `void`

###### Parameters

• **component**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`addProxyPrimitiveToMap`](../../../libs/drawing-map/drawing-backend.md#addproxyprimitivetomap)

###### Defined in

[src/components/BingMap/drawing-backend.ts:38](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L38)

##### clear()

> **clear**(): `void`

Clear all components

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`clear`](../../../libs/drawing-map/drawing-backend.md#clear)

###### Defined in

[src/components/BingMap/drawing-backend.ts:44](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L44)

##### deleteProxyPrimitive()

> **deleteProxyPrimitive**(`primitive`, `silent`?): `void`

Delete a primitive from the proxy layer

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to delete

• **silent?**: `boolean` = `false`

Whether to trigger the change handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`deleteProxyPrimitive`](../../../libs/drawing-map/drawing-backend.md#deleteproxyprimitive)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:234](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L234)

##### edit()

> **edit**(`id`): `void`

Go into edit mode for a specific component

###### Parameters

• **id**: `string`

The ID of the component

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`edit`](../../../libs/drawing-map/drawing-backend.md#edit)

###### Throws

- If no corresponding primitive is found by the given ID

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:398](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L398)

##### editComponent()

> **editComponent**(`component`): `void`

Go into edit mode for a specific component

###### Parameters

• **component**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`editComponent`](../../../libs/drawing-map/drawing-backend.md#editcomponent)

###### Defined in

[src/components/BingMap/drawing-backend.ts:48](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L48)

##### escape()

> **escape**(): `void`

Escape editing

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`escape`](../../../libs/drawing-map/drawing-backend.md#escape)

###### Defined in

[src/components/BingMap/drawing-backend.ts:34](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L34)

##### executeHandler()

> **executeHandler**(`type`): `void`

Execute a registered handler

###### Parameters

• **type**: `string`

Type of the handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`executeHandler`](../../../libs/drawing-map/drawing-backend.md#executehandler)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:132](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L132)

##### getClassificationInfo()

> **getClassificationInfo**(): [`ClassifiedComponentMeta`](../../../libs/drawing-map/drawing-backend.md#classifiedcomponentmeta)

Get the metadata of drawing components categorized by their classifications

###### Returns

[`ClassifiedComponentMeta`](../../../libs/drawing-map/drawing-backend.md#classifiedcomponentmeta)

An object containing arrays of metadata of drawing components categorized by their classifications
         Each classification is a key in the object, and the corresponding value is an array of metadata of components
         of that classification.

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getClassificationInfo`](../../../libs/drawing-map/drawing-backend.md#getclassificationinfo)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:442](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L442)

##### getClassifiedProxyComponents()

> **getClassifiedProxyComponents**(): `object`

Get the drawing components categorized by their classifications

###### Returns

`object`

An object containing arrays of drawing components categorized by their classifications
         Each classification is a key in the object, and the corresponding value is an array of components
         of that classification.

###### drafts

> **drafts**: ([`PolygonProxy`](../../../libs/drawing-map/components-proxies/polygon.md#polygonproxy) \| [`PolylineProxy`](../../../libs/drawing-map/components-proxies/polyline.md#polylineproxy) \| [`PushPinProxy`](../../../libs/drawing-map/components-proxies/pushpin.md#pushpinproxy))[]

The drafts of drawing components, which includes polygons, polylines and pushpins

###### routes

> **routes**: [`PolylineProxy`](../../../libs/drawing-map/components-proxies/polyline.md#polylineproxy)[]

The routes of drawing components

###### unknowns

> **unknowns**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

The unknowns of drawing components

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getClassifiedProxyComponents`](../../../libs/drawing-map/drawing-backend.md#getclassifiedproxycomponents)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:473](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L473)

##### getPrimitiveFromComponent()

> **getPrimitiveFromComponent**(`component`): `undefined` \| [`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive)

###### Parameters

• **component**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`undefined` \| [`IPrimitive`](../../../types/MicrosoftMaps/ConfigurationDrivenMaps/namespaces/Microsoft/namespaces/Maps/README.md#iprimitive)

###### Defined in

[src/components/BingMap/drawing-backend.ts:68](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L68)

##### getPrimitiveMeta()

> **getPrimitiveMeta**(`primitive`): [`ComponentMeta`](../../../libs/drawing-map/drawing-backend.md#componentmeta)

Get the metadata of a drawing component by its primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive of the component

###### Returns

[`ComponentMeta`](../../../libs/drawing-map/drawing-backend.md#componentmeta)

The metadata of the component

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getPrimitiveMeta`](../../../libs/drawing-map/drawing-backend.md#getprimitivemeta)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:412](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L412)

##### getShownComponentIDs()

> **getShownComponentIDs**(): `string`[]

###### Returns

`string`[]

###### Overrides

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getShownComponentIDs`](../../../libs/drawing-map/drawing-backend.md#getshowncomponentids)

###### Defined in

[src/components/BingMap/drawing-backend.ts:54](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L54)

##### getShownComponents()

> **getShownComponents**(): [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

Get the shown components

###### Returns

[`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

The shown components

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`getShownComponents`](../../../libs/drawing-map/drawing-backend.md#getshowncomponents)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:215](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L215)

##### hide()

> **hide**(`primitive`, `silent`?): `void`

Hide a primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to hide

• **silent?**: `boolean` = `false`

Whether to trigger the change handler
+

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`hide`](../../../libs/drawing-map/drawing-backend.md#hide)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:204](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L204)

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

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`hideByID`](../../../libs/drawing-map/drawing-backend.md#hidebyid)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:189](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L189)

##### initialiseBackend()

> **initialiseBackend**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Overrides

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`initialiseBackend`](../../../libs/drawing-map/drawing-backend.md#initialisebackend)

###### Defined in

[src/components/BingMap/drawing-backend.ts:25](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L25)

##### redo()

> **redo**(): `void`

Redo the last undone action.

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`redo`](../../../libs/drawing-map/drawing-backend.md#redo)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:361](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L361)

##### registerPrimitive()

> **registerPrimitive**(`primitive`, `className`?): `void`

Register a primitive with its classification

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to register

• **className?**: [`PrimitiveClassification`](../../../libs/drawing-map/drawing-backend.md#primitiveclassification)

The classification of the primitive. Default to "unknown" if not provided.

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`registerPrimitive`](../../../libs/drawing-map/drawing-backend.md#registerprimitive)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:432](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L432)

##### removeProxyPrimitiveFromMap()

> **removeProxyPrimitiveFromMap**(`component`): `void`

###### Parameters

• **component**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Overrides

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`removeProxyPrimitiveFromMap`](../../../libs/drawing-map/drawing-backend.md#removeproxyprimitivefrommap)

###### Defined in

[src/components/BingMap/drawing-backend.ts:63](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/components/BingMap/drawing-backend.ts#L63)

##### show()

> **show**(`primitive`, `silent`): `void`

Show a primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](../../../libs/drawing-map/components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to show

• **silent**: `boolean` = `false`

Whether to trigger the change handler

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`show`](../../../libs/drawing-map/drawing-backend.md#show)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:179](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L179)

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

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`showByID`](../../../libs/drawing-map/drawing-backend.md#showbyid)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:164](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L164)

##### undo()

> **undo**(): `void`

Undo the latest action.

###### Returns

`void`

###### Inherited from

[`DrawingMapBackend`](../../../libs/drawing-map/drawing-backend.md#drawingmapbackendhostmaptype).[`undo`](../../../libs/drawing-map/drawing-backend.md#undo)

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:323](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L323)

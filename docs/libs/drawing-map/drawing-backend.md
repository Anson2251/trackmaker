[**trackmaker**](../../README.md) • **Docs**

***

[trackmaker](../../modules.md) / libs/drawing-map/drawing-backend

# libs/drawing-map/drawing-backend

## References

### default

Renames and re-exports [DrawingMapBackend](drawing-backend.md#drawingmapbackendhostmaptype)

## Classes

### `abstract` DrawingMapBackend\<HostMapType\>

#### Extended by

- [`BingMapDrawingBackend`](../../components/BingMap/drawing-backend/README.md#bingmapdrawingbackend)

#### Type Parameters

• **HostMapType** *extends* [`MapBackend`](../map-backends/backend.md#mapbackendmaptypeoptiontypes)\<`any`, `any`\>

#### Constructors

##### new DrawingMapBackend()

> **new DrawingMapBackend**\<`HostMapType`\>(`hostMap`): [`DrawingMapBackend`](drawing-backend.md#drawingmapbackendhostmaptype)\<`HostMapType`\>

Constructor for the DrawingMapBackend class.

###### Parameters

• **hostMap**: `HostMapType`

The host map instance.

###### Returns

[`DrawingMapBackend`](drawing-backend.md#drawingmapbackendhostmaptype)\<`HostMapType`\>

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:90](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L90)

#### Properties

##### handlers

> **handlers**: `BackendHandlerType`\<`HostMapType`\>[] = `[]`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L76)

##### hostMap

> **hostMap**: `HostMapType`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:75](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L75)

##### id

> **id**: `undefined` \| `string`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:78](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L78)

##### name

> **name**: `undefined` \| `string`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:77](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L77)

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

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L143)

##### addProxyPrimitive()

> **addProxyPrimitive**(`primitive`, `className`?): `void`

Add a primitive to the proxy layer with a given className

###### Parameters

• **primitive**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to add

• **className?**: [`PrimitiveClassification`](drawing-backend.md#primitiveclassification) = `"unknown"`

The className of the primitive

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:224](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L224)

##### addProxyPrimitiveToMap()

> `abstract` **addProxyPrimitiveToMap**(`primitive`): `void`

###### Parameters

• **primitive**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:157](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L157)

##### clear()

> `abstract` **clear**(): `void`

Clear all components

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:391](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L391)

##### deleteProxyPrimitive()

> **deleteProxyPrimitive**(`primitive`, `silent`?): `void`

Delete a primitive from the proxy layer

###### Parameters

• **primitive**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to delete

• **silent?**: `boolean` = `false`

Whether to trigger the change handler

###### Returns

`void`

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

###### Throws

- If no corresponding primitive is found by the given ID

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:398](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L398)

##### editComponent()

> `abstract` **editComponent**(`component`): `void`

Go into edit mode for a specific component

###### Parameters

• **component**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:388](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L388)

##### escape()

> `abstract` **escape**(): `void`

Escape editing

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:383](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L383)

##### executeHandler()

> **executeHandler**(`type`): `void`

Execute a registered handler

###### Parameters

• **type**: `string`

Type of the handler

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:132](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L132)

##### getClassificationInfo()

> **getClassificationInfo**(): [`ClassifiedComponentMeta`](drawing-backend.md#classifiedcomponentmeta)

Get the metadata of drawing components categorized by their classifications

###### Returns

[`ClassifiedComponentMeta`](drawing-backend.md#classifiedcomponentmeta)

An object containing arrays of metadata of drawing components categorized by their classifications
         Each classification is a key in the object, and the corresponding value is an array of metadata of components
         of that classification.

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

> **drafts**: ([`PolygonProxy`](components-proxies/polygon.md#polygonproxy) \| [`PolylineProxy`](components-proxies/polyline.md#polylineproxy) \| [`PushPinProxy`](components-proxies/pushpin.md#pushpinproxy))[]

The drafts of drawing components, which includes polygons, polylines and pushpins

###### routes

> **routes**: [`PolylineProxy`](components-proxies/polyline.md#polylineproxy)[]

The routes of drawing components

###### unknowns

> **unknowns**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

The unknowns of drawing components

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:473](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L473)

##### getPrimitiveMeta()

> **getPrimitiveMeta**(`primitive`): [`ComponentMeta`](drawing-backend.md#componentmeta)

Get the metadata of a drawing component by its primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive of the component

###### Returns

[`ComponentMeta`](drawing-backend.md#componentmeta)

The metadata of the component

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:412](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L412)

##### getShownComponentIDs()

> `abstract` **getShownComponentIDs**(): `string`[]

###### Returns

`string`[]

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:209](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L209)

##### getShownComponents()

> **getShownComponents**(): [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

Get the shown components

###### Returns

[`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>[]

The shown components

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:215](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L215)

##### hide()

> **hide**(`primitive`, `silent`?): `void`

Hide a primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to hide

• **silent?**: `boolean` = `false`

Whether to trigger the change handler
+

###### Returns

`void`

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

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:189](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L189)

##### initialiseBackend()

> `abstract` **initialiseBackend**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L126)

##### redo()

> **redo**(): `void`

Redo the last undone action.

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:361](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L361)

##### registerPrimitive()

> **registerPrimitive**(`primitive`, `className`?): `void`

Register a primitive with its classification

###### Parameters

• **primitive**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to register

• **className?**: [`PrimitiveClassification`](drawing-backend.md#primitiveclassification)

The classification of the primitive. Default to "unknown" if not provided.

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:432](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L432)

##### removeProxyPrimitiveFromMap()

> `abstract` **removeProxyPrimitiveFromMap**(`primitive`): `void`

###### Parameters

• **primitive**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:155](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L155)

##### show()

> **show**(`primitive`, `silent`): `void`

Show a primitive

###### Parameters

• **primitive**: [`DrawingComponentProxy`](components-proxies/component.md#drawingcomponentproxyt)\<`ComponentProperties`\>

The primitive to show

• **silent**: `boolean` = `false`

Whether to trigger the change handler

###### Returns

`void`

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

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:164](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L164)

##### undo()

> **undo**(): `void`

Undo the latest action.

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:323](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L323)

## Interfaces

### ClassifiedComponentMeta

Interface that represents a classification of components.

It categorizes components into three categories: routes, drafts, and unknowns.
Each category is represented as an array of `ComponentMeta` objects.

#### Properties

##### drafts

> **drafts**: [`ComponentMeta`](drawing-backend.md#componentmeta)[]

An array of `ComponentMeta` objects representing the drafts.

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:31](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L31)

##### routes

> **routes**: [`ComponentMeta`](drawing-backend.md#componentmeta)[]

An array of `ComponentMeta` objects representing the routes.

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:27](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L27)

##### unknowns

> **unknowns**: [`ComponentMeta`](drawing-backend.md#componentmeta)[]

An array of `ComponentMeta` objects representing the unknown components.

###### Defined in

[src/libs/drawing-map/drawing-backend.ts:35](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L35)

## Type Aliases

### ComponentMeta

> **ComponentMeta**: `object`

Represents the metadata of a drawing component.

This type is used to describe the properties of a drawing component. It includes the unique identifier
of the component (`id`), the name of the component (`name`), the type of the component (`type`),
the properties of the component (`properties`), and the classification of the component (`className`).

#### Type declaration

##### className

> **className**: [`PrimitiveClassification`](drawing-backend.md#primitiveclassification)

The classification of the component.

The classification can be one of the following: "route", "draft", or "unknown".

##### id

> **id**: `string`

The unique identifier of the component.

##### name

> **name**: `string`

The name of the component.

##### properties

> **properties**: `Record`\<`string`, `string` \| `number` \| `boolean`\>

The properties of the component.

The properties are represented as a record where the keys are strings and the values can be
strings, numbers, or booleans.

##### type

> **type**: `string`

The type of the component.

#### Defined in

[src/libs/drawing-map/drawing-backend.ts:45](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L45)

***

### HistoryPiece

> **HistoryPiece**: `object`

#### Type declaration

##### data

> **data**: `any`

##### type

> **type**: `string`

#### Defined in

[src/libs/drawing-map/drawing-backend.ts:12](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L12)

***

### PrimitiveClassification

> **PrimitiveClassification**: `"route"` \| `"draft"` \| `"unknown"`

#### Defined in

[src/libs/drawing-map/drawing-backend.ts:14](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/libs/drawing-map/drawing-backend.ts#L14)

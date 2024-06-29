[**trackmaker**](../../README.md) • **Docs**

***

[trackmaker](../../modules.md) / libs/drawing-map/sketch-edit-adapter

# libs/drawing-map/sketch-edit-adapter

## References

### default

Renames and re-exports [SketchEditAdapter](sketch-edit-adapter.md#sketcheditadaptert)

## Classes

### SketchEditAdapter\<T\>

Adapter for the SketchEdit, allowing to use the drawing backend from the SketchEdit component

#### Type Parameters

• **T** *extends* [`MapBackend`](../map-backends/backend.md#mapbackendmaptypeoptiontypes)\<`any`, `any`\>

#### Constructors

##### new SketchEditAdapter()

> **new SketchEditAdapter**\<`T`\>(`backend`?): [`SketchEditAdapter`](sketch-edit-adapter.md#sketcheditadaptert)\<`T`\>

Constructor

###### Parameters

• **backend?**: [`DrawingMapBackend`](drawing-backend.md#drawingmapbackendhostmaptype)\<`T`\>

Backend instance

###### Returns

[`SketchEditAdapter`](sketch-edit-adapter.md#sketcheditadaptert)\<`T`\>

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:50](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L50)

#### Properties

##### sketchID

> **sketchID**: `undefined` \| `string`

ID of the sketch

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:39](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L39)

##### sketchName

> **sketchName**: `undefined` \| `string`

Name of the sketch

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:44](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L44)

#### Methods

##### addHandler()

> **addHandler**(`type`, `callback`): `void`

Add a handler

###### Parameters

• **type**: `string`

Type of the handler

• **callback**

Callback function

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:167](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L167)

##### clear()

> **clear**(): `void`

Clear all the primitives

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:131](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L131)

##### edit()

> **edit**(`id`): `void`

Edit a specific primitive

###### Parameters

• **id**: `string`

ID of the primitive

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:123](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L123)

##### escape()

> **escape**(): `void`

Escape the current state

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:114](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L114)

##### initialiseAdapter()

> **initialiseAdapter**(): `void`

Initialise the adapter

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:88](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L88)

##### load()

> **load**(`id`): `Promise`\<`undefined`\>

Load a sketch from the ID

###### Parameters

• **id**: `string`

ID of the sketch

###### Returns

`Promise`\<`undefined`\>

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:184](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L184)

##### redo()

> **redo**(): `void`

Redo the last action

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:96](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L96)

##### removeHandler()

> **removeHandler**(`id`): `void`

Remove a handler

###### Parameters

• **id**: `number`

ID of the handler

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:176](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L176)

##### save()

> **save**(): `Promise`\<`undefined`\>

Save the sketch

###### Returns

`Promise`\<`undefined`\>

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:215](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L215)

##### setBackend()

> **setBackend**(`backend`): `void`

Set the backend instance

###### Parameters

• **backend**: [`DrawingMapBackend`](drawing-backend.md#drawingmapbackendhostmaptype)\<`T`\>

Backend instance

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:60](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L60)

##### undo()

> **undo**(): `void`

Undo the last action

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:105](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/libs/drawing-map/sketch-edit-adapter.ts#L105)

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

[src/libs/drawing-map/sketch-edit-adapter.ts:52](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L52)

#### Properties

##### shortcutMounted

> **shortcutMounted**: `boolean` = `false`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:46](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L46)

##### sketchID

> **sketchID**: `undefined` \| `string`

ID of the sketch

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:39](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L39)

##### sketchName

> **sketchName**: `undefined` \| `string`

Name of the sketch

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:44](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L44)

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

[src/libs/drawing-map/sketch-edit-adapter.ts:171](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L171)

##### clear()

> **clear**(): `void`

Clear all the primitives

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:133](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L133)

##### edit()

> **edit**(`id`): `void`

Edit a specific primitive

###### Parameters

• **id**: `string`

ID of the primitive

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:125](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L125)

##### escape()

> **escape**(): `void`

Escape the current state

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:116](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L116)

##### initialiseAdapter()

> **initialiseAdapter**(): `void`

Initialise the adapter

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:90](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L90)

##### load()

> **load**(`id`): `Promise`\<`undefined`\>

Load a sketch from the ID

###### Parameters

• **id**: `string`

ID of the sketch

###### Returns

`Promise`\<`undefined`\>

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:188](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L188)

##### redo()

> **redo**(): `void`

Redo the last action

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:98](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L98)

##### removeHandler()

> **removeHandler**(`id`): `void`

Remove a handler

###### Parameters

• **id**: `number`

ID of the handler

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:180](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L180)

##### save()

> **save**(): `Promise`\<`undefined`\>

Save the sketch

###### Returns

`Promise`\<`undefined`\>

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:219](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L219)

##### setBackend()

> **setBackend**(`backend`): `void`

Set the backend instance

###### Parameters

• **backend**: [`DrawingMapBackend`](drawing-backend.md#drawingmapbackendhostmaptype)\<`T`\>

Backend instance

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:62](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L62)

##### undo()

> **undo**(): `void`

Undo the last action

###### Returns

`void`

###### Defined in

[src/libs/drawing-map/sketch-edit-adapter.ts:107](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/drawing-map/sketch-edit-adapter.ts#L107)

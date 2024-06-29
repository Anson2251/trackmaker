[**trackmaker**](../README.md) • **Docs**

***

[trackmaker](../modules.md) / utils/load-modules

# utils/load-modules

## Type Aliases

### moduleItem

> **moduleItem**: `object`

#### Type declaration

##### dependencies?

> `optional` **dependencies**: `string`[]

##### moduleInit()

> **moduleInit**: (`timeout`, ...`args`) => `Promise`\<`void`\>

###### Parameters

• **timeout**: `number`

• ...**args**: `any`

###### Returns

`Promise`\<`void`\>

##### name

> **name**: `string`

##### status?

> `optional` **status**: `"unloaded"` \| `"loading"` \| `"loaded"` \| `"error"`

#### Defined in

[src/utils/load-modules.ts:1](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/utils/load-modules.ts#L1)

## Variables

### messageFormat

> `const` **messageFormat**: `object`

#### Type declaration

##### alreadyLoaded()

> **alreadyLoaded**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### alreadyLoading()

> **alreadyLoading**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### dependenciesFailure()

> **dependenciesFailure**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### dependenciesReady()

> **dependenciesReady**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### error()

> **error**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### errorDetermined()

> **errorDetermined**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### loaded()

> **loaded**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### loading()

> **loading**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### missingDependencies()

> **missingDependencies**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

##### unloaded()

> **unloaded**: (...`args`) => `string`

###### Parameters

• ...**args**: `string`[]

###### Returns

`string`

#### Defined in

[src/utils/load-modules.ts:8](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/utils/load-modules.ts#L8)

## Functions

### loadModules()

> **loadModules**(`library`, `moduleName`, `timeout`?, `printLog`?): `Promise`\<`void`\>

Loads modules from the library based on the specified module name and its dependencies

#### Parameters

• **library**: [`moduleItem`](load-modules.md#moduleitem)[]

The library of modules to load from.

• **moduleName**: `string`

The name of the module to load.

• **timeout?**: `number` = `10000`

The timeout duration in milliseconds for loading the module.

• **printLog?**: `boolean` = `!(__RELEASE_MODE__)`

Flag to disable the information logs.

#### Returns

`Promise`\<`void`\>

A promise that resolves once the modules are loaded or rejects on errors.

#### Defined in

[src/utils/load-modules.ts:30](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/utils/load-modules.ts#L30)

***

### waitUntilModuleLoaded()

> **waitUntilModuleLoaded**(`library`, `moduleName`, `timeout`): `Promise`\<`void`\>

#### Parameters

• **library**: [`moduleItem`](load-modules.md#moduleitem)[]

• **moduleName**: `string`

• **timeout**: `number` = `10000`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utils/load-modules.ts:99](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/utils/load-modules.ts#L99)

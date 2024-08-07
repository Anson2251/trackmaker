[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / components/BingMap/plugins/lite-mode-hidpi

# components/BingMap/plugins/lite-mode-hidpi

## References

### default

Renames and re-exports [BingMapPlugin_LiteModeHiDPI](lite-mode-hidpi.md#bingmapplugin_litemodehidpi)

## Classes

### BingMapPlugin\_LiteModeHiDPI

#### Implements

- [`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype)\<[`BingMapBackend`](../../../libs/map-backends/bing-maps/bing-map-backend.md#bingmapbackend)\>

#### Constructors

##### new BingMapPlugin\_LiteModeHiDPI()

> **new BingMapPlugin\_LiteModeHiDPI**(`parentMap`): [`BingMapPlugin_LiteModeHiDPI`](lite-mode-hidpi.md#bingmapplugin_litemodehidpi)

###### Parameters

• **parentMap**: [`BingMapBackend`](../../../libs/map-backends/bing-maps/bing-map-backend.md#bingmapbackend)

###### Returns

[`BingMapPlugin_LiteModeHiDPI`](lite-mode-hidpi.md#bingmapplugin_litemodehidpi)

###### Defined in

[src/components/BingMap/plugins/lite-mode-hidpi.ts:10](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/lite-mode-hidpi.ts#L10)

#### Properties

##### containerID

> **containerID**: `string`

###### Defined in

[src/components/BingMap/plugins/lite-mode-hidpi.ts:8](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/lite-mode-hidpi.ts#L8)

##### host

> **host**: [`BingMapBackend`](../../../libs/map-backends/bing-maps/bing-map-backend.md#bingmapbackend)

host map

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`host`](../../../libs/map-backends/plugin.md#host)

###### Defined in

[src/components/BingMap/plugins/lite-mode-hidpi.ts:5](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/lite-mode-hidpi.ts#L5)

##### id

> **id**: `undefined` \| `string`

###### Defined in

[src/components/BingMap/plugins/lite-mode-hidpi.ts:7](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/lite-mode-hidpi.ts#L7)

##### previousScale

> **previousScale**: `number`

###### Defined in

[src/components/BingMap/plugins/lite-mode-hidpi.ts:9](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/lite-mode-hidpi.ts#L9)

##### space

> **space**: `string`

this space under the plugins where the plugin will mount

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`space`](../../../libs/map-backends/plugin.md#space)

###### Defined in

[src/components/BingMap/plugins/lite-mode-hidpi.ts:6](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/lite-mode-hidpi.ts#L6)

#### Methods

##### mount()

> **mount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`mount`](../../../libs/map-backends/plugin.md#mount)

###### Defined in

[src/components/BingMap/plugins/lite-mode-hidpi.ts:16](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/lite-mode-hidpi.ts#L16)

##### unmount()

> **unmount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`unmount`](../../../libs/map-backends/plugin.md#unmount)

###### Defined in

[src/components/BingMap/plugins/lite-mode-hidpi.ts:21](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/components/BingMap/plugins/lite-mode-hidpi.ts#L21)

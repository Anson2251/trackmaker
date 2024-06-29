[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / components/BingMap/plugins/customized-touchpad-behavior

# components/BingMap/plugins/customized-touchpad-behavior

## References

### default

Renames and re-exports [BingMapPlugin_CustomizedTouchpadBehavior](customized-touchpad-behavior.md#bingmapplugin_customizedtouchpadbehavior)

## Classes

### BingMapPlugin\_CustomizedTouchpadBehavior

#### Implements

- [`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype)\<[`BingMapBackend`](../bing-map-backend.md#bingmapbackend)\>

#### Constructors

##### new BingMapPlugin\_CustomizedTouchpadBehavior()

> **new BingMapPlugin\_CustomizedTouchpadBehavior**(`parentMap`): [`BingMapPlugin_CustomizedTouchpadBehavior`](customized-touchpad-behavior.md#bingmapplugin_customizedtouchpadbehavior)

###### Parameters

• **parentMap**: [`BingMapBackend`](../bing-map-backend.md#bingmapbackend)

###### Returns

[`BingMapPlugin_CustomizedTouchpadBehavior`](customized-touchpad-behavior.md#bingmapplugin_customizedtouchpadbehavior)

###### Defined in

[src/components/BingMap/plugins/customized-touchpad-behavior.ts:14](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/customized-touchpad-behavior.ts#L14)

#### Properties

##### behaviour

> **behaviour**: `undefined` \| (`e`) => `void`

###### Defined in

[src/components/BingMap/plugins/customized-touchpad-behavior.ts:13](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/customized-touchpad-behavior.ts#L13)

##### host

> **host**: [`BingMapBackend`](../bing-map-backend.md#bingmapbackend)

host map

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`host`](../../../libs/map-backends/plugin.md#host)

###### Defined in

[src/components/BingMap/plugins/customized-touchpad-behavior.ts:11](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/customized-touchpad-behavior.ts#L11)

##### space

> **space**: `string`

this space under the plugins where the plugin will mount

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`space`](../../../libs/map-backends/plugin.md#space)

###### Defined in

[src/components/BingMap/plugins/customized-touchpad-behavior.ts:12](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/customized-touchpad-behavior.ts#L12)

#### Methods

##### mount()

> **mount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`mount`](../../../libs/map-backends/plugin.md#mount)

###### Defined in

[src/components/BingMap/plugins/customized-touchpad-behavior.ts:19](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/customized-touchpad-behavior.ts#L19)

##### unmount()

> **unmount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`unmount`](../../../libs/map-backends/plugin.md#unmount)

###### Defined in

[src/components/BingMap/plugins/customized-touchpad-behavior.ts:27](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/customized-touchpad-behavior.ts#L27)

## Functions

### useCustomizedTouchpadBehavior()

> **useCustomizedTouchpadBehavior**(`map`, `onMove`): (`e`) => `void`

Attaches customized touchpad behavior to a specified container element.

#### Parameters

• **map**: [`BingMapBackend`](../bing-map-backend.md#bingmapbackend)

The bingMaps object representing the map.

• **onMove**

The callback function to be called when the map is moved.

#### Returns

`Function`

##### Parameters

• **e**: `WheelEvent`

##### Returns

`void`

#### Defined in

[src/components/BingMap/plugins/customized-touchpad-behavior.ts:40](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/customized-touchpad-behavior.ts#L40)

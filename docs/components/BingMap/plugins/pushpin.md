[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / components/BingMap/plugins/pushpin

# components/BingMap/plugins/pushpin

## References

### default

Renames and re-exports [BingMapPlugin_PushPins](pushpin.md#bingmapplugin_pushpins)

## Classes

### BingMapPlugin\_PushPins

#### Implements

- [`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype)\<[`BingMapBackend`](../bing-map-backend.md#bingmapbackend)\>

#### Constructors

##### new BingMapPlugin\_PushPins()

> **new BingMapPlugin\_PushPins**(`parentMap`): [`BingMapPlugin_PushPins`](pushpin.md#bingmapplugin_pushpins)

###### Parameters

• **parentMap**: [`BingMapBackend`](../bing-map-backend.md#bingmapbackend)

###### Returns

[`BingMapPlugin_PushPins`](pushpin.md#bingmapplugin_pushpins)

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:10](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L10)

#### Properties

##### host

> **host**: [`BingMapBackend`](../bing-map-backend.md#bingmapbackend)

host map

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`host`](../../../libs/map-backends/plugin.md#host)

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:7](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L7)

##### pushPins

> `readonly` **pushPins**: `object`[] = `[]`

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:9](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L9)

##### space

> **space**: `string` = `"pushPinLayer"`

this space under the plugins where the plugin will mount

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`space`](../../../libs/map-backends/plugin.md#space)

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:8](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L8)

#### Methods

##### add()

> **add**(`location`, `options`): `number`

###### Parameters

• **location**: `Location`

• **options**: `IPushpinOptions`

###### Returns

`number`

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:31](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L31)

##### mount()

> **mount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`mount`](../../../libs/map-backends/plugin.md#mount)

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:14](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L14)

##### remove()

> **remove**(`id`): `void`

###### Parameters

• **id**: `number`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:39](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L39)

##### setLocation()

> **setLocation**(`id`, `location`): `void`

###### Parameters

• **id**: `number`

• **location**: `Location`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:54](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L54)

##### setOptions()

> **setOptions**(`id`, `options`): `void`

###### Parameters

• **id**: `number`

• **options**: `IPushpinOptions`

###### Returns

`void`

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:47](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L47)

##### unmount()

> **unmount**(): `boolean`

###### Returns

`boolean`

###### Implementation of

[`MapPlugin`](../../../libs/map-backends/plugin.md#mappluginhostmaptype).[`unmount`](../../../libs/map-backends/plugin.md#unmount)

###### Defined in

[src/components/BingMap/plugins/pushpin.ts:19](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/components/BingMap/plugins/pushpin.ts#L19)

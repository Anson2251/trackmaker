[**trackmaker**](../../README.md) • **Docs**

***

[trackmaker](../../modules.md) / libs/map-backends/plugin

# libs/map-backends/plugin

## Interfaces

### MapPlugin\<HostMapType\>

#### Type Parameters

• **HostMapType**

#### Properties

##### host

> **host**: `HostMapType`

host map

###### Defined in

[src/libs/map-backends/plugin.ts:7](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/plugin.ts#L7)

##### space

> **space**: `string`

this space under the plugins where the plugin will mount

###### Defined in

[src/libs/map-backends/plugin.ts:9](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/plugin.ts#L9)

#### Methods

##### mount()

> **mount**(): `boolean`

###### Returns

`boolean`

###### Defined in

[src/libs/map-backends/plugin.ts:10](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/plugin.ts#L10)

##### unmount()

> **unmount**(): `boolean`

###### Returns

`boolean`

###### Defined in

[src/libs/map-backends/plugin.ts:11](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/plugin.ts#L11)

***

### MapPluginConstructor\<HostMapType\>

#### Type Parameters

• **HostMapType**

#### Constructors

##### new MapPluginConstructor()

> **new MapPluginConstructor**(`host`): [`MapPlugin`](plugin.md#mappluginhostmaptype)\<`HostMapType`\>

###### Parameters

• **host**: `HostMapType`

###### Returns

[`MapPlugin`](plugin.md#mappluginhostmaptype)\<`HostMapType`\>

###### Defined in

[src/libs/map-backends/plugin.ts:2](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/libs/map-backends/plugin.ts#L2)

[**trackmaker**](../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../README.md) / [Microsoft](../../../README.md) / [Maps](../README.md) / Traffic

# Traffic

Adds a traffic incident and flow data to the map.

## Requires

The Microsoft.Maps.Traffic module.

## Classes

### TrafficManager

The TrafficManager class provides the ability to show traffic flow and incident data on top of the map. When creating an
instance of the TrafficManager class the map must be passed as an argument to the constructor.

#### Requires

The Microsoft.Maps.Traffic module.

#### Constructors

##### new TrafficManager()

> **new TrafficManager**(`map`): [`TrafficManager`](Traffic.md#trafficmanager)

###### Parameters

• **map**: [`Map`](../README.md#map-2)

A map instnce to attach the traffic manager to.

###### Returns

[`TrafficManager`](Traffic.md#trafficmanager)

###### Requires

The Microsoft.Maps.Traffic module.

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:61](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L61)

#### Methods

##### hide()

> **hide**(): `void`

Hides all traffic data.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:64](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L64)

##### hideFlow()

> **hideFlow**(): `void`

Hides the traffic flow layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:67](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L67)

##### hideIncidents()

> **hideIncidents**(): `void`

Hides all traffic incidents.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:70](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L70)

##### hideLegend()

> **hideLegend**(): `void`

Hides the traffic legend.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:73](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L73)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options for the traffic manager.

###### Parameters

• **options**: [`ITrafficOptions`](Traffic.md#itrafficoptions)

The options for the traffic manager.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:79](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L79)

##### show()

> **show**(): `void`

Displays all traffic data.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:82](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L82)

##### showFlow()

> **showFlow**(): `void`

Displays the traffic flow layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:85](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L85)

##### showIncidents()

> **showIncidents**(): `void`

Displays all traffic incidents.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:88](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L88)

##### showLegend()

> **showLegend**(): `void`

Displays the traffic legend.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:91](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L91)

## Interfaces

### ITrafficOptions

Options that can be customized in the Traffic manager.

#### Properties

##### flowVisible?

> `optional` **flowVisible**: `boolean`

Displays the traffic flow layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:35](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L35)

##### incidentsVisible?

> `optional` **incidentsVisible**: `boolean`

Displays all traffic incidents.

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:38](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L38)

##### legendVisible?

> `optional` **legendVisible**: `boolean`

Displays the traffic legend.

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:41](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L41)

##### opacity?

> `optional` **opacity**: `number`

Sets the opacity of the traffic flow tile layer. Must be a number between 0 and 1. The default is 1 unless the map
mode is set to lite, in which case the default is set to 0.7.

###### Defined in

[src/types/MicrosoftMaps/Modules/Traffic.d.ts:47](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Traffic.d.ts#L47)

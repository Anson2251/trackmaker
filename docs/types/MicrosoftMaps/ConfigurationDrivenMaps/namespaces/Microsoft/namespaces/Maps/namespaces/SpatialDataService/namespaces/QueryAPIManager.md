[**trackmaker**](../../../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../../../README.md) / [Microsoft](../../../../../README.md) / [Maps](../../../README.md) / [SpatialDataService](../README.md) / QueryAPIManager

# QueryAPIManager

This is a static class that provides that ability to query data sources that are hosted by the Bing Spatial Data Services using the Query API.

## Requires

The Microsoft.Maps.SpatialDataService module.

## Functions

### search()

> **search**(`queryOptions`, `credentials`, `callback`, `styles`?, `errorCallback`?): `void`

Perform a search

#### Parameters

• **queryOptions**: [`IQueryAPIOptions`](../README.md#iqueryapioptions)

Options for the query

• **credentials**: `string` \| [`Map`](../../../README.md#map-2)

Credentials for the query

• **callback**

The function to call once the results are retrieved

• **styles?**: [`IStylesOptions`](../../../README.md#istylesoptions)

(Optional) Styles of the data that needs to be rendered on map

• **errorCallback?**

#### Returns

`void`

#### Requires

The Microsoft.Maps.SpatialDataService module.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:471](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L471)

[**trackmaker**](../../../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../../../README.md) / [Microsoft](../../../../../README.md) / [Maps](../../../README.md) / [SpatialDataService](../README.md) / GeoDataAPIManager

# GeoDataAPIManager

This is a static class that provides the ability to request polygons that describe the boundaries of a geographic entities, such as an AdminDivision1
(such as a state or province) or a Postcode1 (such as a zip code) that contain a given point (latitude and longitude) or address. This uses the GeoData
API in the Bing Spatial Data Services.

## Requires

The Microsoft.Maps.SpatialDataService module.

## Functions

### getBoundary()

> **getBoundary**(`locations`, `request`, `credentials`, `callback`, `styles`?, `errorCallback`?): `void`

Gets a boundary for the specified request. If the specified location value is a string, it will be geocoded and the coordinates of the result will
be used to find a boundary of the specified entityType that intersects with this coordinate.

#### Parameters

• **locations**: `string` \| [`Location`](../../../README.md#location) \| (`string` \| [`Location`](../../../README.md#location))[]

The locations to retrieve boundaries for. If the specified location value is a string, it will be geocoded and the coordinates of
the result will be used to find a boundary of the specified entityType that intersects with this coordinate.

• **request**: [`IGetBoundaryRequestOptions`](../README.md#igetboundaryrequestoptions)

The request options for retrieving a boundary.

• **credentials**: `string` \| [`Map`](../../../README.md#map-2)

A bing maps key or a map instance which can be used to provide credentials to access the data source. Note that the map will need
to be loaded with a bing maps key that has access to the data source.

• **callback**

A callback function to return the results to. If an array of locations are specified the callback function will be triggered for each location in the array.

• **styles?**: [`IPolygonOptions`](../../../README.md#ipolygonoptions)

The polygon styling settings to apply to the boundary polygon.

• **errorCallback?**

A callback function to trigger when an error occurs when searching for a boundary.

#### Returns

`void`

#### Requires

The Microsoft.Maps.SpatialDataService module.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:209](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L209)

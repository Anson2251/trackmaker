[**trackmaker**](../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../README.md) / [Microsoft](../../../README.md) / [Maps](../README.md) / Search

# Search

Provides an easy method for geocoding address and searching for points of interest from JavaScript.

## Requires

The Microsoft.Maps.Search module.

## Enumerations

### MatchCode

Defines the geocoding level of the location match found by the geocoder.

#### Requires

The Microsoft.Maps.Search module.

#### Enumeration Members

##### ambiguous

> **ambiguous**: `number`

The match was ambiguous. Multiple results were returned.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:45](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L45)

##### good

> **good**: `number`

The match was good.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:42](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L42)

##### modified

> **modified**: `number`

The match was found, but possibly using a modified query.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:51](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L51)

##### none

> **none**: `number`

No match was found.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:39](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L39)

##### upHierarchy

> **upHierarchy**: `number`

The match was found by a broader search.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:48](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L48)

***

### MatchConfidence

Defines the confidence of the location match found by the geocoding service.

#### Requires

The Microsoft.Maps.Search module.

#### Enumeration Members

##### high

> **high**: `number`

The confidence of the match is high.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:60](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L60)

##### low

> **low**: `number`

The confidence of the match is low.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:66](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L66)

##### medium

> **medium**: `number`

The confidence of the match is medium.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:63](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L63)

##### unknown

> **unknown**: `number`

The confidence of the match is unknown.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:69](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L69)

## Classes

### SearchManager

A class that contains methods for returning search and location results.

#### Requires

The Microsoft.Maps.Search module.

#### Constructors

##### new SearchManager()

> **new SearchManager**(`map`): [`SearchManager`](Search.md#searchmanager)

###### Parameters

• **map**: [`Map`](../README.md#map-2)

A Map object

###### Returns

[`SearchManager`](Search.md#searchmanager)

###### Requires

The Microsoft.Maps.Search module.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:223](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L223)

#### Methods

##### geocode()

> **geocode**(`request`): `void`

Matches the address or place query in the specified request 
options to a location and returns the results to the request 
options callback function.

###### Parameters

• **request**: [`IGeocodeRequestOptions`](Search.md#igeocoderequestoptions)

Options for sending geocode request

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:231](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L231)

##### reverseGeocode()

> **reverseGeocode**(`request`): `void`

Matches the specified location to an address and returns the 
address results to the specified request options callback function.

###### Parameters

• **request**: [`ReverseGeocodeRequestOptions`](Search.md#reversegeocoderequestoptions)

Options for sending reverse geocode request

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:238](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L238)

## Interfaces

### IGeocodeLocation

An object that represents a geocoded location.

#### Properties

##### latitude

> **latitude**: `number`

The latitude of the location.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:75](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L75)

##### longitude

> **longitude**: `number`

The longitude of the location.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:78](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L78)

##### name

> **name**: `string`

The name of this geocode location match.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:81](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L81)

##### precision

> **precision**: `string`

The precision of this geocode location match. 
Possible Values: Interpolated, InterpolatedOffset, Rooftop, Parcel

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:87](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L87)

***

### IGeocodeRequestOptions

The options for a geocode request.

#### Properties

##### bounds?

> `optional` **bounds**: [`LocationRect`](../README.md#locationrect)

A location rectangle that defines the boundaries of the area in which to search for 
location results. The default is the bounds of the map view associated with this 
instance of the SearchManager, which is usually the current map view.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:130](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L130)

##### callback()

> **callback**: (`geocodeResult`, `userData`) => `void`

The name of the function to call when a successful result is returned from the 
geocode request. The callback function must accept two parameters: result, which is 
a GeocodeResult type, and a userData object.

###### Parameters

• **geocodeResult**: [`IGeocodeResult`](Search.md#igeocoderesult)

• **userData**: `any`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:137](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L137)

##### count?

> `optional` **count**: `number`

The maximum number of results to return. Required. The maximum number than can be returned is 20.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:140](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L140)

##### errorCallback()?

> `optional` **errorCallback**: (`geocodeRequestOptions`) => `void`

The name of the function to call when the request is returned with an error. The 
error callback function must accept an IGeocodeRequestOptions object.

###### Parameters

• **geocodeRequestOptions**: [`IGeocodeRequestOptions`](Search.md#igeocoderequestoptions)

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:146](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L146)

##### includeCountryIso2?

> `optional` **includeCountryIso2**: `boolean`

Specifies to include the two-letter ISO country code.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:149](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L149)

##### includeNeighborhood?

> `optional` **includeNeighborhood**: `boolean`

Specifies to include the neighborhood in the response when it is available.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:152](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L152)

##### timeout?

> `optional` **timeout**: `number`

A number indicating how long to wait, in seconds, for the geocode request to return. The default value is 5 seconds.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:155](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L155)

##### userData?

> `optional` **userData**: `any`

An object containing any data that needs to be passed to the callback when the request is completed.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:158](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L158)

##### where

> **where**: `string`

A string containing the address or place to be matched to a location on the map.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:161](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L161)

***

### IGeocodeResult

An object that represents a geocode result returned by REST service.

#### Properties

##### results

> **results**: [`IPlaceResult`](Search.md#iplaceresult)[]

An array of geocode results.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:120](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L120)

***

### IPlaceResult

An object that represents an place result.

#### Properties

##### address

> **address**: [`IAddress`](../README.md#iaddress)

The geocoded address of the place result.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:93](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L93)

##### bestView

> **bestView**: [`LocationRect`](../README.md#locationrect)

The location rectangle that defines the boundaries of the best map view of the place result.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:96](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L96)

##### entityType

> **entityType**: `string`

The classification of the geographic entity returned, such as PopulatedPlace.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:99](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L99)

##### location

> **location**: [`Location`](../README.md#location)

The geocoded location of the best result.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:102](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L102)

##### locations

> **locations**: [`IGeocodeLocation`](Search.md#igeocodelocation)[]

The geocoded locations.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:105](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L105)

##### matchCode

> **matchCode**: `string` \| [`MatchCode`](Search.md#matchcode)

The match code of the best result.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:108](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L108)

##### matchConfidence

> **matchConfidence**: `string` \| [`MatchConfidence`](Search.md#matchconfidence)

The match confidence of the best result.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:111](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L111)

##### name

> **name**: `string`

The name of the place result, if one exists.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:114](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L114)

***

### ReverseGeocodeRequestOptions

The options for a reverse geocode request.

#### Properties

##### callback()

> **callback**: (`placeResult`, `userData`) => `void`

A reference to a function to call when a successful result is returned from the geocode request. The callback function
will receive a PlaceResult object as an argument.

###### Parameters

• **placeResult**: [`IPlaceResult`](Search.md#iplaceresult)

• **userData**: `any`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:170](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L170)

##### errorCallback()?

> `optional` **errorCallback**: (`reverseGeocodeRequestOptions`) => `void`

A reference to a function to call when the request is returned with an error. The error callback function will receive
an object containing the geocode request options used in the request.

###### Parameters

• **reverseGeocodeRequestOptions**: [`ReverseGeocodeRequestOptions`](Search.md#reversegeocoderequestoptions)

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:176](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L176)

##### includeCountryIso2?

> `optional` **includeCountryIso2**: `boolean`

Specifies to include the two-letter ISO country code. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:179](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L179)

##### includeEntityTypes?

> `optional` **includeEntityTypes**: `string`[]

An array of entity types selected from the following options.
• Address
• Neighborhood
• PopulatedPlace
• Postcode1
• AdminDivision1
• AdminDivision2
• CountryRegion
These entity types are ordered from the most specific entity to the least specific entity. When entities of more than one entity type are found, only the most specific
entity is returned. For example, if you specify Address and AdminDistrict1 as entity types and entities were found for both types, only the Address entity information is
returned in the response. One exception to this rule is when both PopulatedPlace and Neighborhood entity types are specified and information is found for both. In this case,
the information for both entity types is returned. Also, more than one Neighborhood may be returned because the area covered by two different neighborhoods can overlap.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:195](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L195)

##### includeNeighborhood?

> `optional` **includeNeighborhood**: `boolean`

Specifies to include the neighborhood in the response when it is available. Note: This feature isn’t
available in all locations.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:201](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L201)

##### location

> **location**: [`Location`](../README.md#location)

The location to use to match to geographic entities and addresses.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:204](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L204)

##### timeout?

> `optional` **timeout**: `number`

A number indicating how long to wait, in seconds, for the reverse geocode request to  return. The default value is 5 seconds.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:207](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L207)

##### userData?

> `optional` **userData**: `any`

An object containing any data that needs to be passed to the callback when the request is completed.

###### Defined in

[src/types/MicrosoftMaps/Modules/Search.d.ts:210](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Search.d.ts#L210)

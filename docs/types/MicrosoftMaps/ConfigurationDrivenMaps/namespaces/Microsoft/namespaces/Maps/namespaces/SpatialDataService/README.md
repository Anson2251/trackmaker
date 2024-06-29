[**trackmaker**](../../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../../README.md) / [Microsoft](../../../../README.md) / [Maps](../../README.md) / SpatialDataService

# SpatialDataService

This module wraps the Query and GeoData REST API’s in the Bing Spatial Dara Services and expose them as an easy to use JavaScript library.

## Requires

The Microsoft.Maps.SpatialDataService module.

## Index

### Namespaces

- [GeoDataAPIManager](namespaces/GeoDataAPIManager.md)
- [QueryAPIManager](namespaces/QueryAPIManager.md)

## Enumerations

### FilterCompareOperator

An enumeration that defines how to compare the filters value against the corresponding property value.

#### Requires

The Microsoft.Maps.SpatialDataService module.

#### Enumeration Members

##### endsWith

> **endsWith**: `number`

Determines if a string value ends with a specified string value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:228](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L228)

##### equals

> **equals**: `number`

Determines if two values are equal.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:231](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L231)

##### greaterThan

> **greaterThan**: `number`

Determines if a first value is greater than a second value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:234](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L234)

##### greaterThanOrEqual

> **greaterThanOrEqual**: `number`

Determines if a first value is greater than or equal to a second value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:237](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L237)

##### isIn

> **isIn**: `number`

Determines if a value is within an array.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:240](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L240)

##### lessThan

> **lessThan**: `number`

Determines if a first value is less than a second value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:243](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L243)

##### lessThanOrEqual

> **lessThanOrEqual**: `number`

Determines if a first value is less than or equal a second value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:246](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L246)

##### notEndsWith

> **notEndsWith**: `number`

Determines if a string value does not end with a specified string value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:249](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L249)

##### notEquals

> **notEquals**: `number`

Determines if two values are not equal.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:252](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L252)

##### notStartsWith

> **notStartsWith**: `number`

Determines if a string value does not start with a specified string value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:255](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L255)

##### startsWith

> **startsWith**: `number`

Determines if a string value starts with a specified string value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:258](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L258)

***

### FilterLogicalOperator

An enumeration that defines how two or more filters are linked together.

#### Requires

The Microsoft.Maps.SpatialDataService module.

#### Enumeration Members

##### and

> **and**: `number`

Connects two or more filters that both must be true.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:267](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L267)

##### or

> **or**: `number`

Connects two or more filters where one of them must be true.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:270](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L270)

## Classes

### Filter

The Fitler class defines the logic behind a filter expression that can be executed against a JSON object or generate
a filter string that can be used with the Bing Spatial Data Services.

#### Requires

The Microsoft.Maps.SpatialDataService module.

#### Implements

- [`IFilter`](README.md#ifilter)

#### Constructors

##### new Filter()

> **new Filter**(`propertyName`, `operator`, `value`): [`Filter`](README.md#filter)

###### Parameters

• **propertyName**: `string`

The name of the property in the object to test against. Can also provide child properties i.e. 'root.child'.

• **operator**: `string` \| [`FilterCompareOperator`](README.md#filtercompareoperator)

The operator to use when comparing the specified property to value to the provided value.

• **value**: `any`

A value to compare against.

###### Returns

[`Filter`](README.md#filter)

###### Requires

The Microsoft.Maps.SpatialDataService module.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:304](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L304)

#### Methods

##### execute()

> **execute**(`object`): `boolean`

Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.

###### Parameters

• **object**: `any`

###### Returns

`boolean`

A boolean indicating if the specified object meets the requirements of the Filter.

###### Implementation of

[`IFilter`](README.md#ifilter).[`execute`](README.md#execute-2)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:310](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L310)

##### toString()

> **toString**(): `string`

Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.

###### Returns

`string`

A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.

###### Implementation of

[`IFilter`](README.md#ifilter).[`toString`](README.md#tostring-2)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:316](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L316)

***

### FilterGroup

A class that groups two or more logical filters or filter groups together. It can be executed against a JSON or generate
a filter string that can be used with the Bing Spatial Data Services.

#### Requires

The Microsoft.Maps.SpatialDataService module.

#### Implements

- [`IFilter`](README.md#ifilter)

#### Constructors

##### new FilterGroup()

> **new FilterGroup**(`filters`, `operator`, `not`?): [`FilterGroup`](README.md#filtergroup)

###### Parameters

• **filters**: [`IFilter`](README.md#ifilter)[]

An array consisting of Filter or FilterGroup objects to combine.

• **operator**: [`FilterLogicalOperator`](README.md#filterlogicaloperator)

The logical operator for combining the filters together.

• **not?**: `boolean`

A boolean is the logical inverse should of the filter should be used.

###### Returns

[`FilterGroup`](README.md#filtergroup)

###### Requires

The Microsoft.Maps.SpatialDataService module.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:332](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L332)

#### Methods

##### execute()

> **execute**(`object`): `boolean`

Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.

###### Parameters

• **object**: `any`

###### Returns

`boolean`

A boolean indicating if the specified object meets the requirements of the Filter.

###### Implementation of

[`IFilter`](README.md#ifilter).[`execute`](README.md#execute-2)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:338](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L338)

##### toString()

> **toString**(): `string`

Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.

###### Returns

`string`

A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.

###### Implementation of

[`IFilter`](README.md#ifilter).[`toString`](README.md#tostring-2)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:344](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L344)

## Interfaces

### ICopyright

Represents the copyright object for a boundary returned by the GeoData API.

#### Properties

##### CopyrightURL

> **CopyrightURL**: `string`

The copyright URL for the GeoData service.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:114](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L114)

##### Sources

> **Sources**: [`ICopyrightSource`](README.md#icopyrightsource)[]

A collection of CopyrightSource objects that give information about the sources of the polygon data that is returned.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:117](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L117)

***

### ICopyrightSource

Represents the copyright source object for a boundary returned by the GeoData API.

#### Properties

##### Copyright

> **Copyright**: `string`

The copyright string from the source.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:102](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L102)

##### SourceID

> **SourceID**: `string`

An ID identifying the data provider that supplied the data.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:105](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L105)

##### SourceName

> **SourceName**: `string`

The name of the data provider represented by this Source element.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:108](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L108)

***

### IFilter

A Fitler object that defines the logic behind a filter expression that can be executed against a JSON object or generate
a filter string that can be used with the Bing Spatial Data Services.

#### Methods

##### execute()

> **execute**(`object`): `boolean`

Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.

###### Parameters

• **object**: `any`

###### Returns

`boolean`

A boolean indicating if the specified object meets the requirements of the Filter.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:282](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L282)

##### toString()

> **toString**(): `string`

Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.

###### Returns

`string`

A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:288](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L288)

***

### IFindNearRouteOptions

Options for find near route query API.

#### Extends

- [`ISpatialFilterOptions`](README.md#ispatialfilteroptions)

#### Properties

##### avoid?

> `optional` **avoid**: `string`[]

A list of values that limit the use of highways and toll roads in the route.
Use one of the following values:
• highways - Avoids the use of highways in the route.
• tolls - Avoids the use of toll roads in the route.
• minimizeHighways - Minimizes (tries to avoid) the use of highways in the route.
• minimizeTolls - Minimizes (tries to avoid) the use of toll roads in the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:408](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L408)

##### distanceBeforeFirstTurn?

> `optional` **distanceBeforeFirstTurn**: `number`

An integer distance specified in meters.
Use this parameter to make sure that the moving vehicle has enough distance 
to make the first turn

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:398](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L398)

##### end?

> `optional` **end**: `string` \| [`Location`](../../README.md#location)

End location of the route (only for nearroute filter).

###### Inherited from

[`ISpatialFilterOptions`](README.md#ispatialfilteroptions).[`end`](README.md#end-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:371](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L371)

##### heading?

> `optional` **heading**: `number`

An integer value between 0 and 359 that represents degrees from north 
where north is 0 degrees and the heading is specified clockwise from north. 
For example, setting the heading of 270 degrees creates a route that initially heads west

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:391](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L391)

##### intersects?

> `optional` **intersects**: `string` \| [`IPrimitive`](../../README.md#iprimitive) \| [`LocationRect`](../../README.md#locationrect)

Intersection object. Can be a well known text string or a LocationRect object (only for intersects filter).

###### Inherited from

[`ISpatialFilterOptions`](README.md#ispatialfilteroptions).[`intersects`](README.md#intersects-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:374](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L374)

##### location?

> `optional` **location**: `string` \| [`Location`](../../README.md#location)

Location at which the filter should be applied (only for nearby filter).

###### Inherited from

[`ISpatialFilterOptions`](README.md#ispatialfilteroptions).[`location`](README.md#location-2)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:359](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L359)

##### optimize?

> `optional` **optimize**: `string`

One of the following values:
• distance - The route is calculated to minimize the distance.Traffic information is not used.
• time[default] - The route is calculated to minimize the time.Traffic information is not used.
• timeWithTraffic - The route is calculated to minimize the time and uses current traffic information.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:416](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L416)

##### radius?

> `optional` **radius**: `number`

Radius to use when performing a nearby search. The distance in kilometers and must be between 0.16 and 1000 kilometers
(only for nearby filter).

###### Inherited from

[`ISpatialFilterOptions`](README.md#ispatialfilteroptions).[`radius`](README.md#radius-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:365](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L365)

##### spatialFilterType

> **spatialFilterType**: `string`

One of the following values:
• nearby – Searches in a radius around a location.
• nearRoute – Searches for results that are within 1 mile of a route.
• intersects – Searches for results that intersect with the specified geometry.
Note: Note that the NavteqNA and NavteqEU data sources only support nearby queries.

###### Inherited from

[`ISpatialFilterOptions`](README.md#ispatialfilteroptions).[`spatialFilterType`](README.md#spatialfiltertype-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:356](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L356)

##### start?

> `optional` **start**: `string` \| [`Location`](../../README.md#location)

Start location of the route (only for nearroute filter).

###### Inherited from

[`ISpatialFilterOptions`](README.md#ispatialfilteroptions).[`start`](README.md#start-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:368](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L368)

##### travelMode?

> `optional` **travelMode**: `string`

One of the following values:
 • Driving [default]
 • Walking

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:384](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L384)

***

### IGeoDataPrimitive

Represents the primitive object for a boundary returned by the GeoData API.

#### Properties

##### NumPoints

> **NumPoints**: `string`

The number of vertex points used to define the polygon.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:90](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L90)

##### PrimitiveID

> **PrimitiveID**: `string`

A unique ID associated with this polygon primitive.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:81](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L81)

##### Shape

> **Shape**: `string`

A comma-delimited sequence starting with the version number of the polygon set followed by a list of compressed polygon
 * "rings" (closed paths represented by sequences of latitude and-longitude points).

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:87](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L87)

##### SourceID

> **SourceID**: `string`

An ID identifying the data provider that supplied the data. This ID number will reference one of the sources listed in the
array of CopyrightSources in the Copyright property of the GeoDataResultSet object.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:96](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L96)

***

### IGeoDataResult

Represents a single result object returned by the GeoData API.

#### Properties

##### Copyright

> **Copyright**: [`ICopyright`](README.md#icopyright)

Copyright information for the returned boundary data.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:156](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L156)

##### EntityID

> **EntityID**: `string`

A unique ID number associated with this entity.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:159](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L159)

##### EntityMetadata

> **EntityMetadata**: [`IMetadata`](README.md#imetadata)

A collection of metadata information associated with the entity. The getEntityMetadata option of the request must be set
to true. Note, not all boundaries will return this metadata.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:165](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L165)

##### Name

> **Name**: [`IName`](README.md#iname)

Information about the name of the boundary location.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:168](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L168)

##### Polygons

> **Polygons**: [`Polygon`](../../README.md#polygon)[]

A Polygon object that has been generated from the data in the Primitives property.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:171](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L171)

##### Primitives

> **Primitives**: [`IGeoDataPrimitive`](README.md#igeodataprimitive)[]

An array of objects that contain the polygon information for the boundary.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:174](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L174)

***

### IGeoDataResultSet

Represents the set of results returned by the GeoData API.

#### Properties

##### Copyright

> **Copyright**: `string`

Copyright information for the GeoData API.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:180](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L180)

##### location

> **location**: `string` \| [`Location`](../../README.md#location)

The location provided in the query that generated this result.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:183](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L183)

##### results

> **results**: [`IGeoDataResult`](README.md#igeodataresult)[]

Results of the boundary data.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:186](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L186)

***

### IGetBoundaryRequestOptions

Represents the options for requests boundary data from the GeoData API in the Bing Spatial Data Services.

#### Properties

##### culture?

> `optional` **culture**: `string`

Specifies the preferred language to use for any metadata text about the entity or polygons. Defaults to the culture used by the map control, which
usually automatically detected based on user's browser settings. Setting this property will override the default value.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:57](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L57)

##### entityType?

> `optional` **entityType**: `string`

The entity type to return. Default: CountryRegion
Supported entity types:
AdminDivision1, AdminDivision2, CountryRegion, eighborhood, PopulatedPlace, Postcode1, Postcode2, Postcode3, Postcode4
Note: Not all entity types are available in all areas.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:51](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L51)

##### getAllPolygons?

> `optional` **getAllPolygons**: `boolean`

Specifies whether the response should include all of the boundary polygons for the requested entity or just return a single polygon that represents
the main outline of the entity. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:63](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L63)

##### getEntityMetadata?

> `optional` **getEntityMetadata**: `boolean`

Specifies whether the response should include metadata about the entity, such as AreaSqKm and others. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:68](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L68)

##### lod?

> `optional` **lod**: `number`

The level of detail for the boundary polygons returned. An integer between 0 and 3, where 0 specifies the coarsest level of boundary detail and 3
specifies the best. Default: 0

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:43](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L43)

##### userRegion?

> `optional` **userRegion**: `string`

Specifies the user’s home country or region.Defaults to the region setting of the user who loads the map.
Warning: Setting this property will override the default value, which is the region the user is actually in, and will allow the user to see boundaries
which may not align with the views of their region.This could result in geopolitically sensitive borders being returned.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:75](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L75)

***

### IMetadata

Represents the metadata object for a boundary returned by the GeoData API. Not all properties will be returned for all results.

#### Properties

##### AreaSqKm

> **AreaSqKm**: `string`

The approximate total surface area (in square kilometers) covered by all the polygons that comprise this entity.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:135](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L135)

##### BestMapViewBox

> **BestMapViewBox**: `string`

An area on the Earth that provides the best map view for this entity. This area is defined as a bounding box in the format of a
“MULTIPOINT ((WestLongitude SouthLatitude), (EastLongitude NorthLatitude))”.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:141](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L141)

##### OfficialCulture

> **OfficialCulture**: `string`

The culture associated with this entity. Example: en

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:144](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L144)

##### PopulationClass

> **PopulationClass**: `string`

The approximate population within this entity. Example: PopClass20000to99999

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:147](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L147)

##### RegionalCulture

> **RegionalCulture**: `string`

The regional culture associated with this entity.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:150](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L150)

***

### IName

Represents the name object for a boundary returned by the GeoData API.

#### Properties

##### Culture

> **Culture**: `string`

The culture of the region.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L126)

##### EntityName

> **EntityName**: `string`

The name of boundary. Example: "United States"

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:123](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L123)

##### SourceID

> **SourceID**: `string`

An ID identifying the data provider that supplied the data.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:129](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L129)

***

### IQueryAPIOptions

Set of options that can be specified for query APIs.

#### Properties

##### filter?

> `optional` **filter**: `string` \| [`IFilter`](README.md#ifilter)

Specifies a conditional expression for a list of properties and values.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:425](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L425)

##### inlineCount?

> `optional` **inlineCount**: `boolean`

Specifies whether or not to return a count of the results in the response. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:428](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L428)

##### isStaging?

> `optional` **isStaging**: `boolean`

Specifies to query the staged version of the data source instead of the published version. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:431](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L431)

##### orderBy?

> `optional` **orderBy**: `string`[]

Specifies one or more properties to use to sort the results of a query. 
You can specify up to three (3) properties. Results are sorted in ascending order.
Note: You cannot use the latitude and longitude properties to sort results. You can use the elevation property.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:438](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L438)

##### queryUrl

> **queryUrl**: `string`

A queryurl containing the access id, data source name and the entity type name.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:422](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L422)

##### select?

> `optional` **select**: `string`[]

Specifies the data source properties to return in the response. If the $select query option is not specified or
if it is set to "" ($select=), all data source properties are returned. Default: "*,_distance"

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:444](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L444)

##### skip?

> `optional` **skip**: `number`

Specifies to not return a specified number of query results.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:447](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L447)

##### spatialFilter?

> `optional` **spatialFilter**: [`ISpatialFilterOptions`](README.md#ispatialfilteroptions) \| [`IFindNearRouteOptions`](README.md#ifindnearrouteoptions)

Spatial filter options to apply.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:450](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L450)

##### top?

> `optional` **top**: `number`

Specifies the maximum number of results to return in the query response. Default: 25

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:453](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L453)

***

### ISpatialFilterOptions

Options for find near route query API.

#### Extended by

- [`IFindNearRouteOptions`](README.md#ifindnearrouteoptions)

#### Properties

##### end?

> `optional` **end**: `string` \| [`Location`](../../README.md#location)

End location of the route (only for nearroute filter).

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:371](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L371)

##### intersects?

> `optional` **intersects**: `string` \| [`IPrimitive`](../../README.md#iprimitive) \| [`LocationRect`](../../README.md#locationrect)

Intersection object. Can be a well known text string or a LocationRect object (only for intersects filter).

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:374](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L374)

##### location?

> `optional` **location**: `string` \| [`Location`](../../README.md#location)

Location at which the filter should be applied (only for nearby filter).

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:359](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L359)

##### radius?

> `optional` **radius**: `number`

Radius to use when performing a nearby search. The distance in kilometers and must be between 0.16 and 1000 kilometers
(only for nearby filter).

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:365](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L365)

##### spatialFilterType

> **spatialFilterType**: `string`

One of the following values:
• nearby – Searches in a radius around a location.
• nearRoute – Searches for results that are within 1 mile of a route.
• intersects – Searches for results that intersect with the specified geometry.
Note: Note that the NavteqNA and NavteqEU data sources only support nearby queries.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:356](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L356)

##### start?

> `optional` **start**: `string` \| [`Location`](../../README.md#location)

Start location of the route (only for nearroute filter).

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts:368](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialDataService.d.ts#L368)

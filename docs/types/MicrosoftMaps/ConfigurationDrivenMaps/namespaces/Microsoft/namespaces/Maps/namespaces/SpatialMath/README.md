[**trackmaker**](../../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../../README.md) / [Microsoft](../../../../README.md) / [Maps](../../README.md) / SpatialMath

# SpatialMath

This module provides a bunch of useful spatial math calculations.

## Requires

The Microsoft.Maps.SpatialMath module.

## Index

### Namespaces

- [Geometry](namespaces/Geometry.md)
- [Tiles](namespaces/Tiles.md)

## Enumerations

### AreaUnits

Area units enumerator

#### Requires

The Microsoft.Maps.SpatialMath module.

#### Enumeration Members

##### Acres

> **Acres**: `number`

Area in Acres

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:78](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L78)

##### Hectares

> **Hectares**: `number`

Area in Hectares

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:81](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L81)

##### SquareFeet

> **SquareFeet**: `number`

Area in square Feet

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:72](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L72)

##### SquareKilometers

> **SquareKilometers**: `number`

Area in square kilometers

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:66](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L66)

##### SquareMeters

> **SquareMeters**: `number`

Area in square meters

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:63](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L63)

##### SquareMiles

> **SquareMiles**: `number`

Area in square miles

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:69](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L69)

##### SquareYards

> **SquareYards**: `number`

Area in square Yards

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:75](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L75)

***

### DistanceUnits

Distance Unit enumerator

#### Requires

The Microsoft.Maps.SpatialMath module.

#### Enumeration Members

##### Feet

> **Feet**: `number`

A distance in Feet

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:48](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L48)

##### Kilometers

> **Kilometers**: `number`

A distance in kilometers

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:42](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L42)

##### Meters

> **Meters**: `number`

A distance in meters

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:39](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L39)

##### Miles

> **Miles**: `number`

A distance in miles

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:45](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L45)

##### NauticalMiles

> **NauticalMiles**: `number`

A distance in Nautical Miles

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:54](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L54)

##### Yards

> **Yards**: `number`

A distance in Yards

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:51](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L51)

## Functions

### convertArea()

> **convertArea**(`area`, `fromUnits`, `toUnits`): `number`

Converts an area from one area units to another.

#### Parameters

• **area**: `number`

A number that represents an area to convert.

• **fromUnits**: [`AreaUnits`](README.md#areaunits)

The area units the original area is in.

• **toUnits**: [`AreaUnits`](README.md#areaunits)

The area units to convert to.

#### Returns

`number`

An area in the new units.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:95](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L95)

***

### convertDistance()

> **convertDistance**(`distance`, `fromUnits`, `toUnits`): `number`

Converts a distance from one distance units to another.

#### Parameters

• **distance**: `number`

A number that represents a distance to convert.

• **fromUnits**: [`DistanceUnits`](README.md#distanceunits)

The distance units the original distance is in.

• **toUnits**: [`DistanceUnits`](README.md#distanceunits)

The disired distance units to convert to.

#### Returns

`number`

A distance in the new units.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:104](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L104)

***

### getCardinalSpline()

> **getCardinalSpline**(`locations`, `tension`?, `nodeSize`?, `close`?): [`Location`](../../README.md#location)[]

Calculates an array of locations that form a cardinal spline between the specified array of locations.

#### Parameters

• **locations**: [`Location`](../../README.md#location)[]

The array of locations to calculate the spline through.

• **tension?**: `number`

A number that indicates the tightness of the curve. Can be any number, although a value between 0 and 1 is usually used. Default: 0.5

• **nodeSize?**: `number`

Number of nodes to insert between each Location. Default: 15

• **close?**: `boolean`

A boolean indicating if the spline should be a closed ring or not. Default: false

#### Returns

[`Location`](../../README.md#location)[]

An array of locations that form a cardinal spline between the specified array of locations.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:114](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L114)

***

### getDestination()

> **getDestination**(`origin`, `bearing`, `distance`, `units`?): [`Location`](../../README.md#location)

Calculates a destination Location based on a starting Location, a heading, a distance, and a distance unit type.

#### Parameters

• **origin**: [`Location`](../../README.md#location)

Location that the destination is relative to.

• **bearing**: `number`

A heading angle between 0 - 360 degrees. 0 - North, 90 - East, 180 - South, 270 - West.

• **distance**: `number`

Distance that destination is away.

• **units?**: [`DistanceUnits`](README.md#distanceunits)

Unit of distance measurement. Default is Meters.

#### Returns

[`Location`](../../README.md#location)

A Location that is the specified distance away from the origin.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:124](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L124)

***

### getDistanceTo()

> **getDistanceTo**(`origin`, `destination`, `units`?, `highAccuracy`?): `number`

Calculate the distance between two Location objects on the surface of the earth using the Haversine formula.

#### Parameters

• **origin**: [`Location`](../../README.md#location)

First Location to calculate distance between.

• **destination**: [`Location`](../../README.md#location)

Second Location to calculate distance between.

• **units?**: [`DistanceUnits`](README.md#distanceunits)

Unit of distance measurement. Default is Meters.

• **highAccuracy?**: `boolean`

When set enabled, will use the slower but more accurate Vincenty formula for calculating distances, rather than the Haversine formula.

#### Returns

`number`

The shortest distance between two Locations in the specifed units.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:134](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L134)

***

### getEarthRadius()

> **getEarthRadius**(`units`?): `number`

Retrieves the radius of the earth in a specific distance unit for WGS84.

#### Parameters

• **units?**: [`DistanceUnits`](README.md#distanceunits)

Unit of distance measurement. Default: Meters

#### Returns

`number`

A number that represents the radius of the earth in a specific distance unit.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:141](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L141)

***

### getGeodesicPath()

> **getGeodesicPath**(`path`, `nodeSize`?): [`Location`](../../README.md#location)[]

Takes an array of Locations objects and fills in the space between them with accurately positioned Locations to form an approximated Geodesic path.

#### Parameters

• **path**: [`Location`](../../README.md#location)[]

Array of Location objects that form a path to fill in.

• **nodeSize?**: `number`

Number of nodes to insert between each Location. Default: 15

#### Returns

[`Location`](../../README.md#location)[]

An array of Location objects that form a geodesic paths.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:149](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L149)

***

### getHeading()

> **getHeading**(`origin`, `destination`): `number`

Calculates the heading from one Location object to another.

#### Parameters

• **origin**: [`Location`](../../README.md#location)

Point of origin.

• **destination**: [`Location`](../../README.md#location)

Destination to calculate relative heading to.

#### Returns

`number`

A heading in degrees between 0 and 360. 0 degrees points due North.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:157](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L157)

***

### getLengthOfPath()

> **getLengthOfPath**(`path`, `units`?, `highAccuracy`?): `number`

Calculates the distance between all Location objects in an array.

#### Parameters

• **path**: [`Location`](../../README.md#location)[]

The array of Location objects that make up the path to calculate the length of.

• **units?**: [`DistanceUnits`](README.md#distanceunits)

Unit of distance measurement. Default: Meters

• **highAccuracy?**: `boolean`

If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used.

#### Returns

`number`

The distance between all Locations in between all Location objects in an array on the surface of a earth in the specifed units.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:166](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L166)

***

### getLocationAlongPath()

> **getLocationAlongPath**(`path`, `distance`, `units`?): [`Location`](../../README.md#location)

Calculates the Location object on a path that is a specified distance away from the start of the path. If the specified distance is longer 
than the length of the path, the last Location of the path will be returned.

#### Parameters

• **path**: [`Location`](../../README.md#location)[] \| [`Polyline`](../../README.md#polyline)

A polyline or array of Location coordinates that form a path.

• **distance**: `number`

The distance along the path (from the start) to calculate the location for.

• **units?**: [`DistanceUnits`](README.md#distanceunits)

Unit of distance measurement. Default is Meters.

#### Returns

[`Location`](../../README.md#location)

A Location object that is the specified distance away from the start of the path when following the path.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:176](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L176)

***

### getRegularPolygon()

> **getRegularPolygon**(`origin`, `radius`, `numberOfPoints`, `units`?, `offset`?): [`Location`](../../README.md#location)[]

Calculates an array of Location objects that are an equal distance away from a central point to create a regular polygon.

#### Parameters

• **origin**: [`Location`](../../README.md#location)

Center of the regular polygon.

• **radius**: `number`

Radius of the regular polygon.

• **numberOfPoints**: `number`

Number of points the polygon should have.

• **units?**: [`DistanceUnits`](README.md#distanceunits)

Unit of distance measurement for radius. Default is Meters.

• **offset?**: `number`

An offset to rotate the polygon clockwise in degrees. When 0 the first Location will align with North.

#### Returns

[`Location`](../../README.md#location)[]

An array of Location objects that form a regular polygon.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:187](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L187)

***

### interpolate()

> **interpolate**(`origin`, `destination`, `fraction`?): [`Location`](../../README.md#location)

Calculates a Location object that is a fractional distance between two Location objects.

#### Parameters

• **origin**: [`Location`](../../README.md#location)

First Location to calculate mid-point between.

• **destination**: [`Location`](../../README.md#location)

Second Location to calculate mid-point between.

• **fraction?**: `number`

The fractional parameter to calculate a mid-point for. Default 0.5.

#### Returns

[`Location`](../../README.md#location)

A Location that lies a fraction of the distance between two Location objects, relative to the first Location object.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:196](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L196)

***

### locationRectToPolygon()

> **locationRectToPolygon**(`bounds`): [`Polygon`](../../README.md#polygon)

Takes a LocationRect and converts it to a polygon.

#### Parameters

• **bounds**: [`LocationRect`](../../README.md#locationrect)

The LocationRect to convert to a Polygon.

#### Returns

[`Polygon`](../../README.md#polygon)

A polygon representation of the LocationRect.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:203](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L203)

***

### toDegMinSec()

> **toDegMinSec**(`loc`): `string`

Takes a Location object and converts it into a Degree Minute Seconds string in the format. For example: 40° 26′ 46″ N 79° 58′ 56″ W

#### Parameters

• **loc**: [`Location`](../../README.md#location)

The Location object to convert into a Degree Minute Seconds string.

#### Returns

`string`

A string in Degree Minute Seconds format or null if invalid Location object is provided.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:210](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L210)

***

### tryParseDegMinSec()

> **tryParseDegMinSec**(`input`): `number` \| [`Location`](../../README.md#location)

Tries to parse the given string that is in Degree Minute Seconds format. For Example: 35° 26′ 31″ E or 40° 26′ 46″ N 79° 58′ 56″ W

#### Parameters

• **input**: `string`

A string in Degree Minute Seconds format to parse.

#### Returns

`number` \| [`Location`](../../README.md#location)

Returns a decimal degree value if only a single angle is provided. If two angles provided in the string, then a 
Location object is returned. If string is in an invalid format, null is returned.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:218](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L218)

[**trackmaker**](../../../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../../../README.md) / [Microsoft](../../../../../README.md) / [Maps](../../../README.md) / [SpatialMath](../README.md) / Geometry

# Geometry

A colleciton of geometry calculations that can be performed against Bing Maps shapes.

## Requires

The Microsoft.Maps.SpatialMath module.

## Enumerations

### BufferEndCap

Defines how the end of a line should be buffered.

#### Enumeration Members

##### Flat

> **Flat**: `number`

Adds a flat end to a buffered line that touches the end of the line.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:324](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L324)

##### Round

> **Round**: `number`

Adds a rounded end to a buffered line.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:321](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L321)

##### Square

> **Square**: `number`

Adds a square end to a buffered line that has a buffer area at the end of the line.

###### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:327](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L327)

## Functions

### area()

> **area**(`shape`, `areaUnits`?): `number`

Calculates the area of a shape.

#### Parameters

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to calculate the area of.

• **areaUnits?**: [`AreaUnits`](../README.md#areaunits)

The unit of measurement to calculate the area in.

#### Returns

`number`

The area of a shape in the specified unit of measurement.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:336](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L336)

***

### bounds()

> **bounds**(`shapes`): [`LocationRect`](../../../README.md#locationrect)

Calculates a bounding box that encloses a set of shapes and/or locations.

#### Parameters

• **shapes**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The shape(s) to calculate the bounding box for.

#### Returns

[`LocationRect`](../../../README.md#locationrect)

A location rect that encloses the shapes and/or locations.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:343](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L343)

***

### buffer()

> **buffer**(`shape`, `distance`, `units`?, `endCapType`?, `options`?): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Calcuates a shape with an updated boundary that has been inflated/deflated by a speicifed distance.

#### Parameters

• **shape**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The shape to buffer.

• **distance**: `number`

The distance to buffer the shape by.

• **units?**: [`DistanceUnits`](../README.md#distanceunits)

The distance units to buffer the shape by.

• **endCapType?**: [`BufferEndCap`](Geometry.md#bufferendcap)

The type of end cap to use for the joints of the buffer, default value is round.

• **options?**: [`IPolygonOptions`](../../../README.md#ipolygonoptions)

A set of polygon options to apply to the generated shape.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

A buffered version of the shape.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:354](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L354)

***

### calculateLength()

> **calculateLength**(`shape`, `units`?, `highAccuracy`?): `number`

Calculates the distance between all Locations in a shape. If the shape is a polygon, the length of the perimeter of all rings is calculated.

#### Parameters

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to calculate the length of.

• **units?**: [`DistanceUnits`](../README.md#distanceunits)

Unit of distance measurement. Default: Meters

• **highAccuracy?**: `boolean`

If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used.

#### Returns

`number`

The distance between all Locations in a polyline or the perimeter of a ploygon on the surface of a earth in the specifed units.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:452](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L452)

***

### centroid()

> **centroid**(`shape`): [`Location`](../../../README.md#location)

Calculates the center of a shape.

#### Parameters

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to calculate the center of.

#### Returns

[`Location`](../../../README.md#location)

The center of the specified shape.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:361](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L361)

***

### concaveHull()

> **concaveHull**(`shapes`, `allowMultiPolygons`?, `allowHoles`?, `options`?): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Calculates an approximate concave hull that best fits the data. 
A concave hull is a shape that represents that a possible concave geometry that encloses all shapes in the specified data set.
If a single unique Location is in the data set, a Pushpin is returned. If only two unique Locations are provided, or if all Locations form a line, a Polyline is returned. 
If 3 or more unique Locations are in the data set a Polygon, or array of Polygons will be returned.

#### Parameters

• **shapes**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

Shape(s) whose Location(s) or Location(s) are to be used to generate a concave hull.

• **allowMultiPolygons?**: `boolean`

A boolean indicating if the resulting concave hull can be a MultiPolygon. Default: false

• **allowHoles?**: `boolean`

A boolean indicating if the polygons in the resulting concave hull can have holes in them. Default: false

• **options?**: [`IPolygonOptions`](../../../README.md#ipolygonoptions)

A set of polygon options to apply to the generated shape.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

An approximate concave hull that best fits the data. 
If a single unique Location is in the data set, a Pushpin is returned. If only two unique Locations are provided, or if all Locations form a line, a Polyline is returned. 
If 3 or more unique Locations are in the data set a Polygon, or array of Polygons will be returned.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:376](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L376)

***

### contains()

> **contains**(`shapeA`, `shapeB`): `boolean`

Given two shapes, determines if the first one contains the second one 
(or, the second shape is a subset of the first shape) or not.

#### Parameters

• **shapeA**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The first shape to test against the second.

• **shapeB**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The second shape to test against the first.

#### Returns

`boolean`

A boolean indicating if the first shape contains the second shape.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:385](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L385)

***

### convexHull()

> **convexHull**(`shapes`, `options`?): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Calculates a convex hull. A convex hull is a shape that represents that minimum convex geometry that encloses all shapes in the specified data set.

#### Parameters

• **shapes**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

Shape(s) whose Location(s) or Location(s) are to be used to generate a convex hull.

• **options?**: [`IPolygonOptions`](../../../README.md#ipolygonoptions)

A set of polygon options to apply to the generated shape.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

An array of locations that form a convex hull that encloses all locations of the shapes provided in an array.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:393](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L393)

***

### delaunayTriangles()

> **delaunayTriangles**(`shapes`, `options`?): [`Polygon`](../../../README.md#polygon)[]

Creates Delaunay Triangles from the Location objects of the provided shapes.

#### Parameters

• **shapes**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

Location(s) of shape(s) or Location(s) to generate a Delaunay Triangles from.

• **options?**: [`IPolygonOptions`](../../../README.md#ipolygonoptions)

A set of polyline or polygon options to apply to the generated shape.

#### Returns

[`Polygon`](../../../README.md#polygon)[]

An array of shapes that form the polygon triangles of the delaunay triangles.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:401](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L401)

***

### difference()

> **difference**(`shapeA`, `shapeB`): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Returns an object that represents area of an initial shape subtracted by the overlapping area of a second shape.

#### Parameters

• **shapeA**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The first shape.

• **shapeB**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The second shape to subtract from the first.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

A set of shapes that represent the area of the first shape that is not overlapped by the second shape.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:409](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L409)

***

### distance()

> **distance**(`shapeA`, `shapeB`, `units`?, `highAccuracy`?): `number`

Calculates the approximate shortest distance between any two shapes.

#### Parameters

• **shapeA**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The first shape to calculate the distance from.

• **shapeB**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The second shape to calculate the distance to.

• **units?**: [`DistanceUnits`](../README.md#distanceunits)

Unit of distance measurement. Default: Meters

• **highAccuracy?**: `boolean`

If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used.

#### Returns

`number`

The shorested distance between the shapes in the specified units.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:419](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L419)

***

### intersection()

> **intersection**(`shapeA`, `shapeB`): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Returns an object that represents the area where two shapes intersect.

#### Parameters

• **shapeA**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The first shape.

• **shapeB**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The second shape.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

A set of shapes that represents the area where two shapes intersect.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:427](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L427)

***

### intersects()

> **intersects**(`shapeA`, `shapeB`): `boolean`

Determines if two shapes intersect or not.

#### Parameters

• **shapeA**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The first shape to test against the second.

• **shapeB**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The second shape to test against the first.

#### Returns

`boolean`

A boolean indicating if the two shapes intersect.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:435](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L435)

***

### isValid()

> **isValid**(`shape`): `boolean`

Tests to see if the shape is valid and meets the requirements of an SQL Geography type and other OGC compliant systems. Polylines & Polygons can't be self intersecting. For Polygons, 
coordinates in an exterior rings have a counter-clockwise orientation, while holes have a clockwise orientation.

#### Parameters

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to test for validity.

#### Returns

`boolean`

Returns a boolean indicting if the specified shape(s) is valid or not.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:443](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L443)

***

### makeValid()

> **makeValid**(`shape`): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Takes a shape and returns a copy of it that meets the requirements of an SQL Geography type and other OGC compliant systems. Polylines & Polygons can't be self intersecting. For Polygons, 
coordinates in an exterior rings have a counter-clockwise orientation, while holes have a clockwise orientation.

#### Parameters

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to make valid.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Valiated version of the provided shape. May be a different shape type than what was provided. i.e. A polygon may be broken up into an array of polygons (MultiPolygon).

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:460](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L460)

***

### nearestLocations()

> **nearestLocations**(`shapeA`, `shapeB`): [`Location`](../../../README.md#location)[]

Calculates the nearest Location objects between to shapes that lie on the shapes.
If the shapes do not overlap, this calculates a location on each shape that is closest to the other shape. 
If the shapes overlap, a location that is within the intersection area of the shapes will be added twice to an array, once for each shape, and returned.

#### Parameters

• **shapeA**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The first shape.

• **shapeB**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The second shape.

#### Returns

[`Location`](../../../README.md#location)[]

An array of two Location objects that represent the nearest points between two shapes. 
The Location objects are in the same order as the input shapes. 
Returns null if nearest points were unable to be computed.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:472](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L472)

***

### reduce()

> **reduce**(`shape`, `tolerance`): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Reduces the resolution of a shape using the Douglas-Peucker algorithm.

#### Parameters

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to reduce the resolution of.

• **tolerance**: `number`

A tolerance distance in meters used by the reduction algorithms.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

A version of the specified shape that has been reduced.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:480](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L480)

***

### rotate()

> **rotate**(`shape`, `angle`, `origin`?): `void`

Rotates a shape around a given Location for the specified angle of rotation. If an origin is not provided, the centroid of the shape is used.

#### Parameters

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to be rotated.

• **angle**: `number`

The amount to rotate the shape in degrees.

• **origin?**: [`Location`](../../../README.md#location)

The location to rotate the shape around. Defaults to the centroid of the shape.

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:488](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L488)

***

### shortestLineTo()

> **shortestLineTo**(`shapeA`, `shapeB`, `options`?): [`Polyline`](../../../README.md#polyline)

Calculates the shortest path that between two shapes and returns a Polyline.

#### Parameters

• **shapeA**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The first shape.

• **shapeB**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

The second shape.

• **options?**: [`IPolylineOptions`](../../../README.md#ipolylineoptions)

A set of polyline options to apply to the generated polyline.

#### Returns

[`Polyline`](../../../README.md#polyline)

A polyline that represents the shortest path between two shapes.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:497](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L497)

***

### snapLocationsToShape()

> **snapLocationsToShape**(`locs`, `shape`, `tolerance`?, `toleranceUnits`?): [`Location`](../../../README.md#location) \| [`Location`](../../../README.md#location)[]

Snaps the locations of one shape that are within the specified tolerance distance away from another shape.

#### Parameters

• **locs**: [`Location`](../../../README.md#location) \| [`Location`](../../../README.md#location)[]

The locations to snap to the shape.

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to snap the locations to.

• **tolerance?**: `number`

A maximum distance (in the specified units) that the snapped location can be from the input location. Default: Infinity

• **toleranceUnits?**: [`DistanceUnits`](../README.md#distanceunits)

The distance units of the tolerance value. Default: Meters

#### Returns

[`Location`](../../../README.md#location) \| [`Location`](../../../README.md#location)[]

A snapped location if only one location is provided, otherwise returns an array of snapped locations.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:507](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L507)

***

### snapShapeToShape()

> **snapShapeToShape**(`shapeToSnap`, `shape`, `tolerance`?, `toleranceUnits`?): `void`

Snaps the locations of one shape that are within the specified tolerance distance away from another shape.

#### Parameters

• **shapeToSnap**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to snap the locations of.

• **shape**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The shape to snap the locations to.

• **tolerance?**: `number`

A maximum distance (in the specified units) that the snapped location can be from the input location. Default: Infinity

• **toleranceUnits?**: [`DistanceUnits`](../README.md#distanceunits)

The distance units of the tolerance value. Default: Meters

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:516](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L516)

***

### symDifference()

> **symDifference**(`shapeA`, `shapeB`): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Returns an object that represents all points that are either in one shape instance or another, but not those points that lie in both instances.
"Sym" stands for Symmetric. symDifference is an OGC standard name for this calculation used in most spatial math libraries, including SQL.

#### Parameters

• **shapeA**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The first shape.

• **shapeB**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The second shape.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

A shape that represents the symetric difference between two shapes.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:525](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L525)

***

### union()

> **union**(`shapeA`, `shapeB`): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Returns an object that represents the union of two shapes. If shapes don't overlap, an array of each individual shapes will be returned.

#### Parameters

• **shapeA**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The first shape.

• **shapeB**: [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

The second shape.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

A shape that represents the union of two shapes.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:533](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L533)

***

### unionAggregate()

> **unionAggregate**(`shapes`): [`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

Performs a union operation on a set of shapes. 
If a shape doesn't overlap with the rest, the returned result will be an array of shapes containing this shape and the union of the rest.

#### Parameters

• **shapes**: [`IPrimitive`](../../../README.md#iprimitive)[]

An array of shapes to union together.

#### Returns

[`IPrimitive`](../../../README.md#iprimitive) \| [`IPrimitive`](../../../README.md#iprimitive)[]

A shape that represents the union of all specified shapes.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:541](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L541)

***

### voronoiDiagram()

> **voronoiDiagram**(`shapes`, `clipRegion`?, `options`?): [`Polygon`](../../../README.md#polygon)[]

Creates a Voronoi diagram from the Location objects of the provided shapes. The diagram is returned as an array of Polygons. 
If a clip region is specified, the diagram will be clipped accordingly.

#### Parameters

• **shapes**: [`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive) \| ([`Location`](../../../README.md#location) \| [`IPrimitive`](../../../README.md#iprimitive))[]

Location(s) of shape(s) or Location(s) to generate a Voronoi diagram.

• **clipRegion?**: [`Polygon`](../../../README.md#polygon) \| [`LocationRect`](../../../README.md#locationrect)

A region to clip the voronoi diagram to.

• **options?**: [`IPolygonOptions`](../../../README.md#ipolygonoptions)

A set of polygon options to apply to the generated shape.

#### Returns

[`Polygon`](../../../README.md#polygon)[]

An array of polygons that form a Voronoi diagram.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:551](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L551)

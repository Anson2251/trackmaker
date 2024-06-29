[**trackmaker**](../../../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../../../README.md) / [Microsoft](../../../../../README.md) / [Maps](../../../README.md) / [SpatialMath](../README.md) / Tiles

# Tiles

A colleciton of mathematical algorithms based on the tile pyramid used by Bign Maps.

## Requires

The Microsoft.Maps.SpatialMath module.

## Functions

### getTilesInBounds()

> **getTilesInBounds**(`bounds`, `zoom`): [`PyramidTileId`](../../../README.md#pyramidtileid)[]

Calculates all the PyramidTileId's that are within a LocationRect at a specific zoom level.

#### Parameters

• **bounds**: [`LocationRect`](../../../README.md#locationrect)

A LocationRect to search for tiles in.

• **zoom**: `number`

The zoom level to calculate tiles for.

#### Returns

[`PyramidTileId`](../../../README.md#pyramidtileid)[]

A list of PyramidTileId's that are within the specified LocationRect and zoom level.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:297](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L297)

***

### globalPixelToLocation()

> **globalPixelToLocation**(`point`, `zoom`): [`Location`](../../../README.md#location)

Converts a Pixel coordinate into a Geospatial Location at a specified zoom level. 
Global Pixel coordinates are relative to the top left corner of the map (90, -180)

#### Parameters

• **point**: [`Point`](../../../README.md#point)

Pixel coordinate.

• **zoom**: `number`

Zoom level.

#### Returns

[`Location`](../../../README.md#location)

A Location that is at the specified pixel location at a specified zoom level.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:257](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L257)

***

### globalPixelToTile()

> **globalPixelToTile**(`pixel`, `zoom`): [`PyramidTileId`](../../../README.md#pyramidtileid)

Calculates the PyramidTileId that a global pixel intersects with at a specific zoom level.

#### Parameters

• **pixel**: [`Point`](../../../README.md#point)

The pixel coordinate to calculate the tile for.

• **zoom**: `number`

The zoom level to calculate the tile for.

#### Returns

[`PyramidTileId`](../../../README.md#pyramidtileid)

A PyramidTileId that a global pixel intersects with at a specific zoom level.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:274](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L274)

***

### groundResolution()

> **groundResolution**(`latitude`, `zoom`, `units`?): `number`

Calculates the Ground resolution at a specific degree of latitude in the specified units per pixel.

#### Parameters

• **latitude**: `number`

Degree of latitude to calculate resolution at.

• **zoom**: `number`

Zoom level to calculate resolution at.

• **units?**: [`DistanceUnits`](../README.md#distanceunits)

Distance unit type to calculate resolution in.

#### Returns

`number`

Ground resolution in distance unit per pixels.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:248](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L248)

***

### locationToGlobalPixel()

> **locationToGlobalPixel**(`loc`, `zoom`): [`Point`](../../../README.md#point)

Converts a point from latitude/longitude WGS-84 Location (in degrees)
into pixel XY coordinates at a specified level of detail.

#### Parameters

• **loc**: [`Location`](../../../README.md#location)

Location to convert to a global pixel.

• **zoom**: `number`

Level of detail, from 1 (lowest detail) to 23 (highest detail).

#### Returns

[`Point`](../../../README.md#point)

Point object containing the the global pixel location of a Location.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:266](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L266)

***

### locationToTile()

> **locationToTile**(`loc`, `zoom`): [`PyramidTileId`](../../../README.md#pyramidtileid)

Calculates the PyramidTileId that a Location object intersects with at a specific zoom level.

#### Parameters

• **loc**: [`Location`](../../../README.md#location)

The location to calulate the tile for.

• **zoom**: `number`

The zoom level to use to calculate the tile.

#### Returns

[`PyramidTileId`](../../../README.md#pyramidtileid)

A PyramidTileId that a Location object intersects with at a specific zoom level.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:289](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L289)

***

### mapSize()

> **mapSize**(`zoom`): `number`

Calculates the full width of the map in pixels at a specific zoom level from -180 degrees to 180 degrees.

#### Parameters

• **zoom**: `number`

Zoom level to calculate width at.

#### Returns

`number`

Width of map in pixels.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:239](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L239)

***

### tileToGlobalPixel()

> **tileToGlobalPixel**(`tile`): [`Point`](../../../README.md#point)

Converts a PyramidTileId into a global pixel coordinates of the upper-left pixel of the specified tile.

#### Parameters

• **tile**: [`PyramidTileId`](../../../README.md#pyramidtileid)

A PyramidTileId to calculate the upper-left pixel for.

#### Returns

[`Point`](../../../README.md#point)

Global pixel coordinate of the top left corner of a tile.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:281](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L281)

***

### tileToLocationRect()

> **tileToLocationRect**(`tile`): [`LocationRect`](../../../README.md#locationrect)

Calculates the LocationRect (bounding box) of a PyramidTileId.

#### Parameters

• **tile**: [`PyramidTileId`](../../../README.md#pyramidtileid)

A PyramidTileId to calculate the LocationRect of.

#### Returns

[`LocationRect`](../../../README.md#locationrect)

The bounding box of a tile.

#### Defined in

[src/types/MicrosoftMaps/Modules/SpatialMath.d.ts:304](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/SpatialMath.d.ts#L304)

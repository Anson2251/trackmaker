[**trackmaker**](../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../README.md) / [Microsoft](../../../README.md) / [Maps](../README.md) / Directions

# Directions

## Enumerations

### DistanceUnit

Distance units for calculating the directions in.

#### Enumeration Members

##### km

> **km**: `number`

A distance in Kilometers.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:36](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L36)

##### miles

> **miles**: `number`

A distance in Miles.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:39](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L39)

***

### RouteAvoidance

Defines features to avoid when calculating the route.

#### Enumeration Members

##### avoidAirline

> **avoidAirline**: `32`

Avoid using airlines when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:78](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L78)

##### avoidBulletTrain

> **avoidBulletTrain**: `64`

Avoid using bullet trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:81](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L81)

##### avoidExpressTrain

> **avoidExpressTrain**: `16`

Avoid using express trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:75](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L75)

##### avoidHighways

> **avoidHighways**: `4`

Avoid using limited access highways when calculating the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:69](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L69)

##### avoidToll

> **avoidToll**: `8`

Avoid using roads with tolls when calculating the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:72](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L72)

##### minimizeHighways

> **minimizeHighways**: `1`

Reduce the use of limited access highways when calculating the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:63](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L63)

##### minimizeToll

> **minimizeToll**: `2`

Reduce the use of roads with tolls when calculating the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:66](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L66)

##### none

> **none**: `0`

Calculate the best route using any travel option available.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:60](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L60)

***

### RouteMode

Defines the type of route to calculate.

#### Enumeration Members

##### driving

> **driving**: `number`

Driving directions are calculated.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:45](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L45)

##### transit

> **transit**: `number`

Transit directions are calculated.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:48](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L48)

##### truck

> **truck**: `number`

Driving directions using truck attributes are calculationed.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:51](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L51)

##### walking

> **walking**: `number`

Walking directions are calculated.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:54](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L54)

***

### RouteOptimization

Defines optimization options for calculating directions.

#### Enumeration Members

##### minimizeMoney

> **minimizeMoney**: `4`

Minimize the cost when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:168](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L168)

##### minimizeTransfers

> **minimizeTransfers**: `5`

Minimize transit transfers when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:171](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L171)

##### minimizeWalking

> **minimizeWalking**: `6`

Minimize the amount of walking when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:174](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L174)

##### shortestDistance

> **shortestDistance**: `1`

Calculate a route with the shortest distance.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:159](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L159)

##### shortestTime

> **shortestTime**: `0`

Calculate a route the shortest time.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:156](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L156)

##### timeAvoidClosure

> **timeAvoidClosure**: `3`

The route is calculated to minimize the time and avoid road closures. Traffic information is not used in the calculation.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:165](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L165)

##### timeWithTraffic

> **timeWithTraffic**: `2`

The route is calculated to minimize the time and uses current traffic information.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:162](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L162)

***

### RouteResponseCode

Response codes for a route calculation request.

#### Enumeration Members

##### atleastTwoWaypointRequired

> **atleastTwoWaypointRequired**: `15`

At least two waypoints are required to calculate a route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:141](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L141)

##### cannotFindNearbyRoad

> **cannotFindNearbyRoad**: `2`

A nearby road cannot be found for one or more of the route waypoints.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:93](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L93)

##### dataSourceNotFound

> **dataSourceNotFound**: `5`

There is no route data for the specified waypoints.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:108](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L108)

##### exceedMaxWaypointLimit

> **exceedMaxWaypointLimit**: `14`

The maximum number of waypoints, which is 25, has been exceeded.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:138](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L138)

##### firstOrLastStoppointIsVia

> **firstOrLastStoppointIsVia**: `16`

The first or last waypoint is a via point, which is not allowed.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:144](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L144)

##### hasEmptyWaypoint

> **hasEmptyWaypoint**: `13`

One or more waypoints do not have an address or location specified.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:135](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L135)

##### invalidCredentials

> **invalidCredentials**: `18`

The credentials passed to the Directions module are invalid.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:150](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L150)

##### noAvailableTransitTrip

> **noAvailableTransitTrip**: `7`

There are no transit options available for the specified time.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:111](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L111)

##### noSolution

> **noSolution**: `4`

A route cannot be calculated for the specified waypoints. For example, this code is returned when a route between
“Seattle, WA” and “Honolulu, HI” is requested.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:105](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L105)

##### outOfTransitBounds

> **outOfTransitBounds**: `10`

There is no transit data available for the route or for one or more of the specified waypoints,
or the waypoints are in different transit areas that do not overlap.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:123](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L123)

##### searchServiceFailed

> **searchServiceFailed**: `17`

The search service failed to return results.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:147](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L147)

##### success

> **success**: `0`

The route was successfully calculated.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:87](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L87)

##### timeOut

> **timeOut**: `11`

The directions calculation request has timed out.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L126)

##### tooFar

> **tooFar**: `3`

The distance between two route waypoints, or the total length of the route exceeds the limit of the route mode.
Modify the waypoint locations so that they are closer together.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:99](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L99)

##### transitStopsTooClose

> **transitStopsTooClose**: `8`

The transit stops are so close that walking is always a better option.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:114](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L114)

##### unknownError

> **unknownError**: `1`

An unknown error has occurred.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:90](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L90)

##### walkingBestAlternative

> **walkingBestAlternative**: `9`

The transit stops are so close that walking is a better option.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:117](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L117)

##### waypointDisambiguation

> **waypointDisambiguation**: `12`

One or more waypoints need to be disambiguated. This error does not occur if the
autoDisplayDisambiguation directions render option is set to true.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:132](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L132)

***

### TimeType

An enumeration that specifies the releance of a dateTime when calculating a route.

#### Enumeration Members

##### arrival

> **arrival**: `number`

The dateTime parameter contains the desired arrival time for a transit request.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:180](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L180)

##### departure

> **departure**: `number`

The dateTime parameter contains the desired departure time for a transit request.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:183](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L183)

##### firstAvailable

> **firstAvailable**: `number`

The dateTime parameter should be ignored and the first available transit taken.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:186](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L186)

##### lastAvailable

> **lastAvailable**: `number`

The dateTime parameter contains the latest departure time available for a transit request.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:189](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L189)

## Classes

### DirectionsManager

The main class in the Directions module that process direction calculations and rendering.

#### Constructors

##### new DirectionsManager()

> **new DirectionsManager**(`map`, `waypoints`?): [`DirectionsManager`](Directions.md#directionsmanager)

###### Parameters

• **map**: [`Map`](../README.md#map-2)

A map to calculate directions for.

• **waypoints?**: [`Waypoint`](Directions.md#waypoint)[]

An array of waypoints to be added to the route.

###### Returns

[`DirectionsManager`](Directions.md#directionsmanager)

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:625](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L625)

#### Methods

##### addWaypoint()

> **addWaypoint**(`waypoint`, `index`?): `void`

Adds a waypoint to the route at the given index, if specified. If an index is not specified, the waypoint is added as the last waypoint in the route. The maximum number of walking or driving waypoints is 25. The maximum number of transit waypoints is 2. Up to 10 via points are allowed between two stop waypoints. To recalculate the route, use calculateDirections.

###### Parameters

• **waypoint**: [`Waypoint`](Directions.md#waypoint)

The waypoint to be added to the directions manager.

• **index?**: `number`

An index at which the waypoint is to be added.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:632](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L632)

##### calculateDirections()

> **calculateDirections**(): `void`

Calculates directions based on request and render options set

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:637](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L637)

##### clearAll()

> **clearAll**(): `void`

Clears the directions request and render options and removes all waypoints

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:640](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L640)

##### clearDisplay()

> **clearDisplay**(): `void`

Clears the directions displayed and removes the route line from the map. 
This method does not remove waypoints from the route and retains all calculated direction information and option settings.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:646](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L646)

##### dispose()

> **dispose**(): `void`

Deletes the DirectionsManager object and releases any associated resources.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:649](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L649)

##### getAllPushpins()

> **getAllPushpins**(): [`Pushpin`](../README.md#pushpin)[]

Returns all current pushpins for the rendered route.This includes pushpins created by addWaypoint and viaPoints created due to drag and drop.

###### Returns

[`Pushpin`](../README.md#pushpin)[]

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:654](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L654)

##### getAllWaypoints()

> **getAllWaypoints**(): [`Waypoint`](Directions.md#waypoint)[]

Gets all the waypoints in the directions manager.

###### Returns

[`Waypoint`](Directions.md#waypoint)[]

All the waypoints in the directions manager.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:660](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L660)

##### getCurrentRoute()

> **getCurrentRoute**(): [`IRoute`](Directions.md#iroute)

Gets the currently displayed route information.

###### Returns

[`IRoute`](Directions.md#iroute)

The currently displayed route information.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:666](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L666)

##### getRenderOptions()

> **getRenderOptions**(): [`IDirectionsRenderOptions`](Directions.md#idirectionsrenderoptions)

Gets the route render options.

###### Returns

[`IDirectionsRenderOptions`](Directions.md#idirectionsrenderoptions)

The route render options

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:672](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L672)

##### getRequestOptions()

> **getRequestOptions**(): [`IDirectionsRequestOptions`](Directions.md#idirectionsrequestoptions)

Gets the directions request options.

###### Returns

[`IDirectionsRequestOptions`](Directions.md#idirectionsrequestoptions)

The directions request options.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:678](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L678)

##### getRouteResult()

> **getRouteResult**(): [`IRoute`](Directions.md#iroute)[]

Gets the current calculated route(s)

###### Returns

[`IRoute`](Directions.md#iroute)[]

The current calculated route(s). If the route was not successfully calculated, null is returned.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:684](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L684)

##### removeWaypoint()

> **removeWaypoint**(`waypointOrIndex`): `void`

Removes the given waypoint or the waypoint identified by the given index from the route.

###### Parameters

• **waypointOrIndex**: `number` \| [`Waypoint`](Directions.md#waypoint)

A Waypoint object to be removed or the index of the waypoint to be removed

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:690](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L690)

##### setRenderOptions()

> **setRenderOptions**(`options`): `void`

Sets the specified render options for the route.

###### Parameters

• **options**: [`IDirectionsRenderOptions`](Directions.md#idirectionsrenderoptions)

The options that customize the rendering of the calculated route.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:696](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L696)

##### setRequestOptions()

> **setRequestOptions**(`options`): `void`

Sets the specified route calculation options.

###### Parameters

• **options**: [`IDirectionsRequestOptions`](Directions.md#idirectionsrequestoptions)

The route calculation options.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:702](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L702)

##### showInputPanel()

> **showInputPanel**(`inputContainerId`): `void`

Displays an input panel for calculating directions in the specified container. Provides autosuggest for location inputs.

###### Parameters

• **inputContainerId**: `string`

The id name of the HTML container in which to render the directions input panel.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:708](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L708)

***

### Waypoint

An object used to define a start, end or stop location along a route.

#### Constructors

##### new Waypoint()

> **new Waypoint**(`options`): [`Waypoint`](Directions.md#waypoint)

###### Parameters

• **options**: [`IWaypointOptions`](Directions.md#iwaypointoptions)

###### Returns

[`Waypoint`](Directions.md#waypoint)

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:587](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L587)

#### Methods

##### dispose()

> **dispose**(): `void`

Releases any resources associated with the waypoint.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:590](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L590)

##### getAddress()

> **getAddress**(): `string`

Gets the address associated with the waypoint.

###### Returns

`string`

The address associated with the waypoint.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:596](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L596)

##### getLocation()

> **getLocation**(): [`Location`](../README.md#location)

Gets the location of the waypoint.

###### Returns

[`Location`](../README.md#location)

The location of the waypoint.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:602](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L602)

##### isViapoint()

> **isViapoint**(): `boolean`

Gets a boolean value indicating whether the waypoint is a via point.

###### Returns

`boolean`

A boolean value indicating whether the waypoint is a via point.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:608](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L608)

##### setOptions()

> **setOptions**(`options`): `void`

Sets options for the waypoint. For these options to take effect, you must recalculate the route.

###### Parameters

• **options**: [`IWaypointOptions`](Directions.md#iwaypointoptions)

Options used to define the Waypoint.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:614](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L614)

## Interfaces

### IDirectionsErrorEventArgs

Contains arguments for directions error events.

#### Properties

##### message

> **message**: `string`

The error message.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:211](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L211)

##### responseCode

> **responseCode**: [`RouteResponseCode`](Directions.md#routeresponsecode)

The code which identifies the error that occurred.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:208](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L208)

***

### IDirectionsEventArgs

Contains the arguments for directions events.

#### Properties

##### route

> **route**: [`IRoute`](Directions.md#iroute)[]

The calculated route (or routes, if the route mode is transit).

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:199](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L199)

##### routeSummary

> **routeSummary**: [`IRouteSummary`](Directions.md#iroutesummary)[]

The route summary (or summaries) of the route(s) defined in the route property.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:202](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L202)

***

### IDirectionsRenderOptions

Represents render options for a route.

#### Properties

##### autoUpdateMapView?

> `optional` **autoUpdateMapView**: `boolean`

A boolean indicating whether to automatically set the map view to the best map view of the calculated route. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:435](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L435)

##### displayDisclaimer?

> `optional` **displayDisclaimer**: `boolean`

A boolean indicating whether to display the disclaimer about the accuracy of the directions. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:438](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L438)

##### displayManeuverIcons?

> `optional` **displayManeuverIcons**: `boolean`

A boolean indicating whether to display the icons for each direction maneuver. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:441](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L441)

##### displayPostItineraryItemHints?

> `optional` **displayPostItineraryItemHints**: `boolean`

A boolean indicating whether to display direction hints that describe when a direction step was missed. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:444](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L444)

##### displayPreItineraryItemHints?

> `optional` **displayPreItineraryItemHints**: `boolean`

A boolean indicating whether to display direction hints that describe what to look for before you come to the next
direction step. The default value is true.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:450](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L450)

##### displayRouteSelector?

> `optional` **displayRouteSelector**: `boolean`

A boolean indicating whether to display the route selector control. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:453](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L453)

##### displayStepWarnings?

> `optional` **displayStepWarnings**: `boolean`

A boolean indicating whether to display direction warnings. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:456](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L456)

##### displayWalkingWarning?

> `optional` **displayWalkingWarning**: `boolean`

A boolean indicating whether to display a warning about walking directions. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:459](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L459)

##### drivingPolylineOptions?

> `optional` **drivingPolylineOptions**: [`IPolylineOptions`](../README.md#ipolylineoptions)

The polyline options that define how to draw the route line on the map, if the RouteMode is driving.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:462](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L462)

##### firstWaypointPushpinOptions?

> `optional` **firstWaypointPushpinOptions**: [`IPushpinOptions`](../README.md#ipushpinoptions)

The pushpin options that define how the first waypoint should be rendered.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:465](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L465)

##### itineraryContainer?

> `optional` **itineraryContainer**: `HTMLElement`

The DOM element inside which the directions itinerary will be rendered.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:468](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L468)

##### lastWaypointPushpinOptions?

> `optional` **lastWaypointPushpinOptions**: [`IPushpinOptions`](../README.md#ipushpinoptions)

The pushpin options that define how the last waypoint should be rendered.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:471](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L471)

##### showInputPanel?

> `optional` **showInputPanel**: `boolean`

A boolean indicating whether to show the input panel. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:474](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L474)

##### transitPolylineOptions?

> `optional` **transitPolylineOptions**: [`IPolylineOptions`](../README.md#ipolylineoptions)

The options that define how to draw the route line on the map, if the RouteMode is transit.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:477](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L477)

##### walkingPolylineOptions?

> `optional` **walkingPolylineOptions**: [`IPolylineOptions`](../README.md#ipolylineoptions)

The options that define how to draw the route line on the map, if the RouteMode is walking.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:480](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L480)

##### waypointPushpinOptions?

> `optional` **waypointPushpinOptions**: [`IPushpinOptions`](../README.md#ipushpinoptions)

The options that define the pushpin to use for all route waypoints by default. The first and last waypoints in the route will be overriden by firstWaypointPushpinOptions and lastWaypointPushpinOptions if set.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:483](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L483)

***

### IDirectionsRequestOptions

Contains options for the directions to calculate.

#### Properties

##### distanceUnit?

> `optional` **distanceUnit**: [`DistanceUnit`](Directions.md#distanceunit)

The unit to use when displaying direction distances.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:402](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L402)

##### maxRoutes?

> `optional` **maxRoutes**: `number`

The number of routes to calculate.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:405](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L405)

##### routeAvoidance?

> `optional` **routeAvoidance**: [`RouteAvoidance`](Directions.md#routeavoidance)[]

The features to avoid when calculating the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:408](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L408)

##### routeDraggable?

> `optional` **routeDraggable**: `boolean`

A boolean indicating whether the route line on the map can be dragged with the mouse cursor.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:411](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L411)

##### routeIndex?

> `optional` **routeIndex**: `number`

If multiple routes are returned, the index of the route and directions to display.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:414](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L414)

##### routeMode?

> `optional` **routeMode**: [`RouteMode`](Directions.md#routemode)

The type of directions to calculate.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:417](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L417)

##### routeOptimization?

> `optional` **routeOptimization**: [`RouteOptimization`](Directions.md#routeoptimization)

The optimization setting for the route calculation.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:420](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L420)

##### time?

> `optional` **time**: `Date`

The time to use when calculating the route. If this property is set to null, the current time is used

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:426](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L426)

##### timeType?

> `optional` **timeType**: [`TimeType`](Directions.md#timetype)

The type of the time specified. The default value is departure.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:423](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L423)

##### vehicleSpec?

> `optional` **vehicleSpec**: [`IVehicleSpec`](Directions.md#ivehiclespec)

Specifies the vehicle attributes to use when calculating a truck route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:429](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L429)

***

### IDirectionsStep

Represents one direction in a set of route directions.

#### Properties

##### childItineraryItems

> **childItineraryItems**: [`IDirectionsStep`](Directions.md#idirectionsstep)[]

The child direction items for this directions step.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:217](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L217)

##### coordinate

> **coordinate**: [`Location`](../README.md#location)

The location of the start of the direction.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:220](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L220)

##### distance

> **distance**: `string`

The total distance of the step in the unit specified in the distanceUnit property of the DirectionsRequestOptions.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:223](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L223)

##### durationInSeconds

> **durationInSeconds**: `number`

The total time, in seconds, of the direction step.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:226](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L226)

##### formattedText

> **formattedText**: `string`

The HTML formatted route instruction associated with the step.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:229](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L229)

##### isImageRoadShield

> **isImageRoadShield**: `boolean`

A boolean indicating whether the maneuver image is a road shield image.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:232](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L232)

##### maneuver

> **maneuver**: `string`

The type of maneuver being performed.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:235](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L235)

##### postIntersectionHints

> **postIntersectionHints**: `string`[]

An array of strings, where each string is a hint to help determine when to move to the next direction step. Not all direction steps have hints.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:238](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L238)

##### preIntersectionHints

> **preIntersectionHints**: `string`[]

An array of strings, where each string is a hint to help determine when you have arrived at this direction step. Not all direction steps have hints.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:241](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L241)

##### startStopName

> **startStopName**: `string`

The name of the transit stop where this step originates.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:244](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L244)

##### transitLine

> **transitLine**: [`ITransitLine`](Directions.md#itransitline)

The transit line associated with this step.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:247](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L247)

##### transitStepIcon

> **transitStepIcon**: `string`

The URL of the image to use for transit direction steps.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:250](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L250)

##### transitStopId

> **transitStopId**: `string`

The ID of the transit stop.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:253](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L253)

##### transitTerminus

> **transitTerminus**: `string`

The name of the transit line end.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:256](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L256)

##### warnings

> **warnings**: [`IDirectionsStepWarning`](Directions.md#idirectionsstepwarning)[]

An array of route warnings associated with this step.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:259](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L259)

***

### IDirectionsStepWarning

Represents a route direction warning, such as a traffic congestion warning.

#### Properties

##### origin

> **origin**: `string`

Where the warning starts.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:265](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L265)

##### severity

> **severity**: `string`

The severity of the warning. Values can be: Low Impact, Minor, Moderate, Serious or None.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:268](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L268)

##### text

> **text**: `string`

The warning text.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:271](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L271)

##### to

> **to**: `string`

Where the warning ends.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:274](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L274)

##### warningType

> **warningType**: `string`

The type of warning. A list of Warning type values can be found here: https://msdn.microsoft.com/en-us/library/hh441731.aspx

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:277](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L277)

***

### IRoute

Represents a route.

#### Properties

##### routeLegs

> **routeLegs**: [`IRouteLeg`](Directions.md#irouteleg)[]

The legs of the route. Each route leg represents the route between two waypoints.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:283](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L283)

##### routePath

> **routePath**: [`Location`](../README.md#location)[]

An array of locations that makes up the path of the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:286](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L286)

***

### IRouteLeg

Represents a leg of a route. A route leg is the part of the route between two stop waypoints.

#### Properties

##### endTime

> **endTime**: `Date`

The end time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:292](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L292)

##### endWaypointLocation

> **endWaypointLocation**: [`Location`](../README.md#location)

The location of the last waypoint of this leg.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:295](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L295)

##### itineraryItems

> **itineraryItems**: [`IDirectionsStep`](Directions.md#idirectionsstep)[]

The directions steps associated with this route leg.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:298](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L298)

##### originalRouteIndex

> **originalRouteIndex**: `number`

The index of the route to which this route leg belongs.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:301](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L301)

##### startTime

> **startTime**: `Date`

The start time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:304](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L304)

##### startWaypointLocation

> **startWaypointLocation**: [`Location`](../README.md#location)

The location of the first waypoint of this route leg.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:307](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L307)

##### subLegs

> **subLegs**: [`IRouteSubLeg`](Directions.md#iroutesubleg)[]

The sub legs of this route leg. A sub leg of a route is the part of the route between a stop point and a via point or between two via points.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:310](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L310)

##### summary

> **summary**: [`IRouteSummary`](Directions.md#iroutesummary)

The summary which describes this route leg.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:313](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L313)

***

### IRouteSubLeg

Represents a route sub leg. A route sub leg is the part of the route between a stop point and a via point or between two via points.

#### Properties

##### actualEnd

> **actualEnd**: [`Location`](../README.md#location)

The location of the last waypoint of the sub leg.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:319](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L319)

##### actualStart

> **actualStart**: [`Location`](../README.md#location)

The location of the first waypoint of the sub leg.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:322](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L322)

##### endDescription

> **endDescription**: `string`

The description of the last waypoint of the sub leg.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:325](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L325)

##### startDescription

> **startDescription**: `string`

The description of the first waypoint of the sub leg.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:328](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L328)

***

### IRouteSummary

Represents a route summary.

#### Properties

##### distance

> **distance**: `number`

The total travel distance of the route

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:334](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L334)

##### monetaryCost

> **monetaryCost**: `number`

The cost of the route. This property is only returned if the routeMode of the IDirectionsRequestOptions is set to transit and the map culture is set to ja-jp.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:337](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L337)

##### northEast

> **northEast**: [`Location`](../README.md#location)

The location of the northeast corner of bounding box that defines the best map view of the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:340](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L340)

##### southWest

> **southWest**: [`Location`](../README.md#location)

The location of the southwest corner of bounding box that defines the best map view of the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:343](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L343)

##### time

> **time**: `number`

The total travel time, in seconds, for the route.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:346](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L346)

##### timeWithTraffic

> **timeWithTraffic**: `number`

The total travel time, in seconds, taking into account traffic delays, for the route.
This property is 0 if the avoidTraffic property of the IDirectionsRequestOptions is set to false.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:352](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L352)

***

### ITransitLine

Contains information about a transit line.

#### Properties

##### abbreviatedName

> **abbreviatedName**: `string`

The short name for the transit line.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:358](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L358)

##### agencyId

> **agencyId**: `number`

The ID of the agency that owns the transit line.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:361](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L361)

##### agencyName

> **agencyName**: `string`

The name of the agency that owns the transit line.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:364](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L364)

##### agencyUrl

> **agencyUrl**: `string`

The URL of the website of the agency that owns the transit line.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:367](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L367)

##### phoneNumber

> **phoneNumber**: `string`

Phone number for the transit agency.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:370](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L370)

##### providerInfo

> **providerInfo**: `string`

Information about the provider of this transit line data.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:373](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L373)

##### uri

> **uri**: `string`

The uri for the transit agencies website.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:376](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L376)

##### verboseName

> **verboseName**: `string`

The full name of this transit line.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:379](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L379)

***

### IVehicleSpec

Specifies the vehicle attributes to use when calculating a truck route.

#### Properties

##### dimensionUnit?

> `optional` **dimensionUnit**: `string`

The unit of measurement of width, height, length. Can be one of the following values:
•	meter or m [default]
•	foot or ft

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:493](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L493)

##### vehicleAvoidCrossWind?

> `optional` **vehicleAvoidCrossWind**: `boolean`

Indicates if the vehicle shall avoid crosswinds.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:530](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L530)

##### vehicleAvoidGroundingRisk?

> `optional` **vehicleAvoidGroundingRisk**: `boolean`

Indicates if the route shall avoid the risk of grounding.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:533](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L533)

##### vehicleAxles?

> `optional` **vehicleAxles**: `number`

The number of axles.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:515](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L515)

##### vehicleHazardousMaterials?

> `optional` **vehicleHazardousMaterials**: `string`

A comma separated and case-sensitive list of one or more hazardous materials for which the vehicle is transporting. Possible values and their aliases are:

•	Combustable or C
•	Corrosive or Cr
•	Explosive or E
•	Flammable or F
•	FlammableSolid or FS
•	Gas or G
•	GoodsHarmfulToWater or WH
•	Organic or O
•	Other
•	Poison or P
•	PoisonousInhalation or PI
•	Radioactive or R
•	None

Example: "WH,R,Poison"

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:554](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L554)

##### vehicleHazardousPermits?

> `optional` **vehicleHazardousPermits**: `string`

A comma separated and case-sensitive list of one or more hazardous materials for which the vehicle has a permit. Possible values and their aliases are: 

•	AllAppropriateForLoad
•	Combustible or C 
•	Corrosive or Cr 
•	Explosive or E 
•	Flammable or F 
•	FlammableSolid or FS 
•	Gas or G 
•	Organic or O 
•	Poison or P 
•	PoisonousInhalation or PI 
•	Radioactive or R 
•	None

Example: "C,Explosive,Corrosive"

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:574](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L574)

##### vehicleHeight?

> `optional` **vehicleHeight**: `number`

The height of the vehicle in the specified dimension units.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:503](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L503)

##### vehicleLength?

> `optional` **vehicleLength**: `number`

The length of the vehicle in the specified dimension units.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:509](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L509)

##### vehicleMaxGradient?

> `optional` **vehicleMaxGradient**: `boolean`

The maximum gradient the vehicle can drive measured in degrees.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:524](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L524)

##### vehicleMinTurnRadius?

> `optional` **vehicleMinTurnRadius**: `number`

The minimum required radius for the vehicle to turn in the specified dimension units.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:527](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L527)

##### vehicleSemi?

> `optional` **vehicleSemi**: `boolean`

Indicates if the truck is pulling a semi-trailer. Semi-trailer restrictions are mostly used in North America.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:521](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L521)

##### vehicleTrailers?

> `optional` **vehicleTrailers**: `number`

The number of trailers.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:518](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L518)

##### vehicleWeight?

> `optional` **vehicleWeight**: `number`

The weight of the vehicle in the specified weight units.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:512](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L512)

##### vehicleWidth?

> `optional` **vehicleWidth**: `number`

The width of the vehicle in the specified dimension units.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:506](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L506)

##### weightUnit?

> `optional` **weightUnit**: `string`

The unit of measurement of weight. Can be one of the following values:
•	kilogram or kg [default]
•	pound or lb

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:500](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L500)

***

### IWaypointOptions

Options that can be used to define a waypoint.

#### Properties

##### address?

> `optional` **address**: `string`

The address string of the waypoint. For example, the following strings are valid for this parameter: "Seattle", "1 Microsoft Way, Redmond, WA". Either the address or location property must be specified.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:387](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L387)

##### isViaPoint?

> `optional` **isViaPoint**: `boolean`

A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to
true if you just want the route to pass through this location. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:393](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L393)

##### location?

> `optional` **location**: [`Location`](../README.md#location)

The location of the waypoint. Either the address or location property must be specified.

###### Defined in

[src/types/MicrosoftMaps/Modules/Directions.d.ts:396](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Directions.d.ts#L396)

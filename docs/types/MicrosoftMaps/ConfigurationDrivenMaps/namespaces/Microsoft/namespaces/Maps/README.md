[**trackmaker**](../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../README.md) / [Microsoft](../../README.md) / Maps

# Maps

The Bing Maps V8 developer API.

## Index

### Namespaces

- [Directions](namespaces/Directions.md)
- [DrawingTools](namespaces/DrawingTools.md)
- [Events](namespaces/Events.md)
- [GeoJson](namespaces/GeoJson.md)
- [GeoXml](namespaces/GeoXml.md)
- [Search](namespaces/Search.md)
- [SpatialDataService](namespaces/SpatialDataService/README.md)
- [SpatialMath](namespaces/SpatialMath/README.md)
- [Traffic](namespaces/Traffic.md)
- [WellKnownText](namespaces/WellKnownText.md)

## Enumerations

### ClusterPlacementType

Used to specify how a clustered pushpin should be positioned relative to the pushpins it contains.

#### Requires

The Microsoft.Maps.Clustering module.

#### Enumeration Members

##### FirstLocation

> **FirstLocation**: `number`

This method is the simplest way to represent a cluster. It places the cluster at the first location in the cluster. This method may not accurately
represent the data but requires little processing power.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:88](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L88)

##### MeanAverage

> **MeanAverage**: `number`

Mean Average placement calculates the average position of a group of coordinates. This method creates a more realistic representation of the data,
however requires more processing power and increases the chances of pushpins overlapping.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:82](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L82)

***

### DataBinType

Specifies the shape of data bin rendered in the layer.

#### Enumeration Members

##### circle

> **circle**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:35](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L35)

##### hexCircle

> **hexCircle**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:41](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L41)

##### hexagon

> **hexagon**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:38](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L38)

##### pointyHexagon

> **pointyHexagon**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:44](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L44)

##### square

> **square**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:47](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L47)

***

### GeoXmlCompressedFormat

An enumeration of the different compressed formats that XML can be outputted as.

#### Requires

The Microsoft.Maps.GeoXml module.

#### Enumeration Members

##### arrayBuffer

> **arrayBuffer**: `number`

XML data compressed into an ArrayBuffer.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:56](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L56)

##### base64

> **base64**: `number`

XML data compressed into a Base64 Data URI.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:50](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L50)

##### blob

> **blob**: `number`

XML data compressed into a Blob.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:53](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L53)

***

### GeoXmlFormat

An enumeration of different GeoXML file formats.

#### Requires

The Microsoft.Maps.GeoXml module.

#### Enumeration Members

##### geoRss

> **geoRss**: `number`

A GeoRSS XML file using ATOM format.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:41](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L41)

##### gpx

> **gpx**: `number`

A GPX XML file format.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:38](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L38)

##### kml

> **kml**: `number`

A KML XML file format.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:35](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L35)

***

### LabelOverlay

This enumeration defines how the map labels are displayed.

#### Enumeration Members

##### hidden

> **hidden**: `number`

Map labels are hidden. Note that this will have no effect on road maps unless the allowHidingLabelsOfRoad map option
is set to true.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:46](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L46)

##### visible

> **visible**: `number`

Map labels are visible.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:49](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L49)

***

### MapTypeId

This enumeration is used to specify the type of map style that should be displayed by the map.

#### Enumeration Members

##### aerial

> **aerial**: `number`

The aerial map type which uses top-down satellite & airplane imagery.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:55](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L55)

##### birdseye

> **birdseye**: `number`

High resolution aerial imagery taken at 45 degrees to the ground, from 4 different directions.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:58](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L58)

##### canvasDark

> **canvasDark**: `number`

A darker version of the road maps.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:61](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L61)

##### canvasLight

> **canvasLight**: `number`

A lighter version of the road maps which also has some of the details such as hill shading disabled.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:64](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L64)

##### grayscale

> **grayscale**: `number`

A grayscale version of the road maps.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:67](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L67)

##### mercator

> **mercator**: `number`

Displays a blank canvas that uses the mercator map project. It basically removed the base maps layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:70](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L70)

##### ordnanceSurvey

> **ordnanceSurvey**: `number`

Ordnance survey map type (en-gb only).

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:73](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L73)

##### road

> **road**: `number`

Road map type.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L76)

##### streetside

> **streetside**: `number`

Provides streetside panoramas from the street level.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:79](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L79)

***

### NavigationBarMode

The NavigationBarMode can be used to customize the layout and style of the navigation bar.

#### Enumeration Members

##### compact

> **compact**: `number`

A compact navigation bar that includes a smaller drop down for the map type and zoom buttons. Recommended for small
maps or screen such as a mobile device.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:88](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L88)

##### default

> **default**: `number`

The default navigation bar that has a drop down for the map type, a locate me button, and zoom buttons. Recommended for
medium to large maps in desktop browsers.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:94](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L94)

##### minified

> **minified**: `number`

A minified navigation bar that has a button to toggle between road and aerial maps, zoom buttons, and a button to turn
traffic information on and off. Recommended for small maps or screen such as a mobile device.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:100](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L100)

##### square

> **square**: `number`

A navigation bar that uses aligned square icons. It includes a drop down for map type, a locate me button, and zoom buttons. 
It is also the only mode that supports the floor switcher for the Venue Maps Module.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:106](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L106)

***

### NavigationBarOrientation

The NavigationBarOrientation enumeration is used to define how the navigation bar controls are laid out.

#### Enumeration Members

##### horizontal

> **horizontal**: `number`

Repositions the buttons in the navigation bar such that they are aligned horizontally.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:112](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L112)

##### vertical

> **vertical**: `number`

Repositions the buttons in the navigation bar such that they are aligned vertically.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:115](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L115)

***

### OverviewMapMode

This enumeration is used to specify how the overview map for the streetside map mode should be displayed.

#### Enumeration Members

##### expanded

> **expanded**: `number`

Shows the overview map in an expanded state.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:121](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L121)

##### hidden

> **hidden**: `number`

Hides the overview map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:124](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L124)

##### minimized

> **minimized**: `number`

Shows the overview map in a minimized state.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:127](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L127)

***

### PixelReference

Contains enum to show how pixels are defined.

#### Enumeration Members

##### control

> **control**: `number`

The pixel is defined relative to the map control’s root element, where the top left corner of the map control is (0, 0).

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:133](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L133)

##### page

> **page**: `number`

The pixel is defined relative to the page, where the top left corner of the HTML page is (0, 0).

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:136](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L136)

##### viewport

> **viewport**: `number`

The pixel is defined in viewport coordinates, relative to the center of the map, where the center of the map is (0, 0).

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:139](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L139)

## Classes

### AnimatedTileLayer

Provides a layer which can smoothly animate through an array of tile layer sources.

#### Constructors

##### new AnimatedTileLayer()

> **new AnimatedTileLayer**(`options`?): [`AnimatedTileLayer`](README.md#animatedtilelayer)

###### Parameters

• **options?**: [`IAnimatedTileLayerOptions`](README.md#ianimatedtilelayeroptions)

Options that define how to animate between the specified tile layers.

###### Returns

[`AnimatedTileLayer`](README.md#animatedtilelayer)

###### Contstructor

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:970](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L970)

#### Methods

##### getFrameRate()

> **getFrameRate**(): `number`

Gets the frame rate of this animated tile layer.

###### Returns

`number`

The frame rate of this animated tile layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:976](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L976)

##### getLoadingScreen()

> **getLoadingScreen**(): [`CustomOverlay`](README.md#customoverlay)

Gets the loading screen overlay when tiles are being fetched.

###### Returns

[`CustomOverlay`](README.md#customoverlay)

The loading screen overlay when tiles are being fetched.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:982](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L982)

##### getMaxTotalLoadTime()

> **getMaxTotalLoadTime**(): `number`

Gets the maximum total tile fetching time of this animated tile layer.

###### Returns

`number`

The maximum total tile fetching time of this animated tile layer

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:988](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L988)

##### getTileSources()

> **getTileSources**(): [`TileSource`](README.md#tilesource)[]

Gets the tile sources associated with this layer.

###### Returns

[`TileSource`](README.md#tilesource)[]

The tile sources associated with this layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:994](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L994)

##### getVisible()

> **getVisible**(): `boolean`

Gets the visibility of this animated tile layer.

###### Returns

`boolean`

The visibility of this animated tile layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1000](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1000)

##### pause()

> **pause**(): `void`

Pause the tile layer animation. *

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1003](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1003)

##### play()

> **play**(): `void`

Play the animation either from start or where it was paused. *

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1006](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1006)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options for the animated tile layer.

###### Parameters

• **options**: [`IAnimatedTileLayerOptions`](README.md#ianimatedtilelayeroptions)

###### Returns

`void`

###### Params

Options that define how to animate between the specified tile layers.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1012](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1012)

##### stop()

> **stop**(): `void`

Stop the layer animation, hide layer, and reset frame to the beginning. *

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1015](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1015)

***

### AutosuggestManager

The AutosuggestManager is the primary class in the Autosuggest module that powers the autosuggest functionality.

#### Requires

The Microsoft.Maps.Autosuggest module.

#### Constructors

##### new AutosuggestManager()

> **new AutosuggestManager**(`options`?): [`AutosuggestManager`](README.md#autosuggestmanager)

###### Parameters

• **options?**: [`IAutosuggestOptions`](README.md#iautosuggestoptions)

The options to use with the autosuggest manager.

###### Returns

[`AutosuggestManager`](README.md#autosuggestmanager)

###### Requires

The Microsoft.Maps.Autosuggest module.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:116](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L116)

#### Methods

##### attachAutosuggest()

> **attachAutosuggest**(`suggestionBoxId`, `suggestionContainerId`, `selectedSuggestionCallback`): `void`

Attaches the Autosuggest functionality to an input box.

###### Parameters

• **suggestionBoxId**: `string`

The HTML element identifier of the input box.

• **suggestionContainerId**: `string`

The Id of container where suggestions will be displayed.

• **selectedSuggestionCallback**

A reference to a callback function that will be called when a user selects a suggestion from the Autosuggest UI.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:124](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L124)

##### detachAutosuggest()

> **detachAutosuggest**(): `void`

Detaches the autosuggest functionality from the input box, freeing any resources it has or events it has tied to.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:127](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L127)

##### dispose()

> **dispose**(): `void`

Disposes the Autosuggest object, freeing any resources it has or events it has tied to.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:130](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L130)

##### getOptions()

> **getOptions**(): [`IAutosuggestOptions`](README.md#iautosuggestoptions)

Gets the options currently used by the autosuggest manager.

###### Returns

[`IAutosuggestOptions`](README.md#iautosuggestoptions)

The options currently used by the autosuggest manager.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:136](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L136)

##### getSuggestions()

> **getSuggestions**(`query`, `callback`): `void`

Programmatically retrieves suggestions for queries without the need to attach a textbox to the AutosuggestManager.

###### Parameters

• **query**: `string`

The text to get suggestions for.

• **callback**

The callback function to return the suggestions to.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L143)

##### setOptions()

> **setOptions**(`options`?): `void`

Sets the options currently used by the autosuggest manager.

###### Parameters

• **options?**: [`IAutosuggestOptions`](README.md#iautosuggestoptions)

The options to use with the autosuggest manager.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:149](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L149)

***

### ClusterLayer

This class allows you to easily add in client side clustering to your application. Client Side Clustering is a method where pushpins that are close
together are grouped and represented as a single pushpin, often using a different icon to indicate the cluster. This is a great way to improve both
the user experience and performance of the map.

#### Requires

The Microsoft.Maps.Clustering module.

#### Implements

- [`IDataLayer`](README.md#idatalayer)

#### Constructors

##### new ClusterLayer()

> **new ClusterLayer**(`pushpins`, `options`?): [`ClusterLayer`](README.md#clusterlayer)

###### Parameters

• **pushpins**: [`Pushpin`](README.md#pushpin)[]

An array of pushpins to cluster in the layer.

• **options?**: [`IClusterLayerOptions`](README.md#iclusterlayeroptions)

The options used to customize how the ClusterLayer functions.

###### Returns

[`ClusterLayer`](README.md#clusterlayer)

###### Requires

The Microsoft.Maps.Clustering module.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:119](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L119)

#### Methods

##### clear()

> **clear**(): `void`

Clears all the data in the cluster layer.

###### Returns

`void`

###### Implementation of

[`IDataLayer`](README.md#idatalayer).[`clear`](README.md#clear-10)

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:122](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L122)

##### getClusterPushpinByGridKey()

> **getClusterPushpinByGridKey**(`gridKey`): [`Pushpin`](README.md#pushpin) \| [`ClusterPushpin`](README.md#clusterpushpin)

Gets the pushpin in the specified cluster grid cell which can be either a ClusterPushpin if there are multiple pushpins in a cell or a single Pushpin.

###### Parameters

• **gridKey**: `number`

###### Returns

[`Pushpin`](README.md#pushpin) \| [`ClusterPushpin`](README.md#clusterpushpin)

The pushpin in the specified cluster grid cell which can be either a ClusterPushpin if there are multiple pushpins in a cell or a single Pushpin.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:154](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L154)

##### getDisplayedPushpins()

> **getDisplayedPushpins**(): [`Pushpin`](README.md#pushpin)[]

Gets all the pushpins that are in the current map view. If clustering is disabled, all pushpins in the clustering layer are returned.

###### Returns

[`Pushpin`](README.md#pushpin)[]

All the pushpins that are in the current map view. If clustering is disabled, all pushpins in the clustering layer are returned.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:128](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L128)

##### getOptions()

> **getOptions**(): [`IClusterLayerOptions`](README.md#iclusterlayeroptions)

Gets the current options used by the cluster layer.

###### Returns

[`IClusterLayerOptions`](README.md#iclusterlayeroptions)

The current options used by the cluster layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:134](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L134)

##### getPushpins()

> **getPushpins**(): [`Pushpin`](README.md#pushpin)[]

Gets all pushpins that are in the layers.

###### Returns

[`Pushpin`](README.md#pushpin)[]

An array of all the pushpins that are in the layers.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:140](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L140)

##### getPushpinsByGridKey()

> **getPushpinsByGridKey**(`gridKey`): [`Pushpin`](README.md#pushpin)[]

Gets the original pushpins that are in the specified grid cell.

###### Parameters

• **gridKey**: `number`

###### Returns

[`Pushpin`](README.md#pushpin)[]

The original pushpins that are in the specified grid cell.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:147](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L147)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the clustering options to use in the layer.

###### Parameters

• **options**: [`IClusterLayerOptions`](README.md#iclusterlayeroptions)

###### Returns

`void`

###### Params

options The clustering options to use in the layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:160](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L160)

##### setPushpins()

> **setPushpins**(`pushpins`): `void`

Sets the array of pushpins that are used in the clustering layer.

###### Parameters

• **pushpins**: [`Pushpin`](README.md#pushpin)[]

An array of pushpins that are to be used by the clustering layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:166](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L166)

***

### ClusterPushpin

This class extends the Pushpin class and has all the same methods and properties plus the following properties.

#### Requires

The Microsoft.Maps.Clustering module.

#### Extends

- [`Pushpin`](README.md#pushpin)

#### Constructors

##### new ClusterPushpin()

> **new ClusterPushpin**(`location`, `options`?): [`ClusterPushpin`](README.md#clusterpushpin)

###### Parameters

• **location**: [`Location`](README.md#location)

A Location object that specifies where to display the pushpin.

• **options?**: [`IPushpinOptions`](README.md#ipushpinoptions)

Options used when creating the Pushpin.

###### Returns

[`ClusterPushpin`](README.md#clusterpushpin)

###### Inherited from

[`Pushpin`](README.md#pushpin).[`constructor`](README.md#constructors-28)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2473](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2473)

#### Properties

##### containedPushpins

> **containedPushpins**: [`Pushpin`](README.md#pushpin)[]

An array of all the pushpins that are in the cluster.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:97](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L97)

##### gridKey

> **gridKey**: `number`

The grid cell key that can be used retrieve the clustered pushpin(s) from the clustering layer. This is useful when creating a clickable list that
link items in the list to clusters or pushpins on the map. Your list just needs to store the gridKey value.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:103](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L103)

##### metadata

> **metadata**: `any`

Information that is linked to the pushpin.
Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`metadata`](README.md#metadata-12)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2466](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2466)

#### Methods

##### getAnchor()

> **getAnchor**(): [`Point`](README.md#point)

Gets the point on the Pushpin icon which is anchored to the pushpin location.
An anchor of (0,0) is the top left corner of the icon.

###### Returns

[`Point`](README.md#point)

The point on the Pushpin icon which is anchored to the pushpin location.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getAnchor`](README.md#getanchor-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2480](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2480)

##### getClickedStyleEnabled()

> **getClickedStyleEnabled**(): `boolean`

Gets whether the pushpin clicked style is enabled

###### Returns

`boolean`

Whether the pushpin clicked style is enabled.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getClickedStyleEnabled`](README.md#getclickedstyleenabled-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2486](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2486)

##### getColor()

> **getColor**(): `string` \| [`Color`](README.md#color)

Gets the color option of the pushpin.

###### Returns

`string` \| [`Color`](README.md#color)

The color option of the pushpin.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getColor`](README.md#getcolor-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2492](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2492)

##### getCursor()

> **getCursor**(): `string`

Gets the css cursor value when pushpin has events on it.

###### Returns

`string`

CSS cursor string when pushpin has events on it.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getCursor`](README.md#getcursor-5)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2498](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2498)

##### getDraggable()

> **getDraggable**(): `boolean`

Gets a boolean indicating if the pushpin is draggable or not.

###### Returns

`boolean`

A boolean indicating if the pushpin is draggable or not.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getDraggable`](README.md#getdraggable-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2504](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2504)

##### getHoverStyleEnabled()

> **getHoverStyleEnabled**(): `boolean`

Gets whether the pushpin hover style is enabled

###### Returns

`boolean`

Whether the pushpin hover style is enabled.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getHoverStyleEnabled`](README.md#gethoverstyleenabled-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2510](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2510)

##### getIcon()

> **getIcon**(): `string`

Gets the custom Pushpin source icon string which can be a url to an image or SVG, inline SVG string, or data URI.

###### Returns

`string`

the custom Pushpin icon source string, which can be a url to an image or SVG, inline SVG string, or data URI.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getIcon`](README.md#geticon-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2516](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2516)

##### getLocation()

> **getLocation**(): [`Location`](README.md#location)

Returns the location of the pushpin.

###### Returns

[`Location`](README.md#location)

The location of the pushpin.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getLocation`](README.md#getlocation-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2522](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2522)

##### getRoundClickableArea()

> **getRoundClickableArea**(): `boolean`

Returns whether the clickable area of the pushpin is an ellipse.

###### Returns

`boolean`

A boolean indicating whether the clickable area of the pushpin is an ellipse.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getRoundClickableArea`](README.md#getroundclickablearea-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2528](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2528)

##### getSubTitle()

> **getSubTitle**(): `string`

Gets the subtitle label of the Pushpin.

###### Returns

`string`

The subtitle label of the Pushpin.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getSubTitle`](README.md#getsubtitle-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2534](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2534)

##### getText()

> **getText**(): `string`

Gets the text within the Pushpin icon.

###### Returns

`string`

The text within the Pushpin icon.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getText`](README.md#gettext-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2540](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2540)

##### getTextOffset()

> **getTextOffset**(): [`Point`](README.md#point)

Gets the amount the text is shifted from the Pushpin icon.

###### Returns

[`Point`](README.md#point)

the amount the text is shifted from the Pushpin icon.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getTextOffset`](README.md#gettextoffset-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2546](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2546)

##### getTitle()

> **getTitle**(): `string`

Gets the title label of the Pushpin.

###### Returns

`string`

the title label of the Pushpin.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getTitle`](README.md#gettitle-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2552](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2552)

##### getVisible()

> **getVisible**(): `boolean`

Gets whether the pushpin is visible.

###### Returns

`boolean`

A boolean indicating whether the pushpin is visible or not.

###### Inherited from

[`Pushpin`](README.md#pushpin).[`getVisible`](README.md#getvisible-15)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2558](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2558)

##### setLocation()

> **setLocation**(`location`): `void`

Sets the location of the Pushpin.

###### Parameters

• **location**: [`Location`](README.md#location)

The location of the Pushpin.

###### Returns

`void`

###### Inherited from

[`Pushpin`](README.md#pushpin).[`setLocation`](README.md#setlocation-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2564](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2564)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the properties for the pushpin.

###### Parameters

• **options**: [`IPushpinOptions`](README.md#ipushpinoptions)

The IPushpinOptions object containing the options to customize the pushpin.

###### Returns

`void`

###### Inherited from

[`Pushpin`](README.md#pushpin).[`setOptions`](README.md#setoptions-16)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2570](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2570)

***

### Color

Class that represents a color

#### Constructors

##### new Color()

> **new Color**(`a`, `r`, `g`, `b`): [`Color`](README.md#color)

###### Parameters

• **a**: `number`

The alpha value in argb format

• **r**: `number`

The r value in argb format

• **g**: `number`

The g value in argb format

• **b**: `number`

The b value in argb format

###### Returns

[`Color`](README.md#color)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1039](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1039)

#### Properties

##### a

> **a**: `number`

The opacity of the color. The range of valid values are an interger between 0 and 255, or a decimal between 0 and 1.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1021](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1021)

##### b

> **b**: `number`

The blue value of the color. The range of valid values is 0 to 255

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1030](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1030)

##### g

> **g**: `number`

The green value of the color. The range of valid values is 0 to 255

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1027](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1027)

##### r

> **r**: `number`

The red value of the color. The range of valid values is 0 to 255

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1024](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1024)

#### Methods

##### clone()

> **clone**(): [`Color`](README.md#color)

Clones the color.

###### Returns

[`Color`](README.md#color)

The clone of the color.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1059](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1059)

##### getOpacity()

> **getOpacity**(): `number`

Gets the opacity of this color.

###### Returns

`number`

The opacity between 0 and 1 of this color.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1065](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1065)

##### toHex()

> **toHex**(): `string`

Converts the color to hex notation.

###### Returns

`string`

The hex notation as '#rrggbb' (ignores a).

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1071](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1071)

##### toRgba()

> **toRgba**(): `string`

Converts the color to rgba notation.

###### Returns

`string`

The rgba notation as rgba(rr, gg, bb, aa)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1077](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1077)

##### clone()

> `static` **clone**(`color`): [`Color`](README.md#color)

Clones the color.

###### Parameters

• **color**: [`Color`](README.md#color)

The color class that needs to be clones.

###### Returns

[`Color`](README.md#color)

The colne of the color.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1046](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1046)

##### fromHex()

> `static` **fromHex**(`hex`): [`Color`](README.md#color)

Creates the color from a hex string.

###### Parameters

• **hex**: `string`

The color represented as '#rrggbb' format.

###### Returns

[`Color`](README.md#color)

The color object.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1053](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1053)

***

### ConfigurableMap

The configuration driven map framework.

#### Constructors

##### new ConfigurableMap()

> **new ConfigurableMap**(): [`ConfigurableMap`](README.md#configurablemap)

###### Returns

[`ConfigurableMap`](README.md#configurablemap)

#### Methods

##### createFromConfig()

> `static` **createFromConfig**(`element`, `configFileUrl`, `withCredentials`, `requestHeaders`?, `callback`?, `errorCallback`?): `void`

A static function that loads a map using a JSON configuraiton file.

###### Parameters

• **element**: `string` \| `HTMLElement`

The parent element of the map as a CSS selector string or HTMLElement.

• **configFileUrl**: `string`

The Url to download the JSON configuration file from. This should JSON file should contain a IConfigurableMapOptions object.

• **withCredentials**: `boolean`

Creates the config file request with the setwithcredentials property.

• **requestHeaders?**: [`IDictionary`](README.md#idictionaryt)\<`string`\>

Set of headers that need to be added to config file request.

• **callback?**

Callback that is triggered when the map loads successfully.

• **errorCallback?**

Callback that is triggered when an error occurs when loading the map.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:100](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L100)

***

### ContourLayer

The contour layer class.

#### Extends

- [`Layer`](README.md#layer)

#### Constructors

##### new ContourLayer()

> **new ContourLayer**(`contourLines`, `options`?): [`ContourLayer`](README.md#contourlayer)

###### Parameters

• **contourLines**: [`ContourLine`](README.md#contourline)[]

The contour lines that compose this layer.

• **options?**: [`IContourLayerOptions`](README.md#icontourlayeroptions)

The contour layer options.

###### Returns

[`ContourLayer`](README.md#contourlayer)

###### Overrides

[`Layer`](README.md#layer).[`constructor`](README.md#constructors-19)

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L76)

#### Properties

##### metadata

> **metadata**: `any`

Optional property to store any additional metadata for this layer.

###### Inherited from

[`Layer`](README.md#layer).[`metadata`](README.md#metadata-9)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1678](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1678)

#### Methods

##### add()

> **add**(`primitive`, `index`?): `void`

Adds a shapes to the layer, at the specified index if specified.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive) \| [`IPrimitive`](README.md#iprimitive)[]

The shape(s) to be added to the layer.

• **index?**: `number`

The index at which to insert the shape into the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`add`](README.md#add-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1691](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1691)

##### clear()

> **clear**(): `void`

Clears all data on the contour layer.

###### Returns

`void`

###### Overrides

[`Layer`](README.md#layer).[`clear`](README.md#clear-7)

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:81](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L81)

##### dispose()

> **dispose**(): `void`

Cleans up any resources this object is consuming

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`dispose`](README.md#dispose-7)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1701](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1701)

##### getContourLines()

> **getContourLines**(): [`ContourLine`](README.md#contourline)[]

Gets the contour lines of this layer.

###### Returns

[`ContourLine`](README.md#contourline)[]

The contour lines of this layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:87](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L87)

##### getContourPolygons()

> **getContourPolygons**(): [`Polygon`](README.md#polygon)[]

Gets the polygons that were generated from the contour lines in this layer.

###### Returns

[`Polygon`](README.md#polygon)[]

The polygons that were generated from the contour lines in this layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:93](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L93)

##### getId()

> **getId**(): `string`

Gets the id of the layer.

###### Returns

`string`

The id assigned to the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getId`](README.md#getid-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1707](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1707)

##### getOptions()

> **getOptions**(): [`IContourLayerOptions`](README.md#icontourlayeroptions)

Retrieves the options of this contour layer.

###### Returns

[`IContourLayerOptions`](README.md#icontourlayeroptions)

The options of this contour layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:99](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L99)

##### getPrimitives()

> **getPrimitives**(): [`IPrimitive`](README.md#iprimitive)[]

Gets an array of shapes that are in the layer. This can be used to iterate over the individual shapes.

###### Returns

[`IPrimitive`](README.md#iprimitive)[]

An array of shapes that are in the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getPrimitives`](README.md#getprimitives-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1713](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1713)

##### getVisible()

> **getVisible**(): `boolean`

Gets a value indicating whether the layer is visible or not.

###### Returns

`boolean`

A boolean indicating if the layer is visible or not.

###### Inherited from

[`Layer`](README.md#layer).[`getVisible`](README.md#getvisible-12)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1719](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1719)

##### getZIndex()

> **getZIndex**(): `number`

Gets the zIndex of the layer.

###### Returns

`number`

The zIndex of the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getZIndex`](README.md#getzindex-4)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1725](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1725)

##### remove()

> **remove**(`primitive`): [`IPrimitive`](README.md#iprimitive)

Removes a primitive

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive)

primitive that needs to be removed

###### Returns

[`IPrimitive`](README.md#iprimitive)

The primitive that needs to be removed

###### Inherited from

[`Layer`](README.md#layer).[`remove`](README.md#remove-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1732](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1732)

##### removeAt()

> **removeAt**(`index`): [`IPrimitive`](README.md#iprimitive)

Removes a primitive at a specified index

###### Parameters

• **index**: `number`

index of the primitive that needs to be removed

###### Returns

[`IPrimitive`](README.md#iprimitive)

The primitive that needs to be removed at this index

###### Inherited from

[`Layer`](README.md#layer).[`removeAt`](README.md#removeat-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1739](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1739)

##### setContourLines()

> **setContourLines**(`contourLines`): `void`

Sets the contour lines used to calculate the polygon areas of this layer.

###### Parameters

• **contourLines**: [`ContourLine`](README.md#contourline)[]

The contour lines used to calculate the polygon areas of this layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:105](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L105)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options of the contour layer.

###### Parameters

• **options**: [`IContourLayerOptions`](README.md#icontourlayeroptions)

The new options to update the layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:111](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L111)

##### setPrimitives()

> **setPrimitives**(`primitives`): `void`

Replaces all shapes in the layer with the new array of shapes that have been provided.

###### Parameters

• **primitives**: [`IPrimitive`](README.md#iprimitive)[]

The array of shapes to add to the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setPrimitives`](README.md#setprimitives-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1745](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1745)

##### setVisible()

> **setVisible**(`value`): `void`

Sets whether the layer is visible or not.

###### Parameters

• **value**: `boolean`

A value indicating if the layer should be displayed or not.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setVisible`](README.md#setvisible-7)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1751](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1751)

##### setZIndex()

> **setZIndex**(`zIndex`): `void`

Sets the zIndex of the layer.

###### Parameters

• **zIndex**: `number`

The zIndex value to assign to the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setZIndex`](README.md#setzindex-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1757](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1757)

***

### ContourLine

The contour line of a contour layer

#### Extends

- [`Polygon`](README.md#polygon)

#### Constructors

##### new ContourLine()

> **new ContourLine**(`boundary`, `contourValue`?): [`ContourLine`](README.md#contourline)

###### Parameters

• **boundary**: [`Location`](README.md#location)[]

The boundary of this contour line

• **contourValue?**: `string` \| `number`

The value associated with this contour line

###### Returns

[`ContourLine`](README.md#contourline)

###### Overrides

[`Polygon`](README.md#polygon).[`constructor`](README.md#constructors-26)

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:64](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L64)

#### Properties

##### contourValue

> **contourValue**: `string` \| `number`

The data value associated with this contour line

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:57](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L57)

##### innerContourLines

> **innerContourLines**: [`ContourLine`](README.md#contourline)[]

The contour lines that are directly nested inside this contour line

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:51](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L51)

##### metadata

> **metadata**: `any`

Information that is linked to the polygon.
Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.

###### Inherited from

[`Polygon`](README.md#polygon).[`metadata`](README.md#metadata-10)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2300](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2300)

##### outerContourLine

> **outerContourLine**: [`ContourLine`](README.md#contourline)

The outer/parent contour line of this contour

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:54](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L54)

#### Methods

##### getCursor()

> **getCursor**(): `string`

Gets the css cursor value when polygon has events on it.

###### Returns

`string`

CSS cursor string when polygon has events on it.

###### Inherited from

[`Polygon`](README.md#polygon).[`getCursor`](README.md#getcursor-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2314](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2314)

##### getFillColor()

> **getFillColor**(): `string` \| [`Color`](README.md#color)

Gets the fill color of the inside of the polygon. Will be string or Color object depending on the the what method was used in the pushpin options.

###### Returns

`string` \| [`Color`](README.md#color)

The fill color of the inside of the polygon.

###### Inherited from

[`Polygon`](README.md#polygon).[`getFillColor`](README.md#getfillcolor-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2320](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2320)

##### getGeneralizable()

> **getGeneralizable**(): `boolean`

Returns whether the polygon is generalizable based on zoom level or not.

###### Returns

`boolean`

whether the polygon is generalizable based on zoom level or not.

###### Inherited from

[`Polygon`](README.md#polygon).[`getGeneralizable`](README.md#getgeneralizable-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2326](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2326)

##### getLocations()

> **getLocations**(): [`Location`](README.md#location)[]

Gets the first ring of the polygon (for V7 compatability).

###### Returns

[`Location`](README.md#location)[]

An array of Locations that is the first ring of the polygon; or an empty array if the polygon has no ring at all.

###### Inherited from

[`Polygon`](README.md#polygon).[`getLocations`](README.md#getlocations-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2332](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2332)

##### getRings()

> **getRings**(): [`Location`](README.md#location)[][]

Gets an array of location arrays, where each location array defines a ring of the polygon.

###### Returns

[`Location`](README.md#location)[][]

An array of location arrays, where each location array defines a ring of the polygon.

###### Inherited from

[`Polygon`](README.md#polygon).[`getRings`](README.md#getrings-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2338](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2338)

##### getStrokeColor()

> **getStrokeColor**(): `string` \| [`Color`](README.md#color)

Gets the color of the border stroke of the polygon. Will be string or Color object depending on the the what method was used in the pushpin options.

###### Returns

`string` \| [`Color`](README.md#color)

The color of the border stroke of the polygon.

###### Inherited from

[`Polygon`](README.md#polygon).[`getStrokeColor`](README.md#getstrokecolor-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2344](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2344)

##### getStrokeDashArray()

> **getStrokeDashArray**(): `string` \| `number`[]

Gets the stroke dash array of the polygon, in format of either array or string, whichever user provides.

###### Returns

`string` \| `number`[]

The stroke dash array of the polygon.

###### Inherited from

[`Polygon`](README.md#polygon).[`getStrokeDashArray`](README.md#getstrokedasharray-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2350](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2350)

##### getStrokeThickness()

> **getStrokeThickness**(): `number`

Gets the thickness of the border stroke of the polygon.

###### Returns

`number`

The thickness of the border stroke of the polygon as a number.

###### Inherited from

[`Polygon`](README.md#polygon).[`getStrokeThickness`](README.md#getstrokethickness-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2356](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2356)

##### getVisible()

> **getVisible**(): `boolean`

Gets whether the polygon is visible.

###### Returns

`boolean`

A boolean indicating whether the polygon is visible or not.

###### Inherited from

[`Polygon`](README.md#polygon).[`getVisible`](README.md#getvisible-13)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2362](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2362)

##### setLocations()

> **setLocations**(`locations`): `void`

Sets locations (single ring) of the polygon. (for V7 compatability)

###### Parameters

• **locations**: [`Location`](README.md#location)[]

A Location[] that defines the only ring of the polygon

###### Returns

`void`

###### Inherited from

[`Polygon`](README.md#polygon).[`setLocations`](README.md#setlocations-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2368](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2368)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the properties for the polygon.

###### Parameters

• **options**: [`IPolygonOptions`](README.md#ipolygonoptions)

The IPolygonOptions object containing the options to customize the polygon.

###### Returns

`void`

###### Inherited from

[`Polygon`](README.md#polygon).[`setOptions`](README.md#setoptions-14)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2374](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2374)

##### setRings()

> **setRings**(`rings`): `void`

Sets rings of the polygon.

###### Parameters

• **rings**: [`Location`](README.md#location)[] \| [`Location`](README.md#location)[][]

A Location[][] where each Location[] defines a ring of the polygon.

###### Returns

`void`

###### Inherited from

[`Polygon`](README.md#polygon).[`setRings`](README.md#setrings-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2380](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2380)

***

### CustomOverlay

You can use this class to create custom overlays on top of the map. These can be static overlays such as custom
navigation bars, or dynamic overlays such as custom visualization layers. CustomOverlays can be added to the map
just like any other layer using the map.layers property.

#### Extended by

- [`GroundOverlay`](README.md#groundoverlay)
- [`GeoXmlLayer`](README.md#geoxmllayer)

#### Implements

- [`ILayer`](README.md#ilayer)

#### Constructors

##### new CustomOverlay()

> **new CustomOverlay**(`options`?): [`CustomOverlay`](README.md#customoverlay)

###### Parameters

• **options?**: [`ICustomOverlayOptions`](README.md#icustomoverlayoptions)

The options to use when initializing the custom overlay.

###### Returns

[`CustomOverlay`](README.md#customoverlay)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1093](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1093)

#### Properties

##### \_map

> **\_map**: [`Map`](README.md#map-2)

A reference the the map instance that the overlay was added to. This will be null until the onLoad function has fired. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1087](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1087)

#### Methods

##### getHtmlElement()

> **getHtmlElement**(): `HTMLElement`

Gets the html element of this custom overlay.

###### Returns

`HTMLElement`

The htmlElement of this overlay.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1099](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1099)

##### getMap()

> **getMap**(): [`Map`](README.md#map-2)

Gets the map that this overlay is attached to.

###### Returns

[`Map`](README.md#map-2)

The map that this overlay is attached to.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1105](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1105)

##### onAdd()

> **onAdd**(): `void`

Implement this method to perform any task that should be done when the overlay is added to the map.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1116](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1116)

##### onLoad()

> **onLoad**(): `void`

Implement this method to perform any tasks that should be done when the overlay is removed from the map.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1126)

##### onRemove()

> **onRemove**(): `void`

Implement this methof to perform any task that should be done after the overlay has been added to the map.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1121](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1121)

##### setHtmlElement()

> **setHtmlElement**(`htmlElement`): `void`

Updates the html element of this custom overlay.

###### Parameters

• **htmlElement**: `HTMLElement`

The new htmlElement to set for the overlay.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1111](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1111)

***

### DataBinPolygon

A polygon which represents a data bin on the map and contains the data bin information.

#### Extends

- [`Polygon`](README.md#polygon)

#### Constructors

##### new DataBinPolygon()

> **new DataBinPolygon**(`rings`, `options`?): [`DataBinPolygon`](README.md#databinpolygon)

###### Parameters

• **rings**: [`Location`](README.md#location)[] \| [`Location`](README.md#location)[][]

A Location array for basic polygon with single outer perimeter,
or an array of Location arrays for advanced polygon (multi-polygon, polygon with holes, or combination of polygons).

• **options?**: [`IPolygonOptions`](README.md#ipolygonoptions)

Options used to customize polygon.

###### Returns

[`DataBinPolygon`](README.md#databinpolygon)

###### Inherited from

[`Polygon`](README.md#polygon).[`constructor`](README.md#constructors-26)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2308](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2308)

#### Properties

##### dataBinInfo

> **dataBinInfo**: [`IDataBinInfo`](README.md#idatabininfo)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:123](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L123)

##### metadata

> **metadata**: `any`

Information that is linked to the polygon.
Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.

###### Inherited from

[`Polygon`](README.md#polygon).[`metadata`](README.md#metadata-10)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2300](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2300)

#### Methods

##### getCursor()

> **getCursor**(): `string`

Gets the css cursor value when polygon has events on it.

###### Returns

`string`

CSS cursor string when polygon has events on it.

###### Inherited from

[`Polygon`](README.md#polygon).[`getCursor`](README.md#getcursor-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2314](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2314)

##### getFillColor()

> **getFillColor**(): `string` \| [`Color`](README.md#color)

Gets the fill color of the inside of the polygon. Will be string or Color object depending on the the what method was used in the pushpin options.

###### Returns

`string` \| [`Color`](README.md#color)

The fill color of the inside of the polygon.

###### Inherited from

[`Polygon`](README.md#polygon).[`getFillColor`](README.md#getfillcolor-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2320](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2320)

##### getGeneralizable()

> **getGeneralizable**(): `boolean`

Returns whether the polygon is generalizable based on zoom level or not.

###### Returns

`boolean`

whether the polygon is generalizable based on zoom level or not.

###### Inherited from

[`Polygon`](README.md#polygon).[`getGeneralizable`](README.md#getgeneralizable-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2326](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2326)

##### getLocations()

> **getLocations**(): [`Location`](README.md#location)[]

Gets the first ring of the polygon (for V7 compatability).

###### Returns

[`Location`](README.md#location)[]

An array of Locations that is the first ring of the polygon; or an empty array if the polygon has no ring at all.

###### Inherited from

[`Polygon`](README.md#polygon).[`getLocations`](README.md#getlocations-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2332](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2332)

##### getRings()

> **getRings**(): [`Location`](README.md#location)[][]

Gets an array of location arrays, where each location array defines a ring of the polygon.

###### Returns

[`Location`](README.md#location)[][]

An array of location arrays, where each location array defines a ring of the polygon.

###### Inherited from

[`Polygon`](README.md#polygon).[`getRings`](README.md#getrings-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2338](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2338)

##### getStrokeColor()

> **getStrokeColor**(): `string` \| [`Color`](README.md#color)

Gets the color of the border stroke of the polygon. Will be string or Color object depending on the the what method was used in the pushpin options.

###### Returns

`string` \| [`Color`](README.md#color)

The color of the border stroke of the polygon.

###### Inherited from

[`Polygon`](README.md#polygon).[`getStrokeColor`](README.md#getstrokecolor-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2344](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2344)

##### getStrokeDashArray()

> **getStrokeDashArray**(): `string` \| `number`[]

Gets the stroke dash array of the polygon, in format of either array or string, whichever user provides.

###### Returns

`string` \| `number`[]

The stroke dash array of the polygon.

###### Inherited from

[`Polygon`](README.md#polygon).[`getStrokeDashArray`](README.md#getstrokedasharray-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2350](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2350)

##### getStrokeThickness()

> **getStrokeThickness**(): `number`

Gets the thickness of the border stroke of the polygon.

###### Returns

`number`

The thickness of the border stroke of the polygon as a number.

###### Inherited from

[`Polygon`](README.md#polygon).[`getStrokeThickness`](README.md#getstrokethickness-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2356](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2356)

##### getVisible()

> **getVisible**(): `boolean`

Gets whether the polygon is visible.

###### Returns

`boolean`

A boolean indicating whether the polygon is visible or not.

###### Inherited from

[`Polygon`](README.md#polygon).[`getVisible`](README.md#getvisible-13)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2362](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2362)

##### setLocations()

> **setLocations**(`locations`): `void`

Sets locations (single ring) of the polygon. (for V7 compatability)

###### Parameters

• **locations**: [`Location`](README.md#location)[]

A Location[] that defines the only ring of the polygon

###### Returns

`void`

###### Inherited from

[`Polygon`](README.md#polygon).[`setLocations`](README.md#setlocations-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2368](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2368)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the properties for the polygon.

###### Parameters

• **options**: [`IPolygonOptions`](README.md#ipolygonoptions)

The IPolygonOptions object containing the options to customize the polygon.

###### Returns

`void`

###### Inherited from

[`Polygon`](README.md#polygon).[`setOptions`](README.md#setoptions-14)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2374](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2374)

##### setRings()

> **setRings**(`rings`): `void`

Sets rings of the polygon.

###### Parameters

• **rings**: [`Location`](README.md#location)[] \| [`Location`](README.md#location)[][]

A Location[][] where each Location[] defines a ring of the polygon.

###### Returns

`void`

###### Inherited from

[`Polygon`](README.md#polygon).[`setRings`](README.md#setrings-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2380](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2380)

***

### DataBinningLayer

This class provides a data binning visualization for the map. It takes in an array of pushpins, groups them into
symmetrical shapes that fit together in a grid such as hexagons. Aggregation of data values are done and can be
used to customize how the data bins are rendered on the map (i.e. scale / color) .

#### Extends

- [`Layer`](README.md#layer)

#### Constructors

##### new DataBinningLayer()

> **new DataBinningLayer**(`pushpins`?, `options`?): [`DataBinningLayer`](README.md#databinninglayer)

Initializes the data binning layer.

###### Parameters

• **pushpins?**: [`Pushpin`](README.md#pushpin)[]

The array of pushpins that are used to generate the data bins.

• **options?**: [`IDataBinningOptions`](README.md#idatabinningoptions)

The options used for calculating and rendering the data bins.

###### Returns

[`DataBinningLayer`](README.md#databinninglayer)

###### Overrides

[`Layer`](README.md#layer).[`constructor`](README.md#constructors-19)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:137](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L137)

#### Properties

##### metadata

> **metadata**: `any`

Optional property to store any additional metadata for this layer.

###### Inherited from

[`Layer`](README.md#layer).[`metadata`](README.md#metadata-9)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1678](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1678)

#### Methods

##### add()

> **add**(`primitive`, `index`?): `void`

Adds a shapes to the layer, at the specified index if specified.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive) \| [`IPrimitive`](README.md#iprimitive)[]

The shape(s) to be added to the layer.

• **index?**: `number`

The index at which to insert the shape into the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`add`](README.md#add-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1691](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1691)

##### clear()

> **clear**(): `void`

Clears all the data in the data binning layer.

###### Returns

`void`

###### Overrides

[`Layer`](README.md#layer).[`clear`](README.md#clear-7)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:160](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L160)

##### dispose()

> **dispose**(): `void`

Cleans up any resources this object is consuming.

###### Returns

`void`

###### Overrides

[`Layer`](README.md#layer).[`dispose`](README.md#dispose-7)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:165](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L165)

##### getId()

> **getId**(): `string`

Gets the id of the layer.

###### Returns

`string`

The id assigned to the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getId`](README.md#getid-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1707](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1707)

##### getOptions()

> **getOptions**(): [`IDataBinningOptions`](README.md#idatabinningoptions)

Gets the options used for calculating and rendering the data bins.

###### Returns

[`IDataBinningOptions`](README.md#idatabinningoptions)

The options used for calculating and rendering the data bins.

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L143)

##### getPrimitives()

> **getPrimitives**(): [`IPrimitive`](README.md#iprimitive)[]

Gets an array of shapes that are in the layer. This can be used to iterate over the individual shapes.

###### Returns

[`IPrimitive`](README.md#iprimitive)[]

An array of shapes that are in the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getPrimitives`](README.md#getprimitives-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1713](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1713)

##### getPushpins()

> **getPushpins**(): [`Pushpin`](README.md#pushpin)[]

Gets all pushpins that are in the layers.

###### Returns

[`Pushpin`](README.md#pushpin)[]

All pushpins that are in the layers.

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:149](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L149)

##### getVisible()

> **getVisible**(): `boolean`

Gets a value indicating whether the layer is visible or not.

###### Returns

`boolean`

A boolean indicating if the layer is visible or not.

###### Inherited from

[`Layer`](README.md#layer).[`getVisible`](README.md#getvisible-12)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1719](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1719)

##### getZIndex()

> **getZIndex**(): `number`

Gets the zIndex of the layer.

###### Returns

`number`

The zIndex of the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getZIndex`](README.md#getzindex-4)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1725](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1725)

##### remove()

> **remove**(`primitive`): [`IPrimitive`](README.md#iprimitive)

Removes a primitive

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive)

primitive that needs to be removed

###### Returns

[`IPrimitive`](README.md#iprimitive)

The primitive that needs to be removed

###### Inherited from

[`Layer`](README.md#layer).[`remove`](README.md#remove-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1732](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1732)

##### removeAt()

> **removeAt**(`index`): [`IPrimitive`](README.md#iprimitive)

Removes a primitive at a specified index

###### Parameters

• **index**: `number`

index of the primitive that needs to be removed

###### Returns

[`IPrimitive`](README.md#iprimitive)

The primitive that needs to be removed at this index

###### Inherited from

[`Layer`](README.md#layer).[`removeAt`](README.md#removeat-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1739](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1739)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options used for calculating and rendering the data bins.

###### Parameters

• **options**: [`IDataBinningOptions`](README.md#idatabinningoptions)

The options used for calculating and rendering the data bins.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:171](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L171)

##### setPrimitives()

> **setPrimitives**(`primitives`): `void`

Replaces all shapes in the layer with the new array of shapes that have been provided.

###### Parameters

• **primitives**: [`IPrimitive`](README.md#iprimitive)[]

The array of shapes to add to the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setPrimitives`](README.md#setprimitives-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1745](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1745)

##### setPushpins()

> **setPushpins**(`pushpins`): `void`

Sets the array of pushpins that are used to generate the data bins.

###### Parameters

• **pushpins**: [`Pushpin`](README.md#pushpin)[]

The array of pushpins that are used to generate the data bins.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:155](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L155)

##### setVisible()

> **setVisible**(`value`): `void`

Sets whether the layer is visible or not.

###### Parameters

• **value**: `boolean`

A value indicating if the layer should be displayed or not.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setVisible`](README.md#setvisible-7)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1751](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1751)

##### setZIndex()

> **setZIndex**(`zIndex`): `void`

Sets the zIndex of the layer.

###### Parameters

• **zIndex**: `number`

The zIndex value to assign to the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setZIndex`](README.md#setzindex-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1757](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1757)

***

### DrawingTools

Provides a set of tools for drawing and editing shapes on top of the map.

#### Requires

The Microsoft.Maps.DrawingTools module.

#### Constructors

##### new DrawingTools()

> **new DrawingTools**(`map`): [`DrawingTools`](README.md#drawingtools)

###### Parameters

• **map**: [`Map`](README.md#map-2)

A map instanct to attach the drawing tools to.

###### Returns

[`DrawingTools`](README.md#drawingtools)

###### Requires

The Microsoft.Maps.DrawingTools module.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:145](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L145)

#### Methods

##### create()

> **create**(`shapeType`, `created`?): `void`

Initializes the drawing layer and instructs it to create a new shape of a given type.

###### Parameters

• **shapeType**: [`ShapeType`](namespaces/DrawingTools.md#shapetype)

The type of new shape to create.

• **created?**

A callback function that is fired after the initial shape is created.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:152](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L152)

##### dispose()

> **dispose**(): `void`

Disposes the instance of the DrawingTools class.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:155](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L155)

##### edit()

> **edit**(`shape`): `void`

Adds a shape to the drawing layer and puts it into edit mode.

###### Parameters

• **shape**: [`IPrimitive`](README.md#iprimitive)

A shape to put into editting mode.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:161](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L161)

##### finish()

> **finish**(`finished`?): `void`

Finishes any shape create / edit operation currently in progress, and returns the shape that was created or editted through a specified callback function.

###### Parameters

• **finished?**

A callback function to return the completed shape with.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:167](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L167)

##### showDrawingBar()

> **showDrawingBar**(`options`?): `void`

Shows the drawing toolbar, if it isn't already visible.

###### Parameters

• **options?**: [`IDrawingToolOptions`](README.md#idrawingtooloptions)

Options for this DrawingTool operation. Specifically,
the drawingBarActions property is used to customize the drawing bar view.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:174](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L174)

##### showDrawingManager()

> **showDrawingManager**(`callback`?): `void`

Creates a drawing manager which allows multi-shape editing and displays the toolbar.

###### Parameters

• **callback?**

A callback function that is triggered after the DrawingTools have loaded.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:180](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L180)

***

### ~~EntityCollection~~

Use the Layer class.

#### Deprecated

in V8

#### Extends

- [`Layer`](README.md#layer)

#### Constructors

##### new EntityCollection()

> **new EntityCollection**(): [`EntityCollection`](README.md#entitycollection)

###### Returns

[`EntityCollection`](README.md#entitycollection)

###### Overrides

[`Layer`](README.md#layer).[`constructor`](README.md#constructors-19)

###### Deprecated

in V8

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1138](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1138)

#### Properties

##### ~~metadata~~

> **metadata**: `any`

Optional property to store any additional metadata for this layer.

###### Inherited from

[`Layer`](README.md#layer).[`metadata`](README.md#metadata-9)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1678](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1678)

#### Methods

##### ~~add()~~

> **add**(`primitive`, `index`?): `void`

Adds a shapes to the layer, at the specified index if specified.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive) \| [`IPrimitive`](README.md#iprimitive)[]

The shape(s) to be added to the layer.

• **index?**: `number`

The index at which to insert the shape into the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`add`](README.md#add-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1691](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1691)

##### ~~clear()~~

> **clear**(): `void`

Removes all shapes from the collection.

###### Returns

`void`

###### Overrides

[`Layer`](README.md#layer).[`clear`](README.md#clear-7)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1143)

##### ~~dispose()~~

> **dispose**(): `void`

Cleans up any resources this object is consuming

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`dispose`](README.md#dispose-7)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1701](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1701)

##### ~~get()~~

> **get**(`index`): [`IPrimitive`](README.md#iprimitive)

Gets the item at a specified index.

###### Parameters

• **index**: `number`

Index of the item to get.

###### Returns

[`IPrimitive`](README.md#iprimitive)

The item at a specified index.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1150](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1150)

##### ~~getId()~~

> **getId**(): `string`

Gets the id of the layer.

###### Returns

`string`

The id assigned to the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getId`](README.md#getid-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1707](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1707)

##### ~~getLength()~~

> **getLength**(): `number`

Gets the number of items in this collection.

###### Returns

`number`

The count of the items.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1156](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1156)

##### ~~getPrimitives()~~

> **getPrimitives**(): [`IPrimitive`](README.md#iprimitive)[]

Gets an array of shapes that are in the layer. This can be used to iterate over the individual shapes.

###### Returns

[`IPrimitive`](README.md#iprimitive)[]

An array of shapes that are in the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getPrimitives`](README.md#getprimitives-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1713](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1713)

##### ~~getVisible()~~

> **getVisible**(): `boolean`

Gets a value indicating whether the layer is visible or not.

###### Returns

`boolean`

A boolean indicating if the layer is visible or not.

###### Inherited from

[`Layer`](README.md#layer).[`getVisible`](README.md#getvisible-12)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1719](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1719)

##### ~~getZIndex()~~

> **getZIndex**(): `number`

Gets the zIndex of the layer.

###### Returns

`number`

The zIndex of the layer.

###### Inherited from

[`Layer`](README.md#layer).[`getZIndex`](README.md#getzindex-4)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1725](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1725)

##### ~~indexOf()~~

> **indexOf**(`primitive`): `number`

Gets the index of the item in the list.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive)

The item to get the index of.

###### Returns

`number`

The index of the item in the list.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1163](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1163)

##### ~~insert()~~

> **insert**(`primitive`, `index`): `void`

Inserts the item into the list at a specific index.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive)

The item to insert.

• **index**: `number`

Index of the item to be inserted.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1170](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1170)

##### ~~pop()~~

> **pop**(): [`IPrimitive`](README.md#iprimitive)

Returns the last element in the list after removing it.

###### Returns

[`IPrimitive`](README.md#iprimitive)

The last element in the list after removing it.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1176](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1176)

##### ~~push()~~

> **push**(`primitive`): `void`

Adds the item to the end of the list.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive) \| [`IPrimitive`](README.md#iprimitive)[]

Item to be added.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1182](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1182)

##### ~~remove()~~

> **remove**(`primitive`): [`IPrimitive`](README.md#iprimitive)

Removes the item from the list.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive)

Item to be removed.

###### Returns

[`IPrimitive`](README.md#iprimitive)

The item to be removed.

###### Overrides

[`Layer`](README.md#layer).[`remove`](README.md#remove-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1189](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1189)

##### ~~removeAt()~~

> **removeAt**(`index`): [`IPrimitive`](README.md#iprimitive)

Removes the item from the list at a specified index.

###### Parameters

• **index**: `number`

Index of the item that needs to be removed.

###### Returns

[`IPrimitive`](README.md#iprimitive)

The item to be removed at a specified index.

###### Overrides

[`Layer`](README.md#layer).[`removeAt`](README.md#removeat-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1196](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1196)

##### ~~setPrimitives()~~

> **setPrimitives**(`primitives`): `void`

Replaces all shapes in the layer with the new array of shapes that have been provided.

###### Parameters

• **primitives**: [`IPrimitive`](README.md#iprimitive)[]

The array of shapes to add to the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setPrimitives`](README.md#setprimitives-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1745](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1745)

##### ~~setVisible()~~

> **setVisible**(`value`): `void`

Sets whether the layer is visible or not.

###### Parameters

• **value**: `boolean`

A value indicating if the layer should be displayed or not.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setVisible`](README.md#setvisible-7)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1751](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1751)

##### ~~setZIndex()~~

> **setZIndex**(`zIndex`): `void`

Sets the zIndex of the layer.

###### Parameters

• **zIndex**: `number`

The zIndex value to assign to the layer.

###### Returns

`void`

###### Inherited from

[`Layer`](README.md#layer).[`setZIndex`](README.md#setzindex-3)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1757](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1757)

***

### GeoXmlLayer

A layer that loads and renders geospatial XML data on the map.

#### Requires

The Microsoft.Maps.GeoXml module.

#### Extends

- [`CustomOverlay`](README.md#customoverlay)

#### Constructors

##### new GeoXmlLayer()

> **new GeoXmlLayer**(`dataSource`?, `isUrl`?, `options`?): [`GeoXmlLayer`](README.md#geoxmllayer)

###### Parameters

• **dataSource?**: `string` \| `ArrayBuffer`

The XML as a string, URL or ArrayBuffer to read.

• **isUrl?**: `boolean`

Whether the dataSource provided is an URL. Default = true

• **options?**: [`IGeoXmlLayerOptions`](README.md#igeoxmllayeroptions)

The options used to render the layer.

###### Returns

[`GeoXmlLayer`](README.md#geoxmllayer)

###### Overrides

[`CustomOverlay`](README.md#customoverlay).[`constructor`](README.md#constructors-8)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:354](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L354)

#### Properties

##### \_map

> **\_map**: [`Map`](README.md#map-2)

A reference the the map instance that the overlay was added to. This will be null until the onLoad function has fired. *

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`_map`](README.md#_map)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1087](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1087)

##### metadata

> **metadata**: `any`

Optional property to store any additional metadata for this layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:346](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L346)

#### Methods

##### clear()

> **clear**(): `void`

Removes all the data in the layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:359](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L359)

##### dispose()

> **dispose**(): `void`

Cleans up any resources this object is consuming.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:364](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L364)

##### getDataSet()

> **getDataSet**(): [`IGeoXmlDataSet`](README.md#igeoxmldataset)

Returns the data set that ws extracted from the data source.

###### Returns

[`IGeoXmlDataSet`](README.md#igeoxmldataset)

The data set that ws extracted from the data source.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:376](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L376)

##### getDataSource()

> **getDataSource**(): `string` \| `ArrayBuffer`

Returns the data source used by the layer.

###### Returns

`string` \| `ArrayBuffer`

The data source used by the layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:370](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L370)

##### getHtmlElement()

> **getHtmlElement**(): `HTMLElement`

Gets the html element of this custom overlay.

###### Returns

`HTMLElement`

The htmlElement of this overlay.

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`getHtmlElement`](README.md#gethtmlelement)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1099](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1099)

##### getMap()

> **getMap**(): [`Map`](README.md#map-2)

Gets the map that this overlay is attached to.

###### Returns

[`Map`](README.md#map-2)

The map that this overlay is attached to.

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`getMap`](README.md#getmap)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1105](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1105)

##### getOptions()

> **getOptions**(): [`IGeoXmlLayerOptions`](README.md#igeoxmllayeroptions)

Returns the options used by the GeoXmlLayer.

###### Returns

[`IGeoXmlLayerOptions`](README.md#igeoxmllayeroptions)

The options used by the GeoXmlLayer.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:382](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L382)

##### getVisible()

> **getVisible**(): `boolean`

Gets a value indicating whether the layer is visible or not.

###### Returns

`boolean`

A boolean indicating if the layer is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:388](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L388)

##### onAdd()

> **onAdd**(): `void`

Implement this method to perform any task that should be done when the overlay is added to the map.

###### Returns

`void`

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`onAdd`](README.md#onadd)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1116](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1116)

##### onLoad()

> **onLoad**(): `void`

Implement this method to perform any tasks that should be done when the overlay is removed from the map.

###### Returns

`void`

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`onLoad`](README.md#onload)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1126)

##### onRemove()

> **onRemove**(): `void`

Implement this methof to perform any task that should be done after the overlay has been added to the map.

###### Returns

`void`

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`onRemove`](README.md#onremove)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1121](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1121)

##### setDataSource()

> **setDataSource**(`dataSource`, `isUrl`): `void`

Sets the data source to render in the GeoXmlLayer.

###### Parameters

• **dataSource**: `string` \| `ArrayBuffer`

The data source to render in the GeoXmlLayer.

• **isUrl**: `boolean`

Whether the dataSource provided is an URL. Default = true

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:395](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L395)

##### setHtmlElement()

> **setHtmlElement**(`htmlElement`): `void`

Updates the html element of this custom overlay.

###### Parameters

• **htmlElement**: `HTMLElement`

The new htmlElement to set for the overlay.

###### Returns

`void`

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`setHtmlElement`](README.md#sethtmlelement)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1111](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1111)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options used for loading and rendering data into the GeoXmlLayer.

###### Parameters

• **options**: [`IGeoXmlLayerOptions`](README.md#igeoxmllayeroptions)

The options to use when loading and rendering data into the GeoXmlLayer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:401](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L401)

##### setVisible()

> **setVisible**(`visible`): `void`

Sets whether the layer is visible or not.

###### Parameters

• **visible**: `boolean`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:407](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L407)

***

### GroundOverlay

A map overlay that binds an image to a bounding box area on the map.

#### Extends

- [`CustomOverlay`](README.md#customoverlay)

#### Constructors

##### new GroundOverlay()

> **new GroundOverlay**(`options`): [`GroundOverlay`](README.md#groundoverlay)

###### Parameters

• **options**: [`IGroundOverlayOptions`](README.md#igroundoverlayoptions)

The options used to render the ground overlay.

###### Returns

[`GroundOverlay`](README.md#groundoverlay)

###### Overrides

[`CustomOverlay`](README.md#customoverlay).[`constructor`](README.md#constructors-8)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1461](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1461)

#### Properties

##### \_map

> **\_map**: [`Map`](README.md#map-2)

A reference the the map instance that the overlay was added to. This will be null until the onLoad function has fired. *

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`_map`](README.md#_map)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1087](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1087)

##### metadata

> **metadata**: `any`

Optional property to store any additional metadata for this layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1455](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1455)

#### Methods

##### getBackgroundColor()

> **getBackgroundColor**(): `string` \| [`Color`](README.md#color)

Gets the background color of the ground overlay.

###### Returns

`string` \| [`Color`](README.md#color)

The background color of the ground overlay.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1467](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1467)

##### getBounds()

> **getBounds**(): [`LocationRect`](README.md#locationrect)

Gets the bounding box that the ground overlay is bounded to.

###### Returns

[`LocationRect`](README.md#locationrect)

The bounding box that the ground overlay is bounded to.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1473](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1473)

##### getHtmlElement()

> **getHtmlElement**(): `HTMLElement`

Gets the html element of this custom overlay.

###### Returns

`HTMLElement`

The htmlElement of this overlay.

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`getHtmlElement`](README.md#gethtmlelement)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1099](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1099)

##### getImageUrl()

> **getImageUrl**(): `string`

Gets the url to the ground overlay image.

###### Returns

`string`

The url to the ground overlay image.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1479](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1479)

##### getMap()

> **getMap**(): [`Map`](README.md#map-2)

Gets the map that this overlay is attached to.

###### Returns

[`Map`](README.md#map-2)

The map that this overlay is attached to.

###### Overrides

[`CustomOverlay`](README.md#customoverlay).[`getMap`](README.md#getmap)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1491](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1491)

##### getOpacity()

> **getOpacity**(): `number`

Gets the opacity of the ground overlay.

###### Returns

`number`

The opacity of the ground overlay.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1485](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1485)

##### getRotation()

> **getRotation**(): `number`

Gets the rotation of the ground overlay.

###### Returns

`number`

The rotation of the ground overlay.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1497](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1497)

##### getVisible()

> **getVisible**(): `boolean`

Gets a boolean indicating if the ground overlay is visible or not.

###### Returns

`boolean`

A boolean indicating if the ground overlay is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1503](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1503)

##### onAdd()

> **onAdd**(): `void`

Implement this method to perform any task that should be done when the overlay is added to the map.

###### Returns

`void`

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`onAdd`](README.md#onadd)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1116](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1116)

##### onLoad()

> **onLoad**(): `void`

Implement this method to perform any tasks that should be done when the overlay is removed from the map.

###### Returns

`void`

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`onLoad`](README.md#onload)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1126)

##### onRemove()

> **onRemove**(): `void`

Implement this methof to perform any task that should be done after the overlay has been added to the map.

###### Returns

`void`

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`onRemove`](README.md#onremove)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1121](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1121)

##### setHtmlElement()

> **setHtmlElement**(`htmlElement`): `void`

Updates the html element of this custom overlay.

###### Parameters

• **htmlElement**: `HTMLElement`

The new htmlElement to set for the overlay.

###### Returns

`void`

###### Inherited from

[`CustomOverlay`](README.md#customoverlay).[`setHtmlElement`](README.md#sethtmlelement)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1111](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1111)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options used to render the ground overlay.

###### Parameters

• **options**: [`IGroundOverlayOptions`](README.md#igroundoverlayoptions)

The options used to render the ground overlay.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1509](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1509)

##### setVisible()

> **setVisible**(`visible`): `void`

Sets the visibility of the Ground Overlay.

###### Parameters

• **visible**: `boolean`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1515](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1515)

***

### Heading

Standard compass headings; north, south, east, west.

#### Constructors

##### new Heading()

> **new Heading**(): [`Heading`](README.md#heading)

###### Returns

[`Heading`](README.md#heading)

#### Properties

##### East

> `static` **East**: `number`

A heading pointing east, 90 degrees.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1529](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1529)

##### North

> `static` **North**: `number`

A heading pointing north, 0 degrees.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1523](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1523)

##### South

> `static` **South**: `number`

A heading pointing south, 180 degrees.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1526](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1526)

##### West

> `static` **West**: `number`

A heading pointing west, 270 degrees.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1532](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1532)

***

### HeatMapLayer

Class for rendering data as a heat map layer.

#### Requires

The Microsoft.Maps.Heatmap module.

#### Implements

- [`IDataLayer`](README.md#idatalayer)

#### Constructors

##### new HeatMapLayer()

> **new HeatMapLayer**(`locations`, `options`?): [`HeatMapLayer`](README.md#heatmaplayer)

###### Parameters

• **locations**: ([`Location`](README.md#location) \| [`Pushpin`](README.md#pushpin))[]

Set of locations to visualize as a heat map.

• **options?**: [`IHeatMapLayerOptions`](README.md#iheatmaplayeroptions)

Options for customizing how the heat map is rendered.

###### Returns

[`HeatMapLayer`](README.md#heatmaplayer)

###### Requires

The Microsoft.Maps.Heatmap module.

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:83](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L83)

#### Methods

##### clear()

> **clear**(): `void`

Clears all data in the heat map layer.

###### Returns

`void`

###### Implementation of

[`IDataLayer`](README.md#idatalayer).[`clear`](README.md#clear-10)

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:86](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L86)

##### dispose()

> **dispose**(): `void`

Disposes the heat map layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:89](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L89)

##### getVisible()

> **getVisible**(): `boolean`

Gets a boolean indicating if the heat map layer is visible or not.

###### Returns

`boolean`

A boolean indicating if the heat map layer is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:95](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L95)

##### ~~hide()~~

> **hide**(): `void`

###### Returns

`void`

###### Deprecated

Hides the heat map layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:101](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L101)

##### setLocations()

> **setLocations**(`locations`): `void`

Specifies the locations to use when generating the heat map.

###### Parameters

• **locations**: ([`Location`](README.md#location) \| [`Pushpin`](README.md#pushpin))[]

Set of locations.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:107](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L107)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options to use with the heat map layer.

###### Parameters

• **options**: [`IHeatMapLayerOptions`](README.md#iheatmaplayeroptions)

Set of heat map layer options.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:113](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L113)

##### setVisible()

> **setVisible**(`visible`): `void`

Sets the visibility of the heat map layer.

###### Parameters

• **visible**: `boolean`

A boolean indicating if the heat map layer is visible or not.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:119](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L119)

##### ~~show()~~

> **show**(): `void`

###### Returns

`void`

###### Deprecated

Shows the heat map layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:125](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L125)

***

### Infobox

An infobox, also sometimes refer to as an info window or popup, is a simple panel that displays information over top the map. This is
often used to display information linked to a location after clicking on a pushpin.

#### Constructors

##### new Infobox()

> **new Infobox**(`location`, `options`?): [`Infobox`](README.md#infobox)

###### Parameters

• **location**: [`Location`](README.md#location)

The location to display the infobox at.

• **options?**: [`IInfoboxOptions`](README.md#iinfoboxoptions)

Options for rendering the infobox.

###### Returns

[`Infobox`](README.md#infobox)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1546](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1546)

#### Methods

##### ~~getActions()~~

> **getActions**(): [`IInfoboxActions`](README.md#iinfoboxactions)[]

###### Returns

[`IInfoboxActions`](README.md#iinfoboxactions)[]

###### Deprecated

Use HTML buttons and links in description instead.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1551](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1551)

##### getAnchor()

> **getAnchor**(): [`Point`](README.md#point)

Gets the point on the infobox which is anchored to the map. An anchor of (0,0) is the top left corner of the infobox.

###### Returns

[`Point`](README.md#point)

The anchor point of the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1557](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1557)

##### getDescription()

> **getDescription**(): `string`

Gets the string that is printed inside the infobox.

###### Returns

`string`

The description value of the infobox options.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1563](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1563)

##### getHeight()

> **getHeight**(): `number`

Gets the height of the infobox.

###### Returns

`number`

The height of the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1569](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1569)

##### getHtmlContent()

> **getHtmlContent**(): `string`

Gets the infobox as HTML.

###### Returns

`string`

The HTML string used to create a custom infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1575](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1575)

##### getLocation()

> **getLocation**(): [`Location`](README.md#location)

Gets the location on the map where the infobox’s anchor is attached.

###### Returns

[`Location`](README.md#location)

The location of the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1581](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1581)

##### getMaxHeight()

> **getMaxHeight**(): `number`

Gets the maximium height setting for the infobox.

###### Returns

`number`

the maximium height setting for the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1587](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1587)

##### getMaxWidth()

> **getMaxWidth**(): `number`

Gets the maximium width setting for the infobox.

###### Returns

`number`

the maximium width setting for the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1593](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1593)

##### getOffset()

> **getOffset**(): [`Point`](README.md#point)

Gets the amount the infobox pointer is shifted from the location of the infobox, or if showPointer is false, then it is the amount the infobox
bottom left edge is shifted from the location of the infobox. The default value is (0,0), which means there is no offset.

###### Returns

[`Point`](README.md#point)

The offset of the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1600](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1600)

##### getOptions()

> **getOptions**(): [`IInfoboxOptions`](README.md#iinfoboxoptions)

Gets the infobox options.

###### Returns

[`IInfoboxOptions`](README.md#iinfoboxoptions)

The infobox options currently used by the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1606](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1606)

##### getShowCloseButton()

> **getShowCloseButton**(): `boolean`

Gets a boolean indicating whether the infobox close button is shown.

###### Returns

`boolean`

A boolean indicating if the close button is shown or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1612](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1612)

##### getShowPointer()

> **getShowPointer**(): `boolean`

Gets a boolean indicating whether the infobox is drawn with a pointer.

###### Returns

`boolean`

A boolean indicating if the pointer of the infobox is shown or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1618](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1618)

##### getTitle()

> **getTitle**(): `string`

Gets a string that is the title of the infobox.

###### Returns

`string`

The title property of the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1624](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1624)

##### getVisible()

> **getVisible**(): `boolean`

Gets whether the infobox is visible. A value of false indicates that the infobox is hidden, although it is still an entity on the map.

###### Returns

`boolean`

A boolean indicating if the infobox is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1630](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1630)

##### getWidth()

> **getWidth**(): `number`

Gets the width of the infobox.

###### Returns

`number`

The width of the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1636](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1636)

##### getZIndex()

> **getZIndex**(): `number`

Gets the z-index of the infobox.

###### Returns

`number`

The z-index of the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1642](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1642)

##### setHtmlContent()

> **setHtmlContent**(`content`): `void`

Sets the HTML content of the infobox. You can use this method to change the look of the infobox. Note that infobox options are ignored if
custom HTML is set. Also, when custom HTML is used to represent the infobox, the infobox is anchored at the bottom-left corner.

###### Parameters

• **content**: `string`

The HTML string to use to generate the infobox.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1649](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1649)

##### setLocation()

> **setLocation**(`loc`): `void`

Sets the location on the map where the anchor of the infobox is attached.

###### Parameters

• **loc**: [`Location`](README.md#location)

The location to display the infobox at.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1655](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1655)

##### setMap()

> **setMap**(`map`): `void`

Adds the infobox to the map. To remove an Infobox from the map, simply pass null into this function.

###### Parameters

• **map**: [`Map`](README.md#map-2)

A map instance to display the infoboox on, or null if removing infobox from map.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1661](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1661)

##### setOptions()

> **setOptions**(`options`, `ignoreDelay`?): `void`

Sets options for the infobox. If the ignoreDelay parameter is set to true, the closeDelayTime will be ignored if the visible option is being changed from true to false.

###### Parameters

• **options**: [`IInfoboxOptions`](README.md#iinfoboxoptions)

The options to assign to the infobox.

• **ignoreDelay?**: `boolean`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1667](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1667)

***

### KmlScreenOverlay

Overlays HTML elements winthin the map container that are above the map.
This is useful when adding logos, attributions or legends to the map.
This class is only used by the KML reader and not meant to be used on its own.

#### Requires

The Microsoft.Maps.GeoXml module.

#### Constructors

##### new KmlScreenOverlay()

> **new KmlScreenOverlay**(`htmlElement`?, `options`?): [`KmlScreenOverlay`](README.md#kmlscreenoverlay)

###### Parameters

• **htmlElement?**: `string` \| `HTMLElement`

The new htmlElement to set for the overlay.

• **options?**: [`IKmlScreenOverlayOptions`](README.md#ikmlscreenoverlayoptions)

The options to customize the screen overlay.

###### Returns

[`KmlScreenOverlay`](README.md#kmlscreenoverlay)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:252](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L252)

#### Properties

##### metadata

> **metadata**: `any`

Optional property to store any additional metadata for this overlay.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:245](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L245)

#### Methods

##### clear()

> **clear**(): `void`

Clears the screen overlay.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:257](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L257)

##### getBelowNavigationBar()

> **getBelowNavigationBar**(): `boolean`

Gets a boolean indicating if the screen overlay is displayed above or below the navigation bar.

###### Returns

`boolean`

A boolean indicating if the screen overlay is displayed above or below the navigation bar.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:263](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L263)

##### getHtmlElement()

> **getHtmlElement**(): `HTMLElement`

Gets the html element of this screen overlay.

###### Returns

`HTMLElement`

the htmlElement of this overlay.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:269](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L269)

##### getMap()

> **getMap**(): [`Map`](README.md#map-2)

Returns the map that this overlay is attached to.

###### Returns

[`Map`](README.md#map-2)

The map that this overlay is attached to.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:275](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L275)

##### getVisible()

> **getVisible**(): `boolean`

Gets a boolean indicating if the screen overlay is visible or not.

###### Returns

`boolean`

A boolean indicating if the screen overlay is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:281](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L281)

##### setHtmlElement()

> **setHtmlElement**(`htmlElement`): `void`

Updates the html element of this screen overlay.

###### Parameters

• **htmlElement**: `string` \| `HTMLElement`

The new htmlElement to set for the overlay.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:287](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L287)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options to customize the screen overlay.

###### Parameters

• **options**: [`IKmlScreenOverlayOptions`](README.md#ikmlscreenoverlayoptions)

The options to customize the screen overlay.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:293](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L293)

##### setVisible()

> **setVisible**(`visible`): `void`

Sets whether the overlay is visible or not.

###### Parameters

• **visible**: `boolean`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:299](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L299)

***

### Layer

The Layer class makes it easy to organize groups of data by storing them in separate layers on the map. Grouping your data into layers
provides a number of benefits such as the ability to hide or attach events to all IPrimitive shapes in a layer with a single line of code,
while also providing providing a performance benefit over manually looping through each shape and performing these tasks.

#### Extended by

- [`EntityCollection`](README.md#entitycollection)
- [`ContourLayer`](README.md#contourlayer)
- [`DataBinningLayer`](README.md#databinninglayer)

#### Implements

- [`IDataLayer`](README.md#idatalayer)

#### Constructors

##### new Layer()

> **new Layer**(`id`?): [`Layer`](README.md#layer)

###### Parameters

• **id?**: `string`

Unique string identifier for the layer.

###### Returns

[`Layer`](README.md#layer)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1684](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1684)

#### Properties

##### metadata

> **metadata**: `any`

Optional property to store any additional metadata for this layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1678](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1678)

#### Methods

##### add()

> **add**(`primitive`, `index`?): `void`

Adds a shapes to the layer, at the specified index if specified.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive) \| [`IPrimitive`](README.md#iprimitive)[]

The shape(s) to be added to the layer.

• **index?**: `number`

The index at which to insert the shape into the layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1691](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1691)

##### clear()

> **clear**(): `void`

Clears all the data

###### Returns

`void`

###### Implementation of

[`IDataLayer`](README.md#idatalayer).[`clear`](README.md#clear-10)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1696](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1696)

##### dispose()

> **dispose**(): `void`

Cleans up any resources this object is consuming

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1701](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1701)

##### getId()

> **getId**(): `string`

Gets the id of the layer.

###### Returns

`string`

The id assigned to the layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1707](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1707)

##### getPrimitives()

> **getPrimitives**(): [`IPrimitive`](README.md#iprimitive)[]

Gets an array of shapes that are in the layer. This can be used to iterate over the individual shapes.

###### Returns

[`IPrimitive`](README.md#iprimitive)[]

An array of shapes that are in the layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1713](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1713)

##### getVisible()

> **getVisible**(): `boolean`

Gets a value indicating whether the layer is visible or not.

###### Returns

`boolean`

A boolean indicating if the layer is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1719](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1719)

##### getZIndex()

> **getZIndex**(): `number`

Gets the zIndex of the layer.

###### Returns

`number`

The zIndex of the layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1725](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1725)

##### remove()

> **remove**(`primitive`): [`IPrimitive`](README.md#iprimitive)

Removes a primitive

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive)

primitive that needs to be removed

###### Returns

[`IPrimitive`](README.md#iprimitive)

The primitive that needs to be removed

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1732](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1732)

##### removeAt()

> **removeAt**(`index`): [`IPrimitive`](README.md#iprimitive)

Removes a primitive at a specified index

###### Parameters

• **index**: `number`

index of the primitive that needs to be removed

###### Returns

[`IPrimitive`](README.md#iprimitive)

The primitive that needs to be removed at this index

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1739](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1739)

##### setPrimitives()

> **setPrimitives**(`primitives`): `void`

Replaces all shapes in the layer with the new array of shapes that have been provided.

###### Parameters

• **primitives**: [`IPrimitive`](README.md#iprimitive)[]

The array of shapes to add to the layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1745](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1745)

##### setVisible()

> **setVisible**(`value`): `void`

Sets whether the layer is visible or not.

###### Parameters

• **value**: `boolean`

A value indicating if the layer should be displayed or not.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1751](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1751)

##### setZIndex()

> **setZIndex**(`zIndex`): `void`

Sets the zIndex of the layer.

###### Parameters

• **zIndex**: `number`

The zIndex value to assign to the layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1757](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1757)

***

### LayerCollection

The layers property of the map is a LayerCollection object and contains all the layers that have been added to the map.
Note: This class is only exposed in the map.layers property. No other instance of this class can be created.

#### Extends

- `Array`

#### Constructors

##### new LayerCollection()

> **new LayerCollection**(`arrayLength`?): [`LayerCollection`](README.md#layercollection)

###### Parameters

• **arrayLength?**: `number`

###### Returns

[`LayerCollection`](README.md#layercollection)

###### Inherited from

`Array.constructor`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1507

#### Properties

##### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

###### \[unscopables\]?

> `readonly` `optional` **\[unscopables\]**: `boolean`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

###### length?

> `optional` **length**: `boolean`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

###### \[iterator\]?

> `optional` **\[iterator\]**

###### concat?

> `optional` **concat**

###### copyWithin?

> `optional` **copyWithin**

###### entries?

> `optional` **entries**

###### every?

> `optional` **every**

###### fill?

> `optional` **fill**

###### filter?

> `optional` **filter**

###### find?

> `optional` **find**

###### findIndex?

> `optional` **findIndex**

###### flat?

> `optional` **flat**

###### flatMap?

> `optional` **flatMap**

###### forEach?

> `optional` **forEach**

###### includes?

> `optional` **includes**

###### indexOf?

> `optional` **indexOf**

###### join?

> `optional` **join**

###### keys?

> `optional` **keys**

###### lastIndexOf?

> `optional` **lastIndexOf**

###### map?

> `optional` **map**

###### pop?

> `optional` **pop**

###### push?

> `optional` **push**

###### reduce?

> `optional` **reduce**

###### reduceRight?

> `optional` **reduceRight**

###### reverse?

> `optional` **reverse**

###### shift?

> `optional` **shift**

###### slice?

> `optional` **slice**

###### some?

> `optional` **some**

###### sort?

> `optional` **sort**

###### splice?

> `optional` **splice**

###### toLocaleString?

> `optional` **toLocaleString**

###### toString?

> `optional` **toString**

###### unshift?

> `optional` **unshift**

###### values?

> `optional` **values**

###### Inherited from

`Array.[unscopables]`

###### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

##### length

> **length**: `number`

The number of layers in the collection.

###### Overrides

`Array.length`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1766](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1766)

##### \[species\]

> `readonly` `static` **\[species\]**: `ArrayConstructor`

###### Inherited from

`Array.[species]`

###### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

#### Methods

##### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`any`\>

Iterator

###### Returns

`IterableIterator`\<`any`\>

###### Inherited from

`Array.[iterator]`

###### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:58

##### clear()

> **clear**(): `void`

Removes all layers from the map.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1771](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1771)

##### concat()

###### concat(items)

> **concat**(...`items`): `any`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

###### Parameters

• ...**items**: `ConcatArray`\<`any`\>[]

Additional arrays and/or items to add to the end of the array.

###### Returns

`any`[]

###### Inherited from

`Array.concat`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1350

###### concat(items)

> **concat**(...`items`): `any`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

###### Parameters

• ...**items**: `any`[]

Additional arrays and/or items to add to the end of the array.

###### Returns

`any`[]

###### Inherited from

`Array.concat`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1356

##### copyWithin()

> **copyWithin**(`target`, `start`, `end`?): `this`

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

###### Parameters

• **target**: `number`

If target is negative, it is treated as length+target where length is the
length of the array.

• **start**: `number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

• **end?**: `number`

If not specified, length of the this object is used as its default value.

###### Returns

`this`

###### Inherited from

`Array.copyWithin`

###### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:62

##### entries()

> **entries**(): `IterableIterator`\<[`number`, `any`]\>

Returns an iterable of key, value pairs for every entry in the array

###### Returns

`IterableIterator`\<[`number`, `any`]\>

###### Inherited from

`Array.entries`

###### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:63

##### every()

###### every(predicate, thisArg)

> **every**\<`S`\>(`predicate`, `thisArg`?): `this is S[]`

Determines whether all the members of an array satisfy the specified test.

###### Type Parameters

• **S** *extends* `any`

###### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

###### Returns

`this is S[]`

###### Inherited from

`Array.every`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1433

###### every(predicate, thisArg)

> **every**(`predicate`, `thisArg`?): `boolean`

Determines whether all the members of an array satisfy the specified test.

###### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

###### Returns

`boolean`

###### Inherited from

`Array.every`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1442

##### fill()

> **fill**(`value`, `start`?, `end`?): `this`

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

###### Parameters

• **value**: `any`

value to fill array section with

• **start?**: `number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

• **end?**: `number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

###### Returns

`this`

###### Inherited from

`Array.fill`

###### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:51

##### filter()

###### filter(predicate, thisArg)

> **filter**\<`S`\>(`predicate`, `thisArg`?): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

###### Type Parameters

• **S** *extends* `any`

###### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

###### Returns

`S`[]

###### Inherited from

`Array.filter`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1469

###### filter(predicate, thisArg)

> **filter**(`predicate`, `thisArg`?): `any`[]

Returns the elements of an array that meet the condition specified in a callback function.

###### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

###### Returns

`any`[]

###### Inherited from

`Array.filter`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1475

##### find()

###### find(predicate, thisArg)

> **find**\<`S`\>(`predicate`, `thisArg`?): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

###### Type Parameters

• **S** *extends* `any`

###### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

###### Returns

`undefined` \| `S`

###### Inherited from

`Array.find`

###### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:29

###### find(predicate, thisArg)

> **find**(`predicate`, `thisArg`?): `any`

###### Parameters

• **predicate**

• **thisArg?**: `any`

###### Returns

`any`

###### Inherited from

`Array.find`

###### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:30

##### findIndex()

> **findIndex**(`predicate`, `thisArg`?): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

###### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

###### Returns

`number`

###### Inherited from

`Array.findIndex`

###### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:41

##### flat()

> **flat**\<`A`, `D`\>(`this`, `depth`?): `FlatArray`\<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

###### Type Parameters

• **A**

• **D** *extends* `number` = `1`

###### Parameters

• **this**: `A`

• **depth?**: `D`

The maximum recursion depth

###### Returns

`FlatArray`\<`A`, `D`\>[]

###### Inherited from

`Array.flat`

###### Defined in

node\_modules/typescript/lib/lib.es2019.array.d.ts:75

##### flatMap()

> **flatMap**\<`U`, `This`\>(`callback`, `thisArg`?): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

###### Type Parameters

• **U**

• **This** = `undefined`

###### Parameters

• **callback**

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

• **thisArg?**: `This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

###### Returns

`U`[]

###### Inherited from

`Array.flatMap`

###### Defined in

node\_modules/typescript/lib/lib.es2019.array.d.ts:64

##### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Performs the specified action for each element in an array.

###### Parameters

• **callbackfn**

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

###### Returns

`void`

###### Inherited from

`Array.forEach`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1457

##### includes()

> **includes**(`searchElement`, `fromIndex`?): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

###### Parameters

• **searchElement**: `any`

The element to search for.

• **fromIndex?**: `number`

The position in this array at which to begin searching for searchElement.

###### Returns

`boolean`

###### Inherited from

`Array.includes`

###### Defined in

node\_modules/typescript/lib/lib.es2016.array.include.d.ts:25

##### indexOf()

> **indexOf**(`layer`): `number`

Gets the index of a layer in the collection.

###### Parameters

• **layer**: [`ILayer`](README.md#ilayer)

The layer to get the index of.

###### Returns

`number`

The index of the specified layer.

###### Overrides

`Array.indexOf`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1778](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1778)

##### insert()

> **insert**(`layer`): `void`

Adds a layer to the map.

###### Parameters

• **layer**: [`ILayer`](README.md#ilayer)

The layer to insert into the collection.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1784](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1784)

##### insertAll()

> **insertAll**(`layers`): `void`

Adds an array of layers to the map.

###### Parameters

• **layers**: [`ILayer`](README.md#ilayer)[]

The layers to insert into the collection.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1790](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1790)

##### join()

> **join**(`separator`?): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

###### Parameters

• **separator?**: `string`

A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

###### Returns

`string`

###### Inherited from

`Array.join`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1361

##### keys()

> **keys**(): `IterableIterator`\<`number`\>

Returns an iterable of keys in the array

###### Returns

`IterableIterator`\<`number`\>

###### Inherited from

`Array.keys`

###### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:68

##### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

###### Parameters

• **searchElement**: `any`

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

###### Returns

`number`

###### Inherited from

`Array.lastIndexOf`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1424

##### map()

> **map**\<`U`\>(`callbackfn`, `thisArg`?): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

###### Type Parameters

• **U**

###### Parameters

• **callbackfn**

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

###### Returns

`U`[]

###### Inherited from

`Array.map`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1463

##### pop()

> **pop**(): `any`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

###### Returns

`any`

###### Inherited from

`Array.pop`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1339

##### push()

> **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

###### Parameters

• ...**items**: `any`[]

New elements to add to the array.

###### Returns

`number`

###### Inherited from

`Array.push`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1344

##### reduce()

###### reduce(callbackfn)

> **reduce**(`callbackfn`): `any`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

###### Returns

`any`

###### Inherited from

`Array.reduce`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1481

###### reduce(callbackfn, initialValue)

> **reduce**(`callbackfn`, `initialValue`): `any`

###### Parameters

• **callbackfn**

• **initialValue**: `any`

###### Returns

`any`

###### Inherited from

`Array.reduce`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1482

###### reduce(callbackfn, initialValue)

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Type Parameters

• **U**

###### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

###### Returns

`U`

###### Inherited from

`Array.reduce`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1488

##### reduceRight()

###### reduceRight(callbackfn)

> **reduceRight**(`callbackfn`): `any`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

###### Returns

`any`

###### Inherited from

`Array.reduceRight`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1494

###### reduceRight(callbackfn, initialValue)

> **reduceRight**(`callbackfn`, `initialValue`): `any`

###### Parameters

• **callbackfn**

• **initialValue**: `any`

###### Returns

`any`

###### Inherited from

`Array.reduceRight`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1495

###### reduceRight(callbackfn, initialValue)

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Type Parameters

• **U**

###### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

###### Returns

`U`

###### Inherited from

`Array.reduceRight`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1501

##### remove()

> **remove**(`layer`): `void`

Removes a layer from the map.

###### Parameters

• **layer**: [`ILayer`](README.md#ilayer)

The layer to remove from the collection.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1796](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1796)

##### removeAt()

> **removeAt**(`idx`): `void`

Removes a layer from the map at the specified index in the collection.

###### Parameters

• **idx**: `number`

The index of the layer to remove.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1802](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1802)

##### reverse()

> **reverse**(): `any`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

###### Returns

`any`[]

###### Inherited from

`Array.reverse`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1366

##### shift()

> **shift**(): `any`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

###### Returns

`any`

###### Inherited from

`Array.shift`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1371

##### slice()

> **slice**(`start`?, `end`?): `any`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

###### Parameters

• **start?**: `number`

The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.

• **end?**: `number`

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.

###### Returns

`any`[]

###### Inherited from

`Array.slice`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1381

##### some()

> **some**(`predicate`, `thisArg`?): `boolean`

Determines whether the specified callback function returns true for any element of an array.

###### Parameters

• **predicate**

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

###### Returns

`boolean`

###### Inherited from

`Array.some`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1451

##### sort()

> **sort**(`compareFn`?): `this`

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

###### Parameters

• **compareFn?**

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

###### Returns

`this`

###### Inherited from

`Array.sort`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1392

##### splice()

###### splice(start, deleteCount)

> **splice**(`start`, `deleteCount`?): `any`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

###### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount?**: `number`

The number of elements to remove.

###### Returns

`any`[]

An array containing the elements that were deleted.

###### Inherited from

`Array.splice`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1399

###### splice(start, deleteCount, items)

> **splice**(`start`, `deleteCount`, ...`items`): `any`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

###### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount**: `number`

The number of elements to remove.

• ...**items**: `any`[]

Elements to insert into the array in place of the deleted elements.

###### Returns

`any`[]

An array containing the elements that were deleted.

###### Inherited from

`Array.splice`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1407

##### toLocaleString()

> **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

###### Returns

`string`

###### Inherited from

`Array.toLocaleString`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1334

##### toString()

> **toString**(): `string`

Returns a string representation of an array.

###### Returns

`string`

###### Inherited from

`Array.toString`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1330

##### unshift()

> **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

###### Parameters

• ...**items**: `any`[]

Elements to insert at the start of the array.

###### Returns

`number`

###### Inherited from

`Array.unshift`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1412

##### values()

> **values**(): `IterableIterator`\<`any`\>

Returns an iterable of values in the array

###### Returns

`IterableIterator`\<`any`\>

###### Inherited from

`Array.values`

###### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:73

##### from()

###### from(arrayLike)

> `static` **from**\<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

###### Type Parameters

• **T**

###### Parameters

• **arrayLike**: `ArrayLike`\<`T`\>

An array-like object to convert to an array.

###### Returns

`T`[]

###### Inherited from

`Array.from`

###### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:70

###### from(arrayLike, mapfn, thisArg)

> `static` **from**\<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg`?): `U`[]

Creates an array from an iterable object.

###### Type Parameters

• **T**

• **U**

###### Parameters

• **arrayLike**: `ArrayLike`\<`T`\>

An array-like object to convert to an array.

• **mapfn**

A mapping function to call on every element of the array.

• **thisArg?**: `any`

Value of 'this' used to invoke the mapfn.

###### Returns

`U`[]

###### Inherited from

`Array.from`

###### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:78

###### from(iterable)

> `static` **from**\<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

###### Type Parameters

• **T**

###### Parameters

• **iterable**: `Iterable`\<`T`\> \| `ArrayLike`\<`T`\>

An iterable object to convert to an array.

###### Returns

`T`[]

###### Inherited from

`Array.from`

###### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:81

###### from(iterable, mapfn, thisArg)

> `static` **from**\<`T`, `U`\>(`iterable`, `mapfn`, `thisArg`?): `U`[]

Creates an array from an iterable object.

###### Type Parameters

• **T**

• **U**

###### Parameters

• **iterable**: `Iterable`\<`T`\> \| `ArrayLike`\<`T`\>

An iterable object to convert to an array.

• **mapfn**

A mapping function to call on every element of the array.

• **thisArg?**: `any`

Value of 'this' used to invoke the mapfn.

###### Returns

`U`[]

###### Inherited from

`Array.from`

###### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:89

##### isArray()

> `static` **isArray**(`arg`): `arg is any[]`

###### Parameters

• **arg**: `any`

###### Returns

`arg is any[]`

###### Inherited from

`Array.isArray`

###### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1513

##### of()

> `static` **of**\<`T`\>(...`items`): `T`[]

Returns a new array from a set of elements.

###### Type Parameters

• **T**

###### Parameters

• ...**items**: `T`[]

A set of elements to include in the new array object.

###### Returns

`T`[]

###### Inherited from

`Array.of`

###### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:84

***

### Location

This class stores the coordinate information needed to mark locations on a map. The Location class consists of two properties:
latitude and longitude.

#### Constructors

##### new Location()

> **new Location**(`latitude`, `longitude`): [`Location`](README.md#location)

###### Parameters

• **latitude**: `any`

The location north or south of the equator from +90 to -90

• **longitude**: `any`

The location east or west of the prime meridian +180 to -180

###### Returns

[`Location`](README.md#location)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1821](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1821)

#### Properties

##### latitude

> **latitude**: `number`

The location north or south of the equator from +90 to -90

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1811](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1811)

##### longitude

> **longitude**: `number`

The location east or west of the prime meridian +180 to -180

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1814](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1814)

#### Methods

##### clone()

> **clone**(): [`Location`](README.md#location)

Creates a deep copy of the map location.

###### Returns

[`Location`](README.md#location)

A deep copy of the map location.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1835](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1835)

##### toString()

> **toString**(): `string`

Converts the Location to a string representation.

###### Returns

`string`

A string representation of the location.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1862](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1862)

##### areEqual()

> `static` **areEqual**(`location1`, `location2`): `boolean`

Determines if two locations are equal.

###### Parameters

• **location1**: [`Location`](README.md#location)

The first location to test.

• **location2**: [`Location`](README.md#location)

The second location to test.

###### Returns

`boolean`

True if both locations are equivalent.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1829](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1829)

##### cloneFrom()

> `static` **cloneFrom**(`source`): [`Location`](README.md#location)

Creates a proper Location from an object that has the same signature.

###### Parameters

• **source**: [`Location`](README.md#location)

A Location or Location-like object that contains the same properties.

###### Returns

[`Location`](README.md#location)

A copy of the map location.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1842](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1842)

##### normalizeLongitude()

> `static` **normalizeLongitude**(`longitude`): `number`

Normalizes the longitude by wrapping it around the earth.

###### Parameters

• **longitude**: `number`

The input longitude.

###### Returns

`number`

The longitude normalized to within -180 and +180.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1849](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1849)

##### parseLatLong()

> `static` **parseLatLong**(`str`): [`Location`](README.md#location)

Parses a location string of the form "lat,long".

###### Parameters

• **str**: `string`

The location string.

###### Returns

[`Location`](README.md#location)

The parsed location or null otherwise.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1856](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1856)

***

### LocationRect

The LocationRect class, also known as a bounding box, consists of a set of coordinates that are used to represent rectangular area on the map.

#### Constructors

##### new LocationRect()

> **new LocationRect**(`center`, `width`, `height`): [`LocationRect`](README.md#locationrect)

###### Parameters

• **center**: [`Location`](README.md#location)

The center of the LocationRect.

• **width**: `number`

The width of the LocationRect in degrees.

• **height**: `number`

The height of the LocationRect in degrees.

###### Returns

[`LocationRect`](README.md#locationrect)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1884](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1884)

#### Properties

##### center

> **center**: [`Location`](README.md#location)

The location that defines the center of the rectangle.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1870](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1870)

##### height

> **height**: `number`

The height, in degrees, of the rectangle.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1873](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1873)

##### width

> **width**: `number`

The width, in degrees, of the rectangle.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1876](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1876)

#### Methods

##### buffer()

> **buffer**(`percentage`): `void`

Scales the size of a LocationRect by multiplying the width and height properties by a percentage.

###### Parameters

• **percentage**: `number`

A percentage value to increase the size of the LocationRect by.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1944](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1944)

##### clone()

> **clone**(): [`LocationRect`](README.md#locationrect)

Gets a copy of the LocationRect object.

###### Returns

[`LocationRect`](README.md#locationrect)

###### Retruns

A copy of the LocationRect object.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1950](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1950)

##### contains()

> **contains**(`location`): `boolean`

Gets whether the specified Location is within the LocationRect.

###### Parameters

• **location**: [`Location`](README.md#location)

###### Returns

`boolean`

A boolean indicating if a location is within a LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1956](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1956)

##### crossesInternationalDateLine()

> **crossesInternationalDateLine**(): `boolean`

Determines if the LocationRect crosses the 180th meridian.

###### Returns

`boolean`

A boolean indicating if the LocationRect crosses the international date line (-180/180 degrees longitude).

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1962](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1962)

##### getEast()

> **getEast**(): `number`

Gets the longitude that defines the eastern edge of the LocationRect.

###### Returns

`number`

The eastern longitude value of the LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1968](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1968)

##### getNorth()

> **getNorth**(): `number`

Gets the latitude that defines the northern edge of the LocationRect.

###### Returns

`number`

The northern latitude value of the LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1974](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1974)

##### getNorthwest()

> **getNorthwest**(): [`Location`](README.md#location)

Gets the Location that defines the northwest corner of the LocationRect.

###### Returns

[`Location`](README.md#location)

The northwest corner location of the LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1980](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1980)

##### getSouth()

> **getSouth**(): `number`

Gets the latitude that defines the southern edge of the LocationRect.

###### Returns

`number`

The southern latitude value of the LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1986](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1986)

##### getSoutheast()

> **getSoutheast**(): [`Location`](README.md#location)

Gets the Location that defines the southeast corner of the LocationRect.

###### Returns

[`Location`](README.md#location)

The southeast corner location of the LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1992](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1992)

##### getWest()

> **getWest**(): `number`

Gets the latitude that defines the western edge of the LocationRect.

###### Returns

`number`

The western longitude value of the LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1998](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1998)

##### intersects()

> **intersects**(`rect`): `boolean`

Gets whether the specified LocationRect intersects with this LocationRect.

###### Parameters

• **rect**: [`LocationRect`](README.md#locationrect)

A second LocationRect to test for intersection with.

###### Returns

`boolean`

A boolean indicating if a second LocationRect interests with this LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2005](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2005)

##### splitByInternationalDateLine()

> **splitByInternationalDateLine**(): [`LocationRect`](README.md#locationrect)[]

If a LocationRect crosses the international date line, this method splits it into two LocationRect objects and returns them as an array.

###### Returns

[`LocationRect`](README.md#locationrect)[]

An array of LocationRects, that are split by the international date line (-180/180 degrees longitude)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2011](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2011)

##### toString()

> **toString**(): `string`

Converts the LocationRect object to a string. The output will be in the format "North,West,South,East".

###### Returns

`string`

A string version of the LocationRect.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2017](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2017)

##### fromCorners()

> `static` **fromCorners**(`northwest`, `southeast`): [`LocationRect`](README.md#locationrect)

Gets a LocationRect using the specified locations for the northwest and southeast corners.

###### Parameters

• **northwest**: [`Location`](README.md#location)

The north west corner of the LocationRect.

• **southeast**: [`Location`](README.md#location)

The south east corner of the LocationRect.

###### Returns

[`LocationRect`](README.md#locationrect)

A LocationRect using the specified locations for the northwest and southeast corners.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1892](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1892)

##### fromEdges()

> `static` **fromEdges**(`north`, `west`, `south`, `east`): [`LocationRect`](README.md#locationrect)

Gets a LocationRect using the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries.

###### Parameters

• **north**: `number`

The northern latitude of the LocationRect.

• **west**: `number`

The western longitude of the LocationRect.

• **south**: `number`

The southern latitude of the LocationRect.

• **east**: `number`

The eastern longitude of the LocationRect.

###### Returns

[`LocationRect`](README.md#locationrect)

A LocationRect defined by the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1902](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1902)

##### fromLocations()

###### fromLocations(locations)

> `static` **fromLocations**(...`locations`): [`LocationRect`](README.md#locationrect)

Gets a LocationRect using a list of locations.

###### Parameters

• ...**locations**: [`Location`](README.md#location)[]

A list of locations.

###### Returns

[`LocationRect`](README.md#locationrect)

A LocationRect that encloses all the specified locations.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1909](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1909)

###### fromLocations(locations)

> `static` **fromLocations**(`locations`): [`LocationRect`](README.md#locationrect)

Gets a LocationRect using an array of locations.

###### Parameters

• **locations**: [`Location`](README.md#location)[]

An array of locations.

###### Returns

[`LocationRect`](README.md#locationrect)

A LocationRect that encloses all the specified locations.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1916](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1916)

##### fromShapes()

> `static` **fromShapes**(`shapes`): [`LocationRect`](README.md#locationrect)

Calculates the LocationRect for an indivudal shape or an array of shapes.

###### Parameters

• **shapes**: [`IPrimitive`](README.md#iprimitive) \| ([`IPrimitive`](README.md#iprimitive) \| [`IPrimitive`](README.md#iprimitive)[])[]

An indivudal shape or an array of shapes to calculate the LocationRect for.

###### Returns

[`LocationRect`](README.md#locationrect)

A LocationRect for the shapes.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1923](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1923)

##### fromString()

> `static` **fromString**(`str`): [`LocationRect`](README.md#locationrect)

Creates a LocationRect from a string with the following format: "north,west,south,east". North, west, south and east specify the coordinate number values.

###### Parameters

• **str**: `string`

A string that repsents a LocationRect with the format "north,west,south,east".

###### Returns

[`LocationRect`](README.md#locationrect)

A LocationRect defined by the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries that have been parsed by the string.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1930](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1930)

##### merge()

> `static` **merge**(`rect1`, `rect2`): [`LocationRect`](README.md#locationrect)

A static function that merges two LocationRect to form a new LocationRect which represents the combined area of the two LocationRect objects.

###### Parameters

• **rect1**: [`LocationRect`](README.md#locationrect)

The first LocationRect to merge with the second LocationRect.

• **rect2**: [`LocationRect`](README.md#locationrect)

The second LocationRect to merge with the first LocationRect.

###### Returns

[`LocationRect`](README.md#locationrect)

A new LocationRect which represents the combined area of the two LocationRect objects.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:1938](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L1938)

***

### Map

The map object generates an interactive map within a specified DOM element.

#### Constructors

##### new Map()

> **new Map**(`parentElement`, `options`): [`Map`](README.md#map-2)

###### Parameters

• **parentElement**: `string` \| `HTMLElement`

The parent element of the map as a CSS selector string or HTMLElement.

• **options**: [`IMapLoadOptions`](README.md#imaploadoptions)

Options used when creating the map.

###### Returns

[`Map`](README.md#map-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2033](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2033)

#### Properties

##### entities

> **entities**: [`EntityCollection`](README.md#entitycollection)

Entities of the map

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2023](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2023)

##### layers

> **layers**: [`LayerCollection`](README.md#layercollection)

Set of map layers

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2026](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2026)

#### Methods

##### dispose()

> **dispose**(): `void`

Deletes the Map object and releases any associated resources.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2045](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2045)

##### getBounds()

> **getBounds**(): [`LocationRect`](README.md#locationrect)

Gets the location rectangle that defines the boundaries of the current map view.

###### Returns

[`LocationRect`](README.md#locationrect)

The location rectangle that defines the boundaries of the current map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2051](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2051)

##### getCenter()

> **getCenter**(): [`Location`](README.md#location)

Gets the location of the center of the current map view.

###### Returns

[`Location`](README.md#location)

The location of the center of the current map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2057](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2057)

##### getCopyrights()

> **getCopyrights**(`callback`): `void`

Gets to the specified callback an array of strings representing the attributions of the imagery currently displayed on the map.

###### Parameters

• **callback**

The callback function that needs to be called after retrieving the copyright information.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2063](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2063)

##### getCredentials()

> **getCredentials**(`callback`): `void`

Gets the session ID. This method calls the callback function with the session ID as the first parameter

###### Parameters

• **callback**

The callback function that needs to be called with the session id.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2069](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2069)

##### getCulture()

> **getCulture**(): `string`

Gets the current culture.

###### Returns

`string`

The current culture.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2075](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2075)

##### getHeading()

> **getHeading**(): `number`

Returns the heading of the current map view.

###### Returns

`number`

Returns the heading of the current map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2087](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2087)

##### getHeight()

> **getHeight**(): `number`

Gets the height of the map control.

###### Returns

`number`

The height of the map control.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2081](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2081)

##### getImageryId()

> **getImageryId**(): `string`

Gets the string that represents the imagery currently displayed on the map.

###### Returns

`string`

The string that represents the imagery currently displayed on the map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2093](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2093)

##### getMapTypeId()

> **getMapTypeId**(): [`MapTypeId`](README.md#maptypeid)

Gets a string that represents the current map type displayed on the map.

###### Returns

[`MapTypeId`](README.md#maptypeid)

A string that represents the current map type displayed on the map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2099](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2099)

##### getMetersPerPixel()

> **getMetersPerPixel**(): `number`

Gets the current scale in meters per pixel of the center of the map.

###### Returns

`number`

The current scale in meters per pixel of the center of the map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2105](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2105)

##### getOptions()

> **getOptions**(): [`IMapOptions`](README.md#imapoptions)

Gets the map options that have been set.

###### Returns

[`IMapOptions`](README.md#imapoptions)

the map options that have been set.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2111](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2111)

##### getPageX()

> **getPageX**(): `number`

Gets the x coordinate of the top left corner of the map control, relative to the page.

###### Returns

`number`

The x coordinate of the top left corner of the map control, relative to the page.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2117](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2117)

##### getPageY()

> **getPageY**(): `number`

Gets the y coordinate of the top left corner of the map control, relative to the page.

###### Returns

`number`

The y coordinate of the top left corner of the map control, relative to the page.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2123](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2123)

##### getPitch()

> **getPitch**(): `number`

Returns the pitch of the current streetside map view.

###### Returns

`number`

Returns the pitch of the current streetside map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2129](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2129)

##### getRootElement()

> **getRootElement**(): `HTMLElement`

Gets the map root node.

###### Returns

`HTMLElement`

the map root node.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2135](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2135)

##### getUserRegion()

> **getUserRegion**(): `string`

Gets the user region.

###### Returns

`string`

The user region.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2141](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2141)

##### getWidth()

> **getWidth**(): `number`

Gets the width of the map control.

###### Returns

`number`

the width of the map control.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2147](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2147)

##### getZoom()

> **getZoom**(): `number`

Gets the zoom level of the current map view.

###### Returns

`number`

Returns the zoom level of the current map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2153](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2153)

##### getZoomRange()

> **getZoomRange**(): [`IRange`](README.md#irange)

Gets the range of valid zoom levels for the current map view.

###### Returns

[`IRange`](README.md#irange)

The range of valid zoom levels for the current map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2159](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2159)

##### isMercator()

> **isMercator**(): `boolean`

Gets a boolean indicating whether the map is in a regular Mercator nadir mode.

###### Returns

`boolean`

A boolean indicating whether the map is in a regular Mercator nadir mode.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2165](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2165)

##### isRotationEnabled()

> **isRotationEnabled**(): `boolean`

Gets a boolean indicating if the current map type allows the heading to change; false if the display heading is fixed.

###### Returns

`boolean`

true if the current map type allows the heading to change; false if the display heading is fixed.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2171](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2171)

##### setMapType()

> **setMapType**(`mapTypeId`): `void`

Sets the current map type.

###### Parameters

• **mapTypeId**: [`MapTypeId`](README.md#maptypeid)

The map imagery type of the map to set.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2177](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2177)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the map options.

###### Parameters

• **options**: [`IMapOptions`](README.md#imapoptions)

The map options to be set.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2183](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2183)

##### setView()

> **setView**(`viewOptions`): `void`

Sets the view of the map.

###### Parameters

• **viewOptions**: [`IViewOptions`](README.md#iviewoptions)

The view options to be set.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2189](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2189)

##### tryLocationToPixel()

> **tryLocationToPixel**(`location`, `reference`?): [`Point`](README.md#point) \| [`Point`](README.md#point)[]

Converts a specified Location or a Location array to a Point or Point array on the map
relative to the specified PixelReference. If no reference is specified, PixelReference.viewport
is taken.

###### Parameters

• **location**: [`Location`](README.md#location) \| [`Location`](README.md#location)[]

The given Location or Location[] to convert.

• **reference?**: `any`

The PixelReference to specify the reference point.

###### Returns

[`Point`](README.md#point) \| [`Point`](README.md#point)[]

The converted Point or Point[], or null if the conversion fails.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2199](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2199)

##### tryPixelToLocation()

> **tryPixelToLocation**(`point`, `reference`?): [`Location`](README.md#location) \| [`Location`](README.md#location)[]

Converts a specified Point or a Point array to a Location or Location array on the map
relative to the specified PixelReference. If no reference is specified, PixelReference.viewport
is taken.

###### Parameters

• **point**: [`Point`](README.md#point) \| [`Point`](README.md#point)[]

The given Point or Point[] to convert.

• **reference?**: `any`

The PixelReference to specify the reference point.

###### Returns

[`Location`](README.md#location) \| [`Location`](README.md#location)[]

The converted Location or Location[], or null if the conversion fails.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2209](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2209)

##### getClosestPanorama()

> `static` **getClosestPanorama**(`bounds`, `success`, `missingCoverage`): `void`

Gets the streetside panorama information closest to the specified bounding box and returns using a success callback function. 
This information can then be used to set the map view to that streetside panorama.

###### Parameters

• **bounds**: [`LocationRect`](README.md#locationrect)

• **success**

• **missingCoverage**

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2039](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2039)

##### getVersion()

> `static` **getVersion**(): `string`

Returns the branch name; release, experimental, frozen.

###### Returns

`string`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2042](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2042)

***

### Point

This class is used to represent a pixel coordinate or offset. This is often used by pushpin anchors, and map location to pixel conversion calculations.

#### Constructors

##### new Point()

> **new Point**(`x`, `y`): [`Point`](README.md#point)

###### Parameters

• **x**: `number`

The x coordinate.

• **y**: `number`

The y coordinate.

###### Returns

[`Point`](README.md#point)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2227](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2227)

#### Properties

##### x

> **x**: `number`

The x coordinate

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2217](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2217)

##### y

> **y**: `number`

The y coordinate

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2220](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2220)

#### Methods

##### add()

> **add**(`point`): [`Point`](README.md#point)

Adds the x and y values of two points and returns a new Point.

###### Parameters

• **point**: [`Point`](README.md#point)

The point to add.

###### Returns

[`Point`](README.md#point)

A new point created by the sum of two points.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2234](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2234)

##### clone()

> **clone**(): [`Point`](README.md#point)

Creates a copy of the current point.

###### Returns

[`Point`](README.md#point)

A new instance of the current point.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2240](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2240)

##### equals()

> **equals**(`point`, `tolerance`?): `boolean`

Compares the x and y values of two points to see if they are equal. If a tolerance value is specified, it checks to see if the linear distance between the points is less than or equal to the tolerance value.

###### Parameters

• **point**: [`Point`](README.md#point)

The point to compare to.

• **tolerance?**: `number`

Optional, tolerance (>= 0) to avoid false result because of floating point errors.

###### Returns

`boolean`

true if this point equals point, false otherwise

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2248](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2248)

##### subtract()

> **subtract**(`point`): [`Point`](README.md#point)

Subtracts the x and y values of a points and returns a new Point.

###### Parameters

• **point**: [`Point`](README.md#point)

The point to subtract.

###### Returns

[`Point`](README.md#point)

A new point created by the subtraction of two points.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2255](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2255)

##### toString()

> **toString**(): `string`

Converts the Point to a string representation.

###### Returns

`string`

A string representation of the point.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2261](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2261)

***

### PointCompression

This compression algorithm encodes/decodes an array of locations into a string.
This algorithm is used for generating a compressed collection of locations for use
with the Bing Maps REST Elevation Service. This algorithm is also used for decoding
the compressed coordinates returned by the GeoData API.

These algorithms come from the following documentation:
http://msdn.microsoft.com/en-us/library/jj158958.aspx
http://msdn.microsoft.com/en-us/library/dn306801.aspx

#### Constructors

##### new PointCompression()

> **new PointCompression**(): [`PointCompression`](README.md#pointcompression)

###### Returns

[`PointCompression`](README.md#pointcompression)

#### Methods

##### decode()

> `static` **decode**(`value`): [`Location`](README.md#location)[]

Decodes a collection of locations from a compressed string.

###### Parameters

• **value**: `string`

Compressed string to decode.

###### Returns

[`Location`](README.md#location)[]

An array of locations that have been decoded from the compressed string.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2280](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2280)

##### encode()

> `static` **encode**(`locations`): `string`

Compresses an array of locations into a string.

###### Parameters

• **locations**: [`Location`](README.md#location)[]

Collection of coordinates to compress.

###### Returns

`string`

A compressed string representing an array of locations.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2287](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2287)

***

### Polygon

A polygon is an area defined by a closed ring of locations. A simple polygon consists of an array of Location objects that form a boundary.
A complex polygon consists of several arrays of Locations, where the first array is the outline of the polygon, and the subsequent arrays are holes in the polygon.
The Polygon class derives from the IPrimitive interface.

#### Extended by

- [`ContourLine`](README.md#contourline)
- [`DataBinPolygon`](README.md#databinpolygon)

#### Implements

- [`IPrimitive`](README.md#iprimitive)

#### Constructors

##### new Polygon()

> **new Polygon**(`rings`, `options`?): [`Polygon`](README.md#polygon)

###### Parameters

• **rings**: [`Location`](README.md#location)[] \| [`Location`](README.md#location)[][]

A Location array for basic polygon with single outer perimeter,
or an array of Location arrays for advanced polygon (multi-polygon, polygon with holes, or combination of polygons).

• **options?**: [`IPolygonOptions`](README.md#ipolygonoptions)

Options used to customize polygon.

###### Returns

[`Polygon`](README.md#polygon)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2308](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2308)

#### Properties

##### metadata

> **metadata**: `any`

Information that is linked to the polygon.
Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`metadata`](README.md#metadata-15)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2300](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2300)

#### Methods

##### getCursor()

> **getCursor**(): `string`

Gets the css cursor value when polygon has events on it.

###### Returns

`string`

CSS cursor string when polygon has events on it.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`getCursor`](README.md#getcursor-6)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2314](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2314)

##### getFillColor()

> **getFillColor**(): `string` \| [`Color`](README.md#color)

Gets the fill color of the inside of the polygon. Will be string or Color object depending on the the what method was used in the pushpin options.

###### Returns

`string` \| [`Color`](README.md#color)

The fill color of the inside of the polygon.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2320](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2320)

##### getGeneralizable()

> **getGeneralizable**(): `boolean`

Returns whether the polygon is generalizable based on zoom level or not.

###### Returns

`boolean`

whether the polygon is generalizable based on zoom level or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2326](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2326)

##### getLocations()

> **getLocations**(): [`Location`](README.md#location)[]

Gets the first ring of the polygon (for V7 compatability).

###### Returns

[`Location`](README.md#location)[]

An array of Locations that is the first ring of the polygon; or an empty array if the polygon has no ring at all.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2332](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2332)

##### getRings()

> **getRings**(): [`Location`](README.md#location)[][]

Gets an array of location arrays, where each location array defines a ring of the polygon.

###### Returns

[`Location`](README.md#location)[][]

An array of location arrays, where each location array defines a ring of the polygon.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2338](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2338)

##### getStrokeColor()

> **getStrokeColor**(): `string` \| [`Color`](README.md#color)

Gets the color of the border stroke of the polygon. Will be string or Color object depending on the the what method was used in the pushpin options.

###### Returns

`string` \| [`Color`](README.md#color)

The color of the border stroke of the polygon.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2344](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2344)

##### getStrokeDashArray()

> **getStrokeDashArray**(): `string` \| `number`[]

Gets the stroke dash array of the polygon, in format of either array or string, whichever user provides.

###### Returns

`string` \| `number`[]

The stroke dash array of the polygon.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2350](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2350)

##### getStrokeThickness()

> **getStrokeThickness**(): `number`

Gets the thickness of the border stroke of the polygon.

###### Returns

`number`

The thickness of the border stroke of the polygon as a number.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2356](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2356)

##### getVisible()

> **getVisible**(): `boolean`

Gets whether the polygon is visible.

###### Returns

`boolean`

A boolean indicating whether the polygon is visible or not.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`getVisible`](README.md#getvisible-17)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2362](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2362)

##### setLocations()

> **setLocations**(`locations`): `void`

Sets locations (single ring) of the polygon. (for V7 compatability)

###### Parameters

• **locations**: [`Location`](README.md#location)[]

A Location[] that defines the only ring of the polygon

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2368](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2368)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the properties for the polygon.

###### Parameters

• **options**: [`IPolygonOptions`](README.md#ipolygonoptions)

The IPolygonOptions object containing the options to customize the polygon.

###### Returns

`void`

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`setOptions`](README.md#setoptions-19)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2374](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2374)

##### setRings()

> **setRings**(`rings`): `void`

Sets rings of the polygon.

###### Parameters

• **rings**: [`Location`](README.md#location)[] \| [`Location`](README.md#location)[][]

A Location[][] where each Location[] defines a ring of the polygon.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2380](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2380)

***

### Polyline

Polylines allow you to draw connected lines on a map. In many spatial database systems, this is also known as a LineString.
The Polyline class derives from the IPrimitive interface.

#### Implements

- [`IPrimitive`](README.md#iprimitive)

#### Constructors

##### new Polyline()

> **new Polyline**(`locations`, `options`?): [`Polyline`](README.md#polyline)

###### Parameters

• **locations**: [`Location`](README.md#location)[]

An array of locations that make up the path of the polyine.

• **options?**: [`IPolylineOptions`](README.md#ipolylineoptions)

Options used to customize polyline.

###### Returns

[`Polyline`](README.md#polyline)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2399](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2399)

#### Properties

##### metadata

> **metadata**: `any`

Information that is linked to the polyline.
Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`metadata`](README.md#metadata-15)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2392](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2392)

#### Methods

##### getCursor()

> **getCursor**(): `string`

Gets the css cursor value when polyline has events on it.

###### Returns

`string`

CSS cursor string when polyline has events on it.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`getCursor`](README.md#getcursor-6)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2405](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2405)

##### getGeneralizable()

> **getGeneralizable**(): `boolean`

Returns whether the polyline is generalizable based on zoom level or not.

###### Returns

`boolean`

whether the polyline is generalizable based on zoom level or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2411](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2411)

##### getLocations()

> **getLocations**(): [`Location`](README.md#location)[]

Gets the locations that make up the polyline.

###### Returns

[`Location`](README.md#location)[]

An array that defines the path of the polyline.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2417](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2417)

##### getStrokeColor()

> **getStrokeColor**(): `string` \| [`Color`](README.md#color)

Gets the color of the border stroke of the polyline. Will be string or Color object depending on the the what method was used in the polyline options.

###### Returns

`string` \| [`Color`](README.md#color)

The stroke color of the polyline.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2423](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2423)

##### getStrokeDashArray()

> **getStrokeDashArray**(): `string` \| `number`[]

Gets the stroke dash array of the polyline, in format of either array or string, whichever user provides.

###### Returns

`string` \| `number`[]

The stroke dash array of the polyline.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2429](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2429)

##### getStrokeThickness()

> **getStrokeThickness**(): `number`

Gets the thickness of the border stroke of the polyline.

###### Returns

`number`

The thickness of the border stroke of the polyline as a number.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2435](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2435)

##### getVisible()

> **getVisible**(): `boolean`

Gets whether the polyline is visible.

###### Returns

`boolean`

A boolean indicating whether the polyline is visible or not.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`getVisible`](README.md#getvisible-17)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2441](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2441)

##### setLocations()

> **setLocations**(`locations`): `void`

Sets locations of the polyline.

###### Parameters

• **locations**: [`Location`](README.md#location)[]

A Location[] that defines path of the polyline

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2447](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2447)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the properties for the polyline.

###### Parameters

• **options**: [`IPolylineOptions`](README.md#ipolylineoptions)

The IPolylineOptions object containing the options to customize the polyline.

###### Returns

`void`

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`setOptions`](README.md#setoptions-19)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2453](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2453)

***

### Pushpin

Pushpins, sometimes also referred to as markers or MapIcons on other mapping platforms, are one of the primary ways of marking a location on a map.
The Pushpin class derives from the IPrimitive interface.

#### Extended by

- [`ClusterPushpin`](README.md#clusterpushpin)

#### Implements

- [`IPrimitive`](README.md#iprimitive)

#### Constructors

##### new Pushpin()

> **new Pushpin**(`location`, `options`?): [`Pushpin`](README.md#pushpin)

###### Parameters

• **location**: [`Location`](README.md#location)

A Location object that specifies where to display the pushpin.

• **options?**: [`IPushpinOptions`](README.md#ipushpinoptions)

Options used when creating the Pushpin.

###### Returns

[`Pushpin`](README.md#pushpin)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2473](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2473)

#### Properties

##### metadata

> **metadata**: `any`

Information that is linked to the pushpin.
Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`metadata`](README.md#metadata-15)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2466](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2466)

#### Methods

##### getAnchor()

> **getAnchor**(): [`Point`](README.md#point)

Gets the point on the Pushpin icon which is anchored to the pushpin location.
An anchor of (0,0) is the top left corner of the icon.

###### Returns

[`Point`](README.md#point)

The point on the Pushpin icon which is anchored to the pushpin location.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2480](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2480)

##### getClickedStyleEnabled()

> **getClickedStyleEnabled**(): `boolean`

Gets whether the pushpin clicked style is enabled

###### Returns

`boolean`

Whether the pushpin clicked style is enabled.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2486](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2486)

##### getColor()

> **getColor**(): `string` \| [`Color`](README.md#color)

Gets the color option of the pushpin.

###### Returns

`string` \| [`Color`](README.md#color)

The color option of the pushpin.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2492](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2492)

##### getCursor()

> **getCursor**(): `string`

Gets the css cursor value when pushpin has events on it.

###### Returns

`string`

CSS cursor string when pushpin has events on it.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`getCursor`](README.md#getcursor-6)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2498](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2498)

##### getDraggable()

> **getDraggable**(): `boolean`

Gets a boolean indicating if the pushpin is draggable or not.

###### Returns

`boolean`

A boolean indicating if the pushpin is draggable or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2504](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2504)

##### getHoverStyleEnabled()

> **getHoverStyleEnabled**(): `boolean`

Gets whether the pushpin hover style is enabled

###### Returns

`boolean`

Whether the pushpin hover style is enabled.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2510](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2510)

##### getIcon()

> **getIcon**(): `string`

Gets the custom Pushpin source icon string which can be a url to an image or SVG, inline SVG string, or data URI.

###### Returns

`string`

the custom Pushpin icon source string, which can be a url to an image or SVG, inline SVG string, or data URI.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2516](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2516)

##### getLocation()

> **getLocation**(): [`Location`](README.md#location)

Returns the location of the pushpin.

###### Returns

[`Location`](README.md#location)

The location of the pushpin.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2522](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2522)

##### getRoundClickableArea()

> **getRoundClickableArea**(): `boolean`

Returns whether the clickable area of the pushpin is an ellipse.

###### Returns

`boolean`

A boolean indicating whether the clickable area of the pushpin is an ellipse.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2528](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2528)

##### getSubTitle()

> **getSubTitle**(): `string`

Gets the subtitle label of the Pushpin.

###### Returns

`string`

The subtitle label of the Pushpin.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2534](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2534)

##### getText()

> **getText**(): `string`

Gets the text within the Pushpin icon.

###### Returns

`string`

The text within the Pushpin icon.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2540](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2540)

##### getTextOffset()

> **getTextOffset**(): [`Point`](README.md#point)

Gets the amount the text is shifted from the Pushpin icon.

###### Returns

[`Point`](README.md#point)

the amount the text is shifted from the Pushpin icon.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2546](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2546)

##### getTitle()

> **getTitle**(): `string`

Gets the title label of the Pushpin.

###### Returns

`string`

the title label of the Pushpin.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2552](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2552)

##### getVisible()

> **getVisible**(): `boolean`

Gets whether the pushpin is visible.

###### Returns

`boolean`

A boolean indicating whether the pushpin is visible or not.

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`getVisible`](README.md#getvisible-17)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2558](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2558)

##### setLocation()

> **setLocation**(`location`): `void`

Sets the location of the Pushpin.

###### Parameters

• **location**: [`Location`](README.md#location)

The location of the Pushpin.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2564](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2564)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the properties for the pushpin.

###### Parameters

• **options**: [`IPushpinOptions`](README.md#ipushpinoptions)

The IPushpinOptions object containing the options to customize the pushpin.

###### Returns

`void`

###### Implementation of

[`IPrimitive`](README.md#iprimitive).[`setOptions`](README.md#setoptions-19)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2570](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2570)

***

### PyramidTileId

Used to represent the location of a map tile in the quadkey tile pyramid system used by the map. 
If using a tile source where the uriConstructor property is set to a callback function, that callback function will recieve
an instance of the PyramidTileId class.

#### Constructors

##### new PyramidTileId()

> **new PyramidTileId**(`x`, `y`, `zoom`, `width`?, `height`?): [`PyramidTileId`](README.md#pyramidtileid)

###### Parameters

• **x**: `number`

The integer x position of the tile within the tile layer at the specified zoom level.

• **y**: `number`

The integer y position of the tile within the tile layer at the specified zoom level.

• **zoom**: `number`

The zoom level of the tile.

• **width?**: `number`

The tile's width in pixels. Default value: 256

• **height?**: `number`

The tile's height in pixels. Default value: 256

###### Returns

[`PyramidTileId`](README.md#pyramidtileid)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2605](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2605)

#### Properties

##### pixelHeight

> **pixelHeight**: `number`

The height of the tile.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2580](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2580)

##### pixelWidth

> **pixelWidth**: `number`

The width of the tile.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2583](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2583)

##### quadKey

> **quadKey**: `string`

The quadkey ID of the tile.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2586](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2586)

##### x

> **x**: `number`

The x tile coordinate.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2589](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2589)

##### y

> **y**: `number`

The y tile coordinate.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2592](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2592)

##### zoom

> **zoom**: `number`

The zoom level of the tile.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2595](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2595)

#### Methods

##### areEqual()

> `static` **areEqual**(`tileId1`, `tileId2`): `boolean`

Compares two PyramidTileId objects and returns a boolean indicating if the two PyramidTileId are equal.

###### Parameters

• **tileId1**: [`PyramidTileId`](README.md#pyramidtileid)

The first PyramidTileId to compare to the second.

• **tileId2**: [`PyramidTileId`](README.md#pyramidtileid)

The second PyramidTileId to compare to the first.

###### Returns

`boolean`

A boolean indicating if the two PyramidTileId are equal.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2613](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2613)

##### fromQuadKey()

> `static` **fromQuadKey**(`quadkey`, `width`?, `height`?): [`PyramidTileId`](README.md#pyramidtileid)

Generates a PyramidTileId from a quadkey tile id string.

###### Parameters

• **quadkey**: `string`

The quadkey tile id string to convert into a PyramidTileId object.

• **width?**: `number`

The tile's width in pixels. Default value: 256

• **height?**: `number`

The tile's height in pixels. Default value: 256

###### Returns

[`PyramidTileId`](README.md#pyramidtileid)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2621](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2621)

***

### TestDataGenerator

Provides static functions for generating random test data.

#### Constructors

##### new TestDataGenerator()

> **new TestDataGenerator**(): [`TestDataGenerator`](README.md#testdatagenerator)

###### Returns

[`TestDataGenerator`](README.md#testdatagenerator)

#### Methods

##### getColor()

> `static` **getColor**(`withAlpha`?): `string`

Generates a random hex or rgba color string.

###### Parameters

• **withAlpha?**: `boolean`

A boolean indicating if the color should have an alpha value or not. if set to true, a rgba value will be returned with an alpha value of 0.5.

###### Returns

`string`

A css color string, hex or rgba.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2631](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2631)

##### getLocations()

> `static` **getLocations**(`num`?, `bounds`?): [`Location`](README.md#location) \| [`Location`](README.md#location)[]

Generates random Location objects.

###### Parameters

• **num?**: `number`

The number of locations to generate. If set to one a single Location will be returned. If greater than one and array will be returned.

• **bounds?**: [`LocationRect`](README.md#locationrect)

The bounding box in which all the locations should fall within.

###### Returns

[`Location`](README.md#location) \| [`Location`](README.md#location)[]

One or more random Locations.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2639](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2639)

##### getPolygons()

> `static` **getPolygons**(`num`?, `bounds`?, `size`?, `scaleFactor`?, `options`?, `addHole`?): [`Polygon`](README.md#polygon) \| [`Polygon`](README.md#polygon)[]

Generates random polygons.

###### Parameters

• **num?**: `number`

The number of polygons to generate. If set to one a single Polygon will be returned. If greater than one and array will be returned.

• **bounds?**: [`LocationRect`](README.md#locationrect)

The bounding box in which all the locations of the polygon should fall within.

• **size?**: `number`

The number of locations each polygon should have. Default: random between 3 and 10.

• **scaleFactor?**: `number`

A number that scales the size of the polygons based on the size of the bounding box. A value of 0.1 would generate polygons that are no larger than 10% of the width/height of the map. Default: 0.1

• **options?**: [`IPolygonOptions`](README.md#ipolygonoptions)

The options to use for rendering the polygons. Default is random.

• **addHole?**: `boolean`

A boolean indicating if the generated polygon should have a hole or not. Note that this will double the number of Location objects that are in the Polygon. Default: false

###### Returns

[`Polygon`](README.md#polygon) \| [`Polygon`](README.md#polygon)[]

One or more random polygons.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2671](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2671)

##### getPolylines()

> `static` **getPolylines**(`num`?, `bounds`?, `size`?, `scaleFactor`?, `options`?): [`Polyline`](README.md#polyline) \| [`Polyline`](README.md#polyline)[]

Generates random polylines.

###### Parameters

• **num?**: `number`

The number of polylines to generate. If set to one a single Polyline will be returned. If greater than one and array will be returned.

• **bounds?**: [`LocationRect`](README.md#locationrect)

The bounding box in which all the locations of the polylines should fall within.

• **size?**: `number`

The number of locations each polylines should have. Default: random between 3 and 10.

• **scaleFactor?**: `number`

A number that scales the size of the polylines based on size of the bounding box. A value of 0.1 would generate polylines that are no larger than 10% of the width/height of the map. Default: 0.1

• **options?**: [`IPolylineOptions`](README.md#ipolylineoptions)

The options to use for rendering the polylines. Default is random.

###### Returns

[`Polyline`](README.md#polyline) \| [`Polyline`](README.md#polyline)[]

One or more random Polylines.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2659](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2659)

##### getPushpins()

> `static` **getPushpins**(`num`?, `bounds`?, `options`?): [`Pushpin`](README.md#pushpin) \| [`Pushpin`](README.md#pushpin)[]

Generates random pushpins.

###### Parameters

• **num?**: `number`

The number of pushpins to generate. If set to one a single Pushpin will be returned. If greater than one and array will be returned.

• **bounds?**: [`LocationRect`](README.md#locationrect)

The bounding box in which all the pushpins should fall within.

• **options?**: [`IPushpinOptions`](README.md#ipushpinoptions)

The options to use for rendering the pushpins. Default is random.

###### Returns

[`Pushpin`](README.md#pushpin) \| [`Pushpin`](README.md#pushpin)[]

One or more random Pushpins.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2648](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2648)

***

### TileLayer

Represents a tile layer that can be overlaid on top of the map.

#### Implements

- [`ILayer`](README.md#ilayer)

#### Constructors

##### new TileLayer()

> **new TileLayer**(`options`): [`TileLayer`](README.md#tilelayer)

###### Parameters

• **options**: [`ITileLayerOptions`](README.md#itilelayeroptions)

The options to use to define the tile layer.

###### Returns

[`TileLayer`](README.md#tilelayer)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2683](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2683)

#### Properties

##### metadata

> **metadata**: `any`

Optional property to store any additional metadata for this layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2677](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2677)

#### Methods

##### getOpacity()

> **getOpacity**(): `number`

Gets the opacity of the tile layer, defined as a double between 0 (not visible) and 1.

###### Returns

`number`

The opacity of the tile layer, defined as a double between 0 (not visible) and 1.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2689](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2689)

##### getTileSource()

> **getTileSource**(): [`TileSource`](README.md#tilesource)

Gets the tile source of the tile layer.

###### Returns

[`TileSource`](README.md#tilesource)

The tile source of the tile layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2695](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2695)

##### getVisible()

> **getVisible**(): `boolean`

Gets a boolean that indicates if the tile layer is visible or not.

###### Returns

`boolean`

A boolean that indicates if the tile layer is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2701](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2701)

##### getZIndex()

> **getZIndex**(): `number`

Gets the zIndex of the tile layer.

###### Returns

`number`

The zIndex of the tile layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2707](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2707)

##### setOpacity()

> **setOpacity**(`opacity`): `void`

Sets the opacity of the tile layer. Value must be a number between 0 and 1.

###### Parameters

• **opacity**: `number`

The opacity of the tile layer. Value must be a number between 0 and 1.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2713](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2713)

##### setOptions()

> **setOptions**(`options`): `void`

Sets options for the tile layer.

###### Parameters

• **options**: [`ITileLayerOptions`](README.md#itilelayeroptions)

The options for the tile layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2719](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2719)

##### setVisible()

> **setVisible**(`show`): `void`

Sets the visibility of the tile layer.

###### Parameters

• **show**: `boolean`

A boolean indicating if the tile layer should be visible or not.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2725](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2725)

##### setZIndex()

> **setZIndex**(`idx`): `void`

Sets the zIndex of the tile layer.

###### Parameters

• **idx**: `number`

The zIndex of the tile layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2731](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2731)

***

### TileSource

Defines the data source for a tile layer.

#### Constructors

##### new TileSource()

> **new TileSource**(`options`): [`TileSource`](README.md#tilesource)

###### Parameters

• **options**: [`ITileSourceOptions`](README.md#itilesourceoptions)

The options to use to define the tile source.

###### Returns

[`TileSource`](README.md#tilesource)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2740](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2740)

#### Methods

##### getBounds()

> **getBounds**(): [`LocationRect`](README.md#locationrect)

Gets the specified bounding box of the of the tile source.

###### Returns

[`LocationRect`](README.md#locationrect)

The specified bounding box of the of the tile source.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2746](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2746)

##### getHeight()

> **getHeight**(): `number`

Gets the pixel height of each tile in the tile source.

###### Returns

`number`

The pixel height of each tile in the tile source.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2752](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2752)

##### getMaxZoom()

> **getMaxZoom**(): `number`

Gets the maximum zoom level specified for the tile source.

###### Returns

`number`

The maximum zoom level specified for the tile source.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2758](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2758)

##### getMinZoom()

> **getMinZoom**(): `number`

Gets the minimum zoom level specified for the tile source.

###### Returns

`number`

The minimum zoom level specified for the tile source.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2764](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2764)

##### getUriConstructor()

> **getUriConstructor**(): `string` \| (`tile`) => `string`

Gets a string that constructs tile URLs used to retrieve tiles for the tile layer.

###### Returns

`string` \| (`tile`) => `string`

A string that constructs tile URLs used to retrieve tiles for the tile layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2770](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2770)

##### getWidth()

> **getWidth**(): `number`

Gets the pixel width of each tile in the tile source.

###### Returns

`number`

The pixel width of each tile in the tile source.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:2776](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L2776)

## Interfaces

### DrawingManager

The DrawingManager class manages the ability to draw and edit multiple shapes on the map. Shapes managed by this class are rendered on a separate drawing layer.
User can use a mouse or a touch screen to draw on the map. When they are done, pressing the escape button or any button on the toolbar will exit the current drawing mode.
This class does not have a publicly accessible constructor and can only be accessed using the showDrawingManager of the DrawingTools class.

#### Methods

##### add()

> **add**(`data`, `index`?): `void`

Adds a shapes to the layer, at the specified index if specified.
•

###### Parameters

• **data**: [`IPrimitive`](README.md#iprimitive) \| [`IPrimitive`](README.md#iprimitive)[]

The shape(s) to be added to the layer.
•

• **index?**: `number`

The index at which to insert the shape into the layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:70](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L70)

##### clear()

> **clear**(): `void`

Resets the drawing manager and clears all shapes in the drawing layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:80](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L80)

##### dispose()

> **dispose**(): `void`

Disposes the drawing manager instance.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:75](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L75)

##### getDrawingMode()

> **getDrawingMode**(): [`DrawingMode`](namespaces/DrawingTools.md#drawingmode)

Gets the current drawing mode of the drawing manager.

###### Returns

[`DrawingMode`](namespaces/DrawingTools.md#drawingmode)

The current drawing mode of the drawing manager.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:86](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L86)

##### getPrimitives()

> **getPrimitives**(): [`IPrimitive`](README.md#iprimitive)[]

Gets an array of shapes that are in the layer. This can be used to iterate over the individual shapes.

###### Returns

[`IPrimitive`](README.md#iprimitive)[]

An array of shapes that are in the layer. This can be used to iterate over the individual shapes.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:92](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L92)

##### indexOf()

> **indexOf**(`primitive`, `fromIndex`?): `number`

Returns the index of the shape in the drawing layer.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive)

The shape to find the index of.

• **fromIndex?**: `number`

The index to start the search from.

###### Returns

`number`

The index of the shape in the drawing layer. Returns -1 if shape is not found.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:100](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L100)

##### remove()

> **remove**(`primitive`): [`IPrimitive`](README.md#iprimitive)

Removes a shape from the layer and returns it.

###### Parameters

• **primitive**: [`IPrimitive`](README.md#iprimitive)

The shape to remove from the layer.

###### Returns

[`IPrimitive`](README.md#iprimitive)

The shape that was removed from the layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:107](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L107)

##### removeAt()

> **removeAt**(`index`): [`IPrimitive`](README.md#iprimitive)

Removes a shape from the layer at the specified index.

###### Parameters

• **index**: `number`

The index of the shape to remove from the layer.

###### Returns

[`IPrimitive`](README.md#iprimitive)

The shape that was removed from the layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:114](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L114)

##### setDrawingMode()

> **setDrawingMode**(`mode`): `void`

Sets the drawing mode of the drawing manager.

###### Parameters

• **mode**: [`DrawingMode`](namespaces/DrawingTools.md#drawingmode)

The drawing mode to set the DrawingManager to.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:120](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L120)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the drawing tool options.

###### Parameters

• **options**: [`IDrawingManagerOptions`](README.md#idrawingmanageroptions)

The options to use with the drawing manager.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L126)

##### setPrimitives()

> **setPrimitives**(`primitives`): `void`

Replaces all shapes in the layer with the new array of shapes that have been provided.

###### Parameters

• **primitives**: [`IPrimitive`](README.md#iprimitive)[]

An array of shapes to add to the drawing layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:132](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L132)

***

### IAddress

Represents a structured address object.

#### Properties

##### addressLine

> **addressLine**: `string`

The street line of an address. The addressLine property is the most precise, official line for an address relative to the postal agency
servicing the area specified by the locality or postalCode properties.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:152](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L152)

##### adminDistrict

> **adminDistrict**: `string`

The subdivision name within the country or region for an address. This element is also commonly treated as the first order administrative
subdivision. An example is a US state, such as “Oregon”.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:158](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L158)

##### countryRegion

> **countryRegion**: `string`

The country or region name of the address.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:161](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L161)

##### countryRegionISO2

> **countryRegionISO2**: `string`

A string specifying the two-letter ISO country code.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:164](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L164)

##### district

> **district**: `string`

The second, third, or fourth order subdivision within a country, dependency, or region. An example is a US county, such as “King”.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:167](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L167)

##### formattedAddress

> **formattedAddress**: `string`

A nicely formatted address string for the result.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:170](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L170)

##### locality

> **locality**: `string`

The locality, such as the primary city, that corresponds to an address. An example is “Seattle”.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:173](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L173)

##### postalCode

> **postalCode**: `string`

The post code, postal code, or ZIP code of an address. An example is a US ZIP code, such as “98152”.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:176](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L176)

***

### IAnimatedFrameEventArgs

The event args for when a layer frame is being loaded in an AnimtedTileLayer. *

#### Properties

##### animatedTileLayer

> **animatedTileLayer**: [`AnimatedTileLayer`](README.md#animatedtilelayer)

The animated tile layer that the frame belongs to. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:182](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L182)

##### index

> **index**: `number`

The index of the frame being loaded. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:185](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L185)

***

### IAnimatedTileLayerOptions

An object that defines the options for an AnimatedTileLayer. *

#### Properties

##### autoPlay?

> `optional` **autoPlay**: `boolean`

A boolean that specifies whether the animation should auto-start when it is added to the map or not. Default: true *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:191](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L191)

##### frameRate?

> `optional` **frameRate**: `number`

The number of miliseconds between two layer frames. Default: 1000 *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:194](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L194)

##### loadingScreen?

> `optional` **loadingScreen**: [`CustomOverlay`](README.md#customoverlay)

A custom loading screen to show on the map when the map tiles are being fetched. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:197](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L197)

##### maxTotalLoadTime?

> `optional` **maxTotalLoadTime**: `number`

The max amount of total loading time of all tiles in a viewport in milliseconds. Default: 15000 *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:200](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L200)

##### mercator

> **mercator**: [`TileSource`](README.md#tilesource)[]

The array of tile layer sources to animate through. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:203](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L203)

##### visible?

> `optional` **visible**: `boolean`

A boolean specifying if the animated tile layer is visible or not. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:206](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L206)

***

### IAutosuggestOptions

Options used to customize the autosuggest functionality.

#### Properties

##### addressSuggestions?

> `optional` **addressSuggestions**: `boolean`

Specifies if street address suggestions should be returned. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:31](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L31)

##### autoDetectLocation?

> `optional` **autoDetectLocation**: `boolean`

Specifies if the user’s location should be auto detected using their IP address, if no location information is provided
in the userLocation property. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:37](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L37)

##### bounds?

> `optional` **bounds**: [`LocationRect`](README.md#locationrect)

A bounding box that is used to help influence the results such that locations that are in or near this bounding box
are given more weight than they would normally.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:43](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L43)

##### countryCode?

> `optional` **countryCode**: `string`

A string specifying the ISO 3166-1 alpha-2 country region code which is used to limit suggests to a single country.
https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:49](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L49)

##### map?

> `optional` **map**: [`Map`](README.md#map-2)

A reference to a map instance. If the useMapView property is set to true, the bounding box of the map view will be used
to influence the weight of suggestions.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:55](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L55)

##### maxResults?

> `optional` **maxResults**: `number`

The maximum number of results to return. Can be any value between 1 and 10. Default: 5

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:58](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L58)

##### placeSuggestions?

> `optional` **placeSuggestions**: `boolean`

Specifies if place suggestions (city, landmark, etc.) should be returned. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:61](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L61)

##### useMapView?

> `optional` **useMapView**: `boolean`

Indicates if the maps bounding box should be used to influence the suggested results. Ignored if the bounds property is
set. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:67](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L67)

##### userLocation?

> `optional` **userLocation**: [`Location`](README.md#location)

A coordinate indicating where the user is located. This will influence the results to be more relevant to the user.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:70](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L70)

***

### IBorderedMapElementStyle

The style options that can be appliction to bordered map elements.

#### Extends

- [`IMapElementStyle`](README.md#imapelementstyle)

#### Properties

##### borderOutlineColor?

> `optional` **borderOutlineColor**: `string`

Secondary/casing line hex color of the border of a filled polygon.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:69](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L69)

##### borderStrokeColor?

> `optional` **borderStrokeColor**: `string`

Primary line hex color of the border of a filled polygon.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:74](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L74)

##### borderVisible?

> `optional` **borderVisible**: `boolean`

Specifies if a border is visible or not.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:79](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L79)

##### fillColor?

> `optional` **fillColor**: `string`

Hex color used for filling polygons, the background of point icons, and for the center of lines if they have split.

###### Inherited from

[`IMapElementStyle`](README.md#imapelementstyle).[`fillColor`](README.md#fillcolor-2)

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:36](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L36)

##### labelColor?

> `optional` **labelColor**: `string`

The hex color of a map label.

###### Inherited from

[`IMapElementStyle`](README.md#imapelementstyle).[`labelColor`](README.md#labelcolor-1)

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:41](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L41)

##### labelOutlineColor?

> `optional` **labelOutlineColor**: `string`

The outline hex color of a map label.

###### Inherited from

[`IMapElementStyle`](README.md#imapelementstyle).[`labelOutlineColor`](README.md#labeloutlinecolor-1)

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:46](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L46)

##### labelVisible?

> `optional` **labelVisible**: `boolean`

Species if a map label type is visible or not.

###### Inherited from

[`IMapElementStyle`](README.md#imapelementstyle).[`labelVisible`](README.md#labelvisible-1)

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:51](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L51)

##### strokeColor?

> `optional` **strokeColor**: `string`

Hex color used for the outline around polygons, the outline around point icons, and the color of lines.

###### Inherited from

[`IMapElementStyle`](README.md#imapelementstyle).[`strokeColor`](README.md#strokecolor-2)

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:56](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L56)

##### visible?

> `optional` **visible**: `boolean`

Specifies if the map element is visible or not.

###### Inherited from

[`IMapElementStyle`](README.md#imapelementstyle).[`visible`](README.md#visible-10)

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:61](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L61)

***

### IClusterLayerOptions

The options used to customize how the ClusterLayer functions.

#### Properties

##### callback()?

> `optional` **callback**: () => `void`

A callback function that is fired after the clustering for a map view has completed. This is useful if you want to generate a list of locations based on what is in the current view.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:33](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L33)

##### clusterPlacementType?

> `optional` **clusterPlacementType**: [`ClusterPlacementType`](README.md#clusterplacementtype)

Defines how clusters are positioned on the map. Default: MeanAverage

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:48](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L48)

##### clusteredPinCallback()?

> `optional` **clusteredPinCallback**: (`pin`) => `void`

A callback function that allows you to process a clustered pushpin before it is added to a layer. This is useful if you want to add events or set style options on the clustered pushpin.

###### Parameters

• **pin**: [`ClusterPushpin`](README.md#clusterpushpin)

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:38](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L38)

##### clusteringEnabled?

> `optional` **clusteringEnabled**: `boolean`

Indicates if the layer should cluster the locations or not. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:43](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L43)

##### gridSize?

> `optional` **gridSize**: `number`

The width and height of the gird cells used for clustering in pixels. Default: 45

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:53](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L53)

##### layerOffset?

> `optional` **layerOffset**: [`Point`](README.md#point)

Offsets the placement of clustered pushpins by a set number of pixels. This option is only available when the placement type is set to GridCenter.
This is useful if you have multiple cluster layers on the map and you want to offset the clustered pushpins between the layers so that they are visible,
otherwise the clusters from the different layers would overlap completely.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:60](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L60)

##### visible?

> `optional` **visible**: `boolean`

A boolean indicating if the layer is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:65](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L65)

##### zIndex?

> `optional` **zIndex**: `number`

The z-index of the layer.

###### Defined in

[src/types/MicrosoftMaps/Modules/Clustering.d.ts:70](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Clustering.d.ts#L70)

***

### IConfigurableMapModule

Defines which module should be loaded, and the data sets that should be loaded with it. Currently supports the "Microsoft.Maps.GeoXml" and "Microsoft.Maps.GeoJson" modules.

#### Properties

##### moduleName

> **moduleName**: `string`

Name of the module to load. Supported values: "Microsoft.Maps.GeoXml", "Microsoft.Maps.GeoJson".

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:65](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L65)

##### moduleOptions

> **moduleOptions**: [`PostModuleAction`](README.md#postmoduleaction) \| [`PostModuleAction`](README.md#postmoduleaction)[]

A set of steps to execute after a module is loaded.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:68](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L68)

***

### IConfigurableMapOptions

Configurable map definitionm includes initial options to load the map as well as a list of modules to load afterwards.

#### Properties

##### mapOptions

> **mapOptions**: [`IMapOptions`](README.md#imapoptions)

Initial map options.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L76)

##### modules

> **modules**: [`IConfigurableMapModule`](README.md#iconfigurablemapmodule)[]

List of configuration modules to load.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:79](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L79)

***

### IContourLayerOptions

The contour layer options

#### Properties

##### colorCallback()?

> `optional` **colorCallback**: (`contourValue`) => `string` \| [`Color`](README.md#color)

A callback function which defines the color of the contour line fill.

###### Parameters

• **contourValue**: `string` \| `number`

###### Returns

`string` \| [`Color`](README.md#color)

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:40](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L40)

##### polygonOptions?

> `optional` **polygonOptions**: [`IPolygonOptions`](README.md#ipolygonoptions)

The polygon options that apply to all contour lines of this layer

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:43](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L43)

##### visible?

> `optional` **visible**: `boolean`

Whether the layer is visible

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:37](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L37)

##### zIndex?

> `optional` **zIndex**: `number`

The z-index of this layer

###### Defined in

[src/types/MicrosoftMaps/Modules/Contour.d.ts:34](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Contour.d.ts#L34)

***

### ICustomMapStyle

Defines a custom map style.

#### Properties

##### elements?

> `optional` **elements**: [`IMapElements`](README.md#imapelements)

A list of map elements to be styled.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:284](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L284)

##### settings?

> `optional` **settings**: [`ISettingsStyle`](README.md#isettingsstyle)

Global Settings.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:287](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L287)

##### version

> **version**: `string`

The version of the style syntax used.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:290](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L290)

***

### ICustomOverlayOptions

Represents the options that can be used when initializing a custom overlay. *

#### Extended by

- [`IGroundOverlayOptions`](README.md#igroundoverlayoptions)

#### Properties

##### beneathLabels?

> `optional` **beneathLabels**: `boolean`

Specifies if the custom overlay should be rendered above or below the label layer of the map. When above,
elements in the overlay can be clickable. Default: True

This can only be set when creating the overlay.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:217](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L217)

***

### IDataBinInfo

The result of a calculated data bin.

#### Properties

##### containedPushpins

> **containedPushpins**: [`Pushpin`](README.md#pushpin)[]

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:111](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L111)

##### metrics

> **metrics**: [`IDataBinMetrics`](README.md#idatabinmetrics)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:114](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L114)

***

### IDataBinMetrics

A set of values calculated from the pushpins in a data bin.

#### Properties

##### average?

> `optional` **average**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:91](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L91)

##### count?

> `optional` **count**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:94](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L94)

##### countNotBlank?

> `optional` **countNotBlank**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:97](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L97)

##### countNumbers?

> `optional` **countNumbers**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:100](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L100)

##### sum?

> `optional` **sum**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:103](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L103)

***

### IDataBinningOptions

A set options the define how a data binning layer is rendered.

#### Properties

##### aggregationProperty?

> `optional` **aggregationProperty**: `string`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:55](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L55)

##### colorCallback()?

> `optional` **colorCallback**: (`binInfo`, `min`, `max`) => `string` \| [`Color`](README.md#color)

###### Parameters

• **binInfo**: [`IDataBinInfo`](README.md#idatabininfo)

• **min**: [`IDataBinMetrics`](README.md#idatabinmetrics)

• **max**: [`IDataBinMetrics`](README.md#idatabinmetrics)

###### Returns

`string` \| [`Color`](README.md#color)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:61](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L61)

##### dataBinType?

> `optional` **dataBinType**: [`DataBinType`](README.md#databintype)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:64](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L64)

##### distanceUnits?

> `optional` **distanceUnits**: [`DistanceUnits`](namespaces/SpatialMath/README.md#distanceunits)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:67](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L67)

##### polygonOptions?

> `optional` **polygonOptions**: [`IPolygonOptions`](README.md#ipolygonoptions)

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:70](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L70)

##### radius?

> `optional` **radius**: `number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L76)

##### scaleCallback()?

> `optional` **scaleCallback**: (`binInfo`, `min`, `max`) => `number`

###### Parameters

• **binInfo**: [`IDataBinInfo`](README.md#idatabininfo)

• **min**: [`IDataBinMetrics`](README.md#idatabinmetrics)

• **max**: [`IDataBinMetrics`](README.md#idatabinmetrics)

###### Returns

`number`

###### Defined in

[src/types/MicrosoftMaps/Modules/DataBinning.d.ts:82](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DataBinning.d.ts#L82)

***

### IDataLayer

Base data layer interface.

#### Extends

- [`ILayer`](README.md#ilayer)

#### Methods

##### clear()

> **clear**(): `void`

Clears all data in the layer.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:223](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L223)

***

### IDictionary\<T\>

A standard dictionary object (associative array).

#### Type Parameters

• **T**

#### Indexable

 \[`K`: `string`\]: `T`

***

### IDrawingManagerOptions

An object that contains options to change the settings of the drawing manager.

#### Extends

- [`IDrawingToolOptions`](README.md#idrawingtooloptions)

#### Properties

##### drawingBarActions?

> `optional` **drawingBarActions**: [`DrawingBarAction`](namespaces/DrawingTools.md#drawingbaraction)

Set of buttons to show in the drawing bar.

###### Overrides

[`IDrawingToolOptions`](README.md#idrawingtooloptions).[`drawingBarActions`](README.md#drawingbaractions-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:50](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L50)

##### fillColor?

> `optional` **fillColor**: `string` \| [`Color`](README.md#color)

The fill color used for pushpins and polygons.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:53](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L53)

##### strokeColor?

> `optional` **strokeColor**: `string` \| [`Color`](README.md#color)

The stroke color used for polylines and polygons.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:56](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L56)

***

### IDrawingModeChangedData

An object that contains the event arguments for when the drawing mode changes in the drawing tools. *

#### Properties

##### mode

> **mode**: [`DrawingMode`](namespaces/DrawingTools.md#drawingmode)

The new drawing mode. *

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:36](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L36)

##### shape

> **shape**: [`IPrimitive`](README.md#iprimitive)

The shape being modified by the drawing tools. *

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:33](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L33)

***

### IDrawingToolOptions

Collection of options for the various DrawingTool methods

#### Extended by

- [`IDrawingManagerOptions`](README.md#idrawingmanageroptions)

#### Properties

##### drawingBarActions?

> `optional` **drawingBarActions**: [`DrawingBarAction`](namespaces/DrawingTools.md#drawingbaraction)

Set of buttons to show in the drawing bar

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:44](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L44)

***

### IEntityCollectionChangedEventArgs

Event args included in entity collection events.

#### Properties

##### collection

> **collection**: [`EntityCollection`](README.md#entitycollection)

The entity collection the event was triggered from.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:234](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L234)

##### data

> **data**: [`IPrimitive`](README.md#iprimitive)

The IPrimitive object that the event occurred for.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:237](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L237)

***

### IGeoJsonObject

GeoJSON object definition

#### Properties

##### coordinates?

> `optional` **coordinates**: `number`[] \| `number`[][] \| `number`[][][] \| `number`[][][][]

Geometric coordinates of the object

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:47](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L47)

##### features?

> `optional` **features**: [`IGeoJsonObject`](README.md#igeojsonobject)[]

Set of features (only applicable if the type is 'featurecollection')

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:53](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L53)

##### geometries?

> `optional` **geometries**: [`IGeoJsonObject`](README.md#igeojsonobject)[]

Set of geometries (only applicable if the type is 'geometrycollection')

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:56](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L56)

##### geometry?

> `optional` **geometry**: [`IGeoJsonObject`](README.md#igeojsonobject)

Geometry (only applicable if the type is 'feature')

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:59](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L59)

##### id?

> `optional` **id**: `any`

identifier of a feature (only applicable if the type is 'feature')

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:62](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L62)

##### properties?

> `optional` **properties**: `any`

Additional properties of the object as a key,value pair

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:50](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L50)

##### type

> **type**: `string`

Type of the object 
could be one of the following: 
Point
LineString
Polygon
MultiPoint
MultiLineString
MultiPolygon
GeometryCollection
Feature
FeatureCollection

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoJSON.d.ts:44](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoJSON.d.ts#L44)

***

### IGeoJsonReadOptions

GeoJson options to use when loading a GeoJson file.

#### Properties

##### jsonpQueryParam?

> `optional` **jsonpQueryParam**: `string`

If the GeoJSON file is hosted on a different domain, and CORS is not enabled, but does support JSONP,
you will need to specify the name of JSONP URL parameter that can be used to download the file across different domains.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:41](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L41)

##### layerName?

> `optional` **layerName**: `string`

An optional name to identify the layer by.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:44](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L44)

##### style?

> `optional` **style**: [`IStylesOptions`](README.md#istylesoptions)

The styles to apply to shapes that don't have a defined style in the XML.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:47](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L47)

***

### IGeoXmlDataSet

A GeoXML result data set that is returned when reading a spatial XML file.

#### Properties

##### layers?

> `optional` **layers**: ([`Layer`](README.md#layer) \| [`GroundOverlay`](README.md#groundoverlay))[]

An array of layers that are in the XML document.
In shapes in KML that are in a child documents and folders of the main document or folder are grouped together in a data Layer.
KML also supports GroundOverlay.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:71](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L71)

##### screenOverlays?

> `optional` **screenOverlays**: [`KmlScreenOverlay`](README.md#kmlscreenoverlay)[]

An array of screen overlays that have been parsed from a KML file.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L76)

##### shapes?

> `optional` **shapes**: [`IPrimitive`](README.md#iprimitive)[]

An array of shapes that are in the XML document.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:64](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L64)

##### stats?

> `optional` **stats**: [`IGeoXmlStats`](README.md#igeoxmlstats)

Statistics about the content and processing time of a XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:86](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L86)

##### summary?

> `optional` **summary**: [`IGeoXmlSummaryMetadata`](README.md#igeoxmlsummarymetadata)

Summary metadata provided at the document level of the XML feed data set.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:81](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L81)

***

### IGeoXmlLayerOptions

Options used to customize how a GeoXmlLayer renders.

#### Extends

- [`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions)

#### Properties

##### allowKmlScreenOverlays?

> `optional` **allowKmlScreenOverlays**: `boolean`

Specifies if KML ScreenOverlays should be read or ignored. Default: true

###### Inherited from

[`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions).[`allowKmlScreenOverlays`](README.md#allowkmlscreenoverlays-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:114](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L114)

##### autoUpdateMapView?

> `optional` **autoUpdateMapView**: `boolean`

A boolean indicating if the map should automatically upate the view when a data set is loaded. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:94](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L94)

##### captureGpxPathWaypoints?

> `optional` **captureGpxPathWaypoints**: `boolean`

Specifies wether the individual waypoint data of a GPX Route or Track should be captured.
If set to true, the shape will have a metadata.waypoints property that is an array of
pushpins that contains the details of each waypoint along the track. Default: false

###### Inherited from

[`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions).[`captureGpxPathWaypoints`](README.md#capturegpxpathwaypoints-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L126)

##### defaultStyles?

> `optional` **defaultStyles**: [`IStylesOptions`](README.md#istylesoptions)

The default styles to apply to shapes that don't have a defined style in the XML.

###### Inherited from

[`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions).[`defaultStyles`](README.md#defaultstyles-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:129](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L129)

##### error()?

> `optional` **error**: (`msg`) => `void`

A callback function that is triggered when an error occurs when reading an XML document.

###### Parameters

• **msg**: `string`

###### Returns

`void`

###### Inherited from

[`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions).[`error`](README.md#error-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:119](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L119)

##### ignoreVisibility?

> `optional` **ignoreVisibility**: `boolean`

Specifies if shapes visible tags should be used to set the visible property of it's equivalent Bing Maps shape. Default: true

###### Inherited from

[`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions).[`ignoreVisibility`](README.md#ignorevisibility-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:132](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L132)

##### infoboxOptions?

> `optional` **infoboxOptions**: [`IInfoboxOptions`](README.md#iinfoboxoptions)

Options used to customize how the default infobox renders.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:97](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L97)

##### layerName?

> `optional` **layerName**: `string`

An optional name to identify the layer by.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:106](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L106)

##### maxNetworkLinkDepth?

> `optional` **maxNetworkLinkDepth**: `number`

The maximium depth of network links in a KML file. Default: 3
Example: when set to 3; file1 links to file2 which links to file3 but won't open links in file3.

###### Inherited from

[`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions).[`maxNetworkLinkDepth`](README.md#maxnetworklinkdepth-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L143)

##### maxNetworkLinks?

> `optional` **maxNetworkLinks**: `number`

The maximium number of network links that a single KML file can have. Default: 10.

###### Inherited from

[`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions).[`maxNetworkLinks`](README.md#maxnetworklinks-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:137](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L137)

##### setPushpinTitles?

> `optional` **setPushpinTitles**: `boolean`

Indicates if the pushpin title should be displayed on the map if a valid title or name value exits in the shapes metadata. Default: true

###### Inherited from

[`IGeoXmlReadOptions`](README.md#igeoxmlreadoptions).[`setPushpinTitles`](README.md#setpushpintitles-1)

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:146](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L146)

##### suppressInfoboxes?

> `optional` **suppressInfoboxes**: `boolean`

A boolean indicating if infoboxes should automatically appear when shapes clicked. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:100](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L100)

##### visible?

> `optional` **visible**: `boolean`

A boolean indicating if the layer is visible or not. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:103](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L103)

***

### IGeoXmlReadOptions

Options that customize how XML files are read and parsed.

#### Extended by

- [`IGeoXmlLayerOptions`](README.md#igeoxmllayeroptions)

#### Properties

##### allowKmlScreenOverlays?

> `optional` **allowKmlScreenOverlays**: `boolean`

Specifies if KML ScreenOverlays should be read or ignored. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:114](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L114)

##### captureGpxPathWaypoints?

> `optional` **captureGpxPathWaypoints**: `boolean`

Specifies wether the individual waypoint data of a GPX Route or Track should be captured.
If set to true, the shape will have a metadata.waypoints property that is an array of
pushpins that contains the details of each waypoint along the track. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:126](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L126)

##### defaultStyles?

> `optional` **defaultStyles**: [`IStylesOptions`](README.md#istylesoptions)

The default styles to apply to shapes that don't have a defined style in the XML.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:129](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L129)

##### error()?

> `optional` **error**: (`msg`) => `void`

A callback function that is triggered when an error occurs when reading an XML document.

###### Parameters

• **msg**: `string`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:119](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L119)

##### ignoreVisibility?

> `optional` **ignoreVisibility**: `boolean`

Specifies if shapes visible tags should be used to set the visible property of it's equivalent Bing Maps shape. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:132](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L132)

##### maxNetworkLinkDepth?

> `optional` **maxNetworkLinkDepth**: `number`

The maximium depth of network links in a KML file. Default: 3
Example: when set to 3; file1 links to file2 which links to file3 but won't open links in file3.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L143)

##### maxNetworkLinks?

> `optional` **maxNetworkLinks**: `number`

The maximium number of network links that a single KML file can have. Default: 10.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:137](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L137)

##### setPushpinTitles?

> `optional` **setPushpinTitles**: `boolean`

Indicates if the pushpin title should be displayed on the map if a valid title or name value exits in the shapes metadata. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:146](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L146)

***

### IGeoXmlStats

Statistics about the content and processing time of a XML feed.

#### Properties

##### fileSize

> **fileSize**: `number`

The number of characters in the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:175](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L175)

##### numGroundOverlays

> **numGroundOverlays**: `number`

Number of Ground Overlays in the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:166](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L166)

##### numLocations

> **numLocations**: `number`

Number of Microsoft.Maps.Location objects in the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:163](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L163)

##### numNetworkLinks

> **numNetworkLinks**: `number`

The number of network links in the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:172](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L172)

##### numPolygons

> **numPolygons**: `number`

Number of Microsoft.Maps.Polygons objects in the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:160](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L160)

##### numPolylines

> **numPolylines**: `number`

Number of Microsoft.Maps.Polylines objects in the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:157](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L157)

##### numPushpins

> **numPushpins**: `number`

Number of Microsoft.Maps.Pushpins objects in the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:154](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L154)

##### numScreenOverlays

> **numScreenOverlays**: `number`

Number of Screen Overlays in the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:169](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L169)

##### processingTime

> **processingTime**: `number`

The amount of time in ms it took to process the XML feed.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:178](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L178)

***

### IGeoXmlSummaryMetadata

Summary metadata provided at the document level of the XML feed data set.

#### Properties

##### bounds?

> `optional` **bounds**: [`LocationRect`](README.md#locationrect)

The bounds of all the shapes and layers in the XML document.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:192](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L192)

##### description?

> `optional` **description**: `string`

The description of the content of the XML document.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:189](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L189)

##### metadata?

> `optional` **metadata**: [`IDictionary`](README.md#idictionaryt)\<`any`\>

Any additional metadata that the XML document may have. i.e. atom:author

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:195](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L195)

##### title?

> `optional` **title**: `string`

The title or name of the content of the XML document.

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:186](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L186)

***

### IGeoXmlWriteOptions

Options that are used to customize how the GeoXml writes XML.

#### Properties

##### indentChars?

> `optional` **indentChars**: `string`

The characters to use to create an indent in the XML data. Default: \t

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:204](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L204)

##### newLineChars?

> `optional` **newLineChars**: `string`

The characters to use to create a new line in the XML data. Default: \r\n

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:207](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L207)

##### prettyPrint?

> `optional` **prettyPrint**: `boolean`

A boolean indicating if the generated XML should be use new lines and indents to make the generated nicely formatted. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:210](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L210)

##### roundLocations?

> `optional` **roundLocations**: `boolean`

A boolean indicating if Location and LocationRect values should be rounded off to 6 decimals. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:213](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L213)

##### validate?

> `optional` **validate**: `boolean`

A boolean indicating if the shapes should be made valid before writing. If set to true, will use the
Geometry.makeValid function of the SpatialMath module. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:219](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L219)

##### xmlFormat?

> `optional` **xmlFormat**: [`GeoXmlFormat`](README.md#geoxmlformat)

The XML format to write the shapes to. Default: Kml

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:222](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L222)

***

### IGroundOverlayOptions

The options that specify how to render a ground overlay on the map.

#### Extends

- [`ICustomOverlayOptions`](README.md#icustomoverlayoptions)

#### Properties

##### backgroundColor?

> `optional` **backgroundColor**: `string` \| [`Color`](README.md#color)

A background color that fills the bounding box area beneath the ground overlay.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:245](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L245)

##### beneathLabels?

> `optional` **beneathLabels**: `boolean`

Specifies if the custom overlay should be rendered above or below the label layer of the map. When above,
elements in the overlay can be clickable. Default: True

This can only be set when creating the overlay.

###### Inherited from

[`ICustomOverlayOptions`](README.md#icustomoverlayoptions).[`beneathLabels`](README.md#beneathlabels)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:217](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L217)

##### bounds?

> `optional` **bounds**: [`LocationRect`](README.md#locationrect)

The bounding box to anchor the ground overlay to. This is required when creating a ground overlay.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:248](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L248)

##### imageUrl?

> `optional` **imageUrl**: `string`

The URL to the image to anchor to the map as a ground overlay. This is required when creating a ground overlay.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:251](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L251)

##### opacity?

> `optional` **opacity**: `number`

The opacity of the ground overlay image.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:254](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L254)

##### rotation?

> `optional` **rotation**: `number`

An angle in degrees to rotate the overlay in a counter-clockwise direction where 0 = north, 90 = west, 180 = south, 270 = east

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:257](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L257)

##### visible?

> `optional` **visible**: `boolean`

A boolean value indicating if the ground overlay is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:260](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L260)

***

### IHandlerId

An object the identifies an event that has been attached to an object.

#### Methods

##### dispose()

> **dispose**(): `any`

Disposes the event

###### Returns

`any`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:266](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L266)

***

### IHeatMapLayerOptions

Options for customizing how the heat map is rendered.

#### Properties

##### colorGradient?

> `optional` **colorGradient**: [`IDictionary`](README.md#idictionaryt)\<`string`\>

The temperature gradient that is used to colorize the map. Default gradient:
   {
       '0.00': 'rgb(255,0,255)', // Magenta
       '0.25': 'rgb(0,0,255)', // Blue
       '0.50': 'rgb(0,255,0)', // Green
       '0.75': 'rgb(255,255,0)', // Yellow
       '1.00': 'rgb(255,0,0)' // Red
   }

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:40](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L40)

##### intensity?

> `optional` **intensity**: `number`

The intensity of each heat point. This is a decimal value between 0 and 1. This is used to specify how "hot" a single data point should be. Default: 0.5

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:45](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L45)

##### opacity?

> `optional` **opacity**: `number`

The opacity of the HeatMapLayer canvas. Value should be a decimal between 0 and 1. Default: 1

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:50](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L50)

##### radius?

> `optional` **radius**: `number`

The radius to draw each data point on the map. Default: 10

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:55](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L55)

##### unit?

> `optional` **unit**: `"meters"` \| `"pixel"`

The distance units of the radius. Possible values are:

• 'pixels' (defualt)
• 'meters'

When set to pixels the size of each data point will always be the same radius, regardless of zoom level. When set to meters, the size of the data points
will scale based on zoom level so as to ensure that the radius is spatially accurate.

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:66](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L66)

##### visible?

> `optional` **visible**: `boolean`

A boolean indicating if the heat map layer is visible or not. *

###### Defined in

[src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts:69](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/HeatMapLayer.d.ts#L69)

***

### ~~IInfoboxActions~~

#### Deprecated

Use HTML buttons and links in description instead.

#### Properties

##### ~~eventHandler()~~

> **eventHandler**: (`eventArg`?) => `void`

The function to call when the label is clicked.

###### Parameters

• **eventArg?**: `MouseEvent`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:355](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L355)

##### ~~label~~

> **label**: `string`

The text to display for the action.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:352](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L352)

***

### IInfoboxEventArgs

An object that contains information about an infobox event. *

#### Properties

##### eventName

> **eventName**: `string`

The event that occurred. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:361](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L361)

##### originalEvent?

> `optional` **originalEvent**: `MouseEvent`

Original mouse event from the browser.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:376](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L376)

##### pageX

> **pageX**: `number`

The x-value of the pixel coordinate on the page of the mouse cursor. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:364](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L364)

##### pageY

> **pageY**: `number`

The y-value of the pixel coordinate on the page of the mouse cursor. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:367](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L367)

##### target

> **target**: [`Infobox`](README.md#infobox)

The infobox object that fired the event. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:370](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L370)

##### targetType

> **targetType**: `string`

The type of the object that fired the event.This will always be 'infobox'. *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:373](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L373)

***

### IInfoboxOptions

The options that can be used to customize an infobox.

#### Properties

##### ~~actions?~~

> `optional` **actions**: [`IInfoboxActions`](README.md#iinfoboxactions)[]

###### Deprecated

Use HTML buttons and links in description instead.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:290](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L290)

##### closeDelayTime?

> `optional` **closeDelayTime**: `number`

The number of milliseconds to wait before closing an infobox when the visible option is changed from true to false. Default: 0

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:296](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L296)

##### description?

> `optional` **description**: `string`

The string displayed inside the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:293](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L293)

##### htmlContent?

> `optional` **htmlContent**: `string`

TThe HTML that represents the infobox. Note that some infobox options are ignored if custom HTML is set
(title, description, maxHeight, maxWidth, actions, showCloseButton, showPoint).
Also, if custom HTML is used to represent the infobox, the infobox is anchored at the top-left corner.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:303](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L303)

##### location?

> `optional` **location**: [`Location`](README.md#location)

The location on the map where the infobox’s anchor is attached.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:306](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L306)

##### maxHeight?

> `optional` **maxHeight**: `number`

The maximium size that the infobox height can expand to based on it’s content. Default: 126 *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:309](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L309)

##### maxWidth?

> `optional` **maxWidth**: `number`

The maximium size that the infobox width can expand to based on it’s content. Default: 256 *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:312](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L312)

##### offset?

> `optional` **offset**: [`Point`](README.md#point)

The amount the infobox pointer is shifted from the location of the infobox, or if showPointer is false, then it is the amount the info box bottom
left edge is shifted from the location of the infobox. If custom HTML is set, it is the amount the top-left corner of the infobox is shifted from
its location. The default offset value is (0,0), which means there is no offset.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:319](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L319)

##### showCloseButton?

> `optional` **showCloseButton**: `boolean`

A boolean indicating whether to show the close dialog button on the infobox. The default value is true. By default, the close button is displayed
as an X in the top right corner of the infobox. This property is ignored if custom HTML is used to represent the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:325](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L325)

##### showPointer?

> `optional` **showPointer**: `boolean`

A boolean indicating whether to display the infobox with a pointer. The default value is true. In this case the infobox is anchored at the bottom
point of the pointer. If this property is set to false, the infobox is anchored at the bottom left corner. This property is ignored if custom HTML
is used to represent the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:332](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L332)

##### title?

> `optional` **title**: `string`

The title of the infobox.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:335](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L335)

##### visible?

> `optional` **visible**: `boolean`

A boolean indicating whether to show or hide the infobox. The default value is true. A value of false indicates that the infobox is hidden,
although it is still an entity on the map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:341](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L341)

##### zIndex?

> `optional` **zIndex**: `number`

The z-index of the infobox with respect to other items on the map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:344](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L344)

***

### IKmlScreenOverlayOptions

The options for customizing screen overlays.

#### Properties

##### belowNavigationBar?

> `optional` **belowNavigationBar**: `boolean`

A boolean indicating if the screen overlay can be displayed above or beow the navigaiton bar. Default: false

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:230](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L230)

##### visible?

> `optional` **visible**: `boolean`

The visibility of the screen overlay. Default: true

###### Defined in

[src/types/MicrosoftMaps/Modules/GeoXml.d.ts:233](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/GeoXml.d.ts#L233)

***

### ILayer

Base layer interface.

#### Extended by

- [`IDataLayer`](README.md#idatalayer)

***

### ~~ILayerMouseEventArgs~~

#### Deprecated

use IMouseEventArgs
A LayerMouseEventArgs object is returned by many the mouse event handlers attached to a Layer.

#### Extended by

- [`IMouseEventArgs`](README.md#imouseeventargs)

#### Properties

##### ~~primitive~~

> **primitive**: [`IPrimitive`](README.md#iprimitive)

###### Deprecated

use target
The IPrimitive shape (pushpin, polyline, polygon) that the event occurred on.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:282](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L282)

***

### IMapElementStyle

The styles options that can be applied to map elements.

#### Extended by

- [`IBorderedMapElementStyle`](README.md#iborderedmapelementstyle)

#### Properties

##### fillColor?

> `optional` **fillColor**: `string`

Hex color used for filling polygons, the background of point icons, and for the center of lines if they have split.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:36](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L36)

##### labelColor?

> `optional` **labelColor**: `string`

The hex color of a map label.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:41](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L41)

##### labelOutlineColor?

> `optional` **labelOutlineColor**: `string`

The outline hex color of a map label.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:46](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L46)

##### labelVisible?

> `optional` **labelVisible**: `boolean`

Species if a map label type is visible or not.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:51](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L51)

##### strokeColor?

> `optional` **strokeColor**: `string`

Hex color used for the outline around polygons, the outline around point icons, and the color of lines.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:56](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L56)

##### visible?

> `optional` **visible**: `boolean`

Specifies if the map element is visible or not.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:61](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L61)

***

### IMapElements

Map Elements which can be styled.

#### Properties

##### adminDistrict?

> `optional` **adminDistrict**: [`IBorderedMapElementStyle`](README.md#iborderedmapelementstyle)

Admin1, state, province, etc.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:95](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L95)

##### adminDistrictCapital?

> `optional` **adminDistrictCapital**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing the capital of a state/province.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:98](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L98)

##### airport?

> `optional` **airport**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of land encompassing an airport.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:101](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L101)

##### area?

> `optional` **area**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of land use, not to be confused with Structure

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:104](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L104)

##### arterialRoad?

> `optional` **arterialRoad**: [`IMapElementStyle`](README.md#imapelementstyle)

An arterial road is a high-capacity urban road. Its primary function is to deliver traffic from collector roads to freeways or expressways, and between urban centers efficiently.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:107](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L107)

##### building?

> `optional` **building**: [`IMapElementStyle`](README.md#imapelementstyle)

A structure such as a house, store, factory.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:110](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L110)

##### business?

> `optional` **business**: [`IMapElementStyle`](README.md#imapelementstyle)

Restaurant, hospital, school, etc.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:113](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L113)

##### capital?

> `optional` **capital**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing the capital populated place.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:116](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L116)

##### cemetery?

> `optional` **cemetery**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of a cemetery

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:119](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L119)

##### continent?

> `optional` **continent**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of a whole continent

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:122](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L122)

##### controlledAccessHighway?

> `optional` **controlledAccessHighway**: [`IMapElementStyle`](README.md#imapelementstyle)

A controlled-access highway is a type of road which has been designed for high-speed vehicular traffic, with all traffic flow and ingress/egress regulated. Also known as a highway, freeway, motorway, expressway, interstate, parkway.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:125](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L125)

##### countryRegion?

> `optional` **countryRegion**: [`IBorderedMapElementStyle`](README.md#iborderedmapelementstyle)

A country or independent sovereign state.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:128](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L128)

##### countryRegionCapital?

> `optional` **countryRegionCapital**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing the capital of a country/region.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:131](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L131)

##### district?

> `optional` **district**: [`IBorderedMapElementStyle`](README.md#iborderedmapelementstyle)

Admin2, county, etc.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:134](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L134)

##### education?

> `optional` **education**: [`IMapElementStyle`](README.md#imapelementstyle)

An area of land used for educational purposes such as a school campus.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:137](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L137)

##### educationBuilding?

> `optional` **educationBuilding**: [`IMapElementStyle`](README.md#imapelementstyle)

A school or other educational building.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:140](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L140)

##### foodPoint?

> `optional` **foodPoint**: [`IMapElementStyle`](README.md#imapelementstyle)

Restaurant, caf�, etc.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:143](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L143)

##### forest?

> `optional` **forest**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of forest land.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:146](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L146)

##### golfCourse?

> `optional` **golfCourse**: [`IMapElementStyle`](README.md#imapelementstyle)

An area of land where the game of golf is played.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:149](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L149)

##### highSpeedRamp?

> `optional` **highSpeedRamp**: [`IMapElementStyle`](README.md#imapelementstyle)

Lines representing ramps typically alongside ControlledAccessHighways

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:152](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L152)

##### highway?

> `optional` **highway**: [`IMapElementStyle`](README.md#imapelementstyle)

A highway.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:155](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L155)

##### indigenousPeoplesReserve?

> `optional` **indigenousPeoplesReserve**: [`IMapElementStyle`](README.md#imapelementstyle)

An area of land reserved for Indigenous people.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:158](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L158)

##### island?

> `optional` **island**: [`IMapElementStyle`](README.md#imapelementstyle)

Labeling of area of an island.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:161](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L161)

##### majorRoad?

> `optional` **majorRoad**: [`IMapElementStyle`](README.md#imapelementstyle)

Major roads.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:164](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L164)

##### mapElement?

> `optional` **mapElement**: [`IMapElementStyle`](README.md#imapelementstyle)

The base map element in which all other map elements inherit from.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:167](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L167)

##### medical?

> `optional` **medical**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of land used for medical purposes. Generally, hospital campuses.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:170](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L170)

##### medicalBuilding?

> `optional` **medicalBuilding**: [`IMapElementStyle`](README.md#imapelementstyle)

A building which provides medical services.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:173](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L173)

##### military?

> `optional` **military**: [`IMapElementStyle`](README.md#imapelementstyle)

A military area.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:176](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L176)

##### naturalPoint?

> `optional` **naturalPoint**: [`IMapElementStyle`](README.md#imapelementstyle)

A natural point of interest.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:179](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L179)

##### nautical?

> `optional` **nautical**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of land used for nautical purposes.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:182](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L182)

##### neighborhood?

> `optional` **neighborhood**: [`IMapElementStyle`](README.md#imapelementstyle)

Area defined as a neighborhood. Labels only.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:185](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L185)

##### park?

> `optional` **park**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of any kind of park.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:188](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L188)

##### peak?

> `optional` **peak**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing the peak of a mountain.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:191](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L191)

##### playingField?

> `optional` **playingField**: [`IMapElementStyle`](README.md#imapelementstyle)

Extracted pitches such as a baseball field or tennis court.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:194](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L194)

##### point?

> `optional` **point**: [`IMapElementStyle`](README.md#imapelementstyle)

All point features that are rendered with an icon of some sort

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:197](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L197)

##### pointOfInterest?

> `optional` **pointOfInterest**: [`IMapElementStyle`](README.md#imapelementstyle)

Restaurant, hospital, school, marina, ski area, etc.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:200](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L200)

##### political?

> `optional` **political**: [`IBorderedMapElementStyle`](README.md#iborderedmapelementstyle)

A political border.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:203](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L203)

##### populatedPlace?

> `optional` **populatedPlace**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing size of populated place (city, town, etc).

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:206](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L206)

##### railway?

> `optional` **railway**: [`IMapElementStyle`](README.md#imapelementstyle)

Railway lines

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:209](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L209)

##### ramp?

> `optional` **ramp**: [`IMapElementStyle`](README.md#imapelementstyle)

Line representing the connecting entrance/exit to a highway.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:212](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L212)

##### reserve?

> `optional` **reserve**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of nature reserve.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:215](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L215)

##### river?

> `optional` **river**: [`IMapElementStyle`](README.md#imapelementstyle)

River, stream, or other passage. Note that this may be a line or polygon and may connect to non-river water bodies.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:218](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L218)

##### road?

> `optional` **road**: [`IMapElementStyle`](README.md#imapelementstyle)

Lines that represent all roads

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:221](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L221)

##### roadExit?

> `optional` **roadExit**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing the exit, typically from a controlled access highway.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:224](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L224)

##### runway?

> `optional` **runway**: [`IMapElementStyle`](README.md#imapelementstyle)

Land area covered by a runway. See also Airport for the land area of the whole airport.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:230](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L230)

##### sand?

> `optional` **sand**: [`IMapElementStyle`](README.md#imapelementstyle)

Area generally used for beaches, but could be used for sandy areas/golf bunkers in the future.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:233](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L233)

##### shoppingCenter?

> `optional` **shoppingCenter**: [`IMapElementStyle`](README.md#imapelementstyle)

A shopping center or mall.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:236](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L236)

##### stadium?

> `optional` **stadium**: [`IMapElementStyle`](README.md#imapelementstyle)

Area of a stadium.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:239](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L239)

##### street?

> `optional` **street**: [`IMapElementStyle`](README.md#imapelementstyle)

A street.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:242](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L242)

##### structure?

> `optional` **structure**: [`IMapElementStyle`](README.md#imapelementstyle)

Buildings and other building-like structures

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:245](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L245)

##### tollRoad?

> `optional` **tollRoad**: [`IMapElementStyle`](README.md#imapelementstyle)

A toll road.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:248](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L248)

##### trail?

> `optional` **trail**: [`IMapElementStyle`](README.md#imapelementstyle)

Walking trail, either through park or hiking trail

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:251](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L251)

##### transit?

> `optional` **transit**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing a bus stop, train stop, airport, etc.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:254](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L254)

##### transitBuilding?

> `optional` **transitBuilding**: [`IMapElementStyle`](README.md#imapelementstyle)

A transit building.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:257](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L257)

##### transportation?

> `optional` **transportation**: [`IMapElementStyle`](README.md#imapelementstyle)

Lines that are part of the transportation network (roads, trains, ferries, etc)

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:260](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L260)

##### unpavedStreet?

> `optional` **unpavedStreet**: [`IMapElementStyle`](README.md#imapelementstyle)

An unpaved street.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:263](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L263)

##### vegetation?

> `optional` **vegetation**: [`IMapElementStyle`](README.md#imapelementstyle)

Forests, grassy areas, etc.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:266](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L266)

##### volcanicPeak?

> `optional` **volcanicPeak**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing the peak of a volcano.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:269](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L269)

##### water?

> `optional` **water**: [`IMapElementStyle`](README.md#imapelementstyle)

Anything that looks like water

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:272](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L272)

##### waterPoint?

> `optional` **waterPoint**: [`IMapElementStyle`](README.md#imapelementstyle)

Icon representing a water feature location such as a waterfall.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:275](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L275)

##### waterRoute?

> `optional` **waterRoute**: [`IMapElementStyle`](README.md#imapelementstyle)

Ferry route lines

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:278](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L278)

***

### IMapLoadOptions

Map or View options

#### Extends

- [`IMapOptions`](README.md#imapoptions).[`IViewOptions`](README.md#iviewoptions)

#### Properties

##### allowHidingLabelsOfRoad?

> `optional` **allowHidingLabelsOfRoad**: `boolean`

A boolean that, when set to true, allows the road labels to be hidden. Default: false
This property can only be set when using the Map constructor. This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`allowHidingLabelsOfRoad`](README.md#allowhidinglabelsofroad-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:399](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L399)

##### allowInfoboxOverflow?

> `optional` **allowInfoboxOverflow**: `boolean`

A boolean indicating if the infobox is allowed to overflow outside the bounds of the map. Default: false.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`allowInfoboxOverflow`](README.md#allowinfoboxoverflow-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:402](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L402)

##### backgroundColor?

> `optional` **backgroundColor**: `string` \| [`Color`](README.md#color)

The color to use for the map control background. The default color is #EAE8E1. This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`backgroundColor`](README.md#backgroundcolor-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:405](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L405)

##### bounds?

> `optional` **bounds**: [`LocationRect`](README.md#locationrect)

The bounding rectangle of the map view. If both bounds and center are specified, bounds takes precedence over center.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`bounds`](README.md#bounds-5)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:886](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L886)

##### center?

> `optional` **center**: [`Location`](README.md#location)

The location of the center of the map view. If both bounds and center are specified, bounds takes precedence over center.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`center`](README.md#center-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:889](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L889)

##### centerOffset?

> `optional` **centerOffset**: [`Point`](README.md#point)

The amount the center is shifted in pixels.This property is ignored if center is not specified.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`centerOffset`](README.md#centeroffset-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:892](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L892)

##### ~~credentials?~~

> `optional` **credentials**: `string`

###### Deprecated

The Bing Maps Key used to authenticate the application.
It is recommended that the Bing Maps key be set as a URL parameter of the Bing Maps script reference. This option will continue to work.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:386](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L386)

##### customMapStyle?

> `optional` **customMapStyle**: [`ICustomMapStyle`](README.md#icustommapstyle)

Custom map styles used to modify the look and feel of the base map.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`customMapStyle`](README.md#custommapstyle-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:408](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L408)

##### disableBirdseye?

> `optional` **disableBirdseye**: `boolean`

A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed
from the map navigation control and the birdseye MapTypeId is disabled. Additionally, the auto map type will only display road or aerial.
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`disableBirdseye`](README.md#disablebirdseye-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:415](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L415)

##### disableKeyboardInput?

> `optional` **disableKeyboardInput**: `boolean`

A boolean value indicating whether to disable the user’s ability to control the using the keyboard. Default: false

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`disableKeyboardInput`](README.md#disablekeyboardinput-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:418](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L418)

##### disableMapTypeSelectorMouseOver?

> `optional` **disableMapTypeSelectorMouseOver**: `boolean`

A boolean value indicating if mousing over the map type selector should open it or not. Default: false

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`disableMapTypeSelectorMouseOver`](README.md#disablemaptypeselectormouseover-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:421](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L421)

##### disablePanning?

> `optional` **disablePanning**: `boolean`

A boolean value indicating whether to disable the user's ability to pan the map. Default: false

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`disablePanning`](README.md#disablepanning-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:424](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L424)

##### disableScrollWheelZoom?

> `optional` **disableScrollWheelZoom**: `boolean`

Scrolling the mouse wheel over the map will zoom it in or out, but will not scroll the page.
Setting this property to true disables the zooming of the map and instead reverts back to scrolling the page.
Default: false

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`disableScrollWheelZoom`](README.md#disablescrollwheelzoom-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:431](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L431)

##### disableStreetside?

> `optional` **disableStreetside**: `boolean`

A boolean indicating whether to disable streetside mode.If this property is set to true, streetside will be removed from
the navigation bar, and the automatic coverage overlay will be disabled when zoomed in at lower zoom levels. Default false
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`disableStreetside`](README.md#disablestreetside-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:438](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L438)

##### disableStreetsideAutoCoverage?

> `optional` **disableStreetsideAutoCoverage**: `boolean`

A boolean indicating whether to disable the automatic streetside coverage layer that appears when zoomed in at lower zoom
levels. Default false
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`disableStreetsideAutoCoverage`](README.md#disablestreetsideautocoverage-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:445](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L445)

##### disableZooming?

> `optional` **disableZooming**: `boolean`

A boolean value indicating whether to disable the user's ability to zoom in or out. Default: false

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`disableZooming`](README.md#disablezooming-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:448](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L448)

##### enableCORS?

> `optional` **enableCORS**: `boolean`

A boolean value indicating if CORS (Cross-origin Resource Sharing) should be enabled for tiles. Useful if directly accessing the canvas to generate an image of the map. Default: false
Known Limitations: IE and Edge will not cache tiles when CORS is enabled. Chrome throws errors when this property is set enabled and custom tile layers don’t have CORS enabled on the server.
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`enableCORS`](README.md#enablecors-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:461](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L461)

##### enableClickableLogo?

> `optional` **enableClickableLogo**: `boolean`

A boolean value indicating whether the Bing(TM) logo on the map is clickable. Default: true.
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`enableClickableLogo`](README.md#enableclickablelogo-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:454](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L454)

##### enableHighDpi?

> `optional` **enableHighDpi**: `boolean`

Enables the map to use map tiles suitable for a higher DPI display, if the display supports it. 
When set to false and the map is loaded on a high DPI display, custom tile layers will load tiles 
at a higher zoom level and scale the image to increase the DPI. Default: false.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`enableHighDpi`](README.md#enablehighdpi-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:468](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L468)

##### enableInertia?

> `optional` **enableInertia**: `boolean`

A boolean value indicating whether to use the inertia animation effect during map navigation. Default: true
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`enableInertia`](README.md#enableinertia-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:474](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L474)

##### heading?

> `optional` **heading**: `number`

The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East,
180 = South, and 270 = West.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`heading`](README.md#heading-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:898](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L898)

##### labelOverlay?

> `optional` **labelOverlay**: [`LabelOverlay`](README.md#labeloverlay)

Indicates how the map labels are displayed.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`labelOverlay`](README.md#labeloverlay-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:901](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L901)

##### liteMode?

> `optional` **liteMode**: `boolean`

A boolean that indicates if the map should be rendered using lite mode. When set to true vector map labels are
disabled and map labels are rendered directly into the map tiles. This offers improved performance, but will result
in the labels being rendered behind data on the map and the labels will also not use collision dection with pushpins.
If this property is not set, the map set this value based on the target device and browser as vector labels perform
better in some scenrarios than others.
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`liteMode`](README.md#litemode-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:484](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L484)

##### mapTypeId?

> `optional` **mapTypeId**: [`MapTypeId`](README.md#maptypeid)

The map type of the view.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`mapTypeId`](README.md#maptypeid-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:904](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L904)

##### maxBounds?

> `optional` **maxBounds**: [`LocationRect`](README.md#locationrect)

A bounding area that restricts the map view.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`maxBounds`](README.md#maxbounds-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:487](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L487)

##### maxZoom?

> `optional` **maxZoom**: `number`

The maximum zoom level that the map can be zoomed into.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`maxZoom`](README.md#maxzoom-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:490](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L490)

##### minZoom?

> `optional` **minZoom**: `number`

The minimum zoom level that the map cab be zoomed out to.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`minZoom`](README.md#minzoom-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:493](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L493)

##### navigationBarMode?

> `optional` **navigationBarMode**: [`NavigationBarMode`](README.md#navigationbarmode)

Specifies how the navigation bar should be rendered on the map.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`navigationBarMode`](README.md#navigationbarmode-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:496](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L496)

##### navigationBarOrientation?

> `optional` **navigationBarOrientation**: [`NavigationBarOrientation`](README.md#navigationbarorientation)

A boolean whether what orientation should be used when laying out the navigation controls.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`navigationBarOrientation`](README.md#navigationbarorientation-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:499](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L499)

##### padding?

> `optional` **padding**: `number`

The amount of padding in pixels to be added to each side of the bounds of the map view.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`padding`](README.md#padding-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:907](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L907)

##### pitch?

> `optional` **pitch**: `number`

The angle relative to the horizon to tilt a streetside panorama image.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`pitch`](README.md#pitch-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:910](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L910)

##### showBreadcrumb?

> `optional` **showBreadcrumb**: `boolean`

A boolean value indicating whether to display the “breadcrumb control”. The breadcrumb control shows the current center location’s geography hierarchy.
The default value is false. Requires the showLocateMeButton map option to be set to true. The breadcrumb control displays best when the width of the map
is at least 400 pixels.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showBreadcrumb`](README.md#showbreadcrumb-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:506](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L506)

##### showDashboard?

> `optional` **showDashboard**: `boolean`

A boolean value indicating whether to show the map navigation control. Default: true This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showDashboard`](README.md#showdashboard-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:511](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L511)

##### showLocateMeButton?

> `optional` **showLocateMeButton**: `boolean`

A boolean value indicating whether to show a button that centers the map over the user's location in the map navigation control. Default: true
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showLocateMeButton`](README.md#showlocatemebutton-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:517](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L517)

##### showLogo?

> `optional` **showLogo**: `boolean`

A boolean value indicating whether or not to show the map Bing logo. The default value is true.
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showLogo`](README.md#showlogo-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:523](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L523)

##### showMapTypeSelector?

> `optional` **showMapTypeSelector**: `boolean`

A boolean value indicating whether to show the map type selector in the map navigation control. Default: true
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showMapTypeSelector`](README.md#showmaptypeselector-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:529](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L529)

##### showScalebar?

> `optional` **showScalebar**: `boolean`

A boolean value indicating whether to show the scale bar. Default: true
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showScalebar`](README.md#showscalebar-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:535](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L535)

##### showTermsLink?

> `optional` **showTermsLink**: `boolean`

A boolean value indicating whether to show a link to the End User Terms of Use, which appears to the right of the copyrights, or not. Default: true
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showTermsLink`](README.md#showtermslink-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:544](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L544)

##### showTrafficButton?

> `optional` **showTrafficButton**: `boolean`

When using the minified navigation bar, a traffic button is displayed. Setting this option to false will hide this button.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showTrafficButton`](README.md#showtrafficbutton-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:538](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L538)

##### showZoomButtons?

> `optional` **showZoomButtons**: `boolean`

A boolean value indicating whether to show the zoom buttons in the map navigation control. Default: true
This property can only be set when using the Map constructor.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`showZoomButtons`](README.md#showzoombuttons-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:550](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L550)

##### streetsideOptions?

> `optional` **streetsideOptions**: [`IStreetsideOptions`](README.md#istreetsideoptions)

A set of properties for the streetside mode of the map.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`streetsideOptions`](README.md#streetsideoptions-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:553](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L553)

##### supportedMapTypes?

> `optional` **supportedMapTypes**: [`MapTypeId`](README.md#maptypeid)[]

Additional support map types that should be added to the navigaiton bar such as canvasDark, canvasLight, and grayscale.

###### Inherited from

[`IMapOptions`](README.md#imapoptions).[`supportedMapTypes`](README.md#supportedmaptypes-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:556](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L556)

##### zoom?

> `optional` **zoom**: `number`

The zoom level of the map view.

###### Inherited from

[`IViewOptions`](README.md#iviewoptions).[`zoom`](README.md#zoom-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:913](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L913)

***

### IMapOptions

An object that can be used to customize the map. Some of the map options can be changed after the map has loaded by using
the setOptions function on the map.

#### Extended by

- [`IMapLoadOptions`](README.md#imaploadoptions)

#### Properties

##### allowHidingLabelsOfRoad?

> `optional` **allowHidingLabelsOfRoad**: `boolean`

A boolean that, when set to true, allows the road labels to be hidden. Default: false
This property can only be set when using the Map constructor. This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:399](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L399)

##### allowInfoboxOverflow?

> `optional` **allowInfoboxOverflow**: `boolean`

A boolean indicating if the infobox is allowed to overflow outside the bounds of the map. Default: false.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:402](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L402)

##### backgroundColor?

> `optional` **backgroundColor**: `string` \| [`Color`](README.md#color)

The color to use for the map control background. The default color is #EAE8E1. This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:405](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L405)

##### customMapStyle?

> `optional` **customMapStyle**: [`ICustomMapStyle`](README.md#icustommapstyle)

Custom map styles used to modify the look and feel of the base map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:408](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L408)

##### disableBirdseye?

> `optional` **disableBirdseye**: `boolean`

A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed
from the map navigation control and the birdseye MapTypeId is disabled. Additionally, the auto map type will only display road or aerial.
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:415](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L415)

##### disableKeyboardInput?

> `optional` **disableKeyboardInput**: `boolean`

A boolean value indicating whether to disable the user’s ability to control the using the keyboard. Default: false

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:418](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L418)

##### disableMapTypeSelectorMouseOver?

> `optional` **disableMapTypeSelectorMouseOver**: `boolean`

A boolean value indicating if mousing over the map type selector should open it or not. Default: false

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:421](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L421)

##### disablePanning?

> `optional` **disablePanning**: `boolean`

A boolean value indicating whether to disable the user's ability to pan the map. Default: false

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:424](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L424)

##### disableScrollWheelZoom?

> `optional` **disableScrollWheelZoom**: `boolean`

Scrolling the mouse wheel over the map will zoom it in or out, but will not scroll the page.
Setting this property to true disables the zooming of the map and instead reverts back to scrolling the page.
Default: false

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:431](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L431)

##### disableStreetside?

> `optional` **disableStreetside**: `boolean`

A boolean indicating whether to disable streetside mode.If this property is set to true, streetside will be removed from
the navigation bar, and the automatic coverage overlay will be disabled when zoomed in at lower zoom levels. Default false
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:438](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L438)

##### disableStreetsideAutoCoverage?

> `optional` **disableStreetsideAutoCoverage**: `boolean`

A boolean indicating whether to disable the automatic streetside coverage layer that appears when zoomed in at lower zoom
levels. Default false
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:445](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L445)

##### disableZooming?

> `optional` **disableZooming**: `boolean`

A boolean value indicating whether to disable the user's ability to zoom in or out. Default: false

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:448](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L448)

##### enableCORS?

> `optional` **enableCORS**: `boolean`

A boolean value indicating if CORS (Cross-origin Resource Sharing) should be enabled for tiles. Useful if directly accessing the canvas to generate an image of the map. Default: false
Known Limitations: IE and Edge will not cache tiles when CORS is enabled. Chrome throws errors when this property is set enabled and custom tile layers don’t have CORS enabled on the server.
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:461](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L461)

##### enableClickableLogo?

> `optional` **enableClickableLogo**: `boolean`

A boolean value indicating whether the Bing(TM) logo on the map is clickable. Default: true.
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:454](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L454)

##### enableHighDpi?

> `optional` **enableHighDpi**: `boolean`

Enables the map to use map tiles suitable for a higher DPI display, if the display supports it. 
When set to false and the map is loaded on a high DPI display, custom tile layers will load tiles 
at a higher zoom level and scale the image to increase the DPI. Default: false.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:468](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L468)

##### enableInertia?

> `optional` **enableInertia**: `boolean`

A boolean value indicating whether to use the inertia animation effect during map navigation. Default: true
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:474](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L474)

##### liteMode?

> `optional` **liteMode**: `boolean`

A boolean that indicates if the map should be rendered using lite mode. When set to true vector map labels are
disabled and map labels are rendered directly into the map tiles. This offers improved performance, but will result
in the labels being rendered behind data on the map and the labels will also not use collision dection with pushpins.
If this property is not set, the map set this value based on the target device and browser as vector labels perform
better in some scenrarios than others.
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:484](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L484)

##### maxBounds?

> `optional` **maxBounds**: [`LocationRect`](README.md#locationrect)

A bounding area that restricts the map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:487](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L487)

##### maxZoom?

> `optional` **maxZoom**: `number`

The maximum zoom level that the map can be zoomed into.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:490](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L490)

##### minZoom?

> `optional` **minZoom**: `number`

The minimum zoom level that the map cab be zoomed out to.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:493](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L493)

##### navigationBarMode?

> `optional` **navigationBarMode**: [`NavigationBarMode`](README.md#navigationbarmode)

Specifies how the navigation bar should be rendered on the map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:496](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L496)

##### navigationBarOrientation?

> `optional` **navigationBarOrientation**: [`NavigationBarOrientation`](README.md#navigationbarorientation)

A boolean whether what orientation should be used when laying out the navigation controls.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:499](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L499)

##### showBreadcrumb?

> `optional` **showBreadcrumb**: `boolean`

A boolean value indicating whether to display the “breadcrumb control”. The breadcrumb control shows the current center location’s geography hierarchy.
The default value is false. Requires the showLocateMeButton map option to be set to true. The breadcrumb control displays best when the width of the map
is at least 400 pixels.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:506](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L506)

##### showDashboard?

> `optional` **showDashboard**: `boolean`

A boolean value indicating whether to show the map navigation control. Default: true This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:511](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L511)

##### showLocateMeButton?

> `optional` **showLocateMeButton**: `boolean`

A boolean value indicating whether to show a button that centers the map over the user's location in the map navigation control. Default: true
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:517](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L517)

##### showLogo?

> `optional` **showLogo**: `boolean`

A boolean value indicating whether or not to show the map Bing logo. The default value is true.
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:523](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L523)

##### showMapTypeSelector?

> `optional` **showMapTypeSelector**: `boolean`

A boolean value indicating whether to show the map type selector in the map navigation control. Default: true
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:529](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L529)

##### showScalebar?

> `optional` **showScalebar**: `boolean`

A boolean value indicating whether to show the scale bar. Default: true
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:535](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L535)

##### showTermsLink?

> `optional` **showTermsLink**: `boolean`

A boolean value indicating whether to show a link to the End User Terms of Use, which appears to the right of the copyrights, or not. Default: true
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:544](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L544)

##### showTrafficButton?

> `optional` **showTrafficButton**: `boolean`

When using the minified navigation bar, a traffic button is displayed. Setting this option to false will hide this button.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:538](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L538)

##### showZoomButtons?

> `optional` **showZoomButtons**: `boolean`

A boolean value indicating whether to show the zoom buttons in the map navigation control. Default: true
This property can only be set when using the Map constructor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:550](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L550)

##### streetsideOptions?

> `optional` **streetsideOptions**: [`IStreetsideOptions`](README.md#istreetsideoptions)

A set of properties for the streetside mode of the map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:553](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L553)

##### supportedMapTypes?

> `optional` **supportedMapTypes**: [`MapTypeId`](README.md#maptypeid)[]

Additional support map types that should be added to the navigaiton bar such as canvasDark, canvasLight, and grayscale.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:556](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L556)

***

### IMapTypeChangeEventArgs

A MapTypeChangeEventArgs object is returned by the map when using the mapTypeChanged event.

#### Properties

##### newMapTypeId

> **newMapTypeId**: [`MapTypeId`](README.md#maptypeid)

The map type that map has changed to.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:562](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L562)

##### oldMapTypeId

> **oldMapTypeId**: [`MapTypeId`](README.md#maptypeid)

The map type that the map has changed from.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:565](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L565)

##### target

> **target**: [`Map`](README.md#map-2)

The map instance the event occured on

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:568](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L568)

##### targetType

> **targetType**: `string`

The type of object the event was attached to. Should always be "map"

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:571](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L571)

***

### IModuleOptions

Interface for module options.

#### Properties

##### ~~callback()?~~

> `optional` **callback**: () => `void`

###### Deprecated

A callback function that is fired after the module has loaded.
It is recommended that the Bing Maps key be set as a URL parameter of the Bing Maps script reference.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:581](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L581)

##### credentials?

> `optional` **credentials**: `string`

A Bing Maps key that is used with the module when the module is loaded without a map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:587](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L587)

##### errorCallback()?

> `optional` **errorCallback**: (`errorMessage`) => `void`

A function that is called if there is an error loading the module.

###### Parameters

• **errorMessage**: `string`

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:584](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L584)

***

### IMouseEventArgs

A MouseEventArgs object is returned by many the mouse event handlers.

#### Extends

- [`ILayerMouseEventArgs`](README.md#ilayermouseeventargs)

#### Properties

##### eventName

> **eventName**: `string`

The event that occurred.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:593](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L593)

##### isPrimary

> **isPrimary**: `boolean`

A boolean indicating if the primary button, such as the left mouse button or a tap on a touch screen, was used during a mouse down or up event.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:596](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L596)

##### isSecondary

> **isSecondary**: `boolean`

A boolean indicating if the secondary mouse button, such as the right mouse button, was used during a mouse down or up event.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:599](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L599)

##### layer

> **layer**: [`Layer`](README.md#layer)

If the target is a shape, this will be the layer that the shape is in.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:602](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L602)

##### location

> **location**: [`Location`](README.md#location)

The map location of where the event occurred.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:605](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L605)

##### pageX

> **pageX**: `number`

The x-value of the pixel coordinate on the page of the mouse cursor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:608](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L608)

##### pageY

> **pageY**: `number`

The y-value of the pixel coordinate on the page of the mouse cursor.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:611](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L611)

##### point

> **point**: [`Point`](README.md#point)

The pixel coordinate of the mouse cusrsor relative to the top left corner of the map div.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:614](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L614)

##### ~~primitive~~

> **primitive**: [`IPrimitive`](README.md#iprimitive)

###### Deprecated

use target
The IPrimitive shape (pushpin, polyline, polygon) that the event occurred on.

###### Inherited from

[`ILayerMouseEventArgs`](README.md#ilayermouseeventargs).[`primitive`](README.md#primitive)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:282](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L282)

##### target

> **target**: [`Map`](README.md#map-2) \| [`IPrimitive`](README.md#iprimitive)

The object that triggered the event.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:617](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L617)

##### targetType

> **targetType**: `string`

The type of the object that the event is attached to. Valid values include the following: ‘map’, 'layer', ‘polygon’, ‘polyline’, or ‘pushpin’

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:620](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L620)

##### wheelDelta

> **wheelDelta**: `number`

The number of units that the mouse wheel has changed.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:623](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L623)

#### Methods

##### getX()

> **getX**(): `number`

Returns the x-value of the pixel coordinate, relative to the map, of the mouse.

###### Returns

`number`

The x-value of the pixel coordinate, relative to the map, of the mouse.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:629](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L629)

##### getY()

> **getY**(): `number`

Returns the y-value of the pixel coordinate, relative to the map, of the mouse.

###### Returns

`number`

The y-value of the pixel coordinate, relative to the map, of the mouse.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:635](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L635)

***

### IPanoramaInfo

An object tthat contains information about a streetside scene.

#### Properties

##### cd?

> `optional` **cd**: `string`

The capture date of the streetside scene.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:643](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L643)

***

### IPolygonOptions

Options used for customizing Polygons.

#### Extends

- [`IPolylineOptions`](README.md#ipolylineoptions)

#### Properties

##### cursor?

> `optional` **cursor**: `string`

The css cursor to show when the IPrimitive has mouse events on it. Default value is pointer (hand).

###### Inherited from

[`IPolylineOptions`](README.md#ipolylineoptions).[`cursor`](README.md#cursor-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:686](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L686)

##### fillColor?

> `optional` **fillColor**: `string` \| [`Color`](README.md#color)

CSS string or Color object as the polygon's filling color.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:710](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L710)

##### generalizable?

> `optional` **generalizable**: `boolean`

Indicates if drawn shape should be generalized based on the zoom level to improve rendering performance. Default true *

###### Inherited from

[`IPolylineOptions`](README.md#ipolylineoptions).[`generalizable`](README.md#generalizable-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:695](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L695)

##### strokeColor?

> `optional` **strokeColor**: `string` \| [`Color`](README.md#color)

CSS string or Color object as the poly's color.

###### Inherited from

[`IPolylineOptions`](README.md#ipolylineoptions).[`strokeColor`](README.md#strokecolor-4)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:698](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L698)

##### strokeDashArray?

> `optional` **strokeDashArray**: `string` \| `number`[]

An array of numbers separated by spaces, or a string separated by spaces/commas specifying the repetitive stroke pattern.

###### Inherited from

[`IPolylineOptions`](README.md#ipolylineoptions).[`strokeDashArray`](README.md#strokedasharray-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:701](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L701)

##### strokeThickness?

> `optional` **strokeThickness**: `number`

The thickness of the poly stroke.

###### Inherited from

[`IPolylineOptions`](README.md#ipolylineoptions).[`strokeThickness`](README.md#strokethickness-1)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:704](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L704)

##### visible?

> `optional` **visible**: `boolean`

Boolean indicating whether the IPrimitive is visible.

###### Inherited from

[`IPolylineOptions`](README.md#ipolylineoptions).[`visible`](README.md#visible-12)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:689](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L689)

***

### IPolylineOptions

Options used for customizing Polylines.

#### Extends

- [`IPrimitiveOptions`](README.md#iprimitiveoptions)

#### Extended by

- [`IPolygonOptions`](README.md#ipolygonoptions)

#### Properties

##### cursor?

> `optional` **cursor**: `string`

The css cursor to show when the IPrimitive has mouse events on it. Default value is pointer (hand).

###### Inherited from

[`IPrimitiveOptions`](README.md#iprimitiveoptions).[`cursor`](README.md#cursor-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:686](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L686)

##### generalizable?

> `optional` **generalizable**: `boolean`

Indicates if drawn shape should be generalized based on the zoom level to improve rendering performance. Default true *

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:695](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L695)

##### strokeColor?

> `optional` **strokeColor**: `string` \| [`Color`](README.md#color)

CSS string or Color object as the poly's color.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:698](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L698)

##### strokeDashArray?

> `optional` **strokeDashArray**: `string` \| `number`[]

An array of numbers separated by spaces, or a string separated by spaces/commas specifying the repetitive stroke pattern.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:701](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L701)

##### strokeThickness?

> `optional` **strokeThickness**: `number`

The thickness of the poly stroke.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:704](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L704)

##### visible?

> `optional` **visible**: `boolean`

Boolean indicating whether the IPrimitive is visible.

###### Inherited from

[`IPrimitiveOptions`](README.md#iprimitiveoptions).[`visible`](README.md#visible-13)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:689](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L689)

***

### IPrimitive

All shapes; Pushpins, Polylines and Polygons, derive from the IPrimitive interface. This means that they can be
passed into any function that takes in an IPrimitive object. Also, any function that returns an IPrimitive is capable
of returning any of these shapes.

#### Properties

##### metadata?

> `optional` **metadata**: `any`

Optional property to store any additional metadata for this primitive.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:653](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L653)

#### Methods

##### getCursor()

> **getCursor**(): `string`

Gets the css cursor value when the primitive has events on it.

###### Returns

`string`

css cursor string when primitive has events on it.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:659](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L659)

##### getVisible()

> **getVisible**(): `boolean`

Gets whether the primitive is visible.

###### Returns

`boolean`

A boolean indicating whether the primitive is visible or not.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:665](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L665)

##### setOptions()

> **setOptions**(`options`): `void`

Sets the options for customizing the IPrimitive.

###### Parameters

• **options**: [`IPrimitiveOptions`](README.md#iprimitiveoptions)

The options for customizing the IPrimitive.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:671](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L671)

***

### IPrimitiveChangedEventArgs

A IPrimitiveChangedEventArgs object is returned by the changed event on IPrimitive shapes.

#### Properties

##### name

> **name**: `string`

The name of the change that occured; 'locations' or 'options'.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:680](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L680)

##### sender

> **sender**: [`IPrimitive`](README.md#iprimitive)

The IPrimitive shape the event occured on.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:677](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L677)

***

### IPrimitiveOptions

Options used for customizing IPrimitive objects.

#### Extended by

- [`IPolylineOptions`](README.md#ipolylineoptions)
- [`IPushpinOptions`](README.md#ipushpinoptions)

#### Properties

##### cursor?

> `optional` **cursor**: `string`

The css cursor to show when the IPrimitive has mouse events on it. Default value is pointer (hand).

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:686](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L686)

##### visible?

> `optional` **visible**: `boolean`

Boolean indicating whether the IPrimitive is visible.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:689](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L689)

***

### IPushpinOptions

Options used for customizing Pushpins.

#### Extends

- [`IPrimitiveOptions`](README.md#iprimitiveoptions)

#### Properties

##### anchor?

> `optional` **anchor**: [`Point`](README.md#point)

The point on the pushpin icon, in pixels, which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:716](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L716)

##### color?

> `optional` **color**: `string` \| [`Color`](README.md#color)

Specifies what color to make the default pushpin.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:719](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L719)

##### cursor?

> `optional` **cursor**: `string`

The css cursor to show when the IPrimitive has mouse events on it. Default value is pointer (hand).

###### Inherited from

[`IPrimitiveOptions`](README.md#iprimitiveoptions).[`cursor`](README.md#cursor-2)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:686](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L686)

##### draggable?

> `optional` **draggable**: `boolean`

A boolean indicating whether the pushpin can be dragged to a new position with the mouse or by touch.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:722](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L722)

##### enableClickedStyle?

> `optional` **enableClickedStyle**: `boolean`

Specifies whether to enable the clicked style on the pushpin.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:725](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L725)

##### enableHoverStyle?

> `optional` **enableHoverStyle**: `boolean`

Specifies whether to enable the hover style on the pushpin.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:728](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L728)

##### icon?

> `optional` **icon**: `string`

Defines the the icon to use for the pushpin.This can be a URL to an Image or SVG file, an image data URI, or an inline SVG string.
Tip: When using inline SVG, you can pass in placeholders `{color}` and `{text}` in your SVG string. This placeholder will be replaced by the pushpins color or text property value when rendered.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:734](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L734)

##### roundClickableArea?

> `optional` **roundClickableArea**: `boolean`

Whether the clickable area of pushpin should be an ellipse instead of a rectangle.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:737](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L737)

##### subTitle?

> `optional` **subTitle**: `string`

A secondary title label value to display under the pushpin. Uses label collision detection. This label automatically changes color between white
and dark grey depending on which map style is selected. Requires the title label to be set.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:743](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L743)

##### text?

> `optional` **text**: `string`

A short string of text that is overlaid on top of the pushpin.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:752](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L752)

##### textOffset?

> `optional` **textOffset**: [`Point`](README.md#point)

The amount the text is shifted from the pushpin icon. The default value is (0,5).

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:755](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L755)

##### title?

> `optional` **title**: `string`

The title label value to display under the pushpin. This label automatically changes color between white and dark grey depending on which map
style is selected. Pushpin Titles support label collision detection, as described below.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:749](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L749)

##### visible?

> `optional` **visible**: `boolean`

Boolean indicating whether the IPrimitive is visible.

###### Inherited from

[`IPrimitiveOptions`](README.md#iprimitiveoptions).[`visible`](README.md#visible-13)

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:689](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L689)

***

### IRange

An object that represents a min and max value range.

#### Properties

##### max

> **max**: `number`

The maximum value.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:764](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L764)

##### min

> **min**: `number`

The minimum value.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:761](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L761)

***

### ISettingsStyle

Global style settings

#### Properties

##### landColor?

> `optional` **landColor**: `string`

A hex color value that all land is first flushed to before things are drawn on it.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:85](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L85)

##### shadedReliefVisible?

> `optional` **shadedReliefVisible**: `boolean`

Specifies whether or not to draw elevation shading on the map.

###### Defined in

[src/types/MicrosoftMaps/CustomMapStyles.d.ts:88](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/CustomMapStyles.d.ts#L88)

***

### IStreetsideOptions

The options that can be used to customize how the streetside map mode is displayed to the user.

#### Properties

##### disablePanoramaNavigation?

> `optional` **disablePanoramaNavigation**: `boolean`

A boolean indicating if the ability to navigate between image bubbles should be disabled in streetside map mode. Default: false

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:770](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L770)

##### locationToLookAt?

> `optional` **locationToLookAt**: [`Location`](README.md#location)

The location that the streetside panorama should be looking towards. This can be used instead of a heading.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:773](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L773)

##### onErrorLoading()?

> `optional` **onErrorLoading**: () => `void`

A callback function that is triggered after the streetside view has not loaded successfully.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:776](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L776)

##### onSuccessLoading()?

> `optional` **onSuccessLoading**: () => `void`

A callback function that is triggered after the streetside view has loaded successfully.

###### Returns

`void`

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:779](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L779)

##### overviewMapMode?

> `optional` **overviewMapMode**: [`OverviewMapMode`](README.md#overviewmapmode)

Specifies how to render the overview map when in streetside mode.
Default: Microsoft.Maps.OverviewMapMode.expanded

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:785](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L785)

##### panoramaInfo?

> `optional` **panoramaInfo**: [`IPanoramaInfo`](README.md#ipanoramainfo)

Information for a streetside panorama scene to load.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:790](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L790)

##### panoramaLookupRadius?

> `optional` **panoramaLookupRadius**: `number`

The radius to search in for available streetside panoramas.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:793](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L793)

##### showCurrentAddress?

> `optional` **showCurrentAddress**: `boolean`

A boolean indicating if the current address being viewed should be hidden when in streetside map mode. Default: true

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:796](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L796)

##### showExitButton?

> `optional` **showExitButton**: `boolean`

A boolean indicating if the exit button should be hidden when in streetside map mode. Default: true

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:799](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L799)

##### showHeadingCompass?

> `optional` **showHeadingCompass**: `boolean`

A boolean indicating if the heading compass button is hidden when in streetside map mode. Default: true

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:802](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L802)

##### showProblemReporting?

> `optional` **showProblemReporting**: `boolean`

A boolean indicating if the link to report a problem with a streetside image is hidden when in streetside map mode. Default: true

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:805](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L805)

##### showZoomButtons?

> `optional` **showZoomButtons**: `boolean`

A boolean indicating if the zoom buttons should be displayed when in streetside map mode. Default: true

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:808](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L808)

***

### IStyleUrl

Interface to specify style css while registering a module

#### Properties

##### styleURLs

> **styleURLs**: `string`[]

List of style css urls o be downloaded

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:826](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L826)

***

### IStylesOptions

Defines a set of styles for pushpins, polylines, and polygons.

#### Properties

##### polygonOptions?

> `optional` **polygonOptions**: [`IPolygonOptions`](README.md#ipolygonoptions)

Sets the options for all polygons.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:820](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L820)

##### polylineOptions?

> `optional` **polylineOptions**: [`IPolylineOptions`](README.md#ipolylineoptions)

Sets the options for all polylines.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:817](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L817)

##### pushpinOptions?

> `optional` **pushpinOptions**: [`IPushpinOptions`](README.md#ipushpinoptions)

Sets the options for all pushpins.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:814](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L814)

***

### ISuggestionResult

Represents the suggestion result from the Autosuggest manager.

#### Properties

##### address

> **address**: [`IAddress`](README.md#iaddress)

A structured address object for the result.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:76](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L76)

##### bestView

> **bestView**: [`LocationRect`](README.md#locationrect)

A LocationRect that can be used to set the map view over the result.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:79](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L79)

##### entityId

> **entityId**: `string`

Unique entity id to be used for searching the entity.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:82](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L82)

##### entitySubType

> **entitySubType**: `string`

The sub type of result; Address, RoadBlock, PopulatedPlace, CountryRegion, etc.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:88](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L88)

##### entityType

> **entityType**: `string`

The type of the result; Address, Place

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:85](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L85)

##### formattedSuggestion

> **formattedSuggestion**: `string`

A nicely formatted suggestion string for the result based on market.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:91](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L91)

##### location

> **location**: [`Location`](README.md#location)

The coordinate of the result. This value is only returned for place (city, landmarks) results and not for addresses.
Street addresses will need to be geocoded to get their location.

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:97](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L97)

##### subtitle

> **subtitle**: `string`

A secondary title that provides additional context to the title value of the suggestion. *

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:100](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L100)

##### title

> **title**: `string`

The display title for the result (i.e. “Redmond”).

###### Defined in

[src/types/MicrosoftMaps/Modules/Autosuggest.d.ts:103](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/Autosuggest.d.ts#L103)

***

### ITileLayerOptions

Represents options that can be used to customize a tile layer.

#### Properties

##### downloadTimeout?

> `optional` **downloadTimeout**: `number`

The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully
downloaded, the map control considers the download a failure. The default value is 10000.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:838](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L838)

##### enableCORS?

> `optional` **enableCORS**: `boolean`

Allow retrieving data from CORS supported server.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:832](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L832)

##### mercator?

> `optional` **mercator**: [`TileSource`](README.md#tilesource)

The tile source for the tile layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:841](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L841)

##### opacity?

> `optional` **opacity**: `number`

The opacity of the tile layer, defined by a number between 0 (not visible) and 1.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:844](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L844)

##### useCredentialsForCORS?

> `optional` **useCredentialsForCORS**: `boolean`

Specifies that CORS should be made with the "use-credentials" flag instead of "anonymous".

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:847](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L847)

##### visible?

> `optional` **visible**: `boolean`

A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that
the tile layer is hidden, although it is still an entity on the map.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:853](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L853)

##### zIndex?

> `optional` **zIndex**: `number`

The z-index of the tile layer.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:856](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L856)

***

### ITileSourceOptions

Represents options that can be used to define a tile source.

#### Properties

##### bounds?

> `optional` **bounds**: [`LocationRect`](README.md#locationrect)

A bounding box that specifies where tiles are available.
Note: This will not crop tiles to the specific bounding box, it limits the tiles it loads to those that intersect this bounding box.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:865](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L865)

##### maxZoom?

> `optional` **maxZoom**: `number`

The maximum zoom level tiles that tiles should be rendered at.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:868](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L868)

##### minZoom?

> `optional` **minZoom**: `number`

The minimum zoom level tiles that tiles should be rendered at.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:871](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L871)

##### uriConstructor

> **uriConstructor**: `string` \| (`tile`) => `string`

Required. This can be a string or a callback function that constructs the URLs used to retrieve tiles from the tile source.
When using a string, the uriConstructor will allow you to specify placeholders that will be replaced with the tiles value (i.e. {quadkey}).
See the Tile URL Parameters section for a list of supported parameters.
Besides using formatted tile URLs, you can also specify a callback function as the uriConstructor. This is useful if you need to be able to
build custom tile URL’s that may require some additional calculations for a tile.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:880](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L880)

***

### IViewOptions

Represents options that can be used to set the view of the map.

#### Extended by

- [`IMapLoadOptions`](README.md#imaploadoptions)

#### Properties

##### bounds?

> `optional` **bounds**: [`LocationRect`](README.md#locationrect)

The bounding rectangle of the map view. If both bounds and center are specified, bounds takes precedence over center.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:886](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L886)

##### center?

> `optional` **center**: [`Location`](README.md#location)

The location of the center of the map view. If both bounds and center are specified, bounds takes precedence over center.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:889](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L889)

##### centerOffset?

> `optional` **centerOffset**: [`Point`](README.md#point)

The amount the center is shifted in pixels.This property is ignored if center is not specified.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:892](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L892)

##### heading?

> `optional` **heading**: `number`

The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East,
180 = South, and 270 = West.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:898](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L898)

##### labelOverlay?

> `optional` **labelOverlay**: [`LabelOverlay`](README.md#labeloverlay)

Indicates how the map labels are displayed.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:901](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L901)

##### mapTypeId?

> `optional` **mapTypeId**: [`MapTypeId`](README.md#maptypeid)

The map type of the view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:904](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L904)

##### padding?

> `optional` **padding**: `number`

The amount of padding in pixels to be added to each side of the bounds of the map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:907](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L907)

##### pitch?

> `optional` **pitch**: `number`

The angle relative to the horizon to tilt a streetside panorama image.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:910](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L910)

##### zoom?

> `optional` **zoom**: `number`

The zoom level of the map view.

###### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:913](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L913)

***

### PostModuleAction

Steps to execute after a module is loaded.

#### Properties

##### addLayerFromUrl

> **addLayerFromUrl**: `string`

A URL to load the data layer from. Currently supports data in GeoJSON, GeoRSS (with inline GML), GPX, KML, and KMZ formats.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:53](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L53)

##### geoJsonOption?

> `optional` **geoJsonOption**: [`IGeoJsonReadOptions`](README.md#igeojsonreadoptions)

Options to use when loading data via the GeoJson module.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:59](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L59)

##### geoXmlOption?

> `optional` **geoXmlOption**: [`IGeoXmlLayerOptions`](README.md#igeoxmllayeroptions)

Options to use when loading data via the GeoXml module.

###### Defined in

[src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts:56](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/ConfigurationDrivenMaps.d.ts#L56)

## Variables

### Credentials

> **Credentials**: `string`

The Bing Maps key used to load the map.

#### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:34](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L34)

## Functions

### getIsBirdseyeAvailable()

> **getIsBirdseyeAvailable**(`loc`, `heading`, `callback`): `void`

Checks to see if Birdseye imagery is available at a specified location and heading.

#### Parameters

• **loc**: [`Location`](README.md#location)

The location to check for Birdseye imagery coverage.

• **heading**: `number` \| [`Heading`](README.md#heading)

The heading of the imagery to check for. Default: 0.

• **callback**

A callback function which recieves a boolean indicating if birdseye coverage is available in the specified location or not.

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:956](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L956)

***

### loadModule()

> **loadModule**(`moduleName`, `options`?): `void`

Loads the specified registered module, making its functionality available. You can provide the name of a single module or an array of names in.
Options or a callback function that is called when the module is loaded can be specified.

#### Parameters

• **moduleName**: `string` \| `string`[]

Name of the module to load. Can be the name of a custom module or a built in module name. Built in modules:
Microsoft.Maps.Autosuggest, Microsoft.Maps.Clustering, Microsoft.Maps.DataBinning, Microsoft.Maps.Directions, Microsoft.Maps.DrawingTools, Microsoft.Maps.GeoJSON,
Microsoft.Maps.GeoXml, Microsoft.Maps.HeatMap, Microsoft.Maps.Search, Microsoft.Maps.SpatialDataService, Microsoft.Maps.SpatialMath, Microsoft.Maps.Traffic,
Microsoft.Maps.WellKnownText

• **options?**: () => `void` \| [`IModuleOptions`](README.md#imoduleoptions)

A callback function or options containing additional information and a callback to call once a module is loaded

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:929](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L929)

***

### moduleLoaded()

> **moduleLoaded**(`moduleName`): `void`

Signals that the specified module has been loaded and if specified, calls the callback function in loadModule. Call this method at the end of your custom module script.

#### Parameters

• **moduleName**: `string`

Name of the module that is loaded.

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:944](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L944)

***

### registerModule()

> **registerModule**(`moduleName`, `url`, `styles`?): `void`

Registers a module with the map control. The name of the module is specified in moduleKey, the module script is defined in scriptURL, and the
options provides the location of a *.css file to load with the module.

#### Parameters

• **moduleName**: `string`

Name of the module to load.

• **url**: `string`

Url to where the module code is located.

• **styles?**: [`IStyleUrl`](README.md#istyleurl)

List of css files to download.

#### Returns

`void`

#### Defined in

[src/types/MicrosoftMaps/Microsoft.Maps.d.ts:938](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Microsoft.Maps.d.ts#L938)

[**trackmaker**](../../../../../../../../README.md) • **Docs**

***

[trackmaker](../../../../../../../../modules.md) / [types/MicrosoftMaps/ConfigurationDrivenMaps](../../../../../README.md) / [Microsoft](../../../README.md) / [Maps](../README.md) / DrawingTools

# DrawingTools

## Enumerations

### DrawingBarAction

Values used to identify and enable the items shown in the drawing bar.

#### Enumeration Members

##### all

> **all**: `number`

All items

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:320](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L320)

##### createShapes

> **createShapes**: `number`

All shape creation items

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:323](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L323)

##### edit

> **edit**: `number`

Edit existing primitive

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:311](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L311)

##### editShapes

> **editShapes**: `number`

All shape editing items

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:326](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L326)

##### erase

> **erase**: `number`

Erase existing primitive

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:308](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L308)

##### fillStyle

> **fillStyle**: `number`

Change fill style

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:317](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L317)

##### point

> **point**: `number`

Create point primitive

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:299](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L299)

##### polygon

> **polygon**: `number`

Create polygon primitive

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:305](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L305)

##### polyline

> **polyline**: `number`

Create polyline primitive

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:302](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L302)

##### strokeStyle

> **strokeStyle**: `number`

Change stroke style

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:314](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L314)

##### styleShapes

> **styleShapes**: `number`

All shape styling items

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:329](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L329)

***

### DrawingMode

The different drawing modes that the drawing manager can be set to.

#### Requires

The Microsoft.Maps.DrawingTools module.

#### Enumeration Members

##### edit

> **edit**: `number`

Edit an existing shape. Click on a shape to edit it.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:264](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L264)

##### erase

> **erase**: `number`

Erase and existing shape. Click on the shapes to erase them.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:267](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L267)

##### none

> **none**: `number`

Sets the drawing manager into an idle mode.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:270](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L270)

##### polygon

> **polygon**: `number`

Allow the user to draw a polygon.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:273](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L273)

##### polyline

> **polyline**: `number`

Allow the user to draw a polyline.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:276](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L276)

##### pushpin

> **pushpin**: `number`

Allow the user to draw a pushpin.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:279](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L279)

***

### ShapeType

The different types of shapes that are created or edited by the drawing tools.

#### Requires

The Microsoft.Maps.DrawingTools module.

#### Enumeration Members

##### polygon

> **polygon**: `number`

A polygon shape type.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:288](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L288)

##### polyline

> **polyline**: `number`

A polyline shape type.

###### Defined in

[src/types/MicrosoftMaps/Modules/DrawingTools.d.ts:291](https://github.com/Anson2251/trackmaker/blob/852db12d0b72b755ac57c96b03b560323c9f2041/src/types/MicrosoftMaps/Modules/DrawingTools.d.ts#L291)

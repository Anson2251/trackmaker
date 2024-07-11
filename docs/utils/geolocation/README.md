[**trackmaker**](../../README.md) • **Docs**

***

[trackmaker](../../modules.md) / utils/geolocation

# utils/geolocation

## Index

### Namespaces

- [Conversion](namespaces/Conversion.md)
- [UpdateService](namespaces/UpdateService.md)

## Interfaces

### GeoJSONPoint

#### Properties

##### coordinates

> **coordinates**: [`number`, `number`]

###### Defined in

[src/utils/geolocation.ts:10](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L10)

##### type

> **type**: `"Point"`

###### Defined in

[src/utils/geolocation.ts:9](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L9)

***

### GeographicPoint

#### Properties

##### latitude

> **latitude**: `number`

###### Defined in

[src/utils/geolocation.ts:4](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L4)

##### longitude

> **longitude**: `number`

###### Defined in

[src/utils/geolocation.ts:5](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L5)

## Variables

### supportGeolocation

> `const` **supportGeolocation**: `true` = `!!navigator.geolocation`

#### Defined in

[src/utils/geolocation.ts:30](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L30)

## Functions

### clonePoint()

> **clonePoint**\<`T`\>(`point`): `T`

#### Type Parameters

• **T**

#### Parameters

• **point**: `T`

#### Returns

`T`

#### Defined in

[src/utils/geolocation.ts:32](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L32)

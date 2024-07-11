[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / [utils/geolocation](../README.md) / UpdateService

# UpdateService

## Variables

### updateServiceStarted

> **updateServiceStarted**: `boolean` = `false`

#### Defined in

[src/utils/geolocation.ts:62](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L62)

***

### updateServiceUpdating

> **updateServiceUpdating**: `boolean` = `true`

#### Defined in

[src/utils/geolocation.ts:63](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L63)

## Functions

### addListener()

> **addListener**(`callback`, `init`): `void`

#### Parameters

• **callback**

• **init**: `boolean` = `false`

#### Returns

`void`

#### Defined in

[src/utils/geolocation.ts:103](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L103)

***

### getPresent()

> **getPresent**(): [`GeographicPoint`](../README.md#geographicpoint)

#### Returns

[`GeographicPoint`](../README.md#geographicpoint)

#### Defined in

[src/utils/geolocation.ts:65](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L65)

***

### isStarted()

> **isStarted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/utils/geolocation.ts:66](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L66)

***

### isUpdating()

> **isUpdating**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/utils/geolocation.ts:67](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L67)

***

### removeListener()

> **removeListener**(`id`): `void`

#### Parameters

• **id**: `number`

#### Returns

`void`

#### Defined in

[src/utils/geolocation.ts:108](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L108)

***

### start()

> **start**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/utils/geolocation.ts:69](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L69)

***

### stop()

> **stop**(`id`): `void`

#### Parameters

• **id**: `number`

#### Returns

`void`

#### Defined in

[src/utils/geolocation.ts:98](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/geolocation.ts#L98)

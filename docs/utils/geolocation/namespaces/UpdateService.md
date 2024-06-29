[**trackmaker**](../../../README.md) • **Docs**

***

[trackmaker](../../../modules.md) / [utils/geolocation](../README.md) / UpdateService

# UpdateService

## Variables

### updateServiceStarted

> **updateServiceStarted**: `boolean` = `false`

#### Defined in

[src/utils/geolocation.ts:58](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L58)

***

### updateServiceUpdating

> **updateServiceUpdating**: `boolean` = `true`

#### Defined in

[src/utils/geolocation.ts:59](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L59)

## Functions

### addListener()

> **addListener**(`callback`, `init`): `void`

#### Parameters

• **callback**

• **init**: `boolean` = `false`

#### Returns

`void`

#### Defined in

[src/utils/geolocation.ts:99](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L99)

***

### getPresent()

> **getPresent**(): [`GeographicPoint`](../README.md#geographicpoint)

#### Returns

[`GeographicPoint`](../README.md#geographicpoint)

#### Defined in

[src/utils/geolocation.ts:61](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L61)

***

### isStarted()

> **isStarted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/utils/geolocation.ts:62](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L62)

***

### isUpdating()

> **isUpdating**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/utils/geolocation.ts:63](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L63)

***

### removeListener()

> **removeListener**(`id`): `void`

#### Parameters

• **id**: `number`

#### Returns

`void`

#### Defined in

[src/utils/geolocation.ts:104](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L104)

***

### start()

> **start**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/utils/geolocation.ts:65](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L65)

***

### stop()

> **stop**(`id`): `void`

#### Parameters

• **id**: `number`

#### Returns

`void`

#### Defined in

[src/utils/geolocation.ts:94](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/utils/geolocation.ts#L94)

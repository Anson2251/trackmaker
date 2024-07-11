[**trackmaker**](../README.md) • **Docs**

***

[trackmaker](../modules.md) / utils/bidirectional-map

# utils/bidirectional-map

## References

### default

Renames and re-exports [BidirectionalMap](bidirectional-map.md#bidirectionalmaptu)

## Classes

### BidirectionalMap\<T, U\>

Class representing a bidirectional map.

#### Type Parameters

• **T**

The type of the keys in the forward map.

• **U**

The type of the values in the forward map.

#### Constructors

##### new BidirectionalMap()

> **new BidirectionalMap**\<`T`, `U`\>(`data`): [`BidirectionalMap`](bidirectional-map.md#bidirectionalmaptu)\<`T`, `U`\>

Constructs a new bidirectional map.

###### Parameters

• **data**: `object`[] = `[]`

The initial data to populate the map with.

###### Returns

[`BidirectionalMap`](bidirectional-map.md#bidirectionalmaptu)\<`T`, `U`\>

###### Defined in

[src/utils/bidirectional-map.ts:21](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L21)

#### Methods

##### backwardKeys()

> **backwardKeys**(): `U`[]

Returns an array of all the values in the backward map.

###### Returns

`U`[]

An array of all the values in the backward map.

###### Defined in

[src/utils/bidirectional-map.ts:86](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L86)

##### forwardKeys()

> **forwardKeys**(): `T`[]

Returns an array of all the keys in the forward map.

###### Returns

`T`[]

An array of all the keys in the forward map.

###### Defined in

[src/utils/bidirectional-map.ts:78](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L78)

##### getBackward()

> **getBackward**(`key`): `undefined` \| `T`

Returns the key associated with the given value in the backward map.

###### Parameters

• **key**: `U`

The value to look up.

###### Returns

`undefined` \| `T`

The key associated with the value, or undefined if the value is not in the map.

###### Defined in

[src/utils/bidirectional-map.ts:42](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L42)

##### getForward()

> **getForward**(`key`): `undefined` \| `U`

Returns the value associated with the given key in the forward map.

###### Parameters

• **key**: `T`

The key to look up.

###### Returns

`undefined` \| `U`

The value associated with the key, or undefined if the key is not in the map.

###### Defined in

[src/utils/bidirectional-map.ts:33](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L33)

##### hasBackward()

> **hasBackward**(`key`): `boolean`

Returns whether the given value is in the backward map.

###### Parameters

• **key**: `U`

The value to check.

###### Returns

`boolean`

Whether the value is in the backward map.

###### Defined in

[src/utils/bidirectional-map.ts:120](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L120)

##### hasForward()

> **hasForward**(`key`): `boolean`

Returns whether the given key is in the forward map.

###### Parameters

• **key**: `T`

The key to check.

###### Returns

`boolean`

Whether the key is in the forward map.

###### Defined in

[src/utils/bidirectional-map.ts:111](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L111)

##### iterateBackward()

> **iterateBackward**(`callback`): `void`

Iterates over the backward map, calling the given callback function for each key-value pair.

###### Parameters

• **callback**

The callback function to call for each key-value pair.

###### Returns

`void`

###### Defined in

[src/utils/bidirectional-map.ts:102](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L102)

##### iterateForward()

> **iterateForward**(`callback`): `void`

Iterates over the forward map, calling the given callback function for each key-value pair.

###### Parameters

• **callback**

The callback function to call for each key-value pair.

###### Returns

`void`

###### Defined in

[src/utils/bidirectional-map.ts:94](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L94)

##### removeBackward()

> **removeBackward**(`key`): `void`

Removes the value and its associated key in both the forward and backward maps.

###### Parameters

• **key**: `U`

The value to remove.

###### Returns

`void`

###### Defined in

[src/utils/bidirectional-map.ts:69](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L69)

##### removeForward()

> **removeForward**(`key`): `void`

Removes the key and its associated value in both the forward and backward maps.

###### Parameters

• **key**: `T`

The key to remove.

###### Returns

`void`

###### Defined in

[src/utils/bidirectional-map.ts:60](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L60)

##### set()

> **set**(`key1`, `key2`): `void`

Sets the value associated with the given key in the forward map, and its associated key in the backward map.

###### Parameters

• **key1**: `T`

The key to set.

• **key2**: `U`

The value to set.

###### Returns

`void`

###### Defined in

[src/utils/bidirectional-map.ts:51](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/utils/bidirectional-map.ts#L51)

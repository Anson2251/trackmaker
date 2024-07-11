[**trackmaker**](../README.md) • **Docs**

***

[trackmaker](../modules.md) / stores/counter

# stores/counter

## Functions

### useCounterStore()

> **useCounterStore**(`pinia`?, `hot`?): `Store`\<`"counter"`, `_UnwrapAll`\<`Pick`\<`object`, `"count"`\>\>, `Pick`\<`object`, `"doubleCount"`\>, `Pick`\<`object`, `"increment"`\>\>

Returns a store, creates it if necessary.

#### Parameters

• **pinia?**: `null` \| `Pinia`

Pinia instance to retrieve the store

• **hot?**: `StoreGeneric`

dev only hot module replacement

#### Returns

`Store`\<`"counter"`, `_UnwrapAll`\<`Pick`\<`object`, `"count"`\>\>, `Pick`\<`object`, `"doubleCount"`\>, `Pick`\<`object`, `"increment"`\>\>

#### Defined in

[src/stores/counter.ts:4](https://github.com/Anson2251/trackmaker/blob/542e2b29ae5b4a888f6d924839d95f01680fd96f/src/stores/counter.ts#L4)

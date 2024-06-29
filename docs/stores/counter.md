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

[src/stores/counter.ts:4](https://github.com/Anson2251/trackmaker/blob/79fb765ba97780e527d64c6c60143ef30e165330/src/stores/counter.ts#L4)

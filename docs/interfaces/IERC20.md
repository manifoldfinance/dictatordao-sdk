[dictatordao-sdk](../README.md) / [Exports](../modules.md) / IERC20

# Interface: IERC20

## Hierarchy

- `BaseContract`

  ↳ **`IERC20`**

## Table of contents

### Properties

- [\_deployedPromise](IERC20.md#_deployedpromise)
- [\_runningEvents](IERC20.md#_runningevents)
- [\_wrappedEmits](IERC20.md#_wrappedemits)
- [address](IERC20.md#address)
- [callStatic](IERC20.md#callstatic)
- [deployTransaction](IERC20.md#deploytransaction)
- [estimateGas](IERC20.md#estimategas)
- [filters](IERC20.md#filters)
- [functions](IERC20.md#functions)
- [interface](IERC20.md#interface)
- [off](IERC20.md#off)
- [on](IERC20.md#on)
- [once](IERC20.md#once)
- [populateTransaction](IERC20.md#populatetransaction)
- [provider](IERC20.md#provider)
- [removeListener](IERC20.md#removelistener)
- [resolvedAddress](IERC20.md#resolvedaddress)
- [signer](IERC20.md#signer)

### Methods

- [\_checkRunningEvents](IERC20.md#_checkrunningevents)
- [\_deployed](IERC20.md#_deployed)
- [\_wrapEvent](IERC20.md#_wrapevent)
- [allowance](IERC20.md#allowance)
- [approve](IERC20.md#approve)
- [attach](IERC20.md#attach)
- [balanceOf](IERC20.md#balanceof)
- [connect](IERC20.md#connect)
- [deployed](IERC20.md#deployed)
- [emit](IERC20.md#emit)
- [fallback](IERC20.md#fallback)
- [listenerCount](IERC20.md#listenercount)
- [listeners](IERC20.md#listeners)
- [permit](IERC20.md#permit)
- [queryFilter](IERC20.md#queryfilter)
- [removeAllListeners](IERC20.md#removealllisteners)
- [totalSupply](IERC20.md#totalsupply)
- [transfer](IERC20.md#transfer)
- [transferFrom](IERC20.md#transferfrom)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:102

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:77

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/IERC20.ts:210](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L210)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:97

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/IERC20.ts:276](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L276)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/IERC20.ts:252](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L252)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/IERC20.ts:128](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L128)

___

### interface

• **interface**: [`IERC20Interface`](IERC20Interface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/IERC20.ts:107](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L107)

___

### off

• **off**: `OnEvent`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/IERC20.ts:123](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L123)

___

### on

• **on**: `OnEvent`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/IERC20.ts:124](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L124)

___

### once

• **once**: `OnEvent`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/IERC20.ts:125](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L125)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/IERC20.ts:318](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L318)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### removeListener

• **removeListener**: `OnEvent`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/IERC20.ts:126](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L126)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:96

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:119

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:120

___

### allowance

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/IERC20.ts:170](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L170)

___

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/IERC20.ts:176](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L176)

___

### attach

▸ **attach**(`addressOrName`): [`IERC20`](IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC20`](IERC20.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/IERC20.ts:104](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L104)

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/IERC20.ts:182](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L182)

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC20`](IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC20`](IERC20.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/IERC20.ts:103](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L103)

___

### deployed

▸ **deployed**(): `Promise`<[`IERC20`](IERC20.md)\>

#### Returns

`Promise`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/IERC20.ts:105](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L105)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:125

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:113

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:126

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

[src/IERC20.ts:115](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L115)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

[src/IERC20.ts:118](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L118)

___

### permit

▸ **permit**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `value` | `BigNumberish` |
| `deadline` | `BigNumberish` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/IERC20.ts:184](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L184)

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

[src/IERC20.ts:109](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L109)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IERC20`](IERC20.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IERC20`](IERC20.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/IERC20.ts:119](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L119)

▸ **removeAllListeners**(`eventName?`): [`IERC20`](IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC20`](IERC20.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/IERC20.ts:122](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L122)

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/IERC20.ts:195](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L195)

___

### transfer

▸ **transfer**(`to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/IERC20.ts:197](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L197)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/IERC20.ts:203](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L203)

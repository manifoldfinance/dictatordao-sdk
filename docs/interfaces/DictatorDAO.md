[dictatordao-sdk](../README.md) / [Exports](../modules.md) / DictatorDAO

# Interface: DictatorDAO

## Hierarchy

- `BaseContract`

  ↳ **`DictatorDAO`**

## Table of contents

### Properties

- [\_deployedPromise](DictatorDAO.md#_deployedpromise)
- [\_runningEvents](DictatorDAO.md#_runningevents)
- [\_wrappedEmits](DictatorDAO.md#_wrappedemits)
- [address](DictatorDAO.md#address)
- [callStatic](DictatorDAO.md#callstatic)
- [deployTransaction](DictatorDAO.md#deploytransaction)
- [estimateGas](DictatorDAO.md#estimategas)
- [filters](DictatorDAO.md#filters)
- [functions](DictatorDAO.md#functions)
- [interface](DictatorDAO.md#interface)
- [off](DictatorDAO.md#off)
- [on](DictatorDAO.md#on)
- [once](DictatorDAO.md#once)
- [populateTransaction](DictatorDAO.md#populatetransaction)
- [provider](DictatorDAO.md#provider)
- [removeListener](DictatorDAO.md#removelistener)
- [resolvedAddress](DictatorDAO.md#resolvedaddress)
- [signer](DictatorDAO.md#signer)

### Methods

- [DELAY](DictatorDAO.md#delay)
- [DOMAIN\_SEPARATOR](DictatorDAO.md#domain_separator)
- [GRACE\_PERIOD](DictatorDAO.md#grace_period)
- [\_checkRunningEvents](DictatorDAO.md#_checkrunningevents)
- [\_deployed](DictatorDAO.md#_deployed)
- [\_wrapEvent](DictatorDAO.md#_wrapevent)
- [allowance](DictatorDAO.md#allowance)
- [approve](DictatorDAO.md#approve)
- [attach](DictatorDAO.md#attach)
- [balanceOf](DictatorDAO.md#balanceof)
- [burn](DictatorDAO.md#burn)
- [burnFrom](DictatorDAO.md#burnfrom)
- [cancelTransaction](DictatorDAO.md#canceltransaction)
- [connect](DictatorDAO.md#connect)
- [decimals](DictatorDAO.md#decimals)
- [deployed](DictatorDAO.md#deployed)
- [emit](DictatorDAO.md#emit)
- [executeTransaction](DictatorDAO.md#executetransaction)
- [fallback](DictatorDAO.md#fallback)
- [listenerCount](DictatorDAO.md#listenercount)
- [listeners](DictatorDAO.md#listeners)
- [mint](DictatorDAO.md#mint)
- [name](DictatorDAO.md#name)
- [nonces](DictatorDAO.md#nonces)
- [operator](DictatorDAO.md#operator)
- [pendingOperator](DictatorDAO.md#pendingoperator)
- [pendingOperatorTime](DictatorDAO.md#pendingoperatortime)
- [permit](DictatorDAO.md#permit)
- [queryFilter](DictatorDAO.md#queryfilter)
- [queueTransaction](DictatorDAO.md#queuetransaction)
- [queuedTransactions](DictatorDAO.md#queuedtransactions)
- [removeAllListeners](DictatorDAO.md#removealllisteners)
- [setOperator](DictatorDAO.md#setoperator)
- [symbol](DictatorDAO.md#symbol)
- [token](DictatorDAO.md#token)
- [totalSupply](DictatorDAO.md#totalsupply)
- [transfer](DictatorDAO.md#transfer)
- [transferFrom](DictatorDAO.md#transferfrom)
- [userVote](DictatorDAO.md#uservote)
- [users](DictatorDAO.md#users)
- [vote](DictatorDAO.md#vote)
- [votes](DictatorDAO.md#votes)

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
| `DELAY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `GRACE_PERIOD` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`to`: `string`, `shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `burnFrom` | (`from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `cancelTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `executeTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `mint` | (`amount`: `BigNumberish`, `operatorVote`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nonces` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `operator` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `pendingOperator` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `pendingOperatorTime` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner_`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `queueTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `queuedTransactions` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setOperator` | (`newOperator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `token` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `userVote` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `users` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `balance`: `BigNumber` ; `lockedUntil`: `BigNumber`  }\> |
| `vote` | (`operatorVote`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `votes` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/DictatorDAO.ts:552](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L552)

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
| `DELAY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `GRACE_PERIOD` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `burnFrom` | (`from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `executeTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint` | (`amount`: `BigNumberish`, `operatorVote`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `operator` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingOperator` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingOperatorTime` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner_`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `queueTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `queuedTransactions` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setOperator` | (`newOperator`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `userVote` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `users` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `vote` | (`operatorVote`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `votes` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/DictatorDAO.ts:741](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L741)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => [`ApprovalEventFilter`](../modules.md#approvaleventfilter) |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => [`ApprovalEventFilter`](../modules.md#approvaleventfilter) |
| `CancelTransaction` | (`txHash?`: ``null`` \| `BytesLike`, `target?`: ``null`` \| `string`, `value?`: ``null``, `data?`: ``null``) => [`CancelTransactionEventFilter`](../modules.md#canceltransactioneventfilter) |
| `CancelTransaction(bytes32,address,uint256,bytes)` | (`txHash?`: ``null`` \| `BytesLike`, `target?`: ``null`` \| `string`, `value?`: ``null``, `data?`: ``null``) => [`CancelTransactionEventFilter`](../modules.md#canceltransactioneventfilter) |
| `ExecuteTransaction` | (`txHash?`: ``null`` \| `BytesLike`, `target?`: ``null`` \| `string`, `value?`: ``null``, `data?`: ``null``) => [`ExecuteTransactionEventFilter`](../modules.md#executetransactioneventfilter) |
| `ExecuteTransaction(bytes32,address,uint256,bytes)` | (`txHash?`: ``null`` \| `BytesLike`, `target?`: ``null`` \| `string`, `value?`: ``null``, `data?`: ``null``) => [`ExecuteTransactionEventFilter`](../modules.md#executetransactioneventfilter) |
| `QueueTransaction` | (`txHash?`: ``null`` \| `BytesLike`, `target?`: ``null`` \| `string`, `value?`: ``null``, `data?`: ``null``, `eta?`: ``null``) => [`QueueTransactionEventFilter`](../modules.md#queuetransactioneventfilter) |
| `QueueTransaction(bytes32,address,uint256,bytes,uint256)` | (`txHash?`: ``null`` \| `BytesLike`, `target?`: ``null`` \| `string`, `value?`: ``null``, `data?`: ``null``, `eta?`: ``null``) => [`QueueTransactionEventFilter`](../modules.md#queuetransactioneventfilter) |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => [`TransferEventFilter`](../modules.md#transfereventfilter) |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => [`TransferEventFilter`](../modules.md#transfereventfilter) |

#### Overrides

BaseContract.filters

#### Defined in

[src/DictatorDAO.ts:676](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L676)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DELAY` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `GRACE_PERIOD` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `burn` | (`to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `burnFrom` | (`from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `executeTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint` | (`amount`: `BigNumberish`, `operatorVote`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nonces` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `operator` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `pendingOperator` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `pendingOperatorTime` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `permit` | (`owner_`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `queueTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `queuedTransactions` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `setOperator` | (`newOperator`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `token` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `userVote` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `users` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `balance`: `BigNumber` ; `lockedUntil`: `BigNumber`  }\> |
| `vote` | (`operatorVote`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `votes` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/DictatorDAO.ts:291](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L291)

___

### interface

• **interface**: [`DictatorDAOInterface`](DictatorDAOInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/DictatorDAO.ts:270](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L270)

___

### off

• **off**: `OnEvent`<[`DictatorDAO`](DictatorDAO.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/DictatorDAO.ts:286](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L286)

___

### on

• **on**: `OnEvent`<[`DictatorDAO`](DictatorDAO.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/DictatorDAO.ts:287](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L287)

___

### once

• **once**: `OnEvent`<[`DictatorDAO`](DictatorDAO.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/DictatorDAO.ts:288](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L288)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DELAY` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `GRACE_PERIOD` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burn` | (`to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `burnFrom` | (`from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `executeTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`amount`: `BigNumberish`, `operatorVote`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `operator` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingOperator` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingOperatorTime` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner_`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `queueTransaction` | (`target`: `string`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `queuedTransactions` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setOperator` | (`newOperator`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `userVote` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `users` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `vote` | (`operatorVote`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `votes` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/DictatorDAO.ts:866](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L866)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### removeListener

• **removeListener**: `OnEvent`<[`DictatorDAO`](DictatorDAO.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/DictatorDAO.ts:289](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L289)

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

### DELAY

▸ **DELAY**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/DictatorDAO.ts:424](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L424)

___

### DOMAIN\_SEPARATOR

▸ **DOMAIN_SEPARATOR**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/DictatorDAO.ts:426](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L426)

___

### GRACE\_PERIOD

▸ **GRACE_PERIOD**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/DictatorDAO.ts:428](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L428)

___

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

▸ **allowance**(`arg0`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/DictatorDAO.ts:430](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L430)

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

[src/DictatorDAO.ts:436](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L436)

___

### attach

▸ **attach**(`addressOrName`): [`DictatorDAO`](DictatorDAO.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`DictatorDAO`](DictatorDAO.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/DictatorDAO.ts:267](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L267)

___

### balanceOf

▸ **balanceOf**(`user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/DictatorDAO.ts:442](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L442)

___

### burn

▸ **burn**(`to`, `shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:444](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L444)

___

### burnFrom

▸ **burnFrom**(`from`, `to`, `shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:450](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L450)

___

### cancelTransaction

▸ **cancelTransaction**(`target`, `value`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `value` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:457](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L457)

___

### connect

▸ **connect**(`signerOrProvider`): [`DictatorDAO`](DictatorDAO.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`DictatorDAO`](DictatorDAO.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/DictatorDAO.ts:266](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L266)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/DictatorDAO.ts:464](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L464)

___

### deployed

▸ **deployed**(): `Promise`<[`DictatorDAO`](DictatorDAO.md)\>

#### Returns

`Promise`<[`DictatorDAO`](DictatorDAO.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/DictatorDAO.ts:268](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L268)

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

### executeTransaction

▸ **executeTransaction**(`target`, `value`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `value` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:466](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L466)

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

[src/DictatorDAO.ts:278](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L278)

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

[src/DictatorDAO.ts:281](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L281)

___

### mint

▸ **mint**(`amount`, `operatorVote`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `operatorVote` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:473](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L473)

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/DictatorDAO.ts:479](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L479)

___

### nonces

▸ **nonces**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/DictatorDAO.ts:481](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L481)

___

### operator

▸ **operator**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/DictatorDAO.ts:483](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L483)

___

### pendingOperator

▸ **pendingOperator**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/DictatorDAO.ts:485](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L485)

___

### pendingOperatorTime

▸ **pendingOperatorTime**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/DictatorDAO.ts:487](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L487)

___

### permit

▸ **permit**(`owner_`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
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

[src/DictatorDAO.ts:489](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L489)

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

[src/DictatorDAO.ts:272](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L272)

___

### queueTransaction

▸ **queueTransaction**(`target`, `value`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `value` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:500](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L500)

___

### queuedTransactions

▸ **queuedTransactions**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/DictatorDAO.ts:507](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L507)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`DictatorDAO`](DictatorDAO.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`DictatorDAO`](DictatorDAO.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/DictatorDAO.ts:282](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L282)

▸ **removeAllListeners**(`eventName?`): [`DictatorDAO`](DictatorDAO.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`DictatorDAO`](DictatorDAO.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/DictatorDAO.ts:285](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L285)

___

### setOperator

▸ **setOperator**(`newOperator`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOperator` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:512](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L512)

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/DictatorDAO.ts:517](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L517)

___

### token

▸ **token**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/DictatorDAO.ts:519](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L519)

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

[src/DictatorDAO.ts:521](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L521)

___

### transfer

▸ **transfer**(`to`, `shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:523](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L523)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:529](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L529)

___

### userVote

▸ **userVote**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/DictatorDAO.ts:536](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L536)

___

### users

▸ **users**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `balance`: `BigNumber` ; `lockedUntil`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `balance`: `BigNumber` ; `lockedUntil`: `BigNumber`  }\>

#### Defined in

[src/DictatorDAO.ts:538](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L538)

___

### vote

▸ **vote**(`operatorVote`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operatorVote` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/DictatorDAO.ts:545](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L545)

___

### votes

▸ **votes**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/DictatorDAO.ts:550](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L550)

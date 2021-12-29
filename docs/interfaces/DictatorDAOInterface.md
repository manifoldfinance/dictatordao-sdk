[dictatordao-sdk](../README.md) / [Exports](../modules.md) / DictatorDAOInterface

# Interface: DictatorDAOInterface

## Hierarchy

- `Interface`

  ↳ **`DictatorDAOInterface`**

## Table of contents

### Properties

- [\_abiCoder](DictatorDAOInterface.md#_abicoder)
- [\_isInterface](DictatorDAOInterface.md#_isinterface)
- [deploy](DictatorDAOInterface.md#deploy)
- [errors](DictatorDAOInterface.md#errors)
- [events](DictatorDAOInterface.md#events)
- [fragments](DictatorDAOInterface.md#fragments)
- [functions](DictatorDAOInterface.md#functions)
- [structs](DictatorDAOInterface.md#structs)

### Methods

- [\_decodeParams](DictatorDAOInterface.md#_decodeparams)
- [\_encodeParams](DictatorDAOInterface.md#_encodeparams)
- [decodeErrorResult](DictatorDAOInterface.md#decodeerrorresult)
- [decodeEventLog](DictatorDAOInterface.md#decodeeventlog)
- [decodeFunctionData](DictatorDAOInterface.md#decodefunctiondata)
- [decodeFunctionResult](DictatorDAOInterface.md#decodefunctionresult)
- [encodeDeploy](DictatorDAOInterface.md#encodedeploy)
- [encodeErrorResult](DictatorDAOInterface.md#encodeerrorresult)
- [encodeEventLog](DictatorDAOInterface.md#encodeeventlog)
- [encodeFilterTopics](DictatorDAOInterface.md#encodefiltertopics)
- [encodeFunctionData](DictatorDAOInterface.md#encodefunctiondata)
- [encodeFunctionResult](DictatorDAOInterface.md#encodefunctionresult)
- [format](DictatorDAOInterface.md#format)
- [getError](DictatorDAOInterface.md#geterror)
- [getEvent](DictatorDAOInterface.md#getevent)
- [getEventTopic](DictatorDAOInterface.md#geteventtopic)
- [getFunction](DictatorDAOInterface.md#getfunction)
- [getSighash](DictatorDAOInterface.md#getsighash)
- [parseError](DictatorDAOInterface.md#parseerror)
- [parseLog](DictatorDAOInterface.md#parselog)
- [parseTransaction](DictatorDAOInterface.md#parsetransaction)

## Properties

### \_abiCoder

• `Readonly` **\_abiCoder**: `AbiCoder`

#### Inherited from

utils.Interface.\_abiCoder

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:50

___

### \_isInterface

• `Readonly` **\_isInterface**: `boolean`

#### Inherited from

utils.Interface.\_isInterface

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:51

___

### deploy

• `Readonly` **deploy**: `ConstructorFragment`

#### Inherited from

utils.Interface.deploy

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:49

___

### errors

• `Readonly` **errors**: `Object`

#### Index signature

▪ [name: `string`]: `ErrorFragment`

#### Inherited from

utils.Interface.errors

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:37

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval(address,address,uint256)` | `EventFragment` |
| `CancelTransaction(bytes32,address,uint256,bytes)` | `EventFragment` |
| `ExecuteTransaction(bytes32,address,uint256,bytes)` | `EventFragment` |
| `QueueTransaction(bytes32,address,uint256,bytes,uint256)` | `EventFragment` |
| `Transfer(address,address,uint256)` | `EventFragment` |

#### Overrides

utils.Interface.events

#### Defined in

[src/DictatorDAO.ts:209](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L209)

___

### fragments

• `Readonly` **fragments**: readonly `Fragment`[]

#### Inherited from

utils.Interface.fragments

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:36

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DELAY()` | `FunctionFragment` |
| `DOMAIN_SEPARATOR()` | `FunctionFragment` |
| `GRACE_PERIOD()` | `FunctionFragment` |
| `allowance(address,address)` | `FunctionFragment` |
| `approve(address,uint256)` | `FunctionFragment` |
| `balanceOf(address)` | `FunctionFragment` |
| `burn(address,uint256)` | `FunctionFragment` |
| `burnFrom(address,address,uint256)` | `FunctionFragment` |
| `cancelTransaction(address,uint256,bytes)` | `FunctionFragment` |
| `decimals()` | `FunctionFragment` |
| `executeTransaction(address,uint256,bytes)` | `FunctionFragment` |
| `mint(uint256,address)` | `FunctionFragment` |
| `name()` | `FunctionFragment` |
| `nonces(address)` | `FunctionFragment` |
| `operator()` | `FunctionFragment` |
| `pendingOperator()` | `FunctionFragment` |
| `pendingOperatorTime()` | `FunctionFragment` |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | `FunctionFragment` |
| `queueTransaction(address,uint256,bytes)` | `FunctionFragment` |
| `queuedTransactions(bytes32)` | `FunctionFragment` |
| `setOperator(address)` | `FunctionFragment` |
| `symbol()` | `FunctionFragment` |
| `token()` | `FunctionFragment` |
| `totalSupply()` | `FunctionFragment` |
| `transfer(address,uint256)` | `FunctionFragment` |
| `transferFrom(address,address,uint256)` | `FunctionFragment` |
| `userVote(address)` | `FunctionFragment` |
| `users(address)` | `FunctionFragment` |
| `vote(address)` | `FunctionFragment` |
| `votes(address)` | `FunctionFragment` |

#### Overrides

utils.Interface.functions

#### Defined in

[src/DictatorDAO.ts:22](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L22)

___

### structs

• `Readonly` **structs**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

utils.Interface.structs

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:46

## Methods

### \_decodeParams

▸ **_decodeParams**(`params`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly `ParamType`[] |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.\_decodeParams

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:63

___

### \_encodeParams

▸ **_encodeParams**(`params`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly `ParamType`[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.\_encodeParams

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:64

___

### decodeErrorResult

▸ **decodeErrorResult**(`fragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `ErrorFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeErrorResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:66

___

### decodeEventLog

▸ **decodeEventLog**(`eventFragment`, `data`, `topics?`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |
| `data` | `BytesLike` |
| `topics?` | readonly `string`[] |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeEventLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:77

___

### decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeFunctionData

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:68

___

### decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"DELAY"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:145](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L145)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"DOMAIN_SEPARATOR"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:146](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L146)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"GRACE_PERIOD"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:150](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L150)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"allowance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:154](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L154)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:155](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L155)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:156](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L156)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"burn"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:157](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L157)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"burnFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:158](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L158)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelTransaction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:159](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L159)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decimals"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:163](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L163)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"executeTransaction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:164](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L164)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:168](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L168)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:169](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L169)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"nonces"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:170](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L170)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"operator"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:171](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L171)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingOperator"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:172](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L172)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingOperatorTime"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:176](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L176)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"permit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:180](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L180)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"queueTransaction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:181](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L181)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"queuedTransactions"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:185](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L185)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setOperator"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:189](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L189)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"symbol"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:193](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L193)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"token"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:194](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L194)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:195](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L195)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transfer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:199](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L199)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:200](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L200)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"userVote"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:204](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L204)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"users"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:205](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L205)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"vote"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:206](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L206)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"votes"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/DictatorDAO.ts:207](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L207)

___

### encodeDeploy

▸ **encodeDeploy**(`values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeDeploy

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:65

___

### encodeErrorResult

▸ **encodeErrorResult**(`fragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `ErrorFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeErrorResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:67

___

### encodeEventLog

▸ **encodeEventLog**(`eventFragment`, `values`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `EventFragment` |
| `values` | readonly `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics` | `string`[] |

#### Inherited from

utils.Interface.encodeEventLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:73

___

### encodeFilterTopics

▸ **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `EventFragment` |
| `values` | readonly `any`[] |

#### Returns

(`string` \| `string`[])[]

#### Inherited from

utils.Interface.encodeFilterTopics

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:72

___

### encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"DELAY"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:55](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L55)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"DOMAIN_SEPARATOR"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:56](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L56)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"GRACE_PERIOD"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:60](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L60)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"allowance"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:64](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L64)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:68](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L68)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:72](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L72)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"burn"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:73](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L73)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"burnFrom"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:77](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L77)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelTransaction"`` |
| `values` | [`string`, `BigNumberish`, `BytesLike`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:81](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L81)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decimals"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:85](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L85)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"executeTransaction"`` |
| `values` | [`string`, `BigNumberish`, `BytesLike`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:86](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L86)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:90](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L90)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:94](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L94)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"nonces"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:95](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L95)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"operator"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:96](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L96)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingOperator"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:97](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L97)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingOperatorTime"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:101](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L101)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"permit"`` |
| `values` | [`string`, `string`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `BytesLike`, `BytesLike`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:105](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L105)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"queueTransaction"`` |
| `values` | [`string`, `BigNumberish`, `BytesLike`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:117](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L117)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"queuedTransactions"`` |
| `values` | [`BytesLike`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:121](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L121)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setOperator"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:125](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L125)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"symbol"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:126](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L126)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"token"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:127](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L127)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:128](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L128)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transfer"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:132](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L132)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:136](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L136)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"userVote"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:140](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L140)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"users"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:141](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L141)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"vote"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:142](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L142)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"votes"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/DictatorDAO.ts:143](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L143)

___

### encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeFunctionResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:71

___

### format

▸ **format**(`format?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string` \| `string`[]

#### Inherited from

utils.Interface.format

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:53

___

### getError

▸ **getError**(`nameOrSignatureOrSighash`): `ErrorFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

`ErrorFragment`

#### Inherited from

utils.Interface.getError

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:60

___

### getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Approval"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/DictatorDAO.ts:217](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L217)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CancelTransaction"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/DictatorDAO.ts:218](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L218)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExecuteTransaction"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/DictatorDAO.ts:219](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L219)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"QueueTransaction"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/DictatorDAO.ts:220](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L220)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Transfer"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/DictatorDAO.ts:221](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L221)

___

### getEventTopic

▸ **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |

#### Returns

`string`

#### Inherited from

utils.Interface.getEventTopic

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:62

___

### getFunction

▸ **getFunction**(`nameOrSignatureOrSighash`): `FunctionFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

`FunctionFragment`

#### Inherited from

utils.Interface.getFunction

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:58

___

### getSighash

▸ **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `FunctionFragment` \| `ErrorFragment` |

#### Returns

`string`

#### Inherited from

utils.Interface.getSighash

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:61

___

### parseError

▸ **parseError**(`data`): `ErrorDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike` |

#### Returns

`ErrorDescription`

#### Inherited from

utils.Interface.parseError

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:86

___

### parseLog

▸ **parseLog**(`log`): `LogDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Object` |
| `log.data` | `string` |
| `log.topics` | `string`[] |

#### Returns

`LogDescription`

#### Inherited from

utils.Interface.parseLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:82

___

### parseTransaction

▸ **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.data` | `string` |
| `tx.value?` | `BigNumberish` |

#### Returns

`TransactionDescription`

#### Inherited from

utils.Interface.parseTransaction

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:78

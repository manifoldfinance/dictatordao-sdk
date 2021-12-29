[dictatordao-sdk](../README.md) / [Exports](../modules.md) / IERC20Interface

# Interface: IERC20Interface

## Hierarchy

- `Interface`

  ↳ **`IERC20Interface`**

## Table of contents

### Properties

- [\_abiCoder](IERC20Interface.md#_abicoder)
- [\_isInterface](IERC20Interface.md#_isinterface)
- [deploy](IERC20Interface.md#deploy)
- [errors](IERC20Interface.md#errors)
- [events](IERC20Interface.md#events)
- [fragments](IERC20Interface.md#fragments)
- [functions](IERC20Interface.md#functions)
- [structs](IERC20Interface.md#structs)

### Methods

- [\_decodeParams](IERC20Interface.md#_decodeparams)
- [\_encodeParams](IERC20Interface.md#_encodeparams)
- [decodeErrorResult](IERC20Interface.md#decodeerrorresult)
- [decodeEventLog](IERC20Interface.md#decodeeventlog)
- [decodeFunctionData](IERC20Interface.md#decodefunctiondata)
- [decodeFunctionResult](IERC20Interface.md#decodefunctionresult)
- [encodeDeploy](IERC20Interface.md#encodedeploy)
- [encodeErrorResult](IERC20Interface.md#encodeerrorresult)
- [encodeEventLog](IERC20Interface.md#encodeeventlog)
- [encodeFilterTopics](IERC20Interface.md#encodefiltertopics)
- [encodeFunctionData](IERC20Interface.md#encodefunctiondata)
- [encodeFunctionResult](IERC20Interface.md#encodefunctionresult)
- [format](IERC20Interface.md#format)
- [getError](IERC20Interface.md#geterror)
- [getEvent](IERC20Interface.md#getevent)
- [getEventTopic](IERC20Interface.md#geteventtopic)
- [getFunction](IERC20Interface.md#getfunction)
- [getSighash](IERC20Interface.md#getsighash)
- [parseError](IERC20Interface.md#parseerror)
- [parseLog](IERC20Interface.md#parselog)
- [parseTransaction](IERC20Interface.md#parsetransaction)

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
| `Transfer(address,address,uint256)` | `EventFragment` |

#### Overrides

utils.Interface.events

#### Defined in

[src/IERC20.ts:79](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L79)

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
| `allowance(address,address)` | `FunctionFragment` |
| `approve(address,uint256)` | `FunctionFragment` |
| `balanceOf(address)` | `FunctionFragment` |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | `FunctionFragment` |
| `totalSupply()` | `FunctionFragment` |
| `transfer(address,uint256)` | `FunctionFragment` |
| `transferFrom(address,address,uint256)` | `FunctionFragment` |

#### Overrides

utils.Interface.functions

#### Defined in

[src/IERC20.ts:21](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L21)

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
| `functionFragment` | ``"allowance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/IERC20.ts:65](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L65)

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

[src/IERC20.ts:66](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L66)

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

[src/IERC20.ts:67](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L67)

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

[src/IERC20.ts:68](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L68)

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

[src/IERC20.ts:69](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L69)

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

[src/IERC20.ts:73](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L73)

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

[src/IERC20.ts:74](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L74)

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

[src/IERC20.ts:31](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L31)

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

[src/IERC20.ts:35](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L35)

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

[src/IERC20.ts:39](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L39)

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

[src/IERC20.ts:40](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L40)

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

[src/IERC20.ts:52](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L52)

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

[src/IERC20.ts:56](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L56)

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

[src/IERC20.ts:60](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L60)

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

[src/IERC20.ts:84](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L84)

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

[src/IERC20.ts:85](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/IERC20.ts#L85)

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

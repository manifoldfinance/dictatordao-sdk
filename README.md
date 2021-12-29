> [dictatordao-sdk](README.md) /developer guide

# dictatordao-sdk


---

## SDK Overview



### Classes

- [IERC20\_\_factory](classes/IERC20__factory.md)

### Interfaces

- [DictatorDAO](interfaces/DictatorDAO.md)
- [DictatorDAOInterface](interfaces/DictatorDAOInterface.md)
- [IERC20](interfaces/IERC20.md)
- [IERC20Interface](interfaces/IERC20Interface.md)

### Type aliases

- [ApprovalEvent](modules.md#approvalevent)
- [ApprovalEventFilter](modules.md#approvaleventfilter)
- [CancelTransactionEvent](modules.md#canceltransactionevent)
- [CancelTransactionEventFilter](modules.md#canceltransactioneventfilter)
- [ExecuteTransactionEvent](modules.md#executetransactionevent)
- [ExecuteTransactionEventFilter](modules.md#executetransactioneventfilter)
- [QueueTransactionEvent](modules.md#queuetransactionevent)
- [QueueTransactionEventFilter](modules.md#queuetransactioneventfilter)
- [TransferEvent](modules.md#transferevent)
- [TransferEventFilter](modules.md#transfereventfilter)

## Type aliases

### ApprovalEvent

Ƭ **ApprovalEvent**: `TypedEvent`<[`string`, `string`, `BigNumber`], { `owner`: `string` ; `spender`: `string` ; `value`: `BigNumber`  }\>

#### Defined in

[src/DictatorDAO.ts:224](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L224)

___

### ApprovalEventFilter

Ƭ **ApprovalEventFilter**: `TypedEventFilter`<[`ApprovalEvent`](modules.md#approvalevent)\>

#### Defined in

[src/DictatorDAO.ts:229](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L229)

___

### CancelTransactionEvent

Ƭ **CancelTransactionEvent**: `TypedEvent`<[`string`, `string`, `BigNumber`, `string`], { `data`: `string` ; `target`: `string` ; `txHash`: `string` ; `value`: `BigNumber`  }\>

#### Defined in

[src/DictatorDAO.ts:231](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L231)

___

### CancelTransactionEventFilter

Ƭ **CancelTransactionEventFilter**: `TypedEventFilter`<[`CancelTransactionEvent`](modules.md#canceltransactionevent)\>

#### Defined in

[src/DictatorDAO.ts:236](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L236)

___

### ExecuteTransactionEvent

Ƭ **ExecuteTransactionEvent**: `TypedEvent`<[`string`, `string`, `BigNumber`, `string`], { `data`: `string` ; `target`: `string` ; `txHash`: `string` ; `value`: `BigNumber`  }\>

#### Defined in

[src/DictatorDAO.ts:238](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L238)

___

### ExecuteTransactionEventFilter

Ƭ **ExecuteTransactionEventFilter**: `TypedEventFilter`<[`ExecuteTransactionEvent`](modules.md#executetransactionevent)\>

#### Defined in

[src/DictatorDAO.ts:243](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L243)

___

### QueueTransactionEvent

Ƭ **QueueTransactionEvent**: `TypedEvent`<[`string`, `string`, `BigNumber`, `string`, `BigNumber`], { `data`: `string` ; `eta`: `BigNumber` ; `target`: `string` ; `txHash`: `string` ; `value`: `BigNumber`  }\>

#### Defined in

[src/DictatorDAO.ts:245](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L245)

___

### QueueTransactionEventFilter

Ƭ **QueueTransactionEventFilter**: `TypedEventFilter`<[`QueueTransactionEvent`](modules.md#queuetransactionevent)\>

#### Defined in

[src/DictatorDAO.ts:256](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L256)

___

### TransferEvent

Ƭ **TransferEvent**: `TypedEvent`<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\>

#### Defined in

[src/DictatorDAO.ts:258](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L258)

___

### TransferEventFilter

Ƭ **TransferEventFilter**: `TypedEventFilter`<[`TransferEvent`](modules.md#transferevent)\>

#### Defined in

[src/DictatorDAO.ts:263](https://github.com/manifoldfinance/dictatordao-sdk/blob/32a16c2/src/DictatorDAO.ts#L263)

import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DictatorDAOInterface extends utils.Interface {
    functions: {
        "DELAY()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "GRACE_PERIOD()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(address,uint256)": FunctionFragment;
        "burnFrom(address,address,uint256)": FunctionFragment;
        "cancelTransaction(address,uint256,bytes)": FunctionFragment;
        "decimals()": FunctionFragment;
        "executeTransaction(address,uint256,bytes)": FunctionFragment;
        "mint(uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "operator()": FunctionFragment;
        "pendingOperator()": FunctionFragment;
        "pendingOperatorTime()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "queueTransaction(address,uint256,bytes)": FunctionFragment;
        "queuedTransactions(bytes32)": FunctionFragment;
        "setOperator(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "token()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "userVote(address)": FunctionFragment;
        "users(address)": FunctionFragment;
        "vote(address)": FunctionFragment;
        "votes(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "GRACE_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "cancelTransaction", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "operator", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOperator", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOperatorTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [string, string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "queueTransaction", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "queuedTransactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setOperator", values: [string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "userVote", values: [string]): string;
    encodeFunctionData(functionFragment: "users", values: [string]): string;
    encodeFunctionData(functionFragment: "vote", values: [string]): string;
    encodeFunctionData(functionFragment: "votes", values: [string]): string;
    decodeFunctionResult(functionFragment: "DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GRACE_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOperatorTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votes", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "CancelTransaction(bytes32,address,uint256,bytes)": EventFragment;
        "ExecuteTransaction(bytes32,address,uint256,bytes)": EventFragment;
        "QueueTransaction(bytes32,address,uint256,bytes,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CancelTransaction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QueueTransaction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[string, string, BigNumber], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type CancelTransactionEvent = TypedEvent<[string, string, BigNumber, string], {
    txHash: string;
    target: string;
    value: BigNumber;
    data: string;
}>;
export declare type CancelTransactionEventFilter = TypedEventFilter<CancelTransactionEvent>;
export declare type ExecuteTransactionEvent = TypedEvent<[string, string, BigNumber, string], {
    txHash: string;
    target: string;
    value: BigNumber;
    data: string;
}>;
export declare type ExecuteTransactionEventFilter = TypedEventFilter<ExecuteTransactionEvent>;
export declare type QueueTransactionEvent = TypedEvent<[string, string, BigNumber, string, BigNumber], {
    txHash: string;
    target: string;
    value: BigNumber;
    data: string;
    eta: BigNumber;
}>;
export declare type QueueTransactionEventFilter = TypedEventFilter<QueueTransactionEvent>;
export declare type TransferEvent = TypedEvent<[string, string, BigNumber], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface DictatorDAO extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DictatorDAOInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        burn(to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnFrom(from: string, to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        executeTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(amount: BigNumberish, operatorVote: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        operator(overrides?: CallOverrides): Promise<[string]>;
        pendingOperator(overrides?: CallOverrides): Promise<[string]>;
        pendingOperatorTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        permit(owner_: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queueTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        setOperator(newOperator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        userVote(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        users(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            balance: BigNumber;
            lockedUntil: BigNumber;
        }>;
        vote(operatorVote: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        votes(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(to: string, shares: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnFrom(from: string, to: string, shares: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    executeTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(amount: BigNumberish, operatorVote: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    operator(overrides?: CallOverrides): Promise<string>;
    pendingOperator(overrides?: CallOverrides): Promise<string>;
    pendingOperatorTime(overrides?: CallOverrides): Promise<BigNumber>;
    permit(owner_: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queueTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    setOperator(newOperator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, shares: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, shares: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    userVote(arg0: string, overrides?: CallOverrides): Promise<string>;
    users(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        balance: BigNumber;
        lockedUntil: BigNumber;
    }>;
    vote(operatorVote: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    votes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: string, shares: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        burnFrom(from: string, to: string, shares: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        cancelTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        executeTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        mint(amount: BigNumberish, operatorVote: string, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<string>;
        pendingOperator(overrides?: CallOverrides): Promise<string>;
        pendingOperatorTime(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner_: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        queueTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setOperator(newOperator: string, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, shares: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, shares: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        userVote(arg0: string, overrides?: CallOverrides): Promise<string>;
        users(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            balance: BigNumber;
            lockedUntil: BigNumber;
        }>;
        vote(operatorVote: string, overrides?: CallOverrides): Promise<boolean>;
        votes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "CancelTransaction(bytes32,address,uint256,bytes)"(txHash?: BytesLike | null, target?: string | null, value?: null, data?: null): CancelTransactionEventFilter;
        CancelTransaction(txHash?: BytesLike | null, target?: string | null, value?: null, data?: null): CancelTransactionEventFilter;
        "ExecuteTransaction(bytes32,address,uint256,bytes)"(txHash?: BytesLike | null, target?: string | null, value?: null, data?: null): ExecuteTransactionEventFilter;
        ExecuteTransaction(txHash?: BytesLike | null, target?: string | null, value?: null, data?: null): ExecuteTransactionEventFilter;
        "QueueTransaction(bytes32,address,uint256,bytes,uint256)"(txHash?: BytesLike | null, target?: string | null, value?: null, data?: null, eta?: null): QueueTransactionEventFilter;
        QueueTransaction(txHash?: BytesLike | null, target?: string | null, value?: null, data?: null, eta?: null): QueueTransactionEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnFrom(from: string, to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(amount: BigNumberish, operatorVote: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOperator(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOperatorTime(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner_: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queueTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setOperator(newOperator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        userVote(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        users(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        vote(operatorVote: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        votes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(from: string, to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(amount: BigNumberish, operatorVote: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOperatorTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner_: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queueTransaction(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOperator(newOperator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        userVote(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        users(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vote(operatorVote: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        votes(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
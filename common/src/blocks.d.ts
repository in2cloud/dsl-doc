export declare enum TParameterType {
    UNKNOWN = 0,
    VALUE = 1,
    REFERENCE = 2,
    ARRAY = 3,
    MAP = 4
}
export declare class TDeclaration {
    readonly name: string;
    readonly default?: string;
    private allowed;
    constructor(name: string, types: Set<TParameterType>);
    private allowValue;
    private allowReference;
    private allowArray;
    private allowMap;
    validate(parameter: TParameter): void;
}
export declare class TParameter {
    private _value;
    private _reference;
    private _array;
    private _map;
    private _type;
    get type(): TParameterType;
    get value(): string;
    setValue(value: string): TParameter;
    get reference(): string;
    setReference(reference: string): TParameter;
    get array(): any[];
    setArray(array: any[]): TParameter;
    get map(): any;
    setMap(map: any): TParameter;
    resolve(callbacks: {
        onValue?: (parameter: TParameter) => any;
        onReference?: (parameter: TParameter) => any;
    }): any;
}
export declare function d(name: string, ...types: TParameterType[]): TDeclaration;
export declare function v(value: string): TParameter;
export declare function r(reference: string): TParameter;
export declare function a(array: any[]): TParameter;
export declare function m(map: any): TParameter;
export declare function asStringFormat(parameter: TParameter): TParameter[];
declare class TBlockParameters<V extends TParameter> {
    private readonly declarations;
    private readonly values;
    constructor(declarations: TDeclaration[]);
    toDeclarations(): TDeclaration[];
    declare(declaration: TDeclaration): void;
    set(name: string, value: V): void;
    get(name: string): V;
    names(): string[];
}
export declare class TBlockAbstract {
    readonly id: string;
    protected readonly parameters: TBlockParameters<TParameter>;
    protected readonly exits: TBlockParameters<TParameter>;
    private parentGetter;
    constructor(id: string, parameters: TDeclaration[], exits: TDeclaration[]);
    get type(): string;
    setParent(parent: TBlockCollection): TBlockAbstract;
    get parent(): TBlockCollection;
    get path(): string[];
    get uid(): string;
    protected defineParameter(declaration: TDeclaration, parameter: TParameter): TBlockAbstract;
    protected defineExit(declaration: TDeclaration, exit: TParameter): TBlockAbstract;
    getParameterNames(): string[];
    getParameterDeclarations(): TDeclaration[];
    protected setParameter(name: string, value: TParameter): TBlockAbstract;
    getParameter(name: string): TParameter;
    getExitNames(): string[];
    getExitDeclarations(): TDeclaration[];
    protected setExit(name: string, value: TParameter): TBlockAbstract;
    getExit(name: string): TParameter;
    exitsTo(destination: string): boolean;
    toFieldName(name: string | undefined): string;
    validate(): void;
}
export declare class TBlock extends TBlockAbstract {
    readonly SIGNATURE_BLOCK: boolean;
}
export declare class TBlockCollection extends TBlockAbstract {
    readonly SIGNATURE_COLLECTION: boolean;
    private _initialId;
    private readonly _children;
    constructor(id: string);
    defineParameter(declaration: TDeclaration, parameter: TParameter): TBlockCollection;
    defineExit(declaration: TDeclaration, exit: TParameter): TBlockCollection;
    get children(): ReadonlyArray<TBlock>;
    getExit(name: string): TParameter;
    add(child: TBlock): TBlockCollection;
    addAll(children: Record<string, {
        type: any;
        [key: string]: any;
    }>): TBlockCollection;
    setInitial(id: string): TBlockCollection;
    get initial(): TBlock;
    getChild(path: string[]): TBlock;
    validate(): void;
}
export declare class TPlay extends TBlock {
    constructor(id: string);
    configure(config: {
        message: TParameter;
        next: string;
        error: string;
    }): TPlay;
    setMessage(param: TParameter): TPlay;
    getMessage(): TParameter;
    setNext(param: TParameter): TPlay;
    getNext(): TParameter;
}
export declare class TPrompt extends TBlock {
    constructor(id: string);
    configure(config: {
        message: TParameter;
        destination: TParameter;
        next: string;
        timeout: string;
        error: string;
    }): TPrompt;
    setMessage(param: TParameter): TPrompt;
    getMessage(): TParameter;
    setDestination(param: TParameter): TPrompt;
    getDestination(): TParameter;
    setNext(param: TParameter): TPrompt;
    getNext(): TParameter;
    setError(param: TParameter): TPrompt;
    getError(): TParameter;
    setTimeout(param: TParameter): TPrompt;
    getTimeout(): TParameter;
}
export declare class TSet extends TBlock {
    constructor(id: string);
    configure(config: {
        next: string;
        destination: TParameter;
        error: string;
        value: TParameter;
    }): TSet;
    setDestination(param: TParameter): TSet;
    getDestination(): TParameter;
    setValue(param: TParameter): TSet;
    getValue(): TParameter;
    setNext(param: TParameter): TSet;
    getNext(): TParameter;
    setError(param: TParameter): TSet;
    getError(): TParameter;
}
export declare class TReturn extends TBlock {
    constructor(id: string);
    configure(config: {
        to: string;
    }): TReturn;
    setTo(param: TParameter): TReturn;
    getTo(): TParameter;
}
export declare enum TSwitchCaseOperator {
    Equals = 0,
    IsGreaterThan = 1,
    IsLessThan = 2,
    StartsWith = 3,
    Contains = 4
}
export declare type TSwitchCase = {
    operator: TSwitchCaseOperator;
    operand: TParameter;
    exit: TParameter;
};
export declare class TSwitch extends TBlock {
    constructor(id: string);
    configure(config: {
        value: TParameter;
        cases: TSwitchCase[];
        nomatch: string;
    }): TSwitch;
    getCases(): TParameter;
    setCases(param: TSwitchCase[]): TSwitch;
    getValue(): TParameter;
    setValue(param: TParameter): TSwitch;
    getNoMatch(): TParameter;
    setNoMatch(param: TParameter): TSwitch;
    exitsTo(destination: string): boolean;
}
export declare class TMenu extends TBlock {
    constructor(id: string);
    configure(config: {
        message: TParameter;
        options: Record<string, string>;
        nomatch: string;
        timeout: string;
        error: string;
    }): TMenu;
    setMessage(param: TParameter): TMenu;
    getMessage(): TParameter;
    getOptions(): TParameter;
    setOptions(param: Record<string, string>): TMenu;
    setError(param: TParameter): TMenu;
    getError(): TParameter;
    setTimeout(param: TParameter): TMenu;
    getTimeout(): TParameter;
    setNoMatch(param: TParameter): TMenu;
    getNoMatch(): TParameter;
    exitsTo(destination: string): boolean;
}
export declare class TDisconnect extends TBlock {
    constructor(id: string);
    configure(): TDisconnect;
}
export declare class TCall extends TBlock {
    private _collection;
    constructor(id: string);
    configure(config: any): TCall;
    get collection(): TBlockCollection;
    setCollection(collection: TBlockCollection, callParameters: Record<string, TParameter>): TCall;
    setCallError(param: TParameter): TCall;
    getCallError(): TParameter;
    validate(): void;
}
export declare class TCallExternal extends TBlock {
    static readonly F_COLLECTION = "collection";
    static readonly F_CALL_ERROR = "callError";
    constructor(id: string);
    configure(config: {
        resource: string;
        callError: string;
    }): TCallExternal;
    setCollection(param: TParameter): TCallExternal;
    getCollection(): TParameter;
    setCallError(param: TParameter): TCallExternal;
    getCallError(): TParameter;
}
export declare class TToTeam extends TBlock {
    static readonly F_TEAM = "team";
    static readonly F_ERROR = "error";
    static readonly F_BUSY = "busy";
    constructor(id: string);
    setTeam(param: TParameter): TToTeam;
    getTeam(): TParameter;
    setBusy(param: TParameter): TToTeam;
    getBusy(): TParameter;
    setError(param: TParameter): TToTeam;
    getError(): TParameter;
}
export {};

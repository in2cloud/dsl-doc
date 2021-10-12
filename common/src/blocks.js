"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TToTeam = exports.TCallExternal = exports.TCall = exports.TDisconnect = exports.TMenu = exports.TSwitch = exports.TSwitchCaseOperator = exports.TReturn = exports.TSet = exports.TPrompt = exports.TPlay = exports.TBlockCollection = exports.TBlock = exports.TBlockAbstract = exports.asStringFormat = exports.m = exports.a = exports.r = exports.v = exports.d = exports.TParameter = exports.TDeclaration = exports.TParameterType = void 0;
var TParameterType;
(function (TParameterType) {
    TParameterType[TParameterType["UNKNOWN"] = 0] = "UNKNOWN";
    TParameterType[TParameterType["VALUE"] = 1] = "VALUE";
    TParameterType[TParameterType["REFERENCE"] = 2] = "REFERENCE";
    TParameterType[TParameterType["ARRAY"] = 3] = "ARRAY";
    TParameterType[TParameterType["MAP"] = 4] = "MAP";
})(TParameterType = exports.TParameterType || (exports.TParameterType = {}));
class TDeclaration {
    constructor(name, types) {
        this.allowed = undefined;
        this.name = name;
        if (!types || types.size === 0) {
            throw new Error(`[${name}] declaration type must be defined`);
        }
        types.forEach(type => {
            switch (type) {
                case TParameterType.VALUE:
                    this.allowValue();
                    break;
                case TParameterType.REFERENCE:
                    this.allowReference();
                    break;
                case TParameterType.MAP:
                    this.allowMap();
                    break;
                case TParameterType.ARRAY:
                    this.allowArray();
                    break;
                default:
                    throw new Error(`Unexpected type [${type}]`);
            }
        });
    }
    allowValue() {
        this.allowed = this.allowed || {};
        this.allowed._value = true;
        return this;
    }
    allowReference() {
        this.allowed = this.allowed || {};
        this.allowed._reference = true;
        return this;
    }
    allowArray() {
        this.allowed = this.allowed || {};
        this.allowed._array = true;
        return this;
    }
    allowMap() {
        this.allowed = this.allowed || {};
        this.allowed._map = true;
        return this;
    }
    validate(parameter) {
        //Validate only if parameter id defined and allowed permissions are set
        if (!(parameter instanceof TParameter)) {
            throw new Error(`[${this.name}] must be TParameter, but is [${typeof parameter}]:${parameter}`);
        }
        if (parameter && this.allowed) {
            ["_value", "_reference", "_array", "_map"].map((field) => {
                if (parameter[field] !== undefined && this.allowed[field] !== true) {
                    const valid = Object.keys(this.allowed).map(type => {
                        return type;
                    }).join(',');
                    throw new Error(`[${this.name}] can not be [${field}] type. Allowed types are [${valid}]`);
                }
            });
        }
    }
}
exports.TDeclaration = TDeclaration;
class TParameter {
    constructor() {
        this._value = undefined;
        this._reference = undefined;
        this._array = undefined;
        this._map = undefined;
        this._type = TParameterType.UNKNOWN;
    }
    // TODO Introduce type attribute with enum value and throw exception if
    // trying to read undefined value
    get type() {
        return this._type;
    }
    get value() {
        if (this._value === undefined) {
            throw new Error(`parameter [value] in not defined`);
        }
        return this._value;
    }
    setValue(value) {
        this._value = value;
        this._type = TParameterType.VALUE;
        return this;
    }
    get reference() {
        if (this._reference === undefined) {
            throw new Error(`parameter [reference] in not defined`);
        }
        return this._reference;
    }
    setReference(reference) {
        this._reference = reference;
        this._type = TParameterType.REFERENCE;
        return this;
    }
    get array() {
        if (this._array === undefined) {
            throw new Error(`parameter [array] in not defined`);
        }
        return this._array;
    }
    setArray(array) {
        this._array = array;
        this._type = TParameterType.ARRAY;
        return this;
    }
    get map() {
        if (this._map === undefined) {
            throw new Error(`parameter [map] in not defined`);
        }
        return this._map;
    }
    setMap(map) {
        this._map = map;
        this._type = TParameterType.MAP;
        return this;
    }
    resolve(callbacks) {
        if (this.type == TParameterType.REFERENCE && callbacks.onReference) {
            return callbacks.onReference(this);
        }
        else if (this.type == TParameterType.VALUE && callbacks.onValue) {
            return callbacks.onValue(this);
        }
        else {
            throw new Error(`Unresolvable type ${this.type}`);
        }
    }
}
exports.TParameter = TParameter;
function d(name, ...types) {
    return new TDeclaration(name, new Set(types));
}
exports.d = d;
function v(value) {
    return new TParameter().setValue(value);
}
exports.v = v;
function r(reference) {
    return new TParameter().setReference(reference);
}
exports.r = r;
function a(array) {
    return new TParameter().setArray(array);
}
exports.a = a;
function m(map) {
    return new TParameter().setMap(map);
}
exports.m = m;
function asStringFormat(parameter) {
    const reChunk = /(\$\{[A-Za-z]+\})/gm;
    const reName = /\$\{([A-Za-z]+)\}/gm;
    const result = [];
    if (parameter.type == TParameterType.VALUE) {
        parameter.value.split(reChunk).map((part, index) => {
            const param = part.match(reName) ? r(part.split(reName)[1]) : v(part);
            result.push(param);
        });
    }
    else {
        result.push(parameter);
    }
    return result;
}
exports.asStringFormat = asStringFormat;
class TBlockParameters {
    constructor(declarations) {
        this.declarations = new Map();
        this.values = new Map();
        declarations.map(declaration => {
            this.declarations.set(declaration.name, declaration);
        });
    }
    toDeclarations() {
        return Array.from(this.declarations.values());
    }
    declare(declaration) {
        if (this.declarations.has(declaration.name)) {
            throw new Error(`[${declaration.name}] is already declared`);
        }
        this.declarations.set(declaration.name, declaration);
    }
    set(name, value) {
        var _a;
        if (!this.declarations.has(name)) {
            throw new Error('Unexpected name: ' + name + ' must be one of ' + this.declarations);
        }
        (_a = this.declarations.get(name)) === null || _a === void 0 ? void 0 : _a.validate(value);
        this.values.set(name, value);
    }
    get(name) {
        if (!this.declarations.has(name)) {
            throw new Error('Unknown name: ' + name);
        }
        return this.values.get(name);
    }
    names() {
        return Array.from(this.declarations.keys());
    }
}
class TBlockAbstract {
    constructor(id, parameters, exits) {
        if (!id || id.match(/\W/)) {
            throw new Error(`Invalid block id[${id}]. Only alphanumeric characters and underscore are allowed`);
        }
        this.id = id;
        this.parameters = new TBlockParameters(parameters);
        this.exits = new TBlockParameters(exits);
        this.parentGetter = () => {
            return undefined; //No parent by default
        };
    }
    get type() {
        return this.constructor.name;
    }
    setParent(parent) {
        this.parentGetter = () => {
            return parent;
        };
        return this;
    }
    get parent() {
        return this.parentGetter();
    }
    get path() {
        const result = [];
        let next = this;
        while (next != undefined) {
            result.push(next.id);
            next = next.parent;
        }
        return result.reverse();
    }
    get uid() {
        return this.path.join('.');
    }
    defineParameter(declaration, parameter) {
        try {
            declaration.validate(parameter);
            this.parameters.declare(declaration);
            this.setParameter(declaration.name, parameter);
            return this;
        }
        catch (e) {
            throw new Error(this.id + ' defineParameter ' + e);
        }
    }
    defineExit(declaration, exit) {
        try {
            declaration.validate(exit);
            this.exits.declare(declaration);
            this.setExit(declaration.name, exit);
            return this;
        }
        catch (e) {
            throw new Error(this.id + ' declareExit ' + e);
        }
    }
    getParameterNames() {
        return this.parameters.names();
    }
    getParameterDeclarations() {
        return this.parameters.toDeclarations();
    }
    setParameter(name, value) {
        try {
            this.parameters.set(name, value);
            return this;
        }
        catch (e) {
            throw new Error(`(${this.id}) failed setParameter to (${JSON.stringify(value)}) ` + e);
        }
    }
    getParameter(name) {
        try {
            return this.parameters.get(name);
        }
        catch (e) {
            throw new Error(`[${this.id}] getParameter failed ` + e);
        }
    }
    getExitNames() {
        return this.exits.names();
    }
    getExitDeclarations() {
        return this.exits.toDeclarations();
    }
    setExit(name, value) {
        try {
            //Always convert to string
            this.exits.set(name, value);
            return this;
        }
        catch (e) {
            throw new Error(`(${this.id}) failed setExit to (${JSON.stringify(value)}) ` + e);
        }
    }
    getExit(name) {
        try {
            return this.exits.get(name);
        }
        catch (e) {
            throw new Error(`[${this.id}] getExit failed ` + e);
        }
    }
    exitsTo(destination) {
        return this.getExitNames().find(name => {
            return this.getExit(name).value === destination;
        }) !== undefined;
    }
    toFieldName(name) {
        if (name == undefined) {
            throw new Error(`Name must be defined`);
        }
        return (this.uid + '.' + name).replace(/\./gi, '_');
    }
    validate() {
        //Check if all required parameters are defined
        this.getParameterNames().map(name => {
            if (!this.getParameter(name)) {
                throw new Error(`[${this.uid}] missing parameter [${name}] assignment`);
            }
        });
        //Check if all required exits are defined
        this.getExitNames().map(name => {
            try {
                if (this.getExit(name).value == undefined) {
                    throw new Error('Exit undefined');
                }
            }
            catch (e) {
                throw new Error(`[${this.uid}] missing exit [${name}] assignment. ${e}`);
            }
        });
    }
}
exports.TBlockAbstract = TBlockAbstract;
class TBlock extends TBlockAbstract {
    constructor() {
        super(...arguments);
        this.SIGNATURE_BLOCK = true;
    }
}
exports.TBlock = TBlock;
class TBlockCollection extends TBlockAbstract {
    constructor(id) {
        super(id, [], []);
        this.SIGNATURE_COLLECTION = true;
        this._initialId = undefined;
        this._children = [];
    }
    defineParameter(declaration, parameter) {
        return super.defineParameter(declaration, parameter);
    }
    defineExit(declaration, exit) {
        return super.defineExit(declaration, exit);
    }
    get children() {
        return this._children;
    }
    getExit(name) {
        return super.getExit(name);
    }
    add(child) {
        if (this._children.find(item => {
            return item.id == child.id;
        })) {
            throw new Error(`Block [${child.id}] already exists in [${this.id}]`);
        }
        this._children.push(child);
        child.setParent(this);
        return this;
    }
    addAll(children) {
        Object.keys(children).map(id => {
            const config = children[id];
            try {
                this.add(new config.type(id).configure(config));
            }
            catch (e) {
                throw new Error(id + ' addAll config failed ' + e.message);
            }
        });
        return this;
    }
    setInitial(id) {
        this._initialId = id;
        return this;
    }
    get initial() {
        return this._children.find(child => {
            return child.id == this._initialId;
        });
    }
    getChild(path) {
        const id = path[0];
        let found = this._children.find(child => {
            return child.id === id;
        });
        // Uncomment if nested collection is required
        // if (found && path.length > 1) {
        //     found = (found as TBlockCollection).getChild(path.splice(1))
        // }
        if (!found) {
            throw new Error(`Can not find child [${id}] in [${this.uid}]`);
        }
        return found;
    }
    validate() {
        //Validate itself
        super.validate();
        //Validate all childere
        this._children.map((child) => {
            child.validate();
        });
        //Look for orphaned states
        this._children.map((child) => {
            var _a;
            const found = this._children.find((from) => {
                return from.exitsTo(child.id);
            });
            if (!found && ((_a = this.initial) === null || _a === void 0 ? void 0 : _a.id) !== child.id) {
                throw new Error(`There is ${child.type}(${child.uid}) declared no one refers to.`);
            }
        });
        //Search for orphaned exits
        this.getExitNames().map(collectionExit => {
            const found = this._children.find((child) => {
                return child.exitsTo(collectionExit);
            });
            if (!found) {
                throw new Error(`There is unused exit declared [${this.uid}.${collectionExit}]`);
            }
        });
    }
}
exports.TBlockCollection = TBlockCollection;
class TPlay extends TBlock {
    constructor(id) {
        super(id, [d('message', TParameterType.VALUE, TParameterType.REFERENCE)], [d('next', TParameterType.VALUE)]);
    }
    configure(config) {
        this.setMessage(config.message);
        this.setNext(v(config.next));
        return this;
    }
    setMessage(param) {
        this.setParameter('message', param);
        return this;
    }
    getMessage() {
        return this.getParameter('message');
    }
    setNext(param) {
        this.setExit('next', param);
        return this;
    }
    getNext() {
        return this.getExit('next');
    }
}
exports.TPlay = TPlay;
class TPrompt extends TBlock {
    constructor(id) {
        super(id, [
            d('message', TParameterType.VALUE, TParameterType.REFERENCE),
            d('destination', TParameterType.VALUE)
        ], [
            d('next', TParameterType.VALUE),
            d('timeout', TParameterType.VALUE),
            d('error', TParameterType.VALUE)
        ]);
    }
    configure(config) {
        this.setMessage(config.message);
        this.setDestination(config.destination);
        this.setNext(v(config.next));
        this.setTimeout(v(config.timeout));
        this.setError(v(config.error));
        return this;
    }
    setMessage(param) {
        this.setParameter('message', param);
        return this;
    }
    getMessage() {
        return this.getParameter('message');
    }
    setDestination(param) {
        this.setParameter('destination', param);
        return this;
    }
    getDestination() {
        return this.getParameter('destination');
    }
    setNext(param) {
        this.setExit('next', param);
        return this;
    }
    getNext() {
        return this.getExit('next');
    }
    setError(param) {
        this.setExit('error', param);
        return this;
    }
    getError() {
        return this.getExit('error');
    }
    setTimeout(param) {
        this.setExit('timeout', param);
        return this;
    }
    getTimeout() {
        return this.getExit('timeout');
    }
}
exports.TPrompt = TPrompt;
class TSet extends TBlock {
    constructor(id) {
        super(id, [
            d('destination', TParameterType.VALUE),
            d('value', TParameterType.VALUE)
        ], [
            d('next', TParameterType.VALUE),
            d('error', TParameterType.VALUE)
        ]);
    }
    configure(config) {
        this.setDestination(config.destination);
        this.setValue(config.value);
        this.setNext(v(config.next));
        this.setError(v(config.error));
        return this;
    }
    setDestination(param) {
        this.setParameter('destination', param);
        return this;
    }
    getDestination() {
        return this.getParameter('destination');
    }
    setValue(param) {
        this.setParameter('value', param);
        return this;
    }
    getValue() {
        return this.getParameter('value');
    }
    setNext(param) {
        this.setExit('next', param);
        return this;
    }
    getNext() {
        return this.getExit('next');
    }
    setError(param) {
        this.setExit('error', param);
        return this;
    }
    getError() {
        return this.getExit('error');
    }
}
exports.TSet = TSet;
class TReturn extends TBlock {
    constructor(id) {
        super(id, [], [d('to', TParameterType.VALUE)]);
    }
    configure(config) {
        this.setTo(v(config.to));
        return this;
    }
    setTo(param) {
        this.setExit('to', param);
        return this;
    }
    getTo() {
        return this.getExit('to');
    }
}
exports.TReturn = TReturn;
var TSwitchCaseOperator;
(function (TSwitchCaseOperator) {
    TSwitchCaseOperator[TSwitchCaseOperator["Equals"] = 0] = "Equals";
    TSwitchCaseOperator[TSwitchCaseOperator["IsGreaterThan"] = 1] = "IsGreaterThan";
    TSwitchCaseOperator[TSwitchCaseOperator["IsLessThan"] = 2] = "IsLessThan";
    TSwitchCaseOperator[TSwitchCaseOperator["StartsWith"] = 3] = "StartsWith";
    TSwitchCaseOperator[TSwitchCaseOperator["Contains"] = 4] = "Contains";
})(TSwitchCaseOperator = exports.TSwitchCaseOperator || (exports.TSwitchCaseOperator = {}));
class TSwitch extends TBlock {
    constructor(id) {
        super(id, [
            d('value', TParameterType.REFERENCE),
            d('cases', TParameterType.ARRAY)
        ], [
            d('nomatch', TParameterType.VALUE)
        ]);
    }
    configure(config) {
        this.setValue(config.value);
        this.setCases(config.cases);
        this.setNoMatch(v(config.nomatch));
        return this;
    }
    getCases() {
        return this.getParameter('cases');
    }
    setCases(param) {
        param.map(item => {
            if (!item.operand.value) {
                throw new Error(`[${this.id}] can use only values for case operand`);
            }
            if (!item.exit.value) {
                throw new Error(`[${this.id}] can use only values for case exits`);
            }
        });
        this.setParameter('cases', a(param));
        return this;
    }
    getValue() {
        return this.getParameter('value');
    }
    setValue(param) {
        this.setParameter('value', param);
        return this;
    }
    getNoMatch() {
        return this.getExit('nomatch');
    }
    setNoMatch(param) {
        this.setExit('nomatch', param);
        return this;
    }
    exitsTo(destination) {
        var _a;
        const found = (_a = this.getCases().array) === null || _a === void 0 ? void 0 : _a.find((caseDef) => {
            return caseDef.exit.value === destination;
        });
        return super.exitsTo(destination) || found !== undefined;
    }
}
exports.TSwitch = TSwitch;
class TMenu extends TBlock {
    constructor(id) {
        super(id, [
            d('message', TParameterType.VALUE, TParameterType.REFERENCE),
            d('options', TParameterType.MAP)
        ], [
            d('timeout', TParameterType.VALUE),
            d('nomatch', TParameterType.VALUE),
            d('error', TParameterType.VALUE)
        ]);
    }
    configure(config) {
        this.setMessage(config.message);
        this.setOptions(config.options);
        this.setTimeout(v(config.timeout));
        this.setNoMatch(v(config.nomatch));
        this.setError(v(config.error));
        return this;
    }
    setMessage(param) {
        this.setParameter('message', param);
        return this;
    }
    getMessage() {
        return this.getParameter('message');
    }
    getOptions() {
        return this.getParameter('options');
    }
    setOptions(param) {
        this.setParameter('options', m(param));
        return this;
    }
    setError(param) {
        this.setExit('error', param);
        return this;
    }
    getError() {
        return this.getExit('error');
    }
    setTimeout(param) {
        this.setExit('timeout', param);
        return this;
    }
    getTimeout() {
        return this.getExit('timeout');
    }
    setNoMatch(param) {
        this.setExit('nomatch', param);
        return this;
    }
    getNoMatch() {
        return this.getExit('nomatch');
    }
    exitsTo(destination) {
        const found = Object.keys(this.getOptions().map).find((key) => {
            return this.getOptions().map[key] === destination;
        });
        return super.exitsTo(destination) || found !== undefined;
    }
}
exports.TMenu = TMenu;
class TDisconnect extends TBlock {
    constructor(id) {
        super(id, [], []);
    }
    configure() {
        return this;
    }
}
exports.TDisconnect = TDisconnect;
class TCall extends TBlock {
    constructor(id) {
        super(id, [], [
            d('callError', TParameterType.VALUE)
        ]);
    }
    configure(config) {
        this.setCollection(config.collection, config);
        this.setCallError(v(config.callError));
        return this;
    }
    get collection() {
        return this._collection;
    }
    setCollection(collection, callParameters) {
        this._collection = collection;
        //Define parameters
        this._collection.getParameterDeclarations().map((declaration) => {
            this.defineParameter(declaration, callParameters[declaration.name]);
        });
        //Define exits
        this._collection.getExitDeclarations().map((declaration) => {
            this.defineExit(declaration, callParameters[declaration.name]);
        });
        return this;
    }
    setCallError(param) {
        this.setExit('callError', param);
        return this;
    }
    getCallError() {
        return this.getExit('callError');
    }
    validate() {
        //Validate itself
        super.validate();
        //Validate referenced collection
        this._collection.validate();
    }
}
exports.TCall = TCall;
class TCallExternal extends TBlock {
    constructor(id) {
        super(id, [d(TCallExternal.F_COLLECTION, TParameterType.VALUE)], [d(TCallExternal.F_CALL_ERROR, TParameterType.VALUE)]);
    }
    configure(config) {
        this.setCollection(v(config.resource));
        this.setCallError(v(config.callError));
        return this;
    }
    setCollection(param) {
        this.setParameter(TCallExternal.F_COLLECTION, param);
        return this;
    }
    getCollection() {
        return this.getParameter(TCallExternal.F_COLLECTION);
    }
    setCallError(param) {
        this.setExit(TCallExternal.F_CALL_ERROR, param);
        return this;
    }
    getCallError() {
        return this.getExit(TCallExternal.F_CALL_ERROR);
    }
}
exports.TCallExternal = TCallExternal;
TCallExternal.F_COLLECTION = 'collection';
TCallExternal.F_CALL_ERROR = 'callError';
class TToTeam extends TBlock {
    constructor(id) {
        super(id, [
            d(TToTeam.F_TEAM, TParameterType.VALUE)
        ], [
            d(TToTeam.F_BUSY, TParameterType.VALUE),
            d(TToTeam.F_ERROR, TParameterType.VALUE)
        ]);
    }
    setTeam(param) {
        this.setParameter(TToTeam.F_TEAM, param);
        return this;
    }
    getTeam() {
        return this.getParameter(TToTeam.F_TEAM);
    }
    setBusy(param) {
        this.setExit(TToTeam.F_BUSY, param);
        return this;
    }
    getBusy() {
        return this.getExit(TToTeam.F_BUSY);
    }
    setError(param) {
        this.setExit(TToTeam.F_ERROR, param);
        return this;
    }
    getError() {
        return this.getExit(TToTeam.F_ERROR);
    }
}
exports.TToTeam = TToTeam;
TToTeam.F_TEAM = 'team';
TToTeam.F_ERROR = 'error';
TToTeam.F_BUSY = 'busy';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jsb2Nrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLGNBTVg7QUFORCxXQUFZLGNBQWM7SUFDdEIseURBQU8sQ0FBQTtJQUNQLHFEQUFLLENBQUE7SUFDTCw2REFBUyxDQUFBO0lBQ1QscURBQUssQ0FBQTtJQUNMLGlEQUFHLENBQUE7QUFDUCxDQUFDLEVBTlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFNekI7QUFFRCxNQUFhLFlBQVk7SUFNckIsWUFBbUIsSUFBWSxFQUFFLEtBQTBCO1FBRm5ELFlBQU8sR0FBUSxTQUFTLENBQUM7UUFHN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxvQ0FBb0MsQ0FBQyxDQUFBO1NBQ2hFO1FBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixRQUFRLElBQUksRUFBRTtnQkFDVixLQUFLLGNBQWMsQ0FBQyxLQUFLO29CQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xCLE1BQU07Z0JBQ1YsS0FBSyxjQUFjLENBQUMsU0FBUztvQkFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNWLEtBQUssY0FBYyxDQUFDLEdBQUc7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEIsTUFBTTtnQkFDVixLQUFLLGNBQWMsQ0FBQyxLQUFLO29CQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xCLE1BQU07Z0JBQ1Y7b0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUNwRDtRQUNM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
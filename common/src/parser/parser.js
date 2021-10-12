"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blocks_1 = require("../blocks");
const utils_1 = require("../utils");
const validator_1 = require("./validator");
class TIVRParserJSON {
    constructor() {
        this._validator = new validator_1.TIVRValidatorJSON();
        this._includes = [];
    }
    toParameter(dsl) {
        if (dsl.startsWith("@")) {
            return new blocks_1.TParameter().setReference(dsl.substring(1));
        }
        else if (dsl.startsWith("[")) {
            return new blocks_1.TParameter().setArray(JSON.parse(dsl));
        }
        else if (dsl.startsWith("{")) {
            return new blocks_1.TParameter().setMap(JSON.parse(dsl));
        }
        else {
            return new blocks_1.TParameter().setValue(dsl);
        }
    }
    dslToParameter(config, name) {
        if (!config[name]) {
            throw new Error(`Undefined parameter ${name}`);
        }
        else {
            return this.toParameter(config[name]);
        }
    }
    createBlock(id, dslBlock, collections) {
        try {
            switch (dslBlock.type) {
                case "TPlay": {
                    const config = dslBlock;
                    return new blocks_1.TPlay(id)
                        .setMessage(this.toParameter(config.message))
                        .setNext((0, blocks_1.v)(config.next));
                }
                case "TMenu": {
                    const config = dslBlock;
                    return new blocks_1.TMenu(id)
                        .setMessage(this.toParameter(config.message))
                        .setOptions(config.options)
                        .setTimeout((0, blocks_1.v)(config.timeout))
                        .setNoMatch((0, blocks_1.v)(config.nomatch))
                        .setError((0, blocks_1.v)(config.error));
                }
                case "TReturn": {
                    const config = dslBlock;
                    return new blocks_1.TReturn(id)
                        .setTo((0, blocks_1.v)(config.to));
                }
                case "TCall": {
                    const config = dslBlock;
                    const collection = collections.find((collection) => {
                        return collection.id == config.collection;
                    });
                    if (!collection) {
                        throw new Error(`referenced [${config.collection}] is not declared for [${id}]`);
                    }
                    const parameters = {};
                    Object.keys(config).map((key) => {
                        parameters[key] = this.toParameter(config[key]);
                    });
                    return new blocks_1.TCall(id)
                        .setCollection(collection, parameters)
                        .setCallError((0, blocks_1.v)(config.callError));
                }
                case "TCallExternal": {
                    const config = dslBlock;
                    return new blocks_1.TCallExternal(id)
                        .setCollection(this.dslToParameter(config, blocks_1.TCallExternal.F_COLLECTION))
                        .setCallError(this.dslToParameter(config, blocks_1.TCallExternal.F_CALL_ERROR));
                }
                case "TToTeam": {
                    const config = dslBlock;
                    return new blocks_1.TToTeam(id)
                        .setTeam(this.dslToParameter(config, blocks_1.TToTeam.F_TEAM))
                        .setBusy(this.dslToParameter(config, blocks_1.TToTeam.F_BUSY))
                        .setError(this.dslToParameter(config, blocks_1.TToTeam.F_ERROR));
                }
                case "TPrompt": {
                    const config = dslBlock;
                    return new blocks_1.TPrompt(id)
                        .setMessage(this.toParameter(config.message))
                        .setDestination(this.toParameter(config.destination))
                        .setNext((0, blocks_1.v)(config.next))
                        .setTimeout((0, blocks_1.v)(config.timeout))
                        .setError((0, blocks_1.v)(config.error));
                }
                case "TDisconnect": {
                    const config = dslBlock;
                    return new blocks_1.TDisconnect(id);
                }
                default:
                    throw new Error(`Unknown block type: ${dslBlock.type}`);
            }
        }
        catch (e) {
            throw new Error(`Error parsing "${id}". ` + e.message);
        }
    }
    orderByDependencies(flows) {
        const map = {}; // Creates key value pair of name and object
        const visited = {}; // takes a note of the traversed dependency
        const result = []; // the result array
        flows.map((flow) => {
            map[flow.id] = flow;
        });
        flows.map((flow) => {
            if (!visited[flow.id]) { // check for visited object
                sortUtil(flow);
            }
        });
        // On visiting object, check for its dependencies and visit them recursively
        function sortUtil(flow) {
            visited[flow.id] = true;
            Object.keys(flow.blocks)
                .map((blockId) => {
                const dslBlock = flow.blocks[blockId];
                return (dslBlock.type === 'TCall') ? dslBlock.collection : undefined;
            }).filter((dep) => {
                return dep != undefined;
            }).map(collectionId => {
                collectionId = collectionId;
                (0, utils_1.ensure)(map[collectionId], `Dependency collection [${collectionId}] is not loaded`);
                if (!visited[collectionId]) {
                    sortUtil(map[collectionId]);
                }
            });
            result.push(flow);
        }
        return result;
    }
    processFlow(dslFlow, collections) {
        var _a, _b;
        const collection = new blocks_1.TBlockCollection(dslFlow.id).setInitial(dslFlow.initial);
        //Declare parameters
        (_a = dslFlow.parameters) === null || _a === void 0 ? void 0 : _a.map((parameterName) => {
            collection.defineParameter((0, blocks_1.d)(parameterName, blocks_1.TParameterType.VALUE, blocks_1.TParameterType.REFERENCE), (0, blocks_1.v)('undefined'));
        });
        //Declare exits
        (_b = dslFlow.exits) === null || _b === void 0 ? void 0 : _b.map((exitName) => {
            collection.defineExit((0, blocks_1.d)(exitName, blocks_1.TParameterType.VALUE), (0, blocks_1.v)('undefined'));
        });
        //Iterate over defined blocks
        Object.keys(dslFlow.blocks).map((blockId) => {
            collection.add(this.createBlock(blockId, dslFlow.blocks[blockId], collections));
        });
        //Validate before adding
        collection.validate();
        //Add collection to collections registry
        collections.push(collection);
    }
    include(dslFlows) {
        this._validator.validate(dslFlows);
        this._includes = this._includes.concat((0, utils_1.ensure)(dslFlows.flows, '"flows" attribute is required'));
        return this;
    }
    includeAll(dslFlows) {
        dslFlows.forEach(file => {
            this.include(file);
        });
        return this;
    }
    parse(id) {
        const collections = [];
        //Process includes
        this.orderByDependencies(this._includes).map((dslFlow) => {
            this.processFlow(dslFlow, collections);
        });
        return (0, utils_1.ensure)(collections.find(flow => flow.id === id), `Can't find [${id}] collection. Options are: ${collections.map(c => c.id)}`);
    }
}
exports.default = TIVRParserJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BhcnNlci9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FjbUI7QUFFbkIsb0NBQWdDO0FBQ2hDLDJDQUFnRDtBQWlFaEQsTUFBcUIsY0FBYztJQUFuQztRQUVxQixlQUFVLEdBQUcsSUFBSSw2QkFBaUIsRUFBRSxDQUFDO1FBRTlDLGNBQVMsR0FBZSxFQUFFLENBQUM7SUEyTHZDLENBQUM7SUF6TFcsV0FBVyxDQUFDLEdBQWtCO1FBQ2xDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQixPQUFPLElBQUksbUJBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDekQ7YUFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLG1CQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3BEO2FBQU0sSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxtQkFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUNsRDthQUFNO1lBQ0gsT0FBTyxJQUFJLG1CQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDeEM7SUFDTCxDQUFDO0lBRU8sY0FBYyxDQUFDLE1BQVcsRUFBRSxJQUFZO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQ2pEO2FBQU07WUFDSCxPQUFP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
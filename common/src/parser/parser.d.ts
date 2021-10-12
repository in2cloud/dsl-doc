import { TBlockCollection } from "../blocks";
interface TDSLBlock {
    type: string;
}
declare type TDSLFlow = {
    id: string;
    initial: string;
    parameters?: string[];
    exits?: string[];
    blocks: Record<string, TDSLBlock>;
};
export declare type TDSLFlows = {
    flows: TDSLFlow[];
};
export default class TIVRParserJSON {
    private readonly _validator;
    private _includes;
    private toParameter;
    private dslToParameter;
    private createBlock;
    private orderByDependencies;
    private processFlow;
    include(dslFlows: TDSLFlows): TIVRParserJSON;
    includeAll(dslFlows: TDSLFlows[]): TIVRParserJSON;
    parse(id: string): TBlockCollection;
}
export {};

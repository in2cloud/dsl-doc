import { ContactFlowType } from 'aws-sdk/clients/connect';
import { PutBotRequest, PutIntentRequest } from 'aws-sdk/clients/lexmodelbuildingservice';
export declare const SYMBOLIC_SEPARATOR = ":";
export declare const SYMBOLIC_FLOW = "flow";
export declare const SYMBOLIC_QUEUE = "queue";
export declare const SYMBOLIC_PROMPT = "prompt";
export declare const SYMBOLIC_REGION = "region";
export declare type TIVRFlowAWS = {
    type: ContactFlowType;
    name: string;
    description: string;
    content: any;
};
export declare type TIVRConnectAWS = {
    flows: TIVRFlowAWS[];
};
export interface TIVRLexAWS {
    intents: PutIntentRequest[];
    bots: PutBotRequest[];
}

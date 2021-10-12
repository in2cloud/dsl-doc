/**
 * Uniquely defines block
 * @minLength 1
 * @pattern ^[a-zA-Z0-9_]*$
 */
export declare type TBlockID = string;
/**
 * Variable definition
 * @minLength 1
 * @pattern ^[a-zA-Z0-9_]*$
 */
export declare type TOutput = string;
/**
 * Value or value reference
 */
export declare type TInput = string;
/**
 * Play message to a user
 */
export interface TPlay {
    readonly type: 'TPlay';
    /**
     * Prompt to play
     */
    message: TInput;
    /**
     * Next block to be executed after message will be played
     */
    next: TBlockID;
}
/**
 * Mapping of option to a block id
 */
export interface TMenuOptions {
    [option: string]: TBlockID;
}
/**
 * Prompt user to make a choice
 */
export interface TMenu {
    readonly type: 'TMenu';
    /**
     * Prompt to play to offer choices
     */
    message: string;
    /**
     * Menu options configuration
     */
    options: TMenuOptions;
    /**
     * Block to be executed in case of no option provided
     */
    timeout: TBlockID;
    /**
     * Block to be executed in case of mismatching option
     */
    nomatch: TBlockID;
    /**
     * Block to be executed in case of error
     */
    error: TBlockID;
}
/**
 * Finish flow and disconnect user
 */
export interface TDisconnect {
    readonly type: 'TDisconnect';
}
/**
 * Invoke other sub-flow defined in this DSL file
 */
export interface TCall {
    readonly type: 'TCall';
    /**
     * Sub-flow id to be executed
     */
    collection: string;
    /**
     * Block to be executed in case of sub-flow call error
     */
    callError: TBlockID;
    /**
     * Parameters to be passed to a sub-flow
     */
    [parameters: string]: string;
}
/**
 * Prompt user for input
 */
export interface TPrompt {
    readonly type: 'TPrompt';
    /**
     * Prompt to play
     */
    message: TInput;
    /**
     * Variable name where user input will be stored
     */
    destination: TOutput;
    /**
     * Next block to be executed after input will be provided
     */
    next: TBlockID;
    /**
     * Block to be executed in case of no input provided
     */
    timeout: TBlockID;
    /**
     * Block to be executed in case of error
     */
    error: TBlockID;
}
/**
 * Transfer user to a specified team
 */
export interface TToTeam {
    readonly type: 'TToTeam';
    /**
     * Team id, user will be transfered to
     */
    team: string;
    /**
     * Block to be executed in case all team members are busy
     */
    busy: TBlockID;
    /**
     * Block to be executed in case of transfer error
     */
    error: TBlockID;
}
/**
 * Return from subflow to a parent flow
 */
export interface TReturn {
    readonly type: 'TReturn';
    /**
     * Return to a named exit, passed via "exits" parameter
     */
    to: string;
}
/**
 * Map of flow blocks
 */
export interface TBlocks {
    [blocks: string]: TPlay | TMenu | TDisconnect | TCall | TPrompt | TToTeam | TReturn;
}
/**
 * Flow definition
 */
export interface TFlow {
    /**
     * Flow unique identifier
     */
    id: string;
    /**
     * ID of initial block in this flow
     */
    initial: TBlockID;
    /**
     * List of parameters required for this flow to run
     */
    parameters?: string[];
    /**
     * List of exits points of this flow
     */
    exits?: string[];
    /**
     * Blocks defining flow steps
     */
    blocks: TBlocks;
}
/**
 * Sub-flow avaliable to be invoked with TCall, but not defined in this DSL
 */
export interface TProvided {
    /**
     * Flow unique id
     */
    id: TBlockID;
    /**
     * System specific unique resource locator
     */
    resource: string;
}
/**
 * in2cloud DSL root object
 *
 * @title in2cloud DSL
 */
export interface TDSLRoot {
    /**
     *List of @TProvided sub-flows
     */
    provided: TProvided[];
    /**
     * Flows definition
     */
    flows: TFlow[];
}

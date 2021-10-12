# in2cloud DSL Schema

```txt
in2cloud
```

in2cloud DSL root object

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [TDSLRoot.schema.json](../schema/TDSLRoot.schema.json "open original schema") |

## in2cloud DSL Type

`object` ([in2cloud DSL](tdslroot.md))

# in2cloud DSL Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                      |
| :-------------------- | :------ | :------- | :------------- | :------------------------------------------------------------------------------ |
| [flows](#flows)       | `array` | Required | cannot be null | [in2cloud DSL](tdslroot-properties-flows.md "in2cloud#/properties/flows")       |
| [provided](#provided) | `array` | Required | cannot be null | [in2cloud DSL](tdslroot-properties-provided.md "in2cloud#/properties/provided") |

## flows

Flows definition

`flows`

*   is required

*   Type: `object[]` ([TFlow](tdslroot-definitions-tflow.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-properties-flows.md "in2cloud#/properties/flows")

### flows Type

`object[]` ([TFlow](tdslroot-definitions-tflow.md))

## provided

List of @TProvided sub-flows

`provided`

*   is required

*   Type: `object[]` ([TProvided](tdslroot-definitions-tprovided.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-properties-provided.md "in2cloud#/properties/provided")

### provided Type

`object[]` ([TProvided](tdslroot-definitions-tprovided.md))

# in2cloud DSL Definitions

## Definitions group TBlockID

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TBlockID"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group TBlocks

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TBlocks"}
```

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                |
| :-------------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| Additional Properties | Merged | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tblocks-additionalproperties.md "in2cloud#/definitions/TBlocks/additionalProperties") |

### Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([Details](tdslroot-definitions-tblocks-additionalproperties.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblocks-additionalproperties.md "in2cloud#/definitions/TBlocks/additionalProperties")

#### additionalProperties Type

merged type ([Details](tdslroot-definitions-tblocks-additionalproperties.md))

any of

*   [TPlay](tdslroot-definitions-tplay.md "check type definition")

*   [TMenu](tdslroot-definitions-tmenu.md "check type definition")

*   [TDisconnect](tdslroot-definitions-tdisconnect.md "check type definition")

*   [TCall](tdslroot-definitions-tcall.md "check type definition")

*   [TPrompt](tdslroot-definitions-tprompt.md "check type definition")

*   [TToTeam](tdslroot-definitions-ttoteam.md "check type definition")

*   [TReturn](tdslroot-definitions-treturn.md "check type definition")

## Definitions group TCall

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TCall"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [callError](#callerror)   | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-tblockid.md "in2cloud#/definitions/TCall/properties/callError")    |
| [collection](#collection) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-collection.md "in2cloud#/definitions/TCall/properties/collection") |
| [type](#type)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-type.md "in2cloud#/definitions/TCall/properties/type")             |
| Additional Properties     | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-additionalproperties.md "in2cloud#/definitions/TCall/additionalProperties")   |

### callError

Uniquely identifies a block

`callError`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tcall-properties-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tcall-properties-tblockid.md "in2cloud#/definitions/TCall/properties/callError")

#### callError Type

`string` ([TBlockID](tdslroot-definitions-tcall-properties-tblockid.md))

#### callError Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### collection

Sub-flow id to be executed

`collection`

*   is required

*   Type: `string` ([collection](tdslroot-definitions-tcall-properties-collection.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tcall-properties-collection.md "in2cloud#/definitions/TCall/properties/collection")

#### collection Type

`string` ([collection](tdslroot-definitions-tcall-properties-collection.md))

### type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tcall-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tcall-properties-type.md "in2cloud#/definitions/TCall/properties/type")

#### type Type

`string` ([type](tdslroot-definitions-tcall-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"TCall"` |             |

### Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tcall-additionalproperties.md "in2cloud#/definitions/TCall/additionalProperties")

#### additionalProperties Type

`string`

## Definitions group TDisconnect

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TDisconnect"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                              |
| :-------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [type](#type-1) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tdisconnect-properties-type.md "in2cloud#/definitions/TDisconnect/properties/type") |

### type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tdisconnect-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tdisconnect-properties-type.md "in2cloud#/definitions/TDisconnect/properties/type")

#### type Type

`string` ([type](tdslroot-definitions-tdisconnect-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"TDisconnect"` |             |

## Definitions group TFlow

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TFlow"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [blocks](#blocks)         | `object` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblocks.md "in2cloud#/definitions/TFlow/properties/blocks")                         |
| [exits](#exits)           | `array`  | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-exits.md "in2cloud#/definitions/TFlow/properties/exits")           |
| [id](#id)                 | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-id.md "in2cloud#/definitions/TFlow/properties/id")                 |
| [initial](#initial)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-tblockid.md "in2cloud#/definitions/TFlow/properties/initial")      |
| [parameters](#parameters) | `array`  | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-parameters.md "in2cloud#/definitions/TFlow/properties/parameters") |

### blocks

Map of flow blocks

`blocks`

*   is required

*   Type: `object` ([TBlocks](tdslroot-definitions-tblocks.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblocks.md "in2cloud#/definitions/TFlow/properties/blocks")

#### blocks Type

`object` ([TBlocks](tdslroot-definitions-tblocks.md))

### exits

List of exits points of this flow

`exits`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-exits.md "in2cloud#/definitions/TFlow/properties/exits")

#### exits Type

`string[]`

### id

Flow unique identifier

`id`

*   is required

*   Type: `string` ([id](tdslroot-definitions-tflow-properties-id.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-id.md "in2cloud#/definitions/TFlow/properties/id")

#### id Type

`string` ([id](tdslroot-definitions-tflow-properties-id.md))

### initial

Uniquely identifies a block

`initial`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tflow-properties-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-tblockid.md "in2cloud#/definitions/TFlow/properties/initial")

#### initial Type

`string` ([TBlockID](tdslroot-definitions-tflow-properties-tblockid.md))

#### initial Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### parameters

List of parameters required for this flow to run

`parameters`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-parameters.md "in2cloud#/definitions/TFlow/properties/parameters")

#### parameters Type

`string[]`

## Definitions group TInput

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TInput"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group TMenu

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TMenu"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                           |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------- |
| [error](#error)     | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-tblockid.md "in2cloud#/definitions/TMenu/properties/error")     |
| [message](#message) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message")    |
| [nomatch](#nomatch) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-tblockid-1.md "in2cloud#/definitions/TMenu/properties/nomatch") |
| [options](#options) | `object` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenuoptions.md "in2cloud#/definitions/TMenu/properties/options")                |
| [timeout](#timeout) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-tblockid-2.md "in2cloud#/definitions/TMenu/properties/timeout") |
| [type](#type-2)     | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-type.md "in2cloud#/definitions/TMenu/properties/type")          |

### error

Uniquely identifies a block

`error`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tmenu-properties-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-tblockid.md "in2cloud#/definitions/TMenu/properties/error")

#### error Type

`string` ([TBlockID](tdslroot-definitions-tmenu-properties-tblockid.md))

#### error Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### message

Prompt to play to offer choices

`message`

*   is required

*   Type: `string` ([message](tdslroot-definitions-tmenu-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message")

#### message Type

`string` ([message](tdslroot-definitions-tmenu-properties-message.md))

### nomatch

Uniquely identifies a block

`nomatch`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tmenu-properties-tblockid-1.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-tblockid-1.md "in2cloud#/definitions/TMenu/properties/nomatch")

#### nomatch Type

`string` ([TBlockID](tdslroot-definitions-tmenu-properties-tblockid-1.md))

#### nomatch Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### options

Mapping of option to a block id

`options`

*   is required

*   Type: `object` ([TMenuOptions](tdslroot-definitions-tmenuoptions.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenuoptions.md "in2cloud#/definitions/TMenu/properties/options")

#### options Type

`object` ([TMenuOptions](tdslroot-definitions-tmenuoptions.md))

### timeout

Uniquely identifies a block

`timeout`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tmenu-properties-tblockid-2.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-tblockid-2.md "in2cloud#/definitions/TMenu/properties/timeout")

#### timeout Type

`string` ([TBlockID](tdslroot-definitions-tmenu-properties-tblockid-2.md))

#### timeout Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tmenu-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-type.md "in2cloud#/definitions/TMenu/properties/type")

#### type Type

`string` ([type](tdslroot-definitions-tmenu-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"TMenu"` |             |

## Definitions group TMenuOptions

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TMenuOptions"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                          |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenuoptions-additionalproperties.md "in2cloud#/definitions/TMenuOptions/additionalProperties") |

### Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenuoptions-additionalproperties.md "in2cloud#/definitions/TMenuOptions/additionalProperties")

#### additionalProperties Type

`string`

## Definitions group TOutput

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TOutput"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group TPlay

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TPlay"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------- |
| [message](#message-1) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-tinput.md "in2cloud#/definitions/TPlay/properties/message") |
| [next](#next)         | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-tblockid.md "in2cloud#/definitions/TPlay/properties/next")  |
| [type](#type-3)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type")      |

### message

Value or value reference

`message`

*   is required

*   Type: `string` ([TInput](tdslroot-definitions-tplay-properties-tinput.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-tinput.md "in2cloud#/definitions/TPlay/properties/message")

#### message Type

`string` ([TInput](tdslroot-definitions-tplay-properties-tinput.md))

### next

Uniquely identifies a block

`next`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tplay-properties-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-tblockid.md "in2cloud#/definitions/TPlay/properties/next")

#### next Type

`string` ([TBlockID](tdslroot-definitions-tplay-properties-tblockid.md))

#### next Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tplay-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type")

#### type Type

`string` ([type](tdslroot-definitions-tplay-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"TPlay"` |             |

## Definitions group TPrompt

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TPrompt"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [destination](#destination) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-toutput.md "in2cloud#/definitions/TPrompt/properties/destination") |
| [error](#error-1)           | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-tblockid.md "in2cloud#/definitions/TPrompt/properties/error")      |
| [message](#message-2)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-tinput.md "in2cloud#/definitions/TPrompt/properties/message")      |
| [next](#next-1)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-tblockid-1.md "in2cloud#/definitions/TPrompt/properties/next")     |
| [timeout](#timeout-1)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-tblockid-2.md "in2cloud#/definitions/TPrompt/properties/timeout")  |
| [type](#type-4)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-type.md "in2cloud#/definitions/TPrompt/properties/type")           |

### destination

Variable definition

`destination`

*   is required

*   Type: `string` ([TOutput](tdslroot-definitions-tprompt-properties-toutput.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-toutput.md "in2cloud#/definitions/TPrompt/properties/destination")

#### destination Type

`string` ([TOutput](tdslroot-definitions-tprompt-properties-toutput.md))

#### destination Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### error

Uniquely identifies a block

`error`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tprompt-properties-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-tblockid.md "in2cloud#/definitions/TPrompt/properties/error")

#### error Type

`string` ([TBlockID](tdslroot-definitions-tprompt-properties-tblockid.md))

#### error Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### message

Value or value reference

`message`

*   is required

*   Type: `string` ([TInput](tdslroot-definitions-tprompt-properties-tinput.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-tinput.md "in2cloud#/definitions/TPrompt/properties/message")

#### message Type

`string` ([TInput](tdslroot-definitions-tprompt-properties-tinput.md))

### next

Uniquely identifies a block

`next`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tprompt-properties-tblockid-1.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-tblockid-1.md "in2cloud#/definitions/TPrompt/properties/next")

#### next Type

`string` ([TBlockID](tdslroot-definitions-tprompt-properties-tblockid-1.md))

#### next Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### timeout

Uniquely identifies a block

`timeout`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tprompt-properties-tblockid-2.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-tblockid-2.md "in2cloud#/definitions/TPrompt/properties/timeout")

#### timeout Type

`string` ([TBlockID](tdslroot-definitions-tprompt-properties-tblockid-2.md))

#### timeout Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tprompt-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-type.md "in2cloud#/definitions/TPrompt/properties/type")

#### type Type

`string` ([type](tdslroot-definitions-tprompt-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"TPrompt"` |             |

## Definitions group TProvided

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TProvided"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                  |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-1)           | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprovided-properties-tblockid.md "in2cloud#/definitions/TProvided/properties/id")       |
| [resource](#resource) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprovided-properties-resource.md "in2cloud#/definitions/TProvided/properties/resource") |

### id

Uniquely identifies a block

`id`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tprovided-properties-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprovided-properties-tblockid.md "in2cloud#/definitions/TProvided/properties/id")

#### id Type

`string` ([TBlockID](tdslroot-definitions-tprovided-properties-tblockid.md))

#### id Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### resource

System specific unique resource locator

`resource`

*   is required

*   Type: `string` ([resource](tdslroot-definitions-tprovided-properties-resource.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprovided-properties-resource.md "in2cloud#/definitions/TProvided/properties/resource")

#### resource Type

`string` ([resource](tdslroot-definitions-tprovided-properties-resource.md))

## Definitions group TReturn

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TReturn"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                      |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [to](#to)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-treturn-properties-to.md "in2cloud#/definitions/TReturn/properties/to")     |
| [type](#type-5) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-treturn-properties-type.md "in2cloud#/definitions/TReturn/properties/type") |

### to

Return to a named exit, passed via "exits" parameter

`to`

*   is required

*   Type: `string` ([to](tdslroot-definitions-treturn-properties-to.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-treturn-properties-to.md "in2cloud#/definitions/TReturn/properties/to")

#### to Type

`string` ([to](tdslroot-definitions-treturn-properties-to.md))

### type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-treturn-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-treturn-properties-type.md "in2cloud#/definitions/TReturn/properties/type")

#### type Type

`string` ([type](tdslroot-definitions-treturn-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"TReturn"` |             |

## Definitions group TToTeam

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TToTeam"}
```

| Property          | Type     | Required | Nullable       | Defined by                                                                                                             |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [busy](#busy)     | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-ttoteam-properties-tblockid.md "in2cloud#/definitions/TToTeam/properties/busy")    |
| [error](#error-2) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-ttoteam-properties-tblockid-1.md "in2cloud#/definitions/TToTeam/properties/error") |
| [team](#team)     | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-ttoteam-properties-team.md "in2cloud#/definitions/TToTeam/properties/team")        |
| [type](#type-6)   | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-ttoteam-properties-type.md "in2cloud#/definitions/TToTeam/properties/type")        |

### busy

Uniquely identifies a block

`busy`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-ttoteam-properties-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-ttoteam-properties-tblockid.md "in2cloud#/definitions/TToTeam/properties/busy")

#### busy Type

`string` ([TBlockID](tdslroot-definitions-ttoteam-properties-tblockid.md))

#### busy Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### error

Uniquely identifies a block

`error`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-ttoteam-properties-tblockid-1.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-ttoteam-properties-tblockid-1.md "in2cloud#/definitions/TToTeam/properties/error")

#### error Type

`string` ([TBlockID](tdslroot-definitions-ttoteam-properties-tblockid-1.md))

#### error Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

### team

Team id, user will be transfered to

`team`

*   is required

*   Type: `string` ([team](tdslroot-definitions-ttoteam-properties-team.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-ttoteam-properties-team.md "in2cloud#/definitions/TToTeam/properties/team")

#### team Type

`string` ([team](tdslroot-definitions-ttoteam-properties-team.md))

### type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-ttoteam-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-ttoteam-properties-type.md "in2cloud#/definitions/TToTeam/properties/type")

#### type Type

`string` ([type](tdslroot-definitions-ttoteam-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"TToTeam"` |             |

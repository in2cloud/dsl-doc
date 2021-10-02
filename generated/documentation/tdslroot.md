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

| Property      | Type     | Required | Nullable       | Defined by                                                                                                  |
| :------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-type.md "in2cloud#/definitions/TCall/properties/type") |

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

| Property            | Type     | Required | Nullable       | Defined by                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [blocks](#blocks)   | `object` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblocks.md "in2cloud#/definitions/TFlow/properties/blocks")                   |
| [id](#id)           | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-id.md "in2cloud#/definitions/TFlow/properties/id")           |
| [initial](#initial) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-initial.md "in2cloud#/definitions/TFlow/properties/initial") |

### blocks

Map of flow blocks

`blocks`

*   is required

*   Type: `object` ([TBlocks](tdslroot-definitions-tblocks.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblocks.md "in2cloud#/definitions/TFlow/properties/blocks")

#### blocks Type

`object` ([TBlocks](tdslroot-definitions-tblocks.md))

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

ID of initial block in this flow

`initial`

*   is required

*   Type: `string` ([initial](tdslroot-definitions-tflow-properties-initial.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-initial.md "in2cloud#/definitions/TFlow/properties/initial")

#### initial Type

`string` ([initial](tdslroot-definitions-tflow-properties-initial.md))

## Definitions group TMenu

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TMenu"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [message](#message) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message") |
| [type](#type-2)     | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-type.md "in2cloud#/definitions/TMenu/properties/type")       |

### message

Prompt to play to offer choices

`message`

*   is required

*   Type: `string` ([message](tdslroot-definitions-tmenu-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message")

#### message Type

`string` ([message](tdslroot-definitions-tmenu-properties-message.md))

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

## Definitions group TPlay

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TPlay"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                        |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [message](#message-1) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-message.md "in2cloud#/definitions/TPlay/properties/message") |
| [next](#next)         | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-next.md "in2cloud#/definitions/TPlay/properties/next")       |
| [type](#type-3)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type")       |

### message

Prompt to play

`message`

*   is required

*   Type: `string` ([message](tdslroot-definitions-tplay-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-message.md "in2cloud#/definitions/TPlay/properties/message")

#### message Type

`string` ([message](tdslroot-definitions-tplay-properties-message.md))

### next

Next block to be executed after message will be played.

`next`

*   is required

*   Type: `string` ([next](tdslroot-definitions-tplay-properties-next.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-next.md "in2cloud#/definitions/TPlay/properties/next")

#### next Type

`string` ([next](tdslroot-definitions-tplay-properties-next.md))

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

| Property        | Type     | Required | Nullable       | Defined by                                                                                                      |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [type](#type-4) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-type.md "in2cloud#/definitions/TPrompt/properties/type") |

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
| [id](#id-1)           | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprovided-properties-id.md "in2cloud#/definitions/TProvided/properties/id")             |
| [resource](#resource) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprovided-properties-resource.md "in2cloud#/definitions/TProvided/properties/resource") |

### id

Flow unique id

`id`

*   is required

*   Type: `string` ([id](tdslroot-definitions-tprovided-properties-id.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprovided-properties-id.md "in2cloud#/definitions/TProvided/properties/id")

#### id Type

`string` ([id](tdslroot-definitions-tprovided-properties-id.md))

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
| [type](#type-5) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-treturn-properties-type.md "in2cloud#/definitions/TReturn/properties/type") |

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

| Property        | Type     | Required | Nullable       | Defined by                                                                                                      |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [type](#type-6) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-ttoteam-properties-type.md "in2cloud#/definitions/TToTeam/properties/type") |

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

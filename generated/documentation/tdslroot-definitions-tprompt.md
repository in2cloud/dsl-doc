# TPrompt Schema

```txt
in2cloud#/definitions/TBlocks/additionalProperties/anyOf/4
```

Prompt user for input

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## 4 Type

`object` ([TPrompt](tdslroot-definitions-tprompt.md))

# 4 Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [destination](#destination) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-destination.md "in2cloud#/definitions/TPrompt/properties/destination") |
| [error](#error)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-error.md "in2cloud#/definitions/TPrompt/properties/error")             |
| [message](#message)         | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-message.md "in2cloud#/definitions/TPrompt/properties/message")         |
| [next](#next)               | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-next.md "in2cloud#/definitions/TPrompt/properties/next")               |
| [timeout](#timeout)         | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-timeout.md "in2cloud#/definitions/TPrompt/properties/timeout")         |
| [type](#type)               | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-type.md "in2cloud#/definitions/TPrompt/properties/type")               |

## destination

Variable name where user input will be stored

`destination`

*   is required

*   Type: `string` ([destination](tdslroot-definitions-tprompt-properties-destination.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-destination.md "in2cloud#/definitions/TPrompt/properties/destination")

### destination Type

`string` ([destination](tdslroot-definitions-tprompt-properties-destination.md))

## error

Block to be executed in case of error

`error`

*   is required

*   Type: `string` ([error](tdslroot-definitions-tprompt-properties-error.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-error.md "in2cloud#/definitions/TPrompt/properties/error")

### error Type

`string` ([error](tdslroot-definitions-tprompt-properties-error.md))

## message

Prompt to play

`message`

*   is required

*   Type: `string` ([message](tdslroot-definitions-tprompt-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-message.md "in2cloud#/definitions/TPrompt/properties/message")

### message Type

`string` ([message](tdslroot-definitions-tprompt-properties-message.md))

## next

Next block to be executed after input will be provided

`next`

*   is required

*   Type: `string` ([next](tdslroot-definitions-tprompt-properties-next.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-next.md "in2cloud#/definitions/TPrompt/properties/next")

### next Type

`string` ([next](tdslroot-definitions-tprompt-properties-next.md))

## timeout

Block to be executed in case of no input provided

`timeout`

*   is required

*   Type: `string` ([timeout](tdslroot-definitions-tprompt-properties-timeout.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-timeout.md "in2cloud#/definitions/TPrompt/properties/timeout")

### timeout Type

`string` ([timeout](tdslroot-definitions-tprompt-properties-timeout.md))

## type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tprompt-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprompt-properties-type.md "in2cloud#/definitions/TPrompt/properties/type")

### type Type

`string` ([type](tdslroot-definitions-tprompt-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"TPrompt"` |             |

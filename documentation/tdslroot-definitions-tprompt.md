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

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                      |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [destination](#destination) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-toutput.md "in2cloud#/definitions/TPrompt/properties/destination")          |
| [error](#error)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TPrompt/properties/error")               |
| [message](#message)         | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tinput.md "in2cloud#/definitions/TPrompt/properties/message")               |
| [next](#next)               | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TPrompt/properties/next")                |
| [timeout](#timeout)         | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TPrompt/properties/timeout")             |
| [type](#type)               | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-type.md "in2cloud#/definitions/TPrompt/properties/type") |

## destination

Variable definition

`destination`

*   is required

*   Type: `string` ([TOutput](tdslroot-definitions-toutput.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-toutput.md "in2cloud#/definitions/TPrompt/properties/destination")

### destination Type

`string` ([TOutput](tdslroot-definitions-toutput.md))

### destination Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## error

Uniquely defines block

`error`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TPrompt/properties/error")

### error Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### error Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## message

Value or value reference

`message`

*   is required

*   Type: `string` ([TInput](tdslroot-definitions-tinput.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tinput.md "in2cloud#/definitions/TPrompt/properties/message")

### message Type

`string` ([TInput](tdslroot-definitions-tinput.md))

## next

Uniquely defines block

`next`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TPrompt/properties/next")

### next Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### next Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## timeout

Uniquely defines block

`timeout`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TPrompt/properties/timeout")

### timeout Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### timeout Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

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

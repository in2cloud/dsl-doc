# TPlay Schema

```txt
in2cloud#/definitions/TBlocks/additionalProperties/anyOf/0
```

Play message to a user

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## 0 Type

`object` ([TPlay](tdslroot-definitions-tplay.md))

# 0 Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                  |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------- |
| [message](#message) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tinput.md "in2cloud#/definitions/TPlay/properties/message")             |
| [next](#next)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TPlay/properties/next")              |
| [type](#type)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type") |

## message

Value or value reference

`message`

*   is required

*   Type: `string` ([TInput](tdslroot-definitions-tinput.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tinput.md "in2cloud#/definitions/TPlay/properties/message")

### message Type

`string` ([TInput](tdslroot-definitions-tinput.md))

## next

Uniquely defines block

`next`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TPlay/properties/next")

### next Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### next Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tplay-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type")

### type Type

`string` ([type](tdslroot-definitions-tplay-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"TPlay"` |             |

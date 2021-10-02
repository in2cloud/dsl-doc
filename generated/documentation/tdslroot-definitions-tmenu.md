# TMenu Schema

```txt
in2cloud#/definitions/TBlocks/additionalProperties/anyOf/1
```

Prompt user to make a choice

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## 1 Type

`object` ([TMenu](tdslroot-definitions-tmenu.md))

# 1 Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [error](#error)     | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TMenu/properties/error")                   |
| [message](#message) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message") |
| [nomatch](#nomatch) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TMenu/properties/nomatch")                 |
| [options](#options) | `object` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenuoptions.md "in2cloud#/definitions/TMenu/properties/options")             |
| [timeout](#timeout) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TMenu/properties/timeout")                 |
| [type](#type)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-type.md "in2cloud#/definitions/TMenu/properties/type")       |

## error

Uniquely defines block

`error`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TMenu/properties/error")

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

Prompt to play to offer choices

`message`

*   is required

*   Type: `string` ([message](tdslroot-definitions-tmenu-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message")

### message Type

`string` ([message](tdslroot-definitions-tmenu-properties-message.md))

## nomatch

Uniquely defines block

`nomatch`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TMenu/properties/nomatch")

### nomatch Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### nomatch Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## options

Mapping of option to a block id

`options`

*   is required

*   Type: `object` ([TMenuOptions](tdslroot-definitions-tmenuoptions.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenuoptions.md "in2cloud#/definitions/TMenu/properties/options")

### options Type

`object` ([TMenuOptions](tdslroot-definitions-tmenuoptions.md))

## timeout

Uniquely defines block

`timeout`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TMenu/properties/timeout")

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

*   Type: `string` ([type](tdslroot-definitions-tmenu-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-type.md "in2cloud#/definitions/TMenu/properties/type")

### type Type

`string` ([type](tdslroot-definitions-tmenu-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"TMenu"` |             |

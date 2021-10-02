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
| [error](#error)     | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-error.md "in2cloud#/definitions/TMenu/properties/error")     |
| [message](#message) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message") |
| [nomatch](#nomatch) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-nomatch.md "in2cloud#/definitions/TMenu/properties/nomatch") |
| [options](#options) | `object` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenuoptions.md "in2cloud#/definitions/TMenu/properties/options")             |
| [timeout](#timeout) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-timeout.md "in2cloud#/definitions/TMenu/properties/timeout") |
| [type](#type)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-type.md "in2cloud#/definitions/TMenu/properties/type")       |

## error

Block to be executed in case of error

`error`

*   is required

*   Type: `string` ([error](tdslroot-definitions-tmenu-properties-error.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-error.md "in2cloud#/definitions/TMenu/properties/error")

### error Type

`string` ([error](tdslroot-definitions-tmenu-properties-error.md))

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

Block to be executed in case of mismatching option

`nomatch`

*   is required

*   Type: `string` ([nomatch](tdslroot-definitions-tmenu-properties-nomatch.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-nomatch.md "in2cloud#/definitions/TMenu/properties/nomatch")

### nomatch Type

`string` ([nomatch](tdslroot-definitions-tmenu-properties-nomatch.md))

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

Block to be executed in case of no option provided

`timeout`

*   is required

*   Type: `string` ([timeout](tdslroot-definitions-tmenu-properties-timeout.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-timeout.md "in2cloud#/definitions/TMenu/properties/timeout")

### timeout Type

`string` ([timeout](tdslroot-definitions-tmenu-properties-timeout.md))

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

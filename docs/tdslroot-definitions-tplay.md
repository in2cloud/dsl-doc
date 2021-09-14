# TPlay Schema

```txt
in2cloud#/definitions/TFlow/properties/blocks/items/anyOf/0
```

Play message to a user

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## 0 Type

`object` ([TPlay](tdslroot-definitions-tplay.md))

# 0 Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [message](#message) | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-message.md "in2cloud#/definitions/TPlay/properties/message") |
| [next](#next)       | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-next.md "in2cloud#/definitions/TPlay/properties/next")       |
| [type](#type)       | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type")       |

## message

Message to play

`message`

*   is optional

*   Type: `string` ([message](tdslroot-definitions-tplay-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-message.md "in2cloud#/definitions/TPlay/properties/message")

### message Type

`string` ([message](tdslroot-definitions-tplay-properties-message.md))

## next

Next block to be executed

`next`

*   is optional

*   Type: `string` ([next](tdslroot-definitions-tplay-properties-next.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-next.md "in2cloud#/definitions/TPlay/properties/next")

### next Type

`string` ([next](tdslroot-definitions-tplay-properties-next.md))

## type

Type of the block.

`type`

*   is optional

*   Type: `string` ([type](tdslroot-definitions-tplay-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type")

### type Type

`string` ([type](tdslroot-definitions-tplay-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"TMenu"` |             |
| `"TPlay"` |             |

# TMenu Schema

```txt
in2cloud#/definitions/TFlow/properties/blocks/items/anyOf/1
```

Prompt user to make a choice

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TDSLRoot.schema.json*](../../schema/TDSLRoot.schema.json "open original schema") |

## 1 Type

`object` ([TMenu](tdslroot-definitions-tmenu.md))

# 1 Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [message](#message) | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message") |
| [type](#type)       | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-type.md "in2cloud#/definitions/TMenu/properties/type")       |

## message

Prompt to play to offer choices

`message`

*   is optional

*   Type: `string` ([message](tdslroot-definitions-tmenu-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message")

### message Type

`string` ([message](tdslroot-definitions-tmenu-properties-message.md))

## type

Type of the block.

`type`

*   is optional

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
| `"TPlay"` |             |

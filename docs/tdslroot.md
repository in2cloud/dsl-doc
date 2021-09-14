# in2cloud DSL Schema

```txt
in2cloud
```

in2cloud DSL root object

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Allowed               | none                | [TDSLRoot.schema.json](../schema/TDSLRoot.schema.json "open original schema") |

## in2cloud DSL Type

`object` ([in2cloud DSL](tdslroot.md))

# in2cloud DSL Properties

| Property        | Type    | Required | Nullable       | Defined by                                                                |
| :-------------- | :------ | :------- | :------------- | :------------------------------------------------------------------------ |
| [flows](#flows) | `array` | Optional | cannot be null | [in2cloud DSL](tdslroot-properties-flows.md "in2cloud#/properties/flows") |

## flows

Flows definition

`flows`

*   is optional

*   Type: `object[]` ([TFlow](tdslroot-definitions-tflow.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-properties-flows.md "in2cloud#/properties/flows")

### flows Type

`object[]` ([TFlow](tdslroot-definitions-tflow.md))

# in2cloud DSL Definitions

## Definitions group TFlow

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TFlow"}
```

| Property          | Type    | Required | Nullable       | Defined by                                                                                                      |
| :---------------- | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [blocks](#blocks) | `array` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-blocks.md "in2cloud#/definitions/TFlow/properties/blocks") |

### blocks

Blocks defining flow logic

`blocks`

*   is optional

*   Type: an array of merged types ([Details](tdslroot-definitions-tflow-properties-blocks-items.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-blocks.md "in2cloud#/definitions/TFlow/properties/blocks")

#### blocks Type

an array of merged types ([Details](tdslroot-definitions-tflow-properties-blocks-items.md))

## Definitions group TMenu

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TMenu"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [message](#message) | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message") |
| [type](#type)       | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tmenu-properties-type.md "in2cloud#/definitions/TMenu/properties/type")       |

### message

Prompt to play to offer choices

`message`

*   is optional

*   Type: `string` ([message](tdslroot-definitions-tmenu-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tmenu-properties-message.md "in2cloud#/definitions/TMenu/properties/message")

#### message Type

`string` ([message](tdslroot-definitions-tmenu-properties-message.md))

### type

Type of the block.

`type`

*   is optional

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
| `"TPlay"` |             |

## Definitions group TPlay

Reference this group by using

```json
{"$ref":"in2cloud#/definitions/TPlay"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                        |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [message](#message-1) | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-message.md "in2cloud#/definitions/TPlay/properties/message") |
| [type](#type-1)       | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type")       |

### message

Message to play

`message`

*   is optional

*   Type: `string` ([message](tdslroot-definitions-tplay-properties-message.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-message.md "in2cloud#/definitions/TPlay/properties/message")

#### message Type

`string` ([message](tdslroot-definitions-tplay-properties-message.md))

### type

Type of the block.

`type`

*   is optional

*   Type: `string` ([type](tdslroot-definitions-tplay-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tplay-properties-type.md "in2cloud#/definitions/TPlay/properties/type")

#### type Type

`string` ([type](tdslroot-definitions-tplay-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"TMenu"` |             |
| `"TPlay"` |             |

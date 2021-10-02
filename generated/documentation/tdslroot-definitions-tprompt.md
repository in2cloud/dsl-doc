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

| Property      | Type     | Required | Nullable       | Defined by                                                                                                      |
| :------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprompt-properties-type.md "in2cloud#/definitions/TPrompt/properties/type") |

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

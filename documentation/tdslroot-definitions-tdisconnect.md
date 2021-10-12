# TDisconnect Schema

```txt
in2cloud#/definitions/TBlocks/additionalProperties/anyOf/2
```

Finish flow and disconnect user

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## 2 Type

`object` ([TDisconnect](tdslroot-definitions-tdisconnect.md))

# 2 Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                              |
| :------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tdisconnect-properties-type.md "in2cloud#/definitions/TDisconnect/properties/type") |

## type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tdisconnect-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tdisconnect-properties-type.md "in2cloud#/definitions/TDisconnect/properties/type")

### type Type

`string` ([type](tdslroot-definitions-tdisconnect-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"TDisconnect"` |             |

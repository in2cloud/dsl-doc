# TCall Schema

```txt
in2cloud#/definitions/TBlocks/additionalProperties/anyOf/3
```

Invoke other sub-flow defined in this DSL file

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## 3 Type

`object` ([TCall](tdslroot-definitions-tcall.md))

# 3 Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [callError](#callerror)   | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-callerror.md "in2cloud#/definitions/TCall/properties/callError")   |
| [collection](#collection) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-collection.md "in2cloud#/definitions/TCall/properties/collection") |
| [type](#type)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-type.md "in2cloud#/definitions/TCall/properties/type")             |
| Additional Properties     | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-additionalproperties.md "in2cloud#/definitions/TCall/additionalProperties")   |

## callError

Block to be executed in case of sub-flow call error

`callError`

*   is required

*   Type: `string` ([callError](tdslroot-definitions-tcall-properties-callerror.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tcall-properties-callerror.md "in2cloud#/definitions/TCall/properties/callError")

### callError Type

`string` ([callError](tdslroot-definitions-tcall-properties-callerror.md))

## collection

Sub-flow id to be executed

`collection`

*   is required

*   Type: `string` ([collection](tdslroot-definitions-tcall-properties-collection.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tcall-properties-collection.md "in2cloud#/definitions/TCall/properties/collection")

### collection Type

`string` ([collection](tdslroot-definitions-tcall-properties-collection.md))

## type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-tcall-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tcall-properties-type.md "in2cloud#/definitions/TCall/properties/type")

### type Type

`string` ([type](tdslroot-definitions-tcall-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"TCall"` |             |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tcall-additionalproperties.md "in2cloud#/definitions/TCall/additionalProperties")

### additionalProperties Type

`string`

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
| [callError](#callerror)   | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TCall/properties/callError")                     |
| [collection](#collection) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-collection.md "in2cloud#/definitions/TCall/properties/collection") |
| [type](#type)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-properties-type.md "in2cloud#/definitions/TCall/properties/type")             |
| Additional Properties     | `string` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tcall-additionalproperties.md "in2cloud#/definitions/TCall/additionalProperties")   |

## callError

Uniquely identifies a block

`callError`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TCall/properties/callError")

### callError Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### callError Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

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

# TProvided Schema

```txt
in2cloud#/properties/provided/items
```

Sub-flow avaliable to be invoked with TCall, but not defined in this DSL

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## items Type

`object` ([TProvided](tdslroot-definitions-tprovided.md))

# items Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                  |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TProvided/properties/id")                            |
| [resource](#resource) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprovided-properties-resource.md "in2cloud#/definitions/TProvided/properties/resource") |

## id

Uniquely defines block

`id`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TProvided/properties/id")

### id Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### id Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## resource

System specific unique resource locator

`resource`

*   is required

*   Type: `string` ([resource](tdslroot-definitions-tprovided-properties-resource.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprovided-properties-resource.md "in2cloud#/definitions/TProvided/properties/resource")

### resource Type

`string` ([resource](tdslroot-definitions-tprovided-properties-resource.md))

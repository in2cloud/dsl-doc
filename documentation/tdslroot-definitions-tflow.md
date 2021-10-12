# TFlow Schema

```txt
in2cloud#/properties/flows/items
```

Flow definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## items Type

`object` ([TFlow](tdslroot-definitions-tflow.md))

# items Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [blocks](#blocks)         | `object` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblocks.md "in2cloud#/definitions/TFlow/properties/blocks")                         |
| [exits](#exits)           | `array`  | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-exits.md "in2cloud#/definitions/TFlow/properties/exits")           |
| [id](#id)                 | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-id.md "in2cloud#/definitions/TFlow/properties/id")                 |
| [initial](#initial)       | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TFlow/properties/initial")                       |
| [parameters](#parameters) | `array`  | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-parameters.md "in2cloud#/definitions/TFlow/properties/parameters") |

## blocks

Map of flow blocks

`blocks`

*   is required

*   Type: `object` ([TBlocks](tdslroot-definitions-tblocks.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblocks.md "in2cloud#/definitions/TFlow/properties/blocks")

### blocks Type

`object` ([TBlocks](tdslroot-definitions-tblocks.md))

## exits

List of exits points of this flow

`exits`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-exits.md "in2cloud#/definitions/TFlow/properties/exits")

### exits Type

`string[]`

## id

Flow unique identifier

`id`

*   is required

*   Type: `string` ([id](tdslroot-definitions-tflow-properties-id.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-id.md "in2cloud#/definitions/TFlow/properties/id")

### id Type

`string` ([id](tdslroot-definitions-tflow-properties-id.md))

## initial

Uniquely identifies a block

`initial`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TFlow/properties/initial")

### initial Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### initial Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## parameters

List of parameters required for this flow to run

`parameters`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-parameters.md "in2cloud#/definitions/TFlow/properties/parameters")

### parameters Type

`string[]`

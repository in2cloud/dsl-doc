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

| Property            | Type     | Required | Nullable       | Defined by                                                                                                        |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [blocks](#blocks)   | `object` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblocks.md "in2cloud#/definitions/TFlow/properties/blocks")                   |
| [id](#id)           | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-id.md "in2cloud#/definitions/TFlow/properties/id")           |
| [initial](#initial) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-initial.md "in2cloud#/definitions/TFlow/properties/initial") |

## blocks

Map of flow blocks

`blocks`

*   is required

*   Type: `object` ([TBlocks](tdslroot-definitions-tblocks.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblocks.md "in2cloud#/definitions/TFlow/properties/blocks")

### blocks Type

`object` ([TBlocks](tdslroot-definitions-tblocks.md))

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

ID of initial block in this flow

`initial`

*   is required

*   Type: `string` ([initial](tdslroot-definitions-tflow-properties-initial.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-initial.md "in2cloud#/definitions/TFlow/properties/initial")

### initial Type

`string` ([initial](tdslroot-definitions-tflow-properties-initial.md))

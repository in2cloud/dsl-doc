# TFlow Schema

```txt
in2cloud#/properties/flows/items
```

Flow definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TDSLRoot.schema.json*](../../schema/TDSLRoot.schema.json "open original schema") |

## items Type

`object` ([TFlow](tdslroot-definitions-tflow.md))

# items Properties

| Property          | Type    | Required | Nullable       | Defined by                                                                                                      |
| :---------------- | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [blocks](#blocks) | `array` | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tflow-properties-blocks.md "in2cloud#/definitions/TFlow/properties/blocks") |

## blocks

Blocks defining flow logic

`blocks`

*   is optional

*   Type: an array of merged types ([Details](tdslroot-definitions-tflow-properties-blocks-items.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tflow-properties-blocks.md "in2cloud#/definitions/TFlow/properties/blocks")

### blocks Type

an array of merged types ([Details](tdslroot-definitions-tflow-properties-blocks-items.md))

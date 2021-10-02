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
| [id](#id)             | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprovided-properties-id.md "in2cloud#/definitions/TProvided/properties/id")             |
| [resource](#resource) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tprovided-properties-resource.md "in2cloud#/definitions/TProvided/properties/resource") |

## id

Flow unique id

`id`

*   is required

*   Type: `string` ([id](tdslroot-definitions-tprovided-properties-id.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprovided-properties-id.md "in2cloud#/definitions/TProvided/properties/id")

### id Type

`string` ([id](tdslroot-definitions-tprovided-properties-id.md))

## resource

System specific unique resource locator

`resource`

*   is required

*   Type: `string` ([resource](tdslroot-definitions-tprovided-properties-resource.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tprovided-properties-resource.md "in2cloud#/definitions/TProvided/properties/resource")

### resource Type

`string` ([resource](tdslroot-definitions-tprovided-properties-resource.md))

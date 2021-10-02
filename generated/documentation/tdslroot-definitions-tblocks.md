# TBlocks Schema

```txt
in2cloud#/definitions/TFlow/properties/blocks
```

Map of flow blocks

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## blocks Type

`object` ([TBlocks](tdslroot-definitions-tblocks.md))

# blocks Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                |
| :-------------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| Additional Properties | Merged | Optional | cannot be null | [in2cloud DSL](tdslroot-definitions-tblocks-additionalproperties.md "in2cloud#/definitions/TBlocks/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([Details](tdslroot-definitions-tblocks-additionalproperties.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblocks-additionalproperties.md "in2cloud#/definitions/TBlocks/additionalProperties")

### additionalProperties Type

merged type ([Details](tdslroot-definitions-tblocks-additionalproperties.md))

any of

*   [TPlay](tdslroot-definitions-tplay.md "check type definition")

*   [TMenu](tdslroot-definitions-tmenu.md "check type definition")

*   [TDisconnect](tdslroot-definitions-tdisconnect.md "check type definition")

*   [TCall](tdslroot-definitions-tcall.md "check type definition")

*   [TPrompt](tdslroot-definitions-tprompt.md "check type definition")

*   [TToTeam](tdslroot-definitions-ttoteam.md "check type definition")

*   [TReturn](tdslroot-definitions-treturn.md "check type definition")

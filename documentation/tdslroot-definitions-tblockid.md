# TBlockID Schema

```txt
in2cloud#/definitions/TProvided/properties/id
```

Uniquely identifies a block

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## id Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

## id Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

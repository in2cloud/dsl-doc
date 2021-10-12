# TToTeam Schema

```txt
in2cloud#/definitions/TBlocks/additionalProperties/anyOf/5
```

Transfer user to a specified team

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [TDSLRoot.schema.json*](../schema/TDSLRoot.schema.json "open original schema") |

## 5 Type

`object` ([TToTeam](tdslroot-definitions-ttoteam.md))

# 5 Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                      |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [busy](#busy)   | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TToTeam/properties/busy")                |
| [error](#error) | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TToTeam/properties/error")               |
| [team](#team)   | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-ttoteam-properties-team.md "in2cloud#/definitions/TToTeam/properties/team") |
| [type](#type)   | `string` | Required | cannot be null | [in2cloud DSL](tdslroot-definitions-ttoteam-properties-type.md "in2cloud#/definitions/TToTeam/properties/type") |

## busy

Uniquely defines block

`busy`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TToTeam/properties/busy")

### busy Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### busy Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## error

Uniquely defines block

`error`

*   is required

*   Type: `string` ([TBlockID](tdslroot-definitions-tblockid.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-tblockid.md "in2cloud#/definitions/TToTeam/properties/error")

### error Type

`string` ([TBlockID](tdslroot-definitions-tblockid.md))

### error Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_%5D\*%24 "try regular expression with regexr.com")

## team

Team id, user will be transfered to

`team`

*   is required

*   Type: `string` ([team](tdslroot-definitions-ttoteam-properties-team.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-ttoteam-properties-team.md "in2cloud#/definitions/TToTeam/properties/team")

### team Type

`string` ([team](tdslroot-definitions-ttoteam-properties-team.md))

## type



`type`

*   is required

*   Type: `string` ([type](tdslroot-definitions-ttoteam-properties-type.md))

*   cannot be null

*   defined in: [in2cloud DSL](tdslroot-definitions-ttoteam-properties-type.md "in2cloud#/definitions/TToTeam/properties/type")

### type Type

`string` ([type](tdslroot-definitions-ttoteam-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"TToTeam"` |             |

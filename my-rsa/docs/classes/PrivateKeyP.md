# Class: PrivateKeyP

## Table of contents

### Constructors

- [constructor](PrivateKeyP.md#constructor)

### Properties

- [\_p](PrivateKeyP.md#_p)
- [\_q](PrivateKeyP.md#_q)
- [lambda](PrivateKeyP.md#lambda)
- [mu](PrivateKeyP.md#mu)
- [publicKey](PrivateKeyP.md#publickey)

### Methods

- [decrypt](PrivateKeyP.md#decrypt)

## Constructors

### constructor

• **new PrivateKeyP**(`lambda`, `mu`, `publicKey`, `p?`, `q?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lambda` | `bigint` |
| `mu` | `bigint` |
| `publicKey` | [`PublicKeyP`](PublicKeyP.md) |
| `p?` | `bigint` |
| `q?` | `bigint` |

#### Defined in

my-paillier.ts:31

## Properties

### \_p

• `Private` `Optional` `Readonly` **\_p**: `bigint`

#### Defined in

my-paillier.ts:28

___

### \_q

• `Private` `Optional` `Readonly` **\_q**: `bigint`

#### Defined in

my-paillier.ts:29

___

### lambda

• **lambda**: `bigint`

#### Defined in

my-paillier.ts:25

___

### mu

• **mu**: `bigint`

#### Defined in

my-paillier.ts:26

___

### publicKey

• **publicKey**: [`PublicKeyP`](PublicKeyP.md)

#### Defined in

my-paillier.ts:27

## Methods

### decrypt

▸ **decrypt**(`c`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `bigint` |

#### Returns

`bigint`

#### Defined in

my-paillier.ts:39

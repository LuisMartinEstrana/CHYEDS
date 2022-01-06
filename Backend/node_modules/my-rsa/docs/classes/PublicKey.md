# Class: PublicKey

## Table of contents

### Constructors

- [constructor](PublicKey.md#constructor)

### Properties

- [e](PublicKey.md#e)
- [n](PublicKey.md#n)

### Methods

- [encrypt](PublicKey.md#encrypt)
- [verify](PublicKey.md#verify)

## Constructors

### constructor

• **new PublicKey**(`e`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `bigint` |
| `n` | `bigint` |

#### Defined in

my-rsa.ts:7

## Properties

### e

• **e**: `bigint`

#### Defined in

my-rsa.ts:4

___

### n

• **n**: `bigint`

#### Defined in

my-rsa.ts:5

## Methods

### encrypt

▸ **encrypt**(`plaintext`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `plaintext` | `bigint` |

#### Returns

`bigint`

#### Defined in

my-rsa.ts:12

___

### verify

▸ **verify**(`signed`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signed` | `bigint` |

#### Returns

`bigint`

#### Defined in

my-rsa.ts:16

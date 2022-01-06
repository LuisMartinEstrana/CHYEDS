# Class: PrivateKey

## Table of contents

### Constructors

- [constructor](PrivateKey.md#constructor)

### Properties

- [d](PrivateKey.md#d)
- [n](PrivateKey.md#n)

### Methods

- [decrypt](PrivateKey.md#decrypt)
- [sign](PrivateKey.md#sign)

## Constructors

### constructor

• **new PrivateKey**(`d`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `bigint` |
| `n` | `bigint` |

#### Defined in

my-rsa.ts:25

## Properties

### d

• **d**: `bigint`

#### Defined in

my-rsa.ts:22

___

### n

• **n**: `bigint`

#### Defined in

my-rsa.ts:23

## Methods

### decrypt

▸ **decrypt**(`ciphertext`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ciphertext` | `bigint` |

#### Returns

`bigint`

#### Defined in

my-rsa.ts:30

___

### sign

▸ **sign**(`msg`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `bigint` |

#### Returns

`bigint`

#### Defined in

my-rsa.ts:34

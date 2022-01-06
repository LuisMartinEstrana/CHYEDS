# my-rsa - v0.9.4

My module description. Please update with your module data.

**`remarks`**
This module runs perfectly in node.js and browsers

## Table of contents

### Classes

- [PrivateKey](classes/PrivateKey.md)
- [PrivateKeyP](classes/PrivateKeyP.md)
- [PublicKey](classes/PublicKey.md)
- [PublicKeyP](classes/PublicKeyP.md)

### Functions

- [generateKeys](API.md#generatekeys)
- [generateKeysP](API.md#generatekeysp)

## Functions

### generateKeys

▸ **generateKeys**(`bitlength?`): `Promise`<{ `privateKey`: [`PrivateKey`](classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](classes/PublicKey.md)  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bitlength` | `number` | `1024` |

#### Returns

`Promise`<{ `privateKey`: [`PrivateKey`](classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](classes/PublicKey.md)  }\>

#### Defined in

my-rsa.ts:39

___

### generateKeysP

▸ **generateKeysP**(`bitlength?`, `simpleVariant?`): `Promise`<{ `privateKey`: [`PrivateKeyP`](classes/PrivateKeyP.md) ; `publicKey`: [`PublicKeyP`](classes/PublicKeyP.md)  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bitlength` | `number` | `3072` |
| `simpleVariant` | `boolean` | `false` |

#### Returns

`Promise`<{ `privateKey`: [`PrivateKeyP`](classes/PrivateKeyP.md) ; `publicKey`: [`PublicKeyP`](classes/PublicKeyP.md)  }\>

#### Defined in

my-paillier.ts:44

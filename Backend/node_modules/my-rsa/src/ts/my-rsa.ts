import * as bcu from 'bigint-crypto-utils'

export class PublicKey {
  e: bigint
  n: bigint

  constructor (e: bigint, n: bigint) {
    this.e = e
    this.n = n
  }

  encrypt (plaintext: bigint): bigint {
    return bcu.modPow(plaintext, this.e, this.n)
  }

  verify (signed: bigint): bigint {
    return bcu.modPow(signed, this.e, this.n)
  }
}

export class PrivateKey {
  d: bigint
  n: bigint

  constructor (d: bigint, n: bigint) {
    this.d = d
    this.n = n
  }

  decrypt (ciphertext: bigint): bigint {
    return bcu.modPow(ciphertext, this.d, this.n)
  }

  sign (msg: bigint): bigint {
    return bcu.modPow(msg, this.d, this.n)
  }
}

export async function generateKeys (bitlength: number = 1024): Promise<{ publicKey: PublicKey, privateKey: PrivateKey }> {
  let p: bigint, q: bigint, n: bigint, phin: bigint
  const e = 65537n
  do {
    p = await bcu.prime(bitlength / 2 + 1)
    q = await bcu.prime(bitlength / 2)
    n = p * q
    phin = (p - 1n) * (q - 1n)
  } while (bcu.bitLength(n) !== bitlength || bcu.gcd(e, phin) > 1)
  const d = bcu.modInv(e, phin)

  const publicKey = new PublicKey(e, n)
  const priateKey = new PrivateKey(d, n)
  return {
    publicKey: publicKey,
    privateKey: priateKey
  }
}

import * as bcu from 'bigint-crypto-utils'

export class PublicKeyP {
  n: bigint
  g: bigint
  _n2: bigint

  constructor (n: bigint, g: bigint) {
    this.n = n
    this.g = g
    this._n2 = this.n ** 2n
  }

  encrypt (m: bigint, r?: bigint): bigint {
    if (r === undefined) {
      do {
        r = bcu.randBetween(this.n)
      } while (bcu.gcd(r, this.n) !== 1n)
    }
    return (bcu.modPow(this.g, m, this._n2) * bcu.modPow(r, this.n, this._n2)) % this._n2
  }
}

export class PrivateKeyP {
  lambda: bigint
  mu: bigint
  publicKey: PublicKeyP
  private readonly _p?: bigint
  private readonly _q?: bigint

  constructor (lambda: bigint, mu: bigint, publicKey: PublicKeyP, p?: bigint, q?: bigint) {
    this.lambda = lambda
    this.mu = mu
    this._p = p
    this._q = q
    this.publicKey = publicKey
  }

  decrypt (c: bigint): bigint {
    return (L(bcu.modPow(c, this.lambda, this.publicKey._n2), this.publicKey.n) * this.mu) % this.publicKey.n
  }
}

function L (a: bigint, n: bigint): bigint {
  return (a - 1n)
}

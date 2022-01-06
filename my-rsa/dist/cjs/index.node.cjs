'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bcu = require('bigint-crypto-utils');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var bcu__namespace = /*#__PURE__*/_interopNamespace(bcu);

class PublicKey {
    constructor(e, n) {
        this.e = e;
        this.n = n;
    }
    encrypt(plaintext) {
        return bcu__namespace.modPow(plaintext, this.e, this.n);
    }
    verify(signed) {
        return bcu__namespace.modPow(signed, this.e, this.n);
    }
}
class PrivateKey {
    constructor(d, n) {
        this.d = d;
        this.n = n;
    }
    decrypt(ciphertext) {
        return bcu__namespace.modPow(ciphertext, this.d, this.n);
    }
    sign(msg) {
        return bcu__namespace.modPow(msg, this.d, this.n);
    }
}
async function generateKeys(bitlength = 1024) {
    let p, q, n, phin;
    const e = 65537n;
    do {
        p = await bcu__namespace.prime(bitlength / 2 + 1);
        q = await bcu__namespace.prime(bitlength / 2);
        n = p * q;
        phin = (p - 1n) * (q - 1n);
    } while (bcu__namespace.bitLength(n) !== bitlength || bcu__namespace.gcd(e, phin) > 1);
    const d = bcu__namespace.modInv(e, phin);
    const publicKey = new PublicKey(e, n);
    const priateKey = new PrivateKey(d, n);
    return {
        publicKey: publicKey,
        privateKey: priateKey
    };
}

class PublicKeyP {
    constructor(n, g) {
        this.n = n;
        this.g = g;
        this._n2 = this.n ** 2n;
    }
    encrypt(m, r) {
        if (r === undefined) {
            do {
                r = bcu__namespace.randBetween(this.n);
            } while (bcu__namespace.gcd(r, this.n) !== 1n);
        }
        return (bcu__namespace.modPow(this.g, m, this._n2) * bcu__namespace.modPow(r, this.n, this._n2)) % this._n2;
    }
}
class PrivateKeyP {
    constructor(lambda, mu, publicKey, p, q) {
        this.lambda = lambda;
        this.mu = mu;
        this._p = p;
        this._q = q;
        this.publicKey = publicKey;
    }
    decrypt(c) {
        return (L(bcu__namespace.modPow(c, this.lambda, this.publicKey._n2), this.publicKey.n) * this.mu) % this.publicKey.n;
    }
}
async function generateKeysP(bitlength = 3072, simpleVariant = false) {
    let p, q, n, g, lambda, mu;
    do {
        p = await bcu__namespace.prime(bitlength / 2 + 1);
        q = await bcu__namespace.prime(bitlength / 2);
        n = p * q;
    } while (bcu__namespace.bitLength(n) !== bitlength || q === p);
    if (simpleVariant) {
        g = n + 1n;
        lambda = (q - 1n) * (q - 1n);
        mu = bcu__namespace.modInv(lambda, n);
    }
    else {
        const n2 = n ** 2n;
        g = getGenerator(n, n2);
        lambda = bcu__namespace.lcm(p - 1n, q - 1n);
        mu = bcu__namespace.modInv(L(bcu__namespace.modPow(g, lambda, n2)), n);
    }
    const publicKey = new PublicKeyP(n, g);
    const priateKey = new PrivateKeyP(lambda, mu, publicKey, p, q);
    return {
        publicKey: publicKey,
        privateKey: priateKey
    };
    function getGenerator(n, n2) {
        const alpha = bcu__namespace.randBetween(n);
        const beta = bcu__namespace.randBetween(n);
        return ((alpha * n + 1n) * bcu__namespace.modPow(beta, n, n2)) % n2;
    }
}
function L(a, n) {
    return (a - 1n);
}

exports.PrivateKey = PrivateKey;
exports.PrivateKeyP = PrivateKeyP;
exports.PublicKey = PublicKey;
exports.PublicKeyP = PublicKeyP;
exports.generateKeys = generateKeys;
exports.generateKeysP = generateKeysP;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9teS1yc2EudHMiLCIuLi8uLi9zcmMvdHMvbXktcGFpbGxpZXIudHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbImJjdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFYSxTQUFTO0lBSXBCLFlBQWEsQ0FBUyxFQUFFLENBQVM7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNYO0lBRUQsT0FBTyxDQUFFLFNBQWlCO1FBQ3hCLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzdDO0lBRUQsTUFBTSxDQUFFLE1BQWM7UUFDcEIsT0FBT0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDMUM7Q0FDRjtNQUVZLFVBQVU7SUFJckIsWUFBYSxDQUFTLEVBQUUsQ0FBUztRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ1g7SUFFRCxPQUFPLENBQUUsVUFBa0I7UUFDekIsT0FBT0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDOUM7SUFFRCxJQUFJLENBQUUsR0FBVztRQUNmLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3ZDO0NBQ0Y7QUFFTSxlQUFlLFlBQVksQ0FBRSxZQUFvQixJQUFJO0lB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

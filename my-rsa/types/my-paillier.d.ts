export declare class PublicKeyP {
    n: bigint;
    g: bigint;
    _n2: bigint;
    constructor(n: bigint, g: bigint);
    encrypt(m: bigint, r?: bigint): bigint;
}
export declare class PrivateKeyP {
    lambda: bigint;
    mu: bigint;
    publicKey: PublicKeyP;
    private readonly _p?;
    private readonly _q?;
    constructor(lambda: bigint, mu: bigint, publicKey: PublicKeyP, p?: bigint, q?: bigint);
    decrypt(c: bigint): bigint;
}
export declare function generateKeysP(bitlength?: number, simpleVariant?: boolean): Promise<{
    publicKey: PublicKeyP;
    privateKey: PrivateKeyP;
}>;
//# sourceMappingURL=my-paillier.d.ts.map
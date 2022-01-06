export declare class PublicKey {
    e: bigint;
    n: bigint;
    constructor(e: bigint, n: bigint);
    encrypt(plaintext: bigint): bigint;
    verify(signed: bigint): bigint;
}
export declare class PrivateKey {
    d: bigint;
    n: bigint;
    constructor(d: bigint, n: bigint);
    decrypt(ciphertext: bigint): bigint;
    sign(msg: bigint): bigint;
}
export declare function generateKeys(bitlength?: number): Promise<{
    publicKey: PublicKey;
    privateKey: PrivateKey;
}>;
//# sourceMappingURL=my-rsa.d.ts.map
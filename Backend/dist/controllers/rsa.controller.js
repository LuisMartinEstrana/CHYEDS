"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.encrypt = exports.sign = exports.decrypt = exports.keys = void 0;
const rsa = __importStar(require("my-rsa"));
const bigintConversion = __importStar(require("bigint-conversion"));
//Genera un par de claves publicas y privadas
const keypairPromise = rsa.generateKeys(1024);
//FUNCIONA
const keys = async (req, res) => {
    const keypair = await keypairPromise;
    const publicE = keypair.publicKey.e;
    const publicN = keypair.publicKey.n;
    //const privateD = (await keypairPromise).privateKey.d
    //const privateN = (await keypairPromise).privateKey.n
    const pubE = bigintConversion.bigintToHex(publicE);
    const pubN = bigintConversion.bigintToHex(publicN);
    /*const pub: any[] = []
    pub[0] = pubE
    pub[1] = pubN*/
    //const pub = pubE +" "+ pubN
    return res.json({
        e: pubE,
        n: pubN
    });
};
exports.keys = keys;
const decrypt = async (req, res) => {
    const mensaje = bigintConversion.hexToBigint(req.body.message);
    //const keypair = await rsa.generateKeys(1024)
    const decypher = (await keypairPromise).privateKey.decrypt(mensaje);
    console.log(decypher);
    return res.json({
        message: bigintConversion.bigintToHex(decypher)
    });
};
exports.decrypt = decrypt;
//FUNCIONA
const sign = async (req, res) => {
    const mensaje = bigintConversion.textToBigint(req.body.message);
    console.log(mensaje);
    //const keypair = await rsa.generateKeys(1024)
    const signs = (await keypairPromise).privateKey.sign(mensaje);
    console.log(signs);
    return res.json({
        message: bigintConversion.bigintToHex(signs)
    });
};
exports.sign = sign;
//CLIENTE
//FUNCIONA
const encrypt = async (req, res) => {
    const mensaje = bigintConversion.textToBigint(req.body.message);
    const publicKey = new rsa.PublicKey(bigintConversion.hexToBigint(req.body.pubKey.e), bigintConversion.hexToBigint(req.body.pubKey.n));
    //console.log(mensaje)
    //const keypair = await rsa.generateKeys(1024)
    //console.log((await keypair).publicKey.e)
    //console.log((await keypair).publicKey.n)
    const cifrado = publicKey.encrypt(mensaje);
    const encryp = bigintConversion.bigintToHex(cifrado);
    console.log(encryp);
    return res.json({
        message: encryp
    });
};
exports.encrypt = encrypt;
//
const verify = async (req, res) => {
    const sign = bigintConversion.textToBigint(req.body.message);
    const publicKey = new rsa.PublicKey(bigintConversion.hexToBigint(req.body.pubKey.e), bigintConversion.hexToBigint(req.body.pubKey.n));
    const verif = publicKey.verify(sign);
    return res.json({
        message: bigintConversion.bigintToHex(verif)
    });
};
exports.verify = verify;

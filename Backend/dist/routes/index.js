"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rsa_controller_1 = require("../controllers/rsa.controller");
const router = (0, express_1.Router)();
//localhost:4000/
//Modulos que estan en librerias
//-----------------------//
//----------RSA----------//
//-----------------------//
//Estabecer conexión
//Envia la clave publica
router.get('/rsa', rsa_controller_1.keys); //Pasar en hexa bigint-conversion
//Recibir un mensaje y descifrar y lo verificar
router.post('/rsa/decrypt', rsa_controller_1.decrypt);
//Firma del servidor
router.post('/rsa/sign', rsa_controller_1.sign);
//Prueva de cifrado
router.post('/rsa/encrypt', rsa_controller_1.encrypt);
router.post('/rsa/verify', rsa_controller_1.verify);
exports.default = router;

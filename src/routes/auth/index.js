const express = require('express');
const { authRegister, authLogin, buscarPorId, deletarPorId, listarMarketPlace, updateMarketplace, criarSeller, listarSellers, buscarPorIdSeller } = require('../../controller/usuarios/authController');
const { authVerify, isAdmin, isMarketplace } = require('../../middleware/authVerify');
const router = express.Router();

router.post('/login', authLogin);

// marketplace 
router.post('/register', authVerify, isAdmin, authRegister);
router.get('/cliente/:id', authVerify, buscarPorId);
router.get('/clientes', authVerify, isAdmin, listarMarketPlace);
router.put('/cliente/:id', authVerify, isAdmin, updateMarketplace);
router.delete('/cliente/:id', authVerify, isAdmin, deletarPorId);

// seller
router.post('/register-seller', authVerify, isMarketplace, criarSeller);
router.get('/seller/:id', authVerify, buscarPorIdSeller);
router.get('/sellers', authVerify, isMarketplace, listarSellers);

module.exports = router;
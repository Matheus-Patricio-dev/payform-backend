const express = require('express');
const { authRegister, authLogin, buscarPorId, updateSeller, registerSellerToMarktplace, destroySellerByMarketplace, listSellerByMarketplace, deletarPorId, listarMarketPlace, updateMarketplace, criarSeller, listarSellers, buscarPorIdSeller } = require('../../controller/usuarios/authController');
const { authVerify, isAdmin, isMarketplace } = require('../../middleware/authVerify');
const router = express.Router();

router.post('/login', authLogin);

// marketplace 
router.post('/register', authVerify, isAdmin, authRegister);
router.post('/register-seller-to-marketplace', authVerify, isAdmin, registerSellerToMarktplace);
router.get('/marketplace/:id', authVerify, buscarPorId);
router.get('/marketplace-list-seller/:id', authVerify, listSellerByMarketplace);
router.get('/marketplaces', authVerify, isAdmin, listarMarketPlace);
router.put('/marketplace/:idCliente', authVerify, isAdmin, updateMarketplace);
router.delete('/marketplace/:id', authVerify, isAdmin, deletarPorId);
router.delete('/marketplace-seller/:id/:id_cliente', authVerify, isAdmin, destroySellerByMarketplace);
router.get('/sellers-list', authVerify, isAdmin, listarSellers);

// seller
router.post('/register-seller', authVerify, isMarketplace, criarSeller);
router.get('/seller/:id', authVerify, buscarPorIdSeller);
router.get('/sellers', authVerify, isMarketplace, listarSellers);
router.put('/seller/:idSeller', authVerify, isAdmin, updateSeller);

module.exports = router;
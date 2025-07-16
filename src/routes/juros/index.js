const express = require('express');
const router = express.Router();
const subscribeController = require('../../controller/juros/jurosController');
const { authVerify } = require('../../middleware/authVerify');

// Rotas de planos
router.get('/juros', authVerify, subscribeController.listarPlanos);
router.get('/juros/:id', authVerify, subscribeController.buscarPlanoPorId);
router.get('/juros/cliente/:clienteId', authVerify, subscribeController.listarPlanosPorCliente);
router.post('/juros', authVerify, subscribeController.criarPlano);
router.put('/juros/:id', authVerify, subscribeController.atualizarPlano);
router.delete('/juros/:id', authVerify, subscribeController.deletarPlano);

module.exports = router;

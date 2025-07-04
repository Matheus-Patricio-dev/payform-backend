const express = require('express');
const router = express.Router();
const subscribeController = require('../../controller/subscribe/subscribeController');
const { authVerify } = require('../../middleware/authVerify');

// Rotas de planos
router.get('/planos', authVerify, subscribeController.listarPlanos);
router.get('/planos/:id', authVerify, subscribeController.buscarPlanoPorId);
router.get('/planos/cliente/:clienteId', authVerify, subscribeController.listarPlanosPorCliente);
router.post('/planos', authVerify, subscribeController.criarPlano);
router.put('/planos/:id', authVerify, subscribeController.atualizarPlano);
router.delete('/planos/:id', authVerify, subscribeController.deletarPlano);

// Rotas de assinaturas
router.get('/assinaturas', authVerify, subscribeController.listarAssinaturas);
router.get('/assinaturas/:id', authVerify, subscribeController.buscarAssinaturaPorId);
router.get('/assinaturas/cliente/:clienteId', authVerify, subscribeController.listarAssinaturasPorCliente);
router.post('/assinaturas', authVerify, subscribeController.criarAssinatura);
router.put('/assinaturas/:id', authVerify, subscribeController.atualizarAssinatura);
router.delete('/assinaturas/:id', authVerify, subscribeController.deletarAssinatura);

module.exports = router;

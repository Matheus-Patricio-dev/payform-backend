const express = require('express');
const { createPayment, getPayments, getPaymentsById, getPaymentsTransactions, deletePayment } = require('../../controller/pagamentos/pagamentosController');
const { authVerify } = require('../../middleware/authVerify');
const router = express.Router();

// marketplace 
router.post('/register-payment', authVerify, createPayment);
router.get('/payment/:id', authVerify, getPayments);
router.get('/payment-ver/:id', authVerify, getPaymentsById);
router.get('/transactions/:id', authVerify, getPaymentsTransactions);
router.delete('/payment-remove/:id', authVerify, deletePayment);

module.exports = router;
const express = require('express');
const authRouter = require('../routes/auth/index');
const paymentRouter = require('../routes/pagamentos/index');
const subscribeRouter = require('../routes/subscribe/index');
const jurosRouter = require('../routes/juros/index');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/auth', paymentRouter);
router.use('/auth', subscribeRouter);
router.use('/auth', jurosRouter);

module.exports = router;

const express = require('express');
const authRouter = require('../routes/auth/index');
const router = express.Router();

router.use('/auth', authRouter);

module.exports = router;

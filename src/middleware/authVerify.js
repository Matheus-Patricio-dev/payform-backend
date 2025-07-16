// middleware/authVerify.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'segredo-super-seguro';

const authVerify = (req, res, next) => {
    // Espera o token no header: Authorization: Bearer <token>
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token não fornecido.' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        // Adiciona os dados do usuário na requisição
        req.user = decoded;
        // Verifica se existe um id no params e se é diferente do id do token
        // if (req.params.id && req.params.id !== decoded.id && req.user.cargo !== "admin") {
        //     return res.status(403).json({ error: 'Acesso negado: ID não corresponde ao usuário autenticado.' });
        // }
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }
};

// middleware/authVerify.js (mesmo arquivo)
const isAdmin = (req, res, next) => {
    if (!req.user || req.user.cargo !== 'admin') {
        return res.status(403).json({ error: 'Acesso restrito para administradores.' });
    }
    next();
};
const isMarketplace = (req, res, next) => {
    if (!req.user || (req.user.cargo !== 'marketplace' && req.user.cargo !== 'admin')) {
        return res.status(403).json({ error: 'Acesso restrito para marketplaces.' });
    }
    next();
};

module.exports = { authVerify, isAdmin, isMarketplace };

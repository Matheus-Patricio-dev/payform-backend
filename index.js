require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { firebaseConnected } = require('./config/index');
const Cliente = require('./src/models/clientes/cliente');
const app = express();
const routes = require('./src/routes/index');
const PORT = process.env.PORTA || 9001;

app.use(cors());
app.use(express.json());
// Todas as rotas centralizadas
app.use('/api', routes);
// app.get('/', (req, res) => {
//     res.status(201).json({ message: 'Welcome API' });
// });

app.get('/', async (req, res) => {
    // Testa a conexão com o Firebase e com a model
    const modelSync = await Cliente.testConnection();
    if (firebaseConnected && modelSync) {
        res.status(201).json({ message: 'Welcome API. Firebase conectado e models sincronizadas.' });
    } else {
        res.status(500).json({ message: 'Erro na conexão com Firebase ou models.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

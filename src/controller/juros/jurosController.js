// controllers/subscribeController.js
const Plano = require('../../models/juros/index');
const { createPlanZoop } = require('../../helper/zoop');
const Cliente = require('../../models/clientes/cliente');

// ================== PLANOS ==================

// Listar todos os planos
const listarPlanos = async (req, res) => {
    try {
        const planos = await Plano.getAll();
        res.json(planos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar planos' });
    }
};

// Buscar plano por ID
const buscarPlanoPorId = async (req, res) => {
    try {
        const plano = await Plano.getById(req.params.id);
        if (!plano) return res.status(404).json({ error: 'Plano não encontrado' });
        res.json(plano);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar plano' });
    }
};

// Listar planos por cliente
const listarPlanosPorCliente = async (req, res) => {
    try {
        const planos = await Plano.getAllByIdClient(req.params.clienteId);
        res.json(planos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar planos do cliente' });
    }
};

// Criar plano
const criarPlano = async (req, res) => {
    const formData = req.body;

    try {
        const id = await Plano.create(formData);
        res.status(201).json({ message: "Juros criado com sucesso", data: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar Juros' });
    }
};


// Atualizar plano
const atualizarPlano = async (req, res) => {
    try {
        await Plano.update(req.params.id, req.body);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar plano' });
    }
};

// Deletar plano
const deletarPlano = async (req, res) => {
    try {
        await Plano.delete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar plano' });
    }
};

// ================== EXPORT ==================

module.exports = {
    // Planos
    listarPlanos,
    buscarPlanoPorId,
    listarPlanosPorCliente,
    criarPlano,
    atualizarPlano,
    deletarPlano,
};

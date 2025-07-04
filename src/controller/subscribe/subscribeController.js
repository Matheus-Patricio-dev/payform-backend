// controllers/subscribeController.js
const Plano = require('../../models/subscribe/plano');
const Assinatura = require('../../models/subscribe/assinatura');
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

    console.log(formData)
    // Defina os campos obrigatórios e seus nomes amigáveis para mensagem de erro
    const requiredFields = {
        amount: 'Valor',
        description: 'Descrição',
        frequency: 'Frequência',
        interval: 'Intervalo',
        nome: 'Nome',
        payment_methods: 'Método(s) de pagamento'
    };

    for (const field in requiredFields) {
        const value = formData[field];
        console.log(field, value)
        // amount deve ser número e maior que zero
        if (field === 'amount') {
            // Converte para número, se possível
            const amountNumber = Number(value);
            if (
                value === undefined ||
                value === null ||
                value === '' ||
                isNaN(amountNumber) ||
                amountNumber <= 0
            ) {
                return res.status(400).json({ error: `${requiredFields[field]} é obrigatório e deve ser maior que zero` });
            }
        }

        // payment_methods deve ser array e não pode ser vazio
        else if (field === 'payment_methods') {
            if (!Array.isArray(value) || value.length === 0) {
                return res.status(400).json({ error: `${requiredFields[field]} é obrigatório` });
            }
        }
        // os demais campos devem ser string não vazia
        else {
            if (typeof value !== 'string' || value.trim() === '') {
                return res.status(400).json({ error: `${requiredFields[field]} é obrigatório` });
            }
        }
    }

    const mkt = await Cliente.buscarPorIdMKTPayment(formData?.marketplaceId)
    console.log(mkt);

    if (mkt?.marketplaceId) {
        const responseCreateAPIPlan = await createPlanZoop(formData, mkt?.marketplaceId)
        console.log(responseCreateAPIPlan)
    }

    try {
        const id = await Plano.create(formData);
        res.status(201).json({ message: "Plano criado com sucesso", data: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar plano' });
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

// ================== ASSINATURAS ==================

// Listar todas as assinaturas
const listarAssinaturas = async (req, res) => {
    try {
        const assinaturas = await Assinatura.getAll();
        res.json(assinaturas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar assinaturas' });
    }
};

// Buscar assinatura por ID
const buscarAssinaturaPorId = async (req, res) => {
    try {
        const assinatura = await Assinatura.getById(req.params.id);
        if (!assinatura) return res.status(404).json({ error: 'Assinatura não encontrada' });
        res.json(assinatura);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar assinatura' });
    }
};

// Listar assinaturas por cliente
const listarAssinaturasPorCliente = async (req, res) => {
    try {
        const assinaturas = await Assinatura.getAllByIdClient(req.params.clienteId);
        res.json(assinaturas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar assinaturas do cliente' });
    }
};

// Criar assinatura
const criarAssinatura = async (req, res) => {
    try {
        const id = await Assinatura.create(req.body);
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar assinatura' });
    }
};

// Atualizar assinatura
const atualizarAssinatura = async (req, res) => {
    try {
        await Assinatura.update(req.params.id, req.body);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar assinatura' });
    }
};

// Deletar assinatura
const deletarAssinatura = async (req, res) => {
    try {
        await Assinatura.delete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar assinatura' });
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
    // Assinaturas
    listarAssinaturas,
    buscarAssinaturaPorId,
    listarAssinaturasPorCliente,
    criarAssinatura,
    atualizarAssinatura,
    deletarAssinatura,
};

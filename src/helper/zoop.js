require('dotenv').config();
const axios = require('axios');
const Cliente = require('../models/clientes/cliente');

const API_KEY = process.env.API_KEY; // Defina no .env
const API_BASE_64 = process.env.API_BASE_64; // Defina no .env
/**
 * Cria uma transação PIX na Zoop
 * @param {string} marketplaceId - ID do marketplace Zoop
 * @param {string} sellerId - ID do recebedor (on_behalf_of)
 * @param {Object} pagamento - Objeto de pagamento { amount, description }
 * @returns {Promise<Object>} - Dados da transação ou erro
 */
async function generateTransaction(marketplaceId, sellerId, pagamento) {
    try {
        const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/transactions`;

        const data = {
            on_behalf_of: sellerId,
            description: pagamento.description || 'Transação via integração',
            currency: 'BRL',
            amount: parseFloat(pagamento.amount), // em centavos
            // amount: parseFloat(pagamento.amount), // em centavos
            amount: parseInt(pagamento.amount, 10), // obrigatório e em centavos
            payment_type: 'pix',
        };

        // Chave + dois-pontos, em base64
        const auth = Buffer.from(`${API_KEY}:`).toString('base64');

        // Monta o header Basic Auth
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Basic ${API_BASE_64}`,
                'Content-Type': 'application/json',
            },
            timeout: 10000 // 10 segundos
        });
        console.log(response)

        return response.data;
    } catch (error) {
        console.log(error?.response?.data)
        if (error.response) {
            return { error: true, status: error.response.status, data: error.response.data };
        }
        return { error: true, message: error.message };
    }
}

async function consultarSaldoSeller(marketplaceId, sellerId) {
    try {
        const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/buyers/${sellerId}/balances`;

        if (!marketplaceId || !sellerId) {
            return;
        }
        // Monta o header Basic Auth
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Basic ${API_BASE_64}`,
                'Content-Type': 'application/json',
            },
            timeout: 10000 // 10 segundos
        });

        return response?.data
    } catch (error) {
        console.log(error?.response?.data)
        if (error.response) {
            return { error: true, status: error.response.status, data: error.response.data };
        }
        return { error: true, message: error.message };
    }
}

async function createPlanZoop(data, marketplaceId) {
    try {
        const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/recurrence_plans/`;

        if (!marketplaceId) {
            return;
        }

        // Monta o header Basic Auth
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Basic ${API_BASE_64}`,
                'Content-Type': 'application/json',
            },
            timeout: 10000 // 10 segundos
        });

        return response?.data
    } catch (error) {
        console.log(error?.response?.data)
        if (error.response) {
            return { error: true, status: error.response.status, data: error.response.data };
        }
        return { error: true, message: error.message };
    }
}

module.exports = { generateTransaction, consultarSaldoSeller, createPlanZoop };

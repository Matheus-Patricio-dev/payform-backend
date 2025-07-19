require("dotenv").config();
const axios = require("axios");
const Cliente = require("../models/clientes/cliente");

const API_KEY = process.env.API_KEY; // Defina no .env
const API_BASE_64 = process.env.API_BASE_64; // Defina no .env
/**
 * Cria uma transação PIX na Zoop
 * @param {string} marketplaceId - ID do marketplace Zoop
 * @param {string} sellerId - ID do recebedor (on_behalf_of)
 * @param {Object} pagamento - Objeto de pagamento { amount, description }
 * @returns {Promise<Object>} - Dados da transação ou erro
 */
const convertToCents = (amountStr) => {
  if (!amountStr) return 0; // Retorna 0 se a string estiver vazia ou indefinida

  // Remove espaços em branco e substitui vírgula por ponto
  const normalizedAmount = amountStr.trim().replace(",", ".");

  // Converte para float e multiplica por 100
  const amountInCents = Math.round(parseFloat(normalizedAmount) * 100);

  return amountInCents;
};
async function generateTransaction(marketplaceId, sellerId, pagamento, dados) {
  try {
    // transação com credit e pix ( separação de funções )
    if (pagamento?.paymentMethods === "PIX") {
      const responsePix = await createZoopPaymentWithPix(
        marketplaceId,
        sellerId,
        pagamento
      );

      return responsePix;
    } else {
      const responseCreditCard = await createZoopPaymentWithCredit(
        marketplaceId,
        sellerId,
        pagamento,
        dados
        // enviar cartão de cŕedito
      );
      return responseCreditCard;
    }
  } catch (error) {
    console.log(error?.response?.data);
    if (error.response) {
      return {
        error: true,
        status: error.response.status,
        data: error.response.data,
      };
    }
    return { error: true, message: error.message };
  }
}
async function createZoopPaymentWithCredit(
  marketplaceId,
  sellerId,
  pagamento,
  dados
) {
  const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/transactions`;
  const amount = convertToCents(pagamento?.amount);

  const data = {
    payment_type: "credit",
    capture: true,
    reference_id: pagamento?.id,
    on_behalf_of: sellerId,
    source: {
      card: {
        card_number: dados?.number,
        holder_name: dados?.name,
        expiration_month: "99",
        expiration_year: "99",
        security_code: "233",
      },
      type: "card",
      usage: "single_use",
      currency: "BRL",
      amount: amount,
    },
    installment_plan: {
      number_installments: dados?.installments,
    },
    three_d_secure: {
      on_failure: "continue",
      device: {
        type: "BROWSER",
        color_depth: 24,
        java_enabled: false,
        language: "pt-BR",
        screen_height: 500,
        screen_width: 500,
        time_zone_offset: 3,
      },
      billing: {
        postal_code: "69015590",
        address: "rua piorini",
        city: "Manaus",
        state: "Amazonas",
        country: "Brasil",
        email_address: "negocios.azevedo05@gmail.com",
        phone_number: 92984126388,
      },
      challenge_type: "DATA_ONLY",
      ip_address: "22222",
      user_agent: "Mozilla/5.0",
    },
    capture: false,
  };

  // Monta o header Basic Auth
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Basic ${API_BASE_64}`,
      "Content-Type": "application/json",
    },
    timeout: 10000, // 10 segundos
  });
  // receber se foi pago ou não e atualizar a tabela de transações e devolver ao frontend
  return response.data;
}
async function createZoopPaymentWithPix(marketplaceId, sellerId, pagamento) {
  const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/transactions`;
  const amount = convertToCents(pagamento?.amount);
  const data = {
    on_behalf_of: sellerId,
    description: pagamento.description || "Transação via integração",
    currency: "BRL",
    amount: amount, // em centavos
    // amount: parseFloat(pagamento.amount), // em centavos
    // amount: parseInt(pagamento.amount, 10), // obrigatório e em centavos
    payment_type: "pix",
  };

  // Monta o header Basic Auth
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Basic ${API_BASE_64}`,
      "Content-Type": "application/json",
    },
    timeout: 10000, // 10 segundos
  });

  return response.data;
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
        Authorization: `Basic ${API_BASE_64}`,
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 segundos
    });

    return response?.data;
  } catch (error) {
    console.log(error?.response?.data);
    if (error.response) {
      return {
        error: true,
        status: error.response.status,
        data: error.response.data,
      };
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
        Authorization: `Basic ${API_BASE_64}`,
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 segundos
    });

    return response?.data;
  } catch (error) {
    console.log(error?.response?.data);
    if (error.response) {
      return {
        error: true,
        status: error.response.status,
        data: error.response.data,
      };
    }
    return { error: true, message: error.message };
  }
}

async function desacociarPlanoJuros(taxa_repasse_juros, marketplaceId) {
  try {
    const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/subscriptions/${taxa_repasse_juros}`;

    if (!marketplaceId) {
      return;
    }

    // Monta o header Basic Auth
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Basic ${API_BASE_64}`,
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 segundos
    });
    console.log(response, " one");
    return response?.data;
  } catch (error) {
    console.log(error?.response?.data, 'one');
    if (error.response) {
      return {
        error: true,
        status: error.response.status,
        data: error.response.data,
      };
    }
    return { error: true, message: error.message };
  }
}

async function associarPlanoJuros(data, marketplaceId) {
  try {
    const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/subscriptions`;

    if (!marketplaceId) {
      return;
    }

    // Monta o header Basic Auth
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Basic ${API_BASE_64}`,
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 segundos
    });
    console.log(response, "twoooo");

    return response?.data;
  } catch (error) {
    console.log(error?.response?.data, 'two');
    if (error.response) {
      return {
        error: true,
        status: error.response.status,
        data: error.response.data,
      };
    }
    return { error: true, message: error.message };
  }
}
module.exports = {
  generateTransaction,
  consultarSaldoSeller,
  createPlanZoop,
  associarPlanoJuros,
  desacociarPlanoJuros,
};

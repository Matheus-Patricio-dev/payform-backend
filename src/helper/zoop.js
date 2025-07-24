require("dotenv").config();
const axios = require("axios");
const Cliente = require("../models/clientes/cliente");
const { sendCreatedPixWebhook } = require("./webhooks");

const API_KEY = process.env.API_KEY; // Defina no .env
const API_BASE_64 = process.env.API_BASE_64; // Defina no .env
/**
 * Cria uma transação PIX na Zoop
 * @param {string} marketplaceId - ID do marketplace Zoop
 * @param {string} sellerId - ID do recebedor (on_behalf_of)
 * @param {Object} pagamento - Objeto de pagamento { amount, description }
 * @returns {Promise<Object>} - Dados da transação ou erro
 */
const convertToCents = (amount) => {
  if (amount === null || amount === undefined) return 0; // Retorna 0 se o valor for nulo ou indefinido

  // Converte para float se for uma string, caso contrário, usa o número diretamente
  const normalizedAmount =
    typeof amount === "string" ? amount.trim().replace(",", ".") : amount;

  // Converte para float e multiplica por 100
  const amountInCents = Math.round(parseFloat(normalizedAmount) * 100);

  return amountInCents;
};
async function generateTransaction(
  marketplaceId,
  sellerId,
  pagamento,
  dados,
  zpkKey,
  criandoTransacao
) {
  try {
    console.log(dados?.paymentMethod);
    
    // transação com credit e pix ( separação de funções )
    if (dados?.paymentMethod === "pix") {
      const responsePix = await createZoopPaymentWithPix(
        marketplaceId,
        sellerId,
        pagamento,
        dados,
        zpkKey,
        criandoTransacao
      );

      return responsePix;
    } else {
      const responseCreditCard = await createZoopPaymentWithCredit(
        marketplaceId,
        sellerId,
        pagamento,
        dados,
        zpkKey
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
  dados,
  zpkKey
) {
  const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/transactions`;

  const amount = convertToCents(dados?.installmentValue);
  const expiry = dados?.expiry; // Supondo que dados.expiry esteja no formato "mm/aa"
  const [month, year] = expiry.split("/"); // Divide a string em mês e ano

  // Ajuste para pegar o mês e o ano
  const expiration_month = month; // Mês extraído
  const expiration_year = "20" + year; // Adiciona "20" ao ano
  const data = {
    payment_type: "credit",
    capture: true,
    reference_id: pagamento?.id,
    on_behalf_of: sellerId,
    source: {
      card: {
        card_number: dados?.number,
        holder_name: dados?.name,
        expiration_month: expiration_month,
        expiration_year: expiration_year,
        security_code: dados?.cvc,
      },
      type: "card",
      usage: "single_use",
      currency: "BRL",
      amount: amount,
    },
    installment_plan: {
      number_installments: parseInt(dados?.installments),
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
  };

  // Monta o header Basic Auth
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Basic ${zpkKey}`,
      "Content-Type": "application/json",
    },
    timeout: 10000, // 10 segundos
  });
  // receber se foi pago ou não e atualizar a tabela de transações e devolver ao frontend
  return response.data;
}

async function createZoopPaymentWithPix(
  marketplaceId,
  sellerId,
  pagamento,
  dados,
  zpkKey,
  transacao
) {
  const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/transactions`;
  const amount = convertToCents(pagamento?.amount);
  const data = {
    on_behalf_of: sellerId,
    description: pagamento.description || "Transação via integração",
    currency: "BRL",
    amount: amount, // em centavos
    payment_type: "pix",
  };

  // // Monta o header Basic Auth
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Basic ${zpkKey}`,
      "Content-Type": "application/json",
    },
    timeout: 10000, // 10 segundos
  });

  // Suponha que você tenha os dados da transação
  const newPixTransaction = {
    method: "POST",
    url: "http://localhost:9001/api/auth/webhook/zoop",
    description: "Transaction PIX",
    event: ["transaction.pending"],
    metadata: {
      id_transacao: transacao?.id,
      status: transacao?.status,
      seller_id: transacao?.seller_id,
      pagamento_id: transacao?.pagamento_id
    },
  };

  const assionaWebHookCreatedPix = await sendCreatedPixWebhook(
    newPixTransaction,
    zpkKey,
    marketplaceId
  );

  // console.log(assionaWebHookCreatedPix, "assionaWebHookCreatedPix");

  return response.data;
  // return {
  //   id: "5dd60d6934ea4f4c8b160d5567973120",
  //   resource: "transaction",
  //   status: "pending",
  //   amount: "250.00",
  //   original_amount: "250.00",
  //   currency: "BRL",
  //   description: "teste",
  //   payment_type: "pix",
  //   gateway_authorizer: "zoop",
  //   on_behalf_of: "25cbfba45ed54df7b278b0f5e1d4fc67",
  //   statement_descriptor: "Terere Beach",
  //   payment_method: {
  //     id: "a456bc31de0e47d285febad6e217a9a3",
  //     provider: "ZOOP",
  //     version: "1.0.0",
  //     type: "DYNAMIC",
  //     reusable: false,
  //     allow_update: false,
  //     expiration_date: "2025-07-22 21:46:48",
  //     key: { type: "EVP", value: "5eee0bc7-a403-4ef0-9fb1-4b90630c11cf" },
  //     pix_link: "NA",
  //     qr_code: {
  //       emv: "00020101021226850014br.gov.bcb.pix2563qrcode.zoop.com.br/dynamic/4cd480e7-1652-4694-8b94-41f6105832fd5204000053039865802BR5925ZOOP TECNOLOGIA & INSTITU6009Sao Paulo610901227-20062070503***6304C7D7",
  //     },
  //   },
  //   point_of_sale: { entry_mode: "barcode" },
  //   refunded: false,
  //   voided: false,
  //   captured: false,
  //   fees: "0.00",
  //   uri: "/v1/marketplaces/4f3552927318466aa4fc092b20c3204a/transactions/5dd60d6934ea4f4c8b160d5567973120",
  //   metadata: {},
  //   expected_on: "2025-07-21T21:46:46.658447+00:00",
  //   created_at: "2025-07-21T21:46:46.658447+00:00",
  //   updated_at: "2025-07-21T21:46:46.658447+00:00",
  //   history: [
  //     {
  //       id: "6673fdffd9a04376a69f614de4eaa057",
  //       transaction: "5dd60d6934ea4f4c8b160d5567973120",
  //       amount: "250.00",
  //       operation_type: "created",
  //       status: "succeeded",
  //       created_at: "2025-07-21 21:46:46",
  //     },
  //     {
  //       id: "d02247b208f9426abd800d90396ad21d",
  //       transaction: "5dd60d6934ea4f4c8b160d5567973120",
  //       amount: "250.00",
  //       operation_type: "proposal",
  //       status: "succeeded",
  //       authorizer: "zoop",
  //       created_at: "2025-07-21 21:46:46",
  //     },
  //   ],
  // };
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
    return response?.data;
  } catch (error) {
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
    console.log(error?.response?.data, "two");
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

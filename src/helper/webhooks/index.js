// helpers/webhooks/index.js
const axios = require("axios");

// Função para enviar um webhook para createdPix
async function sendCreatedPixWebhook(data, zpkKey, marketplaceId) {
  try {
    const url = `https://api.zoop.ws/v1/marketplaces/${marketplaceId}/webhooks`;

    // Monta o header Basic Auth
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Basic ${zpkKey}`,
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 segundos
    });
    console.log(`Webhook enviado com sucesso: ${response.status}`);
  } catch (error) {
    console.log(`Erro ao enviar webhook: ${error}`);
  }
}

// Exportar a função para uso em outras partes da aplicação
module.exports = {
  sendCreatedPixWebhook,
};

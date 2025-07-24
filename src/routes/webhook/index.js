// router/webhook/index.js
const express = require("express");
const WebSocket = require("ws");
const {
  validarPagamentoCartao,
} = require("../../controller/pagamentos/pagamentosController");
const router = express.Router();

// Endpoint para receber o webhook da Zoop
router.post("/zoop", (req, res) => {
  const event = req.body;

  console.log("Webhook recebido da Zoop:", JSON.stringify(event, null, 2));

  // ✅ LOG DO ESTADO ATUAL DOS CLIENTES
  console.log(
    `Clientes conectados no webhook: ${
      global.transactionClients ? global.transactionClients.size : 0
    }`
  );

  if (global.transactionClients) {
    global.transactionClients.forEach((client, transactionId) => {
      console.log(`- Cliente ativo: ${client.id_cliente})`);
    });
  }

  const events = event.event;

  events.forEach((eventType) => {
    switch (eventType) {
      case "transaction.succeeded":
        console.log("Transação sucedida.");

        // ✅ TENTAR ENCONTRAR O CLIENTE PELA TRANSAÇÃO
        // Se você tiver o ID da transação no webhook, use-o aqui
        const transactionIdFromWebhook =
          event.metadata?.id_transacao ||
          event?.data?.id_transacao ||
          event.id; // Ajuste conforme a estrutura do webhook
        const pagamento_id = event?.metadata?.pagamento_id || event?.data?.pagamento_id; // Ajuste conforme a estrutura do webhook
        const seller_id = event?.metadata?.seller_id || event?.data?.seller_id;
        let targetClient = null;

        if (transactionIdFromWebhook && global.transactionClients) {
          targetClient = global.transactionClients.get(
            transactionIdFromWebhook
          );
        }

        // ✅ SE NÃO ENCONTROU POR ID, PEGAR O PRIMEIRO CLIENTE ATIVO (FALLBACK)
        if (
          !targetClient &&
          global.transactionClients &&
          global.transactionClients.size > 0
        ) {
          targetClient = Array.from(global.transactionClients.values())[0];
          console.log("Usando primeiro cliente ativo como fallback");
        }

        console.log(
          "Cliente alvo encontrado:",
          targetClient
            ? `(${targetClient.id_cliente})`
            : "Nenhum cliente encontrado"
        );

        // Enviar mensagem para o cliente
        if (
          targetClient &&
          targetClient.ws &&
          targetClient.ws.readyState === WebSocket.OPEN &&
          targetClient.id_cliente === seller_id
        ) {
          const validacao = validarPagamentoCartao(
            transactionIdFromWebhook,
            0,
            pagamento_id,
            "succeeded",
            dataPayload= {
              
            },
            (transacao = {
              id: transactionIdFromWebhook,
            })
          );

          const successMessage = {
            type: "transaction_success",
            message: "Sua transação foi aprovada com sucesso!",
            transactionId: targetClient.id_transacao,
            timestamp: new Date().toISOString(),
            validacao,
          };

          targetClient.ws.send(JSON.stringify(successMessage));
          console.log(
            `✅ Mensagem enviada para cliente: ${targetClient.id_cliente}`
          );
        } else {
          console.log("❌ Nenhum cliente ativo para enviar a mensagem.");
          if (targetClient) {
            console.log(
              "Estado da conexão:",
              targetClient.ws
                ? `readyState: ${targetClient.ws.readyState}`
                : "WebSocket não existe"
            );
          }
        }
        break;

      case "transaction.failed":
        console.log("Transação falhou.");
        // Similar ao sucesso, mas com mensagem de falha
        const successMessage = {
          type: "transaction_failed",
          message: "Sua transação foi falhada",
          timestamp: new Date().toISOString(),
        };

        targetClient.ws.send(JSON.stringify(successMessage));
        break;

      default:
        console.log(`Evento desconhecido: ${eventType}`);
    }
  });

  res.sendStatus(200);
});

// ✅ ROTA PARA DEBUG - VER CLIENTES CONECTADOS
router.get("/debug/clients", (req, res) => {
  const clients = [];

  if (global.transactionClients) {
    global.transactionClients.forEach((client, transactionId) => {
      clients.push({
        clienteId: client.id_cliente,
        connectedAt: client.connectedAt,
        wsState: client.ws.readyState,
      });
    });
  }

  res.json({
    totalClients: clients.length,
    clients: clients,
  });
});

module.exports = router;

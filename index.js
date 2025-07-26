require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { firebaseConnected } = require("./config/index");
const Cliente = require("./src/models/clientes/cliente");
const app = express();
const routes = require("./src/routes/index");
const PORT = process.env.PORTA || 9001;
const http = require("http");
const WebSocket = require("ws");

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// ✅ USAR UM MAP GLOBAL PARA ARMAZENAR MÚLTIPLOS CLIENTES
global.transactionClients = new Map();

app.get("/", async (req, res) => {
  const modelSync = await Cliente.testConnection();
  if (firebaseConnected && modelSync) {
    res.status(201).json({
      message: "Welcome API. Firebase conectado e models sincronizadas.",
    });
  } else {
    res.status(500).json({
      message: "Erro na conexão com Firebase ou models.",
    });
  }
});

app.get("/welcome", async (req, res) => {
  console.log("Requisição recebida na rota /welcome");
  res.status(201).json({
    message: "Welcome API. Firebase conectado e models sincronizadas.",
  });
});

wss.on("connection", (ws) => {
  console.log("Nova conexão WebSocket estabelecida");

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);
      console.log("Mensagem recebida:", data);

      if (data.type === "pix") {
        const clientData = {
          id_transacao: data.transactionId,
          id_cliente: data.clienteId,
          ws: ws,
          connectedAt: new Date(),
        };

        // ✅ ARMAZENAR NO MAP GLOBAL
        global.transactionClients.set(data.transactionId, clientData);

        console.log(`Cliente registrado para transação: ${data.transactionId}`);
        console.log(
          `Total de clientes conectados: ${global.transactionClients.size}`
        );

        // Log todos os clientes ativos
        console.log("Clientes ativos:");
        global.transactionClients.forEach((client, transactionId) => {
          console.log(`- ${transactionId}: Cliente ${client.id_cliente}`);
        });

        ws.send(
          JSON.stringify({
            type: "confirmation",
            message: "Dados PIX recebidos com sucesso",
            transactionId: data.transactionId,
          })
        );
      }
    } catch (error) {
      console.log("Erro ao processar a mensagem:", error);
      ws.close();
    }
  });

  ws.on("close", () => {
    console.log("Cliente desconectado.");

    // ✅ REMOVER DO MAP QUANDO DESCONECTAR
    global.transactionClients.forEach((client, transactionId) => {
      if (client.ws === ws) {
        global.transactionClients.delete(transactionId);
        console.log(`Cliente removido: ${transactionId}`);
      }
    });

    console.log(
      `Total de clientes conectados: ${global.transactionClients.size}`
    );
  });
});

server.listen(PORT, () => {
  console.log(`Servidor HTTP e WebSocket rodando na porta ${PORT}`);
});

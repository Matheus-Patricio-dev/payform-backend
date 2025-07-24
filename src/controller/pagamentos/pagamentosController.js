// controllers/PaymentController.js
require("dotenv").config();

const {
  generateTransaction,
  associarPlanoJuros,
  desacociarPlanoJuros,
} = require("../../helper/zoop");
const Payment = require("../../models/pagamentos/index");

const { db } = require("../../../config/index");
const Cliente = require("../../models/clientes/cliente");
const API_BASE_64 = process.env.API_BASE_64; // Defina no .env
const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);

    // if (payment) {
    //   const clienteId = payment.seller_id; // O seller_id em Payment é o cliente_id em Seller

    //   // 2. Busca o seller pelo cliente_id
    //   const seller = await Cliente.buscarPorIdSellerPayment(clienteId);
    //   const mkt = await Cliente.buscarPorIdMKTPayment(payment?.marketplaceId);
    //   if (!seller) {
    //     return res.status(404).json({
    //       message: "Seller não encontrado para o cliente_id informado.",
    //     });
    //   }
    //   const sellerId = seller.id_seller;
    //   const marketplaceId = mkt?.marketplaceId;

    //   if (
    //     Array.isArray(payment.paymentMethods) &&
    //     payment.paymentMethods.includes("pix, credit_card")
    //   ) {
    //     const zoopCreateTransaction = await generateTransaction(
    //       marketplaceId,
    //       sellerId,
    //       payment
    //     );
    //   }
    // }
    res.status(201).json({ message: "Pagamento criado !", payment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPayments = async (req, res) => {
  try {
    const { id } = req.params;
    const payments = await Payment.getBySellerId(id);
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaymentsById = async (req, res) => {
  try {
    const { id } = req.params;

    const payments = await Payment.getById(id);
    res.status(200).json({ payments });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};
const getPaymentsTransactions = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca o documento do cliente
    const sellerDocSnap = await db.collection("clientes").doc(id).get();

    if (!sellerDocSnap.exists) {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }

    const sellerDoc = { id: sellerDocSnap.id, ...sellerDocSnap.data() };
    let data = {};

    if (sellerDoc.cargo === "admin") {
      data = {
        userId: sellerDoc.id,
        cargo: "admin",
      };
    } else if (sellerDoc.cargo === "marketplace") {
      // Busca marketplace relacionado ao cliente
      const mktSnapshot = await db
        .collection("marketplaces")
        .where("cliente_id", "==", id)
        .limit(1)
        .get();

      if (mktSnapshot.empty) {
        return res
          .status(404)
          .json({ message: "Marketplace não encontrado para este cliente." });
      }

      data = {
        userId: sellerDoc.id,
        cargo: "marketplace",
        marketplaceId: mktSnapshot.docs[0].id,
      };
    } else if (sellerDoc.cargo === "seller") {
      data = {
        userId: sellerDoc.id,
        cargo: "seller",
      };
    } else {
      return res.status(400).json({ message: "Cargo inválido." });
    }

    // Busca as transações conforme o cargo do usuário
    const transactions = await Payment.getByUserRoleTransacoes(data);
    return res.status(200).json({ transactions });
  } catch (error) {
    console.log("Erro ao buscar transações:", error);
    return res.status(500).json({ message: error.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.update(id, req.body);
    res
      .status(200)
      .json({ message: "pagamento atualizado com sucesso", payment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Payment.delete(id);
    if (response?.error) {
      res.status(500).json({ error: response?.error });
    }
    res.status(200).json({ message: "Pagamento deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fluxoRepasseJuros = async (dados, pagamento, sellerId, marketplaceId) => {
  // Converte as strings para números

  const installments = parseInt(dados?.installments, 10);
  const parcelasSemJuros = parseInt(pagamento?.parcelasSemJuros, 10);

  // Valida se a parcela selecionada é maior que a parcela sem juros configurada
  if (installments > parcelasSemJuros) {
    const jurosPadrao = (
      await db.collection("juros").doc(dados?.id_juros).get()
    ).data();

    // 1 etapa - desassociar plano de juros do vendedor
    const id_repasse_zoop = dados?.taxa_repasse_juros; // id de repasse de juros zoop

    const desasociarPlanoJurosVendedor = await desacociarPlanoJuros(
      id_repasse_zoop,
      marketplaceId
    );

    // 2 etapa - associar plano novamente padrão de juros do vendedor
    const juros_padrao_vendedor = jurosPadrao?.id_zoop; // id do plano padrão zoop vendedor
    const dataPayload = {
      plan: juros_padrao_vendedor,
      customer: sellerId,
      quantity: 1,
    };
    const associarPlanoJurosVendedor = await associarPlanoJuros(
      dataPayload,
      marketplaceId
    );

    return true; // Retorna true se a condição for atendida
  }

  console.log("nao tem");
  return false; // Retorna false se a condição não for atendida
};

const paymentTransactionZoop = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const payment = await Payment.getById(id);

    // fuxo de pagamento
    if (payment) {
      const clienteId = payment.seller_id; // O seller_id em Payment é o cliente_id em Seller

      // 2. Busca o seller pelo cliente_id
      const seller = await Cliente.buscarPorIdSellerPayment(clienteId);
      const mkt = await Cliente.buscarPorIdMKTPayment(payment?.marketplaceId);

      if (!seller) {
        return res.status(404).json({
          message: "Seller não encontrado para o cliente_id informado.",
        });
      }
      const sellerId = seller.id_seller;
      const marketplaceId = mkt?.marketplaceId;
      const zpkKeyMarketplace = mkt?.zpk_id_marketplace || API_BASE_64;

      // so executa com crédito
      if (data?.paymentMethod === "credit_card") {
        await fluxoRepasseJuros(data, payment, sellerId, marketplaceId);
        // Criar nova transação
        const transactionRef = db.collection("transacoes").doc(); // Gera um novo ID automaticamente para a transação
        const transactionId = transactionRef.id; // Obtém o ID do documento

        const transactionData = {
          id: transactionId, // Adiciona o ID da transação aos dados
          pagamento_id: payment.id,
          paymentMethod: [data?.paymentMethod],
          valor: data.installmentValue || payment?.amount, // Acessa o valor do pagamento
          valor_liquido: payment?.amount,
          parcela_selecionada: data?.installments || 0,
          status: "pendente", // Status baseado na lógica definida
          data_criacao: new Date().toISOString(), // Data atual
          seller_id: payment.seller_id, // Certifique-se de que seller_id está presente em pagamentoData
          marketplace_id: payment.marketplaceId, // Certifique-se de que marketplace_id está presente em pagamentoData
        };

        // Cria a transação
        await transactionRef.set(transactionData);

        // Lê os dados que acabamos de criar
        const snapshot = await transactionRef.get(); // Obtém o documento recém-criado
        const dadosCriados = snapshot.data(); // Obtém os dados do documento
        const zoopCreateTransaction = await generateTransaction(
          marketplaceId,
          sellerId,
          payment,
          data,
          zpkKeyMarketplace,
          dadosCriados
          // enviar dados do cartão de cŕedito
        );

        console.log(zoopCreateTransaction);

        if (zoopCreateTransaction?.error) {
          await validarPagamentoCartao(
            zoopCreateTransaction?.id,
            zoopCreateTransaction?.fees,
            payment?.id,
            "falha",
            data,
            dadosCriados
          );
          return res.status(200).json({
            data: {
              ...zoopCreateTransaction?.error,
              status_transacao: "falha",
            },
          });
        }

        if (zoopCreateTransaction?.id) {
          const validacao = await validarPagamentoCartao(
            zoopCreateTransaction?.id,
            zoopCreateTransaction?.fees,
            payment?.id,
            zoopCreateTransaction?.status,
            data,
            dadosCriados
          );
          console.log(validacao);
          res.status(200).json({ data: validacao });
        }
      }

      if (data?.paymentMethod === "pix") {
        // Criar nova transação
        const transactionRef = db.collection("transacoes").doc(); // Gera um novo ID automaticamente para a transação
        const transactionId = transactionRef.id; // Obtém o ID do documento

        const transactionData = {
          id: transactionId, // Adiciona o ID da transação aos dados
          pagamento_id: payment.id,
          paymentMethod: [data?.paymentMethod],
          valor: data.installmentValue || payment?.amount, // Acessa o valor do pagamento
          valor_liquido: payment?.amount,
          parcela_selecionada: data?.installments || 0,
          status: "pendente", // Status baseado na lógica definida
          data_criacao: new Date().toISOString(), // Data atual
          seller_id: payment.seller_id, // Certifique-se de que seller_id está presente em pagamentoData
          marketplace_id: payment.marketplaceId, // Certifique-se de que marketplace_id está presente em pagamentoData
        };

        // Cria a transação
        await transactionRef.set(transactionData);

        // Lê os dados que acabamos de criar
        const snapshot = await transactionRef.get(); // Obtém o documento recém-criado
        const dadosCriados = snapshot.data(); // Obtém os dados do documento

        const zoopCreateTransaction = await generateTransaction(
          marketplaceId,
          sellerId,
          payment,
          data,
          zpkKeyMarketplace,
          dadosCriados
          // enviar dados do cartão de cŕedito
        );

        console.log(zoopCreateTransaction);

        if (zoopCreateTransaction?.error) {
          await validarPagamentoCartao(
            zoopCreateTransaction?.id,
            zoopCreateTransaction?.fees,
            payment?.id,
            "falha",
            data,
            dadosCriados
          );
          return res.status(200).json({
            data: {
              ...zoopCreateTransaction?.error,
              status_transacao: "falha",
            },
          });
        }

        if (zoopCreateTransaction?.id) {
          const validacao = await validarPagamentoCartao(
            zoopCreateTransaction?.id,
            zoopCreateTransaction?.fees,
            payment?.id,
            zoopCreateTransaction?.status,
            data,
            dadosCriados
          );
          console.log(validacao);
          res.status(200).json({
            data: validacao,
            barCode: zoopCreateTransaction?.payment_method?.qr_code,
            id_transacao: dadosCriados?.id || null,
          });
        }
      }
    }
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const validarPagamentoCartao = async (
  id_transacao_zoop,
  fees,
  id_pagamento,
  status,
  dataPayload,
  transacao
) => {
  try {
    // Consultar a referência do documento com id_pagamento
    const pagamentoRef = db.collection("pagamentos").doc(id_pagamento);
    const pagamentoDoc = await pagamentoRef.get();

    if (!pagamentoDoc.exists) {
      console.log("Documento de pagamento não encontrado:", id_pagamento);
      return { success: false, message: "Pagamento não encontrado" };
    }

    const pagamentoData = pagamentoDoc.data();

    // Determinar o status da transação baseado no status do pagamento
    let statusTransacao;
    if (status === "pre_authorized") {
      statusTransacao = "pendente";
    } else if (status === "succeeded") {
      statusTransacao = "pago";
    } else if (status === "pending") {
      statusTransacao = "pendente_pix";
    } else {
      statusTransacao = "falha";
    }

    // Buscar a referência da transação usando o ID da transação
    const transactionRef = db.collection("transacoes").doc(transacao?.id);

    const transactionDoc = await transactionRef.get();

    if (transactionDoc.exists) {
      // Se a transação já existe, atualize os dados
      const existingTransactionData = transactionDoc.data();

      const updatedTransactionData = {
        ...existingTransactionData, // Manter dados existentes
        valor: dataPayload?.installmentValue || pagamentoData?.amount,
        transacao_id_zoop: id_transacao_zoop ? id_transacao_zoop : null,
        valor_liquido:
          dataPayload.installmentValue - (fees ? fees : 0) ||
          pagamentoData?.amount,
        parcela_selecionada: dataPayload?.installments || 0,
        status: statusTransacao, // Atualiza o status
        data_atualizacao: new Date().toISOString(), // Data de atualização
      };

      await transactionRef.update(updatedTransactionData);
      console.log(`Transação atualizada: ${transactionRef.id}`);
    } else {
      // Se não existe, cria uma nova transação
      const newTransactionRef = db.collection("transacoes").doc(); // Gera um novo ID automaticamente para a nova transação
      const transactionData = {
        transacao_id_zoop: id_transacao_zoop ? id_transacao_zoop : null,
        pagamento_id: id_pagamento,
        paymentMethod: [dataPayload?.paymentMethod],
        valor:
          (dataPayload && dataPayload.installmentValue) ||
          (pagamentoData ? pagamentoData.amount : 0),
        valor_liquido:
          (dataPayload ? dataPayload.installmentValue : 0) - (fees || 0) ||
          (pagamentoData ? pagamentoData.amount : 0),
        parcela_selecionada: (dataPayload && dataPayload.installments) || 0,

        status: statusTransacao, // Status baseado na lógica definida
        data_criacao: new Date().toISOString(), // Data atual
        seller_id: pagamentoData.seller_id, // Certifique-se de que seller_id está presente em pagamentoData
        marketplace_id: pagamentoData.marketplaceId, // Certifique-se de que marketplace_id está presente em pagamentoData
      };

      await newTransactionRef.set(transactionData);
      console.log(`Nova transação criada: ${newTransactionRef.id}`);
    }

    return {
      success: true,
      message: "Pagamento validado e transação criada com sucesso",
      transacao_id: transactionRef.id,
      status_transacao: statusTransacao,
    };
  } catch (error) {
    console.log("Erro ao validar pagamento:", error);
    return {
      success: false,
      message: "Erro interno ao validar pagamento",
      error: error.message,
    };
  }
};
// Exportando as funções
module.exports = {
  createPayment,
  getPayments,
  updatePayment,
  deletePayment,
  getPaymentsTransactions,
  getPaymentsById,
  paymentTransactionZoop,
  validarPagamentoCartao,
};

// controllers/PaymentController.js
const {
  generateTransaction,
  associarPlanoJuros,
  desacociarPlanoJuros,
} = require("../../helper/zoop");
const Payment = require("../../models/pagamentos/index");

const { db } = require("../../../config/index");
const Cliente = require("../../models/clientes/cliente");

const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);

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

      if (
        Array.isArray(payment.paymentMethods) &&
        payment.paymentMethods.includes("pix, credit_card")
      ) {
        const zoopCreateTransaction = await generateTransaction(
          marketplaceId,
          sellerId,
          payment
        );
      }
    }
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

      const dataRepasse = await fluxoRepasseJuros(
        data,
        payment,
        sellerId,
        marketplaceId
      );

      const zoopCreateTransaction = await generateTransaction(
        marketplaceId,
        sellerId,
        payment,
        data
        // enviar dados do cartão de cŕedito
      );

      console.log(zoopCreateTransaction);

      if (zoopCreateTransaction?.error) {
        await validarPagamentoCartao(
          zoopCreateTransaction?.id,
          payment?.id,
          "falha"
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
          payment?.id,
          zoopCreateTransaction?.status
        );
        console.log(validacao);
        res.status(200).json({ data: validacao });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const validarPagamentoCartao = async (
  id_transacao_zoop,
  id_pagamento,
  status
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
      statusTransacao = "pago";
    } else if (status === "succeeded") {
      statusTransacao = "pago";
    } else {
      statusTransacao = "falha";
    }

    // Criar nova transação
    const transactionRef = db.collection("transacoes").doc(); // Gera um novo ID automaticamente para a transação
    const transactionData = {
      transacao_id_zoop: id_transacao_zoop ? id_transacao_zoop : null,
      pagamento_id: id_pagamento,
      valor: pagamentoData.amount, // Acessa o valor do pagamento
      status: statusTransacao, // Status baseado na lógica definida
      data_criacao: new Date().toISOString(), // Data atual
      seller_id: pagamentoData.seller_id, // Certifique-se de que seller_id está presente em pagamentoData
      marketplace_id: pagamentoData.marketplaceId, // Certifique-se de que marketplace_id está presente em pagamentoData
    };

    await transactionRef.set(transactionData);

    console.log(
      `Transação criada com sucesso para o pagamento: ${id_pagamento} com status: ${statusTransacao}`
    );

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
};

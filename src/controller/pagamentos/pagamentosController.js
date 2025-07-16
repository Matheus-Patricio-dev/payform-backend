// controllers/PaymentController.js
const { generateTransaction } = require("../../helper/zoop");
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
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
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

const paymentTransactionZoop = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.getById(id);

    // receber dados do cartão de cŕedito ou PIX 

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

      const zoopCreateTransaction = await generateTransaction(
        marketplaceId,
        sellerId,
        payment,
        method_payment = "PIX"
        // enviar dados do cartão de cŕedito
      );

      res.status(200).json({ data: zoopCreateTransaction });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
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
};

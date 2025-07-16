// models/Payment.js
const { db } = require('../../../config/index');

class Payment {
    static async create(data) {
        const paymentRef = db.collection('pagamentos').doc(); // Gera um novo ID automaticamente
        // Adiciona a data de criação ao objeto de pagamento
        const paymentData = {
            ...data,
            status: "ativo",
            data_criacao_pagamento: new Date().toISOString() // Armazena a data de criação do pagamento
        };

        await paymentRef.set(paymentData);

        // Criação da transação
        const transactionRef = db.collection('transacoes').doc(); // Gera um novo ID automaticamente para a transação
        const transactionData = {
            pagamento_id: paymentRef.id,
            valor: data.amount, // Acessa o valor do pagamento
            status: "pendente", // Acessa o valor do pagamento
            data_criacao: new Date().toISOString(), // Data atual
            seller_id: data.seller_id, // Certifique-se de que seller_id está presente em data
            marketplace_id: data.marketplaceId // Certifique-se de que marketplace_id está presente em data
        };
        await transactionRef.set(transactionData);

        return { id: paymentRef.id, ...data };
    }

    static async getAll() {
        const paymentsSnapshot = await db.collection('pagamentos').get();
        const payments = paymentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return payments;
    }

    static async getById(id) {
        const paymentDoc = await db.collection('pagamentos').doc(id).get();
        if (!paymentDoc.exists) return null; // ou lance um erro, se preferir
        return { id: paymentDoc.id, ...paymentDoc.data() };
    }

    static async getBySellerId(sellerId) {
        const paymentsSnapshot = await db.collection('pagamentos')
            .where('seller_id', '==', sellerId) // Filtra os pagamentos pelo seller_id
            .get();

        const payments = paymentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return payments;
    }
    static async getBySellerIdTransacoes(sellerId) {
        // Busca as transações do vendedor
        const transactionsSnapshot = await db.collection('transacoes')
            .where('seller_id', '==', sellerId) // Filtra as transações pelo seller_id
            .get();

        const transacoes = await Promise.all(transactionsSnapshot.docs.map(async (doc) => {
            const transactionData = { id: doc.id, ...doc.data() };

            // Busca os dados do pagamento usando o pagamento_id
            const paymentDoc = await db.collection('pagamentos').doc(transactionData.pagamento_id).get();
            if (paymentDoc.exists) {
                transactionData.pagamento = { id: paymentDoc.id, ...paymentDoc.data() };
            } else {
                transactionData.pagamento = null; // Se não encontrar, define como null
            }

            // Busca os dados do cliente usando o seller_id
            const sellerDoc = await db.collection('clientes').doc(sellerId).get();
            if (sellerDoc.exists) {
                transactionData.cliente = { id: sellerDoc.id, ...sellerDoc.data() };
            } else {
                transactionData.cliente = null; // Se não encontrar, define como null
            }

            return transactionData;
        }));

        return transacoes;
    }

    static async getByUserRoleTransacoes({ userId, cargo, marketplaceId = null }) {
        let transactionsQuery = db.collection('transacoes');
        let paymentsQuery = db.collection('transacoes');
        const clientRef = db.collection('clientes').doc(userId);
        // 1. Buscar o cliente
        const clientDoc = await clientRef.get();
        if (cargo === 'seller') {
            // Busca o cliente pelo userId
            const sellerDoc = await db.collection('clientes').doc(userId).get();
            if (!sellerDoc.exists) return [];
            // Filtra as transações pelo seller_id
            transactionsQuery = transactionsQuery.where('seller_id', '==', sellerDoc.id);
            paymentsQuery = paymentsQuery.where('seller_id', '==', sellerDoc.id);
        } else if (cargo === 'marketplace') {
            // Filtra as transações pelo marketplaceId
            transactionsQuery = transactionsQuery.where('marketplace_id', '==', marketplaceId);
            paymentsQuery = paymentsQuery.where('marketplaceId', '==', marketplaceId);
        }
        const clientData = { id: clientDoc.id, ...clientDoc.data() };

        // // 2. Buscar pagamentos associados ao cliente
        const paymentsSnapshot = await paymentsQuery.get();

        const payments = await Promise.all(paymentsSnapshot.docs.map(async (paymentDoc) => {
            const paymentData = paymentDoc.data();

            // 3. Buscar transações associadas ao pagamento
            const transactionsRef = db.collection('transacoes');
            const transactionsSnapshot = await transactionsRef.where('pagamento_id', '==', paymentDoc.id).get();

            const transactions = transactionsSnapshot.docs.map(transDoc => {
                const transacaoData = transDoc.data();
                return {
                    ...transacaoData,
                    cliente_nome: clientData.nome, // Adiciona o nome do cliente
                    metodo_pagamento: paymentData.paymentMethods.join(', ') // Adiciona o método de pagamento
                };
            });

            return {
                ...paymentData,
                id: paymentDoc.id,
                transacoes: transactions // Transações associadas a este pagamento
            };
        }));

        // Se for admin, não aplica filtro
        const transactionsSnapshot = await transactionsQuery.get();

        const transacoes = await Promise.all(transactionsSnapshot.docs.map(async (doc) => {
            const transactionData = { id: doc.id, ...doc.data() };

            // Busca os dados do pagamento usando o pagamento_id
            const paymentDoc = await db.collection('pagamentos').doc(transactionData.pagamento_id).get();
            transactionData.pagamento = paymentDoc.exists ? { id: paymentDoc.id, ...paymentDoc.data() } : null;

            // Busca os dados do cliente usando o seller_id
            const sellerDoc = await db.collection('clientes').doc(transactionData.seller_id).get();
            transactionData.cliente = sellerDoc.exists ? { id: sellerDoc.id, ...sellerDoc.data() } : null;

            return transactionData;
        }));

        return {
            cliente: clientData,
            pagamentos: payments.map(({ transacoes, ...rest }) => rest), // Retorna pagamentos sem transações
            transacoes: transacoes // Transações de todos os pagamentos
        }
    }

    static async update(id, data) {
        const paymentRef = db.collection('pagamentos').doc(id);
        await paymentRef.update(data);
        return { id, ...data };
    }

    static async delete(id) {
        const paymentRef = db.collection('pagamentos').doc(id);

        // 1. Buscar transações relacionadas ao pagamento usando a coluna correta
        const transactionsRef = db.collection('transacoes');
        const transactionsSnapshot = await transactionsRef.where('pagamento_id', '==', id).get();

        // 2. Verificar se alguma transação tem status "completo"
        const hasCompletedTransaction = transactionsSnapshot.docs.some(doc => doc.data().status === 'completa');

        if (hasCompletedTransaction) {
            return { error: 'Não é possível excluir pagamento Pago.' };
        }

        // 3. Deletar cada transação encontrada
        const deletePromises = transactionsSnapshot.docs.map(doc => {
            return doc.ref.delete();
        });

        // Espera todas as transações serem deletadas
        await Promise.all(deletePromises);

        // 4. Deletar o pagamento
        await paymentRef.delete();

        return { id };
    }

}

module.exports = Payment;

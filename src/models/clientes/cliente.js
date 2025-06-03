// models/Cliente.js
const { db } = require('../../../config/index');

class Cliente {
    static async buscarPorEmail(email) {
        const query = await db.collection('clientes').where('email', '==', email).get();
        if (query.empty) return null;
        const doc = query.docs[0];
        return { id: doc.id, ...doc.data() };
    }

    static async criar({ nome, email, password, cargo, marketplaceId }) {
        try {
            // 1. Cria o cliente
            const clienteRef = await db.collection('clientes').add({
                nome,
                email,
                password,
                cargo,
                marketplaceId
            });
            const clienteId = clienteRef.id;

            // 2. Cria o marketplace relacionado
            const marketplaceData = {
                quantidade_vendedores: 1,    // Novo marketplace começa com 1 vendedor
                cliente_id: clienteId        // Relaciona com o cliente criado
            };

            // Se quiser usar o marketplaceId fornecido, use como docId, senão deixe o Firestore gerar
            let marketplaceRef;
            if (marketplaceId) {
                marketplaceRef = db.collection('marketplaces').doc(marketplaceId);
                await marketplaceRef.set({ ...marketplaceData, id: marketplaceId });
            } else {
                marketplaceRef = await db.collection('marketplaces').add(marketplaceData);
                await marketplaceRef.update({ id: marketplaceRef.id });
            }

            return clienteId;
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            throw new Error('Erro ao criar cliente no banco de dados.');
        }
    }

    static async listarTodos() {
        // 1. Busca todos os clientes
        const snapshot = await db.collection('clientes').get();

        // 2. Para cada cliente, busca o marketplace relacionado
        const clientes = await Promise.all(snapshot.docs.map(async doc => {
            const cliente = { id: doc.id, ...doc.data() };

            let marketplace = null;
            if (cliente.marketplaceId) {
                const marketplaceDoc = await db.collection('marketplaces').doc(cliente.marketplaceId).get();
                if (marketplaceDoc.exists) {
                    marketplace = { id: marketplaceDoc.id, ...marketplaceDoc.data() };
                }
            }

            return { ...cliente, marketplace };
        }));

        return clientes;
    }

    static async buscarPorId(id) {
        try {
            const doc = await db.collection('clientes').doc(id).get();
            if (!doc.exists) return null;
            return { id: doc.id, ...doc.data() };
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            throw new Error('Erro ao buscar cliente no banco de dados.');
        }
    }

    static async atualizar(id, dados) {
        // Atualiza o cliente (exceto marketplace)
        const { marketplace, ...dadosCliente } = dados;
        await db.collection('clientes').doc(id).update(dadosCliente);

        // Busca o cliente atualizado para pegar o marketplaceId
        const clienteDoc = await db.collection('clientes').doc(id).get();
        const cliente = { id: clienteDoc.id, ...clienteDoc.data() };

        let marketplaceAtualizado = null;

        // Se houver marketplaceId e dados de marketplace para atualizar
        if (cliente.marketplaceId && marketplace) {
            await db.collection('marketplaces').doc(cliente.marketplaceId).update(marketplace);
            // Busca marketplace atualizado
            const marketplaceDoc = await db.collection('marketplaces').doc(cliente.marketplaceId).get();
            if (marketplaceDoc.exists) {
                marketplaceAtualizado = { id: marketplaceDoc.id, ...marketplaceDoc.data() };
            }
        }

        // Retorna os dados atualizados
        return {
            ...cliente,
            marketplace: marketplaceAtualizado
        };
    }

    static async deletar(id) {
        // 1. Exclui o cliente
        await db.collection('clientes').doc(id).delete();

        // 2. Busca e exclui marketplace relacionado
        const marketplaceSnap = await db.collection('marketplaces')
            .where('cliente_id', '==', id)
            .get();

        const batch = db.batch();
        marketplaceSnap.forEach(doc => {
            batch.delete(doc.ref);
        });
        await batch.commit();

        return true;
    }

    // sellers ============

    static async criarSeller({ id_seller, nome, email, password, marketplaceId }) {
        // 2. Criação do cliente (gera um novo ID)
        const clienteRef = db.collection('clientes').doc(); // Cria referência com novo ID
        await clienteRef.set({
            nome,
            email,
            password,
            cargo: 'seller',
            marketplaceId
        });

        // 3. Criação do seller, usando o mesmo ID do cliente
        const sellerRef = await db.collection('sellers').add({
            id_seller,
            cliente_id: clienteRef.id, // Usa o ID do cliente criado
            marketplaceId
        });


        // 5. Busca os dados do seller criado
        const sellerDoc = await sellerRef.get();

        // 6. Retorna os dados e o token
        return {
            id: sellerDoc.id,
            ...sellerDoc.data(), // Corrige para retornar apenas os dados
        };
    }

    static async listarTodosSellersComCliente() {
        // 1. Busca todos os sellers
        const snapshot = await db.collection('sellers').get();

        // 2. Para cada seller, busca o cliente relacionado
        const sellers = await Promise.all(snapshot.docs.map(async doc => {
            const seller = { id: doc.id, ...doc.data() };

            let cliente = null;
            if (seller.cliente_id) {
                const clienteDoc = await db.collection('clientes').doc(seller.cliente_id).get();
                if (clienteDoc.exists) {
                    cliente = { id: clienteDoc.id, ...clienteDoc.data() };
                }
            }

            return { ...seller, cliente };
        }));

        return sellers;
    }
    static async buscarPorIdSeller(id) {
        try {
            const doc = await db.collection('clientes').doc(id).get();
            if (!doc.exists) return null;
            return { id: doc.id, ...doc.data() };
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            throw new Error('Erro ao buscar cliente no banco de dados.');
        }
    }
    static async buscarPorEmailSeller(email) {
        const query = await db.collection('sellers').where('email', '==', email).get();
        if (query.empty) return null;
        const doc = query.docs[0];
        return { id: doc.id, ...doc.data() };
    }

    static async testConnection() {
        try {
            // Tenta buscar documentos (mesmo que não existam)
            await db.collection('clientes').limit(1).get();
            return true;
        } catch {
            return false;
        }
    }
}

module.exports = Cliente;

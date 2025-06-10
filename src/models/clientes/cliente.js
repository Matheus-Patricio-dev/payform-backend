// models/Cliente.js
const { db } = require('../../../config/index');
const { FieldValue } = require('firebase-admin').firestore;
class Cliente {
    static async buscarPorEmail(email) {
        const query = await db.collection('clientes').where('email', '==', email).get();
        if (query.empty) return null;
        const doc = query.docs[0];
        return { id: doc.id, ...doc.data() };
    }

    static async criar({ nome, email, password, cargo, marketplaceId, status }) {
        try {
            // 1. Cria o cliente com ID aleatório do Firestore
            const clienteRef = await db.collection('clientes').add({
                nome,
                email,
                password,
                cargo,
                marketplaceId,
                status
            });
            const clienteId = clienteRef.id;

            // 2. Cria o marketplace relacionado, também com ID aleatório
            const marketplaceData = {
                quantidade_vendedores: 0,    // Novo marketplace começa com 1 vendedor
                cliente_id: clienteId        // Relaciona com o cliente criado
            };

            await db.collection('marketplaces').add(marketplaceData);

            return clienteRef;
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

    static async buscarSellersPorMarketplace(marketplaceId) {
        const sellersRef = db.collection('sellers');
        const querySnapshot = await sellersRef.where('marketplaceId', '==', marketplaceId).get();

        // Mapeia os resultados para um array de objetos com id e dados
        const sellers = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Busca os dados dos clientes relacionados
        const clientesPromises = sellers.map(async (seller) => {
            console.log(seller)
            const clienteSnap = await db.collection('clientes').doc(seller.cliente_id).get();
            console.log(clienteSnap.data());

            return {
                ...seller,
                cliente: clienteSnap.exists ? { id: clienteSnap.id, ...clienteSnap.data() } : null
            };
        });

        // Aguarda todas as buscas paralelamente
        const sellersComClientes = await Promise.all(clientesPromises);

        return sellersComClientes;
    }

    static async listarMarketplacesComClientes() {
        // 1. Busca todos os marketplaces
        const snapshot = await db.collection('marketplaces').get();

        // 2. Para cada marketplace, busca o cliente relacionado
        const marketplaces = await Promise.all(snapshot.docs.map(async doc => {
            const marketplace = { id: doc.id, ...doc.data() };

            let cliente = null;
            if (marketplace.cliente_id) {
                const clienteDoc = await db.collection('clientes').doc(marketplace.cliente_id).get();
                if (clienteDoc.exists) {
                    cliente = { id: clienteDoc.id, ...clienteDoc.data() };
                }
            }

            return { ...marketplace, cliente };
        }));

        return marketplaces;
    }

    static async deletarSellerByMarketplace(id, id_cliente) {
        // 1. Exclui o cliente
        await db.collection('sellers').doc(id).delete();

        // 2. Exclui o cliente cujo ID é id_cliente
        await db.collection('clientes').doc(id_cliente).delete();

        return true;
    }


    static async destroySellerByMarketPlaceUserMKT(id, id_cliente) {
        // 1. Busca o seller para pegar o marketplaceId
        const sellerRef = db.collection('sellers').doc(id);
        const sellerSnap = await sellerRef.get();

        if (!sellerSnap.exists) {
            throw new Error('Seller não encontrado');
        }

        const { marketplaceId } = sellerSnap.data();

        // 2. Decrementa quantidade_vendedores do marketplace
        const marketplaceRef = db.collection('marketplaces').doc(marketplaceId);
        if (marketplaceRef) {
            await marketplaceRef.update({
                quantidade_vendedores: require('firebase-admin').firestore.FieldValue.increment(-1)
            });
        }

        // 3. Exclui o seller
        await sellerRef.delete();

        // 4. Exclui o cliente
        await db.collection('clientes').doc(id_cliente).delete();

        return true;
    }

    static async deletarSellerByMarketplace(id, id_cliente) {
        // 1. Busca o seller para pegar o marketplaceId
        const sellerRef = db.collection('sellers').doc(id);
        const sellerSnap = await sellerRef.get();

        if (!sellerSnap.exists) {
            throw new Error('Seller não encontrado');
        }

        const { marketplaceId } = sellerSnap.data();

        // 2. Decrementa quantidade_vendedores do marketplace
        const marketplaceRef = db.collection('marketplaces').doc(marketplaceId);
        if (marketplaceRef) {
            await marketplaceRef.update({
                quantidade_vendedores: require('firebase-admin').firestore.FieldValue.increment(-1)
            });
        }
        // 3. Exclui o seller
        await sellerRef.delete();

        // 4. Exclui o cliente
        await db.collection('clientes').doc(id_cliente).delete();

        return true;
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

        // let marketplaceAtualizado = null;

        // // Se houver marketplaceId e dados de marketplace para atualizar
        // if (cliente.marketplaceId && marketplace) {
        //     await db.collection('marketplaces').doc(cliente.marketplaceId).update(marketplace);
        //     // Busca marketplace atualizado
        //     const marketplaceDoc = await db.collection('marketplaces').doc(cliente.marketplaceId).get();
        //     if (marketplaceDoc.exists) {
        //         marketplaceAtualizado = { id: marketplaceDoc.id, ...marketplaceDoc.data() };
        //     }
        // }

        // Retorna os dados atualizados
        return {
            ...cliente,
        };
    }

    static async atualizarSeller(idSeller, dados) {
        // Atualiza o cliente (exceto marketplace)
        const { marketplace, ...dadosCliente } = dados;
        const doc = await db.collection('sellers').doc(idSeller).get();

        // Busca o cliente atualizado para pegar o marketplaceId
        const { cliente_id } = doc.data();

        await db.collection('clientes').doc(cliente_id).update(dadosCliente);

        // Busca o cliente atualizado para pegar o marketplaceId
        const clienteDoc = await db.collection('clientes').doc(cliente_id).get();
        const cliente = { id: clienteDoc.id, ...clienteDoc.data() };

        // let marketplaceAtualizado = null;

        // // Se houver marketplaceId e dados de marketplace para atualizar
        // if (cliente.marketplaceId && marketplace) {
        //     await db.collection('marketplaces').doc(cliente.marketplaceId).update(marketplace);
        //     // Busca marketplace atualizado
        //     const marketplaceDoc = await db.collection('marketplaces').doc(cliente.marketplaceId).get();
        //     if (marketplaceDoc.exists) {
        //         marketplaceAtualizado = { id: marketplaceDoc.id, ...marketplaceDoc.data() };
        //     }
        // }

        // Retorna os dados atualizados
        return {
            ...cliente,
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
        const sellerRef = db.collection('sellers').doc();
        await sellerRef.set({
            id_seller,
            cliente_id: clienteRef.id, // Usa o ID do cliente criado
            marketplaceId
        });


        // 5. Busca os dados do seller criado
        const sellerDoc = await sellerRef.get();

        // 1. Atualiza quantidade_vendedores do marketplace
        const marketplaceRef = db.collection('marketplaces').doc(marketplaceId);

        await marketplaceRef.update({
            quantidade_vendedores: FieldValue.increment(1)
        });

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
        const query = await db.collection('clientes').where('email', '==', email).get();
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

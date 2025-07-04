// models/Assinatura.js
const { db } = require('../../../config/index');

class Assinatura {
    // Listar todas as assinaturas de um cliente específico
    static async getAllByIdClient(clienteId) {
        const assinaturasSnapshot = await db
            .collection('assinaturas')
            .where('cliente_id', '==', clienteId)
            .get();

        const assinaturas = assinaturasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return assinaturas;
    }

    // Listar todas as assinaturas
    static async getAll() {
        const assinaturasSnapshot = await db.collection('assinaturas').get();
        const assinaturas = assinaturasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return assinaturas;
    }

    // Buscar assinatura por ID
    static async getById(id) {
        const docRef = db.collection('assinaturas').doc(id);
        const docSnap = await docRef.get();
        if (!docSnap.exists) {
            return null;
        }
        return { id: docSnap.id, ...docSnap.data() };
    }

    // Criar nova assinatura
    static async create(data) {
        const docRef = await db.collection('assinaturas').add(data);
        return docRef.id;
    }

    // Atualizar assinatura por ID
    static async update(id, data) {
        const docRef = db.collection('assinaturas').doc(id);
        await docRef.update(data);
        return true;
    }

    // Deletar assinatura por ID
    static async delete(id) {
        const docRef = db.collection('assinaturas').doc(id);
        await docRef.delete();
        return true;
    }
}

module.exports = Assinatura;

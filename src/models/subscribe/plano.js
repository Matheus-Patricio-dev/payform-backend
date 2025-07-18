// models/Plano.js
const { db } = require('../../../config/index');

class Plano {
    // Listar todos os planos de um cliente específico
    static async getAllByIdClient(clienteId) {
        const planosSnapshot = await db
            .collection('planos')
            .where('cliente_id', '==', clienteId)
            .get();

        const planos = planosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return planos;
    }
    // Listar todos os planos
    static async getAll() {
        const planosSnapshot = await db.collection('planos').get();
        const planos = planosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return planos;
    }

    // Buscar plano por ID
    static async getById(id) {
        const docRef = db.collection('planos').doc(id);
        const docSnap = await docRef.get();
        if (!docSnap.exists) {
            return null;
        }
        return { id: docSnap.id, ...docSnap.data() };
    }

    // Criar novo plano
    static async create(data) {
        const docRef = await db.collection('planos').add(data);
        return docRef.id;
    }

    // Atualizar plano por ID
    static async update(id, data) {
        const docRef = db.collection('planos').doc(id);
        await docRef.update(data);
        return true;
    }

    // Deletar plano por ID
    static async delete(id) {
        const docRef = db.collection('planos').doc(id);
        await docRef.delete();
        return true;
    }
}

module.exports = Plano;

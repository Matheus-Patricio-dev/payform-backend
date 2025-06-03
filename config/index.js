// configs/index.js
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json'); // ajuste o caminho conforme seu projeto

let firebaseConnected = false;

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    firebaseConnected = true;
    console.log('✅ Firebase conectado com sucesso!');
} catch (error) {
    console.error('❌ Erro ao conectar ao Firebase:', error.message);
}

const db = admin.firestore();

module.exports = { db, firebaseConnected };

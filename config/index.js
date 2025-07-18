const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

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

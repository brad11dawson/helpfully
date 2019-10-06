const serviceAccount = require("../google-credentials.json");
const admin = require("firebase-admin");
const firebaseLogin = require("firebase");

class firebase {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });

    firebaseLogin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    this.firestore = admin.firestore();
    this.auth = admin.auth();
  }

  getDb() {
    return this.firestore;
  }

  getAuth() {
    return this.auth;
  }

  getSignIn() {
    return firebaseLogin.auth();
  }
}

const instance = new firebase();
Object.freeze(instance);

module.exports = instance;

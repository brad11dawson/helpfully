const serviceAccount = require("../google-credentials.json");
const admin = require("firebase-admin");

class firebase {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    this.firestore = admin.firestore();
    this.auth = admin.auth();
    this.admin = admin.firestore;
  }

  getDb() {
    return this.firestore;
  }

  getAuth() {
    return this.auth;
  }

  getAdmin() {
    return this.admin;
  }
}

const instance = new firebase();
Object.freeze(instance);

module.exports = instance;

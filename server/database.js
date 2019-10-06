const serviceAccount = require("../google-credentials.json");
const admin = require("firebase-admin");

class Database {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    this.data = admin.firestore();
  }

  getDb() {
    return this.data;
  }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance;

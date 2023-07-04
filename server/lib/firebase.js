const admin = require("firebase-admin");
const config = require("../firebaseAdminConfig.json")

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(config),
  });
}

module.exports = admin;
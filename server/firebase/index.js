// Project Overview Gear > Project Settings > Service Accounts > Node.js
// Generate Key and save at '../config/fbServiceAccountKey.json'

var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE,
});

module.exports = admin;
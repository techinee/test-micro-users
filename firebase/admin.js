
var admin = require("firebase-admin");

var serviceAccount = require("./microservices-users-d0c6c-firebase-adminsdk-4fa8f-2f92730b87.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const DB = admin.firestore();
module.exports = {admin,DB};
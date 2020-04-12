'use strict'
var admin = require("firebase-admin");

const serviceAccount = require("/home/raul/Documentos/Projectos/Arj-Robot-2.0/app/Controllers/Http/Firebase/Credentials.json");
const db = '';
const config = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arjrobot.firebaseio.com"
};
 !admin.apps.length ? admin.initializeApp(config) : admin.app();
  db = admin.database();

class SavedatumController {



  async index ({request,auth, response })
  {
    this.location();
  }
   location({request})
  {

    const obj = {
      latitud : request.latitud,
      longitud: request.longitud
    }


  }
}

module.exports = SavedatumController

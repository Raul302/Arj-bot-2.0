'use strict'
const Location = use ('App/Models/Location');
const Fecha = use ('App/Models/Fecha');
const Distancia = use ('App/Models/Distancia');
var admin = require("firebase-admin");
var serviceAccount = require("/home/raul/Documentos/Projectos/Arj-Robot-2.0/app/Controllers/Http/cloud/keys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arjrobot.firebaseio.com"
});
const db = admin.database();

class FirebaseController {

  async location({response})
  {
  let locationsref = db.ref('location');
  return new Promise((resolve, reject) => {
    // var locations = [];
    locationsref.once('value', snapshot => {
      resolve(snapshot.val());
    }).catch(err=>{
      reject('Algo ha fallado')
    })
  })
  }

  async savelocation({request,response})
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const locationdata = request.only(['longitud', 'latitud']);
    const objlocation = {
      "latitud": locationdata.latitud,
      "longitud": locationdata.longitud,
      "created_at" : dd + '-' + mm + '-' + yyyy
    }
    db.ref('location').push(objlocation)
    return response.status(200).json('Guardado exitosamente');
  }

  async fecha ({response})
  {
    let fechasref = db.ref('fecha');
  return new Promise((resolve, reject) => {
    // var fechas = [];
    fechasref.once('value', snapshot => {
      resolve(snapshot.val());
    }).catch(err=>{
      reject('Algo ha fallado')
    })
  })
  }

  async savefecha({request,response})
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const fechadata = request.only(['tiempo']);
    const objfecha = {
      "tiempo": fechadata.tiempo,
      "created_at" : dd + '-' + mm + '-' + yyyy
    }
    db.ref('fecha').push(objfecha)
    return response.status(200).json('Guardado exitosamente');
  }

  async distancia ({response})
  {
    let distanciaref = db.ref('distancia');
    return new Promise((resolve, reject) => {
      // var fechas = [];
      distanciaref.once('value', snapshot => {
        resolve(snapshot.val());
      }).catch(err=>{
        reject('Algo ha fallado')
      })
    })
  }

  async savedistancia({request,response})
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const distanciadata = request.only(['recorrido']);
    const objdistancia = {
      "recorrido": distanciadata.recorrido,
      "created_at" : dd + '-' + mm + '-' + yyyy

    }
    db.ref('distancia').push(objdistancia)
    return response.status(200).json('Guardado exitosamente');
  }
}

module.exports = FirebaseController

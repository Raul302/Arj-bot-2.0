'use strict'
const Location = use ('App/Models/Location');
const Fecha = use ('App/Models/Fecha');
const Distancia = use ('App/Models/Distancia');

class MongoController {

  async location({response})
  {
    let locations = await Location.all();

    return response.json(locations);
  }

  async savelocation({request,response})
  {
    const locationdata = request.only(['longitud', 'latitud']);
    const location = new Location();
    location.longitud = locationdata.longitud;
    location.latitud = locationdata.latitud;
    await location.save();
    return response.status(200).json('Guardado exitoso');
  }

  async fecha ({response})
  {
    let fechas = await Fecha.all()
    return response.json(fechas);
  }

  async savefecha({request,response})
  {
    const fechadata = request.only(['tiempo']);
    const fecha = new Fecha();
    fecha.tiempo = fechadata.tiempo;
    await fecha.save();
    return response.status(200).json('Guardado exitoso');
  }

  async distancia ({response})
  {
    let distancias = await Distancia.all()
    return response.json(distancias);
  }

  async savedistancia({request,response})
  {
    const distanciadata = request.only(['recorrido']);
    const distancia = new Distancia();
    distancia.recorrido = distanciadata.recorrido;
    await distancia.save();
    return response.status(200).json('Guardado exitoso');
  }
}

module.exports = MongoController

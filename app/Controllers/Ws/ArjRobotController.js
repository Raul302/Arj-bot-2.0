  'use strict'
  const Location = use ('App/Models/Location');
const Fecha = use ('App/Models/Fecha');
const Distancia = use ('App/Models/Distancia');

// Refactoring
class ArjRobotController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
    console.log('Cliente conectado');
  }

 async onFechas(data)
 {
   const fechadata = data;
    const fecha = new Fecha();
    fecha.tiempo = fechadata;
   await fecha.save();
  this.socket.broadcastToAll('savefechas',data);
}
   onCarro(data)
   {
     console.log('Recibiendo de Carro' + data);
     this.socket.broadcastToAll('Carro',data);
    }
  // Carro
  // onAtras(data)
  // {
  //   console.log('Atras ' + data);
  //   this.socket.broadcastToAll('changeAtras',data);

  // }
  // onAdelante(data)
  // {
  //   console.log('Adelante ' + data);
  //   this.socket.broadcastToAll('changeAdelante',data);
  // }
  // onIzquierda(data)
  // {
  //   console.log('Izquierda ' + data);
  //   this.socket.broadcastToAll('changeIzquierda',data);

      }
      onAdelante(data) {
          console.log('Adelante ' + data);
          this.socket.emit('changeAdelante', 'Tu data desde el server: ' + data)

  // }
  // onDerecha(data)
  // {
  //   console.log('Derecha ' + data);
  //   this.socket.broadcastToAll('changeDerecha',data);

  // }

  //Pinza
  onPinza(data)
   {
     console.log('Recibiendo de Pinza' + data);
     this.socket.broadcastToAll('Pinza',data);
    }
  // onAgarrar(data)
  // {
  //   console.log('Agarre ' + data);
  //   this.socket.broadcastToAll('changeAgarre',data);

  // }
  // onSoltar(data)
  // {
  //   console.log('Soltar ' + data);
  //   this.socket.broadcastToAll('changeSoltar',data);

  // }

  // Movimiento Brazo
  onBrazo(data)
   {
     console.log('Recibiendo de Brazo' + data);
     this.socket.broadcastToAll('Brazo',data);
    }
  // onBAbajo(data)
  // {
  //   console.log('Abajo Brazo ' + data);
  //   this.socket.broadcastToAll('changeBAbajo',data);

  // }
  // onBArriba(data)
  // {
  //   console.log('Arriba Brazo ' + data);
  //   this.socket.broadcastToAll('changeBArriba',data);
  // }
  // onBIzquierda(data)
  // {
  //   console.log('Izquierda Brazo ' + data);
  //   this.socket.broadcastToAll('changeBIzquierda',data);

  // }
  // onBDerecha(data)
  // {
  //   console.log('Derecha Brazo ' + data);
  //   this.socket.broadcastToAll('changeBDerecha',data);

  // }
}

  module.exports = ArjRobotController
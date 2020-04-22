  'use strict'
// Refactoring
class ArjRobotController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
    console.log('Cliente conectado');
  }

 onTest(data)
 {
   console.log('Subscripcion ' + data);
   this.socket.broadcastToAll('subscripcion', 'Hola desde el server');
}
  // Carro
  onAtras(data)
  {
    console.log('Atras ' + data);
    this.socket.broadcastToAll('changeAtras',data);

  }
  onAdelante(data)
  {
    console.log('Adelante ' + data);
    this.socket.broadcastToAll('changeAdelante',data);
  }
  onIzquierda(data)
  {
    console.log('Izquierda ' + data);
    this.socket.broadcastToAll('changeIzquierda',data);


  }
  onDerecha(data)
  {
    console.log('Derecha ' + data);
    this.socket.broadcastToAll('changeDerecha',data);

  }

  //Pinza
  onAgarrar(data)
  {
    console.log('Agarre ' + data);
    this.socket.broadcastToAll('changeAgarre',data);

  }
  onSoltar(data)
  {
    console.log('Soltar ' + data);
    this.socket.broadcastToAll('changeSoltar',data);

  }

  // Movimiento Brazo
  onBAbajo(data)
  {
    console.log('Abajo Brazo ' + data);
    this.socket.broadcastToAll('changeBAbajo',data);

  }
  onBArriba(data)
  {
    console.log('Arriba Brazo ' + data);
    this.socket.broadcastToAll('changeBArriba',data);


  }
  onBIzquierda(data)
  {
    console.log('Izquierda Brazo ' + data);
    this.socket.broadcastToAll('changeBIzquierda',data);

  }
  onBDerecha(data)
  {
    console.log('Derecha Brazo ' + data);
    this.socket.broadcastToAll('changeBDerecha',data);

  }
}

module.exports = ArjRobotController

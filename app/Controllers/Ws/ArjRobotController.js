'use strict'

class ArjRobotController {
    constructor({ socket, request }) {
        this.socket = socket
        this.request = request
        console.log('Cliente conectado');
    }

    onTest(data) {
            console.log('Subscripcion ' + data);
            this.socket.emit('subscripcion', 'Hola desde el server');
        }
        // Carro
    onAtras(data) {
        console.log('Atras ' + data);
        this.socket.emit('changeAtras', 'Tu data desde el server: ' + data)

    }
    onAdelante(data) {
        console.log('Adelante ' + data);
        this.socket.emit('changeAdelante', 'Tu data desde el server: ' + data)

    }
    onIzquierda(data) {
        console.log('Izquierda ' + data);
        this.socket.emit('changeIzquierda', 'Tu data desde el server: ' + data)


    }
    onDerecha(data) {
        console.log('Derecha ' + data);
        this.socket.emit('changeDerecha', 'Tu data desde el server: ' + data)


    }

    //Pinza
    onAgarrar(data) {
        console.log('Agarre ' + data);
        this.socket.emit('changeAgarre', 'Tu data desde el server: ' + data)

    }
    onSoltar(data) {
        console.log('Soltar ' + data);
        this.socket.emit('changeSoltar', 'Tu data desde el server: ' + data)

    }

    // Movimiento Brazo
    onBAbajo(data) {
        console.log('Abajo Brazo ' + data);
        this.socket.emit('changeAbajo', 'Tu data desde el server: ' + data)

    }
    onBArriba(data) {
        console.log('Arriba Brazo ' + data);
        this.socket.emit('changeArriba', 'Tu data desde el server: ' + data)


    }
    onBIzquierda(data) {
        console.log('Izquierda Brazo ' + data);
        this.socket.emit('changeIzquierda', 'Tu data desde el server: ' + data)

    }
    onBDerecha(data) {
        console.log('Derecha Brazo ' + data);
        this.socket.emit('changeDerecha', 'Tu data desde el server ' + data)

    }
    OnFoto(data) {
        console.log('Tomar foto ' + data);
        this.socket.broadcastToAll('Tomarfoto', data);
    }
}

module.exports = ArjRobotController
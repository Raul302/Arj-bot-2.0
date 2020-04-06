'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')

// Ws.channel('chat', ({ socket }) => {
//   console.log('user joined with %s socket id', socket.id)
// })

//Feed definitivo
Ws.channel('feed','ArjRobotController');


// //Feeds  Carro
// Ws.channel('Carro/izquierda', 'CarroController');
// Ws.channel('Carro/Derecha', 'CarroController');
// Ws.channel('Carro/Adelante', 'CarroController');
// Ws.channel('Carro/Atras', 'CarroController');

// // Feeds Brazo
// Ws.channel('Brazo/izquierda', 'BrazoController');
// Ws.channel('Brazo/Derecha', 'BrazoController');
// Ws.channel('Brazo/Abajo', 'BrazoController');
// Ws.channel('Brazo/Arriba', 'BrazoController');

// // Feeds Agarre / Soltar
// Ws.channel('Brazo/Agarre', 'BrazoController');
// Ws.channel('Brazo/Soltar', 'BrazoController');

// // Feeds Camara
// Ws.channel('Camara', 'CamaraController');


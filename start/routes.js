'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.get('location','cloud/MongoController.location');
  Route.post('location','cloud/MongoController.savelocation');
  Route.get('fecha','cloud/MongoController.fecha');
  Route.post('fecha','cloud/MongoController.savefecha');
  Route.get('distancia','cloud/MongoController.distancia');
  Route.post('distancia','cloud/MongoController.savedistancia');

}).prefix('api')

// Route.get('index', 'Firebase/SavedatumController.index');
// Route.get('location', 'Firebase/SavedatumController.location');
// Route.post('location', 'Firebase/SavedatumController.savelocation');

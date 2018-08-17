import express from 'express'

//controllers
import BasicController from './Controllers/BasicController'

const Routes = express();

Routes.get('/', BasicController.get)
Routes.post('/', BasicController.post);

export default Routes;
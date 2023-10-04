import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.get('/', (req, res, next) =>
  new MotorcycleController(req, res, next).getAllMotorcycles());

routes.get('/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).getMotorcycleById());

routes.post('/', (req, res, next) =>
  new MotorcycleController(req, res, next).create());

routes.put('/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).updateMotorcycleById());

routes.delete('/:id', (req, res, next) => 
  new MotorcycleController(req, res, next).removeMotorcycleById());

export default routes;
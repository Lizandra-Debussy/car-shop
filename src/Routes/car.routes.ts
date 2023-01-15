import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.get('/cars', (req, res, next) => new CarController(req, res, next).getAllCar());

carRoutes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCarById());

carRoutes.post('/cars', (req, res, next) => new CarController(req, res, next).create());

export default carRoutes;
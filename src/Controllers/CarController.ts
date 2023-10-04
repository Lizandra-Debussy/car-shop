import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

const CAR_NOT_FOUND = 'Car not found';
const INVALID_ID = 'Invalid mongo id';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async create() {
    const { body } = this.req;

    try {
      const newCar = await this.service.registerCar(body);
      return this.res.status(201).json(newCar);
    } catch (error) { this.next(error); }
  }

  async getAllCars() {
    try {
      const listAllCars = await this.service.getAllCars();
      return this.res.status(200).json(listAllCars);
    } catch (error) { this.next(error); }
  }

  async getCarById() {
    const { id } = this.req.params;
    try {
      const getCar = await this.service.findCarById(id);

      if (!getCar) return this.res.status(404).json({ message: CAR_NOT_FOUND });
      
      return this.res.status(200).json(getCar);
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_ID });
    }
  }

  async updateCarById() {
    const { id } = this.req.params;
    const { body } = this.req;

    try {
      const updateCar = await this.service.updateCar(id, body);

      if (!updateCar) return this.res.status(404).json({ message: CAR_NOT_FOUND });

      return this.res.status(200).json(updateCar);
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_ID });
    }
  }

  async removeCarById() {
    const { id } = this.req.params;
    try {
      const removeCar = await this.service.deleteCarById(id);    

      if (!removeCar) return this.res.status(404).json({ message: CAR_NOT_FOUND });
      
      return this.res.status(204).end();
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_ID });
    }
  }
}

export default CarController;
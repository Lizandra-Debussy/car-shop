import { NextFunction, Request, Response } from 'express';
// import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

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
    // const car: ICar = {
    //   model: this.req.body.model,
    //   year: this.req.body.year,
    //   color: this.req.body.color,
    //   status: this.req.body.status,
    //   buyValue: this.req.body.buyValue,
    //   doorsQty: this.req.body.doorsQty,
    //   seatsQty: this.req.body.seatsQty,
    // };

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

      if (!getCar) return this.res.status(404).json({ message: 'Car not found' });
      
      return this.res.status(200).json(getCar);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  async updateCarById() {
    const { id } = this.req.params;
    const { body } = this.req;

    try {
      const updateCar = await this.service.updateCar(id, body);

      if (!updateCar) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(updateCar);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarController;
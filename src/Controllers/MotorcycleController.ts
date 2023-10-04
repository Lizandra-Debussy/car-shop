import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';
const INVALID_ID = 'Invalid mongo id';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  async create() {
    const { body } = this.req;
    try {
      const newMotorcycle = await this.service.createMotorcycle(body);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) { this.next(error); }
  }

  async getAllMotorcycles() {
    try {
      const listAllMotorcycles = await this.service.getAllMotorcycles();
      return this.res.status(200).json(listAllMotorcycles);
    } catch (error) { this.next(error); }
  }

  async getMotorcycleById() {
    const { id } = this.req.params;
    try {
      const getMotorcycle = await this.service.findMotorcycleById(id);

      if (!getMotorcycle) return this.res.status(404).json({ message: MOTORCYCLE_NOT_FOUND });
      
      return this.res.status(200).json(getMotorcycle);
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_ID });
    }
  }

  async updateMotorcycleById() {
    const { id } = this.req.params;
    const { body } = this.req;

    try {
      const updateMotorcycle = await this.service.updateMotorcycle(id, body);

      if (!updateMotorcycle) return this.res.status(404).json({ message: MOTORCYCLE_NOT_FOUND });

      return this.res.status(200).json(updateMotorcycle);
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_ID });
    }
  }

  async removeMotorcycleById() {
    const { id } = this.req.params;
    try {
      const removeCar = await this.service.deleteMotorcycleById(id);    

      if (!removeCar) return this.res.status(404).json({ message: MOTORCYCLE_NOT_FOUND });
      
      return this.res.status(204).end();
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_ID });
    }
  }
}

export default MotorcycleController;
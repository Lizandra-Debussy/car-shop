import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

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

      if (!getMotorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
      
      return this.res.status(200).json(getMotorcycle);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  async updateMotorcycleById() {
    const { id } = this.req.params;
    const { body } = this.req;

    try {
      const updateMotorcycle = await this.service.updateMotorcycle(id, body);

      if (!updateMotorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });

      return this.res.status(200).json(updateMotorcycle);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcycleController;
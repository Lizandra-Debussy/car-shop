import MotorcycleModel from '../Models/MotorcycleModel';
import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';

class MotorcycleService {
  private motorcycleModel = new MotorcycleModel();
  private createMotorcycleDomain(motorcycle: IMotorcycles | null): Motorcycles | null {
    if (motorcycle) {
      return new Motorcycles(motorcycle);
    }
    return null;
  }

  async createMotorcycle(motorcycle: IMotorcycles) {
    const newMotorcycle = await this.motorcycleModel.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  async getAllMotorcycles() {
    const listMotorcycles = await this.motorcycleModel.findAll();
    const listMotorcyclesArray = listMotorcycles.map((list) => this.createMotorcycleDomain(list));
    return listMotorcyclesArray;
  }

  async findMotorcycleById(id: string) {    
    const findMotorcycle = await this.motorcycleModel.findById(id);    
    return this.createMotorcycleDomain(findMotorcycle);
  }

  async updateMotorcycle(id: string, obj: IMotorcycles) {
    const update = await this.motorcycleModel.update(id, obj);
    return this.createMotorcycleDomain(update);
  }

  async deleteMotorcycleById(id: string) {
    const remove = await this.motorcycleModel.remove(id);
    return this.createMotorcycleDomain(remove);
  }
}

export default MotorcycleService;
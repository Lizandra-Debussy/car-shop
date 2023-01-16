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
}

export default MotorcycleService;
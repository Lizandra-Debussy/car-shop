import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motocycle: IMotorcycles) {
    super(motocycle);
    this.category = motocycle.category;
    this.engineCapacity = motocycle.engineCapacity;
  }
}

export default Motorcycle;
import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(motocycle: IVehicle) {
    this.id = motocycle.id;
    this.model = motocycle.model;
    this.year = motocycle.year;
    this.color = motocycle.color;
    this.status = motocycle.status;
    this.buyValue = motocycle.buyValue;
  }
}

export default Vehicle;
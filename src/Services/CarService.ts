import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  private carModel = new CarModel();
  private createCarDomain(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async registerCar(car: ICar) {
    const newRegister = await this.carModel.create(car);
    return this.createCarDomain(newRegister);
  }
}

export default CarService;
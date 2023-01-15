import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  private carModel = new CarModel();
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async registerCar(car: ICar) {
    const newRegister = await this.carModel.create(car);
    return this.createCarDomain(newRegister);
  }

  async getAllCar() {
    const listCars = await this.carModel.findAll();
    const listCarsArray = listCars.map((list) => this.createCarDomain(list));
    return listCarsArray;
  }

  async findCarById(id: string) {
    const findCar = await this.carModel.findById(id);
    return this.createCarDomain(findCar);
  }
}

export default CarService;
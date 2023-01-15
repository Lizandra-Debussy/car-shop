import { Schema } from 'mongoose';
// import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarModel extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'cars');
  }

  // async findAll(): Promise<ICar[]> {
  //   return this.model.find();
  // }

  // async findById(id: string): Promise<ICar | null> {
  //   // if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
  //   return this.model.findOne({ id });
  // }
}

export default CarModel;
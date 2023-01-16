import { Schema } from 'mongoose';
import IMotocycles from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleModel extends AbstractODM<IMotocycles> {
  constructor() {
    const schema = new Schema<IMotocycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'motorcycles');
  }
}

export default MotorcycleModel;
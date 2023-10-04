import {
  Model,
  models,
  Schema,
  model,
  UpdateQuery,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected _model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this._model = models[this.modelName] || model(this.modelName, this.schema);
  }

  protected get model(): Model<T> {
    return this._model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this._model.find();
  }

  public async findById(_id: string): Promise<T | null> {
    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async remove(_id: string): Promise<T | null> {
    return this.model.findByIdAndRemove({ _id });
  }
}

export default AbstractODM;
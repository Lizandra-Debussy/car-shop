import {
  Model,
  models,
  Schema,
  model,
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
}

export default AbstractODM;
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';
import ICar from '../../../../src/Interfaces/ICar';

describe('Testes com a função registerCar', function () {
  it('Se é possível cadastrar um carro', async function () {
    const input: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    
    const output = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    
    sinon.stub(Model, 'create').resolves(output);

    const service = new CarService();
    const result = await service.registerCar(input);

    expect(result).to.be.deep.equal(output);
  });

  it('Retorna erro no cadastro caso algum campo obrigatório esteja faltando ', async function () {
    const RESULT_ERROR = {
      message: 'cars validation failed: color: Path `color` is required.',
    };
    
    const input = {
      model: 'Marea',
      year: 1992,
      color: '',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    
    sinon.stub(Model, 'create').resolves({});

    try {
      const service = new CarService();
      await service.registerCar(input);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal(RESULT_ERROR);
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});

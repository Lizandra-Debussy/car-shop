import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

describe('Testes com a função updateCarById', function () {
  it('Se é possível atualizar os dados de um carro', async function () {
    const inputId = '634852326b35b59438fbea2f';
    const inputBody: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    
    const output = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findByIdAndUpdate').resolves(output);

    const service = new CarService();
    const result = await service.updateCar(inputId, inputBody);

    expect(result).to.be.deep.equal(output);
  });
});
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../../src/Services/CarService';

describe('Testes com a função getAllCar', function () {
  it('Se é possível listar todos os carros', async function () {
    const output = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        status: true,
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    
    sinon.stub(Model, 'find').resolves(output);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });
});

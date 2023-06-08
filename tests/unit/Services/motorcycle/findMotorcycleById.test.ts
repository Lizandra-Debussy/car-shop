import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('Testes com a função findMotorcycleById', function () {
  it('Se é possível listar uma moto pelo Id', async function () {
    const output = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    
    sinon.stub(Model, 'findOne').resolves({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    const service = new MotorcycleService();
    
    const result = await service.findMotorcycleById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(output);
  });

  it('Se retorna null ao buscar por uma moto com id inválido', async function () {
    sinon.stub(Model, 'findOne').resolves();
    const service = new MotorcycleService();
    const result = await service.findMotorcycleById('6');

    expect(result).to.be.deep.equal(null);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});

// it('', async function () {
    
// });

// describe('', function () {
//   it('', async function () {
    
//   });
// });
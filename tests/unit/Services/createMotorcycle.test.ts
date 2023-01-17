import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Testes com a função createMotorcycle', function () {
  it('Se é possível cadastrar uma moto', async function () {
    const input: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    
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
    
    sinon.stub(Model, 'create').resolves(output);

    const service = new MotorcycleService();
    const result = await service.createMotorcycle(input);

    expect(result).to.be.deep.equal(output);
  });

  it('Retorna erro no cadastro caso algum campo obrigatório esteja faltando ', async function () {
    const RESULT_ERROR = {
      message: 'cars validation failed: color: Path `color` is required.',
    };
    
    const input: IMotorcycle = {
      model: 'Honda Titan',
      year: 2021,
      color: '',
      status: true,
      buyValue: 14.000,
      category: 'Street',
      engineCapacity: 160,
    };
    
    sinon.stub(Model, 'create').resolves({});

    try {
      const service = new MotorcycleService();
      await service.createMotorcycle(input);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal(RESULT_ERROR);
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});
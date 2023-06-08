import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const RESULT_ERROR = 'Motorcycle not found';

describe('Testes com a função updateMotorcycle', function () {
  it(
    'Não é possível alterar os dados de uma moto quando o formato do id é inválido',
    async function () {
      const inputId = '1111222233330000ffffcccc';
      const inputBody: IMotorcycle = {
        model: 'Honda Cb 600f Hornet',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        category: 'Street',
        engineCapacity: 600,
      };
    
      sinon.stub(Model, 'findByIdAndUpdate').resolves({});

      try {
        const service = new MotorcycleService();
        await service.updateMotorcycle(inputId, inputBody);
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal(RESULT_ERROR);
      }
      sinon.restore();
    },
  );
});
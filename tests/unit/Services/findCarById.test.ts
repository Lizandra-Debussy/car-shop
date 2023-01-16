// import { expect } from 'chai';
// import sinon from 'sinon';
// import { Model } from 'mongoose';
// import CarService from '../../../src/Services/CarService';
// // import Car from '../../../src/Domains/Car';

// describe('Testes com a função findCarById', function () {
//   it('Se é possível listar um carro pelo Id', async function () {
//     const output = [{
//       id: '634852326b35b59438fbea2f',
//       model: 'Marea',
//       year: 2002,
//       color: 'Black',
//       status: true,
//       buyValue: 15.99,
//       doorsQty: 4,
//       seatsQty: 5,
//     }];
    
//     sinon.stub(Model, 'findOne').resolves();

//     const service = new CarService();
//     const result = await service.findCarById('634852326b35b59438fbea2f');

//     expect(result).to.be.deep.equal(output);

//     sinon.restore();
//   });
// });

// it('', async function () {
    
// });

// describe('', function () {
//   it('', async function () {
    
//   });
// });
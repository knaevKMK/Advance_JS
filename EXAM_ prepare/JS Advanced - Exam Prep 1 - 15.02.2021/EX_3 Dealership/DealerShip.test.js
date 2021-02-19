const  expect=require('chai').expect;
const dealership=require('./DealerShip.js');

describe('dealership', function () {
    describe('newCarCost(oldCarModel, newCarPrice)', function () {
        it('should return final price', function () {
            expect(dealership.newCarCost('BMW',89789)).equal(89789);
        });
        it('should return new same price price', function () {
            expect(dealership.newCarCost('Audi A8 D5',50000)).equal(25000);
        });
        it('should return new same price price', function () {
            expect(dealership.newCarCost('Audi A8 D5',25000)).equal(0);
        });
        it('should return new same price price', function () {
            expect(dealership.newCarCost('Audi A8 D5',10000)).equal(-15000);
        });
    });
    describe('carEquipment(extrasArr, indexArr) ', function () {
        it('should return result', function () {
        let extrasArr=['heated seats', 'sliding roof', 'sport rims', 'navigation'];
        let indexArr= [0, 3, 4];
        let result =dealership.carEquipment(extrasArr,indexArr);
         for (let i = 0 ; i<=indexArr;i++){
             expect(extrasArr[indexArr[i]]).equal(result[i]);
         }
        });
        it('should  empty result', function () {
            let extrasArr=['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr= [];
            let result =dealership.carEquipment(extrasArr,indexArr);

                expect(dealership.carEquipment(extrasArr,indexArr)).deep.equal([]);

        });
        it('should return empty result', function () {
            let extrasArr=['navi'];
            let indexArr= [0];
         //  let result =dealership.carEquipment(extrasArr,indexArr);

            expect(dealership.carEquipment(extrasArr,indexArr)).deep.equal(['navi']);

        });
    });

    describe('euroCategory(category) ', function () {
        it('should under line category 4', function () {
            expect(dealership.euroCategory(3)).equal('Your euro category is low, so there is no discount from the final price!')
        });
        it('should missed category ', function () {
            expect(dealership.euroCategory(0)).equal('Your euro category is low, so there is no discount from the final price!')
        });

        it('should 5% discount price', function () {
            expect(dealership.euroCategory(5)).equal(`We have added 5% discount to the final price: 14250.`)
        });it('should 5% discount price', function () {
            expect(dealership.euroCategory(4)).equal(`We have added 5% discount to the final price: 14250.`)
        });
    });
    
});
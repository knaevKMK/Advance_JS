const expect = require('chai').expect;
const numberOperations = require('../../_EXAM 20 02 2021/EX_3/EX_3.js');

describe('object', function () {
    describe('powNumber', function () {
        it('should return positive num', function () {
            expect(numberOperations.powNumber(2)).equal(4);
        });
        it('should return 0 num', function () {
            expect(numberOperations.powNumber(0)).equal(0);
        });
        it('should of negative num', function () {
            expect(numberOperations.powNumber(-2)).equal(4);
        });
    });
    describe('numberChecker(input)', function () {
        it('isNaN Error', function () {
            expect(() => numberOperations.numberChecker('w')).throw(Error);
        });
        it('not NaN lower 100', function () {
            expect( numberOperations.numberChecker('2')).equal('The number is lower than 100!');
        });
        it('not NaN over 100', function () {
            expect( numberOperations.numberChecker('101')).equal('The number is greater or equal to 100!');
        });
        it('not NaN == 100', function () {
            expect( numberOperations.numberChecker('100')).equal('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', function () {
        it('should ', function () {
            let arrOne=[];
            let arrTwo=[];
            let result= [];
            expect(numberOperations.sumArrays(arrOne,arrTwo)).deep.equal([]);
        });
        it('should ', function () {
            let arrOne=[1,2,3];
            let arrTwo=[1,2,3];
            let result= [2,4,6];
            expect(numberOperations.sumArrays(arrOne,arrTwo)).deep.equal(result);
        });
        it('should ', function () {
            let arrOne=[1,2,3,4];
            let arrTwo=[1,2,3];
            let result= [2,4,6,4];
            expect(numberOperations.sumArrays(arrOne,arrTwo)).deep.equal(result);
        });
        it('should ', function () {
            let arrOne=[1,2,];
            let arrTwo=[1,2,3];
            let result= [2,4,3];
            expect(numberOperations.sumArrays(arrOne,arrTwo)).deep.equal(result);
        });
    });
});
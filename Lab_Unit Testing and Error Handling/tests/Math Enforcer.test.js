const expect = require('chai').expect;
const mathEnforcer = require('../Math Enforcer.js');

describe('mathEnforcer', function () {
    let str = '2';
    let numPositive = 2;
    let numNegative = -2;
    let floatPointNum = 2.2121;
    describe('addFive', function () {

        it('should return correct result with a non-integer param', function () {
            let result = mathEnforcer.addFive(str)
            expect(result).undefined;
        });
        it('should return correct result with a integer param', function () {
            expect(mathEnforcer.addFive(numPositive)).to.be.equal(7);
        });
        it('should return correct result with a Negative integer param', function () {
            expect(mathEnforcer.addFive(numNegative)).to.be.equal(3);
        });
        it('should return valid result with float.Point integer', function () {
          expect(mathEnforcer.addFive(floatPointNum)).closeTo(7.21, 0.01);
        //    expect(mathEnforcer.addFive(floatPointNum)).equal(floatPointNum+5);
        });
        it("mathEnforcer.addFive(0) should return 5",function(){
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
    });

    describe('subtractTen', function () {
        it("mathEnforcer.subtractTen(0) should return -10",function(){
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
        it('should return correct result with a integer param', function () {
            let result = mathEnforcer.subtractTen(str)
            expect(result).undefined;
        });
        it('should return correct result with a integer param', function () {
            expect(mathEnforcer.subtractTen(numPositive)).to.be.equal(-8);
        });
        it('should return correct result with a Negative integer param', function () {
            expect(mathEnforcer.subtractTen(numNegative)).to.be.equal(-12);
        });
        it('should return valid result with float.Point integer', function () {
            expect(mathEnforcer.subtractTen(floatPointNum)).closeTo(-7.78, 0.01);
          //  expect(mathEnforcer.subtractTen(floatPointNum)).equal(floatPointNum-10);
        });

    });
    describe('sum', function () {

        it("1: valid 2nd : invalid param",function(){
            expect(mathEnforcer.sum(3,'pesho')).to.equal(undefined);
        });
        it('1st: invlaid param', function () {
            let result = mathEnforcer.sum(str, numPositive)
            expect(result).undefined;
        });
        it('both invalid param', function () {
            let result = mathEnforcer.sum(str, str)
            expect(result).undefined;
        });


        it('should return correct result with both integer params', function () {
            expect(mathEnforcer.sum(numPositive, 4)).to.be.equal(6)
        });
        it('should return correct result with both Negative integer params', function () {
            expect(mathEnforcer.sum(numNegative,numNegative)).to.be.equal(-4);
        });
        it('should return correct result with a Negative & a Positive integer param', function () {
            expect(mathEnforcer.sum(numNegative,numPositive)).to.be.equal(0);
        });
        it('should return valid result with float.Point integer', function () {
     //      expect(mathEnforcer.sum(floatPointNum, numPositive)).closeTo(4.21, 0.01);
           expect(mathEnforcer.sum(floatPointNum, floatPointNum)).equal(floatPointNum*2);
        });
        it('should return valid result with float.Point integer', function () {
            //      expect(mathEnforcer.sum(floatPointNum, numPositive)).closeTo(4.21, 0.01);
            expect(mathEnforcer.sum(floatPointNum, numPositive)).equal(floatPointNum+numPositive);
        });

        it("mathEnforcer.sum(0,0) should return undefined",function(){
            expect(mathEnforcer.sum(0,0)).to.equal(0);
        });
    })
});
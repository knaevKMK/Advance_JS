const expect = require('chai').expect;
const createCalculator = require('../add_subtract');

describe('calculate', function () {
    let calc;
    beforeEach(function (){
    calc    = createCalculator();
    });
    let result;

    //empty
    it('expect 0', function () {
        result = createCalculator().get();
        expect(result).to.be.equal(0);
    });

    //add digit
    it('add positive integer', function () {
        calc.add(5)
        result = calc.get();
        expect(result).to.be.equal(5);
    });
    it('add negative integer', function () {
        calc.add(-5)
        result = calc.get();
        expect(result).to.be.equal(-5);
    });
//add string
    it('add String Non Number expect NaN', function () {
        calc.add('may')
        result = calc.get();
        expect(result).NaN;
    });
    it('add negative integer as String', function () {
        calc.add('-5')
        result = calc.get();
        expect(result).to.be.equal(-5);
    });
    //sub digit
    it('sub positive integer', function () {
        calc.subtract(5)
        result = calc.get();
        expect(result).to.be.equal(-5);
    });
    it('sub negative integer', function () {
        calc.subtract(-5)
        result = calc.get();
        expect(result).to.be.equal(5);
    });
//sub string
    it('sub String Non Number expect NaN', function () {
        calc.subtract('may')
        result = calc.get();
        expect(result).NaN;
    });
    it('sub negative integer as String', function () {
        calc.subtract('-5')
        result = calc.get();
        expect(result).to.be.equal(5);
    });

});
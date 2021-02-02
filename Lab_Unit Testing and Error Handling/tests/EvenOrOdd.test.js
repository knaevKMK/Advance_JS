const expect= require('chai').expect;
const isOddOrEven = require('../EvenOrOdd');

describe('Even or Odd', function () {
    it('should  undefined: not valid param', function () {
        expect(isOddOrEven(3)).undefined;
    });
    it('should even', function () {
        expect(isOddOrEven('ab')).to.equal('even');
    });
    it('should odd', function () {
        expect(isOddOrEven('a')).to.equal('odd');
    });
});
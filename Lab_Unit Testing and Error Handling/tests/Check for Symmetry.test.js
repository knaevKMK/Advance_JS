const expect=require('chai').expect;
const isSymmetric= require('../Check for Symmetry');

describe('isSymmetric', function () {
    it('empty arr ', function () {
        expect(isSymmetric([])).true;
    });
    it('invalid type of input', function () {
        expect(isSymmetric('november')).false;
    });
    it('valid param even count', function () {
        expect(isSymmetric([1,1])).equal;
    });
    it('valid param odd count', function () {
        expect(isSymmetric([1,2,1])).equal;
    });
    it('in_valid param even count', function () {
        expect(isSymmetric([1,2])).false;
    });
    it('in_valid param odd count', function () {
        expect(isSymmetric([2,2,1])).false;
    });
    it('in_valid param odd count', function () {
        expect(isSymmetric([1,2,'1'])).false;
    });
});
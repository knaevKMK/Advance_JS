const {expect} = require('chai');
const sum = require('../subSum.js');

describe('validateSum', function () {

    it('validResult with outOfBounds end index', () => {
        expect(sum([10, 20, 30, 40, 50, 60], 3, 300)).to.be.equal(150);
    });
    it('validResult with outOfBounds start index', () => {
        expect(sum([10, 20, 30, 40, 50, 60], -3, 1)).to.be.equal(30);
    });
    it('validResult with empty array', () => {
        expect(sum([], 1, 2)).to.equal(0);
    });
    it('validResult with fault param for array', () => {
        expect(sum('test', 1, 2)).to.NaN;
    });
    it('validResult with fault element from array', () => {
        expect(sum([10, 'twenty', 30, 40], 0, 2)).to.NaN;
    });
});


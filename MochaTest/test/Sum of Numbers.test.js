const expect = require('chai').expect;
const sum = require('../Sum of Numbers');

describe('Sum numbers', ()=>{

    it('empty Array', function () {
        expect(sum([])).to.equal(0);
    });
    it('sums single number',  ()=> {
        expect(sum([1])).to.equal(1);
    });
    it('valid paramS nums',  ()=> {
        expect(sum([1,1])).to.equal(2);
    });
    it('valid paramS nums',  ()=> {
        expect(sum([2,3,4])).to.equal(9);
    });
    it('valid param string', function () {
        expect(sum(["1"])).to.equal(1);
    });
    it('valid paramS string', function () {
        expect(sum(["-1","2","3"])).to.equal(4);
    });
    it('invalid array element ', function () {
        expect(sum([1,2,'november'])).NaN
    });
    it('invalid element nonArray', function () {
        expect(sum('november')).NaN
    });
})

const expect= require('chai').expect;
const lookupChar= require('../charLookUp');

describe('charLookUp', function () {
    // first invalid
    it('should undefined: invalid string param', function () {
        expect(lookupChar(123,2)).undefined;
    });
    //second invalid
    it('should undefined: invalid index param', function () {
        expect(lookupChar('abv','s')).undefined;
    });
    it('should undefined: invalid index param Floating.Point', function () {
        expect(lookupChar('abv',1.5)).undefined;
    });

    //2 lower index
    it('should Invalid index', function () {
        expect(lookupChar('abv',-2)).to.be.equal('Incorrect index');
    });
    //2 equal index
    it('should Invalid string length', function () {
        expect(lookupChar('abv',3)).to.be.equal('Incorrect index');
    });
    //2 bigger index
    it('should Invalid string length', function () {
        expect(lookupChar('abv',5)).to.be.equal('Incorrect index');
    });
    //valid param in range
    it('should valid result with valid param', function () {
               expect(lookupChar(' ',0)).to.be.equal(' ');
    });
    it('should valid result with valid param', function () {
        expect(lookupChar('qweryal',5)).to.be.equal('a');
    });
    // empty string
    it('should empty string', function () {
        expect(lookupChar('',0)).to.be.equal('Incorrect index');
    });
});
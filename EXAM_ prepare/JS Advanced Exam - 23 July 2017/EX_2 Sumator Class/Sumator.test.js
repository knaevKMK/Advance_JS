const expect = require('chai').expect;
const Sumator = require('./Sumator');

describe('Sumator', function () {
    let temp;
    const arr=[1,2,3.3,'O','W'];
    beforeEach(function () {
        temp = new Sumator();
    })
    describe('constructor', function () {
        it('should type array, ', function () {
            expect(temp.data).deep.equal([]);

        });
        it('should empty arr.length', function () {
            expect(temp.data.length).equal(0);
        });
        it('should classTest', function () {
          expect( Sumator.prototype).deep.equal({}
          )
        });
    });
    describe('add(item) ', function () {
        it('should add item and increase length get value of added item ', function () {
            temp.add(2);
            expect(temp.data.length).to.equal(1);
            expect(temp.data[0]).to.equal(2)
                    });
        it('should SAME witn NaN ', function () {
            temp.add('W');
            expect(temp.data.length).to.equal(1);
            expect(temp.data[0]).to.equal('W')
        });
    });
    describe('sumNums() ', function () {
        it('should sum all nums', function () {
            arr.forEach(e=>temp.add(e));
            expect(temp.sumNums()).equal(6.3);
        });
        it('should 0 for empty arr', function () {
            expect(temp.sumNums()).equal(0);
        });
        it('should 0 for NaN items in arr', function () {
            temp.data=['a','b','c'];
            expect(temp.sumNums()).equal(0);
        });
    });
    describe('removeByFilter(filterFunc) ', function () {
        it('should remove', function () {
        arr.forEach(e=>temp.add(e));
        temp.removeByFilter(x=>isNaN(x))
        expect(temp.data).deep.equal([1,2,3.3]);
        });
    });

    describe('toString', function () {
        it('should empty', function () {
            expect(temp.toString()).equal('(empty)');
        });
        it('should non empty', function () {
            temp.data=arr;
            expect(temp.toString()).equal('1, 2, 3.3, O, W')
        });
    });
});
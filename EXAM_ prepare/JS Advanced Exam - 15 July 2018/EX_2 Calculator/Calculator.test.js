const expect = require('chai').expect;
const Calculator = require('./Calculator.js');


describe('Calculator', function () {
    let calc;
    beforeEach(function () {
        calc = new Calculator();
    })
    describe('constructor', function () {
        it('should ', function () {
            expect(calc.expenses).deep.equal([]);
            expect(Array.isArray(calc.expenses)).true;
            expect(calc.expenses.length).equal(0);
        });
    });

    describe('add(data)', function () {
        it('should add num', function () {
            calc.add(10);
            expect(calc.expenses.length).equal(1);
            expect(calc.expenses.includes(10)).true
            expect(calc.toString()).equal('10');
        });
        it('should add NaN', function () {
            calc.add('w');
            expect(calc.expenses.length).equal(1);
            expect(calc.expenses.includes('w')).true;
            expect(calc.toString()).equal('w');
        });
    });
    describe('divideNums', function () {
        it('should throw Error if nan arr', function () {
            calc.expenses = ['a', 'b'];
            expect(() => calc.divideNums()).throw(Error);
        });

        it('should divide single num nums', function () {
            calc.add(10);
            expect(calc.divideNums()).equal(10);
        });
        it('should divide nums', function () {
            calc.expenses = [9, 'w', 2, 4.5, 'a'];
            expect(calc.divideNums()).equal(1);
        });
        it('should divide nums to throw Error', function () {
            calc.expenses = [6, 0];
            expect(calc.divideNums()).equal('Cannot divide by zero');
        });
    });

    describe('toString() ', function () {
        it('should return empty arr', function () {
            expect(calc.toString()).equal('empty array');
        });
        it('should return NoN_empty arr', function () {
            calc.expenses = [6, 'w', 13, 1, 'a'];
            expect(calc.toString()).equal('6 -> w -> 13 -> 1 -> a');
        });
    });
    describe('orderBy', function () {
        it('should return empty arr', function () {
            expect(calc.orderBy()).equal('empty');
        });
        it('should return NoN_empty arr with NaN elements', function () {
            calc.expenses = [16, 'w', 3, 2, 'a',2.3];
            expect(calc.orderBy()).equal('16, 2, 2.3, 3, a, w');
        });
        it('should return NoN_empty arr with digit elements only', function () {
            calc.expenses = [6, 12,2.3, 3, 2, 11];
            expect(calc.orderBy()).equal('2, 2.3, 3, 6, 11, 12');
        });
    });
});
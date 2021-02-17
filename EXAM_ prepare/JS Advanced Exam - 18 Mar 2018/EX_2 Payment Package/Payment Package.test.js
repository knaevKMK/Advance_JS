const expect = require('chai').expect;
const PaymentPackage = require('./Payment Package')

describe('PaymnetPack', function () {
    let pp;
    let name;
    let value;
    beforeEach(function () {
        name = 'HR Services';
        value = 1500;
        pp = new PaymentPackage(name, value)
    })
    describe('  constructor(name, value)', function () {
        it('should has valid name', function () {
            expect(pp.name).equal(name);
        });
        it('should Error  empty string name', function () {
            expect(() => new PaymentPackage('', 10)).throw(Error);
        });
        it('should Error  non_string name', function () {
            expect(() => new PaymentPackage(true, 10)).throw(Error);
        });


        it('should has value', function () {
            expect(pp.value).equal(value);
        });
        it('should has 0 value', function () {
            let pp2 = new PaymentPackage("Ivan", 0);
            expect(pp2.value).equal(0);
        });
        it('should Error  negative num', function () {
            expect(() => new PaymentPackage(name, -10)).throw(Error);
        });
        it('should Error  invalid type param', function () {
            expect(() => new PaymentPackage(name, true)).throw(Error);
        });


        it('should has VAT', function () {
            expect(pp.VAT).equal(20);
        });
        it('should Error  negative num', function () {
            expect(() => pp.VAT=-10).throw(Error);
        });
        it('should Error  invalid type param', function () {
            expect(() =>pp.VAT='null').throw(Error);
        });

        it('should has active status', function () {
            expect(pp.active).true;
        });
        it('should Error  invalid type param', function () {
            expect(() =>pp.active='null').throw(Error);
        });

    });

    describe('geters', function () {
        it('should get name', function () {
             expect(pp.name)
         });
    });
    describe('toString', function () {
        it('should result', function () {

            expect(pp.toString()).equal(`Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`)
        });
        it('should result', function () {
pp.active=false;
            expect(pp.toString()).equal(`Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`)
        });
    });

});
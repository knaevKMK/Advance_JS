const expect = require('chai').expect;
const SubscriptionCard = require('./Subscription Card.js')

describe('SubscriptionCard', function () {
    let check;
    let firstName;
    let lastName;
    let ssn;
    beforeEach(function () {
        firstName = 'Pesho';
        lastName = 'Petrov';
        ssn = '00000000';
        check = new SubscriptionCard(firstName, lastName, ssn);
    })
    describe('constructor(firstName, lastName, SSN) ', function () {
        it('should get prototypes', function () {
            expect(check instanceof SubscriptionCard).true;
            expect(check._firstName).equal(firstName);
            expect(check._lastName).equal(lastName);
            expect(check._SSN).equal(ssn);
            expect(check._subscriptions).deep.equal([]);
            expect(check._subscriptions.length).equal(0);
            expect(check._blocked).false;
        });
    });

    describe('get firstName', function () {
        it('should geter', function () {
            expect(check.firstName).equal(firstName);
        });
    });
    describe('get lastName() ', function () {
        it('should geter', function () {
            expect(check.lastName).equal(lastName);
        });
    });
    describe('get SSN', function () {
        it('should geter', function () {
            expect(check.SSN).equal(ssn);
        });
    });

    describe('get isBlocked() ', function () {
        it('should geter', function () {
            expect(check.isBlocked).equal(check._blocked);
        });
    });
    describe('addSubscription(line, startDate, endDate) ', function () {
        it('should addSubscr', function () {
            let line = '120';
            let startDate = new Date('2018-04-22');
            let endDate = new Date('2018-05-21');

            check.addSubscription(line, startDate, endDate);
            expect(check._subscriptions.length).equal(1);
            expect(check._subscriptions[0]).deep.equal({line, startDate, endDate});
        });
    });
    describe('  isValid(line, date) ', function () {
        it('should  false if is NOT blocked', function () {
          //  check._blocked = false;
            expect(check.isValid('120', new Date('2018-04-22'))).false;
        });
        it('should  false if is NOT bloked', function () {
            expect(check.isValid('120', new Date('2018-04-22'))).false;
        });

        it('should  true if is bloked', function () {
            check.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            check.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
             check.block();
             check.unblock();
            expect(check.isValid('120', new Date('2018-04-22'))).true;
        });
    });
    describe('block() ', function () {
        it('should true', function () {
        check.block();
        expect(check._blocked).true;

        });
    });
    describe('unblock()', function () {
        it('should true', function () {

        check.block();
        expect(check._blocked).true;
        });
    });
});
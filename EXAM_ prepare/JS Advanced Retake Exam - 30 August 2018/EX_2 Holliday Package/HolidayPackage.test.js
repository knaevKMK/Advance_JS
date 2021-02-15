const expect = require('chai').expect;
const HolidayPackage = require('./Holliday Package.js');

describe('HolidayPackage', function () {
    let holiday;
    let season;
    let destination;
    beforeEach(function () {
        destination = 'Sofia';
        season = 'Spring';
        holiday = new HolidayPackage(destination, season);
    })
    describe('constructor', function () {
        it('should ', function () {
            expect(holiday.destination).to.be.equal(destination);
            expect(holiday.season).to.be.equal(season);
            expect(holiday.vacationers).to.eql([]);
            expect(holiday.insuranceIncluded).false;
        });
    });

    describe('showVacationers() ', function () {
        it(' without vacationers', function () {
            expect(holiday.showVacationers()).to.be.equal('No vacationers are added yet')
        });
        it(' with vacationers', function () {
            holiday.addVacationer('Ivan Ivanov');
            holiday.addVacationer('Petar Ivanova');
            expect(holiday.showVacationers()).to.equal(`Vacationers:\n${holiday.vacationers.join("\n")}`)
        });
    });

    describe('addVacationer(vacationerName', function () {
        it('should throw Error invalid input param', function () {
            expect(() => holiday.addVacationer('')).throw(Error)
            expect(() => holiday.addVacationer('Ivan')).throw(Error)
            expect(() => holiday.addVacationer(2)).throw(Error)
        });
        it('should add valid input param', function () {
            holiday.addVacationer('Ivan Ivanov');
            expect(holiday.vacationers.length).to.be.equal(1);
            expect(holiday.showVacationers()).to.equal(`Vacationers:\n${holiday.vacationers.join("\n")}`)
        });
    });
    describe('insuranceIncluded()', function () {
        it('should ', function () {
              expect(holiday.insuranceIncluded).false;
              holiday.insuranceIncluded=true;
            expect(holiday.insuranceIncluded).true;
        });
    });
    describe('set insuranceIncluded(insurance)', function () {
        it('should throw Error if set invalid param', function () {
            expect(()=>holiday.insuranceIncluded=1).throw(Error)
        });
        it('should set', function () {
            holiday.insuranceIncluded=true;
            expect(holiday.insuranceIncluded).true;
        });
    });
    describe('generateHolidayPackage() ', function () {
        it('should throw Error if empty collection', function () {
            expect(()=>holiday.generateHolidayPackage()).throw(Error);
        });
        it('should return valid param', function () {
            holiday.addVacationer('Ivan Ivanov')
            holiday.addVacationer('Petar Petrov')
            holiday.addVacationer('Todor Todorov')
            let totalPrice = holiday.vacationers.length * 400;
            if (holiday.season === "Summer" || holiday.season === "Winter") {
                totalPrice += 200;
            }

            totalPrice += holiday.insuranceIncluded === true ? 100 : 0;
            expect(holiday.generateHolidayPackage()).to.be.equal("Holiday Package Generated\n" +
                "Destination: " + holiday.destination + "\n" +
                holiday.showVacationers() + "\n" +
                "Price: " + totalPrice)
            holiday.insuranceIncluded=true;
            totalPrice += holiday.insuranceIncluded === true ? 100 : 0;
            expect(holiday.generateHolidayPackage()).to.be.equal("Holiday Package Generated\n" +
                "Destination: " + holiday.destination + "\n" +
                holiday.showVacationers() + "\n" +
                "Price: " + totalPrice)
        });
        it('should pic Season', function () {
            holiday.addVacationer('Ivan Ivanov')
            holiday.addVacationer('Petar Petrov')
            holiday.addVacationer('Todor Todorov')
            let totalPrice = holiday.vacationers.length * 400;
            holiday.season='Winter'
            if (holiday.season === "Summer" || holiday.season === "Winter") {
                totalPrice += 200;
            }

            totalPrice += holiday.insuranceIncluded === true ? 100 : 0;
            expect(holiday.generateHolidayPackage()).to.be.equal("Holiday Package Generated\n" +
                "Destination: " + holiday.destination + "\n" +
                holiday.showVacationers() + "\n" +
                "Price: " + totalPrice)
            holiday.insuranceIncluded=true;
            totalPrice += holiday.insuranceIncluded === true ? 100 : 0;
            expect(holiday.generateHolidayPackage()).to.be.equal("Holiday Package Generated\n" +
                "Destination: " + holiday.destination + "\n" +
                holiday.showVacationers() + "\n" +
                "Price: " + totalPrice)
        });
    });
});
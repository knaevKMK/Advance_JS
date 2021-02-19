class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity === this.vehicles.length) {
            throw  new Error("Not enough parking space.");
        }
        this.vehicles.push({carModel: carModel, carNumber: carNumber, payed: false})
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    _isExistCar(carNumber) {
        for (let index = 0; index < this.vehicles.length; index++) {
            if (this.vehicles[index].carNumber === carNumber) {
                return index;
            }
        }

    }

    removeCar(carNumber) {
        let index = this._isExistCar(carNumber);
        let car = this.vehicles[index];
        if (!car) {
            throw new Error("The car, you're looking for, is not found.");
        }
        if (!car.payed) {
            throw  new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot`
    }

    pay(carNumber) {
        let index = this._isExistCar(carNumber);
        let car = this.vehicles[index];
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (car.payed) {
            throw  new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        let result = [];
        if (!carNumber) {
            result.push(`The Parking Lot has ${ this.capacity-this.vehicles.length } empty spots left.`);
            this.vehicles
                .sort()
                .forEach(r=>result.push(`${r.carModel} == ${r.carNumber} - ${r.payed?'Has payed ':'Not payed'}`))
        }else {
            let index = this._isExistCar(carNumber);
            let car = this.vehicles[index];
        return `${car.carModel} == ${car.carNumber} - ${car.payed?'Has payed ':'Not payed'}`
        }
        return result.join('\n');
    }

}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicle = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error
            ('Not enough parking space.');
        }
        this.capacity--;
        this.vehicle.push({model: carModel, number: carNumber, payed: false});
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {

        let index = this.vehicle.findIndex(car => car.number === carNumber);
        if (index < 0) {
            throw  new Error
            ('The car, you\'re looking for, is not found.')
        }
        if (!this.vehicle[index].payed) {
            throw  new Error
            (`${carNumber} needs to pay before leaving the parking lot.`)
        }

        this.vehicle.splice(index, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        let index = this.vehicle.findIndex(car => car.number === carNumber);
        if (index < 0) {
            throw  new Error
            (`${carNumber} is not in the parking lot.`)
        }
        if (this.vehicle[index].payed) {
            throw  new Error
            (`${carNumber}'s driver has already payed his ticket.`)
        }
        this.vehicle[index].payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            let result = [`The Parking Lot has ${this.capacity} empty spots left.`];
            this.vehicle.sort((a, b) => a.model.localeCompare(b.model))
                .forEach(car=> result.push(`${car.model} == ${car.number} - ${car.payed ? 'Has payed' : 'Not payed'}`))

            return result.join('\n');
        }

        let index = this.vehicle.findIndex(caR => caR.number === carNumber);
        let car=this.vehicle[index];

        return `${car.model} == ${car.number} - ${car.payed ? 'Has payed' : 'Not payed'}`;
    }

}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

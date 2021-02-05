function solve(tickets, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }


    return tickets
        .map(element => {
            let [destValue, priceValue, statusValue] = element.split('|');
            // as class
            return new Ticket(destValue, priceValue, statusValue);
            //as object
            // return ({destination: destValue, price: Number(priceValue), status: statusValue});
        })
        .sort((a, b) => {
            if (criterion === 'price') {
                return a.price - b.price;
            } else {
                return a[criterion].localeCompare(b[criterion]);
            }
        });
}


console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));


//[ Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' },
//   Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' } ]

['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'


//[ Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' } ]
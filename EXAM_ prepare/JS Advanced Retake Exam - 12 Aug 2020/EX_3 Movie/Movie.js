class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.profit = 0;
        this.countTickets = 0;
        this.screenings = [];
    }

    newScreening(date, hall, description) {
        for (const screen of this.screenings) {
            if (screen.date === date && screen.hall === hall) {
                throw new Error
                (`Sorry, ${hall} hall is not available on ${date}`);
            }

        }

        this.screenings.push({date: date, hall: hall, description: description});
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        for (const screen of this.screenings) {
            if (screen.date === date && screen.hall === hall) {
                let currentProfit = this.ticketPrice * soldTickets;
                this.profit+=currentProfit;
                this.countTickets+=soldTickets;
                this.screenings.splice(this.screenings.indexOf(screen), 1);
                return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
            }
        }
        throw new Error
        (`Sorry, there is no such screening for ${this.movieName} movie.`);
    }

    toString() {
        let result = [`${this.movieName} full information:`, `Total profit: ${this.profit}$`, `Sold Tickets: ${this.countTickets}`];
        if (this.screenings.length > 0) {
            result.push(`Remaining film screenings:`);
            this.screenings
                .sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach(e => result.push(`${e.hall} - ${e.date} - ${e.description}`));
        } else {
            result.push(`No more screenings!`);
        }
        return result.join('\n').trim();
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

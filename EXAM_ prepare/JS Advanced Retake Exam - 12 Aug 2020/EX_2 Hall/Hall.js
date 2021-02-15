function solveClasses() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {
            if (this.events.includes(title)) {
                throw new Error('This event is already added!')
            }
           // if (this.capacity > this.events.length) {
                this.events.push(title);
                return `Event is added.`;
            //}
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`
        }

        toString() {
            let result = `${this.name} hall - ${this.capacity}`;
            if (this.events.length > 0) {
                result += `\nEvents: ${this.events.join(', ')}`
            }
            return result;
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
        }

        close() {
            return super.close() + 'Аll screenings are over.';
        }

        toString() {
            return super.toString() + `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity`;
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
            this.performers=[];
        }

        hallEvent(title, performers) {

          performers.forEach(per=>this.performers.push(per));
          return super.hallEvent(title);

        }

        close() {
this.performers=[];
            return super.close()+`Аll performances are over.`;
        }

        toString() {
            let result = `${this.name} hall - ${this.capacity}`;
            if (this.events.length > 0) {
                result += `\nEvents: ${this.events.join(', ')}`
                result+=`\nPerformers: ${this.performers.join(', ')}.`
            }
            return result;
        }
    }

    return {Hall, MovieTheater, ConcertHall};
}

let classes = solveClasses();
let concert = new classes.ConcertHall(5000, 'Diamond');
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());


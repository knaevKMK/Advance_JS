class LineManager {
    constructor(array) {
        this.stop = 0;
        this.duration = 0;
        this.stops = [];
        array.forEach(stop => {
            if (typeof (stop.name) !== 'string' || typeof (stop.timeToNext) !== 'number'
                || stop.timeToNext < 0 || stop.name === '') {

                throw new Error('Invalid param')
            } else {
                this.stops.push(stop)
            }
        })
    }

    get atDepot() {
        return this.stops.length - 1 === this.stop;
    }

    get nextStopName() {
        if (this.stop + 1 === this.stops.length) {
            return `At depot.`;
        }
        return this.stops[this.stop + 1].name;
    }

    get currentDelay() {
        let result = 0;
        for (let i = 0; i < this.stop; i++) {
            result += this.stops[i].timeToNext;
        }

        return (this.duration-result);
    }

    arriveAtStop(minutes) {
        if (minutes < 0 || this.atDepot) {
            throw  new Error();
        }
        this.stop++;
        this.duration += minutes;
        return this.stops.length - 1 < this.stop;
    }

    toString() {

         let result = [];
        // this.stops.forEach(stop => {
             result.push('Line summary');
             result.push(this.stop+1!==this.stops.length?`- Next stop: ${this.stops[this.stop+1].name}`:'- Course completed');
             result.push(`- Stops covered: ${this.stop}`);
             result.push(`- Time on course: ${this.duration} minutes`);
             result.push(`- Delay: ${this.currentDelay} minutes`);
        // })

         return result.join('\n');

    }

}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());




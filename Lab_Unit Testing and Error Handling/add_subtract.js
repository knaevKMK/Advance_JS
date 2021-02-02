function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

module.exports = createCalculator;
createCalculator().add(5);
createCalculator().add(5);
createCalculator().add(5);
createCalculator().add(5);
createCalculator().add(5);

console.log(createCalculator().get())
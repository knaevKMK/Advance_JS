function solve(fruit, weightGrams, pricePerKg) {
    weightGrams/=1000;
    let order= pricePerKg*weightGrams;
    console.log(`I need $${order.toFixed(2)} to buy ${weightGrams.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80);
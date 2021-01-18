function solve(cityArray) {
    const cities = {};
    for (const city of cityArray) {
        let [town, population] = city.split(' <-> ');
        population = Number(population);
        if (cities[town] != undefined) {
            population += cities[town];
        }
        cities[town] = population;
    }
    let result ='';
    for (const town in cities) {
        result+=`${town} : ${cities[town]} \n`;
    }
    return result.trim();
}

console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
));
console.log(solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
));
function solve(car) {
        if (90 >= car.power) {
            car.engine = { power: 90, volume: 1800 };
        } else if (120 >= car.power) {
            car.engine = { power: 120, volume: 2400 };
        } else if (200 >= car.power) {
            car.engine = { power: 200, volume: 3500 };
        }
        delete car.power;
   
        switch (car.carriage) {
            case 'coupe': car.carriage = { type: 'coupe', color: 'white' };
                break;
            case 'hatchback': car.carriage = { type: 'hatchback', color: 'white' }; break;
        }
        car.carriage.color = car.color;
        delete car.color;
  
        let wheelsize = car.wheelsize % 2 != 0 ? car.wheelsize : car.wheelsize - 1;
        let wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
        car.wheels = wheels;
        delete car.wheelsize;
 
    return car;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));
function roadRadar(speed, typeDriving) {
    let limitSpeed = 0;
    switch (typeDriving) {
        case 'motorway':
            limitSpeed = 130;
            break;
        case 'interstate':
            limitSpeed = 90;
            break;
        case 'city':
            limitSpeed = 50;
            break;
        case 'residential':
            limitSpeed = 20;
            break;
    }
    if (speed <= limitSpeed) {
        console.log(`Driving ${speed} km/h in a ${limitSpeed} zone`);
    } else {
        let overSpeed = speed - limitSpeed;
        let status = 'reckless driving ';
        if (overSpeed <= 20) {
            status = 'speeding';
        } else if (overSpeed <= 40) {
            status = 'excessive speeding';
        }
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limitSpeed} - ${status}`);
    }
}


roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
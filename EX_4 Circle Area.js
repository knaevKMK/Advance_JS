function solve(arg) {
    let type = typeof (arg);
    switch (type) {
        case "number":
            console.log((Math.pow(arg,2)* Math.PI).toFixed(2));
            return;
        default:
            console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

solve(5);
solve("name");
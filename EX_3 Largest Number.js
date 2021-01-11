function solve(x,y,z) {
    let max= Math.max(x,y);
    let result= Math.max(max,z);
    console.log(`The largest number is ${result}.`);
}
solve(5, -3, 16);
solve(-3, -5, -22.5);
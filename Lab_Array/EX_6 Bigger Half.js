function solve(array) {
    return array.sort((a,b)=>a-b).slice(-1* Math.round(array.length/2));
}

console.log(solve([4, 7, 2, 5]));
console.log((solve([3, 19, 14, 7, 2, 19, 6])));
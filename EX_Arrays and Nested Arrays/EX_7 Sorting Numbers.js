function solve(array) {
    array.sort((a, b) => a - b);
    let biggeest = array.splice(-array.length / 2);
    biggeest.sort((a, b) => b - a);
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
        result.push(biggeest[i]);
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
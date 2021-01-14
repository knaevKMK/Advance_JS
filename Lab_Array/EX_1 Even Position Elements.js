function solve(array) {

    let result = '';
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            result = result.concat(array[i], ' ');
        }
    }
    return result.trim();
}

console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));
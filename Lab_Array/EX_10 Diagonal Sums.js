function solve(matrix) {
    let diag1 = 0;
    let diag2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        diag1 += matrix[i][i];
        diag2 += matrix[matrix.length - 1 - i][i];
    }
    return diag1 + ' ' + diag2;
}

console.log(solve([
    [20, 40],
    [10, 60]]
));
console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
))
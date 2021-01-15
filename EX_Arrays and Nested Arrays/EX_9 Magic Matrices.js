function solve(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        let curentRow = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            curentRow += matrix[i][j];
        }
        if (i == 0) {
            sum = curentRow;
        }
        if (curentRow != sum) {
            return false;
        }
    }


    for (let col = 0; col < matrix[0].length; col++) {
        let curentColl = 0;
        for (let row = 0; row < matrix.length; row++) {
            curentColl += matrix[row][col];
        }
        if (curentColl != sum) {
            return false;
        }
    }
    return true;
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));
function solve(matrix) {
    let max=matrix[0][0];
    for (const array of matrix) {
        for (const num of array) {
            if (max<num){
                max=num;
            }
        }
    }
    return max;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
));
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));
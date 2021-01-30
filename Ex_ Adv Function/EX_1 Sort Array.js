function solve(array, vector) {
    return array.sort((a, b) => {
        switch (vector) {
            case 'asc':
                return a - b;
            case 'desc':
                return b - a;
        }
    });


}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));
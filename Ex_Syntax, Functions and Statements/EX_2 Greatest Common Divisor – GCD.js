function solve(x, y) {
    let divisor = 1;
    let end = Math.max(x, y);

    for (let i = 1; i <= end; i++) {
        if (x % i == 0 && y % i == 0) {
            divisor = i;
        }
    }
    console.log(divisor);
}
solve(15,5);
solve(2154, 458);
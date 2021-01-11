function solve(num) {
    let equal = true;
    num = num.toString();
    let sum = Number(num[0]);
    for (let i = 1; i < num.length; i++) {
        if (num[i] !== num[i - 1]) {
            equal = false;
        }
        sum += Number(num[i]);
    }
    console.log(equal);
    console.log(sum);
}

solve(2222222);
solve(1234);
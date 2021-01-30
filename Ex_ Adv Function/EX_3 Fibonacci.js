function getFibonator(n) {
    var fibonachi = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
    // let num1 = 0;
    // let num2 = 1;
    return function fib() {
        // let result = num1 + num2;
        // num1 = result;
        // num2 = num1;
        return fibonachi.shift();
    }
}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
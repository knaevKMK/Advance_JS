function add(num) {
    let sum = 0;
    sum += num;


    function calc(x) {
        sum += x

        return calc;
    }
    calc.toString = () => sum;
    return calc;
}


console.log(add(1));
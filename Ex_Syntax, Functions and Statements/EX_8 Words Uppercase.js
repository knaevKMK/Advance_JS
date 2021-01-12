function solve(input) {
    return  input.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(', ');

}
console.log(solve('Hi, how are you?'));
//solve('hello');
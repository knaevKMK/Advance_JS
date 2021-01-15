function solve(array) {
    let i = 0;
    let result = '';
    array
        .sort((a, b) => a.localeCompare(b))
        .forEach(el => result+=`${++i}.${el}\n`);
    return result;
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
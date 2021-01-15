function solve(array, divisible) {
    return  array.join(divisible);
}

console.log(solve(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
));

console.log(solve(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_'
));
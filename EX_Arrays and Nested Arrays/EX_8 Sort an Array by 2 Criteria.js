function solve(array) {
    return array.sort((a, b) => {
        return a.length > b.length || a.length<b.length ? a.length - b.length : a.localeCompare(b);
    })
        .join('\n');
}

console.log(solve(['alpha',
    'beta',
    'gamma']
));
console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));
console.log(solve(['test',
    'Deny',
    'omen',
    'Default']
));
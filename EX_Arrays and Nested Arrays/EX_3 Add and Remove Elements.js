function solve(commands) {
    let result = [];
    let i = 0;
    for (const command of commands) {
        i++;
        switch (command) {
            case 'add':
                result.push(i);
                break;
            case 'remove':
                result.pop();
                break;
        }
    }
    return result.length == 0 ? 'Empty' : result.join('\n');
}
console.log(solve(['add',
    'add',
    'add',
    'add']
));
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));
console.log(solve(['remove',
    'remove',
    'remove']
));
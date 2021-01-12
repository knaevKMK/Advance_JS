function solve(a, b, c, d, e, f) {
    let result = Number(a);
    let commands = [b, c, d, e, f];
    for (const command of commands) {
        switch (command) {
            case 'chop':
                result /= 2;
                break;
            case 'dice':
                result = Math.sqrt(result, 2);
                break;
            case 'spice':
                result += 1;
                break;
            case 'bake':
                result *= 3;
                break;
            case 'fillet':
                result = (result*80)/100;
                break;
        }
        console.log(result)
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
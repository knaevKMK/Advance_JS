function solve(arr) {
    let result = [];
    for (const line of arr) {

        let [name, level, items] = line.split(' / ')
        level = Number(level);
        items = items? items.split(', '):[];
        let hero = {    
            name,
            level,
            items
        };
        result.push(hero);
    }
    return JSON.stringify(result);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));
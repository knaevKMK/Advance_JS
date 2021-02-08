function solve(param) {
    let cars = new Map;
    for (let line of param) {
        let [mark, model, pcs] = line.split(' | ');
        if (!cars.has(mark)) {
            cars.set(mark, {});
        }
        if (!Object.keys(cars.get(mark)).includes(model)){
            cars.get(mark)[model]= 0;
        }
        cars.get(mark)[model]+= Number(pcs);
    }

    function toString() {
        let result = [];
        cars.forEach((value, key) => {
            result.push(key);
                for (const valueKey in value) {
                    result.push(`###${valueKey} -> ${value[valueKey]}`)
                }
        });
        return result.join('\n');
    }
    return toString();
}
console.log(solve(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200']))

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));
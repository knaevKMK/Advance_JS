function solve(arr) {
    let list = new Map();
    for (const str of arr) {
        let [product, price] = str.split(' : ');
        price = Number(price);
        let letter = str[0];
        if (!list.has(letter)) {
            list.set(letter, new Array);
        }
        list.get(letter).push({ product, price });
    }


    list = new Map([...list.entries()].sort());
  
    list
        .forEach((values,key)=>{
            console.log(key);
            values
            .sort((a,b)=>a.product.localeCompare(b.product))
            .forEach(prod=>  console.log(`\t${prod.product}: ${prod.price}`));
        });
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
// console.log(solve(['Banana : 2',
//     'Rubic\'s Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']
// ));
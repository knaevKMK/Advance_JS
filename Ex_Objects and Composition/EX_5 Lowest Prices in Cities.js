function solve(arr) {


    let result = [];
    for (const line of arr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        let exist = false;
        for (const pr of result) {

            if (pr.product == product) {
                exist = true;
                if (town == pr.town) {
                    pr.price = price;
                } else if (price < pr.price) {
                    pr.price = price;
                    pr.town = town;
                }
                break;
            }
        }

        if (!exist) {
            result.push({ town, product, price });
        }
    }
   result.forEach( mem=>
        console.log(`${mem.product} -> ${mem.price} (${mem.town})`));
    

}


console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));
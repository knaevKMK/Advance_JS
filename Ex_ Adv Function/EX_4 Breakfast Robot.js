function solution() {

    const prList = new Map;
    prList.set('apple', { carbohydrate: 1, flavour: 2 });
    prList.set('lemonade', { carbohydrate: 10, flavour: 20 });
    prList.set('burger', { carbohydrate: 5, fat: 7, flavour: 3 });
    prList.set('eggs', { protein: 5, fat: 1, flavour: 1 });
    prList.set('turkey', { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 });

    let depot = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    return function manager(input) {

        let [operation, product, value] = input.split(' ');
        switch (operation) {
            case 'restock':
                restock(product, Number(value));
                return ('Success');

            case 'prepare':
                return prepare(product, Number(value));

            default:
                return (`protein=${depot.protein} carbohydrate=${depot.carbohydrate} fat=${depot.fat} flavour=${depot.flavour}`);


        }
    }

    function prepare(product, quantity) {

        const want = Object.keys(prList.get(product));
        for (const element of want) {
            // console.log(element);
            // console.log(depot[element]);
            // console.log(prList.get(product)[element]);
            let result = depot[element] - quantity * prList.get(product)[element];
            if (result < 0) {
                return (`Error: not enough ${element} in stock`);
            }
            depot[element] = result;
        }
        return ('Success');

    }

    function restock(element, value) {
        depot[element] += value;
    }

}


let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

//in1
// manager('restock carbohydrate 10');
// manager('restock flavour 10');
// manager('prepare apple 1');
// manager('restock fat 10');
// manager('prepare burger 1');
// manager('report');

//in2
// manager('prepare turkey 1');
// manager('restock protein 10');
// manager('prepare turkey 1');
// manager('restock carbohydrate 10');
// manager('prepare turkey 1');
// manager('restock fat 10');
// manager('prepare turkey 1');
// manager('restock flavour 10');
// manager('prepare turkey 1');
// manager('report');
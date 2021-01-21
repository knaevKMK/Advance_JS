function solve(arr){
   

let result=[];
 for (const line of arr) {
     let [town, product, price]= line.split(' | ');
     price=Number(price);
     
     result.push({town, product, price});
 }
while (result.length) {
    let mem=result.shift();
    console.log(`${mem.product} -> ${mem.price} (${mem.town})`);
}

}


console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));
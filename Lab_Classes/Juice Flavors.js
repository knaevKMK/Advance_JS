function solve(param){
    let list = {};
    let result= {};
    for (let row of param) {

        let [fruit, value]= row.split(' => ');
        if(!Object.keys(list).includes(fruit)){
            list[fruit]=0;
        }
        list[fruit]+=Number(value);

        if(list[fruit]>=1000){
            if (!Object.keys(result).includes(fruit)){
                result[fruit]=0;
            }
            result[fruit]=result[fruit]+Math.floor(list[fruit]/1000);
            list[fruit]%=1000;
        }
    }
   function toString(){
        let res= [];
        for (const key in result) {
            res.push(`${key} => ${result[key]}`);
        }
        return res.join('\n');
    }
    return toString();
}


console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']));


console.log(solve( ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
)
;

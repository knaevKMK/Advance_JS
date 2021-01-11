function solve(array) {
    let sumElement= 0;
    let sumDrob= 0;
    let strngRow='';
    for (let arrayElement of array) {
        sumElement+=arrayElement;
        sumDrob+=(1/arrayElement);
        strngRow= strngRow.concat(arrayElement);
    }
    console.log(sumElement);
    console.log(sumDrob);
    console.log(strngRow);
}
solve([1,2,3]);
solve([2,4,8,16]);
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


function sum(arr){

    let sum = 0;
    let secondSum = 0;
    let thirdSum = '';

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        secondSum += 1/arr[index];
        thirdSum += arr[index];
    }
    console.log(sum);
    console.log(secondSum);
    console.log(thirdSum);
}

sum([1,2,3]);
sum([2,4,8,16]);
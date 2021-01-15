function solve(array) {
    array=array.map(parseFloat);
   // return array[0]+array[array.length-1];
    return array.shift()+array.pop();
}
console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));
console.log(solve(['12']));
function solve(array) {
    let result = [];
    for (let index = 1; index < array.length; index++) {
        let [Town, Latitude, Longitude] = array[index].split('|').slice(1, -1);
        Town=Town.trim();
        Latitude= Number(parseFloat(Latitude.trim()).toFixed(2));
        Longitude=Number(parseFloat (Longitude.trim()).toFixed(2));
        result.push({ Town, Latitude, Longitude });
    }

 // console.log(JSON.stringify(result));
  return JSON.stringify(result);
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
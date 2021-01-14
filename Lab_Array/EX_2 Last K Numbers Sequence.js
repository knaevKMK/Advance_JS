function solve(x, y) {
    let result = [];
    result [0] = 1;
    for (let i = 1; i < x; i++) {
        let current= 0;
        for (let j = 1; j <y ; j++) {
            if (i-j<0){
                break;
            }
           current+= result[i-j];
        }
        result[i]=current;
    }
    return result.join(', ')
}
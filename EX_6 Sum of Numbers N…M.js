function solve(x, y) {
   let a=  Number(x);
   let b=Number(y);
    let result=0;
    for (let i=a; i<=b;i++){
        result+=i;
    }
    console.log(result);
}
solve('1','5');
solve('-8','20');
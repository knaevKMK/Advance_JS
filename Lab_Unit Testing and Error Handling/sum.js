function sum(... param) {

    if (!Array.isArray(param[0])){
        return  NaN;
    }
    if (param[1]<0){
        param[1]=0;
    }
    return param[0].slice(param[1],param[2]+1).reduce((x,y)=>x+y,0);
}

module.exports = sum;
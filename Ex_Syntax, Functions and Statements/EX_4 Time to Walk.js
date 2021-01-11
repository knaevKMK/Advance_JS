function solve(step, meeters, speed) {
    let totalLnegth = step * meeters;
    let breakTime = Math.floor(totalLnegth / 500);
    breakTime /= 60;
    totalLnegth /= 1000;
    let time = totalLnegth / speed;
    time += breakTime;
    let hours = Math.floor(time);
    time -= hours;
    time *= 60;
    let min = Math.floor(time);
    time -= min;
    let sec = time * 60;
    time = time;
    let result = `${hours <= 9 ? '0' + hours : hours}:${min <= 9 ? '0' + min : min}:${sec <= 9 ? '0' + sec : sec.toFixed(0)}`;
    console.log(result);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);
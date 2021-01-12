function solve(step, meeters, speed) {
    let totalLnegth = step * meeters;
    let breakTime = Math.floor(totalLnegth / 500);
    breakTime /= 60;
    totalLnegth /= 1000;

    let time = totalLnegth / speed;
    time += breakTime;

    const hours = Math.floor(time).toFixed(0).padStart(2, '0');

    time -= hours;
    time *= 60;
    let min = Math.floor(time).toFixed(0).padStart(2, '0');
    time -= min;

    let sec = (time * 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${min}:${sec}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);
function attachEventsListeners() {
    let inDay = document.getElementById('days');
    let inHour = document.getElementById('hours');
    let inMin = document.getElementById('minutes');
    let inSec = document.getElementById('seconds');

    const btnDay = document.getElementById('daysBtn');
    const btnHours = document.getElementById('hoursBtn');
    const btnMin = document.getElementById('minutesBtn');
    const btnSec = document.getElementById('secondsBtn');

    btnDay.addEventListener('click', function() {
        let value = Number(inDay.value);
        inHour.value = value * 24;
        inMin.value = value * 24 * 60;
        inSec.value = value * 24 * 60 * 60;
    });
    btnHours.addEventListener('click', function() {
        let value = Number(inHour.value);
        inDay.value = value / 24;
        inMin.value = value * 60;
        inSec.value = value * 60 * 60;
    });
    btnMin.addEventListener('click', function() {
        let value = Number(inMin.value);
        inDay.value = value / 60 / 24;
        inHour.value = value / 60;
        inSec.value = value * 60;
    });
    btnSec.addEventListener('click', function() {
        let value = Number(inSec.value);
        inDay.value = value / 24 / 60 / 60;
        inHour.value = value / 60 / 60;
        inMin.value = value / 60;
    });
}
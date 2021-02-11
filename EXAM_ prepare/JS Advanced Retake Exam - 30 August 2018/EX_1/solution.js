function addDestination() {

    let [city, country, summer, autumn, winter, spring] = (document.querySelectorAll('input'));
    let season = document.getElementById('seasons').selectedOptions[0].value;
    if (city.value === '' || country.value === '') {
        //   return;
    }
    let cellDestination = document.createElement('td');
    cellDestination.textContent = `${city.value}, ${country.value}`
    let cellSeaseon = document.createElement('td');
    cellSeaseon.textContent = season;

    console.log(season)
    let row = document.createElement('tr');
    row.appendChild(cellDestination);
    row.appendChild(cellSeaseon);

    switch (season) {
        case 'summer':
            summer.value = Number(summer.value) + 1;
            break;
        case 'autumn':
            autumn.value = Number(autumn.value) + 1;
            break;
        case 'winter':
            winter.value = Number(winter.value) + 1;
            break;
        case 'spring':
            spring.value = Number(spring.value) + 1;
            break;

    }
    document.getElementById('destinationsList').appendChild(row)
    city.value = '';
    country.value = '';
    document.getElementById('seasons').selectedIndex = 0
}
function addDestination() {

    let [city, country, summer, autumn, winter, spring] = (document.querySelectorAll('input'));
    let season;
    let options = document.getElementById('seasons');
    Array.from(options.children).forEach(option => {
        if (option.selected) { season = option; }
    });;
    if (city.value === '' || country.value === '') {
        return;
    }
    let cellDestination = document.createElement('td');
    cellDestination.textContent = `${city.value}, ${country.value}`
    let cellSeaseon = document.createElement('td');
    cellSeaseon.textContent = season.textContent;


    let row = document.createElement('tr');
    row.appendChild(cellDestination);
    row.appendChild(cellSeaseon);

    switch (season.textContent) {
        case 'Summer':
            summer.value = Number(summer.value) + 1;
            break;
        case 'Autumn':
            autumn.value = Number(autumn.value) + 1;
            break;
        case 'Winter':
            winter.value = Number(winter.value) + 1;
            break;
        case 'Spring':
            spring.value = Number(spring.value) + 1;
            break;

    }
    document.getElementById('destinationsList').appendChild(row)
    city.value = '';
    country.value = '';
    // document.getElementById('seasons').selectedIndex = 0
}
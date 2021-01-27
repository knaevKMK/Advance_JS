function solve() {
    console.log('Create it')
    for (let index = 0; index < 3; index++) {
        let row = document.createElement('td')

        for (let index = 0; index < 5; index++) {
            row.appendChild(document.createElement('tr'));
        }
        console.log(document.getElementsByTagName('tbody'));
        document.getElementsByTagName('tbody').appendChild(row);
    }
}
function solve() {
    let [from, to] = document.querySelectorAll('select');

    let option = document.createElement('option');
    option.textContent = 'Binary';
    option.value = 'binary'
    to.appendChild(option);

    let option1 = document.createElement('option');
    option1.textContent = 'Hexadecimal';
    option1.value = 'hexadecimal'
    to.appendChild(option1)


    // const selectMap = {
    //     'binary': (temp) => { return parseInt(temp, 10).toString(2) },
    //     'hexadecimal': (temp) => { return parseInt(temp, 10).toString(16).toUpperCase() }
    // }
    let [input, result] = document.querySelectorAll('input');

    let btnConver = document.querySelector('button');
    btnConver.addEventListener('click', e => {
        let temp = Number(input.value);


        switch (to.value) {
            case 'binary':
                result.value = parseInt(temp, 10).toString(2);
                break;
            case 'hexadecimal':
                result.value = parseInt(temp, 10).toString(16).toUpperCase();
                break;
        }
        //    result.value = selectMap[to.value](temp);

    })

}
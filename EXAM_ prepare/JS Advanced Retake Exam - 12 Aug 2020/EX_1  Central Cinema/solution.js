function solve() {
    let [name, hall, ticketPrice, btnOnScr] = Array.from(document.querySelector('#container').children);
    let mScreen = document.getElementById('movies').children[1];
    let archive = document.getElementById('archive').children[1];
    let btnClear = document.getElementById('archive').children[2];

    btnClear.addEventListener('click', (e) => {
        Array.from(archive.children).forEach(li => {
            li.remove();
        });
    })

    function createTag(type, text) {
        let temp = document.createElement(type);
        temp.textContent = text;
        return temp;
    }

    btnOnScr.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value === '' || hall.value === '' || isNaN(Number(ticketPrice.value)) || ticketPrice.value === '') {
            //  console.log('Invalid input field')
            return;
        }

        let li = createTag('li', '');
        mScreen.appendChild(li);

        let span = createTag('span', name.value);
        li.appendChild(span);

        let strong = createTag('strong', 'Hall: ' + hall.value);
        li.appendChild(strong);

        let div = createTag('div', '');
        li.appendChild(div);

        let strongDiv = createTag('strong', `${Number(ticketPrice.value).toFixed(2)}`);
        div.appendChild(strongDiv);

        let inputDiv = createTag('input', '');
        inputDiv.placeholder = "Tickets Sold";
        div.appendChild(inputDiv);

        let btnArh = createTag('button', 'Archive');

        btnArh.addEventListener('click', (e) => {

            if (isNaN(Number(inputDiv.value)) || inputDiv.value === '') {
                //  console.log('Error: type of ticket count')
                return;
            }

            li.remove();
            strong.textContent = `Total amount: ${(Number(inputDiv.value) * Number(strongDiv.textContent)).toFixed(2)}`;
            div.remove();
            let btnDel = createTag('button', 'Delete');
            btnDel.addEventListener('click', (e) => {
                li.remove();
            })
            li.appendChild(btnDel);
            archive.appendChild(li);
        })

        div.appendChild(btnArh);
        name.value = '';
        hall.value = '';
        ticketPrice.value = '';
    })

}
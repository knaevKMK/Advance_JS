function solve() {
    let toAdd = document.querySelector('tbody');

    const [btnGenerate, btnBuy] = document.querySelectorAll('button');
    const [input, output] = document.querySelectorAll('textarea');

    btnGenerate.addEventListener('click', () => {
        let parsIn = JSON.parse(input.value.trim());
        parsIn.forEach(element => {

            let row = createHtmlTag('tr');

            // Object.keys(element).forEach(a => {
            //     let td = createHtmlTag('td');
            //     let inside;
            //     switch (a) {
            //         case 'img':
            //             inside = createHtmlTag('img');
            //             inside.setAttribute('src', element.img);
            //             break;
            //         default:
            //             inside = createHtmlTag('p');
            //             inside.textContent = element[a];
            //             break;
            //     }
            //     td.appendChild(inside);
            //     row.appendChild(td);
            // });
            // //img
            let pic = createHtmlTag('img');
            pic.setAttribute('src', element.img);
            let firstCell = createHtmlTag('td');
            firstCell.appendChild(pic);
            //name
            let p1 = createHtmlTag('p');
            p1.textContent = element.name;
            let secCell = createHtmlTag('td');
            secCell.appendChild(p1);
            //price
            let p2 = createHtmlTag('p');
            p2.textContent = element.price;
            let thirthCell = createHtmlTag('td');
            thirthCell.appendChild(p2);
            //decor

            let p3 = createHtmlTag('p');
            p3.textContent = element.decFactor;
            let fourthCell = createHtmlTag('td');
            fourthCell.appendChild(p3);
            //check
            let checBox = createHtmlTag('input');
            checBox.setAttribute('type', 'checkbox');
            let lastCell = createHtmlTag('td');
            lastCell.appendChild(checBox);

            row.appendChild(firstCell);
            row.appendChild(secCell);
            row.appendChild(thirthCell);
            row.appendChild(fourthCell);
            row.appendChild(lastCell);

            toAdd.appendChild(row)
        });
    });

    function createHtmlTag(tag) {
        return document.createElement(tag);
    }

    btnBuy.addEventListener('click', function() {
        let resultItemName = [];
        let totalPrice = 0.0;
        let avDecor = [];

        [...document.querySelectorAll('tr')]
        .filter(item => item.querySelector('[type="checkbox"]'))
            .forEach(item => {
                if (item.querySelector('[type="checkbox"]').checked) {
                    let [name, price, decor] = item.querySelectorAll('p');
                    resultItemName.push(name.textContent);
                    totalPrice += Number(price.textContent);
                    avDecor.push(Number(decor.textContent));
                }
            });
        let result = `Bought furniture: ${resultItemName.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${avDecor.reduce((x, y) => x + y, 0) / avDecor.length}`;
        output.value = result;
    })
}
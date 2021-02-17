class PaymentManager {

    constructor(title) {
            this.title = title;
        }
        // _log(targetDiv) {
        //     return targetDiv.innerHTML;
        // }
    _createTag(type, text, className) {
        let temp = document.createElement(type);
        if (text) {
            temp.textContent = text;
        }
        if (className) {
            temp.className = className;
        }
        return temp;
    }
    _creteFootTd(name, type) {
        let td = this._createTag('td');
        let input = this._createTag('input');
        input.name = name;
        input.type = type;
        td.appendChild(input);
        return td;
    }

    render(target) {
        let result = document.getElementById(target);

        let table = this._createTag('table');
        result.appendChild(table);

        let title = this._createTag('caption', `${this.title} Payment Manager`);
        table.appendChild(title);

        let head = this._createTag('thead')
        table.appendChild(head);

        //head elements...
        let trH = this._createTag('tr');

        trH.appendChild(this._createTag('th', 'Name', 'name'));
        trH.appendChild(this._createTag('th', 'Category', 'category'));
        trH.appendChild(this._createTag('th', "Price", 'price'));
        trH.appendChild(this._createTag('th', 'Actions'));

        head.appendChild(trH);

        //tbody+ elements
        let tbody = this._createTag('tbody', '', 'payments');
        table.appendChild(tbody);

        //foot + elements
        let tfoot = this._createTag('tfoot', '', 'input-data');
        table.appendChild(tfoot);

        let trF = this._createTag('tr');
        tfoot.appendChild(trF);

        trF.appendChild(this._creteFootTd('name', 'text'));
        trF.appendChild(this._creteFootTd('category', 'text'));
        trF.appendChild(this._creteFootTd('price', 'number'));

        let btnAdd = this._createTag('button');
        btnAdd.textContent = 'Add';
        let lastTd = this._createTag('td');
        lastTd.appendChild(btnAdd);
        btnAdd.addEventListener('click', (e) => {
            let [name, cat, price] = tfoot.querySelectorAll('input');
            if (name.value !== '' && cat.value !== '' && price.value !== '' && typeof(Number(price.value)) === 'number') {

                let trB = this._createTag('tr');
                tbody.appendChild(trB);
                trB.appendChild(this._createTag('td', name.value));
                trB.appendChild(this._createTag('td', cat.value));
                trB.appendChild(this._createTag('td', `${Number(price.value)}`));
                let btnDel = this._createTag('button', 'Delete');

                btnDel.addEventListener('click', (e) => {
                    trB.remove();
                })
                trB.appendChild(this._createTag('tr').appendChild(btnDel))
                name.value = '';
                cat.value = '';
                price.value = '';
            }

        })
        trF.appendChild(lastTd);


        // console.log(this._log(result))
    }


}
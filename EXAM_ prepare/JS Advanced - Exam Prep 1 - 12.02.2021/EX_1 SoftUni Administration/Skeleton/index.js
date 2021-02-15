function solve() {
    // sections
    let [trainings, admin] = document.querySelectorAll('section');

    //get input fieldds + select-options = button
    let [name, date] = admin.querySelectorAll('input');
    let moduleSelect = admin.querySelector('select');
    let btnAdd = admin.querySelector('button');

    // div`s to insert result
    let modules = trainings.querySelector('.modules');


    btnAdd.addEventListener('click', e => {
        e.preventDefault();

        let chooseModule;
        Array.from(moduleSelect.children).forEach(option => {
            if (option.selected) { chooseModule = option.textContent.toUpperCase(); }
        });;


        if (chooseModule == 'SELECT MODULE...' || name.value == '' || date.value == '') { return; }
        let div;
        let ul;

        for (let _div of Array.from(modules.children)) {
            let divChildren = Array.from(_div.children);

            if (divChildren[0].textContent === chooseModule + '-MODULE') {
                div = _div;
                ul = divChildren[1];
                break;
            }
        }

        if (div == undefined) {
            div = document.createElement('div');
            div.className = 'module';

            let h3 = document.createElement('h3');
            h3.textContent = chooseModule + '-MODULE';
            div.appendChild(h3);

            ul = document.createElement('ul');
            div.appendChild(ul);

            modules.appendChild(div)

        }
        // create li with (h4 and button Delete), append to ul
        let li = document.createElement('li');
        li.className = 'flex';

        let h4 = document.createElement('h4');
        h4.textContent = name.value + ' - ' + date.value.replace(/-/g, '/').replace('T', ' - ');
        li.appendChild(h4);

        let btnDel = document.createElement('button');
        btnDel.className = 'red';
        btnDel.textContent = 'Del';
        // TODO add evetnLisenre
        btnDel.addEventListener('click', e => {
            li.remove();
            if (ul.innerHTML === '') {
                div.remove();
            }
        })

        li.appendChild(btnDel);

        let liList = Array.from(ul.children)
        liList.push(li);

        ul.innerHTML = '';
        liList.sort((a, b) => {
                let second = b.children[0].textContent;
                second = second.substring(second.indexOf('-'))
                let first = a.children[0].textContent;
                first = first.substring(first.indexOf('-'))
                return first.localeCompare(second)

            })
            .forEach(li => ul.appendChild(li))


        name.value = '';
        date.value = '';
        moduleSelect.selectedIndex = 0

    })
}
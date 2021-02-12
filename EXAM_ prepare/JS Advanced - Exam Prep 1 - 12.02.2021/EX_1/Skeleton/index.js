function solve() {
    // sections
    let [trainings, admin] = document.querySelectorAll('section');

    //get input fieldds + select-options = button
    let [name, date] = admin.querySelectorAll('input');
    let moduleSelect = admin.querySelector('select');
    let btnAdd = admin.querySelector('button');


    //temp data work with map dof div module and array for li
    let modules = trainings.querySelector('.modules');



    btnAdd.addEventListener('click', e => {
        e.preventDefault();
        const chooseModule = moduleSelect.selectedOptions[0].textContent.toUpperCase();


        if (chooseModule == 'SELECT MODULE...' || name.value == '' || date.value == '') { return; }
        let div;
        let ul;

        for (let _div of modules.children) {

            if (_div.childNodes[0].textContent.replace('-MODULE', '') === chooseModule) {
                div = _div;
                ul = _div.childNodes[1];
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
        h4.textContent = name.value.toUpperCase() + '-' + date.value.replace('T', ' - ').replace(/-/g, '/');
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

        ul.appendChild(li);


        name.value = '';
        date.value = '';
        moduleSelect.selectedIndex = 0


        // test from judge ( work in event {}, but not work out of event in the function solve?????)
        let elements = {
            form: document.getElementsByTagName('form')[0],
            name: document.querySelector('input[name="lecture-name"]'),
            date: document.querySelector('input[name="lecture-date"]'),
            module: document.querySelector('select[name="lecture-module"]'),
            addBtn: document.querySelector('form button'),
            modulesDiv: document.querySelector('.modules'),
            moduleList: () => Array.from(document.querySelectorAll('.module')),
            listItems: () => Array.from(document.querySelectorAll('.flex')),
        }
        console.log(elements.moduleList().length)
        console.log(elements.moduleList()[0].children[0].textContent)
        console.log(elements.listItems()[0].children[0].textContent)
        console.log(elements.listItems()[0].children[1].className)
    })
}
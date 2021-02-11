function solve() {
    // sections
    let [trainigs, admin] = document.querySelectorAll('section');
    // input fields NAME & DATE
    let [lecture, date] = admin.querySelectorAll('input')
        // moduels Select OPTIONS
    let module = admin.querySelector('select');
    // // button add
    // const modules = {};
    // Array.from(module.children).forEach(modul => modules[modul.textContent.toUpperCase()] = []);

    // console.log(modules)
    let btnAdd = admin.querySelector('button');
    //

    btnAdd.addEventListener('click', e => {
        e.preventDefault();
        let selected = module.selectedOptions[0].textContent.toUpperCase();
        let title;
        //title


        title = document.createElement('h3')
        title.textContent = selected + '-MODULE';

        //button Delete
        let btnDell = document.createElement('button');
        btnDell.className = 'red';
        btnDell.textContent = 'Del'
        btnDell.addEventListener('click', e => {
            let target = e.target.parentNode.parentNode;
            e.target.parentNode.remove();
            if (target.innerHTML === '') {
                target.parentNode.remove()
            }
        })

        //h4 title+date
        let lectureTitle = document.createElement('h4')
        lectureTitle.textContent = lecture.value.toUpperCase() + ' - ' + date.value.replace(/-/g, '/').replace('T', ' - ');

        //li+ul
        let li = document.createElement('li');
        li.className = 'flex';
        li.appendChild(lectureTitle);
        li.appendChild(btnDell);

        let ul = document.createElement('ul')
        ul.appendChild(li);
        // div Module.... + appened to HTML
        let divModul = document.createElement('div');
        divModul.className = 'module';
        divModul.appendChild(title);
        divModul.appendChild(ul);
        trainigs.querySelector('.modules').appendChild(divModul);


        module.selectedIndex = -1;
    })

};
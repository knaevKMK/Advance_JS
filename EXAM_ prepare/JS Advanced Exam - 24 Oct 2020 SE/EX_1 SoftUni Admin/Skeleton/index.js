function solve() {
    let [lecture, date] = document.querySelectorAll('.action input');
    let selMdoule = document.querySelector('.action select');
    let btnAdd = document.querySelector('.action button');

    let result = document.querySelector('.modules');

    function createTag(type, text, clazz) {
        let temp = document.createElement(type);
        if (text) {
            temp.textContent = text;
        }
        if (clazz) {
            temp.className = clazz;
        }
        return temp;
    }

    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();

        if (lecture.value === '' || date.value === '' || selMdoule.value === 'Select module') {
            // console.log('Error- empty fields');
            return;
        }


        let div = Array.from(document.querySelectorAll('.module')).filter(dvi => dvi.children[0].textContent === `${selMdoule.value.toUpperCase()}-MODULE`);
        let h3;
        let ul;
        let arrLi;


        console.log(div)
        if (div[0]) {
            div = div[0]
            h3 = div.children[0];
            console.log(h3);
            ul = div.children[1];
            console.log(ul)
            arrLi = Array.from(ul.children);
            ul.innerHTML = '';
            console.log(arrLi)
        } else {
            div = document.createElement('div');
            div.className = 'module';
            result.appendChild(div);

            div.appendChild(createTag('h3', `${selMdoule.value.toUpperCase()}-MODULE`));
            ul = createTag('ul');
            div.appendChild(ul);
            arrLi = [];
        }



        let li = createTag('li', '', 'flex');


        li.appendChild(createTag('h4', `${lecture.value} - ${date.value.replace(/-/g, '/').replace('T', ' - ')}`))
        let btnDel = createTag('button', 'Del', 'red');
        li.appendChild(btnDel);
        btnDel.addEventListener('click', (e) => {
            li.remove();
            if (Array.from(ul.children).length === 0) {
                div.remove();
            }
        })

        arrLi.push(li);

        arrLi
            .sort((a, b) =>
                a.children[0].textContent.substring(a.children[0].textContent.indexOf('-')).localeCompare(b.children[0].textContent.substring(b.children[0].textContent.indexOf('-'))))
            .forEach(li => {
                ul.appendChild(li)
            });
        lecture.value = '';
        date.value = '';
    })
};
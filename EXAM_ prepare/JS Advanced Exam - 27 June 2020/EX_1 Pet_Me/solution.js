function solve() {
    let [in_Name, in_Age, in_Kind, in_Owner] = document.querySelectorAll('input');
    let btnAdd = document.querySelector('#container > button');
    let progress = document.querySelector('#adoption > ul');
    let complete = document.querySelector('#adopted > ul');

    function createTag(type, text) {
        let temp = document.createElement(type);
        temp.textContent = text;
        return temp;
    }

    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();

        if (in_Name.valaue === '' || in_Age.value === '' || isNaN(Number(in_Age.value)) || in_Kind.value === '' || in_Owner.value === '') {
            return;
        }
        let strongName = createTag('strong', in_Name.value);
        let strongAge = createTag('strong', in_Age.value);
        let strongKind = createTag('strong', in_Kind.value);
        let p = createTag('p', '');
        p.appendChild(strongName);
        let text1 = document.createTextNode(' is a ');
        p.appendChild(text1);
        p.appendChild(strongAge);
        let text2 = document.createTextNode(' year old ');
        p.appendChild(text2);
        p.appendChild(strongKind);
        let span = createTag('span', 'Owner: ' + in_Owner.value);
        let btnOwner = createTag('button', 'Contact with owner');

        btnOwner.addEventListener('click', (e) => {

            let input = createTag('input', '');
            input.placeholder = 'Enter your names'
            btnOwner.remove();
            let newBtn = createTag('button', 'Yes! I take it!');

            newBtn.addEventListener('click', (e) => {

                if (input.value === '') {

                    return;
                }
                span.textContent = 'New Owner: ' + input.value;
                div.remove();
                let btnCh = createTag('button', 'Checked');


                btnCh.addEventListener('click', (e) => {
                    li.remove();
                })
                li.appendChild(btnCh)
                complete.appendChild(li)

            })

            let div = createTag('div', '');
            div.appendChild(input);
            div.appendChild(newBtn);
            li.appendChild(div)
        })

        let li = createTag('li', '');
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(btnOwner);
        progress.appendChild(li);


        in_Name.value = '';
        in_Age.value = '';
        in_Kind.value = '';
        in_Owner.value = '';
    })

}
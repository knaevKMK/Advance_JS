function solve() {
    let [_task, _open, _inProgress, _completed] = document.querySelectorAll('section')
    let [task, date] = _task.querySelectorAll('input');
    let description = _task.querySelector('#description')
    let btnAdd = _task.querySelector('#add');

    function createTag(type) {
        let temp = document.createElement(type);
        return temp;
    }

    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        if (task.value === '' && description.value === '' && date.value === '') {
            return;
        }

        let art = createTag('article');

        let h3 = createTag('h3');
        h3.textContent = task.value;
        art.appendChild(h3)

        let p1 = createTag('p');
        p1.textContent = 'Description: ' + description.value;
        art.appendChild(p1);

        let p2 = createTag('p');
        p2.textContent = 'Due Date: ' + date.value;
        art.appendChild(p2);

        let div = createTag('div');
        div.className = "flex";

        let btnStart = createTag('button');
        btnStart.className = 'green';
        btnStart.textContent = "Start";
        btnStart.addEventListener('click', (e) => {
            btnStart.remove();
            let btnFin = createTag('button');
            btnFin.className = 'orange';
            btnFin.textContent = 'Finish';
            btnFin.addEventListener('click', (e) => {

                div.remove();
                art.remove();
                _completed.children[1].appendChild(art)

            })
            div.appendChild(btnFin);
            art.remove();
            _inProgress.children[1].appendChild(art);

        })

        div.appendChild(btnStart);
        let btnDel = createTag('button')
        btnDel.className = 'red';
        btnDel.textContent = "Delete"
        btnDel.addEventListener('click', (e) => {
            art.remove();
        })

        div.appendChild(btnDel);

        art.appendChild(div);

        _open.children[1].appendChild(art)

        task.value = '';
        description.value = '';
        date.value = '';
    })

}
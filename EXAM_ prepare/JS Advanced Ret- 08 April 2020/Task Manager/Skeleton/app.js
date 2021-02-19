function solve() {
    let [_add, _Open, _InProgress, _Complete] = Array.from(document.querySelectorAll('section'));

    let task = _add.querySelector('#task');
    let date = _add.querySelector('#date');
    let descr = _add.querySelector('#description');

    console.log(_add.children[1]);
    console.log(_InProgress.children[1]);
    console.log(_Open.children[1]);
    console.log(_Complete.children[1]);

    document.addEventListener('click', e => {
        switch (e.target.textContent) {

            case 'Add':
                e.preventDefault();
                if (task.value === '' || descr.value === '' || date.value === '') {
                    return;
                }

                let element = document.createElement('article');
                element.innerHTML = `<h3>${task.value}</h3><p>Description: ${descr.value}</p><p>Due Date: ${date.value}</p><div class="flex"><button  class ="green">Start</button><button class ="red">Delete</button></div>`;
                _Open.children[1].appendChild(element);

                task.value = '';
                descr.value = '';
                date.value = '';
                break;

            case "Start":
                let art = e.target.parentElement.parentElement;
                art.remove()
                e.target.parentElement.remove();
                art.innerHTML = art.innerHTML.toString() + '<div class = "flex"><button class = "red">Delete</button><button class="orange">Finish</button></div>';
                _InProgress.children[1].appendChild(art);
                break;

            case "Delete":
                e.target.parentElement.parentElement.remove();
                break;

            case "Finish":
                let artP = e.target.parentElement.parentElement;
                artP.remove();
                e.target.parentElement.remove();
                _Complete.children[1].appendChild(artP);
                break;
        }

    })
}
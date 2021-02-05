function solve() {
    let [input, open, inProgress, completed] = Array.from(document.querySelectorAll('section'));
    const task = input.querySelector('#task');
    const description = input.querySelector('#description');
    const time = input.querySelector('#date');

    let btnAdd = input.querySelector('#add');
    //  btnAdd.type = 'button';

    window.addEventListener('click', e => {
        //  e.preventDefault();
        if (e.target.type === 'button') {

            if (e.target == btnAdd
                //  &&
                //(task.value !== '' && description.value !== '' && time.value !== '')
            ) {
                addTask(e);
                task.value = '';
                description.value = '';
                time.value = '';

            } else {
                let task = e.target.parentNode;
                switch (e.target.class) {
                    case 'red':
                        deleteTask(task.parentNode);
                        break;
                    case 'green':
                        startTask(task.parentNode);
                        break;
                    case 'orange':
                        completeTask(task.parentNode);
                        break;
                }

            }

        }
    })

    function completeTask(article) {
        let temp = article;
        deleteTask(article);
        deleteTask(temp.querySelector('div'));
        Array.from(completed.querySelectorAll('div'))[1].appendChild(temp);
    }

    function startTask(article) {

        let temp = article;
        deleteTask(article);
        deleteTask(temp.querySelector('button'))

        let btnFin = createTag('button', "Finish", 'orange');
        temp.querySelector('div').appendChild(btnFin);

        Array.from(inProgress.querySelectorAll('div'))[1].appendChild(temp)
    }

    function deleteTask(article) {
        article.remove();
    }

    function createTag(...param) {
        let temp = document.createElement(param[0]);

        switch (param[0]) {
            case 'button':
                temp.textContent = param[1];
                temp.setAttribute('class', param[2]);
                temp.class = param[2];
                temp.setAttribute('type', param[1]);
                temp.type = param[0];
                break;
            case 'div':
                temp.setAttribute('class', param[1]);
                temp.class = param[1];
                break;
            case 'article':
                break;
            default:
                temp.appendChild(document.createTextNode(param[1]));
                break
        }

        return temp;
    }

    function appendChildren(parent, ...elements) {
        elements.forEach(el => parent.appendChild(el));
    }

    function addTask(e) {
        e.preventDefault();
        let btnStar = createTag('button', 'Start', 'green');
        let btnDel = createTag('button', "Delete", 'red');

        let div = createTag('div', 'flex');

        appendChildren(div, btnStar, btnDel);


        let h3 = createTag('h3', task.value);
        let pDescr = createTag('p', 'Description: ' + description.value);
        let pDate = createTag('p', 'Due Date: ' + time.value);


        let art = createTag('article');
        appendChildren(art, h3, pDescr, pDate, div);

        Array.from(open.querySelectorAll('div'))[1].appendChild(art);

    }
}
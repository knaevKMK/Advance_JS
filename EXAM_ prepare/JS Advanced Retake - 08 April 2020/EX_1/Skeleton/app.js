function solve() {
    let [input, open, inProgress, completed] = (document.querySelectorAll('section'));

    const task = input.querySelector('#task');
    const description = input.querySelector('#description');
    const time = input.querySelector('#date');

    let btnAdd = input.querySelector('#add')
    btnAdd.type = 'button';



    document.addEventListener('click', function(e) {

        if (e.target.type === 'button') {

            if (e.target == btnAdd) {
                addTask();
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
        deleteTask(temp.querySelector('div'))
        completed.appendChild(temp)
    }

    function startTask(article) {

        let temp = article;
        deleteTask(article);
        deleteTask(temp.querySelector('button'))

        let btnFin = createTag('button', "Finish", 'orange');

        temp.querySelector('div').appendChild(btnFin);

        inProgress.appendChild(temp);
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
                //  temp.classList.add(param[2]);
                temp.class = param[2];
                temp.setAttribute('type', param[1]);
                temp.type = param[0];
                break;
            case 'div':
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

    function addTask() {
        let art = createTag('article');

        let h3 = createTag('h3', task.value);

        let pDescr = createTag('p', description.value);
        let pDate = createTag('p', time.value);

        let btnStar = createTag('button', 'Start', 'green');
        let btnDel = createTag('button', "Delete", 'red');

        let div = createTag('div', 'flex');

        appendChildren(div, btnStar, btnDel);
        // div.appendChild(btnStar);
        // div.appendChild(btnDel);


        appendChildren(art, h3, pDescr, pDate, div);
        // art.appendChild(h3);
        // art.appendChild(pDescr);
        // art.appendChild(pDate);
        // art.appendChild(div);

        open.querySelectorAll('div')[1].appendChild(art);

    }



}
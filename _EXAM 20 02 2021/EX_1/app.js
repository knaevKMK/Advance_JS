function solve() {
    let [noUse, post, newPost, archive] = Array.from(document.querySelectorAll('section'));
    let [author, title, cat] = newPost.querySelectorAll('input');
    let content = newPost.querySelector('#content');

    let btnCreate = newPost.querySelector('button');

    btnCreate.addEventListener('click', (e) => {
        e.preventDefault();

        let article = document.createElement('article');
        post.appendChild(article);

        let h1 = document.createElement('h1');
        h1.textContent = title.value;
        article.appendChild(h1);

        let p1 = document.createElement('p');
        p1.textContent = 'Category:';

        let strong1 = document.createElement('strong');
        strong1.textContent = cat.value;
        p1.appendChild(strong1);

        article.appendChild(p1);

        // repeat
        let p2 = document.createElement('p');
        p2.textContent = 'Creator:';

        let strong2 = document.createElement('strong');
        strong2.textContent = author.value;
        p2.appendChild(strong2);

        article.appendChild(p2);

        //content

        let p3 = document.createElement('p');
        p3.textContent = content.value;
        article.appendChild(p3)


        //div

        let div = document.createElement('div');
        div.className = 'buttons';
        article.appendChild(div);

        // btnDel
        let btnDel = document.createElement('button');
        btnDel.textContent = 'Delete';
        btnDel.className = 'btn delete';
        div.appendChild(btnDel);
        btnDel.addEventListener('click', (e) => {
                article.remove();
            })
            //btnArh
        let btnArh = document.createElement('button');
        btnArh.textContent = 'Archive';
        btnArh.className = 'btn archive';
        div.appendChild(btnArh);
        btnArh.addEventListener('click', (e) => {
            let arh = archive.children[1];
            let arr = Array.from(arh.children);

            let li = document.createElement('li');
            li.textContent = h1.textContent;
            article.remove();

            arr.push(li);
            arr.sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(l => arh.appendChild(l));
        })


        console.log(archive)


    })




}
function solution() {

    let [addGift, listOfGift, sentGifts, discaredGifts] = document.querySelectorAll('section');

    //list gifts
    let listDoc = listOfGift.querySelector('ul');

    //list Sent
    let listSent = sentGifts.querySelector('ul');

    //list Disc
    let listDisc = discaredGifts.querySelector('ul');
    //button Add
    let btn = addGift.getElementsByTagName('button')[0];

    btn.addEventListener('click', e => {
        let li = document.createElement('li');
        li.textContent = addGift.querySelector('input').value;
        //
        let btnSend = document.createElement('button');
        btnSend.id = "sendButton";
        btnSend.textContent = 'Send';
        btnSend.addEventListener('click', sentgift)
        li.appendChild(btnSend);
        //
        let btnDisc = document.createElement('button');
        btnDisc.id = "discardButton";
        btnDisc.textContent = 'Discard';
        btnDisc.addEventListener('click', discard);
        li.appendChild(btnDisc);

        let list = Array.from(listDoc.children);
        listDoc.innerHTML = '';
        list.push(li);
        list
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(lis => {
                lis.className = 'gift';
                listDoc.appendChild(lis)
            });
        addGift.querySelector('input').value = '';
    })

    function sentgift(e) {
        let li = e.target.parentNode;
        li.remove();
        let text = li.textContent;
        text = text.replace('Send', '');
        text = text.replace('Discard', '');
        li.innerHTML = '';
        li.textContent = text;

        listSent.appendChild(li);
    }

    function discard(e) {
        let li = e.target.parentNode;
        li.remove();
        let text = li.textContent;
        text = text.replace('Send', '');
        text = text.replace('Discard', '');
        li.innerHTML = '';
        li.textContent = text;

        listDisc.appendChild(li);

    }

}
function solution() {
    let [addGift, listOfGifts, sendGifts, DiscaredGifts] = document.querySelectorAll('section');
    let giftName = addGift.querySelector('input');
    let btnAdd = addGift.querySelector('button');

    function _createTag(type, text, clazz) {
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
        let ul = listOfGifts.children[1];
        let arr = [];

        console.log(ul)
        if (giftName.value === '') {
            return;
        }
        arr = Array.from(ul.children);

        ul.innerHTML = '';
        let li = _createTag('li', giftName.value, 'gift');
        arr.push(li);

        let btnSend = _createTag('button', 'Send', 'sendButton');
        btnSend.addEventListener('click', (e) => {
            btnSend.remove();
            btnDisc.remove();
            li.remove();
            sendGifts.children[1].appendChild(li);
        })
        li.appendChild(btnSend);

        let btnDisc = _createTag('button', 'Discard', 'discardButton');
        btnDisc.addEventListener('click', (e) => {
            btnSend.remove();
            btnDisc.remove();
            li.remove();
            DiscaredGifts.children[1].appendChild(li);
        })
        li.appendChild(btnDisc);



        arr.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => listOfGifts.children[1].appendChild(li));
        giftName.value = '';

    })
}
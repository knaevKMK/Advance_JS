function addSticker() {

    // let [_title, _text] = document.querySelectorAll('input');
    // let title = _title.value;
    // let text = _text.value;



    // if (title && text) {

    //     let li = document.createElement('li');
    //     li.className = 'note-content';


    //     let a = document.createElement('a');
    //     a.textContent = 'x';
    //     a.className = 'button';
    //     a.addEventListener('click', function() {
    //         this.parentNode.remove();
    //     })

    //     let h2 = document.createElement('h2')
    //     h2.textContent = title

    //     let hr = document.createElement('hr');

    //     let p = document.createElement('p')
    //     p.textContent = text;

    //     li.appendChild(a);
    //     li.appendChild(h2);
    //     li.appendChild(hr);
    //     li.appendChild(p);

    //     document.getElementById('sticker-list').appendChild(li);

    //     _title.value = '';
    //     _text.value = '';
    // }

    let $title = $('input.title');
    let $text = $('input.content');
    let title = $title.val();
    let text = $text.val();

    if (title && text) {
        let $li = $('<li>');
        $li.attr(`class`, `note-content`);
        let $a = $('<a>');
        $a.attr('class', 'button');
        $a.text('x');
        $a.on('click', (e) => {
            $li.remove();
        })

        $li.append($a);

        let $h2 = $(`<h2>${title}</h2>`);
        $li.append($h2);
        $li.append('<hr>');

        let $p = $(`<p>${text}</p>`);
        $li.append($p);
        $('#sticker-list').append($li)


        $title.val('');
        $text.val('');

    }


}
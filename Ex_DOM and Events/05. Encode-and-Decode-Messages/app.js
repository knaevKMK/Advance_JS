function encodeAndDecodeMessages() {
    let btns = document.querySelectorAll('button');

    let inputTextField = document.querySelectorAll('textarea')[0];
    let outputTextField = document.querySelectorAll('textarea')[1];

    // btns[0].addEventListener('click', function() {
    //     let text = inputTextField.value;

    //     for (let index = 0; index < text.length; index++) {
    //         outputTextField.textContent += (String.fromCharCode(text.charCodeAt(index) + 1));
    //     }
    //     inputTextField.value = '';
    // })
    // btns[1].addEventListener('click', function() {
    //     let msg = outputTextField.textContent;
    //     outputTextField.textContent = '';
    //     for (let index = 0; index < msg.length; index++) {
    //         outputTextField.textContent += (String.fromCharCode(msg.charCodeAt(index) - 1));
    //     }
    // })

    const map = {
        encode: {
            textField: inputTextField,
            btn: btns[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            textField: outputTextField,
            btn: btns[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    document.getElementById('main').addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') { return; }
        const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';
        console.log(map[type].textField.value)
        const msg = map[type].textField.value
            .split('').map(map[type].func).join('');

        map.encode.textField.value = '';
        map.decode.textField.value = msg;
    })
}
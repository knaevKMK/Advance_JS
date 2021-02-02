function notify(message) {
    let msgParent = document.querySelector('div#notification');

    if (document.getElementById('notification').firstElementChild == null) {


        let msg = document.createElement('span');
        msg.textContent = message;
        msgParent.appendChild(msg);

        msgParent.style.display = 'block';
    } else {
        msgParent.style.display = 'none';
    }

}
function addItem() {
    let input = document.getElementById('newItemText').value;
    if (input.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = input;
        //   li.appendChild(document.createTextNode(input));
        document.getElementById('items').appendChild(li);
    }
    document.getElementById('newItemText').value = '';
}
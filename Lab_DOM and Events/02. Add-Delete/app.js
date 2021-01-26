function addItem() {
    let input = document.getElementById('newText').value;
    if (input.trim() === '') {
        return;
    }
    let li = document.createElement('li');
    li.textContent = input;

    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener('click', deleteItem);

    li.appendChild(remove);
    document.getElementById('items').appendChild(li);


    function deleteItem() {
        li.remove();
    }
    document.getElementById('newText').value = '';
}
function addItem() {

    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');


    let p = document.createElement('option');
    p.textContent = text.value + ': ' + value.value;

    document.getElementById('menu').appendChild(p);


    text.value = '';
    value.value = '';
}
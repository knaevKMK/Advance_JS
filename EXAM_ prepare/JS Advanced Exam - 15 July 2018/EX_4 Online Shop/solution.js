function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);




    let [product, bgn, qty, capacity, price] = document.querySelectorAll('.block input')
    let ul = document.querySelector('.block .display');
    let btnSbm = document.getElementById('submit');

    product.addEventListener('keypress', (e) => {
        btnSbm.disabled = false;
    })

    function _createTag(type, text) {
        let temp = document.createElement(type);
        temp.textContent = text;
        return temp;
    }

    btnSbm.addEventListener('click', (e) => {
        let _qty = Number(qty.value);
        let _capacity = Number(capacity.value) + _qty;
        if (_capacity > 150) {
            capacity.value = 'full';
            capacity.className = 'fullCapacity';
            product.disabled = true;
            bgn.disabled = true;
            qty.disabled = true;
            btnSbm.disabled = true;
            return;
        }
        capacity.value = (_capacity).toString();
        price.value = (Number(price.value) + Number(bgn.value) * Number(qty.value)).toString();
        ul.appendChild(_createTag('li', `Product: ${product.value} Price: ${bgn.value} Quantity: ${_qty}`));
        product.value = '';
        bgn.value = 1;
        qty.value = 1;
        btnSbm.disabled = true;
        let productsList = $('.display').find('li');
        console.log(productsList.length)
    })

}
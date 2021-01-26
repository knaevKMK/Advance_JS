function focus() {
    // for Judge  Array.from(document.querySelectorAll('input'))
    document.querySelectorAll('input')
        .forEach(i => {
            i.addEventListener('focus', onFocus);
            i.addEventListener('blur', onBlur);
        });
    function onFocus(eve) {
        eve.target.parentNode.className = 'focused';
    }
    function onBlur(eve) {
        eve.target.parentNode.className = '';
    }
}
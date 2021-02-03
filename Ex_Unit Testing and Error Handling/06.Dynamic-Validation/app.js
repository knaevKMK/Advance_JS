function validate() {
    let input = document.getElementById('email');
    input.addEventListener('keydown', function() {
        let regex = /a-z]+@[a-z]+.[a-z]+/;
        input.classList.add();
        if (input.value.match(regex)) {
            console.log(input.className);
            input.className = '';
        } else {
            input.className = 'error';
            console.log(input.className);
        }
    });
}
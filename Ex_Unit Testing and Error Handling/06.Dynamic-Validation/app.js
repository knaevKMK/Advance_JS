function validate() {
    let input = document.getElementById('email');
    input.classList.add();
    input.addEventListener('keyup', function() {
        let regex = /[a-z]+@[a-z]+\.[a-z]+/gi;
        let text = input.value;
        console.log(text);
        if (text.match(regex)) {
            input.className = 'none';
            console.log(input.className);
        } else {
            input.className = 'error';
            console.log(input.className);
        }
    });
}
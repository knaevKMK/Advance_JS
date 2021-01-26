function validate() {
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let input = document.getElementById('email');
    input.addEventListener('change', function () {

        if (regex.test(input.value)) {
            input.classList = ('');
        } else {
            input.classList = ('error');
        }
    });
}
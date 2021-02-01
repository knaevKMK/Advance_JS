function solve() {
    console.log('TODO...');
    let [btnSum, btnSubstract] = document.querySelectorAll('button');
    btnSubstract.type = "button";
    btnSum.type = "button";
    let [num1, num2, result] = document.querySelectorAll('input');


    let click = document.addEventListener('click', function(event) {
        switch (event.target) {
            case btnSum:
                return Number(num1.value) + Number(num2.value)

            case btnSubstract:
                return value = Number(num1.value) - Number(num2.value);

        }
    })
    return click;
}
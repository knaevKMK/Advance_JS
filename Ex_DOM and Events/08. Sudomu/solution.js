function solve() {
    let [btnCheck, btnClear] = document.querySelectorAll('button');
    let result = document.getElementById('check').children[0];
    let in_F = document.querySelectorAll('input');


    btnCheck.addEventListener('click', e => {
        let isWin = true;

        let shape = {
            row1: [in_F[0].value, in_F[1].value, in_F[2].value],
            row2: [in_F[3].value, in_F[4].value, in_F[5].value],
            row3: [in_F[6].value, in_F[7].value, in_F[8].value],
            col1: [in_F[0].value, in_F[3].value, in_F[6].value],
            col2: [in_F[1].value, in_F[4].value, in_F[7].value],
            col3: [in_F[2].value, in_F[5].value, in_F[8].value]
        }
        for (const key in shape) {
            const cell = shape[key]

            if (cell.includes(undefined) || cell[0] === cell[1] || cell[0] === cell[2] || cell[2] === cell[1]) {
                isWin = false
                break;
            }
        }
        if (isWin) {

            document.querySelector('table').style.border = "2px solid green";

            document.querySelector('p').style.color = "green"
            result.textContent = 'You solve it! Congratulations!';
        } else {
            document.querySelector('table').style.border = "2px solid red";
            document.querySelector('p').style.color = "red";
            result.textContent = 'NOP! You are not done yet...';
        }

    })

    btnClear.addEventListener('click', (e) => {
        document.querySelector('table').style.border = "";
        result.textContent = '';
        in_F.forEach(td => td.value = '');

    })
}
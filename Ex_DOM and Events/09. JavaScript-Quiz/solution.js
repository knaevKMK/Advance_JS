function solve() {
    let sections = Array.from(document.querySelectorAll('section'))

    const tempRightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    let index = (sections).findIndex(section => section.class !== 'hidden');
    let rightAnswers = 0;
    window.addEventListener('click', (e) => {
        let [low, high] = Array.from(sections[index].querySelectorAll('.answer-text'));

        if (e.target === low || e.target === high) {
            if (e.target.textContent === tempRightAnswers[index]) {
                rightAnswers++;
            }
            sections[index++].style.display = "none";
            //   sections[index++].className = 'hidden';
            if (index >= sections.length) {
                let result = rightAnswers === tempRightAnswers.length ? `You are recognized as top JavaScript fan!` :
                    `You have ${rightAnswers} right answers`;
                document.getElementById('results').children[0].children[0].textContent = result;
                document.getElementById('results').style.display = 'block'
                return;
            }
            //  sections[index].className = '';
            sections[index].style.display = 'block';
        }
    })
}
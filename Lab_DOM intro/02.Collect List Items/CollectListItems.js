function extractText() {
    // let elemnts = document.querySelectorAll('ul#items li');
    // elemnts = Array.from(elemnts);
    // const result = document.querySelector('#result');
    // for (const elemnt of elemnts) {
    //     result.value += elemnt.textContent + '\n';
    // }

    let elemnts = document.getElementsByTagName('li');
    elemnts= [...elemnts];
    elemnts.forEach(element => {
        document.getElementById('result').value += element.textContent + '\n';
    });
}
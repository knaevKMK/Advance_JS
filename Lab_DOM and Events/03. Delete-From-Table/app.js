function deleteByEmail() {
    let input = document.getElementsByTagName('input')[0].value.toLowerCase();
    if (input.trim() === '') {
        return;
    }
    let arr = Array.from(document.querySelectorAll('tbody > tr'));
    let isDeleted=false;
    for (let row of arr) {
        row = Array.from(row.children);
        let cellEmail = row[1];
        if (cellEmail.textContent.toLowerCase().includes(input)) {
        cellEmail.parentElement.remove();
            document.getElementById('result').textContent='Deleted.'
            isDeleted=true;   
        }
    }
    if(!isDeleted){
        document.getElementById('result').textContent='Not found.';
    }
  //  document.getElementsByTagName('input')[0].value = '';
}
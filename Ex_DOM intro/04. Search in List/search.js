function search() {
  // let lookIn= document.getElementById('towns').children;
  let lookIn = document.querySelectorAll('ul > li');
  let serchRegex = document.querySelector('input').value;
  let matches = 0;
  lookIn.forEach(li => {
    if (li.textContent.toLowerCase().includes(serchRegex.toLowerCase())
      && serchRegex !== '') {
      matches++;
      li.style.fontWeight = 'bold';
      li.style.textDecoration = 'underline';
    }else{
      li.style.fontWeight='';
      li.style.textDecoration='';
    }
  });
  document.querySelector('div').textContent = `${matches} matches found`;
}

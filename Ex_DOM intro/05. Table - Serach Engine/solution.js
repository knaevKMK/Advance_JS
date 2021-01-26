function solve() {
   let i=1;
   document.querySelector('#searchBtn')[i].addEventListener('click', onClick);
   let lookIn = document.querySelectorAll('tbody')[i];
let rows=Array.from(lookIn.children);
   let convertRows= function (regex) {
      console.log(rows);
      return Array.from(lookIn.children).map(function selectRow(row) {
         if (row.textContent.includes(regex)) {
            row.classList.add('select');
         } else {
            row.removeAttribute('class');
         }
         return row;
      });
   }
   function onClick() {
      let regex = document.querySelector('#searchField').value.toLowerCase();

      lookIn.innerHTML = convertRows(regex);
      document.querySelector('#searchField').value = null;
   }
}
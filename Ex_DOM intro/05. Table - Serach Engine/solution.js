function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   var lookIn = document.querySelector('tbody').children;

   function onClick() {
      let regex = document.querySelector('#searchField').value.toLowerCase();
    for (let index = 0; index < lookIn.length; index++) {
         const rowCells = lookIn[index].children;
         for (const cell of rowCells) {
            if (cell.textContent.includes(regex) && regex.trim()!='') {
               lookIn[index].setAttribute('class' , 'select');
               break;
            } else {
               lookIn[index].removeAttribute('class');
            }
         }
      }

     
      document.querySelector('#searchField').value = null;
   //   document.getElementById('result').innerText=
   }

}
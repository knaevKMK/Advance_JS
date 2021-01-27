function create(words) {
   let father = document.getElementById('content');
   for (const line of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = line;
      p.style.display = 'none';
      div.appendChild(p);
      father.appendChild(div);
   }
   father.addEventListener('click', showLine);
   function showLine(ev) {
      let point = ev.target;
      if (point.tagName === 'DIV' && ev.target.id !== 'content') {
         point.children[0].style.display = 'block';
      }
   }
}
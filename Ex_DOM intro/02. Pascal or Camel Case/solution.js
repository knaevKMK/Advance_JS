function solve() {
  const text = document.getElementById('text').value;
  const command = document.getElementById('naming-convention').value;
  
  document.getElementById('result').textContent =getResult(text) ;

  function getResult(text) {
   
    let temp = text.toLowerCase();
    temp = temp.split(/\s+/);
    temp = temp.map(word => word = word.substring(0, 1).toUpperCase() + word.substring(1));
   
    switch (command) {
   
      case 'Camel Case':
        temp[0] = temp[0].toLowerCase();
        return temp.join('');
   
        case 'Pascal Case':
        return temp.join('');
   
        default: return 'Error!';
    }
  }
}
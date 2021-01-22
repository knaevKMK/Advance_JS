function toggle() {
  
    document.getElementsByClassName('button')[0].textContent= 
    document.getElementsByClassName('button')[0].textContent != 'More' ? 'More': 'Less';

    document.getElementById('extra').style.display = 
    document.getElementById('extra').style.display !='block'? 'block': 'none';
    
}
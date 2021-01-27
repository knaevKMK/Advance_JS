var imgArray = [];
imgArray[0] = new Image;
imgArray[0].src = "png/cherries.png";

imgArray[1] = new Image;
imgArray[1].src = "png/Dinya.png";

imgArray[2] = new Image;
imgArray[2].src = "png/lemon.png";

imgArray[3] = new Image;
imgArray[3].src = "png/orange.png";

imgArray[4] = new Image;
imgArray[4].src = "png/sliva.png";

imgArray[5] = new Image;
imgArray[5].src = "png/star.png";

imgArray.forEach(img => img.style = "width:150px;height:150px;")


var autoPlayOn = false;

function getImage() {
    console.log('I am Play')
    let rows = document.querySelectorAll('tr');
    for (let row of rows) {
        row = [...row.children];
        for (let cell of row) {
            let rnd = Math.abs(Math.floor(Math.random() * 6));
            let pos = cell.children[0];
            pos.src = imgArray[rnd].src;
            // need animate
        }
        console.log(`=========================================`)
    }
}

function Autoplay() {
    console.log('Auto PLay');
    autoPlayOn = autoPlayOn ? false : true;
    //  while (autoPlayOn) {
    // hold time & eventButton stopAutoPlay
    getImage();
    //  }
}
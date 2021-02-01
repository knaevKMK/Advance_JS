//const createCard = require('./PlayCards');
function printDeckOfCards(cards) {
    let deck = [];
    let lastCard=null;
    try {
        cards.forEach(card => {
            let [value, suite] = [card.substring(0, cards.length == 2 ? card.length: card.length-1), card.substring(card.length - 1)];
           lastCard=card;
            deck.push(createCard(value, suite));
        });
        console.log(deck.join(' '));
    } catch (ex) {
       console.log ('Invalid card: '+ lastCard);
    }
    function createCard (value,suite){
        let cardsValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {S: '♠', H: '♥', D: '♦', C: '♣'};

        if (!cardsValues.includes(value)|| !Object.keys(suits).includes(suite)){
            throw new Error('Error');
            //  console.error('Error');
        }
        return {
            value,
            suite,
            toString(){
                return `${value}${suits[suite]}`;
            }
        }.toString()
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C'])
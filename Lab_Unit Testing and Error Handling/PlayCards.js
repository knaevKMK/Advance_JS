function solve(value, suite) {
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {S: '♠', H: '♥', D: '♦', C: '♣'};

    if (!cards.includes(value)|| !Object.keys(suits).includes(suite)){
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

module.exports = solve;
// console.log(solve('A', 'S'));
// console.log(solve('10', 'H'));
// console.log(solve('1', 'C'));
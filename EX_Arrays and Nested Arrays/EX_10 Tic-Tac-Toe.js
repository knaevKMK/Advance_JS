function solve(moves) {
    let shape = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];


    let player = "X";

    for (const move of moves) {
        let [x, y] = move.split(' ');
        x = Number(x);
        y = Number(y);

        if (shape[x][y] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        shape[x][y] = player;

        if (isWinner(shape, player)) {
            console.log(`Player ${player} wins!`);
            break;
        }
        player = player === 'X' ? 'O' : 'X';

        if (shape.every(row => row.every(el => el !== false))) {
            console.log('The game ended! Nobody wins :(');
            break;
        }


    }
    printBoard(shape);


    function isWinner(shape, player) {
        // rows
        if (shape[0][0] == player && shape[0][1] == player && shape[0][2] == player) {
            return true;
        }
        if (shape[1][0] == player && shape[1][1] == player && shape[2][2] == player) {
            return true;
        }
        if (shape[2][0] == player && shape[2][1] == player && shape[2][2] == player) {
            return true;
        }
        //cols
        if (shape[0][0] == player && shape[1][0] == player && shape[2][0] == player) {
            return true;
        }
        if (shape[0][1] == player && shape[1][1] == player && shape[2][1] == player) {
            return true;
        }
        if (shape[0][2] == player && shape[1][2] == player && shape[2][2] == player) {
            return true;
        }

        // diag
        if (shape[0][0] == player && shape[1][1] == player && shape[2][2] == player) {
            return true;
        }
        if (shape[0][2] == player && shape[1][1] == player && shape[2][0] == player) {
            return true;
        }
        return false;
    }

    function printBoard(shape) {
        for (const row of shape) {
            console.log(row.join("\t"));
        }
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);
solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);
solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);
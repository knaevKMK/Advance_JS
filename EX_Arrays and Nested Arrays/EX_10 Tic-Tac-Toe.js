function solve(moves) {
    let shape = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];


    let player = "X";

    for (const move of moves) {
        let [x, y] = move.split(" ");
        x = Number(x);
        y = Number(y);

        if (shape[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        shape[x][y] = player;

        if (isWinner(shape, player)) {
            console.log(`Player ${player} wins!`);
            break;
        }
        if (hasFreeCells(shape, player)) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
        player = changePlayer(player);

    }
    printBoard(shape);

    function hasFreeCells(shape, player) {
        for (const row of shape) {
            if (row.includes(false)) {
                return false;
            }
        }
        return true;
    }

    function isWinner(shape, player) {
        //check rows
        for (const row of shape) {
            let isWinn = true;
            for (const rowElement of row) {
                if (rowElement !== player) {
                    isWinn = false;
                    break;
                }
            }
            if (isWinn) {
                return true;
            }
        }


        //check diagonals
        let diagA = true;
        let diagB = true;
        for (let i = 0; i < 3; i++) {
            if (player !== shape[i][i]) {
                diagA = false;
            }
            if (player !== shape[i][2 - i]) {
                diagB = false;
            }
        }
        if (diagA || diagB) {
            return true;
        }

        //check columns
        for (let i = 0; i < 3; i++) {
            let col = true;
            for (let l = 0; l < 3; l++) {
                if (shape[i][l] !== player) {
                    col = false;
                }
            }
            if (col) {
                return true;
            }
        }
    }

    function printBoard(shape) {
        for (const row of shape) {
            console.log(row.join("\t"));
        }
    }

    function changePlayer(player) {
        if (player == "X") {
            return "O";
        }
        return "X";

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
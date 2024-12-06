function Gameboard () {
    const rows = 3;
    const columns = 3;
    const board = []

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push({})
        }
    }

    const playerMove = (row, column, player) => {
        board[row][column] = player;
        console.log(board)
    }

}

Gameboard();

console.log(Gameboard(playerMove(1, 1, "X")))
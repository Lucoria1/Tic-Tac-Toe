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

    const getBoard = () => board;

    

    // const playerMove = (row, column, player) => {
    //     board[row].splice(column, 1, player)
    //     console.log(board);
    // }

    return {}

}

function displayController (
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: "X"
        },
        {
            name: playerTwoName,
            token: "O"
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };


}

// Gameboard.playerMove(1, 1, "X")



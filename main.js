const Gameboard = (function () {
    const rows = 3;
    const columns = 3;
    const board = []

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push("")
        }
    }

    return {board}

})();

const displayController = (function (
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = Gameboard.board;

    const getGameboard = () => console.table(board);

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

    const getActivePlayer = () => activePlayer

    const playerMove = (row, column) => {
        if (board[row][column].value === "X" || "O") {
            console.log(board[row][column].value)
            console.log('Invalid Move')} else {
                console.log(board[row][column].value)
                board[row][column].value = activePlayer.token}
    }

    return {getGameboard, getActivePlayer, switchPlayerTurn, playerMove}
})();

displayController.getGameboard()
displayController.playerMove(1,1)
displayController.getGameboard()
displayController.switchPlayerTurn()
displayController.playerMove(1,1)
displayController.getGameboard()




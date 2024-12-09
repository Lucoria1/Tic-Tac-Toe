const Gameboard = (function () {
    const rows = 3;
    const columns = 3;
    const board = []

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push({})
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
        if (board[row][column] === "X" || board[row][column] === "O") {
            return 'Invalid Move'
            // console.log('Invalid Move')
        } else {
                board[row][column] = activePlayer.token}
    }

    const checkWinConditions = () => {
        //loop through outer array
        //loop through inner array
        //check if inner array is all one player token (loop players?)

        board.forEach(rowCheck);

        function rowCheck(value, index, array){
            if(board[index].every((value) => {
                return value === players[0].token
            }) === true){console.log(`${players[0].name} Wins!`)} else if (board[index].every((value) => {
                return value === players[1].token
            }) === true){console.log(`${players[1].name} Wins!`)}
        }

        board.forEach(columnCheck);

        function columnCheck (){
            const columnArray = board.map((value, index, array) => {
                return board[index].map((val, ind, arr) => {
                    
                })
            })
        }


        
    }
    
    const playRound = (row, column) => {
        if(playerMove(row,column) === "Invalid Move"){
            console.log("Invalid Move")
            console.log(board[row][column].value)
        } else {
            playerMove(row, column);
            getGameboard();
            switchPlayerTurn();
            checkWinConditions();
            }
    }


    return {getGameboard, playRound}
})();

displayController.getGameboard()
displayController.playRound(2,0)
displayController.playRound(1,0)
displayController.playRound(0,1)
displayController.playRound(1,1)
displayController.playRound(0,2)
displayController.playRound(1,2)
// displayController.playRound(1,0)
// displayController.playRound(1,2)
// displayController.playRound(2,0)






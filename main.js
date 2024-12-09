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

        const masterArray = board[0].concat(board[1],board[2])

        board.forEach(rowCheck);

        function rowCheck(value, index, array){
            if(array[index].every((value) => {
                return value === players[0].token
            }) === true){console.log(`${players[0].name} Wins!`)} else if (array[index].every((value) => {
                return value === players[1].token
            }) === true){console.log(`${players[1].name} Wins!`)}
        }

        function columnCheck (value, index, array){           
            const columns = 3;
            const rows = 3;
            const adjBoard = [];

            let k = 0;

            for(let i = 0; i < columns; i++){
                adjBoard[i] = [];
                for(let j = 0; j < rows; j++){
                    adjBoard[i].push(masterArray[k])
                    k+= 3;
                }
                k-= 8
                
            }

            adjBoard.forEach(rowCheck);

        }

        columnCheck(0, 0, board)

        function diagCheck () {
            const left = masterArray.filter((value, index, array) => {
                if(index === 0 || index === 4 || index === 8){
                    return value
                }
            })

            const right = masterArray.filter((value, index, array) => {
                if(index === 2 || index === 4 || index === 6){
                    return value
                }
            })

            function check(value, index, array){
                if(array.every((value) => {
                    return value === players[0].token
                }) === true){console.log(`${players[0].name} Wins!`)} else if (array.every((value) => {
                    return value === players[1].token
                }) === true){console.log(`${players[1].name} Wins!`)}
            }
            
            check(0,0, left);
            check(0,0,right)
        }

        diagCheck();

        
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
displayController.playRound(0,0)
displayController.playRound(2,0)
displayController.playRound(0,1)
displayController.playRound(1,1)
displayController.playRound(2,2)
displayController.playRound(0,2)
// displayController.playRound(2,0)
// displayController.playRound(2,1)
// displayController.playRound(2,2)






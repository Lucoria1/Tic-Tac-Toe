document.addEventListener("DOMContentLoaded", (event) => {

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
    // playerOneName = playerOneInput.value,
    // playerTwoName = playerTwoInput.value
) {
    const board = Gameboard.board;

    const getGameboard = () => board;

    const playerOneInput = document.getElementById('playerOne');
    const playerTwoInput = document.getElementById('playerTwo');

    const playerNameInput = document.querySelector("#playerNames");

    playerNameInput.addEventListener("keypress", (event) => {
        if(event.keyCode === 13) {
            event.preventDefault();
            players[0].name = playerOneInput.value
            players[1].name = playerTwoInput.value
        }
    })


    const players = [
        {
            name: playerOneInput.value,
            token: "X"
        },
        {
            name: playerTwoInput.value,
            token: "O"
        }
    ];

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer

    const switchPlayerTurn = () => {
       activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const playerMove = (row, column) => {
        if (board[row][column] === "X" || board[row][column] === "O") {
            return 'Invalid Move'
        } else {
                board[row][column] = activePlayer.token}
    }

    let win;
    let tie;
    let winningPlayer;


    const checkWinConditions = () => {

        const masterArray = board[0].concat(board[1],board[2])

        board.forEach(rowCheck);

        function rowCheck(value, index, array){
            if(array[index].every((value) => {
                return value === players[0].token
            }) === true){winningPlayer = players[0].name
                win = true
            } else if (array[index].every((value) => {
                return value === players[1].token
            }) === true){winningPlayer = players[1].name
                win = true
            }
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
                }) === true){winningPlayer = players[0].name
                    win = true
                } else if (array.every((value) => {
                    return value === players[1].token
                }) === true){winningPlayer = players[1].name
                    win = true
                }
            }
            
            check(0,0, left);
            check(0,0,right)
        }

        diagCheck();

        function tieCheck () {
            let isTie;

            if(masterArray.every((value) => {
                return value === "X" || value === "O"
            })){isTie = true};

            if(win !== true && isTie === true){
                tie = true
            }
        }

        tieCheck()

        function getMessage (){
            if(tie === true){
                alert(`No more moves! Its a Tie!`)
            }
            if(win === true){
                alert(`${winningPlayer} Wins!`)
            }
        }

        getMessage();
        
    }


    
    const playRound = (row, column) => {
        if(playerMove(row,column) === "Invalid Move"){
            console.log("Invalid Move")
        } else if (win === true) {
            alert(`Game Over! ${winningPlayer} Won!`)
        } else {
            playerMove(row, column);
            getGameboard();
            switchPlayerTurn();
            checkWinConditions();
            }
    }

    const checkGameOver = () => {
        let gameOver = false
        if (win === true || tie === true) {
            gameOver = true
        }
        return gameOver;
    }

    const moveBtns = document.querySelectorAll(".moveBtn");

    moveBtns.forEach((element) => {
        element.addEventListener("click", () => {

            let id = element.id;
            const myArray = id.split(" ");
            if (checkGameOver() === false){
            element.innerHTML = getActivePlayer().token;
            playRound(myArray[0], myArray[1])}
        })
    })

    return {getGameboard, playRound, getActivePlayer, checkGameOver}
})();
})




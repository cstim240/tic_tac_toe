const gameBoard = (function() { //IIFE - holds the 3x3 game board and status of game 
    'use strict';

    let boardMatrix = 
    [ 
    ['', '', ''],
    ['', '', ''], 
    ['', '', '']
    ];

    let isGameOver = false;
    let isXsTurn = true; //since x goes first
    let player1, player2;

    function getBoardMatrix(){
        return boardMatrix;
    }

    function setCellValue(row, col, value){ //to make changes in the gameBoard and mark the board according to player symbol
        return boardMatrix[row][col] = value;
    }

    return {getBoardMatrix,
        isGameOver,setCellValue, isXsTurn, player1, player2
    };
})();

function choosePlayerSymbol(){
    let chosenSymbol;
    let player1Name, player2Name;
    do {
        player1Name = prompt("What is player 1's name?");
        chosenSymbol = prompt(`X goes first. Does ${player1Name} want X or O?`).toUpperCase(); 
    } while (chosenSymbol !== "X" && chosenSymbol !== "O");
    player1 = playerFactory(chosenSymbol, player1Name);
    player2Name = prompt("What is player 2's name?");
    player2 = (chosenSymbol === "X")? playerFactory("O", player2Name) : playerFactory("X", player2Name);
    alert(`${player2.player2Name} will be ${player2.playerSymbol}`);
}

const playerFactory = function(playerSymbol, playerName) {
    return {playerSymbol, playerName}
};

function displayGameBoard(){ //displays the gameBoard, also add eventlisteners for clicks on each table cell
    const gameBoardElement = document.getElementById("game_board");
    const boardMatrix = gameBoard.getBoardMatrix(); //gets the boardMatrix from the gameBoard object

    gameBoardElement.innerHTML = ''; //clear the table element from previous content

    for (let i = 0; i < boardMatrix.length; ++i){
        const row = document.createElement('tr'); //creates a row for each of the array(/3) inside boardMatrix

        for (let j = 0; j < boardMatrix[i].length; ++j){
            const cell = document.createElement('td'); //creates a cell/column for each array row inside boardMatrix
            cell.textContent = boardMatrix[i][j]; // set value from boardMatrix
            cell.setAttribute("row", i); //gives the cell an attribute of row=i
            cell.setAttribute("column", j); 
            cell.addEventListener('click', handleClick); //add an event listener to when a cell gets clicked
            row.appendChild(cell);
        }
        gameBoardElement.appendChild(row);
    }
}

/*assignSymbol is short-hand (ES6), for the more verbose way it would be variable : function, in this case assignSymbol : assignSymbol
    The object literal, when returned by the playerFactory function, creates a player object with the specified properties and methods. 
    The shorthand notations help keep the code concise and more readable.
    */

    function getCurrentPlayer(){
        const xPlayer = (player1 == "X") ? player1 : player2;
        const oPlayer = (player2 == "O") ? player2 : player1;
        if (gameBoard.isXsTurn){
            return xPlayer;
        } else 
            return oPlayer;
    } 

function handleClick(event){ //adds an eventListener to each generated table cell, marks clicked cells and flips whose turn it is
    const clickedCell = event.target; //event.target represents the HTML element that triggerred the event. 
    if (clickedCell.textContent == ''){ //checks if the cell's content is empty, otherwise prevents player from replacing value inside cell
        const row = clickedCell.getAttribute('row'); //get the value of the attribute 'row' from the table cell <td>
        const column = clickedCell.getAttribute('column');
        const rowIndex = parseInt(row); //since the row var is stored as a string
        const colIndex = parseInt(column);

        const currentPlayer = getCurrentPlayer();
        clickedCell.textContent = currentPlayer.playerSymbol; //could be X or O
        gameBoard.setCellValue(rowIndex, colIndex, currentPlayer);
        gameBoard.isXsTurn = !gameBoard.isXsTurn;
    }
    setTimeout(function(){
        checkForEnd(); }, 300
        );
}

function checkForEnd(){
    const boardMatrix = gameBoard.getBoardMatrix();

    //check for wins via rows(1st if-statement) or columns (2nd if statement)
    for (let i = 0; i < 3; i++){
        if ((boardMatrix[i][0] !== '') && (boardMatrix[i][0] === boardMatrix[i][1]) && (boardMatrix[i][1] === boardMatrix[i][2]))  {
            alert(`${boardMatrix[i][0].playerName} wins the game!`);
        }
        if ((boardMatrix[0][i] !== '') && (boardMatrix[0][i] === boardMatrix[1][i]) && (boardMatrix[1][i] === boardMatrix[2][i])) {
            alert(`${boardMatrix[0][i].playerName} wins the game!`);
        }
    }

    //checks for a diagonal win (top left to bot right)
    if ((boardMatrix[0][0] !== '') && (boardMatrix[0][0] === boardMatrix[1][1]) && (boardMatrix[1][1] === boardMatrix[2][2])){
        alert(`${boardMatrix[0][0].playerName} wins the game!`);
    }

    //checks for a diagonal win (top right to bot left)
    if ((boardMatrix[0][2] !== '') && (boardMatrix[0][2] === boardMatrix[1][1]) && (boardMatrix[1][1] === boardMatrix[2][0])){
        alert(`${boardMatrix[0][2].playerName} wins the game!`)
    }
}

displayGameBoard(); 


    



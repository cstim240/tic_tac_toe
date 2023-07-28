const gameBoard = (function() { //IIFE - holds the 3x3 game board and status of game 
    'use strict';

    let boardMatrix = 
    [ 
    ['', '', ''],
    ['', '', ''], 
    ['', '', '']
    ];

    let isGameOver = false;
    let playerSymbol;

    function getBoardMatrix(){
        return boardMatrix;
    }

    function setCellValue(row, col, value){ //to make changes in the gameBoard and mark the board according to player symbol
        return boardMatrix[row][col] = value;
    }

    return {getBoardMatrix,
        isGameOver, playerSymbol ,setCellValue
    };
})();

function displayGameBoard(){
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

/*assignSymbol is short-hand (ES6), for the more verbose way
    it would be variable : function, in this case assignSymbol : assignSymbol
    */

    /*
    The object literal, when returned by the playerFactory function, 
    creates a player object with the specified properties and methods. 
    The shorthand notations help keep the code concise and more readable.
    */
   
const playerFactory = function(playerSymbol) {

    function getSymbol(){
        return playerSymbol;
    }

    return getSymbol
};

function choosePlayerSymbol(){
    const chosenSymbol = prompt("X goes first, would you like X or O?");
    const player1 = playerFactory(chosenSymbol);

    if (chosenSymbol == 'X'){
        const player2 = playerFactory("O");
    } else {
        const player2 = playerFactory("X");
    }
}

function handleClick(event){
    const clickedCell = event.target; //event.target represents the HTML element that triggerred the event. 
    const row = clickedCell.getAttribute('row'); //get the value of the attribute 'row' from the table cell <td>
    const column = clickedCell.getAttribute('column');

    const rowIndex = parseInt(row); //since the row var is stored as a string
    const colIndex = parseInt(column);

    const currentPlayer = getCurrentPlayer();
    const playerSymbol = currentPlayer.getPlayerSymbol();
    clickedCell.textContent = playerSymbol; //could be X or O
    gameBoard.setCellValue(rowIndex, colIndex, playerSymbol);
}

function getCurrentPlayer(){

}
displayGameBoard();


    



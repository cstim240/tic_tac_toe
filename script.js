const gameBoard = (function() { //IIFE - holds the 3x3 game board and status of game 
    'use strict';

    let boardMatrix = 
    [ 
    ['', '', ''],
    ['', '', ''], 
    ['', '', '']
    ];

    let isGameOver = false;

    function getBoardMatrix(){
        return boardMatrix;
    }

    function setCellValue(row, col, value){ //to make changes in the gameBoard and mark the board according to player symbol
        return boardMatrix[row][col] = value;
    }

    return {getBoardMatrix,
        isGameOver, setCellValue
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

displayGameBoard();




const playerFactory = function(playerType) {
    let playerSymbol;
    
    function assignSymbol() {
        if (playerType == 'user'){
            playerSymbol = 'X';
        } else {
            playerSymbol = 'O';
        } 
    }

    assignSymbol();
    return {assignSymbol, //when the property name and the variable or function name are the same, you can use the shorthand notation
        getPlayerSymbol(){
            return playerSymbol; //either X or O
        },
        getPlayerType(){
            return playerType; //could be user, or bot, or anything else
        }
        }
};
    /*assignSymbol is short-hand (ES6), for the more verbose way
    it would be variable : function, in this case assignSymbol : assignSymbol
    */

    /*
    The object literal, when returned by the playerFactory function, 
    creates a player object with the specified properties and methods. 
    The shorthand notations help keep the code concise and more readable.
    */


const user = playerFactory('user');
console.log(user.getPlayerSymbol());


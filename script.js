let gameBoard = (function() {
    'use strict';

    let boardMatrix = 
    [ ['', '', ''],
    ['', '', ''], 
    ['', '', '']];

    return boardMatrix;
})();
gameBoard();


const playerFactory = function(playerType) {
    let playerSymbol = '';
    
    let assignSymbol = (playerType) => {
        if (playerType == 'user'){
            playerSymbol = 'X';
        } else {
            playerSymbol = 'O';
        } 
    }

    return assignSymbol;
}

const user = playerFactory('user');
console.log(user.assignSymbol);

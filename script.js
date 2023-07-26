const gameBoard = (function() {
    'use strict';

    let boardMatrix = 
    [ ['', '', ''],
    ['', '', ''], 
    ['', '', '']];

    return {boardMatrix:boardMatrix};
    
})();
gameBoard();


const playerFactory = function(playerType) {
    let playerSymbol = '';
    
    let declareSymbol = (playerType) => {
        if (playerType == 'user'){
            playerSymbol = 'X';
        } else {
            playerSymbol = 'O';
        } 
    }

    return declareSymbol;
}

const user = playerFactory('user');
console.log(user.declareSymbol);

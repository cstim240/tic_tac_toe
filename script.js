const gameBoard = (function() {
    'use strict';

    let boardMatrix = 
    [ 
    ['', '', ''],
    ['', '', ''], 
    ['', '', '']
    ];

    return {boardMatrix:boardMatrix};
    
})();


const playerFactory = function(playerType) {
    let playerSymbol;
    
    function assignSymbol() {
        if (playerType == 'user'){
            playerSymbol = 'X';
        } else {
            playerSymbol = 'O';
        } 
    }

    function getPlayerSymbol(){
        return playerSymbol; //either X or O
    }

    function getPlayerType(){
        return playerType; //could be user, or bot, or anything else
    }

    assignSymbol();
    return {assignSymbol: assignSymbol,
        getPlayerSymbol: getPlayerSymbol,
        getPlayerType: getPlayerType
    };
}

const user = playerFactory('user');
console.log(user.getPlayerSymbol());


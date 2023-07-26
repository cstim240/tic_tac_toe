const gameBoard = (function() {
    'use strict';

    let boardMatrix = 
    [ 
    ['', '', ''],
    ['', '', ''], 
    ['', '', '']
    ];

    let isGameOver = false;

    return {boardMatrix:boardMatrix,
        isGameOver
    };
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


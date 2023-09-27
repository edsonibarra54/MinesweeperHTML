var tam = 10;
var board;

function begin(){
    //Creating board
    board = new Array(tam);
    for(var i = 0 ; i < tam ; i++){
        board[i] = new Array(tam);
    }

    //Initializing board in cero
    for(var i = 0 ; i < tam ; i++){
        for(var j = 0 ; j < tam ; j++){
            board[i][j] = 0;
        }
    }

    printBoard();
}

function printBoard(){
    for(var i = 0 ; i < tam ; i++){
        console.log(board[i])
    }
}

function flipBox(posI, posJ){
    
}
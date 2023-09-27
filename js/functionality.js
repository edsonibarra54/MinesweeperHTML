var tam = 10;
var mines = 10;
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
    addRandomMines();
}

function printBoard(){
    for(var i = 0 ; i < tam ; i++){
        console.log(board[i])
    }
}

function addRandomMines(){
    var i = 0;
    var j = 0;

    for(var cont = 0 ; cont < mines ; cont++){
        i = Math.floor(Math.random()*10);
        j = Math.floor(Math.random()*10);

        if(board[i][j] == -1){
            cont--;
        }
        else{
            board[i][j] = -1;
        }
    }
}

function flipBox(posI, posJ){
    
}
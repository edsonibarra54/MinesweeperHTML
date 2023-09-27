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

    addRandomMines();
    printBoard();
}

function printBoard(){
    for(var i = 0 ; i < tam ; i++){
        console.log(board[i])
    }
}

function increaseAround(posI, posJ){
    //Top
    if(posJ - 1 >= 0)
        if(board[posI][posJ-1] != -1)
            board[posI][posJ-1]++;
    
    //Bottom
    if(posJ + 1 < tam)
        if(board[posI][posJ+1] != -1)
            board[posI][posJ+1]++;

    //Left
    if(posI - 1 >= 0)
        if(board[posI-1][posJ] != -1)
            board[posI-1][posJ]++;

    //Right
    if(posI + 1 < tam)
        if(board[posI+1][posJ] != -1)
            board[posI+1][posJ]++;

    //Top left
    if(posI - 1 >= 0 && posJ - 1 >= 0)
        if(board[posI-1][posJ-1] != -1)
            board[posI-1][posJ-1]++;

    //Top right
    if(posI + 1 < tam && posJ - 1 >= 0)
        if(board[posI+1][posJ-1] != -1)
            board[posI+1][posJ-1]++;

    //Bottom left
    if(posI - 1 >= 0 && posJ + 1 < tam)
        if(board[posI-1][posJ+1] != -1)
            board[posI-1][posJ+1]++;

    //Bottom right
    if(posI + 1 < tam && posJ + 1 < tam)
        if(board[posI+1][posJ+1] != -1)
            board[posI+1][posJ+1]++;
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
            increaseAround(i, j);
        }
    }
}

function flipBox(posI, posJ){
    if(board[posI][posJ] == -1){
        alert("You lost!");
    }
    else{
        document.getElementById(posI+posJ).innerHTML = board[posI][posJ]
    }
}
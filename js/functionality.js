var tam = 10;
var mines = 10;
var board;

var name;
var timer;
var seconds = 0;

function begin(){
    name = prompt("Whats your name?")

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
    document.getElementsByClassName("name")[0].innerHTML = name;
    timer = window.setInterval(
        function(){
            seconds++;
            document.getElementsByClassName("time")[0].innerHTML = seconds
        }, 1000
    );
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
        for(var i = 0 ; i < tam ; i++)
            for(var j = 0 ; j < tam ; j++)
                if( board[i][j] == -1)
                    document.getElementById(i.toString()+j.toString()).innerHTML = "<img src='img/mine.png' />";
        
        setTimeout(function() {
            if (confirm("You lost!")) {
                location.reload();
            }
        }, 200);
    }
    else{
        if(board[posI][posJ] != 1000){
            document.getElementById(posI+posJ).innerHTML = board[posI][posJ]
            board[posI][posJ] = 1000;
        }

        if(won() == true){
            alert("You won!");
        }
    }
}

function won(){
    for(var i = 0 ; i < tam ; i++)
        for(var j = 0 ; j < tam ; j++)
            if(board[i][j] != 1000 && board[i][j] != -1)
                return false;
    return true;
}